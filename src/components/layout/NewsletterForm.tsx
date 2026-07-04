"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { copy } from "@/lib/copy";
import { ecommerce } from "@/lib/analytics";
import { IconCheck } from "@/components/ui/icons";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function NewsletterForm({
  location = "footer",
  onDark = false,
}: {
  location?: string;
  onDark?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error" | "loading">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      // PLACEHOLDER: POST to your ESP (Mailchimp / Klaviyo / Brevo) here.
      await new Promise((r) => setTimeout(r, 500));
      ecommerce.newsletterSignup(location);
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <p className={cn("flex items-center gap-2 font-medium", onDark ? "text-honey-300" : "text-leaf-700")}>
        <IconCheck width={22} height={22} /> {copy.newsletter.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={`nl-${location}`} className="sr-only">
            {copy.newsletter.emailLabel}
          </label>
          <input
            id={`nl-${location}`}
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder={copy.newsletter.placeholder}
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? `nl-${location}-err` : undefined}
            className={cn(
              "h-14 w-full rounded-md border px-4 text-[1.05rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-berry-500",
              onDark
                ? "border-white/25 bg-white/10 text-white placeholder:text-paper/60"
                : "border-line-300 bg-surface text-ink-900 placeholder:text-ink-500",
            )}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "inline-flex min-h-14 items-center justify-center rounded-md px-7 font-semibold transition-colors disabled:opacity-60",
            onDark ? "bg-honey-500 text-aubergine hover:bg-honey-300" : "bg-berry-700 text-white hover:bg-berry-800",
          )}
        >
          {status === "loading" ? copy.newsletter.subscribing : copy.newsletter.subscribe}
        </button>
      </div>
      {status === "error" ? (
        <p id={`nl-${location}-err`} role="alert" className={cn("mt-2 text-small", onDark ? "text-honey-300" : "text-danger-600")}>
          {copy.newsletter.invalid}
        </p>
      ) : null}
    </form>
  );
}
