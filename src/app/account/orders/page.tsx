import type { Metadata } from "next";
import Link from "next/link";
import { AccountGuard } from "@/components/account/AccountGuard";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Pesanan saya", robots: { index: false, follow: false } };

export default function OrdersPage() {
  return (
    <AccountGuard>
      <h2 className="text-h3">Pesanan saya</h2>
      <div className="mt-6 rounded-2xl border border-line-200 bg-paper p-10 text-center">
        <p className="text-lead text-ink-700">Anda belum membuat sebarang pesanan.</p>
        <p className="mt-2 text-ink-500">
          Apabila anda membuat pesanan, ia akan muncul di sini untuk anda jejak.
        </p>
        <Link href="/shop" className={cn(buttonClasses({ variant: "primary", size: "lg" }), "mt-6")}>
          Mula membeli-belah
        </Link>
      </div>
      <p className="mt-6 text-small text-ink-500">
        Nota: sejarah pesanan memerlukan sambungan backend dan sistem akaun sebenar.
      </p>
    </AccountGuard>
  );
}
