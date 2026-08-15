import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import { featuredProducts, statusStyles } from "@/lib/catalog";

export function FeaturedProducts() {
  return (
    <section className="pb-14 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Featured Products
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            View All Products <ArrowIcon width={14} height={14} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {featuredProducts.map((product) => {
            return (
              <article
                key={product.sku}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-shadow hover:shadow-[0_12px_24px_-16px_rgba(16,24,38,0.25)]"
              >
                <div className="relative aspect-square bg-surface-2">
                  <span
                    className={`absolute top-2.5 left-2.5 z-10 rounded-full px-2 py-0.5 text-[0.625rem] font-bold tracking-wide uppercase ${statusStyles[product.status]}`}
                  >
                    {product.statusLabel}
                  </span>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 16vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-3.5">
                  <span className="text-[0.8125rem] leading-snug font-semibold text-ink">
                    {product.name}
                  </span>
                  <span className="text-[0.6875rem] text-ink-muted">SKU: {product.sku}</span>
                  <a
                    href="#rfq"
                    className="mt-auto inline-flex w-full items-center justify-center rounded-lg border border-accent px-3 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                  >
                    Request Quote
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
