import Image from "next/image";
import { QuoteFileIcon } from "@/components/icons";

function RfqCopy() {
  return (
    <>
      <span className="text-xs font-bold tracking-wider text-accent uppercase">
        Need a Custom Quote?
      </span>
      <h2 className="mt-3 max-w-[18ch] text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        Let us help you find the right products for your needs.
      </h2>
      <p className="mt-3.5 max-w-[42ch] text-[0.9375rem] leading-relaxed text-ink-muted">
        Our team will get back to you with the best pricing and solution tailored to your
        requirements.
      </p>
      <a
        href="#"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.25 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        <QuoteFileIcon width={17} height={17} />
        Request a Quote
      </a>
    </>
  );
}

export function RfqBand() {
  return (
    <section id="rfq" className="pb-14 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        {/* Mobile: card stays flat text-only — a cropped photo behind full-
            width text didn't read well, same tradeoff as the hero. */}
        <div className="rounded-2xl border border-[var(--color-tint-blue-border)] bg-[var(--color-tint-blue)] p-8 sm:hidden">
          <RfqCopy />
        </div>

        {/* Tablet and up: the photo is the entire card, edge to edge, with
            copy overlaid on top. */}
        <div className="relative isolate hidden min-h-[22rem] overflow-hidden rounded-2xl border border-[var(--color-tint-blue-border)] sm:block lg:min-h-[26rem]">
          <Image
            src="/images/request-a-quote.png"
            alt="A member of the Sanatec sales team reviewing a request for quote"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative flex h-full items-center px-10 py-14 lg:px-14">
            <div className="max-w-sm lg:max-w-md">
              <RfqCopy />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
