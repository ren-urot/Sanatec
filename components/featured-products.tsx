import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { featuredProducts } from "@/lib/catalog";

export function FeaturedProducts() {
  return (
    <section className="pb-14 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Featured Products
          </h2>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            View All Products <ArrowIcon width={14} height={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
