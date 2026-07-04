"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchProducts } from "@/lib/catalog";
import { formatMYR } from "@/lib/utils";
import { copy } from "@/lib/copy";
import { ecommerce } from "@/lib/analytics";
import { Media, accentForCategory } from "@/components/media/Media";
import { IconSearch, IconClose } from "@/components/ui/icons";
import { useDialogBehaviour } from "@/hooks/useDialogBehaviour";

const popular = [
  { label: "Buah tin segar", href: "/categories/fresh-figs" },
  { label: "Anak pokok tin", href: "/categories/fig-trees" },
  { label: "Jem tin", href: "/products/fig-jam" },
  { label: "Teh daun tin", href: "/products/fig-leaf-tea" },
  { label: "Hamper hadiah", href: "/categories/gift-hampers" },
];

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  useDialogBehaviour(open, onClose);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) inputRef.current?.focus();
    else setQ("");
  }, [open]);

  if (!open) return null;

  const term = q.trim();
  const results = term.length > 1 ? searchProducts(term).slice(0, 5) : [];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!term) return;
    ecommerce.search(term);
    onClose();
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Tutup carian"
        onClick={onClose}
        tabIndex={-1}
        className="absolute inset-0 h-full w-full cursor-default bg-ink-900/45 animate-fade-in"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={copy.common.searchProducts}
        className="absolute inset-x-0 top-0 border-b border-line-200 bg-paper shadow-lg animate-rise-in"
      >
        <div className="container-page py-5">
          <form onSubmit={submit} className="flex items-center gap-3">
            <IconSearch className="shrink-0 text-ink-500" />
            <input
              ref={inputRef}
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={copy.search.placeholder}
              aria-label={copy.common.searchProducts}
              className="h-14 min-w-0 flex-1 bg-transparent text-[1.25rem] text-ink-900 placeholder:text-ink-500 focus:outline-none"
            />
            <button
              type="submit"
              className="hidden min-h-12 items-center rounded-md bg-berry-700 px-6 font-semibold text-white hover:bg-berry-800 sm:inline-flex"
            >
              {copy.common.search}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup carian"
              className="grid size-12 place-items-center rounded-md text-ink-800 hover:bg-berry-50"
            >
              <IconClose />
            </button>
          </form>

          <div className="mt-5">
            {results.length > 0 ? (
              <ul className="flex flex-col gap-1">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/products/${p.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-4 rounded-lg p-2 hover:bg-berry-50"
                    >
                      <Media
                        image={p.images[0]}
                        ratio="1 / 1"
                        rounded="md"
                        accent={accentForCategory(p.category)}
                        sizes="56px"
                        className="w-14 shrink-0"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium text-ink-900">{p.name}</span>
                        <span className="block truncate text-small text-ink-500">{p.subtitle}</span>
                      </span>
                      <span className="shrink-0 font-semibold text-ink-900">
                        {p.price > 0 ? formatMYR(p.price) : "—"}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={submit}
                    className="mt-1 inline-flex min-h-11 items-center px-2 font-semibold text-berry-700 hover:underline"
                  >
                    {copy.search.seeAll(term)}
                  </button>
                </li>
              </ul>
            ) : term.length > 1 ? (
              <p className="px-2 text-ink-700">
                {copy.search.noResults(term)}{" "}
                <Link href="/shop" onClick={onClose} className="font-semibold text-berry-700 hover:underline">
                  {copy.search.browseAll}
                </Link>
              </p>
            ) : (
              <div className="px-2">
                <p className="eyebrow mb-3">{copy.search.popular}</p>
                <ul className="flex flex-wrap gap-2">
                  {popular.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={onClose}
                        className="inline-flex min-h-11 items-center rounded-full border border-line-300 px-4 text-[1.02rem] text-ink-800 hover:border-berry-400 hover:bg-berry-50"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
