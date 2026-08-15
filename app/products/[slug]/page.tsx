import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProductGallery } from "@/components/product-gallery";
import { ProductInfoPanel } from "@/components/product-info-panel";
import { ProductTabs } from "@/components/product-tabs";
import { RelatedProducts } from "@/components/related-products";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  categoryBySlug,
  productBySlug,
  products,
  relatedProducts,
} from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Sanatec Marketing`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const category = categoryBySlug(product.categorySlug);

  return (
    <>
      <SiteHeader />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          ...(category
            ? [{ label: category.name, href: `/products?category=${category.slug}` }]
            : []),
          { label: product.name },
        ]}
      />

      <main className="mx-auto max-w-[80rem] px-5 py-8 sm:px-8 sm:py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <ProductGallery
            images={product.images}
            name={product.name}
            categorySlug={product.categorySlug}
          />
          <ProductInfoPanel product={product} />
        </div>

        <ProductTabs product={product} />

        <RelatedProducts products={relatedProducts(product)} />
      </main>

      <SiteFooter />
    </>
  );
}
