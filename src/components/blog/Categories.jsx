"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Categories({
  categories = [],
  activeCategory = "All",
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleCategoryChange(event) {
    const value = event.target.value;

    const params = new URLSearchParams(searchParams.toString());

    /*
     * Reset pagination when changing category.
     */
    params.delete("page");

    if (!value || value === "All") {
      params.delete("category");
    } else {
      /*
       * IMPORTANT:
       * The blog page expects `category`.
       */
      params.set("category", value);
    }

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  }

  if (!categories.length) {
    return null;
  }

  return (
    <div className="w-full lg:w-auto">
      <label
        htmlFor="blog-category"
        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        Browse by category
      </label>

      <div className="relative">
        <select
          id="blog-category"
          value={activeCategory}
          onChange={handleCategoryChange}
          className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-11 text-sm font-medium text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white lg:min-w-[220px]"
        >
          {categories.map((category, index) => (
            <option
              key={`${category.slug || category.name}-${index}`}
              value={category.name}
            >
              {category.name}
              {typeof category.count === "number" ? ` (${category.count})` : ""}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}
