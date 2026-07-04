"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setDemoUser } from "@/lib/demoAuth";
import { TextField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/icons";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function AuthForm({ mode }: { mode: "login" | "register" | "forgot" }) {
  const router = useRouter();
  const [f, setF] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setF((p) => ({ ...p, [k]: e.target.value }));
    setErrors((p) => ({ ...p, [k]: "" }));
  };

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (mode === "register" && !f.name.trim()) errs.name = "Sila masukkan nama anda.";
    if (!EMAIL_RE.test(f.email)) errs.email = "Sila masukkan e-mel yang sah.";
    if (mode !== "forgot" && f.password.length < 6) errs.password = "Kata laluan sekurang-kurangnya 6 aksara.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    if (mode === "forgot") {
      setSent(true);
      return;
    }
    setDemoUser(mode === "register" ? { name: f.name, email: f.email } : { email: f.email });
    router.push("/account");
  }

  if (mode === "forgot" && sent) {
    return (
      <p className="flex items-center gap-2 font-medium text-leaf-700">
        <IconCheck width={22} height={22} /> Jika akaun wujud untuk e-mel itu, kami telah menghantar pautan set semula.
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-5">
      {mode === "register" ? (
        <TextField label="Nama penuh" id="name" required value={f.name} onChange={set("name")} error={errors.name} autoComplete="name" />
      ) : null}
      <TextField label="E-mel" id="email" type="email" required value={f.email} onChange={set("email")} error={errors.email} autoComplete="email" />
      {mode !== "forgot" ? (
        <div>
          <TextField
            label="Kata laluan"
            id="password"
            type="password"
            required
            value={f.password}
            onChange={set("password")}
            error={errors.password}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
          />
          {mode === "login" ? (
            <p className="mt-2 text-right">
              <Link href="/account/forgot-password" className="text-small font-semibold text-berry-700 hover:underline">
                Lupa kata laluan?
              </Link>
            </p>
          ) : null}
        </div>
      ) : null}

      <Button type="submit" size="lg" full>
        {mode === "login" ? "Log masuk" : mode === "register" ? "Daftar akaun" : "Hantar pautan set semula"}
      </Button>
    </form>
  );
}
