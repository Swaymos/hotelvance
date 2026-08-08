import Link from "next/link";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  basePath = "/blog",
}) {
  if (totalPages <= 1) return null;

  const createPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const pages = createPages();

  const getHref = (page) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  return (
    <nav aria-label="Pagination" className="mt-16 flex justify-center">
      <ul className="flex flex-wrap items-center gap-2">
        {/* Previous */}
        <li>
          {currentPage > 1 ? (
            <Link
              href={getHref(currentPage - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </Link>
          ) : (
            <span className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-xl border border-slate-200 text-slate-300 dark:border-slate-700 dark:text-slate-600">
              <ChevronLeft size={18} />
            </span>
          )}
        </li>

        {/* Page Numbers */}
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <li key={`ellipsis-${index}`}>
                <span className="flex h-11 w-11 items-center justify-center text-slate-400">
                  <MoreHorizontal size={18} />
                </span>
              </li>
            );
          }

          const active = page === currentPage;

          return (
            <li key={page}>
              <Link
                href={getHref(page)}
                aria-current={active ? "page" : undefined}
                className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-semibold transition ${
                  active
                    ? "border-primary bg-primary text-slate-950"
                    : "border-slate-200 bg-white hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                }`}
              >
                {page}
              </Link>
            </li>
          );
        })}

        {/* Next */}
        <li>
          {currentPage < totalPages ? (
            <Link
              href={getHref(currentPage + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900"
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </Link>
          ) : (
            <span className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-xl border border-slate-200 text-slate-300 dark:border-slate-700 dark:text-slate-600">
              <ChevronRight size={18} />
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
