"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowIcon,
  CartIcon,
  ClockIcon,
  CloseIcon,
  DeliveryIcon,
  MinusIcon,
  PlusIcon,
  QualityIcon,
  QuoteFileIcon,
  SendIcon,
  TrashIcon,
} from "@/components/icons";
import { useCart } from "@/lib/cart-context";

export function RfqCartDrawer() {
  const { items, isOpen, closeCart, notes, setNotes, updateQuantity, removeItem, clearCart } =
    useCart();
  const router = useRouter();

  if (!isOpen) return null;

  function handleSubmitClick() {
    closeCart();
    router.push("/rfq");
  }

  return (
    <div className="fixed inset-0 z-100">
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40"
      />

      <div className="absolute top-0 right-0 flex h-full w-full max-w-md flex-col overflow-y-auto bg-surface shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
          <div className="flex gap-3">
            <CartIcon width={22} height={22} className="mt-0.5 shrink-0 text-ink" />
            <div>
              <h2 className="text-lg font-bold text-ink">RFQ Cart / Quote List</h2>
              <p className="mt-0.5 text-sm text-ink-muted">
                Review your selected items and submit an RFQ.
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-ink-muted transition-colors hover:bg-surface-2"
          >
            <CloseIcon width={18} height={18} />
          </button>
        </div>

        <div className="flex-1 px-6 py-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <CartIcon width={32} height={32} className="text-ink-muted" />
              <p className="text-sm font-semibold text-ink">Your RFQ cart is empty</p>
              <p className="max-w-[28ch] text-sm text-ink-muted">
                Browse the catalog and add products to build your request for quote.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 rounded-lg bg-accent-2-soft px-4 py-3 text-sm font-bold tracking-wide text-accent uppercase">
                <CartIcon width={16} height={16} />
                Request for Quote ({items.length})
              </div>

              <div className="mt-4 divide-y divide-border rounded-lg border border-border">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3.5 p-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-surface-2">
                      {item.image ? (
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      ) : null}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-sm leading-snug font-semibold text-ink">
                        {item.name}
                      </span>
                      {item.tags.length > 0 && (
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-surface-2 px-2 py-0.5 text-[0.6875rem] font-medium text-ink-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="mt-1.5 block text-xs text-ink-muted">SKU: {item.sku}</span>

                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-ink-muted">Quantity</span>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center rounded-lg border border-border-strong">
                            <button
                              type="button"
                              aria-label={`Decrease quantity for ${item.name}`}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="flex h-7 w-7 items-center justify-center text-ink-muted transition-colors hover:text-accent"
                            >
                              <MinusIcon width={13} height={13} />
                            </button>
                            <input
                              type="text"
                              inputMode="numeric"
                              value={item.quantity}
                              onChange={(e) => {
                                const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
                                updateQuantity(item.id, Number.isNaN(n) ? 1 : n);
                              }}
                              className="h-7 w-14 border-x border-border-strong text-center text-sm font-semibold text-ink focus:outline-none"
                            />
                            <button
                              type="button"
                              aria-label={`Increase quantity for ${item.name}`}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center text-ink-muted transition-colors hover:text-accent"
                            >
                              <PlusIcon width={13} height={13} />
                            </button>
                          </div>
                          <span className="text-xs text-ink-muted">{item.unit}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeItem(item.id)}
                      className="h-fit shrink-0 text-ink-muted transition-colors hover:text-best"
                    >
                      <TrashIcon width={16} height={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
                  <QuoteFileIcon width={15} height={15} className="text-ink-muted" />
                  Additional Requirements (Optional)
                </div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value.slice(0, 500))}
                  rows={4}
                  placeholder="Tell us more about your requirements, preferred brands, delivery schedule, special instructions, etc."
                  className="w-full resize-none rounded-lg border border-border-strong bg-surface p-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
                />
                <span className="mt-1 block text-right text-xs text-ink-muted">
                  {notes.length} / 500
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-semibold text-ink">
                  Subtotal Items: {items.length}
                </span>
                <button
                  type="button"
                  onClick={clearCart}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted transition-colors hover:text-best"
                >
                  <TrashIcon width={14} height={14} />
                  Clear All
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleSubmitClick}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  <SendIcon width={16} height={16} />
                  View &amp; Submit RFQ
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <ArrowIcon width={15} height={15} className="rotate-180" />
                  Continue Shopping
                </button>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
                <div className="flex flex-col items-center gap-1.5">
                  <QualityIcon width={18} height={18} className="text-accent" />
                  <span className="text-[0.6875rem] font-semibold text-ink-muted">
                    Secure Inquiry
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <ClockIcon width={18} height={18} className="text-accent" />
                  <span className="text-[0.6875rem] font-semibold text-ink-muted">
                    No Obligation
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <DeliveryIcon width={18} height={18} className="text-accent" />
                  <span className="text-[0.6875rem] font-semibold text-ink-muted">
                    Best Bulk Pricing
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
