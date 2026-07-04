import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/account/AuthShell";
import { AuthForm } from "@/components/account/AuthForm";

export const metadata: Metadata = { title: "Log masuk", robots: { index: false, follow: true } };

export default function LoginPage() {
  return (
    <AuthShell
      title="Log masuk"
      subtitle="Selamat kembali ke Benefigs."
      footer={
        <>
          Belum ada akaun?{" "}
          <Link href="/account/register" className="font-semibold text-berry-700 hover:underline">
            Daftar sekarang
          </Link>
        </>
      }
    >
      <AuthForm mode="login" />
    </AuthShell>
  );
}
