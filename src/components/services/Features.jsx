"use client";

import Link from "next/link";
import {
  Wifi,
  Tv,
  CreditCard,
  BedDouble,
  Bell,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Guest Wi-Fi Authentication",
    description:
      "Automatically generate secure Wi-Fi credentials from your Property Management System when guests check in, creating a seamless internet access experience.",
  },
  {
    icon: Tv,
    title: "Hotel IPTV Integration",
    description:
      "Connect your PMS with IPTV platforms to display personalized guest information, welcome messages, promotions, and interactive entertainment.",
  },
  {
    icon: CreditCard,
    title: "Automated Billing",
    description:
      "Post room service, minibar, restaurant, and hotel charges directly to guest accounts without manual data entry.",
  },
  {
    icon: BedDouble,
    title: "Housekeeping Synchronization",
    description:
      "Keep housekeeping teams updated with real-time room status changes, check-ins, check-outs, and room availability.",
  },
  {
    icon: Bell,
    title: "Guest Room Automation",
    description:
      "Integrate lighting, HVAC, curtains, occupancy sensors, and other smart room technologies with your hotel PMS.",
  },
];

const integrationPoints = [
  "Real-time synchronization",
  "Secure API integration",
  "Compatible with modern hotel systems",
];

export default function Features() {
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

        {/* Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.35)_65%,rgba(2,6,23,.9)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            PMS Integration Features
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Everything Included in Our
            <span className="block text-primary">
              Hotel PMS Integration Service
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Our{" "}
            <strong className="font-semibold text-white">
              Hotel PMS Integration
            </strong>{" "}
            solutions connect your{" "}
            <strong className="font-semibold text-white">
              Property Management System
            </strong>{" "}
            with essential hotel technologies, helping automate operations,
            improve guest experiences, and simplify daily management.
          </p>
        </div>

        {/* Features */}
        <div className="mt-20 space-y-24 lg:space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Content */}
                <div>
                  {/* Icon */}
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                    <Icon className="h-7 w-7 text-primary transition-transform duration-300 hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                    {feature.description}
                  </p>

                  {/* Integration Points */}
                  <ul className="mt-8 space-y-4">
                    {integrationPoints.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 opacity-60 blur-3xl" />

                  {/* Outer Card */}
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl backdrop-blur-sm">
                    {/* Inner Dashboard */}
                    <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 sm:p-8">
                      {/* Header */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                              Connected Module
                            </p>

                            <h4 className="mt-1 text-lg font-semibold text-white">
                              {feature.title}
                            </h4>
                          </div>
                        </div>

                        {/* Status */}
                        <div className="hidden items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 sm:flex">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                          </span>

                          <span className="text-xs font-medium text-primary">
                            Connected
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="my-8 border-t border-white/10" />

                      {/* System Visualization */}
                      <div className="space-y-5">
                        <div>
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-xs text-slate-500">
                              PMS Synchronization
                            </span>

                            <span className="text-xs font-medium text-primary">
                              80%
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-4/5 rounded-full bg-primary" />
                          </div>
                        </div>

                        <div>
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-xs text-slate-500">
                              API Connection
                            </span>

                            <span className="text-xs font-medium text-primary">
                              75%
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-3/4 rounded-full bg-primary/80" />
                          </div>
                        </div>

                        <div>
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-xs text-slate-500">
                              System Availability
                            </span>

                            <span className="text-xs font-medium text-primary">
                              100%
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-full rounded-full bg-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Status */}
                      <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />

                        <div>
                          <p className="text-sm font-medium text-white">
                            Integration Active
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Real-time hotel system synchronization
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Integration CTA */}
        <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-center backdrop-blur-sm sm:p-12 lg:mt-32 lg:p-16">
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            {/* Label */}
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Custom Integrations
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need a Custom Hotel PMS Integration?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you&apos;re deploying Oracle Opera, Cloudbeds, Mews, or
              another Property Management System, Hotevance can design a
              tailored integration for your hotel technology ecosystem.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
            >
              Talk to an Integration Expert
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
