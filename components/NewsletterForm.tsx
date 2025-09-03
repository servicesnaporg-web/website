"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ ok: false, message: data?.error || "Subscription failed" });
      } else {
        setStatus({ ok: true, message: "Subscribed successfully!" });
        setEmail("");
      }
    } catch {
      setStatus({ ok: false, message: "Network error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 flex flex-col sm:flex-row gap-3 max-w-xl">
      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-2xl border px-4 py-3 bg-background shadow-sm"
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center rounded-2xl bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
      {status && (
        <p className={`text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>{status.message}</p>
      )}
    </form>
  );
}


