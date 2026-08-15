import Image from "next/image";
import { PackageIcon, QuoteFileIcon } from "@/components/icons";

const HERO_ALT =
  "Nitrile gloves, face masks, safety glasses, syringes and IV fluid from the Sanatec catalog";

function HeroCopy() {
  return (
    <>
      <h1 className="text-4xl leading-[1.12] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
        Quality Medical Supplies for Healthcare Professionals
      </h1>

      <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-ink-muted sm:text-lg">
        We supply a wide range of medical disposables and healthcare products to hospitals,
        clinics, laboratories and distributors.
      </p>

      <div className="mt-7 flex flex-wrap gap-3.5">
        <a
          href="#categories"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          <PackageIcon width={18} height={18} />
          Browse Products
        </a>
        <a
          href="#rfq"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-6 py-3.5 text-[0.9375rem] font-semibold text-ink shadow-sm transition-colors hover:border-accent hover:text-accent"
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
      <div className="relative isolate hidden min-h-[53rem] overflow-hidden sm:block lg:min-h-[59rem]">
        <Image
          src="/images/hero.png"
          alt={HERO_ALT}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--color-tint-blue) 0%, var(--color-tint-blue) 48%, transparent 82%)",
          }}
        />
        <div className="relative mx-auto flex h-full max-w-[80rem] items-center px-8 py-16 lg:py-20">
          <div className="max-w-sm lg:max-w-xl">
            <HeroCopy />
          </div>
        </div>
      </div>
    </section>
  );
}
