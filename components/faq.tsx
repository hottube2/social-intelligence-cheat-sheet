"use client";

import { useState } from "react";
import { faqItems } from "@/content/product";
import { ChevronDown } from "lucide-react";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-10 divide-y divide-line rounded-3xl border border-line bg-white shadow-card">
      {faqItems.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="p-5 sm:p-6">
            <button
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="text-base font-semibold text-ink">{item.question}</span>
              <ChevronDown className={`h-5 w-5 text-muted transition ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen ? <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
