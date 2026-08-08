import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Network,
  ShieldCheck,
  Tv,
  Wifi,
} from "lucide-react";

import {
  getLocationBySlug,
  getAllLocationSlugs,
} from "../../../../data/locationsData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/* =========================================================
   STATIC PARAMS
========================================================= */

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug,
  }));
}

/* =========================================================
   DYNAMIC SEO METADATA
========================================================= */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | Hotevance",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${SITE_URL}/locations/${location.slug}`;

  return {
    title: location.metaTitle,

    description: location.metaDescription,

    keywords: [
      `hotel technology ${location.city}`,
      `hotel Wi-Fi ${location.city}`,
      `hotel IT support ${location.city}`,
      `hotel networking ${location.city}`,
      `hotel IPTV ${location.city}`,
      `hospitality technology ${location.city}`,
      `hotel technology ${location.state}`,
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: canonicalUrl,
      siteName: "Hotevance",
      type: "website",
      locale: "en_NG",
      images: location.image
        ? [
            {
              url: `${SITE_URL}${location.image}`,
              width: 1200,
              height: 630,
              alt: `Hotevance hotel technology solutions in ${location.city}`,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: location.image ? [`${SITE_URL}${location.image}`] : undefined,
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
}

/* =========================================================
   SERVICE ICONS
========================================================= */

const serviceIcons = [
  Wifi,
  Network,
  Tv,
  ShieldCheck,
  Building2,
  Network,
  Wifi,
  ShieldCheck,
];

/* =========================================================
   PAGE
========================================================= */

export default async function LocationPage({ params }) {
  const { slug } = await params;

  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/locations/${location.slug}`;

  /* =======================================================
     RELATED LOCATIONS
  ======================================================== */

  const relatedLocations = getAllLocationSlugs()
    .filter((locationSlug) => locationSlug !== location.slug)
    .map((locationSlug) => getLocationBySlug(locationSlug))
    .filter(Boolean)
    .slice(0, 3);

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================== */

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
        name: "Locations",
        item: `${SITE_URL}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.city,
        item: canonicalUrl,
      },
    ],
  };

  /* =======================================================
     LOCAL BUSINESS / PROFESSIONAL SERVICE SCHEMA
  ======================================================== */

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: `Hotevance - Hotel Technology Solutions in ${location.city}`,

    url: canonicalUrl,

    description: location.metaDescription,

    provider: {
      "@type": "Organization",
      name: "Hotevance Limited",
      url: SITE_URL,
    },

    areaServed: {
      "@type": "City",
      name: location.city,

      containedInPlace: {
        "@type": "Country",
        name: "Nigeria",
      },
    },

    serviceType: [
      "Hotel Wi-Fi",
      "Hotel Networking",
      "Fiber Networking",
      "GPON",
      "Hotel IPTV",
      "PMS Integration",
      "Managed IT",
    ],
  };

  /* =======================================================
     FAQ SCHEMA
  ======================================================== */

  const faqSchema =
    location.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",

          mainEntity: location.faqs.map((faq) => ({
            "@type": "Question",

            name: faq.question,

            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#0F1020]">
          {/* Decorative glow */}
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#58AEBC]/20 blur-3xl" />

          <div className="absolute -bottom-48 left-1/4 h-[400px] w-[400px] rounded-full bg-[#58AEBC]/10 blur-3xl" />

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

                <li>
                  <Link
                    href="/locations"
                    className="transition hover:text-white"
                  >
                    Locations
                  </Link>
                </li>

                <li aria-hidden="true">/</li>

                <li className="text-white/70">{location.city}</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#58AEBC]/30 bg-[#58AEBC]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#7bc5d0]">
                <MapPin size={14} />
                {location.city}, {location.state}
              </div>

              <h1 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                {location.heroTitle}
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                {location.heroDescription}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#58AEBC] px-6 py-3.5 text-sm font-semibold text-[#0F1020] transition hover:bg-white"
                >
                  Discuss your project
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/hotel-wifi-audit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Get a Free Wi-Fi Audit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LOCATION INTRO
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Hotel technology in {location.city}
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {location.introTitle}
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-slate-600">
                {location.intro?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                Our services
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Hotel technology services in {location.city}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Hotevance provides hospitality-focused technology solutions that
                can be adapted to the requirements of properties in{" "}
                {location.city}.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {location.services?.map((service, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];

                return (
                  <div
                    key={service}
                    className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#3d8996]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {service}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Hospitality-focused technology designed to improve
                      reliability, connectivity and operational performance.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMON CHALLENGES
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Hotel IT challenges
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Technology problems can quickly become guest experience
                  problems.
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Hotel guests expect reliable digital services. When the
                  underlying infrastructure is poorly designed or difficult to
                  manage, connectivity problems can affect both guests and hotel
                  staff.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Hotevance helps hospitality businesses identify infrastructure
                  issues and implement practical technology improvements.
                </p>
              </div>

              <div className="rounded-3xl bg-[#0F1020] p-8 sm:p-10">
                <h3 className="text-xl font-bold text-white">
                  Common challenges in {location.city}
                </h3>

                <div className="mt-7 space-y-4">
                  {location.challenges?.map((challenge) => (
                    <div key={challenge} className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-[#58AEBC]"
                      />

                      <span className="text-sm leading-6 text-white/65">
                        {challenge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROPERTY TYPES
        ====================================================== */}

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Hospitality
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Technology for different types of hospitality properties.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Hotevance solutions can be adapted to different property
                  sizes, layouts and operational requirements.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {location.industries?.map((industry) => (
                  <div
                    key={industry}
                    className="flex min-h-[90px] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-center text-sm font-semibold text-slate-700"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT APPROACH
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                Our approach
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Technology designed around your property.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Every hotel has different requirements. Hotevance focuses on
                understanding the property before recommending a technology
                solution.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Assess",
                  description:
                    "Understand the property's layout, infrastructure, guest requirements and operational needs.",
                },
                {
                  number: "02",
                  title: "Design",
                  description:
                    "Develop a practical technology architecture based on the property's requirements.",
                },
                {
                  number: "03",
                  title: "Implement",
                  description:
                    "Deploy, configure, test and optimize the technology environment.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <span className="text-sm font-bold text-[#58AEBC]">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        {location.faqs?.length > 0 && (
          <section className="bg-slate-50">
            <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
              <div className="text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Frequently asked questions
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Hotel technology in {location.city}
                </h2>
              </div>

              <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6 sm:px-8">
                {location.faqs.map((faq, index) => (
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
        )}

        {/* =====================================================
            RELATED LOCATIONS
        ====================================================== */}

        {relatedLocations.length > 0 && (
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                    Other locations
                  </span>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                    Explore Hotevance locations
                  </h2>
                </div>

                <Link
                  href="/locations"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]"
                >
                  View all locations
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {relatedLocations.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/locations/${related.slug}`}
                    className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#3d8996]">
                      <MapPin size={20} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-950">
                      Hotel Technology in {related.city}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {related.shortDescription}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]">
                      Explore location
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
