"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, PhoneCall } from "lucide-react";

export const servicesCTA = ({
  badge = "Ready to Get Started?",
  title = "Let's Transform Your Hotel Technology",
  description = "Whether you're upgrading your existing infrastructure or building a new hotel, Hotevance delivers reliable hospitality technology solutions tailored to your business.",

  primaryButton = {
    text: "Request Consultation",
    href: "/contact",
  },

  secondaryButton = {
    text: "Call Our Team",
    href: "tel:+2340000000000",
  },

  highlights = [
    "Free Consultation",
    "Tailored Solution Design",
    "Professional Deployment",
    "Ongoing Technical Support",
  ],
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-2xl">
          <div className="grid items-center gap-16 p-10 lg:grid-cols-[1.3fr_0.7fr] lg:p-16">
            {/* Left */}

            <div>
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                {badge}
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
                {title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {description}
              </p>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={primaryButton.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  <CalendarDays className="h-5 w-5" />

                  {primaryButton.text}

                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href={secondaryButton.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-slate-500 hover:bg-white/5"
                >
                  <PhoneCall className="h-5 w-5" />

                  {secondaryButton.text}
                </Link>
              </div>
            </div>

            {/* Right */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur">
              <h3 className="text-2xl font-semibold text-white">
                Why Partner With Hotevance?
              </h3>

              <div className="mt-8 space-y-5">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 h-3 w-3 rounded-full bg-blue-500" />

                    <span className="leading-7 text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
                <div className="text-3xl font-bold text-white">24/7</div>

                <p className="mt-2 text-slate-300">
                  Technical support and proactive monitoring for your
                  hospitality technology infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
