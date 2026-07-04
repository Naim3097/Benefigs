import type { Metadata } from "next";
import { AccountGuard } from "@/components/account/AccountGuard";
import { ProfileForm } from "@/components/account/ProfileForm";

export const metadata: Metadata = { title: "Profil", robots: { index: false, follow: false } };

export default function ProfilePage() {
  return (
    <AccountGuard>
      <ProfileForm />
    </AccountGuard>
  );
}
