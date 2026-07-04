"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { primaryNav, categoryLinks } from "@/lib/navigation";
import { site } from "@/lib/site";
import { copy } from "@/lib/copy";
import { Logo } from "@/components/brand/Logo";
import { IconClose, IconChevronRight, IconWhatsApp } from "@/components/ui/icons";
import { useDialogBehaviour } from "@/hooks/useDialogBehaviour";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useDialogBehaviour(open, onClose);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label={copy.common.closeMenu}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink-900/45 animate-fade-in"
        tabIndex={-1}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={copy.common.menu}
        className="absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-paper shadow-lg animate-slide-in-left"
      >
        <div className="flex items-center justify-between border-b border-line-200 px-5 py-4">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={copy.common.closeMenu}
            className="grid size-12 place-items-center rounded-md text-ink-800 hover:bg-berry-50"
          >
            <IconClose />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex min-h-14 items-center justify-between rounded-md px-3 text-[1.2rem] font-medium text-ink-900 hover:bg-berry-50"
                >
                  {item.label}
                  <IconChevronRight width={20} height={20} className="text-ink-500" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="px-3 pb-2 pt-6 eyebrow">{copy.nav.shopByCategory}</p>
          <ul className="flex flex-col">
            {categoryLinks.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  onClick={onClose}
                  className="flex min-h-12 items-center rounded-md px-3 text-[1.05rem] text-ink-800 hover:bg-berry-50"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="px-3 pb-2 pt-6 eyebrow">{copy.nav.yourAccount}</p>
          <ul className="flex flex-col">
            {[
              { label: "Log masuk", href: "/account/login" },
              { label: "Pesanan saya", href: "/account/orders" },
              { label: "Senarai hajat", href: "/wishlist" },
              { label: "Hubungi kami", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={onClose}
                  className="flex min-h-12 items-center rounded-md px-3 text-[1.05rem] text-ink-800 hover:bg-berry-50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-line-200 p-4">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-leaf-700 px-4 font-semibold text-white"
          >
            <IconWhatsApp width={20} height={20} />
            {copy.nav.whatsapp}
          </a>
        </div>
      </div>
    </div>
  );
}
