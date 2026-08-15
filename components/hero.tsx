import Image from "next/image";
import { PackageIcon, QuoteFileIcon } from "@/components/icons";

const HERO_ALT =
  "Nitrile gloves, face masks, safety glasses, syringes and IV fluid from the Sanatec catalog";

function HeroCopy() {
  return (
    <>
      <h1 className="text-[clamp(1.875rem,1.38rem+1.97vw,3.75rem)] leading-[1.12] font-semibold tracking-tight text-ink break-words lg:max-[1919px]:text-[40px] min-[1920px]:text-[60px]">
        Quality Medical Supplies
        <br />
        for Healthcare Professionals
      </h1>

      <p className="mt-5 max-w-[48ch] text-[clamp(1rem,0.92rem+0.4vw,1.125rem)] leading-relaxed text-ink-muted">
        We supply a wide range of medical disposables and healthcare products to hospitals,
        clinics, laboratories and distributors.
      </p>

      <div className="mt-7 flex flex-wrap gap-3.5">
        <a
          href="#categories"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-[clamp(1.25rem,1rem+1vw,1.5rem)] py-[clamp(0.75rem,0.65rem+0.5vw,0.875rem)] text-[clamp(0.875rem,0.83rem+0.2vw,0.9375rem)] font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          <PackageIcon width={18} height={18} />
          Browse Products
        </a>
        <a
          href="#rfq"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-[clamp(1.25rem,1rem+1vw,1.5rem)] py-[clamp(0.75rem,0.65rem+0.5vw,0.875rem)] text-[clamp(0.875rem,0.83rem+0.2vw,0.9375rem)] font-semibold text-ink shadow-sm transition-colors hover:border-accent hover:text-accent"
        >
          <QuoteFileIcon width={18} height={18} />
          Request a Quote
        </a>
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section className="bg-[var(--color-tint-blue)]">
      {/* Mobile: no hero image — a cropped or stacked product photo didn't
          read well at this width, so it's text-only on the tint background. */}
      <div className="px-5 py-12 sm:hidden">
        <HeroCopy />
      </div>

      {/* Tablet and up: full-bleed background photo, edge to edge, with the
          copy overlaid on top. */}
      <div className="relative isolate hidden min-h-[clamp(26rem,60vh,46.5rem)] overflow-hidden sm:block lg:max-[1919px]:min-h-[510px] min-[1920px]:min-h-[710px]">
        <Image
          src="/images/hero.png"
          alt={HERO_ALT}
          fill
          sizes="100vw"
          className="object-cover min-[1920px]:scale-[1.078]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[80rem] px-8">
            <div className="max-w-sm lg:max-w-xl">
              <HeroCopy />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
