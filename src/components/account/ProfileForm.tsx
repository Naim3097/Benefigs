"use client";

import { useEffect, useState } from "react";
import { getDemoUser, setDemoUser } from "@/lib/demoAuth";
import { TextField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/icons";

export function ProfileForm() {
  const [f, setF] = useState({ name: "", email: "" });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const u = getDemoUser();
    if (u) setF({ name: u.name ?? "", email: u.email });
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setDemoUser({ name: f.name, email: f.email });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div>
      <h2 className="text-h3">Butiran profil</h2>
      <form onSubmit={submit} className="mt-6 grid max-w-lg gap-5">
        <TextField
          label="Nama penuh"
          id="p-name"
          value={f.name}
          onChange={(e) => setF((p) => ({ ...p, name: e.target.value }))}
          autoComplete="name"
        />
        <TextField
          label="E-mel"
          id="p-email"
          type="email"
          value={f.email}
          onChange={(e) => setF((p) => ({ ...p, email: e.target.value }))}
          autoComplete="email"
        />
        <div className="flex items-center gap-3">
          <Button type="submit" size="lg">
            Simpan perubahan
          </Button>
          {saved ? (
            <span className="flex items-center gap-1 font-medium text-leaf-700" role="status">
              <IconCheck width={20} height={20} /> Disimpan
            </span>
          ) : null}
        </div>
      </form>
      <p className="mt-6 text-small text-ink-500">
        Nota: butiran disimpan secara setempat dalam demo ini. Sambungkan backend untuk penyimpanan kekal.
      </p>
    </div>
  );
}
