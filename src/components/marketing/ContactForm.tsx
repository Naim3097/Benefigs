"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TextField, SelectField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/icons";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const SUBJECTS = ["Pertanyaan am", "Mengenai pesanan", "Borong & korporat", "Lawatan ladang", "Lain-lain"];

export function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", subject: SUBJECTS[0], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setF((p) => ({ ...p, [k]: e.target.value }));
    setErrors((p) => ({ ...p, [k]: "" }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!f.name.trim()) errs.name = "Sila masukkan nama anda.";
    if (!EMAIL_RE.test(f.email)) errs.email = "Sila masukkan e-mel yang sah.";
    if (f.message.trim().length < 10) errs.message = "Sila tulis mesej yang lebih terperinci.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-leaf-200 bg-leaf-50 p-8 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-leaf-600 text-white">
          <IconCheck width={28} height={28} />
        </span>
        <h2 className="mt-4 text-h3">Terima kasih!</h2>
        <p className="mt-2 text-ink-700">
          Mesej anda telah dihantar. Kami akan membalas secepat mungkin, biasanya dalam satu hari bekerja.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <TextField label="Nama" id="c-name" required value={f.name} onChange={set("name")} error={errors.name} autoComplete="name" />
      <TextField label="E-mel" id="c-email" type="email" required value={f.email} onChange={set("email")} error={errors.email} autoComplete="email" />
      <SelectField label="Subjek" id="c-subject" value={f.subject} onChange={set("subject")}>
        {SUBJECTS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </SelectField>
      <div>
        <label htmlFor="c-message" className="block text-[1.02rem] font-medium text-ink-900">
          Mesej <span className="text-danger-600">*</span>
        </label>
        <textarea
          id="c-message"
          required
          rows={5}
          value={f.message}
          onChange={set("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "c-message-err" : undefined}
          className={cn(
            "mt-1.5 w-full rounded-md border bg-surface px-4 py-3 text-[1.05rem] text-ink-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-berry-500",
            errors.message ? "border-danger-600" : "border-line-300",
          )}
        />
        {errors.message ? (
          <p id="c-message-err" role="alert" className="mt-1 text-small text-danger-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="rounded-md bg-danger-50 px-4 py-3 text-danger-700">
          Maaf, mesej anda tidak dapat dihantar. Sila cuba lagi atau e-mel kami terus.
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "loading"} className="justify-self-start">
        {status === "loading" ? "Menghantar…" : "Hantar mesej"}
      </Button>
    </form>
  );
}
