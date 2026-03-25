import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-16">
        <Container>
          <div className="prose-lite max-w-3xl rounded-[2rem] border border-line bg-white p-8 shadow-card sm:p-10">
            <h1 className="text-4xl font-semibold">Privacy Policy</h1>
            <p>
              This page is a launch-ready placeholder and should be customized based on the analytics, payment, email,
              and hosting tools you actually use.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">What may be collected</h2>
            <p>
              Depending on your setup, basic data may include purchase information processed by Stripe, analytics event
              data, and contact form submissions.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Payments</h2>
            <p>
              Payments are handled by Stripe. The site does not need to store full card details directly.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Analytics</h2>
            <p>
              You may use privacy-friendly analytics or Google Analytics to measure page views, CTA clicks, and
              purchases.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Contact</h2>
            <p>For privacy questions, direct users to your support email listed on the Contact page.</p>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
