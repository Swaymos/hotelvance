"use client";

import Link from "next/link";
import {
  Wifi,
  Tv,
  ShieldCheck,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Hotel Wi-Fi Solutions",
    description:
      "Enterprise-grade hotel Wi-Fi designed to deliver secure, high-speed connectivity for guests and staff.",
    icon: Wifi,
    href: "/services/hotel-wifi",
  },
  {
    title: "Hotel IPTV Systems",
    description:
      "Interactive in-room entertainment platforms integrated with your Property Management System.",
    icon: Tv,
    href: "/services/hotel-iptv",
  },

  {
    title: "Managed Hotel IT Support",
    description:
      "24/7 proactive monitoring, maintenance, and technical support for your hospitality technology infrastructure.",
    icon: Wrench,
    href: "/services/managed-it",
  },
];

export default function Related() {
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
            Related Services
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Explore More
            <span className="block text-primary">
              Hotel Technology Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Hotel PMS Integration works best when it&apos;s part of a connected
            hospitality technology ecosystem. Explore our other hotel technology
            services designed to improve guest experiences, strengthen
            operations, and future-proof your property.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:bg-primary/[0.04] hover:shadow-2xl"
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary">
                  <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-slate-950" />
                </div>

                {/* Content */}
                <h3 className="relative mt-7 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="relative mt-4 flex-grow text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* Service Status */}
                <div className="relative mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-xs font-medium text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                  Hospitality Technology Solution
                </div>

                {/* Link */}
                <Link
                  href={service.href}
                  className="group/link relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-sm">
          {/* CTA Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
            {/* Content */}
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Complete Hotel Technology
              </div>

              <h3 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Looking for a{" "}
                <span className="text-primary">
                  Complete Hotel Technology Solution?
                </span>
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                Hotevance designs, deploys, and supports integrated hotel
                technology solutions including Wi-Fi, GPON Fiber, IPTV, Property
                Management System Integration, VoIP, guest room automation, and
                managed IT support.
              </p>

              {/* Trust Points */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Integrated Technology",
                  "Scalable Infrastructure",
                  "Managed Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="lg:pr-2">
              <Link
                href="/services"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 sm:w-auto"
              >
                View All Services
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
