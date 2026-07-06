import type { Metadata } from "next";
import Link from "next/link";
import { AccountGuard } from "@/components/account/AccountGuard";
import { buttonClasses } from "@/components/ui/Button";
import { IconChevronRight } from "@/components/ui/icons";

export const metadata: Metadata = { title: "Akaun saya", robots: { index: false, follow: false } };

const cards = [
  { href: "/account/orders", title: "Order saya", body: "Lihat dan jejak order anda." },
  { href: "/account/profile", title: "Profil", body: "Kemas kini nama dan e-mel anda." },
  { href: "/wishlist", title: "Wishlist", body: "Produk yang anda simpan untuk nanti." },
];

export default function AccountPage() {
  return (
    <AccountGuard>
      <div className="grid gap-5 sm:grid-cols-2">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-2xl border border-line-200 bg-surface p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-[1.35rem] font-medium text-ink-900">{c.title}</h2>
              <IconChevronRight width={22} height={22} className="text-berry-700 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-ink-700">{c.body}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/shop" className={buttonClasses({ variant: "primary", size: "lg" })}>
          Sambung shopping
        </Link>
      </div>
    </AccountGuard>
  );
}
