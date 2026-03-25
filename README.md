# Social Intelligence Cheat Sheet

A production-ready low-maintenance digital product storefront built with Next.js, TypeScript, Tailwind CSS, and Stripe Checkout.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Stripe Checkout
- Server-validated download route
- Static-first marketing pages

## Core flow
1. Visitor lands on homepage
2. Clicks CTA
3. Stripe Checkout opens
4. Successful payment redirects to `/thank-you?session_id=...`
5. Thank-you page validates the Stripe session
6. User receives a short-lived tokenized download link
7. `/api/download` streams the PDF only after payment is verified

## Why this setup
- No accounts
- No login
- No subscription logic
- Minimal backend surface area
- Simple to maintain
- Fast purchase flow

## Project structure
- `app/` — pages and route handlers
- `components/` — reusable landing page UI
- `content/` — product, SEO, email, and marketing assets
- `lib/` — Stripe, download token, analytics helpers
- `private-assets/` — bundled product file for server-side delivery

## Local setup
1. Install dependencies
   ```bash
   npm install
   ```
2. Copy env example
   ```bash
   cp .env.example .env.local
   ```
3. Fill in:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PRICE_ID`
   - `DOWNLOAD_TOKEN_SECRET`
4. Run development server
   ```bash
   npm run dev
   ```

## Stripe setup
1. Create a Stripe account
2. Create a one-time product named `Social Intelligence Cheat Sheet`
3. Create a $19 one-time price
4. Copy the price ID into `STRIPE_PRICE_ID`
5. Use your secret key in `STRIPE_SECRET_KEY`
6. Add your public key to `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
7. Optional: create a webhook endpoint:
   - Endpoint URL: `https://your-domain.com/api/stripe/webhook`
   - Events: `checkout.session.completed`
   - Copy signing secret to `STRIPE_WEBHOOK_SECRET`

## Digital file delivery
### Current included method
The app ships with a bundled PDF in `private-assets/`. It is delivered through a server route only after the Stripe session is confirmed as paid.

### Swap the file later
Replace the file at:
`private-assets/social-intelligence-cheat-sheet.pdf`

If the file name stays the same, the code does not need to change.
For a different file path or filename, update:
- `PRODUCT_FILE_PATH`
- `PRODUCT_DOWNLOAD_FILENAME`

### Without rebuilding every time
The easiest upgrade path is to move the product file to:
- Vercel Blob
- Amazon S3
- Cloudflare R2

Then change `/api/download` to fetch the latest file from storage. The current build is intentionally kept local-first for simplicity.

## Recommended analytics
### Page views
- `page_view_home`
- `page_view_checkout`
- `page_view_thank_you`

### Conversion events
- `cta_click`
- `checkout_started`
- `purchase_completed`
- `download_clicked`

### Suggested implementation
- Simple: Plausible or Umami for privacy-friendly tracking
- Standard: Google Analytics 4
- Server-side: optional Stripe webhook event forwarding later

## Deployment to Vercel
1. Push project to GitHub
2. Import repository into Vercel
3. Add environment variables from `.env.example`
4. Deploy
5. Set `NEXT_PUBLIC_SITE_URL` to your production domain
6. In Stripe, update success and cancel URLs if needed
7. Test end-to-end in Stripe test mode before going live

## End-to-end test checklist
1. Homepage loads correctly on mobile
2. CTA opens Stripe Checkout
3. Successful test payment redirects to thank-you page
4. Thank-you page shows active download button
5. Download route returns the PDF file
6. Expired token is rejected
7. Cancel checkout returns to homepage
8. Terms, Privacy, Contact, and About pages work
9. Meta tags render correctly
10. Analytics events are firing

## Recommended low-support operating model
- Keep support email minimal
- Use a simple refund policy and display it on Terms page
- Avoid custom fulfillment promises
- Keep the product intentionally stable and evergreen
- Publish blog content gradually for organic demand

## Future growth options
- Add FAQ schema
- Add a blog
- Add bundle offers
- Add order bumps inside Stripe or after checkout
- Add an affiliate layer later if desired
