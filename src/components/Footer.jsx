"use client";

import Link from "next/link";
import { ArrowRight, Linkedin, Mail, MapPin, Phone, Wifi } from "lucide-react";
import Image from "next/image";
import logo from "../../public/svg/logo-primary.svg";

const services = [
  {
    name: "Hotel Wi-Fi Solutions",
    href: "/services/hotel-wifi",
  },
  {
    name: "Hotel IPTV Systems",
    href: "/services/hotel-iptv",
  },
  {
    name: "GPON & Fiber Networks",
    href: "/services/gpon-fiber",
  },
  {
    name: "Hotel VoIP Solutions",
    href: "/services/voip",
  },
  {
    name: "Managed IT Support",
    href: "/services/managed-it",
  },
  {
    name: "PMS Integration",
    href: "/services/pms-integration",
  },
];

const companyLinks = [
  {
    name: "About Hotevance",
    href: "/about",
  },
  {
    name: "Case Studies",
    href: "/case-studies",
  },
  {
    name: "Our Services",
    href: "/services",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

const resourceLinks = [
  {
    name: "Hotel Technology Blog",
    href: "/blog",
  },
  {
    name: "Hotel Wi-Fi Guide",
    href: "/blog/the-ultimate-hotel-wifi-guide",
  },
  {
    name: "FAQs",
    href: "/faqs",
  },
  {
    name: "Hotel Wi-Fi Audit",
    href: "/hotel-wifi-audit",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#0F1020] text-white">
      {/* CTA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#58AEBC] px-6 py-12 sm:px-10 lg:px-14">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                  <Wifi size={14} />
                  Hospitality Technology
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Is your hotel technology ready for your guests?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                  Get a professional hotel Wi-Fi audit and discover how to
                  improve connectivity, reliability, security, and guest
                  experience.
                </p>
              </div>

              <Link
                href="/hotel-wifi-audit"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0F1020] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F1020]"
              >
                Get a Free Wi-Fi Audit
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" aria-label="Hotevance home" className="inline-block">
              <Image src={logo} width={140} height={40} alt="primary logo" />
            </Link>

            <p className="mt-5 text-sm leading-7 text-white/55">
              Hospitality technology solutions designed to help hotels deliver
              reliable connectivity, better guest experiences, and smarter
              operations.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/55">
              From hotel Wi-Fi and IPTV to fiber networks, VoIP, PMS
              integration, and managed IT support.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/hotevance/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hotevance on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition hover:border-[#58AEBC] hover:bg-[#58AEBC] hover:text-white"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hotel Technology
            </h3>

            <ul className="mt-5 space-y-3.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/55 transition hover:text-[#58AEBC]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition hover:text-[#58AEBC]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>

            <ul className="mt-5 space-y-3.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition hover:text-[#58AEBC]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact information */}
        <div className="mt-14 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          <a
            href="mailto:hello@hotevance.com"
            className="group flex items-start gap-3"
          >
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#58AEBC] transition group-hover:bg-[#58AEBC] group-hover:text-white">
              <Mail size={16} />
            </div>

            <div>
              <span className="block text-xs font-medium uppercase tracking-wider text-white/35">
                Email
              </span>

              <span className="mt-1 block text-sm text-white/65 transition group-hover:text-white">
                hello@hotevance.com
              </span>
            </div>
          </a>

          <a href="tel:+2340000000000" className="group flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#58AEBC] transition group-hover:bg-[#58AEBC] group-hover:text-white">
              <Phone size={16} />
            </div>

            <div>
              <span className="block text-xs font-medium uppercase tracking-wider text-white/35">
                Phone
              </span>

              <span className="mt-1 block text-sm text-white/65 transition group-hover:text-white">
                +234 (0) 000 000 0000
              </span>
            </div>
          </a>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#58AEBC]">
              <MapPin size={16} />
            </div>

            <div>
              <span className="block text-xs font-medium uppercase tracking-wider text-white/35">
                Location
              </span>

              <span className="mt-1 block text-sm text-white/65">
                Abuja & Lagos, Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Hotevance Limited. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/35 transition hover:text-white/70"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-white/35 transition hover:text-white/70"
            >
              Terms of Service
            </Link>

            <Link
              href="/sitemap.xml"
              className="text-xs text-white/35 transition hover:text-white/70"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
