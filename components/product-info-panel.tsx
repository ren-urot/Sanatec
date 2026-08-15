"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon, QualityIcon, QuoteFileIcon } from "@/components/icons";
import { statusStyles, type Product } from "@/lib/catalog";

export function ProductInfoPanel({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes?.[Math.floor((product.sizes.length - 1) / 2)]);
  const [packaging, setPackaging] = useState(product.packagingOptions?.[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <span
        className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold tracking-wide uppercase ${statusStyles[product.status]}`}
      >
        {product.statusLabel}
      </span>

      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {product.name}
      </h1>
      <span className="mt-1.5 block text-sm text-ink-muted">SKU: {product.sku}</span>

      <div className="mt-4 flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-ink"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-ink-muted">
        {product.description}
      </p>

      <div className="mt-6 border-t border-border pt-6">
        {product.sizes && (
          <div className="mb-5">
            <span className="mb-2 block text-sm font-semibold text-ink">Sizes</span>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  className={`flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-semibold transition-colors ${
                    size === s
                      ? "border-accent bg-accent text-white"
                      : "border-border-strong text-ink hover:border-accent hover:text-accent"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {product.packagingOptions && (
          <div className="mb-5">
            <span className="mb-2 block text-sm font-semibold text-ink">Packaging</span>
            <div className="flex flex-wrap gap-2">
              {product.packagingOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setPackaging(opt)}
                  aria-pressed={packaging === opt}
                  className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
                    packaging === opt
                      ? "border-accent text-accent"
                      : "border-border-strong text-ink hover:border-accent hover:text-accent"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="mb-2 block text-sm font-semibold text-ink">Quantity</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-lg border border-border-strong">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-10 w-10 items-center justify-center text-ink-muted transition-colors hover:text-accent"
                >
                  <MinusIcon width={15} height={15} />
                </button>
                <span className="flex h-10 w-11 items-center justify-center border-x border-border-strong text-sm font-semibold text-ink">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-10 w-10 items-center justify-center text-ink-muted transition-colors hover:text-accent"
                >
                  <PlusIcon width={15} height={15} />
                </button>
              </div>
              <span className="text-sm text-ink-muted">box(es)</span>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2.5 sm:flex-row">
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.75 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-accent-hover"
            >
              <QuoteFileIcon width={16} height={16} />
              Add to Quote
            </button>
            <a
              href="#"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border-strong px-5 py-2.75 text-sm font-semibold whitespace-nowrap text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <QuoteFileIcon width={16} height={16} />
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-surface-2 px-5 py-4">
        <div className="flex items-center gap-3">
          <QualityIcon width={20} height={20} className="shrink-0 text-accent" />
          <div>
            <span className="block text-sm font-semibold text-ink">Need a large quantity?</span>
            <span className="block text-sm text-ink-muted">
              Contact our sales team for bulk pricing and availability.
            </span>
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg border border-border-strong bg-surface px-4 py-2 text-sm font-semibold whitespace-nowrap text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
