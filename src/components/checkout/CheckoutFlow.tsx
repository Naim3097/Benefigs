"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cart";
import { computeTotals } from "@/lib/pricing";
import { formatMYR, cn } from "@/lib/utils";
import { ecommerce } from "@/lib/analytics";
import { Container, Section } from "@/components/ui/Section";
import { TextField, SelectField } from "@/components/ui/FormField";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { Button, buttonClasses } from "@/components/ui/Button";
import { IconCheck, IconShield, IconChevronRight } from "@/components/ui/icons";
import type { PaymentMethod } from "@/lib/payments";

const MY_STATES = [
  "Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis",
  "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu",
  "W.P. Kuala Lumpur", "W.P. Labuan", "W.P. Putrajaya",
];

const STEPS = ["Penghantaran", "Pembayaran", "Semak"];

const PAYMENT_METHODS: { id: PaymentMethod; label: string; hint: string }[] = [
  { id: "fpx", label: "Perbankan Dalam Talian (FPX)", hint: "Maybank, CIMB, Public Bank dan lain-lain" },
  { id: "card", label: "Kad Kredit / Debit", hint: "Visa, Mastercard" },
  { id: "ewallet", label: "E-dompet", hint: "GrabPay, Touch ’n Go, ShopeePay" },
];

type Fields = {
  fullName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  postcode: string;
  state: string;
  notes: string;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function CheckoutFlow() {
  const { lines, subtotal, coupon, hydrated, clear } = useCart();
  const [step, setStep] = useState(0);
  const [f, setF] = useState<Fields>({
    fullName: "", email: "", phone: "", address1: "", address2: "",
    city: "", postcode: "", state: "", notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [method, setMethod] = useState<PaymentMethod>("fpx");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const totals = computeTotals(subtotal, coupon);
  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setF((prev) => ({ ...prev, [k]: e.target.value }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  if (hydrated && lines.length === 0) {
    return (
      <Section space="lg">
        <Container className="py-10 text-center">
          <h1 className="text-h1">Troli anda kosong</h1>
          <p className="mt-3 text-lead text-ink-700">Tambah beberapa item sebelum ke pembayaran.</p>
          <Link href="/shop" className={cn(buttonClasses({ variant: "primary", size: "lg" }), "mt-6")}>
            Mula membeli-belah
          </Link>
        </Container>
      </Section>
    );
  }

  function validateDelivery(): boolean {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!f.fullName.trim()) e.fullName = "Sila masukkan nama penuh.";
    if (!EMAIL_RE.test(f.email)) e.email = "Sila masukkan e-mel yang sah.";
    if (f.phone.replace(/\D/g, "").length < 9) e.phone = "Sila masukkan nombor telefon yang sah.";
    if (!f.address1.trim()) e.address1 = "Sila masukkan alamat.";
    if (!f.city.trim()) e.city = "Sila masukkan bandar.";
    if (!/^\d{5}$/.test(f.postcode.trim())) e.postcode = "Poskod perlu 5 digit.";
    if (!f.state) e.state = "Sila pilih negeri.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (step === 0 && !validateDelivery()) return;
    if (step === 1) ecommerce.addPaymentInfo(lines, totals.total, method);
    setStep((s) => Math.min(2, s + 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  async function placeOrder() {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totals.total,
          method,
          customer: { name: f.fullName, email: f.email, phone: f.phone },
          items: lines.map((l) => ({ sku: l.slug, qty: l.quantity, price: l.price })),
        }),
      });
      const data = await res.json();
      if (data?.ok && data?.redirectUrl) {
        // Keep the cart until the confirmation page reads it, then it clears.
        window.location.href = data.redirectUrl;
        return;
      }
      setSubmitError(data?.error ?? "Pembayaran tidak dapat dimulakan. Sila cuba lagi.");
    } catch {
      setSubmitError("Ralat rangkaian. Sila semak sambungan anda dan cuba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section space="lg">
      <Container>
        <h1 className="text-h1">Pembayaran</h1>

        {/* Progress */}
        <ol className="mt-6 flex items-center gap-2" aria-label="Langkah pembayaran">
          {STEPS.map((label, i) => {
            const done = i < step;
            const current = i === step;
            return (
              <li key={label} className="flex flex-1 items-center gap-2">
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full text-[0.95rem] font-semibold",
                    done ? "bg-leaf-600 text-white" : current ? "bg-berry-700 text-white" : "bg-line-200 text-ink-500",
                  )}
                  aria-current={current ? "step" : undefined}
                >
                  {done ? <IconCheck width={18} height={18} /> : i + 1}
                </span>
                <span className={cn("hidden text-[1rem] font-medium sm:block", current ? "text-ink-900" : "text-ink-500")}>
                  {label}
                </span>
                {i < STEPS.length - 1 ? <span className="mx-1 h-px flex-1 bg-line-200" aria-hidden="true" /> : null}
              </li>
            );
          })}
        </ol>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:gap-14">
          <div>
            {step === 0 ? (
              <div className="grid gap-5">
                <h2 className="text-h3">Maklumat penghantaran</h2>
                <TextField label="Nama penuh" id="fullName" required autoComplete="name" value={f.fullName} onChange={set("fullName")} error={errors.fullName} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField label="E-mel" id="email" type="email" required autoComplete="email" value={f.email} onChange={set("email")} error={errors.email} />
                  <TextField label="Telefon" id="phone" type="tel" required autoComplete="tel" placeholder="012-345 6789" value={f.phone} onChange={set("phone")} error={errors.phone} />
                </div>
                <TextField label="Alamat" id="address1" required autoComplete="address-line1" value={f.address1} onChange={set("address1")} error={errors.address1} />
                <TextField label="Alamat (baris 2)" id="address2" autoComplete="address-line2" value={f.address2} onChange={set("address2")} hint="Pilihan" />
                <div className="grid gap-5 sm:grid-cols-3">
                  <TextField label="Bandar" id="city" required autoComplete="address-level2" value={f.city} onChange={set("city")} error={errors.city} />
                  <TextField label="Poskod" id="postcode" required inputMode="numeric" autoComplete="postal-code" value={f.postcode} onChange={set("postcode")} error={errors.postcode} />
                  <SelectField label="Negeri" id="state" required value={f.state} onChange={set("state")} error={errors.state}>
                    <option value="">Pilih negeri</option>
                    {MY_STATES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </SelectField>
                </div>
                <TextField label="Nota penghantaran" id="notes" value={f.notes} onChange={set("notes")} hint="Pilihan — cth. arahan lokasi" />
              </div>
            ) : null}

            {step === 1 ? (
              <div>
                <h2 className="text-h3">Kaedah pembayaran</h2>
                <p className="mt-2 flex items-center gap-2 text-ink-700">
                  <IconShield width={20} height={20} className="text-leaf-600" />
                  Semua pembayaran diproses dengan selamat oleh Lean.X.
                </p>
                <fieldset className="mt-5 flex flex-col gap-3">
                  <legend className="sr-only">Pilih kaedah pembayaran</legend>
                  {PAYMENT_METHODS.map((m) => {
                    const selected = method === m.id;
                    return (
                      <label
                        key={m.id}
                        className={cn(
                          "flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-colors",
                          selected ? "border-berry-700 bg-berry-50" : "border-line-300 hover:border-berry-300",
                        )}
                      >
                        <input
                          type="radio"
                          name="payment-method"
                          className="mt-1.5 size-5 accent-berry-700"
                          checked={selected}
                          onChange={() => setMethod(m.id)}
                        />
                        <span>
                          <span className="block text-[1.1rem] font-medium text-ink-900">{m.label}</span>
                          <span className="block text-small text-ink-500">{m.hint}</span>
                        </span>
                      </label>
                    );
                  })}
                </fieldset>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="grid gap-6">
                <h2 className="text-h3">Semak pesanan anda</h2>

                <Recap title="Dihantar kepada" onEdit={() => setStep(0)}>
                  <p className="font-medium text-ink-900">{f.fullName}</p>
                  <p>{f.address1}{f.address2 ? `, ${f.address2}` : ""}</p>
                  <p>{f.postcode} {f.city}, {f.state}</p>
                  <p className="mt-1">{f.email} · {f.phone}</p>
                </Recap>

                <Recap title="Pembayaran" onEdit={() => setStep(1)}>
                  <p>{PAYMENT_METHODS.find((m) => m.id === method)?.label}</p>
                  <p className="text-ink-500">Diproses dengan selamat oleh Lean.X</p>
                </Recap>

                <div>
                  <h3 className="text-[1.05rem] font-semibold text-ink-900">Item ({lines.length})</h3>
                  <ul className="mt-3 divide-y divide-line-200 border-y border-line-200">
                    {lines.map((l, i) => (
                      <li key={i} className="flex items-center justify-between gap-3 py-3">
                        <span className="text-ink-800">
                          {l.name}
                          {l.variantLabel ? ` — ${l.variantLabel}` : ""}{" "}
                          <span className="text-ink-500">× {l.quantity}</span>
                        </span>
                        <span className="shrink-0 font-medium text-ink-900">{formatMYR(l.price * l.quantity)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {submitError ? (
                  <p role="alert" className="rounded-md bg-danger-50 px-4 py-3 text-danger-700">
                    {submitError}
                  </p>
                ) : null}
              </div>
            ) : null}

            {/* Step controls */}
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              {step > 0 ? (
                <button type="button" onClick={back} className="min-h-12 rounded-md px-4 font-semibold text-berry-700 hover:bg-berry-50">
                  Kembali
                </button>
              ) : (
                <Link href="/cart" className="min-h-12 inline-flex items-center rounded-md px-4 font-semibold text-berry-700 hover:bg-berry-50">
                  Kembali ke troli
                </Link>
              )}

              {step < 2 ? (
                <Button size="lg" onClick={next} className="sm:min-w-56">
                  Teruskan
                  <IconChevronRight width={20} height={20} />
                </Button>
              ) : (
                <Button size="lg" onClick={placeOrder} disabled={submitting} className="sm:min-w-56">
                  {submitting ? "Memproses…" : `Bayar ${formatMYR(totals.total)}`}
                </Button>
              )}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <OrderSummary showCoupon={step === 0} />
            <p className="mt-4 text-center text-small text-ink-500">
              Dengan membuat pesanan, anda bersetuju dengan{" "}
              <Link href="/terms" className="link-underline text-berry-700">Terma Perkhidmatan</Link> kami.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Recap({ title, onEdit, children }: { title: string; onEdit: () => void; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-line-200 bg-paper p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[1.05rem] font-semibold text-ink-900">{title}</h3>
        <button type="button" onClick={onEdit} className="min-h-9 rounded px-2 text-small font-semibold text-berry-700 hover:underline">
          Ubah
        </button>
      </div>
      <div className="mt-2 text-ink-700">{children}</div>
    </div>
  );
}
