"use client";
import { useState } from "react";

export default function RegisterInterestForm() {
  const [form, setForm] = useState({ role: "customer", name: "", email: "", city: "" });
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ ok: false, message: data?.error || "Submission failed" });
      } else {
        setStatus({ ok: true, message: "Thanks! We'll be in touch." });
        setForm({ role: "customer", name: "", email: "", city: "" });
      }
    } catch {
      setStatus({ ok: false, message: "Network error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 grid gap-3 max-w-xl">
      <div className="grid grid-cols-2 gap-3">
        <label className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-3 shadow-sm ${form.role === 'customer' ? 'ring-2 ring-primary' : ''}`}>
          <input type="radio" name="role" value="customer" checked={form.role === 'customer'} onChange={() => update('role', 'customer')} />
          <span>Customer</span>
        </label>
        <label className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-3 shadow-sm ${form.role === 'provider' ? 'ring-2 ring-primary' : ''}`}>
          <input type="radio" name="role" value="provider" checked={form.role === 'provider'} onChange={() => update('role', 'provider')} />
          <span>Provider</span>
        </label>
      </div>
      <input name="name" placeholder="Full name" required value={form.name} onChange={(e) => update('name', e.target.value)} className="rounded-2xl border px-4 py-3 bg-background shadow-sm" />
      <input name="email" type="email" placeholder="Email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="rounded-2xl border px-4 py-3 bg-background shadow-sm" />
      <input name="city" placeholder="City" value={form.city} onChange={(e) => update('city', e.target.value)} className="rounded-2xl border px-4 py-3 bg-background shadow-sm" />
      <button type="submit" disabled={loading} className="inline-flex items-center rounded-2xl bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow hover:opacity-90 disabled:opacity-60">{loading ? 'Submitting...' : 'Submit'}</button>
      {status && (
        <p className={`text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>{status.message}</p>
      )}
    </form>
  );
}


