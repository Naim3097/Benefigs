"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { CartLine, Coupon, Product, Variant } from "@/lib/types";
import { findCoupon } from "@/lib/coupons";
import { formatMYR } from "@/lib/utils";
import { ecommerce } from "@/lib/analytics";

const STORAGE_KEY = "benefigs.cart.v1";
const COUPON_KEY = "benefigs.coupon.v1";

export function lineKey(productId: string, variantId?: string) {
  return variantId ? `${productId}:${variantId}` : productId;
}
const keyOf = (l: CartLine) => lineKey(l.productId, l.variantId);

type State = { lines: CartLine[]; hydrated: boolean };
type Action =
  | { type: "hydrate"; lines: CartLine[] }
  | { type: "add"; line: CartLine }
  | { type: "setQty"; key: string; qty: number }
  | { type: "remove"; key: string }
  | { type: "clear" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return { lines: action.lines, hydrated: true };
    case "add": {
      const k = keyOf(action.line);
      const exists = state.lines.some((l) => keyOf(l) === k);
      const lines = exists
        ? state.lines.map((l) =>
            keyOf(l) === k ? { ...l, quantity: l.quantity + action.line.quantity } : l,
          )
        : [...state.lines, action.line];
      return { ...state, lines };
    }
    case "setQty":
      return {
        ...state,
        lines: state.lines.map((l) =>
          keyOf(l) === action.key ? { ...l, quantity: Math.max(1, Math.min(99, action.qty)) } : l,
        ),
      };
    case "remove":
      return { ...state, lines: state.lines.filter((l) => keyOf(l) !== action.key) };
    case "clear":
      return { ...state, lines: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  lines: CartLine[];
  hydrated: boolean;
  itemCount: number;
  subtotal: number;
  coupon: Coupon | null;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, opts?: { variant?: Variant; quantity?: number; silent?: boolean }) => void;
  setQty: (key: string, qty: number) => void;
  removeItem: (line: CartLine) => void;
  clear: () => void;
  applyCoupon: (code: string) => { ok: boolean; message: string };
  removeCoupon: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [], hydrated: false });
  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState<Coupon | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      dispatch({ type: "hydrate", lines: Array.isArray(parsed) ? parsed : [] });
    } catch {
      dispatch({ type: "hydrate", lines: [] });
    }
    try {
      const rawC = localStorage.getItem(COUPON_KEY);
      if (rawC) {
        const c = findCoupon(JSON.parse(rawC)?.code ?? "");
        if (c) setCoupon(c);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!state.hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      /* storage unavailable — cart still works in-memory */
    }
  }, [state.lines, state.hydrated]);

  const itemCount = useMemo(() => state.lines.reduce((n, l) => n + l.quantity, 0), [state.lines]);
  const subtotal = useMemo(
    () => state.lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
    [state.lines],
  );

  useEffect(() => {
    if (!state.hydrated) return;
    try {
      if (coupon) localStorage.setItem(COUPON_KEY, JSON.stringify({ code: coupon.code }));
      else localStorage.removeItem(COUPON_KEY);
    } catch {
      /* ignore */
    }
  }, [coupon, state.hydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback<CartContextValue["addItem"]>((product, opts) => {
    const variant = opts?.variant;
    const line: CartLine = {
      productId: product.id,
      slug: product.slug,
      name: product.name,
      variantId: variant?.id,
      variantLabel: variant?.label,
      unit: variant?.unit ?? product.unit,
      price: variant?.price ?? product.price,
      image: product.images[0],
      quantity: opts?.quantity ?? 1,
      availability: variant?.availability ?? product.availability,
    };
    dispatch({ type: "add", line });
    ecommerce.addToCart(line);
    if (!opts?.silent) setIsOpen(true);
  }, []);

  const setQty = useCallback((key: string, qty: number) => dispatch({ type: "setQty", key, qty }), []);

  const removeItem = useCallback((line: CartLine) => {
    ecommerce.removeFromCart(line);
    dispatch({ type: "remove", key: keyOf(line) });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: "clear" });
    setCoupon(null);
  }, []);

  const applyCoupon = useCallback<CartContextValue["applyCoupon"]>(
    (code) => {
      const c = findCoupon(code);
      if (!c) return { ok: false, message: "Kod diskaun tidak sah." };
      if (c.minSpend && subtotal < c.minSpend) {
        return { ok: false, message: `Perlu perbelanjaan minimum ${formatMYR(c.minSpend)}.` };
      }
      setCoupon(c);
      return { ok: true, message: c.description };
    },
    [subtotal],
  );

  const removeCoupon = useCallback(() => setCoupon(null), []);

  const value: CartContextValue = {
    lines: state.lines,
    hydrated: state.hydrated,
    itemCount,
    subtotal,
    coupon,
    isOpen,
    openCart,
    closeCart,
    addItem,
    setQty,
    removeItem,
    clear,
    applyCoupon,
    removeCoupon,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}
