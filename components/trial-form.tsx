"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const programOptions = ["LGS", "TYT", "AYT", "YKS", "Birebir Ders", "Grup Dersi"];

export function TrialForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;

  setStatus("submitting");

  const formData = new FormData(form);

  try {
    const response = await fetch("/api/trial", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setStatus(response.ok ? "success" : "error");

    if (response.ok) {
      form.reset();
    }
  } catch {
    setStatus("error");
  }
}

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-md bg-white p-5 shadow-soft ring-1 ring-line sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Veli adı soyadı
          <input className="focus-ring rounded-md border border-line px-4 py-3 text-base font-normal" name="parentName" required autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Telefon
          <input className="focus-ring rounded-md border border-line px-4 py-3 text-base font-normal" name="phone" required inputMode="tel" autoComplete="tel" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Öğrenci sınıfı
          <input className="focus-ring rounded-md border border-line px-4 py-3 text-base font-normal" name="grade" placeholder="Örn. 8. sınıf" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          İlgilenilen program
          <select className="focus-ring rounded-md border border-line px-4 py-3 text-base font-normal" name="program" required defaultValue="">
            <option value="" disabled>Seçiniz</option>
            {programOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Kısa not
        <textarea className="focus-ring min-h-28 rounded-md border border-line px-4 py-3 text-base font-normal" name="message" placeholder="Öğrencinin hedefi, ihtiyaç duyduğu dersler veya uygun günler" />
      </label>
      <button
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-5 text-sm font-semibold text-white transition hover:bg-[#b88626] disabled:cursor-wait disabled:opacity-70"
        type="submit"
        disabled={status === "submitting"}
      >
        <Send className="h-4 w-4" aria-hidden />
        {status === "submitting" ? "Gönderiliyor" : "Ücretsiz deneme için form gönder"}
      </button>
      {status === "success" ? <p className="text-sm font-medium text-sage">Başvurunuz alındı. Kurum ekibi en kısa sürede dönüş yapacaktır.</p> : null}
      {status === "error" ? <p className="text-sm font-medium text-coral">Başvuru gönderilemedi. Lütfen telefon veya WhatsApp üzerinden iletişime geçin.</p> : null}
    </form>
  );
}
