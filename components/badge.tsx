export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
