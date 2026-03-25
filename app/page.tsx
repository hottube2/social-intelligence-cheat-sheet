import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { CtaCard } from "@/components/cta-card";
import { Faq } from "@/components/faq";
import { PrimaryButton } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustStrip } from "@/components/trust-strip";
import { audience, insideSections, proofBullets } from "@/content/product";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="py-14 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <Badge>Downloadable PDF • Instant access • One-time purchase</Badge>
                <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
                  {siteConfig.productHeadline}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  {siteConfig.description}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <PrimaryButton href="/checkout">Get Instant Access — $19</PrimaryButton>
                  <p className="text-sm text-muted">No subscription • No login • Fast mobile-friendly PDF</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-line bg-white p-6 shadow-card sm:p-8">
                <div className="rounded-[1.5rem] border border-line bg-surface p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">What you get</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                    A tiny, practical guide you will actually use
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {insideSections.map((section) => (
                      <li key={section.title} className="rounded-2xl bg-white px-4 py-3 text-sm shadow-sm">
                        <strong className="block text-ink">{section.title}</strong>
                        <span className="mt-1 block text-muted">{section.body}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <TrustStrip />
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="The problem"
              title="Most people do not struggle with ideas. They struggle with wording under pressure."
              subtitle="In real conversations, hesitation costs clarity. People freeze, overthink, soften what they mean, or say too much trying to avoid discomfort."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                "You know what you want to say, but the right words do not come fast enough.",
                "You default to weak phrasing, over-explaining, or sounding less certain than you feel.",
                "Awkward moments become bigger because you do not have a calm, usable line ready."
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-line bg-white p-6 shadow-card">
                  <p className="text-base leading-8 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20" id="inside">
          <Container>
            <SectionHeading
              eyebrow="The solution"
              title="This PDF gives you ready-to-use lines for the moments that usually trip people up."
              subtitle="Not theory. Not long explanations. Just practical phrases you can adapt immediately."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {insideSections.map((section, index) => (
                <div key={section.title} className="rounded-[1.5rem] border border-line bg-white p-6 shadow-card">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">Section {index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{section.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20" id="why">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Why it works"
                  title="Simple language removes friction."
                  subtitle="When the words are already prepared, you spend less energy improvising and more energy staying calm, clear, and socially effective."
                />
              </div>
              <div className="rounded-[2rem] border border-line bg-white p-6 shadow-card sm:p-8">
                <ul className="space-y-4">
                  {proofBullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl bg-surface px-4 py-4 text-sm leading-7 text-muted">
                      <strong className="block text-base text-ink">{bullet}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Who it is for"
              title="Broad enough for everyday life, specific enough to be genuinely useful."
              subtitle="Whether you are trying to sound more composed at work, on dates, in difficult conversations, or in daily social interactions, this guide gives you language you can use immediately."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {audience.map((item) => (
                <span key={item} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <div className="rounded-[2rem] border border-line bg-white p-8 shadow-card sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">Simple pricing</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">One payment. Instant download.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                Pay once, get immediate access, and keep the file. No recurring fee. No account. No unnecessary steps.
              </p>
              <div className="mt-8 flex flex-wrap items-end gap-6">
                <div>
                  <p className="text-5xl font-semibold tracking-tight text-ink">$19</p>
                  <p className="mt-2 text-sm text-muted">Single purchase • PDF format</p>
                </div>
                <PrimaryButton href="/checkout">Get Instant Access — $19</PrimaryButton>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20" id="faq">
          <Container>
            <SectionHeading
              eyebrow="FAQ"
              title="A few quick answers before you buy"
              subtitle="Everything is built to keep the purchase and delivery process low-friction."
            />
            <Faq />
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <CtaCard />
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
