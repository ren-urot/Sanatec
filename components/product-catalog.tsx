"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  GridViewIcon,
  ListViewIcon,
  WishlistIcon,
} from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { ProductFilters, type FiltersState } from "@/components/product-filters";
import { categoryBySlug, statusStyles, catalogProducts, type Product } from "@/lib/catalog";
import Image from "next/image";
import Link from "next/link";

const TOTAL_CATALOG_COUNT = 164;
const TOTAL_PAGES = 14;

type SortKey = "name-asc" | "name-desc";

function sortProducts(list: Product[], sort: SortKey) {
  const sorted = [...list];
  sorted.sort((a, b) =>
    sort === "name-asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
  );
  return sorted;
}

function ProductListRow({ product }: { product: Product }) {
  const Icon = categoryBySlug(product.categorySlug)?.icon;
  return (
    <article className="flex gap-4 rounded-xl border border-border bg-surface p-4 transition-shadow hover:shadow-[0_12px_24px_-16px_rgba(16,24,38,0.25)]">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-surface-2">
        <span
          className={`absolute top-1.5 left-1.5 z-10 rounded-full px-1.5 py-0.5 text-[0.5625rem] font-bold tracking-wide uppercase ${statusStyles[product.status]}`}
        >
          {product.statusLabel}
        </span>
        <Link href={`/products/${product.slug}`} className="absolute inset-0">
          {product.image ? (
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              {Icon && (
                <Icon width={28} height={28} strokeWidth={1.4} className="text-accent opacity-90" />
              )}
            </div>
          )}
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1">
        <Link
          href={`/products/${product.slug}`}
          className="text-sm font-semibold text-ink hover:text-accent"
        >
          {product.name}
        </Link>
        <span className="text-xs text-ink-muted">SKU: {product.sku}</span>
        <span className="text-xs text-ink-muted">{product.specLine}</span>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          aria-label="Save this product"
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-accent"
        >
          <WishlistIcon width={16} height={16} />
        </button>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg border border-accent px-4 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
        >
          Request Quote
        </a>
      </div>
    </article>
  );
}

export function ProductCatalog({ initialCategory }: { initialCategory?: string }) {
  const [filters, setFilters] = useState<FiltersState>({
    search: "",
    categories: new Set(initialCategory ? [initialCategory] : []),
    brands: new Set(),
    types: new Set(),
    availability: new Set(),
  });
  const [sort, setSort] = useState<SortKey>("name-asc");
  const [view, setView] = useState<"grid" | "list">("grid");

  const isFiltered =
    Boolean(filters.search) ||
    filters.categories.size > 0 ||
    filters.brands.size > 0 ||
    filters.types.size > 0 ||
    filters.availability.size > 0;

  const filtered = useMemo(() => {
    let list = catalogProducts;

    if (filters.search) {
      const q = filters.search.trim().toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q),
      );
    }
    if (filters.categories.size > 0) {
      list = list.filter((p) => filters.categories.has(p.categorySlug));
    }
    if (filters.brands.size > 0) {
      list = list.filter((p) => filters.brands.has(p.brand));
    }
    if (filters.types.size > 0) {
      list = list.filter((p) => {
        return Array.from(filters.types).some((type) => {
          if (type === "sterile") return p.sterility === "Sterile";
          if (type === "non-sterile") return p.sterility === "Non-Sterile";
          if (type === "disposable") return p.disposable;
          if (type === "single-use") return p.singleUse;
          return false;
        });
      });
    }
    if (filters.availability.size > 0) {
      list = list.filter((p) => {
        return Array.from(filters.availability).some((a) =>
          a === "in-stock" ? p.inStock : !p.inStock,
        );
      });
    }

    return sortProducts(list, sort);
  }, [filters, sort]);

  return (
    <div className="mx-auto max-w-[80rem] px-5 py-10 sm:px-8 lg:py-12">
      <div className="flex flex-col gap-10 lg:flex-row">
        <ProductFilters filters={filters} onChange={setFilters} />

        <div className="min-w-0 flex-1">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm text-ink-muted">
              {isFiltered
                ? `Showing ${filtered.length} of ${filtered.length} products`
                : `Showing 1–12 of ${TOTAL_CATALOG_COUNT} products`}
            </span>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-ink-muted">
                Sort by:
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="rounded-lg border border-border-strong bg-surface px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
                >
                  <option value="name-asc">Name A-Z</option>
                  <option value="name-desc">Name Z-A</option>
                </select>
              </label>
              <div className="flex overflow-hidden rounded-lg border border-border-strong">
                <button
                  type="button"
                  aria-label="Grid view"
                  aria-pressed={view === "grid"}
                  onClick={() => setView("grid")}
                  className={`flex h-9 w-9 items-center justify-center transition-colors ${view === "grid" ? "bg-accent text-white" : "text-ink-muted hover:bg-surface-2"}`}
                >
                  <GridViewIcon width={16} height={16} />
                </button>
                <button
                  type="button"
                  aria-label="List view"
                  aria-pressed={view === "list"}
                  onClick={() => setView("list")}
                  className={`flex h-9 w-9 items-center justify-center border-l border-border-strong transition-colors ${view === "list" ? "bg-accent text-white" : "text-ink-muted hover:bg-surface-2"}`}
                >
                  <ListViewIcon width={16} height={16} />
                </button>
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border-strong py-16 text-center">
              <p className="text-sm font-semibold text-ink">No products match those filters.</p>
              <p className="mt-1 text-sm text-ink-muted">Try clearing a filter or search term.</p>
            </div>
          ) : view === "grid" ? (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.sku} product={product} showWishlist quoteHref="#" />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filtered.map((product) => (
                <ProductListRow key={product.sku} product={product} />
              ))}
            </div>
          )}

          {!isFiltered && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-1.5">
              <button
                type="button"
                aria-label="Previous page"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronLeftIcon width={15} height={15} />
              </button>
              {[1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold transition-colors ${
                    n === 1
                      ? "border-accent bg-accent text-white"
                      : "border-border-strong text-ink hover:border-accent hover:text-accent"
                  }`}
                >
                  {n}
                </button>
              ))}
              <span className="px-1 text-sm text-ink-muted">…</span>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {TOTAL_PAGES}
              </button>
              <button
                type="button"
                aria-label="Next page"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronRightIcon width={15} height={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
