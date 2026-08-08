"use client";

import * as Icons from "lucide-react";

export const servicesBenefits = ({
  badge = "Benefits",
  title,
  description,
  benefits = [],
  stats = [],
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary glow */}
        <div className="absolute left-1/4 top-[-250px] h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {badge}
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20">
          {benefits.map((benefit, index) => {
            const Icon = Icons[benefit.icon] || Icons.CheckCircle2;

            return (
              <article
                key={benefit.title || index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="relative mt-6 text-2xl font-semibold text-white">
                  {benefit.title}
                </h3>

                <p className="relative mt-4 leading-7 text-slate-400">
                  {benefit.description}
                </p>

                {/* Points */}
                {benefit.points?.length > 0 && (
                  <ul className="relative mt-6 space-y-3">
                    {benefit.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Icons.CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                        <span className="text-sm leading-6 text-slate-300">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm lg:mt-20">
            {/* Stats glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative grid grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-6 py-8 text-center sm:px-8 lg:py-10"
                >
                  <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-400 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
