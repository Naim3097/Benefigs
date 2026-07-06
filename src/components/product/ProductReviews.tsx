import type { Product } from "@/lib/types";
import { Container, Section } from "@/components/ui/Section";
import { Stars } from "@/components/ui/Stars";
import { copy } from "@/lib/copy";
import { formatDate } from "@/lib/utils";
import { IconCheck } from "@/components/ui/icons";

export function ProductReviews({ product }: { product: Product }) {
  const reviews = product.reviews ?? [];

  return (
    <Section id="reviews" tone="surface" space="lg" ariaLabel={copy.product.reviewsHeading}>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="text-h2">{copy.product.reviewsHeading}</h2>
            {product.reviewCount > 0 ? (
              <div className="mt-6 flex items-center gap-4">
                <span className="font-display text-[3.25rem] font-medium leading-none text-ink-900">
                  {product.rating.toFixed(1)}
                </span>
                <div>
                  <Stars rating={product.rating} size={22} />
                  <p className="mt-1 text-ink-500">{copy.product.reviews(product.reviewCount)}</p>
                </div>
              </div>
            ) : null}
          </div>

          <div>
            {reviews.length ? (
              <ul className="flex flex-col divide-y divide-line-200">
                {reviews.map((r) => (
                  <li key={r.id} className="py-6 first:pt-0">
                    <div className="flex items-center justify-between gap-3">
                      <Stars rating={r.rating} size={18} />
                      <span className="text-small text-ink-500">{formatDate(r.date)}</span>
                    </div>
                    <h3 className="mt-3 text-[1.2rem] font-medium text-ink-900">{r.title}</h3>
                    <p className="mt-2 text-ink-700">{r.body}</p>
                    <p className="mt-3 flex flex-wrap items-center gap-x-2 text-small text-ink-500">
                      <span className="font-medium text-ink-700">{r.author}</span>
                      {r.location ? <span>· {r.location}</span> : null}
                      {r.verified ? (
                        <span className="ml-1 inline-flex items-center gap-1 text-leaf-700">
                          <IconCheck width={16} height={16} /> Pembelian disahkan
                        </span>
                      ) : null}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-lead text-ink-700">
                Belum ada ulasan. Jadilah yang pertama berkongsi pendapat anda tentang produk ini.
              </p>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
