import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export const metadata = {
  title: "Article Not Found | Hotevance",
  description:
    "The article you're looking for doesn't exist or may have been moved.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        {/* Status */}
        <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <span className="text-4xl font-bold text-primary">404</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Article Not Found
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Sorry, the blog post you're looking for doesn't exist, may have been
          removed, or its URL has changed.
        </p>

        {/* Suggestions */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            You can:
          </h2>

          <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
            <li>• Browse our latest hospitality technology articles.</li>
            <li>• Search for a different topic.</li>
            <li>• Explore our hotel technology services.</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-white"
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            href="/blog?search="
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-white"
          >
            <Search size={18} />
            Search Articles
          </Link>
        </div>

        {/* Help text */}
        <p className="mt-12 text-sm text-slate-500 dark:text-slate-500">
          Looking for hotel Wi-Fi, GPON, IPTV, PMS integration, or managed IT
          content? Visit our blog to explore the latest guides and best
          practices.
        </p>
      </div>
    </main>
  );
}
