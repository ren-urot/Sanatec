"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WishlistIcon } from "@/components/icons";
import { useCart } from "@/lib/cart-context";
import { categoryBySlug, statusStyles, type Product } from "@/lib/catalog";

function defaultUnit(product: Product) {
  const first = product.packagingOptions?.[0] ?? "";
  if (/box/i.test(first)) return "boxes";
  if (/case/i.test(first)) return "cases";
  return "pcs";
}

export function ProductCard({
  product,
  showWishlist = false,
}: {
  product: Product;
  showWishlist?: boolean;
}) {
  const [saved, setSaved] = useState(false);
  const Icon = categoryBySlug(product.categorySlug)?.icon;
  const { addItem } = useCart();

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-shadow hover:shadow-[0_12px_24px_-16px_rgba(16,24,38,0.25)]">
      <div className="relative aspect-square bg-surface-2">
        <span
          className={`absolute top-2.5 left-2.5 z-10 rounded-full px-2 py-0.5 text-[0.625rem] font-bold tracking-wide uppercase ${statusStyles[product.status]}`}
        >
          {product.statusLabel}
        </span>
        {showWishlist && (
          <button
            type="button"
            aria-label={saved ? "Remove from saved items" : "Save this product"}
            aria-pressed={saved}
            onClick={() => setSaved((v) => !v)}
            className="absolute top-2.5 right-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-surface/90 text-ink-muted shadow-sm transition-colors hover:text-accent"
          >
            <WishlistIcon
              width={15}
              height={15}
              className={saved ? "fill-accent text-accent" : ""}
            />
          </button>
        )}
        <Link href={`/products/${product.slug}`} className="absolute inset-0">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 16vw, 45vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              {Icon && (
                <Icon width={38} height={38} strokeWidth={1.4} className="text-accent opacity-90" />
              )}
            </div>
          )}
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3.5">
        <Link
          href={`/products/${product.slug}`}
          className="text-[0.8125rem] leading-snug font-semibold text-ink hover:text-accent"
        >
          {product.name}
        </Link>
        <span className="text-[0.6875rem] text-ink-muted">SKU: {product.sku}</span>
        <span className="text-[0.6875rem] text-ink-muted">{product.specLine}</span>
        <button
          type="button"
          onClick={() =>
            addItem({
              productSlug: product.slug,
              name: product.name,
              sku: product.sku,
              image: product.image,
              tags: product.tags.slice(0, 2),
              quantity: 1,
              unit: defaultUnit(product),
            })
          }
          className="mt-auto inline-flex w-full items-center justify-center rounded-lg border border-accent px-3 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
        >
          Request Quote
        </button>
      </div>
    </article>
  );
}
