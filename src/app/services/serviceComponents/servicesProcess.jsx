"use client";

import * as Icons from "lucide-react";

export const servicesProcess = ({
  badge = "Our Process",
  title,
  description,
  steps = [],
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary glow */}
        <div className="absolute left-[-200px] top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

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

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-5xl lg:mt-20">
          {/* Desktop timeline line */}
          <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = Icons[step.icon] || Icons.Circle;

              return (
                <div
                  key={step.title || index}
                  className="relative grid gap-6 lg:grid-cols-[80px_1fr]"
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 shadow-lg shadow-primary/5 backdrop-blur-sm">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    {/* Step connector dot */}
                    {index !== steps.length - 1 && (
                      <div className="absolute left-1/2 top-16 hidden h-8 w-px -translate-x-1/2 bg-primary/20 lg:block" />
                    )}
                  </div>

                  {/* Content */}
                  <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-primary/5 sm:p-8">
                    {/* Card glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      {/* Step header */}
                      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                        {/* Number */}
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-bold text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="text-2xl font-semibold tracking-tight text-white">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="max-w-3xl leading-7 text-slate-400">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        {steps.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl text-center lg:mt-20">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-400 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(88,174,188,0.8)]" />
              A structured approach from planning to deployment
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
