import { BulkIcon, DeliveryIcon, QualityIcon, SupportIcon } from "@/components/icons";

const items = [
  {
    icon: QualityIcon,
    title: "Quality Assured",
    body: "We supply only high-quality and certified medical products.",
  },
  {
    icon: DeliveryIcon,
    title: "Reliable Delivery",
    body: "Timely delivery to support your critical operations.",
  },
  {
    icon: BulkIcon,
    title: "Bulk Pricing",
    body: "Competitive pricing for bulk and regular orders.",
  },
  {
    icon: SupportIcon,
    title: "Dedicated Support",
    body: "Our team is here to help you with your needs.",
  },
];

export function TrustStrip() {
  return (
    <section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:pb-24">
      <div className="relative z-10 mx-auto -mt-8 flex min-h-[171px] max-w-[80rem] items-center rounded-2xl border border-border bg-surface p-7 shadow-[0_12px_32px_-16px_rgba(16,24,38,0.18)] sm:-mt-10 sm:p-9">
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex items-start gap-3.5">
              <span className="flex shrink-0 items-center justify-center text-accent">
                <Icon width={42} height={42} />
              </span>
              <div>
                <span className="text-sm font-bold tracking-tight text-ink uppercase">
                  {title}
                </span>
                <p className="mt-1 text-sm leading-snug text-ink-muted">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
