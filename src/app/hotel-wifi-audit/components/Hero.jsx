"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Network,
  ShieldCheck,
  Wifi,
  Tv,
  Phone,
  Cpu,
} from "lucide-react";

const integrations = [
  {
    label: "Opera PMS",
    icon: Network,
  },
  {
    label: "Cloud PMS",
    icon: ShieldCheck,
  },
  {
    label: "Guest Wi-Fi",
    icon: Wifi,
  },
  {
    label: "Hotel IPTV",
    icon: Tv,
  },
  {
    label: "VoIP Systems",
    icon: Phone,
  },
  {
    label: "Room Automation",
    icon: Cpu,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Primary glow */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.35)_65%,rgba(2,6,23,.85)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Network size={16} />
              Hotel Technology Services
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hotel PMS Integration
              <span className="block text-primary">
                Services for Modern Hotels
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Hotevance provides professional{" "}
              <strong className="font-semibold text-white">
                Hotel PMS Integration
              </strong>{" "}
              services that connect your{" "}
              <strong className="font-semibold text-white">
                Property Management System
              </strong>{" "}
              with hotel Wi-Fi, IPTV, VoIP, guest room automation, payment
              systems, and other hospitality technologies.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
              >
                Request Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-primary/40 hover:bg-white/5"
              >
                View Projects
              </Link>
            </div>

            {/* Integration List */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {integrations.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                      <Icon
                        size={17}
                        className="text-primary transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
                      {item.label}
                    </span>

                    <CheckCircle2
                      size={15}
                      className="ml-auto shrink-0 text-primary/70"
                    />
                  </div>
                );
              })}
            </div>

            {/* Trust */}
            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Built for Hospitality
              </p>

              <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-300">
                <span>Hotels</span>
                <span>Resorts</span>
                <span>Boutique Hotels</span>
                <span>Serviced Apartments</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Image Glow */}
            <div className="absolute -inset-8 rounded-[2rem] bg-primary/10 blur-3xl" />

            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <Image
                  src="/images/Hotels.png"
                  alt="Hotel PMS integration dashboard connecting Wi-Fi, IPTV, VoIP and guest room automation"
                  width={700}
                  height={700}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>

            {/* Connected Systems Card */}
            <div className="absolute -bottom-7 -left-6 hidden w-64 rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <Network className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Connected Systems</p>

                  <p className="mt-0.5 text-2xl font-bold text-white">20+</p>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                Hospitality technologies integrated through a unified PMS
                environment.
              </p>
            </div>

            {/* Status Card */}
            <div className="absolute -right-5 top-10 hidden rounded-xl border border-primary/20 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>

                <span className="text-xs font-medium text-slate-300">
                  PMS Integration Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
