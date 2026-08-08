"use client";

import * as Icons from "lucide-react";

export const servicesIndustries = ({
  badge = "Industries We Serve",
  title,
  description,
  industries = [],
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-200px] top-[-150px] h-[550px] w-[550px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {badge}
          </div>

          <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        </div>

        {/* Industries */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20 xl:grid-cols-3">
          {industries.map((industry, index) => {
            // Resolve Lucide icon from string
            const Icon =
              typeof industry.icon === "string"
                ? Icons[industry.icon] || Icons.Building2
                : industry.icon || Icons.Building2;

            return (
              <article
                key={industry.title || index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/15">
                  <Icon
                    className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="relative mt-7 text-2xl font-semibold tracking-tight text-white">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="relative mt-4 leading-7 text-slate-400">
                  {industry.description}
                </p>

                {/* Features */}
                {industry.points?.length > 0 && (
                  <ul className="relative mt-7 space-y-3">
                    {industry.points.map((point, i) => (
                      <li
                        key={`${point}-${i}`}
                        className="flex items-start gap-3"
                      >
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

        {/* Hospitality Expertise */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm lg:mt-24">
          <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid items-center gap-12 p-8 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
            {/* Text */}
            <div>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Hospitality Expertise
              </span>

              <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Technology Solutions Tailored to Every Property
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Every hotel operates differently. Whether you manage a boutique
                hotel, luxury resort, serviced apartment, or multi-property
                hospitality group, Hotevance delivers scalable technology
                solutions designed around your operational requirements and
                guest experience goals.
              </p>
            </div>

            {/* Property Types */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Hotels",
                "Luxury Resorts",
                "Boutique Hotels",
                "Hotel Chains",
                "Serviced Apartments",
                "Conference Centres",
              ].map((item) => (
                <div
                  key={item}
                  className="group flex min-h-[76px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-center text-sm font-medium text-slate-300 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-white"
                >
                  <span className="transition-transform duration-300 group-hover:scale-105">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};
