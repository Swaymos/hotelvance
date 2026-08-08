"use client";

import { Hash } from "lucide-react";

export default function Tags({ posts = [], activeTag = "All", onTagChange }) {
  // Count tags
  const tagCounts = posts.reduce((acc, post) => {
    if (!post.tags) return acc;

    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });

    return acc;
  }, {});

  const tags = [
    {
      name: "All",
      count: posts.length,
    },
    ...Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({
        name,
        count,
      })),
  ];

  return (
    <section aria-labelledby="blog-tags">
      <div className="mb-5 flex items-center gap-2">
        <Hash size={18} className="text-primary" />

        <h2
          id="blog-tags"
          className="text-lg font-semibold text-slate-900 dark:text-white"
        >
          Browse by Tag
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => {
          const active = activeTag === tag.name;

          return (
            <button
              key={tag.name}
              onClick={() => onTagChange?.(tag.name)}
              aria-pressed={active}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active
                  ? "border-primary bg-primary text-slate-950"
                  : "border-slate-200 bg-white text-slate-700 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              <Hash size={14} />

              <span>{tag.name}</span>

              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  active
                    ? "bg-white/30"
                    : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {tag.count}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
