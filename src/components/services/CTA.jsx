"use client";

import Link from "next/link";
import { ArrowRight, Phone, CalendarDays, CheckCircle2 } from "lucide-react";

const features = [
  "Hotel PMS Integration",
  "Hotel Wi-Fi Solutions",
  "IPTV Systems",
  "Smart Room Technology",
  "24/7 Technical Support",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary glow */}
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.4)_65%,rgba(2,6,23,.9)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-sm">
          {/* Inner glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid items-center gap-12 p-8 sm:p-10 lg:grid-cols-[1.5fr_.8fr] lg:gap-20 lg:p-16">
            {/* Left Content */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Let&apos;s Build Your Hotel Technology Ecosystem
              </div>

              {/* Heading */}
              <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Ready to Modernize Your Hotel with{" "}
                <span className="text-primary">PMS Integration?</span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Hotevance helps hotels deploy secure{" "}
                <strong className="font-semibold text-white">
                  Property Management System (PMS) Integration
                </strong>
                , enterprise hotel Wi-Fi, IPTV, VoIP, smart room automation,
                networking, and managed hospitality technology solutions.
              </p>

              <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                Whether you&apos;re upgrading an existing property or opening a
                new hotel, our engineers design scalable technology solutions
                that improve guest experiences, streamline operations, and
                support long-term business growth.
              </p>

              {/* Supporting Points */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Scalable hotel infrastructure",
                  "Secure system integration",
                  "Hospitality-focused engineers",
                  "Long-term technical support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right CTA Card */}
            <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 p-7 shadow-xl backdrop-blur-xl sm:p-8">
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <CalendarDays className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Start Your Project
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Schedule a consultation with our hospitality technology
                  specialists.
                </p>

                {/* Buttons */}
                <div className="mt-7 space-y-3">
                  <Link
                    href="/contact"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
                  >
                    <CalendarDays className="h-5 w-5" />
                    Request Consultation
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="tel:+2349085444555"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-4 font-semibold text-white transition-all duration-300 hover:border-primary/40 hover:bg-white/5"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    Speak to an Expert
                  </Link>
                </div>

                {/* Feature List */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    What We Deliver
                  </p>

                  <ul className="space-y-3">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-400"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-sm">
            <span>Hotel Technology Experts</span>

            <span className="hidden text-primary/50 sm:inline">•</span>

            <span>PMS Integration Specialists</span>

            <span className="hidden text-primary/50 sm:inline">•</span>

            <span>Enterprise Networking</span>

            <span className="hidden text-primary/50 sm:inline">•</span>

            <span>Hospitality IT Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
