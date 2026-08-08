"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

export default function TOC({
  contentSelector = "article",
  headingSelector = "h2, h3",
}) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const article = document.querySelector(contentSelector);

    if (!article) return;

    const elements = Array.from(article.querySelectorAll(headingSelector));

    const items = elements.map((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
      }

      return {
        id: heading.id,
        text: heading.textContent,
        level: heading.tagName.toLowerCase(),
      };
    });

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [contentSelector, headingSelector]);

  if (!headings.length) return null;

  return (
    <aside className="sticky top-28 hidden lg:block">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-5 flex items-center gap-2">
          <List size={18} className="text-primary" />

          <h2 className="font-semibold text-slate-900 dark:text-white">
            Table of Contents
          </h2>
        </div>

        <nav aria-label="Table of contents">
          <ol className="space-y-2">
            {headings.map((heading) => {
              const active = heading.id === activeId;

              return (
                <li
                  key={heading.id}
                  className={heading.level === "h3" ? "ml-5" : ""}
                >
                  <a
                    href={`#${heading.id}`}
                    className={`block border-l-2 py-1 pl-3 text-sm transition ${
                      active
                        ? "border-primary font-semibold text-primary"
                        : "border-transparent text-slate-500 hover:border-primary/30 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </aside>
  );
}
