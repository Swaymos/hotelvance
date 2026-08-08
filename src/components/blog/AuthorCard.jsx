"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Globe, Mail, ArrowRight } from "lucide-react";

export default function AuthorCard({ author }) {
  if (!author) return null;

  const initials = author.name
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2);

  return (
    <aside className="relative z-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Primary glow */}
        <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-0 p-7 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          {/* Avatar */}
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-primary/20 bg-primary/10 shadow-xl shadow-primary/5">
            {author.image ? (
              <Image
                src={author.image}
                alt={author.name}
                fill
                sizes="112px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-primary">
                {initials}
              </div>
            )}

            {/* Avatar glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              About the Author
            </div>

            {/* Name */}
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
              {author.name}
            </h3>

            {/* Role */}
            {author.role && (
              <p className="mt-2 font-medium text-slate-300">{author.role}</p>
            )}

            {/* Bio */}
            {author.bio && (
              <p className="mt-5 max-w-3xl leading-7 text-slate-400">
                {author.bio}
              </p>
            )}

            {/* Expertise */}
            {author.expertise?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {author.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {/* Social Links */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {author.website && (
                <Link
                  href={author.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  <Globe size={16} className="text-primary" />
                  Website
                </Link>
              )}

              {author.linkedin && (
                <Link
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  <Linkedin size={16} className="text-primary" />
                  LinkedIn
                </Link>
              )}

              {author.email && (
                <Link
                  href={`mailto:${author.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  <Mail size={16} className="text-primary" />
                  Contact
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
          {/* CTA glow */}
          <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h4 className="text-lg font-semibold text-white">
                Need help with your hotel's technology?
              </h4>

              <p className="mt-2 leading-7 text-slate-400">
                Speak with the Hotevance team about Wi-Fi, GPON, IPTV, managed
                IT, and hospitality technology solutions.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
            >
              Talk to an Expert
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 right-1/4 z-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </aside>
  );
}
