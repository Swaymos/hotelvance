"use client";

import { useEffect, useState } from "react";
import { List, ChevronDown } from "lucide-react";

export default function TOC({
  contentSelector = "article",
  headingSelector = "h2, h3",
}) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(true);

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

  function handleClick(id) {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Update URL without causing a page reload
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <aside className="sticky top-28">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
        {/* Header */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-900"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <List className="h-4 w-4 text-primary" />
            </div>

            <h2 className="font-semibold text-slate-900 dark:text-white">
              Table of Contents
            </h2>
          </div>

          <ChevronDown
            className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Content */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <nav
              aria-label="Table of contents"
              className="border-t border-slate-100 px-5 py-4 dark:border-slate-800"
            >
              <ol className="space-y-1">
                {headings.map((heading) => {
                  const active = heading.id === activeId;

                  const isH3 = heading.level === "h3";

                  return (
                    <li key={heading.id} className={isH3 ? "ml-4" : ""}>
                      <button
                        type="button"
                        onClick={() => handleClick(heading.id)}
                        className={`
                          block w-full border-l-2 py-2 pl-3
                          text-left text-sm
                          leading-5
                          transition-all
                          duration-200
                          ${
                            active
                              ? "border-primary font-semibold text-primary"
                              : "border-transparent text-slate-500 hover:border-primary/30 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                          }
                        `}
                      >
                        {heading.text}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
}
