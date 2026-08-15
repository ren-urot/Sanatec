import type { ComponentType, SVGProps } from "react";
import { TrendDownIcon, TrendUpIcon } from "@/components/icons";

const colorMap: Record<string, string> = {
  accent: "bg-accent-2-soft text-accent",
  best: "bg-best-bg text-best",
  stock: "bg-stock-bg text-stock",
  purple: "bg-purple-bg text-purple",
  danger: "bg-danger-bg text-danger",
  new: "bg-new-bg text-new",
};

export function StatCard({
  icon: Icon,
  label,
  value,
  delta,
  trend,
  color,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: number | string;
  delta?: string;
  trend?: "up" | "down";
  color: string;
}) {
  return (
    <div className="flex flex-1 items-start gap-3.5 rounded-xl border border-border bg-surface p-5">
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${colorMap[color] ?? colorMap.accent}`}
      >
        <Icon width={20} height={20} />
      </span>
      <div className="min-w-0">
        <span className="block text-sm font-medium text-ink-muted">{label}</span>
        <span className="block text-2xl font-bold text-ink">{value}</span>
        {delta && (
          <span
            className={`mt-0.5 inline-flex items-center gap-1 text-xs font-semibold ${
              trend === "down" ? "text-danger" : "text-stock"
            }`}
          >
            {trend === "down" ? (
              <TrendDownIcon width={12} height={12} />
            ) : (
              <TrendUpIcon width={12} height={12} />
            )}
            {delta} vs last 7 days
          </span>
        )}
      </div>
    </div>
  );
}
