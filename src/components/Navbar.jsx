"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import logo from "../../public/svg/logo-dark.svg";

import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Wifi,
  Tv,
  Network,
  Phone,
  Server,
  Building2,
  MapPin,
  Gauge,
} from "lucide-react";

import locations from "../data/locationsData";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Hotel Wi-Fi Solutions",
    description: "Reliable, high-speed guest and staff Wi-Fi.",
    href: "/services/hotel-wifi",
    icon: Wifi,
  },
  {
    title: "Hotel IPTV Systems",
    description: "Interactive in-room entertainment for hotels.",
    href: "/services/hotel-iptv",
    icon: Tv,
  },
  {
    title: "GPON & Fiber Networks",
    description: "Scalable fiber infrastructure for hospitality.",
    href: "/services/gpon-fiber",
    icon: Network,
  },
  {
    title: "Hotel VoIP Solutions",
    description: "Modern communication systems for hotels.",
    href: "/services/voip",
    icon: Phone,
  },
  {
    title: "Managed IT Support",
    description: "Proactive technology support for hotels.",
    href: "/services/managed-it",
    icon: Server,
  },
  {
    title: "PMS Integration",
    description: "Connect your hotel technology ecosystem.",
    href: "/services/pms-integration",
    icon: Building2,
  },
];

/* =========================================================
   TOOLS
========================================================= */

const tools = [
  {
    title: "Hotel Wi-Fi Health Checker",
    description:
      "Assess your hotel's Wi-Fi health and identify potential network issues.",
    href: "/tools/hotel-wifi-health-checker",
    icon: Wifi,
  },
  {
    title: "Hotel Technology Audit",
    description:
      "Assess your hotel's technology infrastructure and identify potential gaps.",
    href: "/tools/hotel-technology-audit",
    icon: Building2,
  },
  {
    title: "Hotel Wi-Fi Bandwidth Calculator",
    description:
      "Estimate your hotel's peak bandwidth requirements and recommended internet capacity.",
    href: "/tools/hotel-wifi-bandwidth-calculator",
    icon: Gauge,
  },
  {
    title: "Wi-Fi Access Point Calculator",
    description:
      "Estimate the number of Wi-Fi access points required for your hotel.",
    href: "/tools/hotel-wifi-access-point-calculator",
    icon: Network,
  },
];

/* =========================================================
   MAIN LINKS
========================================================= */

const mainLinks = [
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Resources",
    href: "/blog",
  },
];

/* =========================================================
   ACTIVE ROUTE
========================================================= */

function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  /* =======================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  ======================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setToolsOpen(false);
    setLocationsOpen(false);
  };

  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const toggleMobile = () => {
    setMobileOpen((current) => !current);

    setServicesOpen(false);
    setToolsOpen(false);
    setLocationsOpen(false);
  };

  /* =======================================================
     SERVICES
  ======================================================= */

  const toggleServices = () => {
    setServicesOpen((current) => !current);
    setToolsOpen(false);
    setLocationsOpen(false);
  };

  /* =======================================================
     TOOLS
  ======================================================= */

  const toggleTools = () => {
    setToolsOpen((current) => !current);
    setServicesOpen(false);
    setLocationsOpen(false);
  };

  /* =======================================================
     LOCATIONS
  ======================================================= */

  const toggleLocations = () => {
    setLocationsOpen((current) => !current);
    setServicesOpen(false);
    setToolsOpen(false);
  };

  /* =======================================================
     ACTIVE STATES
  ======================================================= */

  const servicesActive = pathname.startsWith("/services");
  const toolsActive = pathname.startsWith("/tools");
  const locationsActive = pathname.startsWith("/locations");

  return (
    <>
      {/* =====================================================
          DESKTOP / MOBILE HEADER
      ====================================================== */}

      <header className="sticky top-0 z-[100] border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            onClick={closeMobile}
            className="group flex shrink-0 items-center"
            aria-label="Hotevance home"
          >
            <Image
              src={logo}
              width={140}
              height={40}
              alt="Hotevance"
              priority
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center lg:flex">
            <ul className="ml-12 flex items-center gap-1">
              {/* =================================================
                  SERVICES
              ================================================== */}

              <li className="relative">
                <button
                  type="button"
                  onClick={toggleServices}
                  onMouseEnter={() => {
                    setServicesOpen(true);
                    setToolsOpen(false);
                    setLocationsOpen(false);
                  }}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={`group relative flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[16px] font-medium transition-all duration-200 ${
                    servicesActive
                      ? "bg-[#58AEBC]/10 text-[#3d8996]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={15}
                    strokeWidth={2}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                  {servicesActive && (
                    <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-[#58AEBC]" />
                  )}
                </button>

                {servicesOpen && (
                  <div
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-4"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_25px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#58AEBC]/10 blur-3xl" />

                      <div className="relative mb-2 border-b border-slate-100 px-3 pb-3">
                        <p className="text-sm font-bold text-slate-950">
                          Hotel Technology Services
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                          Technology solutions designed for modern hotels
                        </p>
                      </div>

                      <div className="relative grid grid-cols-2 gap-1">
                        {services.map((service) => {
                          const Icon = service.icon;
                          const active = isActive(pathname, service.href);

                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setServicesOpen(false)}
                              className={`group flex gap-3 rounded-xl border p-4 transition-all duration-200 ${
                                active
                                  ? "border-[#58AEBC]/20 bg-[#58AEBC]/10"
                                  : "border-transparent hover:border-[#58AEBC]/15 hover:bg-[#58AEBC]/[0.04]"
                              }`}
                            >
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 ${
                                  active
                                    ? "border-[#58AEBC]/30 bg-[#58AEBC] text-white"
                                    : "border-[#58AEBC]/15 bg-[#58AEBC]/10 text-[#3d8996] group-hover:border-[#58AEBC]/30 group-hover:bg-[#58AEBC] group-hover:text-white"
                                }`}
                              >
                                <Icon size={19} strokeWidth={1.8} />
                              </div>

                              <div className="min-w-0">
                                <div
                                  className={`text-sm font-semibold transition-colors ${
                                    active
                                      ? "text-[#3d8996]"
                                      : "text-slate-900 group-hover:text-[#3d8996]"
                                  }`}
                                >
                                  {service.title}
                                </div>

                                <p className="mt-1 max-w-[250px] text-xs leading-5 text-slate-500">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="relative mt-2 border-t border-slate-100 pt-2">
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-[#58AEBC]/10 hover:text-[#3d8996]"
                        >
                          <span>View all hotel technology services</span>

                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* =================================================
                  TOOLS
              ================================================== */}

              <li className="relative">
                <button
                  type="button"
                  onClick={toggleTools}
                  onMouseEnter={() => {
                    setToolsOpen(true);
                    setServicesOpen(false);
                    setLocationsOpen(false);
                  }}
                  aria-expanded={toolsOpen}
                  aria-haspopup="true"
                  className={`group relative flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[16px] font-medium transition-all duration-200 ${
                    toolsActive
                      ? "bg-[#58AEBC]/10 text-[#3d8996]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  Tools
                  <ChevronDown
                    size={15}
                    strokeWidth={2}
                    className={`transition-transform duration-300 ${
                      toolsOpen ? "rotate-180" : ""
                    }`}
                  />
                  {toolsActive && (
                    <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-[#58AEBC]" />
                  )}
                </button>

                {toolsOpen && (
                  <div
                    onMouseLeave={() => setToolsOpen(false)}
                    className="absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-4"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_25px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#58AEBC]/10 blur-3xl" />

                      <div className="relative mb-2 flex items-center justify-between border-b border-slate-100 px-3 pb-3">
                        <div>
                          <p className="text-sm font-bold text-slate-950">
                            Hotel Technology Tools
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            Free tools for hotel technology planning
                          </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#58AEBC]/10 text-[#3d8996]">
                          <Gauge size={17} />
                        </div>
                      </div>

                      <div className="relative grid grid-cols-2 gap-1">
                        {tools.map((tool) => {
                          const Icon = tool.icon;
                          const active = isActive(pathname, tool.href);

                          return (
                            <Link
                              key={tool.href}
                              href={tool.href}
                              onClick={() => setToolsOpen(false)}
                              className={`group flex gap-3 rounded-xl border p-4 transition-all duration-200 ${
                                active
                                  ? "border-[#58AEBC]/20 bg-[#58AEBC]/10"
                                  : "border-transparent hover:border-[#58AEBC]/15 hover:bg-[#58AEBC]/[0.04]"
                              }`}
                            >
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 ${
                                  active
                                    ? "border-[#58AEBC]/30 bg-[#58AEBC] text-white"
                                    : "border-[#58AEBC]/15 bg-[#58AEBC]/10 text-[#3d8996] group-hover:border-[#58AEBC]/30 group-hover:bg-[#58AEBC] group-hover:text-white"
                                }`}
                              >
                                <Icon size={19} strokeWidth={1.8} />
                              </div>

                              <div className="min-w-0">
                                <div
                                  className={`text-sm font-semibold transition-colors ${
                                    active
                                      ? "text-[#3d8996]"
                                      : "text-slate-900 group-hover:text-[#3d8996]"
                                  }`}
                                >
                                  {tool.title}
                                </div>

                                <p className="mt-1 max-w-[250px] text-xs leading-5 text-slate-500">
                                  {tool.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="relative mt-2 border-t border-slate-100 pt-2">
                        <Link
                          href="/tools"
                          onClick={() => setToolsOpen(false)}
                          className="group flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-[#58AEBC]/10 hover:text-[#3d8996]"
                        >
                          <span>View all hotel technology tools</span>

                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* =================================================
                  MAIN LINKS
              ================================================== */}

              {mainLinks.map((link) => {
                const active = isActive(pathname, link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group relative block rounded-xl px-4 py-2.5 text-[16px] font-medium transition-all duration-200 ${
                        active
                          ? "bg-[#58AEBC]/10 text-[#3d8996]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                      }`}
                    >
                      {link.label}

                      {active && (
                        <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-[#58AEBC]" />
                      )}
                    </Link>
                  </li>
                );
              })}

              {/* =================================================
                  LOCATIONS
              ================================================== */}

              <li className="relative">
                <button
                  type="button"
                  onClick={toggleLocations}
                  onMouseEnter={() => {
                    setLocationsOpen(true);
                    setServicesOpen(false);
                    setToolsOpen(false);
                  }}
                  aria-expanded={locationsOpen}
                  aria-haspopup="true"
                  className={`group relative flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[16px] font-medium transition-all duration-200 ${
                    locationsActive
                      ? "bg-[#58AEBC]/10 text-[#3d8996]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  Locations
                  <ChevronDown
                    size={15}
                    strokeWidth={2}
                    className={`transition-transform duration-300 ${
                      locationsOpen ? "rotate-180" : ""
                    }`}
                  />
                  {locationsActive && (
                    <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-[#58AEBC]" />
                  )}
                </button>

                {locationsOpen && (
                  <div
                    onMouseLeave={() => setLocationsOpen(false)}
                    className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-4"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_25px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#58AEBC]/10 blur-3xl" />

                      <div className="relative mb-2 flex items-center justify-between border-b border-slate-100 px-3 pb-3">
                        <div>
                          <p className="text-sm font-bold text-slate-950">
                            Hotevance Locations
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            Hotel technology solutions across Nigeria
                          </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#58AEBC]/10 text-[#3d8996]">
                          <MapPin size={17} />
                        </div>
                      </div>

                      <div className="relative grid grid-cols-2 gap-1">
                        {locations.map((location) => {
                          const active =
                            pathname === `/locations/${location.slug}` ||
                            pathname.startsWith(`/locations/${location.slug}/`);

                          return (
                            <Link
                              key={location.slug}
                              href={`/locations/${location.slug}`}
                              onClick={() => setLocationsOpen(false)}
                              className={`group flex items-center gap-3 rounded-xl border p-3 transition-all duration-200 ${
                                active
                                  ? "border-[#58AEBC]/20 bg-[#58AEBC]/10"
                                  : "border-transparent hover:border-[#58AEBC]/15 hover:bg-[#58AEBC]/[0.04]"
                              }`}
                            >
                              <div
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                                  active
                                    ? "bg-[#58AEBC] text-white"
                                    : "bg-[#58AEBC]/10 text-[#3d8996] group-hover:bg-[#58AEBC] group-hover:text-white"
                                }`}
                              >
                                <MapPin size={16} strokeWidth={1.8} />
                              </div>

                              <div className="min-w-0">
                                <div
                                  className={`text-sm font-semibold transition-colors ${
                                    active
                                      ? "text-[#3d8996]"
                                      : "text-slate-900 group-hover:text-[#3d8996]"
                                  }`}
                                >
                                  {location.city}
                                </div>

                                <p className="mt-0.5 truncate text-[11px] text-slate-500">
                                  {location.state}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="relative mt-2 border-t border-slate-100 pt-2">
                        <Link
                          href="/locations"
                          onClick={() => setLocationsOpen(false)}
                          className="group flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-[#58AEBC]/10 hover:text-[#3d8996]"
                        >
                          <span>Explore all Hotevance locations</span>

                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/contact"
              className="rounded-xl px-4 py-2.5 text-[14px] font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
            >
              Contact
            </Link>

            <Link
              href="/hotel-wifi-audit"
              className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-[16px] font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:bg-[#3d8996] hover:shadow-[#58AEBC]/20"
            >
              Free Wi-Fi Audit
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            className="relative z-[120] flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition-all hover:border-[#58AEBC]/30 hover:bg-[#58AEBC]/5 lg:hidden"
          >
            {mobileOpen ? (
              <X size={23} strokeWidth={2} />
            ) : (
              <Menu size={23} strokeWidth={2} />
            )}
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION

          IMPORTANT:
          This is intentionally OUTSIDE the header.
      ====================================================== */}

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[110] bg-white lg:hidden"
        >
          {/* =================================================
              MOBILE TOP BAR
          ================================================== */}

          <div className="flex h-[78px] items-center border-b border-slate-200/70 bg-white px-5 sm:px-6">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
              <Link
                href="/"
                onClick={closeMobile}
                className="flex items-center"
              >
                <Image
                  src={logo}
                  width={140}
                  height={40}
                  alt="Hotevance"
                  priority
                />
              </Link>

              <button
                type="button"
                onClick={closeMobile}
                aria-label="Close navigation"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-900 transition hover:border-[#58AEBC]/30 hover:bg-[#58AEBC]/5"
              >
                <X size={23} />
              </button>
            </div>
          </div>

          {/* =================================================
              SCROLLABLE MOBILE CONTENT
          ================================================== */}

          <div className="h-[calc(100dvh-78px)] overflow-y-auto overscroll-contain bg-white">
            <div className="mx-auto min-h-full max-w-7xl px-5 py-5 pb-12 sm:px-6">
              <ul className="space-y-1">
                {/* =========================================
                    SERVICES
                ========================================== */}

                <li>
                  <button
                    type="button"
                    onClick={toggleServices}
                    aria-expanded={servicesOpen}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-4 text-left text-[16px] font-semibold transition ${
                      servicesActive
                        ? "bg-[#58AEBC]/10 text-[#3d8996]"
                        : "text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span>Services</span>

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="mb-2 ml-2 border-l border-[#58AEBC]/30 pl-3">
                      {services.map((service) => {
                        const Icon = service.icon;
                        const active = isActive(pathname, service.href);

                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeMobile}
                            className={`group flex items-center gap-3 rounded-xl px-3 py-3.5 transition ${
                              active
                                ? "bg-[#58AEBC]/10"
                                : "hover:bg-[#58AEBC]/5"
                            }`}
                          >
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                active
                                  ? "bg-[#58AEBC] text-white"
                                  : "bg-[#58AEBC]/10 text-[#3d8996]"
                              }`}
                            >
                              <Icon size={17} />
                            </div>

                            <div className="min-w-0">
                              <span
                                className={`block text-sm font-medium ${
                                  active ? "text-[#3d8996]" : "text-slate-700"
                                }`}
                              >
                                {service.title}
                              </span>

                              <span className="mt-0.5 block text-[11px] leading-4 text-slate-400">
                                {service.description}
                              </span>
                            </div>
                          </Link>
                        );
                      })}

                      <Link
                        href="/services"
                        onClick={closeMobile}
                        className="mt-1 flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-[#3d8996] transition hover:bg-[#58AEBC]/5"
                      >
                        View all services
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  )}
                </li>

                {/* =========================================
                    TOOLS
                ========================================== */}

                <li>
                  <button
                    type="button"
                    onClick={toggleTools}
                    aria-expanded={toolsOpen}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-4 text-left text-[16px] font-semibold transition ${
                      toolsActive
                        ? "bg-[#58AEBC]/10 text-[#3d8996]"
                        : "text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span>Tools</span>

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        toolsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {toolsOpen && (
                    <div className="mb-2 ml-2 border-l border-[#58AEBC]/30 pl-3">
                      {tools.map((tool) => {
                        const Icon = tool.icon;
                        const active = isActive(pathname, tool.href);

                        return (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            onClick={closeMobile}
                            className={`group flex items-center gap-3 rounded-xl px-3 py-3.5 transition ${
                              active
                                ? "bg-[#58AEBC]/10"
                                : "hover:bg-[#58AEBC]/5"
                            }`}
                          >
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                active
                                  ? "bg-[#58AEBC] text-white"
                                  : "bg-[#58AEBC]/10 text-[#3d8996]"
                              }`}
                            >
                              <Icon size={17} />
                            </div>

                            <div className="min-w-0">
                              <span
                                className={`block text-sm font-medium ${
                                  active ? "text-[#3d8996]" : "text-slate-700"
                                }`}
                              >
                                {tool.title}
                              </span>

                              <span className="mt-0.5 block text-[11px] leading-4 text-slate-400">
                                {tool.description}
                              </span>
                            </div>
                          </Link>
                        );
                      })}

                      <Link
                        href="/tools"
                        onClick={closeMobile}
                        className="mt-1 flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-[#3d8996] transition hover:bg-[#58AEBC]/5"
                      >
                        View all tools
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  )}
                </li>

                {/* =========================================
                    MAIN LINKS
                ========================================== */}

                {mainLinks.map((link) => {
                  const active = isActive(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className={`block rounded-xl px-3 py-4 text-[16px] font-semibold transition ${
                          active
                            ? "bg-[#58AEBC]/10 text-[#3d8996]"
                            : "text-slate-900 hover:bg-slate-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}

                {/* =========================================
                    LOCATIONS
                ========================================== */}

                <li>
                  <button
                    type="button"
                    onClick={toggleLocations}
                    aria-expanded={locationsOpen}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-4 text-left text-[16px] font-semibold transition ${
                      locationsActive
                        ? "bg-[#58AEBC]/10 text-[#3d8996]"
                        : "text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span>Locations</span>

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        locationsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {locationsOpen && (
                    <div className="mb-2 ml-2 border-l border-[#58AEBC]/30 pl-3">
                      {locations.map((location) => {
                        const active =
                          pathname === `/locations/${location.slug}` ||
                          pathname.startsWith(`/locations/${location.slug}/`);

                        return (
                          <Link
                            key={location.slug}
                            href={`/locations/${location.slug}`}
                            onClick={closeMobile}
                            className={`group flex items-center gap-3 rounded-xl px-3 py-3.5 transition ${
                              active
                                ? "bg-[#58AEBC]/10"
                                : "hover:bg-[#58AEBC]/5"
                            }`}
                          >
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                active
                                  ? "bg-[#58AEBC] text-white"
                                  : "bg-[#58AEBC]/10 text-[#3d8996]"
                              }`}
                            >
                              <MapPin size={17} />
                            </div>

                            <div>
                              <span
                                className={`block text-sm font-medium ${
                                  active ? "text-[#3d8996]" : "text-slate-700"
                                }`}
                              >
                                {location.city}
                              </span>

                              <span className="block text-[11px] text-slate-400">
                                {location.state}
                              </span>
                            </div>
                          </Link>
                        );
                      })}

                      <Link
                        href="/locations"
                        onClick={closeMobile}
                        className="mt-1 flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-[#3d8996] transition hover:bg-[#58AEBC]/5"
                      >
                        View all locations
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  )}
                </li>

                {/* =========================================
                    CONTACT
                ========================================== */}

                <li>
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="block rounded-xl px-3 py-4 text-[16px] font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* =========================================
                  MOBILE CTA
              ========================================== */}

              <div className="mt-5 border-t border-slate-100 pt-5">
                <Link
                  href="/hotel-wifi-audit"
                  onClick={closeMobile}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#3d8996]"
                >
                  Get a Free Hotel Wi-Fi Audit
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
