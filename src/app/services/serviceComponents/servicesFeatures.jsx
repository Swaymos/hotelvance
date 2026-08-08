"use client";

import * as Icons from "lucide-react";

export const servicesFeatures = ({
  badge = "Features",
  title,
  description,
  features = [],
}) => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = Icons[feature.icon] || Icons.Circle;

            return (
              <article
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

                {/* Feature Points */}
                {feature.points?.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Icons.CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-slate-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
