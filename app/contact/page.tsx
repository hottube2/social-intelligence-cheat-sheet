import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-16">
        <Container>
          <div className="max-w-3xl rounded-[2rem] border border-line bg-white p-8 shadow-card sm:p-10">
            <h1 className="text-4xl font-semibold tracking-tight text-ink">Contact</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              Keep this page minimal. For a low-maintenance launch, use a simple contact email or connect a basic form
              provider like Formspree, Tally, or Basin.
            </p>
            <div className="mt-8 rounded-2xl bg-surface p-5 text-sm leading-7 text-muted">
              <strong className="block text-ink">Recommended placeholder</strong>
              Email: hello@example.com
              <br />
              Response window: 2 to 3 business days
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
