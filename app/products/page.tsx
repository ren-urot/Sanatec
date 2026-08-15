import type { Metadata } from "next";
import Image from "next/image";
import { ProductCatalog } from "@/components/product-catalog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "All Products | Sanatec Marketing",
  description:
    "Browse our wide range of quality medical disposables and healthcare products.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  return (
    <>
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-[var(--color-tint-blue)]">
          <div className="mx-auto flex max-w-[80rem] flex-col-reverse items-center gap-6 px-5 py-10 sm:px-8 sm:py-14 lg:flex-row lg:justify-between">
            <div>
              <h1 className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                All Products
              </h1>
              <p className="mt-2 max-w-[52ch] text-ink-muted">
                Browse our wide range of quality medical disposables and healthcare products.
              </p>
            </div>
            <div className="relative h-32 w-full max-w-md shrink-0 overflow-hidden rounded-xl sm:h-40 lg:w-96">
              <Image
                src="/images/products-banner.png"
                alt="Assorted medical disposables from the Sanatec catalog"
                fill
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <ProductCatalog initialCategory={category} />
      </main>

      <SiteFooter />
    </>
  );
}
