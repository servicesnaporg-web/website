import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

type InterestPayload = {
  role: 'customer' | 'provider';
  name: string;
  email: string;
  city?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as InterestPayload;
    const { role, name, email, city } = body;
    if (!role || !['customer', 'provider'].includes(role)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
    }
    if (!name || !email) {
      return NextResponse.json({ error: 'Missing name or email' }, { status: 400 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!url || !serviceKey) {
      return NextResponse.json({ 
        error: 'Database not configured', 
        message: 'Please set up Supabase environment variables' 
      }, { status: 503 });
    }
    
    const supabase = createClient(url, serviceKey);

    // Check for duplicates by email
    const { data: existing, error: findError } = await supabase
      .from('interests')
      .select('id')
      .eq('email', email)
      .limit(1)
      .maybeSingle();
    if (findError) {
      return NextResponse.json({ error: 'Database error', detail: findError.message }, { status: 500 });
    }
    if (existing) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 });
    }

    const { error: insertError } = await supabase.from('interests').insert({ role, name, email, city });
    if (insertError) {
      return NextResponse.json({ error: 'Database error', detail: insertError.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}


