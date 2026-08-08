"use client";

import { CheckCircle2 } from "lucide-react";

export const servicesOverview = ({
  badge = "Overview",
  title,
  description,
  paragraphs = [],
  highlights = [],
  stats = [],
}) => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Content */}

          <div>
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              {badge}
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              {title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-8 space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Panel */}

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Key Highlights
            </h3>

            <div className="mt-8 space-y-5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-blue-600 flex-shrink-0" />

                  <span className="leading-7 text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {stats.length > 0 && (
              <div className="mt-10 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white p-5 text-center shadow-sm"
                  >
                    <div className="text-3xl font-bold text-slate-900">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};
