"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";
import type { Product } from "@/lib/catalog";

const TABS = ["Description", "Specifications", "Documents", "Shipping & Delivery"] as const;
type Tab = (typeof TABS)[number];

export function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<Tab>("Specifications");

  return (
    <div className="mt-10 border-t border-border pt-8">
      <div className="flex flex-wrap gap-1 border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            aria-current={active === tab}
            className={`relative px-4 py-3 text-sm font-semibold transition-colors ${
              active === tab
                ? "text-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-accent after:content-['']"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="pt-7">
        {active === "Description" && (
          <p className="max-w-[70ch] text-sm leading-relaxed text-ink-muted">
            {product.description}
          </p>
        )}

        {active === "Specifications" && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-border">
              {product.specifications.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-2 gap-4 px-4 py-3 text-sm ${i > 0 ? "border-t border-border" : ""}`}
                >
                  <span className="font-semibold text-ink">{spec.label}</span>
                  <span className="text-ink-muted">{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-border p-5">
              <span className="mb-3 block text-sm font-semibold text-ink">Product Features</span>
              <ul className="flex flex-col gap-2.5">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <CheckIcon width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {active === "Documents" && (
          <p className="text-sm text-ink-muted">
            Safety data sheets and certificates for this product are available on request —
            contact our sales team and we&apos;ll send them over.
          </p>
        )}

        {active === "Shipping & Delivery" && (
          <p className="max-w-[70ch] text-sm leading-relaxed text-ink-muted">
            Orders are typically dispatched within 2–3 business days of RFQ approval.
            Delivery timelines depend on order volume and destination — our team will confirm
            an estimate with your quote.
          </p>
        )}
      </div>
    </div>
  );
}
