import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { categories } from "@/lib/catalog";

export function Categories() {
  return (
    <section id="categories" className="pb-14 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <h2 className="text-center text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Browse Categories
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.code}
                href={`/products?category=${cat.slug}`}
                className="flex flex-col items-center gap-3.5 rounded-2xl border border-border bg-surface px-4 py-8 text-center shadow-[0_1px_2px_rgba(16,24,38,0.04)] transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_24px_-14px_rgba(16,24,38,0.25)]"
              >
                <Icon width={51} height={51} strokeWidth={1.4} className="text-accent" />
                <span className="text-[0.9375rem] font-semibold text-ink">{cat.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            View All Categories <ArrowIcon width={14} height={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
