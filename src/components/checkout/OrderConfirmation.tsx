"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/cart";
import { computeTotals, type OrderTotals } from "@/lib/pricing";
import { formatMYR, cn } from "@/lib/utils";
import { ecommerce } from "@/lib/analytics";
import type { CartLine } from "@/lib/types";
import { Container, Section } from "@/components/ui/Section";
import { buttonClasses } from "@/components/ui/Button";
import { IconCheck, IconTruck } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function OrderConfirmation() {
  const params = useSearchParams();
  const orderId = params.get("order") ?? "";
  const status = params.get("status") ?? "paid";
  const isSim = params.get("sim") === "1";

  const { lines, subtotal, coupon, hydrated, clear } = useCart();
  const [snapshot, setSnapshot] = useState<{ lines: CartLine[]; totals: OrderTotals } | null>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!hydrated || done.current) return;
    done.current = true;
    if (lines.length > 0) {
      const totals = computeTotals(subtotal, coupon);
      setSnapshot({ lines: [...lines], totals });
      if (orderId) {
        ecommerce.purchase({ id: orderId, value: totals.total, shipping: totals.shipping, lines });
      }
      clear();
    }
  }, [hydrated, lines, subtotal, coupon, orderId, clear]);

  const paid = status === "paid";

  return (
    <Section space="lg">
      <Container size="prose" className="text-center">
        <span
          className={cn(
            "mx-auto grid size-20 place-items-center rounded-full",
            paid ? "bg-leaf-50 text-leaf-700" : "bg-honey-100 text-honey-600",
          )}
        >
          <IconCheck width={44} height={44} />
        </span>

        <h1 className="mt-6 text-h1">{paid ? "Terima kasih atas pesanan anda!" : "Pembayaran belum selesai"}</h1>

        {orderId ? (
          <p className="mt-3 text-lead text-ink-700">
            Nombor pesanan anda ialah <strong className="text-ink-900">{orderId}</strong>.
          </p>
        ) : null}

        {paid ? (
          <p className="mt-2 text-ink-700">
            Kami telah menghantar pengesahan ke e-mel anda. Kami akan mula menyediakan pesanan anda dengan segera.
          </p>
        ) : (
          <p className="mt-2 text-ink-700">
            Pembayaran anda belum disahkan. Anda boleh mencuba semula pada bila-bila masa.
          </p>
        )}

        {isSim ? (
          <p className="mt-4 inline-block rounded-md bg-paper-deep px-3 py-1.5 text-small text-ink-500">
            Mod demo — tiada bayaran sebenar dikenakan. Lengkapkan integrasi Lean.X untuk pembayaran langsung.
          </p>
        ) : null}

        {snapshot ? (
          <div className="mt-8 rounded-2xl border border-line-200 bg-surface p-6 text-left">
            <h2 className="text-h3">Ringkasan pesanan</h2>
            <ul className="mt-4 divide-y divide-line-200 border-y border-line-200">
              {snapshot.lines.map((l, i) => (
                <li key={i} className="flex items-center justify-between gap-3 py-3">
                  <span className="text-ink-800">
                    {l.name}
                    {l.variantLabel ? ` — ${l.variantLabel}` : ""} <span className="text-ink-500">× {l.quantity}</span>
                  </span>
                  <span className="shrink-0 font-medium text-ink-900">{formatMYR(l.price * l.quantity)}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-4 space-y-2">
              <div className="flex justify-between">
                <dt className="text-ink-700">Jumlah kecil</dt>
                <dd className="font-medium">{formatMYR(snapshot.totals.subtotal)}</dd>
              </div>
              {snapshot.totals.discount > 0 ? (
                <div className="flex justify-between">
                  <dt className="text-ink-700">Diskaun</dt>
                  <dd className="font-medium text-leaf-700">- {formatMYR(snapshot.totals.discount)}</dd>
                </div>
              ) : null}
              <div className="flex justify-between">
                <dt className="text-ink-700">Penghantaran</dt>
                <dd className="font-medium">
                  {snapshot.totals.shipping === 0 ? "Percuma" : formatMYR(snapshot.totals.shipping)}
                </dd>
              </div>
              <div className="flex justify-between border-t border-line-200 pt-2 text-[1.15rem]">
                <dt className="font-medium">Jumlah</dt>
                <dd className="font-semibold">{formatMYR(snapshot.totals.total)}</dd>
              </div>
            </dl>
          </div>
        ) : null}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/shop" className={buttonClasses({ variant: "primary", size: "lg" })}>
            Teruskan membeli-belah
          </Link>
          {!paid ? (
            <Link href="/checkout" className={buttonClasses({ variant: "outline", size: "lg" })}>
              Cuba bayar semula
            </Link>
          ) : (
            <Link href="/" className={buttonClasses({ variant: "outline", size: "lg" })}>
              Ke laman utama
            </Link>
          )}
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-small text-ink-500">
          <IconTruck width={18} height={18} className="text-leaf-600" />
          Soalan tentang pesanan anda? Hubungi kami di {site.salesEmail}.
        </p>
      </Container>
    </Section>
  );
}
