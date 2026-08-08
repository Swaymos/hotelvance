"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export const servicesHero = ({
  badge = "Hotel Technology",
  title,
  description,
  image,
  breadcrumbs = [],
  highlights = [],
  primaryButton = {
    text: "Request Consultation",
    href: "/contact",
  },
  secondaryButton = {
    text: "View Services",
    href: "/services",
  },
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary glow */}
        <div className="absolute left-1/2 top-[-250px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Blue glow */}
        <div className="absolute left-[-200px] top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav
            className="mb-12 flex flex-wrap items-center gap-2 text-sm text-slate-400"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                {index !== 0 && (
                  <ChevronRight className="h-4 w-4 text-slate-600" />
                )}

                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-slate-300">{item.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Hero Grid */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              {badge}
            </div>

            {/* Heading */}
            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[58px]">
              {title}
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {description}
            </p>

            {/* Highlights */}
            {highlights.length > 0 && (
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="group flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>

                    <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href={primaryButton.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
              >
                {primaryButton.text}

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={secondaryButton.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:border-primary hover:bg-white/5"
              >
                {secondaryButton.text}
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            {/* Image glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/85 p-5 shadow-xl backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                      Enterprise Solution
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Hospitality Technology
                    </h3>
                  </div>

                  <div className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                    Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>Built for modern hospitality environments</span>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span>Reliable Infrastructure</span>
              <span>Enterprise Support</span>
              <span>Scalable Technology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
