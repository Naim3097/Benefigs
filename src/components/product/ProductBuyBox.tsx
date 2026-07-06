"use client";

import { useEffect, useState } from "react";
import type { Product, Variant } from "@/lib/types";
import { availabilityLabel } from "@/lib/availability";
import { ecommerce } from "@/lib/analytics";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";
import { Price } from "@/components/ui/Price";
import { Stars } from "@/components/ui/Stars";
import { Badge, badgeTone } from "@/components/ui/Badge";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { AddToCartButton } from "./AddToCartButton";
import { ButtonLink } from "@/components/ui/Button";
import { WishlistButton } from "./WishlistButton";
import { IconTruck, IconLeaf, IconShield } from "@/components/ui/icons";

const availTone: Record<string, string> = {
  success: "bg-success-50 text-success-700",
  warning: "bg-honey-100 text-honey-600",
  info: "bg-info-50 text-info-600",
  danger: "bg-danger-50 text-danger-700",
};

export function ProductBuyBox({ product }: { product: Product }) {
  const firstSelectable =
    product.variants?.find((v) => v.availability !== "out_of_stock") ?? product.variants?.[0];
  const [variant, setVariant] = useState<Variant | undefined>(firstSelectable);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    ecommerce.viewItem(product);
  }, [product]);

  const price = variant?.price ?? product.price;
  const availability = variant?.availability ?? product.availability;
  const avail = availabilityLabel(availability);
  const isQuote = product.price <= 0;
  const soldOut = availability === "out_of_stock";

  return (
    <div>
      {product.badges?.length ? (
        <div className="mb-3 flex flex-wrap gap-2">
          {product.badges.map((b) => (
            <Badge key={b} tone={badgeTone(b)}>
              {b}
            </Badge>
          ))}
        </div>
      ) : null}

      <h1 className="text-h1">{product.name}</h1>
      <p className="mt-2 text-lead text-ink-700">{product.subtitle}</p>

      {product.reviewCount > 0 ? (
        <div className="mt-4 flex items-center gap-2">
          <Stars rating={product.rating} size={20} />
          <a href="#reviews" className="link-underline text-ink-700">
            {copy.product.reviews(product.reviewCount)}
          </a>
        </div>
      ) : null}

      <div className="mt-5">
        <Price price={price} compareAt={product.compareAtPrice} unit={product.unit} size="lg" />
      </div>

      <p className="mt-3">
        <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-[0.9rem] font-semibold", availTone[avail.tone])}>
          {avail.label}
        </span>
      </p>

      {product.variants?.length ? (
        <fieldset className="mt-6">
          <legend className="text-[1.05rem] font-semibold text-ink-900">{copy.product.option}</legend>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {product.variants.map((v) => {
              const out = v.availability === "out_of_stock";
              const selected = variant?.id === v.id;
              return (
                <label
                  key={v.id}
                  className={cn(
                    "inline-flex min-h-12 cursor-pointer items-center rounded-md border-2 px-4 text-[1.02rem] font-medium transition-colors",
                    selected ? "border-berry-700 bg-berry-50 text-berry-800" : "border-line-300 text-ink-800 hover:border-berry-300",
                    out && "cursor-not-allowed opacity-45",
                  )}
                >
                  <input
                    type="radio"
                    name="variant"
                    className="sr-only"
                    checked={selected}
                    disabled={out}
                    onChange={() => setVariant(v)}
                  />
                  {v.label}
                  {out ? " (habis)" : ""}
                </label>
              );
            })}
          </div>
        </fieldset>
      ) : null}

      <div className="mt-7 flex flex-col gap-3">
        {isQuote ? (
          <ButtonLink href="/contact" size="lg" full>
            {copy.product.requestQuote}
          </ButtonLink>
        ) : soldOut ? (
          <button
            type="button"
            disabled
            className="inline-flex min-h-14 w-full items-center justify-center rounded-md bg-line-200 px-8 text-[1.15rem] font-semibold text-ink-500"
          >
            {copy.availability.out_of_stock}
          </button>
        ) : (
          <div className="flex flex-col gap-3 sm:flex-row">
            <QuantityStepper block value={qty} onChange={setQty} className="sm:w-36 sm:flex-none" />
            <AddToCartButton product={product} variant={variant} quantity={qty} size="lg" full className="flex-1" />
          </div>
        )}
        <WishlistButton product={product} withLabel />
      </div>

      <ul className="mt-8 flex flex-col gap-3 border-t border-line-200 pt-6 text-ink-700">
        <li className="flex items-center gap-3">
          <IconTruck width={22} height={22} className="shrink-0 text-leaf-600" />
          {copy.trust.shipping}
        </li>
        <li className="flex items-center gap-3">
          <IconLeaf width={22} height={22} className="shrink-0 text-leaf-600" />
          {copy.trust.mygap}
        </li>
        <li className="flex items-center gap-3">
          <IconShield width={22} height={22} className="shrink-0 text-leaf-600" />
          Pembayaran selamat · Jaminan segar 7 hari
        </li>
      </ul>
    </div>
  );
}
