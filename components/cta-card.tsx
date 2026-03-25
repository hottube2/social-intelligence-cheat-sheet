import { PrimaryButton } from "./button";

export function CtaCard() {
  return (
    <div className="rounded-[2rem] border border-line bg-ink px-6 py-8 text-white shadow-card sm:px-10 sm:py-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">Instant access</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Get the cheat sheet and start using it today.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
          One payment. No subscription. No login. Just a practical PDF you can open in seconds whenever you need the
          right words fast.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <PrimaryButton href="/checkout" className="bg-white text-ink hover:opacity-100">
            Get Instant Access — $19
          </PrimaryButton>
          <p className="text-sm text-white/70">Secure checkout with Stripe</p>
        </div>
      </div>
    </div>
  );
}
