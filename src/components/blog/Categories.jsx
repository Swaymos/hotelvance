"use client";

import { ChevronDown } from "lucide-react";

export default function Categories({
  categories = [],
  value = "all",
  onChange,
}) {
  return (
    <div className="relative w-full max-w-xs">
      <label htmlFor="blog-category" className="sr-only">
        Browse by category
      </label>

      <select
        id="blog-category"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-5 py-3.5 pr-12 text-sm font-medium text-slate-700 shadow-sm outline-none transition hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      >
        <option value="all">Browse by category</option>

        {categories.map((category) => {
          const name =
            typeof category === "string"
              ? category
              : category.name || category.title;

          return (
            <option key={name} value={name}>
              {name}
            </option>
          );
        })}
      </select>

      <ChevronDown
        className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
    </div>
  );
}
