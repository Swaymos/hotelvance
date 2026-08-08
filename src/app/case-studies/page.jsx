import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Wifi,
  Tv,
  Network,
  Server,
  CheckCircle2,
  MapPin,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Hotel Technology Case Studies | Hotevance",
  description:
    "Explore Hotevance hotel technology case studies covering Wi-Fi, IPTV, fiber networking, managed IT and hospitality technology solutions across Nigeria.",
  keywords: [
    "hotel technology case studies",
    "hotel Wi-Fi case studies",
    "hospitality technology Nigeria",
    "hotel IT solutions Nigeria",
    "hotel network installation",
    "hotel Wi-Fi installation Nigeria",
    "hotel IPTV installation",
    "hospitality IT case studies",
  ],
  alternates: {
    canonical: "https://hotevance.com/case-studies",
  },
  openGraph: {
    title: "Hotel Technology Case Studies | Hotevance",
    description:
      "See how Hotevance helps hotels and hospitality businesses improve connectivity, networking, IPTV and IT infrastructure.",
    url: "https://hotevance.com/case-studies",
    siteName: "Hotevance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Technology Case Studies | Hotevance",
    description:
      "Explore Hotevance projects across hotel Wi-Fi, IPTV, fiber networking and managed IT.",
  },
};

const caseStudies = [
  {
    slug: "hotel-wifi-network-upgrade",
    title: "Hotel Wi-Fi Network Upgrade",
    property: "Premium Hotel",
    location: "Abuja, Nigeria",
    category: "Hotel Wi-Fi",
    description:
      "A complete wireless network improvement project designed to provide reliable high-speed connectivity across guest rooms and shared areas.",
    icon: Wifi,
    services: [
      "Wi-Fi network assessment",
      "Wireless coverage optimization",
      "Access point deployment",
      "Network configuration",
    ],
    results: [
      "Improved wireless coverage",
      "More consistent guest connectivity",
      "Better network capacity",
      "Reduced connectivity complaints",
    ],
    href: "/case-studies/hotel-wifi-network-upgrade",
    featured: true,
  },
  {
    slug: "hotel-iptv-deployment",
    title: "Hotel IPTV Deployment",
    property: "Business Hotel",
    location: "Lagos, Nigeria",
    category: "Hotel IPTV",
    description:
      "An in-room entertainment deployment designed to provide guests with a modern and reliable hotel TV experience.",
    icon: Tv,
    services: [
      "IPTV infrastructure",
      "In-room TV configuration",
      "Network integration",
      "System testing",
    ],
    results: [
      "Modernized in-room entertainment",
      "Centralized content management",
      "Improved guest experience",
      "Simplified system administration",
    ],
    href: "/case-studies/hotel-iptv-deployment",
    featured: true,
  },
  {
    slug: "hotel-fiber-network",
    title: "Hotel Fiber Network Infrastructure",
    property: "Hospitality Property",
    location: "Abuja, Nigeria",
    category: "GPON & Fiber",
    description:
      "A scalable fiber infrastructure project built to support growing connectivity requirements across a hospitality property.",
    icon: Network,
    services: [
      "Fiber network design",
      "GPON infrastructure",
      "Network distribution",
      "Infrastructure testing",
    ],
    results: [
      "Higher network capacity",
      "Improved infrastructure scalability",
      "More reliable connectivity",
      "Better network performance",
    ],
    href: "/case-studies/hotel-fiber-network",
    featured: false,
  },
  {
    slug: "managed-it-hospitality",
    title: "Managed IT Support for Hospitality",
    property: "Independent Hotel",
    location: "Lagos, Nigeria",
    category: "Managed IT",
    description:
      "Ongoing technology support designed to improve reliability, reduce downtime and simplify day-to-day IT operations.",
    icon: Server,
    services: [
      "IT infrastructure assessment",
      "Network monitoring",
      "Technical support",
      "Preventive maintenance",
    ],
    results: [
      "Faster issue resolution",
      "Improved system reliability",
      "Reduced operational disruption",
      "Proactive technology management",
    ],
    href: "/case-studies/managed-it-hospitality",
    featured: false,
  },
];

const services = [
  {
    title: "Hotel Wi-Fi",
    description:
      "Reliable wireless networks designed for high-density hospitality environments.",
    href: "/services/hotel-wifi",
    icon: Wifi,
  },
  {
    title: "Hotel IPTV",
    description:
      "Modern in-room entertainment systems designed around the guest experience.",
    href: "/services/hotel-iptv",
    icon: Tv,
  },
  {
    title: "GPON & Fiber",
    description:
      "High-capacity fiber infrastructure for connected hotel properties.",
    href: "/services/gpon-fiber",
    icon: Network,
  },
  {
    title: "Managed IT",
    description:
      "Proactive technology management and support for hospitality businesses.",
    href: "/services/managed-it",
    icon: Server,
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://hotevance.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Case Studies",
      item: "https://hotevance.com/case-studies",
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Hotel Technology Case Studies",
  description:
    "Hotel technology case studies from Hotevance covering Wi-Fi, IPTV, fiber networking and managed IT.",
  url: "https://hotevance.com/case-studies",
  publisher: {
    "@type": "Organization",
    name: "Hotevance Limited",
    url: "https://hotevance.com",
  },
};

export default function CaseStudiesPage() {
  const featured = caseStudies.filter((item) => item.featured);
  const otherProjects = caseStudies.filter((item) => !item.featured);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <main className="overflow-hidden">
        {/* =========================================================
            BREADCRUMB
        ========================================================== */}
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm"
            >
              <Link
                href="/"
                className="text-slate-400 transition hover:text-[#3d8996]"
              >
                Home
              </Link>

              <ChevronRight size={14} className="text-slate-300" />

              <span className="font-medium text-slate-700">Case Studies</span>
            </nav>
          </div>
        </div>

        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden bg-slate-950">
          {/* Grid */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Glows */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#58AEBC]/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-48 left-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

          {/* Fade */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.3)_55%,rgba(2,6,23,.8)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
              {/* Hero Copy */}
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#58AEBC]/30 bg-[#58AEBC]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7bc5d0]">
                  <Sparkles size={14} />
                  Our Work
                </div>

                <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Hotel technology projects{" "}
                  <span className="text-[#58AEBC]">
                    built for real properties.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                  Explore how Hotevance helps hotels and hospitality businesses
                  improve connectivity, networking, entertainment and IT
                  operations.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/hotel-wifi-audit"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#58AEBC] px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-[#7bc5d0] hover:shadow-[0_0_35px_rgba(88,174,188,.25)]"
                  >
                    Get a Free Wi-Fi Audit
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#58AEBC]/30 hover:bg-white/5"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              {/* Hero Project Visual */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 rounded-[2rem] bg-[#58AEBC]/10 blur-3xl" />

                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                          Project Portfolio
                        </p>

                        <h2 className="mt-2 text-xl font-semibold text-white">
                          Hospitality Technology
                        </h2>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#58AEBC]">
                        <Building2 size={21} />
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      {[
                        {
                          label: "Wi-Fi",
                          value: "Networks",
                          icon: Wifi,
                        },
                        {
                          label: "IPTV",
                          value: "Systems",
                          icon: Tv,
                        },
                        {
                          label: "Fiber",
                          value: "Infrastructure",
                          icon: Network,
                        },
                        {
                          label: "IT",
                          value: "Support",
                          icon: Server,
                        },
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.label}
                            className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                          >
                            <Icon size={19} className="text-[#58AEBC]" />

                            <p className="mt-4 text-xs text-white/35">
                              {item.label}
                            </p>

                            <p className="mt-1 text-sm font-semibold text-white/80">
                              {item.value}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-xs text-white/35">
                        Project coverage
                      </span>

                      <span className="flex items-center gap-2 text-xs font-semibold text-[#58AEBC]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#58AEBC]" />
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO
        ========================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                  Hospitality technology projects
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Solving the technology challenges hotels face every day.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Hotel technology has a direct impact on guest experience and
                  operational efficiency. Slow Wi-Fi, unreliable networks,
                  outdated entertainment systems and technology downtime can
                  quickly become business problems.
                </p>

                <p>
                  Our projects combine infrastructure planning, technology
                  deployment and ongoing support to create reliable systems that
                  are designed around each property's requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURED PROJECTS
        ========================================================== */}
        <section className="relative overflow-hidden bg-slate-50">
          <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#58AEBC]/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                  Featured projects
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Technology projects across Nigerian hospitality.
                </h2>
              </div>

              <span className="text-sm text-slate-400">
                {featured.length} featured projects
              </span>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {featured.map((study) => {
                const Icon = study.icon;

                return (
                  <Link
                    key={study.slug}
                    href={study.href}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#58AEBC]/40 hover:shadow-2xl hover:shadow-slate-900/10"
                  >
                    {/* Visual */}
                    <div className="relative h-72 overflow-hidden bg-slate-950">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:45px_45px]" />

                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,174,188,0.2),transparent_60%)]" />

                      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#58AEBC]/10 blur-3xl transition duration-500 group-hover:bg-[#58AEBC]/20" />

                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.5rem] border border-[#58AEBC]/20 bg-[#58AEBC]/10 text-[#58AEBC] shadow-[0_0_50px_rgba(88,174,188,.12)] transition-all duration-500 group-hover:scale-110 group-hover:border-[#58AEBC]/40">
                          <Icon size={38} strokeWidth={1.4} />
                        </div>
                      </div>

                      {/* Category */}
                      <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                        {study.category}
                      </div>

                      {/* Number */}
                      <div className="absolute bottom-5 right-6 text-6xl font-bold text-white/[0.06]">
                        0{featured.indexOf(study) + 1}
                      </div>
                    </div>

                    <div className="p-7 sm:p-8">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
                        <Building2 size={14} />
                        {study.property}

                        <span className="text-slate-300">•</span>

                        <MapPin size={14} />
                        {study.location}
                      </div>

                      <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
                        {study.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {study.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {study.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-6">
                        <span className="text-sm font-semibold text-[#3d8996]">
                          View case study
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-hover:bg-[#58AEBC] group-hover:text-slate-950">
                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            MORE PROJECTS
        ========================================================== */}
        {otherProjects.length > 0 && (
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                  More projects
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  More hospitality technology work.
                </h2>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {otherProjects.map((study) => {
                  const Icon = study.icon;

                  return (
                    <Link
                      key={study.slug}
                      href={study.href}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-xl"
                    >
                      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#58AEBC]/5 blur-2xl transition group-hover:bg-[#58AEBC]/10" />

                      <div className="relative flex gap-6">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#58AEBC]/15 bg-[#58AEBC]/10 text-[#3d8996]">
                          <Icon size={24} strokeWidth={1.7} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
                            {study.category}

                            <span>•</span>

                            {study.location}
                          </div>

                          <h3 className="mt-2 text-lg font-bold text-slate-950">
                            {study.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {study.description}
                          </p>

                          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]">
                            View project
                            <ArrowRight
                              size={15}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            RESULTS
        ========================================================== */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#58AEBC]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                  What we focus on
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Technology improvements that matter to your property.
                </h2>

                <p className="mt-6 text-base leading-8 text-white/55">
                  Every project is designed around practical business and
                  guest-experience outcomes rather than technology for
                  technology's sake.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Reliable guest connectivity",
                  "Better Wi-Fi coverage",
                  "Higher network capacity",
                  "Improved system reliability",
                  "Modern in-room entertainment",
                  "Scalable infrastructure",
                  "Reduced technology downtime",
                  "Simplified IT operations",
                ].map((result) => (
                  <div
                    key={result}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-[#58AEBC]/30 hover:bg-[#58AEBC]/[0.04]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#58AEBC]/10">
                      <CheckCircle2 size={16} className="text-[#58AEBC]" />
                    </div>

                    <span className="text-sm text-white/70">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                  Our capabilities
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Explore the technology behind our projects.
                </h2>
              </div>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]"
              >
                View all services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-xl"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-[#58AEBC]/10 group-hover:text-[#3d8996]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]">
                      Learn more
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
