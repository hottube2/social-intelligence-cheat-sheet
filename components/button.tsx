"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/format";

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function PrimaryButton({ href = "/checkout", children, className, onClick }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90";
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        className={cn(base, className)}
        onClick={() => {
          trackEvent("cta_click", { location: href });
          onClick?.();
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(base, className)}
      onClick={() => {
        trackEvent("cta_click", { location: href });
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}
