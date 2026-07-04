import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/account/AuthShell";
import { AuthForm } from "@/components/account/AuthForm";

export const metadata: Metadata = { title: "Lupa kata laluan", robots: { index: false, follow: true } };

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Set semula kata laluan"
      subtitle="Masukkan e-mel anda dan kami akan menghantar pautan untuk set semula kata laluan."
      footer={
        <Link href="/account/login" className="font-semibold text-berry-700 hover:underline">
          Kembali ke log masuk
        </Link>
      }
    >
      <AuthForm mode="forgot" />
    </AuthShell>
  );
}
