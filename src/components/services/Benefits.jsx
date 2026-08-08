"use client";

import {
  Clock3,
  Users,
  Wallet,
  BarChart3,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Faster Hotel Operations",
    description:
      "Automate check-in, check-out, room assignment and guest authentication by connecting your Property Management System with key hotel technologies.",
  },
  {
    icon: Users,
    title: "Better Guest Experience",
    description:
      "Deliver seamless Wi-Fi access, personalized IPTV, smart room controls and faster hotel services through a fully integrated hospitality platform.",
  },
  {
    icon: Wallet,
    title: "Accurate Billing",
    description:
      "Automatically synchronize guest purchases, room charges and hotel services with your PMS, reducing manual errors and billing disputes.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Hotel Data",
    description:
      "Access accurate operational data across departments to improve reporting, occupancy management and business decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure System Integration",
    description:
      "Protect hotel and guest data with secure APIs, encrypted communication and enterprise-grade integration standards.",
  },
  {
    icon: Zap,
    title: "Scalable Technology",
    description:
      "Support future hotel expansion with a flexible integration architecture designed for new properties and additional hospitality systems.",
  },
];

const stats = [
  {
    value: "24/7",
    label: "System Availability",
  },
  {
    value: "100%",
    label: "Real-Time Synchronization",
  },
  {
    value: "Secure",
    label: "API Integrations",
  },
  {
    value: "Scalable",
    label: "Future Growth",
  },
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Primary glow */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.35)_65%,rgba(2,6,23,.85)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Why PMS Integration Matters
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Transform Your Hotel
            <span className="block text-primary">
              Into a Connected Operation
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A well-designed{" "}
            <strong className="font-semibold text-white">
              Hotel PMS Integration
            </strong>{" "}
            does more than connect software. It streamlines hotel operations,
            improves guest satisfaction, reduces manual processes, and creates a
            more efficient hospitality business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:shadow-2xl"
              >
                {/* Hover Glow */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <h3 className="relative mt-6 text-xl font-semibold text-white">
                  {benefit.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-400">
                  {benefit.description}
                </p>

                {/* Bottom Indicator */}
                <div className="relative mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-xs font-medium text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Enterprise-ready solution</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Business Impact */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
          {/* Background glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 sm:p-10 lg:p-14">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Business Impact
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Build a Connected Hotel
                <span className="block text-primary">Technology Ecosystem</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                By integrating your Property Management System with hotel Wi-Fi,
                IPTV, VoIP, access control, guest room automation and payment
                systems, Hotevance helps hotels improve operational efficiency
                while delivering exceptional guest experiences.
              </p>

              {/* Trust Points */}
              <div className="mt-8 space-y-3">
                {[
                  "Connected hospitality systems",
                  "Secure API communication",
                  "Real-time operational data",
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

            {/* Stats */}
            <div className="grid grid-cols-2 border-t border-white/10 lg:border-l lg:border-t-0">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="group flex min-h-[180px] flex-col justify-center border-b border-r border-white/10 bg-slate-950/40 p-8 text-center transition-colors duration-300 hover:bg-primary/10 sm:p-10"
                >
                  <h3 className="text-3xl font-bold text-primary sm:text-4xl">
                    {item.value}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[140px] text-sm leading-6 text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom SEO/supporting statement */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-sm leading-7 text-slate-400">
            Connect your hotel PMS with the systems your property depends on,
            from guest Wi-Fi and IPTV to VoIP, access control, automation and
            payment platforms. A properly integrated hotel technology
            environment helps your team work more efficiently while creating a
            smoother guest journey.
          </p>
        </div>
      </div>
    </section>
  );
}
