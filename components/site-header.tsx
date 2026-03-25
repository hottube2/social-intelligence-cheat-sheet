import Link from "next/link";
import { Container } from "./container";
import { PrimaryButton } from "./button";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight text-ink">
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <PrimaryButton href="/checkout" className="px-4 py-2 text-xs sm:text-sm">
            Get Instant Access — $19
          </PrimaryButton>
        </div>
      </Container>
    </header>
  );
}
