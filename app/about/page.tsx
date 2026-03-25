import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-16">
        <Container>
          <div className="prose-lite max-w-3xl rounded-[2rem] border border-line bg-white p-8 shadow-card sm:p-10">
            <h1 className="text-4xl font-semibold">About</h1>
            <p>
              Social Intelligence Cheat Sheet was created around a simple premise: most people do not need more theory.
              They need better words ready at the moment they matter.
            </p>
            <p>
              This product is intentionally compact, practical, and low-friction. It is designed for people who want
              immediately usable language for everyday social situations without joining a platform, taking a course, or
              reading a long book.
            </p>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
