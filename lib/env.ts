export type NewsletterProvider = 'mailchimp' | 'brevo' | 'none';

function required(name: string, value: string | undefined, optional = false): string | undefined {
  if (optional) return value;
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

export const env = {
  // Newsletter provider selection
  NEWSLETTER_PROVIDER: (process.env.NEWSLETTER_PROVIDER as NewsletterProvider) || 'none',

  // Mailchimp
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID,
  MAILCHIMP_SERVER_PREFIX: process.env.MAILCHIMP_SERVER_PREFIX, // e.g. us21

  // Brevo (Sendinblue)
  BREVO_API_KEY: process.env.BREVO_API_KEY,
  BREVO_LIST_ID: process.env.BREVO_LIST_ID,

  // Supabase (public for client usage)
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

  // Supabase (server-side only)
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
} as const;

export function assertServerEnv() {
  // Validate based on provider
  if (env.NEWSLETTER_PROVIDER === 'mailchimp') {
    required('MAILCHIMP_API_KEY', env.MAILCHIMP_API_KEY);
    required('MAILCHIMP_LIST_ID', env.MAILCHIMP_LIST_ID);
    required('MAILCHIMP_SERVER_PREFIX', env.MAILCHIMP_SERVER_PREFIX);
  } else if (env.NEWSLETTER_PROVIDER === 'brevo') {
    required('BREVO_API_KEY', env.BREVO_API_KEY);
    required('BREVO_LIST_ID', env.BREVO_LIST_ID);
  }

  required('NEXT_PUBLIC_SUPABASE_URL', env.NEXT_PUBLIC_SUPABASE_URL);
  required('NEXT_PUBLIC_SUPABASE_ANON_KEY', env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}


