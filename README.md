# Go Miles Dispatch Services — Website (frontend-only)

Modern marketing website for **Go Miles Dispatch Services** (Ontario, Canada) built with Next.js + Tailwind + Framer Motion.

This project is **frontend-only** (no database, no API routes, no email service). The contact section uses **click-to-call** and **mailto** links.

## Local development

Install and run:

   ```bash
   npm install
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Production build (local)

```bash
npm run build
npm start
```

## Deploy to Vercel (GitHub)

1. Push this repo to GitHub (`main`).
2. Import the repo in Vercel (auto-detects Next.js).
3. Deploy — **no environment variables required**.

### Custom domain **gomiles.ca** (Cloudflare)

In Vercel **Settings → Domains** add **`gomiles.ca`** and **`www.gomiles.ca`**, then add the DNS records Cloudflare/Vercel show. See [Vercel + Cloudflare](https://vercel.com/docs/concepts/projects/domains/working-with-cloudflare).

No backend configuration is needed for this frontend-only site.

## Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
