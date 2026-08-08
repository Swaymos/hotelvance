import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Wifi,
  Network,
  ShieldCheck,
  Gauge,
  Building2,
  ClipboardCheck,
  Search,
  FileCheck2,
  Wrench,
  Hotel,
  ChevronDown,
} from "lucide-react";

const SITE_URL = "http://localhost:3000";

export const metadata = {
  title: "Free Hotel Wi-Fi Audit | Hotel Wi-Fi Assessment | Hotevance",

  description:
    "Get a free hotel Wi-Fi audit from Hotevance. Identify coverage gaps, slow speeds, network bottlenecks and connectivity problems affecting your hotel's guest experience.",

  keywords: [
    "hotel Wi-Fi audit",
    "free hotel Wi-Fi audit",
    "hotel Wi-Fi assessment",
    "hotel Wi-Fi survey",
    "hotel network assessment",
    "hotel Wi-Fi problems",
    "hospitality Wi-Fi",
    "hotel wireless network",
    "hotel internet solutions",
    "hotel IT infrastructure",
    "hotel networking Nigeria",
    "hotel Wi-Fi Nigeria",
  ],

  alternates: {
    canonical: `${SITE_URL}/hotel-wifi-audit`,
  },

  openGraph: {
    title: "Free Hotel Wi-Fi Audit | Hotevance",
    description:
      "Find out why your hotel's Wi-Fi may be underperforming. Hotevance provides hotel-focused Wi-Fi audits to identify connectivity, coverage and performance issues.",
    url: `${SITE_URL}/hotel-wifi-audit`,
    siteName: "Hotevance",
    type: "website",
    locale: "en_NG",
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Hotel Wi-Fi Audit | Hotevance",
    description:
      "Identify hotel Wi-Fi coverage, performance and infrastructure problems with a professional Wi-Fi audit from Hotevance.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const auditAreas = [
  {
    icon: Wifi,
    title: "Wi-Fi Coverage",
    description:
      "Identify weak-signal areas, dead zones and inconsistent coverage across guest rooms and shared spaces.",
  },
  {
    icon: Gauge,
    title: "Network Performance",
    description:
      "Assess connection speeds, latency, capacity and performance under typical hotel usage conditions.",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Review access points, switches, cabling, uplinks and network architecture for potential bottlenecks.",
  },
  {
    icon: ShieldCheck,
    title: "Network Security",
    description:
      "Identify configuration and segmentation issues that could affect guest, staff and operational networks.",
  },
  {
    icon: Building2,
    title: "Guest Experience",
    description:
      "Assess how the network performs in the areas where guests expect reliable connectivity.",
  },
  {
    icon: ClipboardCheck,
    title: "Capacity & Scalability",
    description:
      "Determine whether the current network can support increasing guest numbers, devices and hotel technology.",
  },
];

const problems = [
  "Guests frequently complain about slow Wi-Fi.",
  "Wi-Fi works in some rooms but not others.",
  "Internet speeds drop during busy periods.",
  "Guests repeatedly need help connecting to Wi-Fi.",
  "Streaming and video calls perform poorly.",
  "Access points may be incorrectly positioned.",
  "Network equipment may be reaching its capacity.",
  "Guest and staff traffic may not be properly separated.",
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Initial Assessment",
    description:
      "We learn about your property, existing network and the connectivity issues your hotel is experiencing.",
  },
  {
    number: "02",
    icon: Wifi,
    title: "Wi-Fi Analysis",
    description:
      "We assess coverage, signal quality, performance and potential connectivity issues throughout the property.",
  },
  {
    number: "03",
    icon: Network,
    title: "Infrastructure Review",
    description:
      "We examine the network architecture and supporting infrastructure that powers your hotel's Wi-Fi.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Recommendations",
    description:
      "You receive practical recommendations for improving reliability, performance and scalability.",
  },
];

const faqs = [
  {
    question: "What is a hotel Wi-Fi audit?",
    answer:
      "A hotel Wi-Fi audit is an assessment of a property's wireless network and supporting infrastructure. It evaluates factors such as coverage, signal quality, network performance, capacity and configuration to identify issues that may affect guests and hotel operations.",
  },
  {
    question: "Why does my hotel need a Wi-Fi audit?",
    answer:
      "A Wi-Fi audit helps identify problems that may not be obvious from basic internet speed tests. Coverage gaps, poor access-point placement, network congestion, interference and infrastructure bottlenecks can all affect hotel connectivity.",
  },
  {
    question: "Does the audit only check Wi-Fi speed?",
    answer:
      "No. A professional hotel Wi-Fi assessment looks beyond internet speed. It can examine wireless coverage, signal quality, network capacity, infrastructure, access-point placement, latency, security and other factors that influence the guest experience.",
  },
  {
    question: "Can you audit an existing hotel Wi-Fi network?",
    answer:
      "Yes. Hotevance can assess an existing hotel network and identify areas where the current infrastructure, configuration or coverage can be improved.",
  },
  {
    question: "Is the Wi-Fi audit useful for new hotels?",
    answer:
      "Yes. A Wi-Fi assessment can help new hotels plan their wireless infrastructure before deployment, reducing the risk of coverage gaps and capacity problems after opening.",
  },
  {
    question: "What happens after the Wi-Fi audit?",
    answer:
      "After the assessment, Hotevance can provide recommendations based on the property's requirements. If improvements are required, these may include network redesign, additional access points, infrastructure upgrades, configuration changes or managed IT support.",
  },
];

export default function HotelWifiAuditPage() {
  const auditSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hotel Wi-Fi Audit",
    serviceType: "Hotel Wi-Fi Audit and Network Assessment",
    description:
      "Professional hotel Wi-Fi audit and network assessment designed to identify coverage, performance, capacity and infrastructure issues.",
    url: `${SITE_URL}/hotel-wifi-audit`,
    provider: {
      "@type": "Organization",
      name: "Hotevance Limited",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hotel Wi-Fi Audit",
        item: `${SITE_URL}/hotel-wifi-audit`,
      },
    ],
  };

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

  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(auditSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main>
        {/* ===================================================
            HERO
        ==================================================== */}

        <section className="relative overflow-hidden bg-[#0F1020]">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#58AEBC]/20 blur-3xl" />

          <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-[#58AEBC]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-white/40">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">/</li>

                <li className="text-white/70">Hotel Wi-Fi Audit</li>
              </ol>
            </nav>

            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Hero Copy */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#58AEBC]/30 bg-[#58AEBC]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#7bc5d0]">
                  <Wifi size={14} />
                  Hotel Wi-Fi Assessment
                </div>

                <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Is your hotel's Wi-Fi delivering the experience guests expect?
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                  Identify Wi-Fi coverage gaps, performance problems,
                  infrastructure bottlenecks and network issues before they turn
                  into guest complaints.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#58AEBC] px-6 py-3.5 text-sm font-semibold text-[#0F1020] transition hover:bg-white"
                  >
                    Request Your Free Audit
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="#what-we-check"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    See What We Check
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/50">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#58AEBC]" />
                    Hotel-focused assessment
                  </span>

                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#58AEBC]" />
                    Practical recommendations
                  </span>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#58AEBC]/20 blur-3xl" />

                  <div className="relative">
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                          Network Assessment
                        </p>

                        <p className="mt-1 text-lg font-bold text-white">
                          Hotel Wi-Fi Health
                        </p>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#58AEBC]/15 text-[#58AEBC]">
                        <Wifi size={21} />
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      {[
                        "Coverage",
                        "Performance",
                        "Capacity",
                        "Infrastructure",
                      ].map((item, index) => (
                        <div key={item}>
                          <div className="mb-2 flex justify-between text-xs">
                            <span className="text-white/60">{item}</span>

                            <span className="text-white/40">
                              {index === 0
                                ? "Signal"
                                : index === 1
                                ? "Speed"
                                : index === 2
                                ? "Load"
                                : "Health"}
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-[#58AEBC]"
                              style={{
                                width: `${[82, 68, 74, 88][index]}%`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 rounded-2xl border border-[#58AEBC]/20 bg-[#58AEBC]/10 p-4">
                      <div className="flex items-start gap-3">
                        <ShieldCheck
                          size={19}
                          className="mt-0.5 shrink-0 text-[#58AEBC]"
                        />

                        <div>
                          <p className="text-sm font-semibold text-white">
                            Find the root cause
                          </p>

                          <p className="mt-1 text-xs leading-5 text-white/50">
                            A hotel Wi-Fi audit looks beyond basic internet
                            speed tests.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            INTRO
        ==================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Why audit your network?
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Your internet connection isn't the whole Wi-Fi story.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-slate-600">
                <p>
                  A hotel can have a fast internet connection and still provide
                  a poor Wi-Fi experience. Access-point placement, interference,
                  network design, equipment capacity and configuration can all
                  affect how guests experience connectivity.
                </p>

                <p>
                  A professional hotel Wi-Fi audit helps uncover these problems
                  so you can make informed decisions about your network instead
                  of simply increasing your internet bandwidth.
                </p>

                <p>
                  Hotevance focuses specifically on hospitality technology,
                  helping hotels build reliable and scalable connectivity
                  infrastructure for guests, staff and hotel systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            WHAT WE CHECK
        ==================================================== */}

        <section id="what-we-check" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                What we check
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A complete look at your hotel's Wi-Fi environment.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                We look at the factors that influence wireless performance,
                reliability and the guest experience.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {auditAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#3d8996]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================
            PROBLEMS
        ==================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Is this happening at your hotel?
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Common hotel Wi-Fi problems we help identify.
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  If your hotel is experiencing any of these issues, a Wi-Fi
                  assessment can help determine what is actually causing them.
                </p>
              </div>

              <div className="rounded-3xl bg-[#0F1020] p-7 sm:p-9">
                <div className="grid gap-4 sm:grid-cols-2">
                  {problems.map((problem) => (
                    <div key={problem} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#58AEBC]"
                      />

                      <span className="text-sm leading-6 text-white/65">
                        {problem}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            WHO NEEDS IT
        ==================================================== */}

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                Built for hospitality
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Useful for hotels at every stage.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Hotel,
                  title: "Existing Hotels",
                  description:
                    "Find and resolve connectivity problems affecting your current guests and staff.",
                },
                {
                  icon: Building2,
                  title: "New Hotels",
                  description:
                    "Assess your planned infrastructure before deployment to reduce future coverage and capacity issues.",
                },
                {
                  icon: Network,
                  title: "Hotels Upgrading",
                  description:
                    "Understand your existing network before investing in new equipment or increasing capacity.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#3d8996]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================
            PROCESS
        ==================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                How it works
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                From assessment to actionable recommendations.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="relative rounded-2xl border border-slate-200 p-7"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#3d8996]">
                        <Icon size={20} />
                      </div>

                      <span className="text-sm font-bold text-[#58AEBC]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================
            WHAT YOU GET
        ==================================================== */}

        <section className="bg-[#0F1020]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  The outcome
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Know what your network needs next.
                </h2>

                <p className="mt-6 text-base leading-8 text-white/55">
                  The goal of an audit isn't simply to identify problems. It's
                  to give your hotel a clearer understanding of what should be
                  improved and why.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Identify wireless coverage gaps.",
                  "Understand potential network bottlenecks.",
                  "Identify infrastructure weaknesses.",
                  "Improve guest connectivity reliability.",
                  "Plan future network upgrades with better information.",
                  "Prioritize improvements based on your property's needs.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#58AEBC]"
                    />

                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            FAQ
        ==================================================== */}

        <section className="bg-slate-50">
          <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                Frequently asked questions
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Hotel Wi-Fi audit FAQs
              </h2>
            </div>

            <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6 sm:px-8">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  open={index === 0}
                  className="group py-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-bold text-slate-950">
                    <span>{faq.question}</span>

                    <ChevronDown
                      size={18}
                      className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    />
                  </summary>

                  <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
