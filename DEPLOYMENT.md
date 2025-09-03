# Deployment Guide for ServiceSnap

This guide will help you deploy your Next.js application to your personal domain.

## Prerequisites

1. **Domain Name**: You need a domain name (e.g., `yoursite.com`)
2. **Supabase Setup**: Your Supabase project should be configured
3. **Environment Variables**: Production environment variables configured

## Option 1: Vercel (Recommended for Next.js)

### Step 1: Prepare Your Project
1. Make sure your code is committed to a Git repository (GitHub, GitLab, etc.)
2. Ensure your build passes: `npm run build`

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your Git repository
4. Vercel will auto-detect it's a Next.js project
5. Configure environment variables (copy from `env.production.example`)
6. Click "Deploy"

### Step 3: Custom Domain Setup
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Vercel will provide DNS records to configure
4. Update your domain's DNS settings with these records

## Option 2: Netlify

### Step 1: Build Configuration
Create a `netlify.toml` file in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder or connect Git
3. Configure build settings
4. Set environment variables
5. Deploy

### Step 3: Custom Domain
1. Go to "Domain settings" in your Netlify dashboard
2. Add custom domain
3. Configure DNS records as instructed

## Option 3: Self-Hosted (VPS/Dedicated Server)

### Step 1: Server Setup
1. Get a VPS (DigitalOcean, Linode, AWS EC2, etc.)
2. Install Node.js, PM2, and Nginx
3. Set up SSL with Let's Encrypt

### Step 2: Deployment
1. Clone your repository to the server
2. Install dependencies: `npm install --production`
3. Build the project: `npm run build`
4. Start with PM2: `pm2 start npm --name "servicesnap" -- start`

### Step 3: Nginx Configuration
Create an Nginx config file:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name yourdomain.com;
    
    ssl_certificate /path/to/your/cert.pem;
    ssl_certificate_key /path/to/your/key.pem;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables Setup

1. Copy `env.production.example` to `.env.production`
2. Fill in your actual values:
   - `NEXT_PUBLIC_BASE_URL`: Your domain (e.g., `https://yoursite.com`)
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key

## DNS Configuration

For your domain, you'll typically need to set:

- **A Record**: Points to your server IP (if self-hosting) or Vercel/Netlify IP
- **CNAME Record**: Points to your hosting provider's domain (if using Vercel/Netlify)

## Post-Deployment Checklist

- [ ] SSL certificate is working (https://)
- [ ] All pages load correctly
- [ ] Forms are working (newsletter, interest registration)
- [ ] Supabase connection is working
- [ ] Performance is acceptable
- [ ] Mobile responsiveness works
- [ ] SEO meta tags are set correctly

## Troubleshooting

### Common Issues:
1. **Build Failures**: Check for TypeScript/ESLint errors
2. **Environment Variables**: Ensure all required vars are set
3. **Database Connection**: Verify Supabase credentials
4. **Domain Issues**: Check DNS propagation (can take 24-48 hours)

### Performance Tips:
1. Enable Next.js Image Optimization
2. Use CDN for static assets
3. Implement proper caching headers
4. Monitor Core Web Vitals

## Support

If you encounter issues:
1. Check the build logs
2. Verify environment variables
3. Test locally with production build
4. Check browser console for errors

