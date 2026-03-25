import Link from "next/link";
import { notFound } from "next/navigation";
import { createDownloadToken } from "@/lib/download-token";
import { getStripeServer } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export default async function ThankYouPage({
  searchParams
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  if (!session_id) notFound();

  const stripe = getStripeServer();
  const session = await stripe.checkout.sessions.retrieve(session_id);

  if (session.payment_status !== "paid") {
    notFound();
  }

  const token = createDownloadToken(session.id, 120);
  const fileName = process.env.PRODUCT_DOWNLOAD_FILENAME || "Social-Intelligence-Cheat-Sheet.pdf";

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Payment successful</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Your download is ready.
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Thanks for your purchase. Use the button below to download your PDF now. For security, the download link is
          time-limited.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`/api/download?token=${encodeURIComponent(token)}`}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Download {fileName}
          </a>
          <Link href="/" className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline">
            Back to home
          </Link>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
          <strong className="block text-slate-900">Need a later delivery option?</strong>
          Stripe can collect email during checkout. You can also add an automation email from your payment tool later,
          but the current setup is intentionally support-light and immediate.
        </div>
      </div>
    </main>
  );
}
