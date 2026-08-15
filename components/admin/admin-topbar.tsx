"use client";

import { CaretIcon, NotificationIcon, SearchIcon, UserIcon } from "@/components/icons";

export function AdminTopbar({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-surface px-6 py-5 sm:px-8">
      <div>
        {breadcrumb && (
          <span className="mb-1 block text-xs text-ink-muted">{breadcrumb}</span>
        )}
        <h1 className="text-2xl font-bold tracking-tight text-ink">{title}</h1>
        {subtitle && <p className="mt-0.5 text-sm text-ink-muted">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <SearchIcon
            width={16}
            height={16}
            className="absolute top-1/2 left-3.5 -translate-y-1/2 text-ink-muted"
          />
          <input
            type="text"
            placeholder="Search RFQs, products, customers…"
            className="w-72 rounded-lg border border-border-strong bg-surface py-2.5 pr-3 pl-10 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
          />
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
        >
          <NotificationIcon width={18} height={18} />
          <span className="absolute -top-1 -right-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-best px-1 text-[0.625rem] font-bold text-white">
            5
          </span>
        </button>

        <button type="button" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-ink-muted">
            <UserIcon width={17} height={17} />
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-semibold text-ink">Admin User</span>
            <span className="block text-xs text-ink-muted">Super Admin</span>
          </span>
          <CaretIcon width={14} height={14} className="hidden text-ink-muted sm:block" />
        </button>
      </div>
    </div>
  );
}
