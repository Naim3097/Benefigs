"use client";

import Link from "next/link";
import { useCart, lineKey } from "@/context/cart";
import { Container, Section } from "@/components/ui/Section";
import { Media } from "@/components/media/Media";
import { FigMotif } from "@/components/media/FigMotif";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { OrderSummary } from "./OrderSummary";
import { buttonClasses } from "@/components/ui/Button";
import { formatMYR, cn } from "@/lib/utils";
import { copy } from "@/lib/copy";

export function CartView() {
  const { lines, hydrated, setQty, removeItem } = useCart();

  if (hydrated && lines.length === 0) {
    return (
      <Section space="lg">
        <Container className="flex flex-col items-center py-10 text-center">
          <div className="relative size-32 overflow-hidden rounded-full">
            <FigMotif motif="fig-whole" accent="berry" />
          </div>
          <h1 className="mt-6 text-h1">{copy.cart.empty}</h1>
          <p className="mt-3 max-w-md text-lead text-ink-700">{copy.cart.emptyBlurb}</p>
          <Link href="/shop" className={cn(buttonClasses({ variant: "primary", size: "lg" }), "mt-7")}>
            {copy.cart.startShopping}
          </Link>
        </Container>
      </Section>
    );
  }

  return (
    <Section space="lg">
      <Container>
        <h1 className="text-h1">{copy.cart.title}</h1>

        {!hydrated ? (
          <p className="mt-8 text-ink-500">{copy.common.loading}</p>
        ) : (
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_0.9fr] lg:gap-14">
            <ul className="divide-y divide-line-200 border-y border-line-200">
              {lines.map((line) => {
                const key = lineKey(line.productId, line.variantId);
                return (
                  <li key={key} className="flex gap-4 py-6 sm:gap-6">
                    <Link href={`/products/${line.slug}`} className="w-24 shrink-0 sm:w-28">
                      <Media image={line.image} ratio="1 / 1" rounded="lg" sizes="112px" />
                    </Link>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex justify-between gap-4">
                        <div className="min-w-0">
                          <Link
                            href={`/products/${line.slug}`}
                            className="text-[1.2rem] font-medium text-ink-900 hover:text-berry-700"
                          >
                            {line.name}
                          </Link>
                          {line.variantLabel ? <p className="text-small text-ink-500">{line.variantLabel}</p> : null}
                          <p className="text-small text-ink-500">{line.unit}</p>
                        </div>
                        <p className="shrink-0 text-[1.15rem] font-semibold text-ink-900">
                          {formatMYR(line.price * line.quantity)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <QuantityStepper value={line.quantity} onChange={(q) => setQty(key, q)} />
                        <button
                          type="button"
                          onClick={() => removeItem(line)}
                          className="min-h-11 rounded-md px-2 font-medium text-ink-500 hover:text-danger-600 hover:underline"
                        >
                          {copy.cart.remove}
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <OrderSummary checkout={{ href: "/checkout", label: copy.cart.checkout }} />
              <Link href="/shop" className={cn(buttonClasses({ variant: "ghost", full: true }), "mt-3")}>
                {copy.cart.continueShopping}
              </Link>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
