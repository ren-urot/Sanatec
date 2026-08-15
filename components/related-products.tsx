"use client";

import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/catalog";

export function RelatedProducts({ products }: { products: Product[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    scrollerRef.current?.scrollBy({ left: direction * 280, behavior: "smooth" });
  }

  if (products.length === 0) return null;

  return (
    <div className="mt-14 border-t border-border pt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight text-ink uppercase">Related Products</h2>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeftIcon width={16} height={16} />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRightIcon width={16} height={16} />
          </button>
        </div>
      </div>

      <div ref={scrollerRef} className="flex gap-5 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
        {products.map((product) => (
          <div key={product.sku} className="w-44 shrink-0 sm:w-56">
            <ProductCard product={product} showWishlist quoteHref="#" />
          </div>
        ))}
      </div>
    </div>
  );
}
