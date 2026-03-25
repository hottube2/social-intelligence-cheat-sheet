import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-16">
        <Container>
          <div className="prose-lite max-w-3xl rounded-[2rem] border border-line bg-white p-8 shadow-card sm:p-10">
            <h1 className="text-4xl font-semibold">Terms of Use</h1>
            <p>
              This page is a placeholder and should be reviewed by qualified counsel before launch if you want
              jurisdiction-specific language.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">License</h2>
            <p>
              Your purchase grants a personal, non-exclusive, non-transferable license to download and use the PDF for
              your own reference. You may not resell, redistribute, upload, or commercially republish the file.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Digital product policy</h2>
            <p>
              This is a digital download. Access is delivered immediately after payment. Because of the nature of
              digital goods, refund handling should be clearly defined by the operator before launch.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Disclaimer</h2>
            <p>
              This product provides general communication guidance for informational purposes. It is not therapy, legal
              advice, or professional negotiation representation.
            </p>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
