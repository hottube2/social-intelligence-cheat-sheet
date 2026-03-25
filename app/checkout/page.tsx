import { redirect } from "next/navigation";
import { getStripeServer } from "@/lib/stripe";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
  const stripe = getStripeServer();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
  const priceId = process.env.STRIPE_PRICE_ID;

  if (!priceId) {
    return (
      <main className="mx-auto flex min-h-screen max-w-2xl items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-2xl font-semibold">Stripe is not configured yet.</h1>
          <p className="mt-3 text-slate-600">
            Add STRIPE_PRICE_ID, STRIPE_SECRET_KEY, and NEXT_PUBLIC_SITE_URL in your environment variables.
          </p>
        </div>
      </main>
    );
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    allow_promotion_codes: true,
    success_url: `${baseUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/?checkout=cancelled`,
    billing_address_collection: "auto",
    payment_method_types: ["card"],
    metadata: {
      product: "social-intelligence-cheat-sheet"
    }
  });

  if (!session.url) {
    throw new Error("Unable to create Stripe Checkout session.");
  }

  redirect(session.url);
}
