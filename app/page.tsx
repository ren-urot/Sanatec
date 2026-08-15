import { Categories } from "@/components/categories";
import { FeaturedProducts } from "@/components/featured-products";
import { Hero } from "@/components/hero";
import { RfqBand } from "@/components/rfq-band";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustStrip } from "@/components/trust-strip";

export default function Home() {
  return (
    <>
      <span id="top" />
      <a
        href="#main"
        className="sr-only rounded-sm bg-accent px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <TrustStrip />
        <Categories />
        <FeaturedProducts />
        <RfqBand />
      </main>

      <SiteFooter />
    </>
  );
}
