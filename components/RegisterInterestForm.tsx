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
        setStatus({ ok: true, message: "Thanks! We&apos;ll be in touch." });
        setForm({ role: "customer", name: "", email: "", city: "" });
      }
    } catch {
      setStatus({ ok: false, message: "Network error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-6">
      <form onSubmit={onSubmit} className="grid gap-6 max-w-2xl mx-auto">
        {/* Role Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className={`group cursor-pointer relative overflow-hidden rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 ${
            form.role === 'customer' 
              ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl shadow-green-500/20 ring-2 ring-green-500/20' 
              : 'border-green-200 bg-gradient-to-br from-white to-green-50/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/10'
          }`}>
            <input 
              type="radio" 
              name="role" 
              value="customer" 
              checked={form.role === 'customer'} 
              onChange={() => update('role', 'customer')} 
              className="sr-only"
            />
            <div className="p-8 text-center relative">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🛍️</div>
              <div className="font-bold text-xl text-green-800 mb-2">Customer</div>
              <div className="text-sm text-green-600 font-medium">Looking for services</div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
            {form.role === 'customer' && (
              <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-lg font-bold">✓</span>
              </div>
            )}
          </label>
          
          <label className={`group cursor-pointer relative overflow-hidden rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 ${
            form.role === 'provider' 
              ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl shadow-green-500/20 ring-2 ring-green-500/20' 
              : 'border-green-200 bg-gradient-to-br from-white to-green-50/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/10'
          }`}>
            <input 
              type="radio" 
              name="role" 
              value="provider" 
              checked={form.role === 'provider'} 
              onChange={() => update('role', 'provider')} 
              className="sr-only"
            />
            <div className="p-8 text-center relative">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔧</div>
              <div className="font-bold text-xl text-green-800 mb-2">Provider</div>
              <div className="text-sm text-green-600 font-medium">Offering services</div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
            {form.role === 'provider' && (
              <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-lg font-bold">✓</span>
              </div>
            )}
          </label>
        </div>
        
        {/* Form Fields */}
        <div className="grid gap-4">
          <div className="relative">
            <input 
              name="name" 
              placeholder="Full name" 
              required 
              value={form.name} 
              onChange={(e) => update('name', e.target.value)} 
              className="w-full rounded-2xl border-2 border-green-200 px-6 py-4 bg-white shadow-lg focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 text-lg text-gray-700 placeholder:text-green-800" 
              suppressHydrationWarning
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400">
              👤
            </div>
          </div>
          
          <div className="relative">
            <input 
              name="email" 
              type="email" 
              placeholder="Email address" 
              required 
              value={form.email} 
              onChange={(e) => update('email', e.target.value)} 
              className="w-full rounded-2xl border-2 border-green-200 px-6 py-4 bg-white shadow-lg focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 text-lg text-gray-700 placeholder:text-green-800" 
              suppressHydrationWarning
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400">
              📧
            </div>
          </div>
          
          <div className="relative">
            <input 
              name="city" 
              placeholder="City (optional)" 
              value={form.city} 
              onChange={(e) => update('city', e.target.value)} 
              className="w-full rounded-2xl border-2 border-green-200 px-6 py-4 bg-white shadow-lg focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 text-lg text-gray-700 placeholder:text-green-800" 
              suppressHydrationWarning
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400">
              📍
            </div>
          </div>
        </div>
        
        <button 
          type="submit" 
          disabled={loading} 
          className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
          suppressHydrationWarning
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Submitting...
            </>
          ) : (
            <>
              Join ServiceSnap
              <span className="ml-2 group-hover:translate-x-1 transition-transform">🚀</span>
            </>
          )}
        </button>
      </form>
      
      {status && (
        <div className={`mt-6 p-4 rounded-xl text-center font-medium ${
          status.ok 
            ? "bg-green-50 text-green-800 border border-green-200" 
            : "bg-red-50 text-red-800 border border-red-200"
        }`}>
          {status.ok ? "🎉 " : "❌ "}{status.message}
        </div>
      )}
    </div>
  );
}


