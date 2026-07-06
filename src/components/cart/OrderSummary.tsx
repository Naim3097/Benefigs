"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cart";
import { computeTotals } from "@/lib/pricing";
import { formatMYR, cn } from "@/lib/utils";
import { copy } from "@/lib/copy";
import { ecommerce } from "@/lib/analytics";
import { buttonClasses } from "@/components/ui/Button";
import { IconClose } from "@/components/ui/icons";

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-ink-700">{label}</dt>
      <dd className={cn("font-medium", accent ? "text-leaf-700" : "text-ink-900")}>{value}</dd>
    </div>
  );
}

export function OrderSummary({
  showCoupon = true,
  checkout,
}: {
  showCoupon?: boolean;
  checkout?: { href: string; label: string };
}) {
  const { lines, subtotal, coupon, applyCoupon, removeCoupon } = useCart();
  const totals = computeTotals(subtotal, coupon);
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const onApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    const r = applyCoupon(code);
    setMsg({ ok: r.ok, text: r.message });
    if (r.ok) setCode("");
  };

  return (
    <div className="rounded-2xl border border-line-200 bg-surface p-6">
      <h2 className="text-h3">{copy.cart.orderSummary}</h2>

      {showCoupon ? (
        <form onSubmit={onApply} className="mt-5">
          <label htmlFor="coupon-code" className="sr-only">
            Kod diskaun
          </label>
          <div className="flex gap-2">
            <input
              id="coupon-code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Kod diskaun"
              className="h-12 min-w-0 flex-1 rounded-md border border-line-300 bg-surface px-4 text-ink-900 placeholder:text-ink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-berry-500"
            />
            <button
              type="submit"
              className="min-h-12 shrink-0 rounded-md border-2 border-berry-700 px-5 font-semibold text-berry-800 hover:bg-berry-50"
            >
              Guna
            </button>
          </div>
          {msg ? (
            <p className={cn("mt-2 text-small", msg.ok ? "text-leaf-700" : "text-danger-600")} role="status">
              {msg.text}
            </p>
          ) : null}
        </form>
      ) : null}

      {coupon ? (
        <div className="mt-3 flex items-center justify-between rounded-md bg-leaf-50 px-3 py-2 text-leaf-800">
          <span className="font-medium">
            {coupon.code} — {coupon.label}
          </span>
          <button type="button" onClick={removeCoupon} aria-label={`Buang kod ${coupon.code}`} className="grid size-8 place-items-center rounded hover:bg-leaf-100">
            <IconClose width={18} height={18} />
          </button>
        </div>
      ) : null}

      <dl className="mt-6 space-y-3 border-t border-line-200 pt-5">
        <Row label={copy.cart.subtotal} value={formatMYR(totals.subtotal)} />
        {totals.discount > 0 ? <Row label="Diskaun" value={`- ${formatMYR(totals.discount)}`} accent /> : null}
        <Row label="Penghantaran" value={totals.shipping === 0 ? "Percuma" : formatMYR(totals.shipping)} />
      </dl>

      <div className="mt-4 flex items-baseline justify-between border-t border-line-200 pt-4">
        <span className="text-[1.15rem] font-medium">Jumlah</span>
        <span className="text-[1.6rem] font-semibold text-ink-900">{formatMYR(totals.total)}</span>
      </div>

      {checkout && lines.length > 0 ? (
        <Link
          href={checkout.href}
          onClick={() => ecommerce.beginCheckout(lines, totals.total)}
          className={cn(buttonClasses({ variant: "primary", size: "lg", full: true }), "mt-6")}
        >
          {checkout.label}
        </Link>
      ) : null}

      <p className="mt-3 text-center text-small text-ink-500">{copy.cart.secureNote}</p>
    </div>
  );
}
