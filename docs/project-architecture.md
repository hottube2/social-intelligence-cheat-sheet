# Phase 1 — Project Architecture

## Recommended architecture
- Frontend: Next.js App Router
- Styling: Tailwind CSS
- Checkout: Stripe Checkout session created server-side
- Fulfillment: short-lived signed download token + server download route
- Hosting: Vercel
- Analytics: GA4 or Plausible
- Optional email later: Stripe receipt email or webhook-based transactional email

## Why this architecture
- Very low maintenance
- Fast global delivery
- No user accounts
- Minimal backend logic
- Security better than a raw public file link
- Easy to redeploy and iterate

## Folder structure
- `app/`
  - `page.tsx`
  - `checkout/page.tsx`
  - `thank-you/page.tsx`
  - `about/page.tsx`
  - `contact/page.tsx`
  - `terms/page.tsx`
  - `privacy/page.tsx`
  - `api/download/route.ts`
  - `api/stripe/webhook/route.ts`
- `components/`
- `content/`
- `lib/`
- `private-assets/`
- `.env.example`
- `README.md`

## Low-maintenance delivery recommendation
Use the included server-validated local PDF delivery first.
If you want file swaps without redeploying, move the PDF to Vercel Blob, S3, or R2 later.