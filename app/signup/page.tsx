"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setMessage(error.message);
    else setMessage('Check your email for a confirmation link.');
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-xl border p-6 bg-card">
        <h1 className="text-2xl font-semibold mb-4">Create your account</h1>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-md border px-3 py-2 bg-background"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-md border px-3 py-2 bg-background"
          />
          <button disabled={loading} className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow disabled:opacity-60">
            {loading ? 'Creating...' : 'Sign up'}
          </button>
        </form>
        {message && <p className="mt-3 text-sm text-muted-foreground">{message}</p>}
        <p className="mt-4 text-sm text-muted-foreground">
          Already have an account? <Link href="/" className="underline">Back home</Link>
        </p>
      </div>
    </div>
  );
}


