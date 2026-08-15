"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BannersIcon,
  CategoriesIcon,
  CustomersIcon,
  DashboardIcon,
  DocumentsIcon,
  ExternalLinkIcon,
  InventoryIcon,
  LeadsIcon,
  OrdersIcon,
  PackageIcon,
  PagesIcon,
  QuotationsIcon,
  RfqManagementIcon,
  SettingsIcon,
  BulkIcon as UsersIcon,
} from "@/components/icons";

const sections = [
  {
    heading: "Sales & RFQ",
    items: [
      { label: "Dashboard", href: "/admin", icon: DashboardIcon },
      { label: "RFQ Management", href: "/admin/rfq", icon: RfqManagementIcon },
      { label: "Quotations", href: "/admin/quotations", icon: QuotationsIcon },
      { label: "Orders", href: "/admin/orders", icon: OrdersIcon },
      { label: "Leads", href: "/admin/leads", icon: LeadsIcon },
      { label: "Customers", href: "/admin/customers", icon: CustomersIcon },
    ],
  },
  {
    heading: "Products & Inventory",
    items: [
      { label: "Products", href: "/admin/products", icon: PackageIcon },
      { label: "Categories", href: "/admin/categories", icon: CategoriesIcon },
      { label: "Brands", href: "/admin/brands", icon: BannersIcon },
      { label: "Inventory", href: "/admin/inventory", icon: InventoryIcon },
    ],
  },
  {
    heading: "Content & Settings",
    items: [
      { label: "Documents", href: "/admin/documents", icon: DocumentsIcon },
      { label: "Banners", href: "/admin/banners", icon: BannersIcon },
      { label: "Pages", href: "/admin/pages", icon: PagesIcon },
      { label: "Users", href: "/admin/users", icon: UsersIcon },
      { label: "Settings", href: "/admin/settings", icon: SettingsIcon },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-60 shrink-0 flex-col bg-brand-navy-deep">
      <div className="flex items-center gap-2.5 px-5 py-6">
        <div className="relative h-9 w-9 shrink-0">
          <Image src="/images/logo.png" alt="" fill className="object-contain object-left" />
        </div>
        <div className="leading-none">
          <span className="block text-sm font-bold tracking-wide text-white uppercase">
            Sanatec
          </span>
          <span className="mt-0.5 block text-[0.5625rem] font-medium tracking-[0.2em] text-on-navy-muted uppercase">
            Marketing
          </span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        {sections.map((section) => (
          <div key={section.heading} className="mb-5">
            <span className="mb-1.5 block px-3 text-[0.6875rem] font-bold tracking-wider text-on-navy-muted/70 uppercase">
              {section.heading}
            </span>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const active =
                  item.href === "/admin" ? pathname === "/admin" : pathname?.startsWith(item.href);
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2.25 text-sm font-medium transition-colors ${
                        active
                          ? "bg-accent text-white"
                          : "text-on-navy-muted hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon width={17} height={17} className="shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/10 p-3">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-white/15 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
        >
          View Website
          <ExternalLinkIcon width={14} height={14} />
        </a>
      </div>
    </aside>
  );
}
