import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Hotel,
  Network,
  ShieldCheck,
  Tv,
  Wifi,
} from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: "About Hotevance | Hotel Technology Solutions in Nigeria",

  description:
    "Hotevance provides hotel technology solutions including Wi-Fi, fiber networking, IPTV, PMS integration and managed IT services for hotels and hospitality businesses in Nigeria.",

  keywords: [
    "Hotevance",
    "hotel technology company Nigeria",
    "hotel IT company Nigeria",
    "hospitality technology Nigeria",
    "hotel Wi-Fi Nigeria",
    "hotel IPTV Nigeria",
    "hotel networking Nigeria",
    "managed IT for hotels",
    "hotel technology solutions",
  ],

  alternates: {
    canonical: `${SITE_URL}/about`,
  },

  openGraph: {
    title: "About Hotevance | Hotel Technology Solutions in Nigeria",
    description:
      "Discover Hotevance and how we help hotels build reliable, connected and technology-driven guest experiences.",
    url: `${SITE_URL}/about`,
    siteName: "Hotevance",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Hotevance | Hotel Technology Solutions in Nigeria",
    description:
      "Hotel technology, networking, connectivity and managed IT solutions for hospitality businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    icon: Wifi,
    title: "Hotel Wi-Fi",
    description:
      "Reliable, high-performance Wi-Fi networks designed around the needs of hotels, guests and staff.",
    href: "/services/hotel-wifi",
  },
  {
    icon: Network,
    title: "Fiber & GPON",
    description:
      "Scalable fiber and GPON infrastructure that provides the foundation for connected hospitality properties.",
    href: "/services/gpon-fiber",
  },
  {
    icon: Tv,
    title: "Hotel IPTV",
    description:
      "Modern in-room entertainment solutions designed to deliver a better guest television experience.",
    href: "/services/hotel-iptv",
  },
  {
    icon: ShieldCheck,
    title: "Managed IT",
    description:
      "Proactive IT monitoring, maintenance and technical support for hospitality businesses.",
    href: "/services/managed-it",
  },
];

const values = [
  {
    title: "Reliability",
    description:
      "Hospitality technology needs to work when guests and hotel teams need it. We design with reliability and continuity in mind.",
  },
  {
    title: "Practical solutions",
    description:
      "We focus on technology that solves real operational problems rather than adding unnecessary complexity.",
  },
  {
    title: "Guest experience",
    description:
      "From fast Wi-Fi to seamless in-room entertainment, we understand that technology is part of the modern guest experience.",
  },
  {
    title: "Long-term support",
    description:
      "Our relationship with a hotel does not end when an installation is complete. We provide ongoing support and technology management.",
  },
];

const industries = [
  "Hotels",
  "Resorts",
  "Serviced Apartments",
  "Hospitality Groups",
  "Guest Houses",
  "Short-Stay Properties",
];

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hotevance Limited",
    url: SITE_URL,
    description:
      "Hotevance provides hotel technology, networking, connectivity, IPTV and managed IT solutions for hospitality businesses.",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    knowsAbout: [
      "Hotel Wi-Fi",
      "Hospitality technology",
      "Fiber networking",
      "GPON",
      "Hotel IPTV",
      "Managed IT",
      "Hotel networking",
    ],
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
        name: "About",
        item: `${SITE_URL}/about`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#0F1020]">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#58AEBC]/20 blur-3xl" />

          <div className="absolute -bottom-48 left-1/4 h-[400px] w-[400px] rounded-full bg-[#58AEBC]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#58AEBC]/30 bg-[#58AEBC]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#7bc5d0]">
                About Hotevance
              </div>

              <h1 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Hotel technology built for better hospitality.
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                Hotevance helps hotels and hospitality businesses build reliable
                technology infrastructure that improves connectivity, operations
                and the guest experience.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#58AEBC] px-6 py-3.5 text-sm font-semibold text-[#0F1020] transition hover:bg-white"
                >
                  Explore our services
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to Hotevance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Who we are
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Technology that works behind the scenes.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-slate-600">
                <p>
                  Hotevance is a hospitality technology company focused on
                  helping hotels create reliable, connected and
                  technology-enabled properties.
                </p>

                <p>
                  We understand that hotel technology has a direct impact on
                  guest satisfaction and day-to-day hotel operations. A poor
                  Wi-Fi connection, unreliable network or outdated entertainment
                  system can quickly become a guest experience problem.
                </p>

                <p>
                  Our approach is to understand the property first, identify its
                  technology requirements and then implement solutions that are
                  practical, scalable and appropriate for the hotel's
                  environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE DO
        ====================================================== */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                What we do
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Hospitality technology from infrastructure to support.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                We provide the technology infrastructure and support hotels need
                to deliver reliable digital experiences.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#3d8996]">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
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

        {/* =====================================================
            WHY HOTE­VANCE
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Our approach
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  We design technology around the way hotels actually operate.
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Hospitality environments have different requirements from
                  conventional business networks. Guest rooms, reception areas,
                  conference spaces, restaurants and operational teams all
                  depend on technology in different ways.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Hotevance takes these requirements into account when designing
                  and implementing hotel technology solutions.
                </p>

                <Link
                  href="/case-studies"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]"
                >
                  See our case studies
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="rounded-3xl bg-[#0F1020] p-8 sm:p-10">
                <div className="grid gap-7">
                  {[
                    "Understand the property's requirements",
                    "Assess the existing infrastructure",
                    "Design the appropriate solution",
                    "Implement and configure the technology",
                    "Test and optimize the environment",
                    "Provide ongoing support when required",
                  ].map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#58AEBC]/15 text-xs font-bold text-[#7bc5d0]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="pt-1 text-sm leading-6 text-white/70">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUES
        ====================================================== */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                What matters to us
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                The principles behind our work.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-[#58AEBC]"
                    />

                    <div>
                      <h3 className="text-lg font-bold text-slate-950">
                        {value.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            INDUSTRIES
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Hospitality focused
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Technology for connected hospitality businesses.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Our solutions can support different types of hospitality
                  properties and their unique technology requirements.
                </p>

                <Link
                  href="/industries"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]"
                >
                  Explore industries
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex min-h-[90px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 text-center text-sm font-semibold text-slate-700"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
