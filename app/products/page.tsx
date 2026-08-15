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
        <section className="relative isolate flex min-h-[13rem] items-center overflow-hidden sm:min-h-[16rem]">
          <Image
            src="/images/products-header.png"
            alt="Assorted medical disposables from the Sanatec catalog"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="relative mx-auto w-full max-w-[80rem] px-5 py-10 sm:px-8 sm:py-14">
            <h1 className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              All Products
            </h1>
            <p className="mt-2 max-w-[52ch] text-ink-muted">
              Browse our wide range of quality medical disposables and healthcare products.
            </p>
          </div>
        </section>

        <ProductCatalog initialCategory={category} />
      </main>

      <SiteFooter />
    </>
  );
}
