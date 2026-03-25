export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;

  if ((window as any).gtag) {
    (window as any).gtag("event", name, params);
  }

  if ((window as any).plausible) {
    (window as any).plausible(name, { props: params });
  }
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (name: string, options?: any) => void;
  }
}
