"use client";

import Link from "next/link";
import {
  ArrowRight,
  Search,
  BookOpen,
  Wifi,
  Network,
  Tv,
  Shield,
} from "lucide-react";

const categories = [
  {
    title: "Hotel Wi-Fi",
    href: "/blog/category/hotel-wifi",
    icon: Wifi,
  },
  {
    title: "GPON",
    href: "/blog/category/gpon",
    icon: Network,
  },
  {
    title: "IPTV",
    href: "/blog/category/iptv",
    icon: Tv,
  },
  {
    title: "Managed IT",
    href: "/blog/category/managed-it",
    icon: Shield,
  },
];

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <BookOpen size={16} />
            Hotel Technology Insights
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Insights That Help Hotels
            <span className="block text-primary">Build Better Technology</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore expert articles on hotel Wi-Fi, GPON fiber networks, IPTV,
            cybersecurity, managed IT services, and digital transformation for
            the hospitality industry.
          </p>

          {/* Categories */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  <Icon
                    size={18}
                    className="text-primary transition group-hover:scale-110"
                  />

                  {category.title}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-primary hover:bg-white/5"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold text-primary">100+</h3>
              <p className="mt-2 text-sm text-slate-400">
                Hospitality Technology Articles
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">6</h3>
              <p className="mt-2 text-sm text-slate-400">Expert Categories</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">24/7</h3>
              <p className="mt-2 text-sm text-slate-400">
                Hotel Technology Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
