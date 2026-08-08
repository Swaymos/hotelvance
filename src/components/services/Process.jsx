"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const process = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We assess your existing Property Management System, network infrastructure, hotel technology stack, and operational workflows to identify integration opportunities.",
  },
  {
    number: "02",
    title: "Solution Design",
    description:
      "Our engineers design a secure Hotel PMS Integration architecture tailored to your hotel's operational requirements and future growth plans.",
  },
  {
    number: "03",
    title: "System Integration",
    description:
      "We integrate your PMS with hotel Wi-Fi, IPTV, VoIP, payment systems, access control, and guest room technologies using industry best practices.",
  },
  {
    number: "04",
    title: "Testing & Validation",
    description:
      "Every integration is thoroughly tested to ensure accurate synchronization, secure data exchange, and reliable system performance before deployment.",
  },
  {
    number: "05",
    title: "Training & Go-Live",
    description:
      "Your hotel staff receive hands-on training before the solution goes live, ensuring a smooth transition with minimal operational disruption.",
  },
  {
    number: "06",
    title: "Managed Support",
    description:
      "Our hospitality technology specialists provide continuous monitoring, maintenance, optimization, and technical support after deployment.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary glow */}
        <div className="absolute left-0 top-0 h-[550px] w-[550px] rounded-full bg-primary/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.4)_65%,rgba(2,6,23,.9)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Our Process
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Our Hotel PMS
            <span className="block text-primary">Integration Process</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every{" "}
            <strong className="font-semibold text-white">
              Hotel PMS Integration
            </strong>{" "}
            project follows a structured delivery process designed to reduce
            implementation risks, accelerate deployment, and ensure long-term
            system reliability.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Desktop Timeline Line */}
          <div className="absolute bottom-10 left-[31px] top-10 hidden w-px bg-gradient-to-b from-primary/60 via-white/10 to-primary/30 lg:block" />

          <div className="space-y-6 lg:space-y-8">
            {process.map((step, index) => (
              <article
                key={step.number}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.035] hover:shadow-2xl sm:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[80px_1fr] lg:gap-8">
                  {/* Number */}
                  <div className="relative z-10">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-lg font-bold text-primary transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary group-hover:text-slate-950">
                      {step.number}

                      {/* Glow */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/20 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                        {step.title}
                      </h3>

                      <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-slate-600 sm:block">
                        Step {index + 1}
                      </span>
                    </div>

                    <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                      {step.description}
                    </p>

                    {/* Trust Point */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Enterprise hospitality best practices</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-sm">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
            {/* Content */}
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Start Your Integration
              </div>

              <h3 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Integrate Your{" "}
                <span className="text-primary">Hotel PMS?</span>
              </h3>

              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                Speak with our hospitality technology specialists about your
                hotel&apos;s Property Management System, existing
                infrastructure, and integration requirements.
              </p>
            </div>

            {/* CTA */}
            <div className="lg:pr-2">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 sm:w-auto"
              >
                Schedule a Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
