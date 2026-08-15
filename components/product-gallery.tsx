"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIcon } from "@/components/icons";
import { categoryBySlug } from "@/lib/catalog";

export function ProductGallery({
  images,
  name,
  categorySlug,
}: {
  images: string[];
  name: string;
  categorySlug: string;
}) {
  const [active, setActive] = useState(0);
  const hasImages = images.length > 0;
  const Icon = categoryBySlug(categorySlug)?.icon;

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-surface-2">
        {hasImages ? (
          <Image
            src={images[active]}
            alt={name}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            {Icon && (
              <Icon width={64} height={64} strokeWidth={1.2} className="text-accent opacity-90" />
            )}
          </div>
        )}
        <button
          type="button"
          aria-label="Zoom image"
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 text-ink-muted shadow-sm transition-colors hover:text-accent"
        >
          <ZoomIcon width={16} height={16} />
        </button>
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2.5">
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={active === i}
              className={`relative aspect-square overflow-hidden rounded-lg border bg-surface-2 transition-colors ${
                active === i ? "border-accent" : "border-border hover:border-border-strong"
              }`}
            >
              <Image src={src} alt="" fill sizes="10vw" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
