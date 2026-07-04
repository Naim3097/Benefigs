"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { primaryNav } from "@/lib/navigation";
import { copy } from "@/lib/copy";
import { Logo } from "@/components/brand/Logo";
import { useCart } from "@/context/cart";
import { IconSearch, IconUser, IconCart, IconMenu } from "@/components/ui/icons";
import { MobileMenu } from "./MobileMenu";
import { SearchDialog } from "./SearchDialog";

export function Header() {
  const pathname = usePathname();
  const { itemCount, hydrated, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 bg-paper transition-shadow duration-300",
          scrolled ? "shadow-sm border-b border-line-200" : "border-b border-transparent",
        )}
      >
      <div className="container-page">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Left: menu (mobile) + logo */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid size-12 place-items-center rounded-md text-ink-800 hover:bg-berry-50 lg:hidden"
              aria-label={copy.common.openMenu}
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
            >
              <IconMenu />
            </button>
            <Logo />
          </div>

          {/* Center: primary nav (desktop) */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex min-h-11 items-center rounded-md px-3.5 text-[1.05rem] font-medium transition-colors",
                        active ? "text-berry-800" : "text-ink-800 hover:text-berry-700 hover:bg-berry-50",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-0.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="grid size-12 place-items-center rounded-md text-ink-800 hover:bg-berry-50"
              aria-label={copy.common.searchProducts}
            >
              <IconSearch />
            </button>
            <Link
              href="/account"
              className="hidden size-12 place-items-center rounded-md text-ink-800 hover:bg-berry-50 sm:grid"
              aria-label={copy.common.account}
            >
              <IconUser />
            </Link>
            <button
              type="button"
              onClick={openCart}
              className="relative grid size-12 place-items-center rounded-md text-ink-800 hover:bg-berry-50"
              aria-label={`${copy.common.openCart}${hydrated && itemCount > 0 ? `, ${itemCount} item` : ""}`}
            >
              <IconCart />
              {hydrated && itemCount > 0 ? (
                <span className="absolute -right-0.5 -top-0.5 grid min-h-[22px] min-w-[22px] place-items-center rounded-full bg-berry-700 px-1 text-[0.78rem] font-bold text-white">
                  {itemCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
