"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { getDemoUser, clearDemoUser, type DemoUser } from "@/lib/demoAuth";
import { Container, Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/account", label: "Ringkasan" },
  { href: "/account/orders", label: "Order saya" },
  { href: "/account/profile", label: "Profil" },
  { href: "/wishlist", label: "Wishlist" },
];

export function AccountGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<DemoUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const u = getDemoUser();
    if (!u) {
      router.replace("/account/login");
      return;
    }
    setUser(u);
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <Section space="lg">
        <Container>
          <p className="text-ink-500">Sekejap ya…</p>
        </Container>
      </Section>
    );
  }

  const firstName = user?.name ? user.name.split(" ")[0] : "";

  return (
    <Section space="lg">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Akaun anda</p>
            <h1 className="mt-2 text-h1">Hai{firstName ? `, ${firstName}` : ""}</h1>
          </div>
          <button
            type="button"
            onClick={() => {
              clearDemoUser();
              router.push("/");
            }}
            className="min-h-11 rounded-md border-2 border-line-300 px-4 font-semibold text-ink-800 hover:border-berry-300"
          >
            Log keluar
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.28fr_1fr] lg:gap-12">
          <nav aria-label="Menu akaun" className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            {tabs.map((t) => {
              const active = pathname === t.href;
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-12 items-center whitespace-nowrap rounded-md px-4 font-medium transition-colors",
                    active ? "bg-berry-50 text-berry-800" : "text-ink-800 hover:bg-berry-50",
                  )}
                >
                  {t.label}
                </Link>
              );
            })}
          </nav>
          <div>{children}</div>
        </div>
      </Container>
    </Section>
  );
}
