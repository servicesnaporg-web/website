import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/lib/env';

type SubscribePayload = {
  email: string;
};

export async function POST(req: NextRequest) {
  try {
    const { email } = (await req.json()) as SubscribePayload;
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    if (env.NEWSLETTER_PROVIDER === 'mailchimp' && env.MAILCHIMP_API_KEY && env.MAILCHIMP_LIST_ID && env.MAILCHIMP_SERVER_PREFIX) {
      const url = `https://${env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${env.MAILCHIMP_LIST_ID}/members`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`anystring:${env.MAILCHIMP_API_KEY}`).toString('base64')}`,
        },
        body: JSON.stringify({ email_address: email, status: 'subscribed' }),
      });
      if (!res.ok) {
        const text = await res.text();
        return NextResponse.json({ error: 'Mailchimp error', detail: text }, { status: 502 });
      }
    } else if (env.NEWSLETTER_PROVIDER === 'brevo' && env.BREVO_API_KEY && env.BREVO_LIST_ID) {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': env.BREVO_API_KEY as string,
        },
        body: JSON.stringify({ email, listIds: [Number(env.BREVO_LIST_ID)] }),
      });
      if (!res.ok) {
        const text = await res.text();
        return NextResponse.json({ error: 'Brevo error', detail: text }, { status: 502 });
      }
    } else {
      return NextResponse.json({ ok: true, message: 'Newsletter provider disabled' });
    }

    return NextResponse.json({ ok: true, message: 'Subscribed' });
  } catch (error) {
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}


