"use client";

import Link from "next/link";
import {
  Wifi,
  Tv,
  Phone,
  KeyRound,
  CreditCard,
  DoorClosed,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const integrations = [
  {
    icon: Wifi,
    title: "Hotel Wi-Fi",
    description:
      "Automatically authenticate guests using their PMS reservation details.",
  },
  {
    icon: Tv,
    title: "IPTV",
    description:
      "Personalize in-room entertainment based on guest profiles and stay information.",
  },
  {
    icon: Phone,
    title: "VoIP",
    description:
      "Synchronize guest information with hotel communication systems.",
  },
  {
    icon: DoorClosed,
    title: "Access Control",
    description: "Enable secure room access through connected hotel systems.",
  },
  {
    icon: CreditCard,
    title: "Billing",
    description:
      "Automatically post room charges and services to the guest account.",
  },
  {
    icon: KeyRound,
    title: "Guest Room Automation",
    description:
      "Connect lighting, HVAC and smart room controls with your PMS.",
  },
];

export default function Integration() {
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
        <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Hotel PMS Integration
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Connect Your Property Management System to{" "}
              <span className="text-primary">Every Hotel Technology</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-slate-300">
              <strong className="font-semibold text-white">
                Hotel PMS Integration
              </strong>{" "}
              connects your{" "}
              <strong className="font-semibold text-white">
                Property Management System (PMS)
              </strong>{" "}
              with the technologies that power your hotel. Instead of managing
              separate systems, your PMS becomes the central platform for guest
              authentication, IPTV, VoIP, billing, room automation, access
              control, and other operational services.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Hotevance designs secure and scalable integrations that reduce
              manual work, improve operational efficiency, eliminate duplicate
              data entry, and deliver a seamless guest experience from check-in
              to check-out.
            </p>

            {/* Key Benefits */}
            <div className="mt-8 space-y-3">
              {[
                "Centralized hotel technology management",
                "Real-time system synchronization",
                "Secure and scalable architecture",
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

            {/* CTA */}
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 font-semibold text-primary transition hover:text-white"
            >
              Speak with a Hotel Technology Expert
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right Architecture */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-8 rounded-[3rem] bg-primary/10 blur-3xl" />

            {/* Main Glass Panel */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl backdrop-blur-sm sm:p-6">
              {/* Central PMS */}
              <div className="relative z-10 flex justify-center">
                <div className="relative rounded-2xl border border-primary/30 bg-primary/10 px-7 py-5 text-center shadow-lg shadow-primary/5">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl" />

                  <div className="relative">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-slate-950">
                      <KeyRound className="h-5 w-5" />
                    </div>

                    <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                      Central Platform
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                      Property Management System
                    </h3>
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              <div className="mx-auto h-10 w-px bg-gradient-to-b from-primary/60 to-white/10" />

              {/* Integration Grid */}
              <div className="grid gap-3 sm:grid-cols-2">
                {integrations.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group relative rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.04]"
                    >
                      {/* Connection indicator */}
                      <div className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </div>

                      {/* Icon */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                        <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Content */}
                      <h3 className="mt-4 pr-5 text-base font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {item.description}
                      </p>

                      {/* Status */}
                      <div className="mt-4 flex items-center gap-2 text-[11px] font-medium text-primary">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Connected
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Status */}
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                  </span>

                  <span className="text-xs font-medium text-slate-300">
                    PMS Integration Active
                  </span>
                </div>

                <span className="text-xs text-slate-500">
                  6 systems connected
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
