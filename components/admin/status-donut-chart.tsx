"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { rfqStatusBreakdown } from "@/lib/admin-data";

export function StatusDonutChart() {
  const total = rfqStatusBreakdown.reduce((sum, s) => sum + s.value, 0);

  return (
    <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <span className="mb-4 block text-base font-bold text-ink">RFQs by Status</span>
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <div className="relative h-48 w-48 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={rfqStatusBreakdown}
                dataKey="value"
                nameKey="label"
                innerRadius="62%"
                outerRadius="100%"
                strokeWidth={2}
                stroke="var(--color-surface)"
              >
                {rfqStatusBreakdown.map((entry) => (
                  <Cell key={entry.label} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 8,
                  fontSize: 13,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-ink">{total}</span>
            <span className="text-xs text-ink-muted">Total</span>
          </div>
        </div>

        <ul className="flex flex-1 flex-col gap-2.5 self-stretch">
          {rfqStatusBreakdown.map((s) => (
            <li key={s.label} className="flex items-center justify-between gap-3 text-sm">
              <span className="flex items-center gap-2 font-medium text-ink">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: s.color }} />
                {s.label}
              </span>
              <span className="text-ink-muted">
                {s.value} <span className="text-xs">({s.pct})</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
