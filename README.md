# Go Miles Dispatch Services — Website

Full-stack marketing site for **Go Miles Dispatch Services** (Ontario, Canada): Next.js App Router, Tailwind CSS, Prisma, **MongoDB**, and Resend email. Contact form submissions are stored in the database via `POST /api/contact`, and you receive a notification email (plus the visitor gets a confirmation when Resend is configured).

## Local development

1. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

2. Set **`DATABASE_URL`** to your **MongoDB** connection string (recommended: [MongoDB Atlas](https://www.mongodb.com/atlas)):
   - Atlas → **Database** → **Connect** → **Drivers** → copy the URI  
   - Replace `<password>` with your database user password  
   - Ensure the URI includes your database name before `?` (e.g. `...mongodb.net/gomiles?retryWrites=true&w=majority`)  
   - In Atlas **Network Access**, allow **`0.0.0.0/0`** (or Vercel IPs) so serverless builds can connect

3. **Email (recommended):** Create a [Resend](https://resend.com) API key and add to `.env`:
   - `RESEND_API_KEY` — required for sending mail  
   - `NOTIFICATION_EMAIL` — your inbox for new leads (defaults to `gomilescanada@gmail.com` if omitted)  
   - `RESEND_FROM` — optional; use a verified domain sender after you verify `gomiles.ca` in Resend  

   When `RESEND_API_KEY` is missing, submissions can still be saved if MongoDB is configured, but no emails are sent.

4. Push the Prisma schema to your cluster (MongoDB does not use SQL migrations in this project):

   ```bash
   npx prisma db push
   ```

5. Install and run:

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

1. **Push** this folder to a GitHub repository (`main` branch).  
2. Log in to [Vercel](https://vercel.com) → **Import** that repo.  
3. Under **Environment Variables**, add:
   - **`DATABASE_URL`** — your `mongodb+srv://...` (or `mongodb://...`) string  
   - **`RESEND_API_KEY`**, **`NOTIFICATION_EMAIL`**, optional **`RESEND_FROM`**  
4. **Deploy.** `vercel.json` runs `npm run build:production`, which runs **`prisma db push`** for MongoDB (syncs the `ContactSubmission` collection) then **`next build`**.  
5. Atlas must allow inbound connections from the internet (or from Vercel) for the build step to succeed.

### Custom domain **gomiles.ca** (Cloudflare)

In Vercel **Settings → Domains** add **`gomiles.ca`** and **`www.gomiles.ca`**, then add the DNS records Cloudflare/Vercel show. See [Vercel + Cloudflare](https://vercel.com/docs/concepts/projects/domains/working-with-cloudflare).

**Fully functional in production:** valid `DATABASE_URL` (MongoDB), Atlas network access, plus `RESEND_API_KEY` for email.

## Stack

- **Framework:** Next.js 16 (App Router)  
- **Styling:** Tailwind CSS v4  
- **Motion:** Framer Motion  
- **ORM:** Prisma 5 + **MongoDB** (Postgres still supported in build script if you use a `postgresql://` URL)  
- **Validation:** Zod  
- **Email:** Resend  
