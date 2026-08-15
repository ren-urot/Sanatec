"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CaretIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CompanyIcon,
  DownloadIcon,
  FilterIcon,
  PlusIcon,
  ResetIcon,
  SearchIcon,
  ViewIcon,
} from "@/components/icons";
import { adminRfqs, statusStyles, type RfqStatus } from "@/lib/admin-data";

const statusOptions: (RfqStatus | "All Status")[] = [
  "All Status",
  "New",
  "Under Review",
  "Contacted",
  "Quoted",
  "Won",
  "Lost",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function RfqManagementTable() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<(typeof statusOptions)[number]>("All Status");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    return adminRfqs.filter((r) => {
      if (status !== "All Status" && r.status !== status) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !r.id.toLowerCase().includes(q) &&
          !r.company.toLowerCase().includes(q) &&
          !r.contactPerson.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [search, status]);

  function toggleRow(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAll() {
    setSelected((prev) => (prev.size === filtered.length ? new Set() : new Set(filtered.map((r) => r.id))));
  }

  return (
    <div className="p-6 sm:p-8">
      <div className="mb-6 flex justify-end gap-2.5">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <DownloadIcon width={15} height={15} />
          Export
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-deep"
        >
          <PlusIcon width={15} height={15} />
          New RFQ
        </button>
      </div>

      <div className="mb-6 flex flex-wrap gap-4">
        <div className="min-w-32 flex-1 rounded-xl border border-border bg-surface p-4">
          <span className="block text-xs font-medium text-ink-muted">Total RFQs</span>
          <span className="block text-xl font-bold text-ink">{adminRfqs.length}</span>
          <span className="text-xs text-ink-muted">All time</span>
        </div>
        {statusOptions.slice(1).map((s) => {
          const count = adminRfqs.filter((r) => r.status === s).length;
          const pct = ((count / adminRfqs.length) * 100).toFixed(1);
          return (
            <div key={s} className="min-w-32 flex-1 rounded-xl border border-border bg-surface p-4">
              <span className="block text-xs font-medium text-ink-muted">{s}</span>
              <span className="block text-xl font-bold text-ink">{count}</span>
              <span className="text-xs text-ink-muted">{pct}%</span>
            </div>
          );
        })}
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface p-4">
        <div className="relative min-w-52 flex-1">
          <SearchIcon
            width={15}
            height={15}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-ink-muted"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search RFQ ID, company, contact, or product…"
            className="w-full rounded-lg border border-border-strong bg-surface py-2 pr-3 pl-9 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
          />
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as (typeof statusOptions)[number])}
          className="rounded-lg border border-border-strong bg-surface px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
        >
          {statusOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <FilterIcon width={14} height={14} />
          Filters
        </button>
        <button
          type="button"
          onClick={() => {
            setSearch("");
            setStatus("All Status");
          }}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <ResetIcon width={14} height={14} />
          Reset
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-surface">
        <table className="w-full min-w-[52rem] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-ink-muted">
              <th className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={filtered.length > 0 && selected.size === filtered.length}
                  onChange={toggleAll}
                  className="h-4 w-4 accent-accent"
                />
              </th>
              <th className="px-2 py-3 font-medium">RFQ ID</th>
              <th className="px-2 py-3 font-medium">Company</th>
              <th className="px-2 py-3 font-medium">Contact Person</th>
              <th className="px-2 py-3 font-medium">Date</th>
              <th className="px-2 py-3 font-medium">Status</th>
              <th className="px-2 py-3 font-medium">Total Items</th>
              <th className="px-2 py-3 font-medium">Sales Owner</th>
              <th className="px-2 py-3 font-medium">Last Updated</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((rfq) => (
              <tr key={rfq.id} className="border-b border-border last:border-b-0 hover:bg-surface-2">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selected.has(rfq.id)}
                    onChange={() => toggleRow(rfq.id)}
                    className="h-4 w-4 accent-accent"
                  />
                </td>
                <td className="px-2 py-3 font-semibold whitespace-nowrap text-accent">
                  <Link href={`/admin/rfq/${rfq.id}`}>{rfq.id}</Link>
                </td>
                <td className="px-2 py-3">
                  <span className="flex items-center gap-2 whitespace-nowrap text-ink">
                    <CompanyIcon width={15} height={15} className="shrink-0 text-ink-muted" />
                    {rfq.company}
                  </span>
                </td>
                <td className="px-2 py-3">
                  <span className="block text-ink">{rfq.contactPerson}</span>
                  <span className="block text-xs text-ink-muted">{rfq.contactEmail}</span>
                </td>
                <td className="px-2 py-3 whitespace-nowrap text-ink-muted">{rfq.date}</td>
                <td className="px-2 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold whitespace-nowrap ${statusStyles[rfq.status]}`}
                  >
                    {rfq.status}
                  </span>
                </td>
                <td className="px-2 py-3 text-ink">{rfq.totalItems}</td>
                <td className="px-2 py-3">
                  <span className="flex items-center gap-2 whitespace-nowrap text-ink">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-2-soft text-[0.625rem] font-bold text-accent">
                      {initials(rfq.salesOwner)}
                    </span>
                    {rfq.salesOwner}
                  </span>
                </td>
                <td className="px-2 py-3 whitespace-nowrap text-ink-muted">{rfq.lastUpdated}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <Link
                      href={`/admin/rfq/${rfq.id}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      <ViewIcon width={13} height={13} />
                      View
                    </Link>
                    <button
                      type="button"
                      aria-label="More actions"
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-border-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <CaretIcon width={13} height={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={10} className="px-4 py-10 text-center text-sm text-ink-muted">
                  No RFQs match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm text-ink-muted">
          Showing 1 to {filtered.length} of {adminRfqs.length} entries
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Previous page"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeftIcon width={14} height={14} />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent bg-accent text-sm font-semibold text-white"
          >
            1
          </button>
          {[2, 3].map((n) => (
            <button
              key={n}
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {n}
            </button>
          ))}
          <span className="px-1 text-sm text-ink-muted">…</span>
          <button
            type="button"
            aria-label="Next page"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRightIcon width={14} height={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
