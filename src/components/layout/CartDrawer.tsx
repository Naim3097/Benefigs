"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCart, lineKey } from "@/context/cart";
import { site } from "@/lib/site";
import { copy } from "@/lib/copy";
import { formatMYR, cn, clamp } from "@/lib/utils";
import { ecommerce } from "@/lib/analytics";
import { Media, accentForCategory } from "@/components/media/Media";
import { FigMotif } from "@/components/media/FigMotif";
import { IconClose, IconPlus, IconMinus, IconTruck, IconShield } from "@/components/ui/icons";
import { buttonClasses } from "@/components/ui/Button";
import { useDialogBehaviour } from "@/hooks/useDialogBehaviour";
import type { CartLine } from "@/lib/types";

export function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, itemCount, setQty, removeItem } = useCart();
  useDialogBehaviour(isOpen, closeCart);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  const threshold = site.policy.freeShippingThreshold;
  const remaining = Math.max(0, threshold - subtotal);
  const progress = clamp((subtotal / threshold) * 100, 0, 100);

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label={copy.common.closeCart}
        onClick={closeCart}
        tabIndex={-1}
        className="absolute inset-0 h-full w-full cursor-default bg-ink-900/45 animate-fade-in"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className="absolute inset-y-0 right-0 flex w-[92%] max-w-md flex-col bg-paper shadow-lg animate-slide-in-right"
      >
        <div className="flex items-center justify-between border-b border-line-200 px-5 py-4">
          <h2 className="text-[1.35rem] font-medium">
            {copy.cart.title}
            {itemCount > 0 ? <span className="text-ink-500"> ({itemCount})</span> : null}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeCart}
            aria-label={copy.common.closeCart}
            className="grid size-12 place-items-center rounded-md text-ink-800 hover:bg-berry-50"
          >
            <IconClose />
          </button>
        </div>

        {lines.length === 0 ? (
          <EmptyCart onClose={closeCart} />
        ) : (
          <>
            {/* Free shipping progress */}
            <div className="border-b border-line-200 bg-paper-deep px-5 py-3">
              {remaining > 0 ? (
                <p className="text-small text-ink-700">
                  Anda <strong className="text-ink-900">{formatMYR(remaining)}</strong> lagi untuk penghantaran percuma.
                </p>
              ) : (
                <p className="flex items-center gap-2 text-small font-medium text-leaf-700">
                  <IconTruck width={18} height={18} /> {copy.cart.freeShipUnlocked}
                </p>
              )}
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-line-200">
                <div className="h-full rounded-full bg-leaf-600 transition-[width] duration-500 ease-soft" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <ul className="flex-1 divide-y divide-line-200 overflow-y-auto px-5">
              {lines.map((line) => (
                <CartRow key={lineKey(line.productId, line.variantId)} line={line} setQty={setQty} removeItem={removeItem} />
              ))}
            </ul>

            <div className="border-t border-line-200 px-5 py-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[1.1rem] font-medium">{copy.cart.subtotal}</span>
                <span className="text-[1.4rem] font-semibold">{formatMYR(subtotal)}</span>
              </div>
              <p className="mt-1 text-small text-ink-500">{copy.cart.shippingNote}</p>

              <Link
                href="/checkout"
                onClick={() => {
                  ecommerce.beginCheckout(lines, subtotal);
                  closeCart();
                }}
                className={cn(buttonClasses({ variant: "primary", size: "lg", full: true }), "mt-4")}
              >
                {copy.cart.checkout}
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 min-h-12 w-full rounded-md text-[1.02rem] font-medium text-berry-700 hover:bg-berry-50"
              >
                {copy.cart.continueShopping}
              </button>

              <p className="mt-3 flex items-center justify-center gap-2 text-small text-ink-500">
                <IconShield width={18} height={18} className="text-leaf-600" /> {copy.cart.secureNote}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CartRow({
  line,
  setQty,
  removeItem,
}: {
  line: CartLine;
  setQty: (key: string, qty: number) => void;
  removeItem: (line: CartLine) => void;
}) {
  const key = lineKey(line.productId, line.variantId);
  return (
    <li className="flex gap-4 py-4">
      <Link href={`/products/${line.slug}`} className="w-20 shrink-0">
        <Media image={line.image} ratio="1 / 1" rounded="md" accent={accentForCategory("")} sizes="80px" />
      </Link>
      <div className="min-w-0 flex-1">
        <div className="flex justify-between gap-3">
          <div className="min-w-0">
            <Link href={`/products/${line.slug}`} className="block font-medium text-ink-900 hover:text-berry-700">
              {line.name}
            </Link>
            {line.variantLabel ? <p className="text-small text-ink-500">{line.variantLabel}</p> : null}
          </div>
          <p className="shrink-0 font-semibold text-ink-900">{formatMYR(line.price * line.quantity)}</p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="inline-flex items-center rounded-md border border-line-300">
            <button
              type="button"
              onClick={() => setQty(key, line.quantity - 1)}
              disabled={line.quantity <= 1}
              aria-label={copy.product.decreaseQtyNamed(line.name)}
              className="grid size-10 place-items-center rounded-l-md text-ink-800 hover:bg-berry-50 disabled:opacity-40"
            >
              <IconMinus width={18} height={18} />
            </button>
            <span className="min-w-10 text-center font-semibold" aria-live="polite">
              {line.quantity}
            </span>
            <button
              type="button"
              onClick={() => setQty(key, line.quantity + 1)}
              aria-label={copy.product.increaseQtyNamed(line.name)}
              className="grid size-10 place-items-center rounded-r-md text-ink-800 hover:bg-berry-50"
            >
              <IconPlus width={18} height={18} />
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(line)}
            className="min-h-10 rounded-md px-2 text-small font-medium text-ink-500 hover:text-danger-600 hover:underline"
          >
            {copy.cart.remove}
          </button>
        </div>
      </div>
    </li>
  );
}

function EmptyCart({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
      <div className="relative size-28 overflow-hidden rounded-full">
        <FigMotif motif="fig-whole" accent="berry" />
      </div>
      <div>
        <h3 className="text-h3">{copy.cart.empty}</h3>
        <p className="mt-2 text-ink-700">{copy.cart.emptyBlurb}</p>
      </div>
      <Link href="/shop" onClick={onClose} className={buttonClasses({ variant: "primary", size: "lg" })}>
        {copy.cart.startShopping}
      </Link>
    </div>
  );
}
