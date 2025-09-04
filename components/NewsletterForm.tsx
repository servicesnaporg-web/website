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
    <div className="mt-6">
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
        <div className="flex-1 relative">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border-2 border-green-200 px-6 py-4 bg-white shadow-lg focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 text-lg placeholder:text-green-400"
            suppressHydrationWarning
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400">
            📧
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 min-w-[140px]"
          suppressHydrationWarning
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Subscribing...
            </>
          ) : (
            <>
              Subscribe
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </>
          )}
        </button>
      </form>
      {status && (
        <div className={`mt-4 p-4 rounded-xl text-center font-medium ${
          status.ok 
            ? "bg-green-50 text-green-800 border border-green-200" 
            : "bg-red-50 text-red-800 border border-red-200"
        }`}>
          {status.ok ? "✅ " : "❌ "}{status.message}
        </div>
      )}
    </div>
  );
}


