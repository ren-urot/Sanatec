"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowIcon,
  AttachIcon,
  CalendarIcon,
  CompanyIcon,
  DeliveryIcon,
  HomeIcon,
  QualityIcon,
  QuoteFileIcon,
  ClockIcon as TimeIcon,
  SuccessIcon,
  UserIcon,
} from "@/components/icons";
import { useCart } from "@/lib/cart-context";

const STEPS = [
  { label: "Review Items", icon: QuoteFileIcon },
  { label: "Company Information", icon: CompanyIcon },
  { label: "Contact Information", icon: UserIcon },
  { label: "Request Details", icon: CalendarIcon },
  { label: "Confirmation", icon: SuccessIcon },
] as const;

const companyTypes = [
  "Hospital",
  "Clinic",
  "Laboratory",
  "Distributor",
  "Pharmacy",
  "Other",
];

const provinces = [
  "Metro Manila",
  "Cebu",
  "Davao",
  "Laguna",
  "Cavite",
  "Other",
];

type FormState = {
  companyName: string;
  companyType: string;
  businessAddress: string;
  city: string;
  province: string;
  country: string;
  contactPerson: string;
  position: string;
  email: string;
  phone: string;
  altPhone: string;
  deliveryDate: string;
  deliveryLocation: string;
  additionalRequirements: string;
};

function generateRequestId() {
  const n = Math.floor(10000 + Math.random() * 89999);
  return `RFQ-2026-${n}`;
}

function StepDots({ current }: { current: number }) {
  return (
    <div className="mb-8 flex items-center">
      {STEPS.map((step, i) => {
        const Icon = step.icon;
        const state = i < current ? "done" : i === current ? "active" : "upcoming";
        return (
          <div key={step.label} className="flex flex-1 items-center last:flex-none">
            <div className="flex shrink-0 items-center gap-2.5">
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 ${
                  state === "active"
                    ? "border-accent text-accent"
                    : state === "done"
                      ? "border-accent bg-accent text-white"
                      : "border-border-strong text-ink-muted"
                }`}
              >
                <Icon width={16} height={16} />
              </span>
              <div className="hidden xl:block">
                <span
                  className={`block text-[0.6875rem] font-bold tracking-wider uppercase ${state === "active" ? "text-accent" : "text-ink-muted"}`}
                >
                  Step {i + 1}
                </span>
                <span className="block text-sm font-semibold whitespace-nowrap text-ink">
                  {step.label}
                </span>
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`mx-1.5 h-0.5 w-full min-w-3 sm:mx-3 sm:min-w-6 ${i < current ? "bg-accent" : "bg-border"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-best">*</span>}
      </span>
      {children}
    </label>
  );
}

const inputClasses =
  "w-full rounded-lg border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none";

export function RfqForm() {
  const { items, notes, clearCart, hydrated } = useCart();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [form, setForm] = useState<FormState>({
    companyName: "",
    companyType: "",
    businessAddress: "",
    city: "",
    province: "",
    country: "Philippines",
    contactPerson: "",
    position: "",
    email: "",
    phone: "",
    altPhone: "",
    deliveryDate: "",
    deliveryLocation: "",
    additionalRequirements: notes,
  });

  useEffect(() => {
    if (hydrated && items.length === 0 && !submitted) {
      router.replace("/products");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, items.length, submitted]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit() {
    setRequestId(generateRequestId());
    setSubmitted(true);
    setStep(4);
    clearCart();
  }

  if (!hydrated || (items.length === 0 && !submitted)) return null;

  return (
    <div className="mx-auto max-w-[64rem] px-5 py-10 sm:px-8">
      <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        RFQ Submission Form
      </h1>
      <p className="mt-1.5 text-sm text-ink-muted">
        Please complete all required information to submit your Request for Quote.
      </p>

      <div className="mt-8">
        <StepDots current={step} />
      </div>

      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        {step === 0 && (
          <div>
            <span className="mb-1 block text-xs font-bold tracking-wider text-accent uppercase">
              Step 1: Review Items
            </span>
            <p className="mb-5 text-sm text-ink-muted">
              Please review the items in your RFQ list.
            </p>
            <div className="divide-y divide-border rounded-lg border border-border">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-surface-2">
                    {item.image && (
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-ink">{item.name}</span>
                    <span className="block text-xs text-ink-muted">SKU: {item.sku}</span>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-ink">
                    {item.quantity} {item.unit}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold text-ink">Subtotal Items: {items.length}</p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2.75 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Continue
              </button>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-strong px-6 py-2.75 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowIcon width={15} height={15} className="rotate-180" />
                Back to Cart
              </Link>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <span className="mb-1 block text-xs font-bold tracking-wider text-accent uppercase">
              Step 2: Company Information
            </span>
            <p className="mb-5 text-sm text-ink-muted">Tell us about your company.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field label="Company Name" required>
                  <input
                    type="text"
                    value={form.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    placeholder="Enter company name"
                    className={inputClasses}
                  />
                </Field>
              </div>
              <Field label="Company Type" required>
                <select
                  value={form.companyType}
                  onChange={(e) => update("companyType", e.target.value)}
                  className={inputClasses}
                >
                  <option value="">Select company type</option>
                  {companyTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Business Address" required>
                <input
                  type="text"
                  value={form.businessAddress}
                  onChange={(e) => update("businessAddress", e.target.value)}
                  placeholder="Enter complete address"
                  className={inputClasses}
                />
              </Field>
              <Field label="City" required>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  placeholder="Enter city"
                  className={inputClasses}
                />
              </Field>
              <Field label="Province / State" required>
                <select
                  value={form.province}
                  onChange={(e) => update("province", e.target.value)}
                  className={inputClasses}
                >
                  <option value="">Select province/state</option>
                  {provinces.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Country" required>
                <select
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  className={inputClasses}
                >
                  <option value="Philippines">Philippines</option>
                </select>
              </Field>
            </div>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2.75 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Continue
              </button>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-strong px-6 py-2.75 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowIcon width={15} height={15} className="rotate-180" />
                Back
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <span className="mb-1 block text-xs font-bold tracking-wider text-accent uppercase">
              Step 3: Contact Information
            </span>
            <p className="mb-5 text-sm text-ink-muted">Provide your contact details.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Contact Person" required>
                <input
                  type="text"
                  value={form.contactPerson}
                  onChange={(e) => update("contactPerson", e.target.value)}
                  placeholder="Enter full name"
                  className={inputClasses}
                />
              </Field>
              <Field label="Position / Designation">
                <input
                  type="text"
                  value={form.position}
                  onChange={(e) => update("position", e.target.value)}
                  placeholder="Enter position"
                  className={inputClasses}
                />
              </Field>
              <Field label="Email Address" required>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="Enter email address"
                  className={inputClasses}
                />
              </Field>
              <Field label="Phone Number" required>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="Enter phone number"
                  className={inputClasses}
                />
              </Field>
              <Field label="Alternate Phone (Optional)">
                <input
                  type="tel"
                  value={form.altPhone}
                  onChange={(e) => update("altPhone", e.target.value)}
                  placeholder="Enter alternate phone"
                  className={inputClasses}
                />
              </Field>
            </div>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2.75 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Continue
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-strong px-6 py-2.75 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowIcon width={15} height={15} className="rotate-180" />
                Back
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <span className="mb-1 block text-xs font-bold tracking-wider text-accent uppercase">
              Step 4: Request Details
            </span>
            <p className="mb-5 text-sm text-ink-muted">Tell us more about your requirements.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Required Delivery Date (Optional)">
                <input
                  type="date"
                  value={form.deliveryDate}
                  onChange={(e) => update("deliveryDate", e.target.value)}
                  className={inputClasses}
                />
              </Field>
              <Field label="Delivery Location (If different)">
                <input
                  type="text"
                  value={form.deliveryLocation}
                  onChange={(e) => update("deliveryLocation", e.target.value)}
                  placeholder="Enter address"
                  className={inputClasses}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Additional Requirements">
                  <textarea
                    value={form.additionalRequirements}
                    onChange={(e) => update("additionalRequirements", e.target.value)}
                    rows={4}
                    placeholder="Enter any special requirements, specifications, or notes…"
                    className={`${inputClasses} resize-none`}
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Attach File (Optional)">
                  <label className="inline-flex cursor-pointer items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent">
                      <AttachIcon width={15} height={15} />
                      Choose File
                    </span>
                    <span className="text-sm text-ink-muted">No file chosen</span>
                    <input type="file" className="hidden" />
                  </label>
                  <span className="mt-1.5 block text-xs text-ink-muted">
                    PDF, DOC, XLS, JPG (Max 5MB)
                  </span>
                </Field>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2.75 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Submit RFQ
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-strong px-6 py-2.75 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowIcon width={15} height={15} className="rotate-180" />
                Back
              </button>
            </div>
          </div>
        )}

        {step === 4 && submitted && (
          <div className="flex flex-col items-center py-8 text-center">
            <span className="mb-1 block text-xs font-bold tracking-wider text-accent uppercase">
              Step 5: Confirmation
            </span>
            <p className="mb-6 text-sm text-ink-muted">Your RFQ has been received.</p>
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-stock text-stock">
              <SuccessIcon width={32} height={32} />
            </span>
            <h2 className="mt-4 text-xl font-bold text-ink">Request Received!</h2>
            <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-ink-muted">
              Thank you for your inquiry. Our sales team will review your request and get back to
              you shortly with pricing and availability.
            </p>
            <span className="mt-6 text-sm text-ink-muted">Your Request ID</span>
            <span className="text-lg font-bold text-accent">{requestId}</span>
            <p className="mt-4 max-w-[36ch] text-sm text-ink-muted">
              A confirmation email has been sent to your email address.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong px-6 py-2.75 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <HomeIcon width={16} height={16} />
              Return to Home
            </Link>
          </div>
        )}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <QualityIcon width={20} height={20} className="mt-0.5 shrink-0 text-accent" />
          <div>
            <span className="block text-sm font-semibold text-ink">Secure Inquiry</span>
            <span className="block text-sm text-ink-muted">
              Your information is safe with us and will not be shared.
            </span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <TimeIcon width={20} height={20} className="mt-0.5 shrink-0 text-accent" />
          <div>
            <span className="block text-sm font-semibold text-ink">No Obligation</span>
            <span className="block text-sm text-ink-muted">
              Submitting an RFQ is not a commitment to buy.
            </span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <DeliveryIcon width={20} height={20} className="mt-0.5 shrink-0 text-accent" />
          <div>
            <span className="block text-sm font-semibold text-ink">Best Bulk Pricing</span>
            <span className="block text-sm text-ink-muted">
              We provide competitive bulk pricing for your business needs.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
