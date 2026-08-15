"use client";

import { useState } from "react";
import { ChevronUpIcon, SearchIcon } from "@/components/icons";
import { brands, categories } from "@/lib/catalog";

export type ProductTypeKey = "sterile" | "non-sterile" | "disposable" | "single-use";
export type AvailabilityKey = "in-stock" | "out-of-stock";

const productTypes: { key: ProductTypeKey; label: string; count: number }[] = [
  { key: "sterile", label: "Sterile", count: 75 },
  { key: "non-sterile", label: "Non-Sterile", count: 89 },
  { key: "disposable", label: "Disposable", count: 142 },
  { key: "single-use", label: "Single Use", count: 164 },
];

const availability: { key: AvailabilityKey; label: string; count: number }[] = [
  { key: "in-stock", label: "In Stock", count: 120 },
  { key: "out-of-stock", label: "Out of Stock", count: 12 },
];

export type FiltersState = {
  search: string;
  categories: Set<string>;
  brands: Set<string>;
  types: Set<ProductTypeKey>;
  availability: Set<AvailabilityKey>;
};

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-t border-border py-5 first:border-t-0 first:pt-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-xs font-bold tracking-wider text-ink uppercase"
      >
        {title}
        <ChevronUpIcon
          width={15}
          height={15}
          className={`text-ink-muted transition-transform ${open ? "" : "rotate-180"}`}
        />
      </button>
      {open && <div className="mt-3.5 flex flex-col gap-2.5">{children}</div>}
    </div>
  );
}

function CheckboxRow({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-2 text-sm text-ink-muted">
      <span className="flex items-center gap-2.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 rounded border-border-strong text-accent accent-accent"
        />
        <span className={checked ? "text-ink" : ""}>{label}</span>
      </span>
      <span className="text-xs text-ink-muted">({count})</span>
    </label>
  );
}

export function ProductFilters({
  filters,
  onChange,
}: {
  filters: FiltersState;
  onChange: (next: FiltersState) => void;
}) {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const visibleBrands = showAllBrands ? brands : brands.slice(0, 5);

  function toggleSet<T>(set: Set<T>, value: T): Set<T> {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  }

  const isEmpty =
    !filters.search &&
    filters.categories.size === 0 &&
    filters.brands.size === 0 &&
    filters.types.size === 0 &&
    filters.availability.size === 0;

  return (
    <aside className="w-full shrink-0 lg:w-64">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-wider text-ink uppercase">Filters</span>
        {!isEmpty && (
          <button
            type="button"
            onClick={() =>
              onChange({
                search: "",
                categories: new Set(),
                brands: new Set(),
                types: new Set(),
                availability: new Set(),
              })
            }
            className="text-xs font-semibold text-accent hover:text-accent-hover"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="product-search" className="mb-2 block text-sm font-semibold text-ink">
          Search Products
        </label>
        <div className="relative">
          <input
            id="product-search"
            type="text"
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            placeholder="Search by product name, SKU…"
            className="w-full rounded-lg border border-border-strong bg-surface py-2 pr-9 pl-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
          />
          <SearchIcon
            width={15}
            height={15}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-ink-muted"
          />
        </div>
      </div>

      <FilterSection title="Category">
        {categories.map((cat) => (
          <CheckboxRow
            key={cat.slug}
            label={cat.name}
            count={cat.count}
            checked={filters.categories.has(cat.slug)}
            onChange={() => onChange({ ...filters, categories: toggleSet(filters.categories, cat.slug) })}
          />
        ))}
      </FilterSection>

      <FilterSection title="Brand">
        {visibleBrands.map((brand) => (
          <CheckboxRow
            key={brand.name}
            label={brand.name}
            count={brand.count}
            checked={filters.brands.has(brand.name)}
            onChange={() => onChange({ ...filters, brands: toggleSet(filters.brands, brand.name) })}
          />
        ))}
        {!showAllBrands && (
          <button
            type="button"
            onClick={() => setShowAllBrands(true)}
            className="text-left text-sm font-semibold text-accent hover:text-accent-hover"
          >
            + Show more
          </button>
        )}
      </FilterSection>

      <FilterSection title="Product Type">
        {productTypes.map((type) => (
          <CheckboxRow
            key={type.key}
            label={type.label}
            count={type.count}
            checked={filters.types.has(type.key)}
            onChange={() => onChange({ ...filters, types: toggleSet(filters.types, type.key) })}
          />
        ))}
      </FilterSection>

      <FilterSection title="Availability">
        {availability.map((a) => (
          <CheckboxRow
            key={a.key}
            label={a.label}
            count={a.count}
            checked={filters.availability.has(a.key)}
            onChange={() =>
              onChange({ ...filters, availability: toggleSet(filters.availability, a.key) })
            }
          />
        ))}
      </FilterSection>

      <button
        type="button"
        onClick={() =>
          onChange({
            search: "",
            categories: new Set(),
            brands: new Set(),
            types: new Set(),
            availability: new Set(),
          })
        }
        className="mt-5 w-full rounded-lg border border-border-strong py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
      >
        Clear All Filters
      </button>
    </aside>
  );
}
