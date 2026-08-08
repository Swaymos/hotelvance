import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Hotel,
  Waves,
  Utensils,
  BriefcaseBusiness,
  Wifi,
  Tv,
  Network,
  Headphones,
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Hospitality Technology Solutions by Industry | Hotevance",
  description:
    "Hotevance provides reliable hotel technology solutions for hotels, resorts, serviced apartments, restaurants, and hospitality businesses across Nigeria.",
  keywords: [
    "hospitality technology solutions",
    "hotel technology Nigeria",
    "hotel Wi-Fi solutions",
    "hotel IPTV Nigeria",
    "hospitality IT solutions",
    "hotel network solutions",
    "resort technology solutions",
    "hotel technology company",
  ],
  alternates: {
    canonical: "https://hotevance.com/industries",
  },
  openGraph: {
    title: "Hospitality Technology Solutions by Industry | Hotevance",
    description:
      "Technology infrastructure and managed IT solutions built for hotels, resorts, serviced apartments, and hospitality businesses.",
    url: "https://hotevance.com/industries",
    siteName: "Hotevance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality Technology Solutions by Industry | Hotevance",
    description:
      "Hotel Wi-Fi, IPTV, fiber networking, VoIP, PMS integration, and managed IT solutions for hospitality businesses.",
  },
};

const industries = [
  {
    title: "Hotels",
    slug: "hotels",
    description:
      "Connected technology infrastructure that helps hotels deliver reliable guest experiences and operate efficiently.",
    icon: Hotel,
    services: [
      "Hotel Wi-Fi",
      "IPTV & entertainment",
      "Fiber & GPON networks",
      "VoIP communication",
      "PMS integration",
      "Managed IT support",
    ],
    href: "/industries/hotels",
  },
  {
    title: "Resorts",
    slug: "resorts",
    description:
      "Scalable connectivity and technology solutions designed for large properties, guest areas, and resort operations.",
    icon: Waves,
    services: [
      "Guest Wi-Fi",
      "Property-wide networking",
      "IPTV systems",
      "Fiber infrastructure",
      "Network security",
      "IT support",
    ],
    href: "/industries/resorts",
  },
  {
    title: "Serviced Apartments",
    slug: "serviced-apartments",
    description:
      "Reliable technology infrastructure for serviced apartments, extended-stay properties, and residential hospitality.",
    icon: Building2,
    services: [
      "High-speed Wi-Fi",
      "Fiber connectivity",
      "IPTV",
      "Network management",
      "Guest support",
      "Security",
    ],
    href: "/industries/serviced-apartments",
  },
  {
    title: "Restaurants & Hospitality",
    slug: "restaurants",
    description:
      "Connected systems that support guest connectivity, staff communication, entertainment, and daily operations.",
    icon: Utensils,
    services: [
      "Business Wi-Fi",
      "Network infrastructure",
      "VoIP",
      "Managed IT",
      "Network security",
      "Technical support",
    ],
    href: "/industries/restaurants",
  },
  {
    title: "Corporate Hospitality",
    slug: "corporate-hospitality",
    description:
      "Technology solutions for corporate accommodation, executive residences, and hospitality facilities.",
    icon: BriefcaseBusiness,
    services: [
      "Enterprise Wi-Fi",
      "Secure networking",
      "VoIP",
      "IT infrastructure",
      "Network monitoring",
      "Technical support",
    ],
    href: "/industries/corporate-hospitality",
  },
];

const coreSolutions = [
  {
    title: "Hotel Wi-Fi",
    description:
      "Fast, secure and reliable wireless networks designed around the needs of guests and hotel staff.",
    href: "/services/hotel-wifi",
    icon: Wifi,
  },
  {
    title: "Hotel IPTV",
    description:
      "Modern in-room entertainment systems that improve the guest experience and support hotel services.",
    href: "/services/hotel-iptv",
    icon: Tv,
  },
  {
    title: "Fiber & GPON",
    description:
      "High-capacity fiber infrastructure designed to support connected hotel properties.",
    href: "/services/gpon-fiber",
    icon: Network,
  },
  {
    title: "Managed IT",
    description:
      "Proactive technology monitoring, maintenance, troubleshooting and support for hospitality businesses.",
    href: "/services/managed-it",
    icon: Headphones,
  },
];

const faqs = [
  {
    question: "What hospitality businesses does Hotevance serve?",
    answer:
      "Hotevance provides technology solutions for hotels, resorts, serviced apartments, restaurants, corporate hospitality facilities and other hospitality businesses.",
  },
  {
    question: "What technology solutions do hotels need?",
    answer:
      "Depending on the property, common requirements include reliable guest Wi-Fi, fiber networking, IPTV, VoIP, network security, PMS integration and ongoing managed IT support.",
  },
  {
    question: "Does Hotevance provide hotel Wi-Fi installation?",
    answer:
      "Yes. Hotevance can help with hotel Wi-Fi planning, network design, deployment, optimization and ongoing support for hospitality properties.",
  },
  {
    question: "Can Hotevance support an existing hotel network?",
    answer:
      "Yes. Hotevance can assess existing infrastructure, identify performance and coverage issues, recommend improvements and provide ongoing managed technology support.",
  },
  {
    question: "Where does Hotevance provide hospitality technology services?",
    answer:
      "Hotevance provides hospitality technology services across Nigeria, supporting hotel and hospitality businesses in locations including Abuja and Lagos.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

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
      name: "Industries",
      item: "https://hotevance.com/industries",
    },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="overflow-hidden">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden bg-slate-950">
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#58AEBC]/15 blur-3xl" />

            <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Technical Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Radial Fade */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_60%,rgba(2,6,23,.95)_100%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
              {/* Hero Content */}
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#58AEBC]/30 bg-[#58AEBC]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7bc5d0]">
                  <Sparkles size={14} />
                  Hospitality Technology
                </div>

                <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Technology solutions built for{" "}
                  <span className="text-[#58AEBC]">hospitality.</span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                  Hotevance provides hotel technology and managed IT solutions
                  designed around the unique connectivity, entertainment,
                  networking and operational needs of hospitality businesses.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/hotel-wifi-audit"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#58AEBC] px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-[#7bc5d0] hover:shadow-[0_0_35px_rgba(88,174,188,.25)]"
                  >
                    Get a Free Hotel Wi-Fi Audit
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#58AEBC]/40 hover:bg-white/5"
                  >
                    Explore Our Services
                  </Link>
                </div>

                {/* Trust Points */}
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                  {["Hotel Wi-Fi", "IPTV", "Fiber & GPON", "Managed IT"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-white/50"
                      >
                        <CheckCircle2 size={15} className="text-[#58AEBC]" />
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 rounded-[2rem] bg-[#58AEBC]/10 blur-3xl" />

                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-sm">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                          Connected Property
                        </p>

                        <h2 className="mt-2 text-xl font-semibold text-white">
                          Hospitality Technology
                        </h2>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#58AEBC]">
                        <Hotel size={21} />
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      {[
                        "Guest Wi-Fi",
                        "IPTV & Entertainment",
                        "Fiber Infrastructure",
                        "Managed IT",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#58AEBC]/10 text-xs font-bold text-[#58AEBC]">
                              0{index + 1}
                            </span>

                            <span className="text-sm font-medium text-white/80">
                              {item}
                            </span>
                          </div>

                          <CheckCircle2 size={16} className="text-[#58AEBC]" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-xs text-white/35">
                        Technology ecosystem
                      </span>

                      <span className="text-xs font-semibold text-[#58AEBC]">
                        Connected
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
                  Built around your property
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Hospitality technology that works for your operation.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Every hospitality property has different requirements. A city
                  hotel may need high-density guest Wi-Fi and reliable IPTV,
                  while a resort may require extensive fiber infrastructure
                  across multiple buildings.
                </p>

                <p>
                  Hotevance combines network infrastructure, connectivity,
                  entertainment systems and managed IT services to create
                  technology environments that are reliable, secure and easier
                  to manage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            INDUSTRIES
        ========================================================== */}
        <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#58AEBC]/10 blur-3xl" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-[#58AEBC]/30 bg-[#58AEBC]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7bc5d0]">
                Industries We Serve
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Technology for every type of{" "}
                <span className="text-[#58AEBC]">hospitality property.</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Solutions designed around the infrastructure, connectivity and
                operational requirements of your property.
              </p>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <Link
                    key={industry.slug}
                    href={industry.href}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#58AEBC]/30 hover:bg-[#58AEBC]/[0.035] hover:shadow-2xl"
                  >
                    {/* Card Glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#58AEBC]/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                    <div className="relative flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#58AEBC]/20 bg-[#58AEBC]/10 text-[#58AEBC] transition-all duration-300 group-hover:border-[#58AEBC]/40 group-hover:bg-[#58AEBC] group-hover:text-slate-950">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <ArrowRight
                        size={19}
                        className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#58AEBC]"
                      />
                    </div>

                    <h3 className="relative mt-7 text-xl font-bold text-white">
                      {industry.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-slate-400">
                      {industry.description}
                    </p>

                    <ul className="relative mt-6 space-y-2.5 border-t border-white/10 pt-5">
                      {industry.services.slice(0, 4).map((service) => (
                        <li
                          key={service}
                          className="flex items-center gap-2 text-xs font-medium text-slate-500"
                        >
                          <CheckCircle2
                            size={14}
                            className="shrink-0 text-[#58AEBC]"
                          />

                          {service}
                        </li>
                      ))}
                    </ul>

                    <div className="relative mt-6 text-sm font-semibold text-[#58AEBC]">
                      Explore {industry.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            CORE SOLUTIONS
        ========================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                  Core Solutions
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  The technology behind a connected hotel.
                </h2>
              </div>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]"
              >
                View all services
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {coreSolutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <Link
                    key={solution.href}
                    href={solution.href}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-[#58AEBC]/10 group-hover:text-[#3d8996]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {solution.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]">
                      Learn more
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            CHALLENGES
        ========================================================== */}
        <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#58AEBC]/10 blur-3xl" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                  Hospitality Challenges
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Technology problems should not become{" "}
                  <span className="text-[#58AEBC]">guest problems.</span>
                </h2>

                <p className="mt-6 text-base leading-8 text-white/55">
                  Poor connectivity, unreliable networks and outdated technology
                  can directly affect guest satisfaction and hotel operations.
                  Hotevance helps hospitality businesses identify and solve
                  these issues.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 font-semibold text-[#58AEBC]"
                >
                  Discuss your technology needs
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Slow or unreliable guest Wi-Fi",
                  "Poor wireless coverage",
                  "Network downtime",
                  "Outdated IPTV systems",
                  "Limited network capacity",
                  "Unmanaged IT infrastructure",
                  "Poor staff connectivity",
                  "Complex technology environments",
                ].map((problem) => (
                  <div
                    key={problem}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-[#58AEBC]/30 hover:bg-[#58AEBC]/[0.04]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#58AEBC]/10">
                      <CheckCircle2 size={16} className="text-[#58AEBC]" />
                    </div>

                    <span className="text-sm text-white/70">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PROCESS
        ========================================================== */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                Our Approach
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                From assessment to ongoing support.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                A structured approach helps ensure your hospitality technology
                is designed, deployed and supported around your property.
              </p>
            </div>

            <div className="relative mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Assess",
                  description:
                    "We understand your property, existing infrastructure, technology requirements and operational challenges.",
                },
                {
                  number: "02",
                  title: "Design & Deploy",
                  description:
                    "We design and implement technology solutions around your property's capacity, layout and guest experience.",
                },
                {
                  number: "03",
                  title: "Support",
                  description:
                    "We provide ongoing monitoring, maintenance and technical support to keep your systems performing.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/30 hover:shadow-xl"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#58AEBC]/5 blur-2xl transition group-hover:bg-[#58AEBC]/10" />

                  <span className="relative text-6xl font-bold tracking-tight text-[#58AEBC]/15">
                    {step.number}
                  </span>

                  <h3 className="relative mt-4 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="relative mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3d8996]">
                    <CheckCircle2 size={15} />
                    Hospitality technology
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center">
              <span className="inline-flex rounded-full border border-[#58AEBC]/20 bg-[#58AEBC]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#3d8996]">
                Frequently Asked Questions
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Hospitality technology FAQs
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
                Answers to common questions about Hotevance hospitality
                technology services and support.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-slate-200 last:border-b-0"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 text-left text-base font-semibold text-slate-900 transition hover:bg-slate-50 sm:px-8">
                    <span>{faq.question}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 transition-colors group-open:bg-[#58AEBC]/10">
                      <ChevronDown
                        size={17}
                        className="text-slate-400 transition-transform duration-300 group-open:rotate-180 group-open:text-[#3d8996]"
                      />
                    </span>
                  </summary>

                  <div className="px-6 pb-6 sm:px-8">
                    <p className="max-w-3xl pr-8 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
