"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Server,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const platforms = [
  {
    name: "Oracle OPERA",
    logo: "/images/platforms/opera.svg",
    description:
      "Enterprise PMS used by hotels, resorts and hospitality groups worldwide.",
  },
  {
    name: "Cloudbeds",
    logo: "/images/platforms/cloudbeds.svg",
    description:
      "Cloud-based Property Management System for independent hotels and resorts.",
  },
  {
    name: "Mews",
    logo: "/images/platforms/mews.svg",
    description:
      "Modern cloud PMS built for automation and exceptional guest experiences.",
  },
  {
    name: "Hotelogix",
    logo: "/images/platforms/hotelogix.svg",
    description:
      "Cloud hotel management software for growing hospitality businesses.",
  },
  {
    name: "Protel",
    logo: "/images/platforms/protel.svg",
    description:
      "Flexible PMS designed for hotel chains and independent properties.",
  },
  {
    name: "Stayntouch",
    logo: "/images/platforms/stayntouch.svg",
    description:
      "Mobile-first hotel management platform with cloud-based operations.",
  },
];

const integrationFeatures = [
  {
    icon: Server,
    title: "API Integration",
  },
  {
    icon: Cloud,
    title: "Real-time Synchronization",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Exchange",
  },
];

const customIntegrationFeatures = [
  "Cloud PMS Integration",
  "On-Premise PMS Integration",
  "Custom API Development",
  "Legacy System Integration",
];

export default function Platforms() {
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
            Supported Platforms
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Hotel PMS Platforms
            <span className="block text-primary">We Integrate With</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Hotevance integrates leading{" "}
            <strong className="font-semibold text-white">
              Property Management Systems (PMS)
            </strong>{" "}
            with hotel Wi-Fi, IPTV, VoIP, guest room automation, payment
            platforms, access control, and other hospitality technologies to
            create one connected hotel ecosystem.
          </p>
        </div>

        {/* Platform Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platforms.map((platform) => (
            <article
              key={platform.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.04] hover:shadow-2xl"
            >
              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Logo */}
              <div className="relative flex h-20 items-center rounded-2xl border border-white/10 bg-white/[0.025] px-5">
                <Image
                  src={platform.logo}
                  alt={`${platform.name} Property Management System`}
                  width={150}
                  height={50}
                  className="h-10 w-auto max-w-[150px] object-contain brightness-0 invert opacity-90 transition duration-300 group-hover:opacity-100"
                />

                {/* Status */}
                <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative mt-7 text-xl font-semibold text-white">
                {platform.name}
              </h3>

              <p className="relative mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                {platform.description}
              </p>

              {/* Integration Features */}
              <div className="relative mt-6 border-t border-white/10 pt-5">
                <div className="space-y-3">
                  {integrationFeatures.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="flex items-center gap-3 text-xs text-slate-400"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-3.5 w-3.5 text-primary" />
                        </div>

                        <span>{feature.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Status */}
              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Integration Ready
              </div>
            </article>
          ))}
        </div>

        {/* Custom PMS Section */}
        <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-sm lg:mt-28">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 sm:p-10 lg:p-14">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Custom PMS Integration
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Don&apos;t See Your <span className="text-primary">PMS?</span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                Our integration team works with both cloud-based and on-premise
                Property Management Systems. If your hotel uses a custom PMS or
                another hospitality platform, we can design a secure integration
                tailored to your operational requirements.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span>Built around your hotel&apos;s technology stack</span>
              </div>
            </div>

            {/* Capabilities */}
            <div className="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Integration Capabilities
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {customIntegrationFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.04]"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
              >
                Discuss Your PMS Integration
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
