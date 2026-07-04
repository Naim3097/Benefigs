import Link from "next/link";
import { site } from "@/lib/site";
import { copy } from "@/lib/copy";
import { footerNav, legalNav } from "@/lib/navigation";
import { Logo } from "@/components/brand/Logo";
import { NewsletterForm } from "./NewsletterForm";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconFacebook,
  IconInstagram,
  IconTikTok,
} from "@/components/ui/icons";

export function Footer() {
  const year = 2026; // build-time constant; keep in sync at deploy

  return (
    <footer className="bg-aubergine text-paper">
      <div className="container-page">
        {/* Newsletter + brand */}
        <div className="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="max-w-md">
            <Logo onDark />
            <p className="mt-4 text-paper/80">{copy.footer.brandBlurb}</p>
            <div className="mt-6 flex items-center gap-2">
              <SocialLink href={site.socials.facebook} label="Benefigs di Facebook">
                <IconFacebook width={22} height={22} />
              </SocialLink>
              <SocialLink href={site.socials.instagram} label="Benefigs di Instagram">
                <IconInstagram width={22} height={22} />
              </SocialLink>
              <SocialLink href={site.socials.tiktok} label="Benefigs di TikTok">
                <IconTikTok width={22} height={22} />
              </SocialLink>
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="font-display text-[1.5rem] font-medium">{copy.footer.joinHeading}</h2>
            <p className="mt-2 text-paper/80">{copy.footer.joinBlurb}</p>
            <div className="mt-5">
              <NewsletterForm location="footer" onDark />
            </div>
          </div>
        </div>

        {/* Link columns + contact */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-6">
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title} className="lg:col-span-1">
              <h3 className="text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-honey-300">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-paper/80 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-honey-300">{copy.footer.visitContact}</h3>
            <ul className="mt-4 flex flex-col gap-3 text-paper/80">
              <li className="flex gap-3">
                <IconMapPin width={20} height={20} className="mt-0.5 shrink-0 text-honey-300" />
                <span>
                  {site.address.label}
                  <br />
                  {site.address.line1}, {site.address.city}, {site.address.state}
                </span>
              </li>
              <li className="flex gap-3">
                <IconClock width={20} height={20} className="mt-0.5 shrink-0 text-honey-300" />
                <span>{site.hours.display}</span>
              </li>
              <li className="flex gap-3">
                <IconPhone width={20} height={20} className="mt-0.5 shrink-0 text-honey-300" />
                <a href={`tel:${site.phoneHref}`} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <IconMail width={20} height={20} className="mt-0.5 shrink-0 text-honey-300" />
                <a href={`mailto:${site.salesEmail}`} className="hover:text-white">
                  {site.salesEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust + payments */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-small text-paper/70">
            {copy.footer.securePayments} <span className="font-semibold text-paper">Lean.X</span> {copy.footer.paymentTail}
          </p>
          <ul className="flex flex-wrap items-center gap-2 text-[0.8rem] text-paper/70">
            {["Visa", "Mastercard", "FPX", "GrabPay", "Touch ’n Go"].map((m) => (
              <li key={m} className="rounded-md border border-white/15 px-2.5 py-1">
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-small text-paper/70 sm:flex-row">
          <p>
            © {year} {site.legalName}. {copy.footer.rightsReserved}
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>{copy.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid size-11 place-items-center rounded-full border border-white/20 text-paper/90 transition-colors hover:border-honey-300 hover:text-white"
    >
      {children}
    </a>
  );
}
