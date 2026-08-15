import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  FacebookIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  YoutubeIcon,
} from "@/components/icons";
import { categories } from "@/lib/catalog";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];

const resources = [
  { label: "Product Catalog", href: "/products" },
  { label: "Certifications", href: "#" },
  { label: "Brochures", href: "#" },
  { label: "User Guides", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Track RFQ", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy-deep text-on-navy-muted">
      <div className="mx-auto max-w-[80rem] px-5 pt-16 pb-10 sm:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            {/* The source logo's "MARKETING" line is baked in dark navy and
                unreadable here, so we crop it off and set it back as text. */}
            <div className="relative w-36 sm:w-40" style={{ aspectRatio: "2117 / 650" }}>
              <Image
                src="/images/logo.png"
                alt="Sanatec"
                fill
                className="object-cover object-top"
              />
            </div>
            <span className="mt-1 block font-mono text-[0.5625rem] font-medium tracking-[0.22em] text-on-navy-muted">
              MARKETING
            </span>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-on-navy-muted">
              Quality medical disposables and healthcare products for hospitals, clinics,
              laboratories and distributors across the Philippines.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-accent-2 hover:bg-accent-2/15"
              >
                <FacebookIcon width={15} height={15} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-accent-2 hover:bg-accent-2/15"
              >
                <LinkedinIcon width={15} height={15} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-accent-2 hover:bg-accent-2/15"
              >
                <YoutubeIcon width={15} height={15} />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 font-mono text-[0.6875rem] tracking-wider text-on-navy uppercase">
              Quick Links
            </div>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label} className="mb-2.75">
                  <Link href={link.href} className="text-sm transition-colors hover:text-on-navy">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 font-mono text-[0.6875rem] tracking-wider text-on-navy uppercase">
              Categories
            </div>
            <ul>
              {categories.map((cat) => (
                <li key={cat.code} className="mb-2.75">
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-sm transition-colors hover:text-on-navy"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 font-mono text-[0.6875rem] tracking-wider text-on-navy uppercase">
              Resources
            </div>
            <ul>
              {resources.map((resource) => (
                <li key={resource.label} className="mb-2.75">
                  <Link
                    href={resource.href}
                    className="text-sm transition-colors hover:text-on-navy"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 font-mono text-[0.6875rem] tracking-wider text-on-navy uppercase">
              Contact Us
            </div>
            <ul>
              <li className="mb-3.5 flex items-start gap-2.5 text-sm">
                <PinIcon width={16} height={16} className="mt-0.5 shrink-0 text-accent-2" />
                <span>
                  123 Healthcare Avenue,
                  <br />
                  Makati City, Metro Manila,
                  <br />
                  Philippines 1200
                </span>
              </li>
              <li className="mb-3.5 flex items-center gap-2.5 text-sm">
                <PhoneIcon width={16} height={16} className="shrink-0 text-accent-2" />
                (02) 8123 4567
              </li>
              <li className="mb-3.5 flex items-center gap-2.5 text-sm">
                <MailIcon width={16} height={16} className="shrink-0 text-accent-2" />
                sales@sanatecmarketing.com
              </li>
              <li className="mb-3.5 flex items-center gap-2.5 text-sm">
                <ClockIcon width={16} height={16} className="shrink-0 text-accent-2" />
                Mon–Fri, 8:00 AM–5:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/12 py-5.5 text-[0.8125rem]">
          <span>© 2026 Sanatec Marketing. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-on-navy">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-on-navy">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
