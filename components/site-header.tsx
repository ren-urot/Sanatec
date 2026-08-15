"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/catalog";
import {
  CaretIcon,
  CloseIcon,
  DownloadIcon,
  GlobeIcon,
  MenuIcon,
  SearchIcon,
  TrackIcon,
} from "@/components/icons";

const navLinks = [
  { label: "Brands", href: "#" },
  { label: "Resources", href: "#", caret: true },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];

function navLinkClasses(active: boolean) {
  const base = "relative flex items-center gap-1.5 rounded-sm px-3.5 py-2.5 text-sm font-medium transition-colors";
  return active
    ? `${base} text-[var(--chrome-accent)] after:absolute after:bottom-0 after:left-3.5 after:h-0.5 after:w-[calc(100%-1.75rem)] after:rounded-full after:bg-[var(--chrome-accent)] after:content-['']`
    : `${base} text-[var(--chrome-ink)] hover:text-[var(--chrome-accent)]`;
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProducts = pathname?.startsWith("/products");

  return (
    <>
      {/* Utility bar */}
      <div className="border-b border-[var(--chrome-border)] bg-[var(--chrome-bg)] text-xs text-[var(--chrome-muted)]">
        <div className="mx-auto flex h-9.5 max-w-[80rem] items-center justify-between gap-4 px-5 sm:px-8">
          <div className="flex items-center gap-5">
            <a href="tel:+63281234567" className="transition-colors hover:text-[var(--chrome-accent)]">
              (02) 8123 4567
            </a>
            <span className="hidden sm:inline">sales@sanatecmarketing.com</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="hidden items-center gap-1.5 transition-colors hover:text-[var(--chrome-accent)] md:inline-flex"
            >
              <DownloadIcon width={13} height={13} />
              Download Catalog
            </a>
            <a
              href="#"
              className="hidden items-center gap-1.5 transition-colors hover:text-[var(--chrome-accent)] md:inline-flex"
            >
              <TrackIcon width={13} height={13} />
              Track RFQ
            </a>
            <span className="inline-flex items-center gap-1 text-[var(--chrome-muted)]">
              <GlobeIcon width={13} height={13} />
              EN
              <CaretIcon width={11} height={11} className="opacity-70" />
            </span>
          </div>
        </div>
      </div>

      {/* Main header — a fixed light surface always, since the logo file has
          dark text baked into its pixels and needs to stay legible whether
          the visitor's system is in light or dark mode. */}
      <header className="sticky top-0 z-40 border-b border-[var(--chrome-border)] bg-[var(--chrome-bg)]">
        <div className="mx-auto flex h-[4.75rem] max-w-[80rem] items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Sanatec Marketing, home">
            <Image
              src="/images/logo.png"
              alt="Sanatec Marketing"
              width={2117}
              height={743}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <Link href="/" className={navLinkClasses(isHome)}>
              Home
            </Link>

            <div className="group relative">
              <Link href="/products" className={navLinkClasses(Boolean(isProducts))}>
                Products <CaretIcon width={15} height={15} className="opacity-60" />
              </Link>
              <div className="invisible absolute top-full left-1/2 z-10 w-[28.75rem] -translate-x-1/2 translate-y-1 rounded-lg border border-[var(--chrome-border)] bg-[var(--chrome-bg)] p-2.5 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100">
                <div className="grid grid-cols-2 gap-0.5">
                  {categories.map((cat) => (
                    <Link
                      key={cat.code}
                      href={`/products?category=${cat.slug}`}
                      className="flex items-center gap-2 rounded-sm px-2.5 py-2.25 text-sm text-[var(--chrome-ink)] transition-colors hover:bg-[var(--chrome-surface-2)] hover:text-[var(--chrome-accent)]"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 rounded-sm px-3.5 py-2.5 text-sm font-medium text-[var(--chrome-ink)] transition-colors hover:text-[var(--chrome-accent)]"
              >
                {link.label}
                {link.caret && <CaretIcon width={15} height={15} className="opacity-60" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search products"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--chrome-border)] text-[var(--chrome-muted)] transition-colors hover:border-[var(--chrome-accent)] hover:text-[var(--chrome-accent)] lg:flex"
            >
              <SearchIcon width={18} height={18} />
            </button>
            <a
              href="#rfq"
              className="hidden items-center justify-center rounded-lg bg-[var(--chrome-accent)] px-5 py-2.75 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-[var(--chrome-accent-hover)] sm:inline-flex"
            >
              Request a Quote
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-sm text-[var(--chrome-ink)] transition-colors hover:bg-[var(--chrome-surface-2)] lg:hidden"
            >
              <MenuIcon width={22} height={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — same fixed-light chrome as the header, for the same
          logo-legibility reason. */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--chrome-bg)] lg:hidden">
          <div className="flex h-[4.75rem] items-center justify-between border-b border-[var(--chrome-border)] px-5 sm:px-8">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/images/logo.png" alt="Sanatec Marketing" width={2117} height={743} className="h-9 w-auto" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="flex h-9.5 w-9.5 items-center justify-center rounded-sm text-[var(--chrome-muted)] transition-colors hover:bg-[var(--chrome-surface-2)]"
            >
              <CloseIcon width={20} height={20} />
            </button>
          </div>
          <div className="h-[calc(100%-4.75rem)] overflow-y-auto px-5 py-6 sm:px-8">
            {[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Brands", href: "#" },
              { label: "Resources", href: "#" },
              { label: "About Us", href: "#" },
              { label: "Contact Us", href: "#" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-[var(--chrome-border)] py-3.5 text-base font-semibold text-[var(--chrome-ink)]"
              >
                {label}
              </Link>
            ))}
            <a
              href="#rfq"
              onClick={() => setMobileOpen(false)}
              className="mt-5 flex w-full items-center justify-center rounded-lg bg-[var(--chrome-accent)] px-5 py-3 text-sm font-semibold text-white"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </>
  );
}
