import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/account/AuthShell";
import { AuthForm } from "@/components/account/AuthForm";

export const metadata: Metadata = { title: "Daftar akaun", robots: { index: false, follow: true } };

export default function RegisterPage() {
  return (
    <AuthShell
      title="Cipta akaun anda"
      subtitle="Sertai keluarga Benefigs untuk pembayaran lebih pantas dan tawaran istimewa."
      footer={
        <>
          Sudah ada akaun?{" "}
          <Link href="/account/login" className="font-semibold text-berry-700 hover:underline">
            Log masuk
          </Link>
        </>
      }
    >
      <AuthForm mode="register" />
    </AuthShell>
  );
}
