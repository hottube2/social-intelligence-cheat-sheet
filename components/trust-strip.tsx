export function TrustStrip() {
  return (
    <div className="grid gap-3 rounded-[2rem] border border-line bg-white p-4 text-sm text-muted shadow-card sm:grid-cols-3 sm:p-5">
      <div className="rounded-2xl bg-surface px-4 py-3">
        <strong className="block text-ink">Instant download</strong>
        Access your file immediately after payment.
      </div>
      <div className="rounded-2xl bg-surface px-4 py-3">
        <strong className="block text-ink">One-time payment</strong>
        No recurring charge and no account required.
      </div>
      <div className="rounded-2xl bg-surface px-4 py-3">
        <strong className="block text-ink">Simple format</strong>
        Clean PDF for mobile or desktop reading.
      </div>
    </div>
  );
}
