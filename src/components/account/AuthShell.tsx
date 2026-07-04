import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Logo } from "@/components/brand/Logo";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <Section space="lg">
      <div className="mx-auto w-full max-w-md px-5">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="mt-6 text-center text-h2">{title}</h1>
        {subtitle ? <p className="mt-2 text-center text-ink-700">{subtitle}</p> : null}
        <div className="mt-8 rounded-2xl border border-line-200 bg-surface p-6 sm:p-8">{children}</div>
        {footer ? <div className="mt-6 text-center text-ink-700">{footer}</div> : null}
        <p className="mt-6 text-center text-small text-ink-500">
          Nota: pengesahan ialah demo bahagian hadapan — sambungkan backend auth anda untuk log masuk sebenar.
        </p>
      </div>
    </Section>
  );
}
