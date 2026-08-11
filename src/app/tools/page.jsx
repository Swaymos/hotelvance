// app/tools/page.jsx

import Link from "next/link";
import {
  Wifi,
  Gauge,
  Radio,
  Building2,
  Router,
  Network,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Hotel Technology Tools | Hotevance",
  description:
    "Free hotel technology calculators and assessment tools for Wi-Fi, GPON, IPTV, network planning, and hotel IT infrastructure.",
  alternates: {
    canonical: "/tools",
  },
};

const tools = [
  {
    title: "Hotel Wi-Fi Audit",
    description:
      "Assess your hotel's current Wi-Fi infrastructure and identify improvement opportunities.",
    href: "/hotel-wifi-audit",
    icon: Wifi,
  },
  {
    title: "Hotel Wi-Fi Bandwidth Calculator",
    description:
      "Estimate internet bandwidth requirements based on occupancy, guests, and connected devices.",
    href: "/tools/hotel-wifi-bandwidth-calculator",
    icon: Gauge,
  },

  {
    title: "GPON vs Ethernet Calculator",
    description:
      "Compare GPON and Ethernet architectures for hotel deployments.",
    href: "/tools/gpon-vs-ethernet",
    icon: Network,
  },
  {
    title: "Hotel Wi-Fi Health Checker",
    description:
      "Assess your hotel's Wi-Fi health and identify potential congestion, coverage, network separation, and infrastructure risks.",
    href: "/tools/hotel-wifi-health-checker",
    icon: Wifi,
    category: "Wi-Fi & Network",
    badge: "Tool 1",
  },
  {
    title: "Hotel Technology Audit Calculator",
    description:
      "Assess your hotel's technology infrastructure and identify potential gaps across Wi-Fi, networking, IPTV, VoIP, PMS, fiber, and IT systems.",
    href: "/tools/hotel-technology-audit",
    icon: Building2,
    category: "Hotel Technology",
    badge: "Tool 2",
  },
];

export default function ToolsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Free Hotel Technology Tools
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Hotel Technology Calculators & Assessment Tools
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-slate-300">
              Free tools designed for hotel owners, operators, and IT teams.
              Plan Wi-Fi deployments, estimate bandwidth requirements, compare
              network architectures, and make better technology decisions.
            </p>
          </div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Available Tools</h2>

          <p className="mt-3 text-slate-600">
            Practical calculators and assessments built specifically for hotels.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {tool.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {tool.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-600">
                  Open Tool
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
