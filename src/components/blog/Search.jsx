"use client";

import { useEffect, useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";

  const [query, setQuery] = useState(currentSearch);

  useEffect(() => {
    setQuery(currentSearch);
  }, [currentSearch]);

  function handleSubmit(event) {
    event.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      params.set("search", trimmedQuery);
    } else {
      params.delete("search");
    }

    // Always return to page 1 when performing a new search.
    params.delete("page");

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  }

  function clearSearch() {
    setQuery("");

    const params = new URLSearchParams(searchParams.toString());

    params.delete("search");
    params.delete("page");

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="w-full max-w-xl">
      <label htmlFor="blog-search" className="sr-only">
        Search articles
      </label>

      <div className="relative">
        <SearchIcon
          size={20}
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          id="blog-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search hotel technology articles..."
          autoComplete="off"
          className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-12 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />

        {query && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-900 dark:hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </form>
  );
}
