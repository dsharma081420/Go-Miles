# Go Miles Dispatch Services — Website

Full-stack marketing site for **Go Miles Dispatch Services** (Ontario, Canada): Next.js App Router, Tailwind CSS, Prisma, PostgreSQL, and Resend email. Contact form submissions are stored in the database via `POST /api/contact`, and you receive a notification email (plus the visitor gets a confirmation when Resend is configured).

## Local development

1. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

2. Set `DATABASE_URL` to a PostgreSQL instance (e.g. [Neon](https://neon.tech), [Vercel Postgres](https://vercel.com/storage/postgres), or Supabase).

3. **Email (recommended):** Create a [Resend](https://resend.com) API key and add to `.env`:
   - `RESEND_API_KEY` — required for sending mail
   - `NOTIFICATION_EMAIL` — your inbox for new leads (defaults to `gomilescanada@gmail.com` if omitted)
   - `RESEND_FROM` — optional; use a verified domain sender after you verify `gomiles.ca` in Resend (until then, Resend’s test sender works for development)

   When `RESEND_API_KEY` is missing, form submissions still save to the database, but no emails are sent.

4. Apply the schema:

   ```bash
   npx prisma migrate deploy
   # or during early setup: npx prisma db push
   ```

5. Install and run:

   ```bash
   npm install
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Production build (no migration)

```bash
npm run build
npm start
```

## Deploy to Vercel (GitHub)

1. **Push** this folder to a GitHub repository (`main` branch).
2. Log in to [Vercel](https://vercel.com) → **Add New… → Project** → **Import** that repo. Vercel auto-detects Next.js.
3. Under **Environment Variables**, add (Production / Preview as needed):
   - `DATABASE_URL` — Postgres URL (Neon, Supabase, or [Vercel Postgres](https://vercel.com/storage/postgres))
   - `RESEND_API_KEY`, `NOTIFICATION_EMAIL`, optional `RESEND_FROM`
4. **Deploy.** The repo’s `vercel.json` runs `npm run build:production` (`prisma migrate deploy` + `next build`). Your database must accept connections from Vercel’s IPs (most hosted Postgres do by default).
5. After the first successful deploy, open the **.vercel.app** URL to confirm the site loads.

### Custom domain **gomiles.ca** (Cloudflare Registrar)

Your domain is on **Cloudflare**; DNS stays there while Vercel hosts the app.

1. In Vercel: **Project → Settings → Domains** → add **`gomiles.ca`** and **`www.gomiles.ca`**. Vercel will show the exact DNS records to create.
2. In **Cloudflare → DNS** for `gomiles.ca`, add what Vercel asks for. Common patterns:
   - **`www`**: **CNAME** to `cname.vercel-dns.com` (or the hostname Vercel shows), DNS only or proxied (orange cloud works for many setups).
   - **Apex (`gomiles.ca`)**: Often **A** records to Vercel’s IPs, or **CNAME** flattening—follow [Vercel + Cloudflare](https://vercel.com/docs/concepts/projects/domains/working-with-cloudflare) for the current records.
3. Wait for DNS to propagate (often minutes). SSL certificates are issued automatically by Vercel.
4. Set **primary domain** in Vercel if you want all traffic to redirect to `www` or apex.

**Fully functional in production** means: site loads on your domain, form posts succeed (valid `DATABASE_URL`), and emails send when `RESEND_API_KEY` is set. Without those env vars, the UI still works but the form cannot complete end-to-end.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Motion:** Framer Motion (scroll reveals, hero, FAQ)
- **ORM:** Prisma 5 + PostgreSQL
- **Validation:** Zod
- **Email:** Resend (lead notification + visitor confirmation)
