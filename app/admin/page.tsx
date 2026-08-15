import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { RfqOverviewChart } from "@/components/admin/rfq-overview-chart";
import { StatCard } from "@/components/admin/stat-card";
import { StatusDonutChart } from "@/components/admin/status-donut-chart";
import {
  BannersIcon,
  CategoriesIcon,
  ClockIcon,
  LostIcon,
  PackageIcon,
  QuotedIcon,
  RfqManagementIcon,
  UserIcon,
  WonIcon,
} from "@/components/icons";
import {
  adminRfqs,
  dashboardStats,
  notifications,
  recentLeads,
  statusStyles,
  systemActivity,
  topRequestedProducts,
} from "@/lib/admin-data";

export const metadata: Metadata = { title: "Dashboard | Sanatec Admin" };

const statIcons = [RfqManagementIcon, ClockIcon, QuotedIcon, WonIcon, LostIcon];

const quickActions = [
  { label: "Add Product", icon: PackageIcon, href: "/admin/products" },
  { label: "Add Category", icon: CategoriesIcon, href: "/admin/categories" },
  { label: "Add Brand", icon: BannersIcon, href: "/admin/brands" },
  { label: "Upload Document", icon: BannersIcon, href: "/admin/documents" },
  { label: "Add User", icon: UserIcon, href: "/admin/users" },
];

const activityTone = { rfq: "bg-accent", quote: "bg-stock", user: "bg-purple" } as const;
const notificationTone = { accent: "bg-accent", best: "bg-best", danger: "bg-danger" } as const;

export default function AdminDashboardPage() {
  return (
    <>
      <AdminTopbar title="Dashboard" subtitle="Welcome back, Admin!" />

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap gap-4">
          {dashboardStats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} icon={statIcons[i]} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
          <RfqOverviewChart />
          <StatusDonutChart />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-bold text-ink">Recent RFQs</span>
              <Link href="/admin/rfq" className="text-sm font-semibold text-accent hover:text-accent-hover">
                View All
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-ink-muted">
                    <th className="pb-2 font-medium">RFQ ID</th>
                    <th className="pb-2 font-medium">Company</th>
                    <th className="pb-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {adminRfqs.slice(0, 5).map((rfq) => (
                    <tr key={rfq.id} className="border-t border-border">
                      <td className="py-2.5 pr-2 font-semibold whitespace-nowrap text-accent">
                        <Link href={`/admin/rfq/${rfq.id}`}>{rfq.id}</Link>
                      </td>
                      <td className="py-2.5 pr-2 text-ink">{rfq.company}</td>
                      <td className="py-2.5">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold whitespace-nowrap ${statusStyles[rfq.status]}`}
                        >
                          {rfq.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-bold text-ink">Top Requested Products</span>
              <Link href="/admin/products" className="text-sm font-semibold text-accent hover:text-accent-hover">
                View All
              </Link>
            </div>
            <ul className="flex flex-col gap-3.5">
              {topRequestedProducts.map((p) => (
                <li key={p.name} className="flex items-center gap-3">
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-surface-2">
                    <Image src={p.image} alt="" fill className="object-cover" />
                  </div>
                  <span className="min-w-0 flex-1 truncate text-sm text-ink">{p.name}</span>
                  <span className="shrink-0 text-sm font-semibold text-ink-muted">{p.requests}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-bold text-ink">Recent Leads</span>
              <Link href="/admin/leads" className="text-sm font-semibold text-accent hover:text-accent-hover">
                View All
              </Link>
            </div>
            <ul className="flex flex-col gap-3.5">
              {recentLeads.map((lead) => (
                <li key={lead.company} className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-ink">
                      {lead.company}
                    </span>
                    <span className="block text-xs text-ink-muted">{lead.contact}</span>
                  </div>
                  <span className="shrink-0 text-xs text-ink-muted">{lead.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <span className="mb-4 block text-base font-bold text-ink">System Activity</span>
            <ul className="flex flex-col gap-4">
              {systemActivity.map((a) => (
                <li key={a.text} className="flex items-start gap-3">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${activityTone[a.type]}`} />
                  <div className="min-w-0">
                    <span className="block text-sm text-ink">{a.text}</span>
                    <span className="block text-xs text-ink-muted">{a.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <span className="mb-4 block text-base font-bold text-ink">Quick Actions</span>
            <div className="grid grid-cols-3 gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex flex-col items-center gap-2 rounded-lg border border-border p-3 text-center transition-colors hover:border-accent hover:bg-accent-2-soft"
                >
                  <action.icon width={18} height={18} className="text-accent" />
                  <span className="text-[0.6875rem] leading-tight font-medium text-ink">
                    {action.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-bold text-ink">Notifications</span>
              <span className="text-sm font-semibold text-accent">View All</span>
            </div>
            <ul className="flex flex-col gap-4">
              {notifications.map((n) => (
                <li key={n.text} className="flex items-start gap-3">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${notificationTone[n.tone]}`} />
                  <div className="min-w-0">
                    <span className="block text-sm text-ink">{n.text}</span>
                    <span className="block text-xs text-ink-muted">{n.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
