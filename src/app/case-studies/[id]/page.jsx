import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Network,
} from "lucide-react";

import { getCaseStudy, getCaseStudySlugs } from "../../../data/caseStudies";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hotevance.com";

export const dynamicParams = true;

export async function generateStaticParams() {
  return getCaseStudySlugs().map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const study = getCaseStudy(id);

  if (!study) {
    return {
      title: "Case Study Not Found | Hotevance",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: study.metaTitle,
    description: study.metaDescription,

    alternates: {
      canonical: `${SITE_URL}/case-studies/${study.id}`,
    },

    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url: `${SITE_URL}/case-studies/${study.id}`,
      siteName: "Hotevance",
      type: "article",

      ...(study.image && {
        images: [
          {
            url: `${SITE_URL}${study.image}`,
            width: 1200,
            height: 630,
            alt: study.alt,
          },
        ],
      }),
    },

    twitter: {
      card: "summary_large_image",
      title: study.metaTitle,
      description: study.metaDescription,

      ...(study.image && {
        images: [`${SITE_URL}${study.image}`],
      }),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { id } = await params;

  const study = getCaseStudy(id);

  if (!study) {
    notFound();
  }

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
        name: "Case Studies",
        item: `${SITE_URL}/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: `${SITE_URL}/case-studies/${study.id}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.metaDescription,
    url: `${SITE_URL}/case-studies/${study.id}`,

    author: {
      "@type": "Organization",
      name: "Hotevance Limited",
      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",
      name: "Hotevance Limited",
      url: SITE_URL,
    },

    about: {
      "@type": "Thing",
      name: study.category,
    },

    ...(study.image && {
      image: [`${SITE_URL}${study.image}`],
    }),
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: study.title,
    description: study.metaDescription,

    creator: {
      "@type": "Organization",
      name: "Hotevance Limited",
      url: SITE_URL,
    },

    locationCreated: {
      "@type": "Place",
      name: study.location,
    },
  };

  return (
    <>
      {/* JSON-LD */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />

      <main className="bg-white">
        {/* =====================================================
            BREADCRUMB
        ====================================================== */}

        <div className="border-b border-slate-100 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex min-h-[58px] items-center gap-2 overflow-hidden text-sm"
            >
              <Link
                href="/"
                className="shrink-0 text-slate-400 transition hover:text-[#58AEBC]"
              >
                Home
              </Link>

              <ChevronRight size={14} className="shrink-0 text-slate-300" />

              <Link
                href="/case-studies"
                className="shrink-0 text-slate-400 transition hover:text-[#58AEBC]"
              >
                Case Studies
              </Link>

              <ChevronRight size={14} className="shrink-0 text-slate-300" />

              <span className="truncate font-medium text-slate-700">
                {study.title}
              </span>
            </nav>
          </div>
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative isolate overflow-hidden bg-[#0F1020]">
          {/* Background Glow */}

          <div className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-[#58AEBC]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-[#58AEBC]/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
            <Link
              href="/case-studies"
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition hover:text-[#7bc5d0]"
            >
              <ArrowLeft size={15} />
              Back to case studies
            </Link>

            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
              {/* Content */}

              <div>
                <span className="inline-flex rounded-full border border-[#58AEBC]/30 bg-[#58AEBC]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7bc5d0]">
                  {study.category}
                </span>

                <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  {study.title}
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                  {study.heroDescription}
                </p>

                {/* Project Details */}

                <div className="mt-9 grid gap-5 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#58AEBC]/10">
                      <Building2 size={16} className="text-[#58AEBC]" />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/30">
                        Property
                      </p>

                      <p className="mt-1 text-sm text-white/70">
                        {study.property}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#58AEBC]/10">
                      <MapPin size={16} className="text-[#58AEBC]" />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/30">
                        Location
                      </p>

                      <p className="mt-1 text-sm text-white/70">
                        {study.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#58AEBC]/10">
                      <CalendarDays size={16} className="text-[#58AEBC]" />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/30">
                        Year
                      </p>

                      <p className="mt-1 text-sm text-white/70">{study.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}

              <div className="relative">
                <div className="absolute -inset-3 rounded-[30px] bg-[#58AEBC]/10 blur-2xl" />

                <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-2xl">
                  {study.image ? (
                    <img
                      src={study.image}
                      alt={study.alt}
                      className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Network
                        size={72}
                        strokeWidth={1}
                        className="text-[#58AEBC]"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            METRICS
        ====================================================== */}

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="px-6 py-9 text-center">
                  <div className="text-3xl font-bold tracking-tight text-slate-950">
                    {metric.value}
                  </div>

                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CHALLENGE
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#58AEBC]">
                  Project overview
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  The challenge
                </h2>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#58AEBC]" />
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  {study.excerpt}
                </p>

                <ul className="mt-9 space-y-4">
                  {study.challenge.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#58AEBC]/10">
                        <CheckCircle2 size={15} className="text-[#58AEBC]" />
                      </span>

                      <span className="text-sm leading-7 text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SOLUTION
        ====================================================== */}

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#58AEBC]">
                  Our solution
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  A solution designed around the property.
                </h2>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#58AEBC]" />

                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                  Hotevance first assessed the property's requirements and
                  existing infrastructure before designing and implementing the
                  appropriate technology solution.
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                <ol className="space-y-7">
                  {study.solution.map((item, index) => (
                    <li key={item} className="flex gap-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-xs font-bold text-[#3d8996]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="pt-1 text-sm leading-7 text-slate-600">
                        {item}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#58AEBC]">
              Technology
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technology implemented
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
              The technology stack selected for this project was designed to
              provide reliable performance, scalability, and long-term
              operational value.
            </p>

            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
              {study.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-[#58AEBC]/40 hover:bg-[#58AEBC]/5"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            RESULTS
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#0F1020]">
          <div className="pointer-events-none absolute -right-40 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#58AEBC]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#58AEBC]">
                  Project outcomes
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Results that matter.
                </h2>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#58AEBC]" />

                <p className="mt-7 text-base leading-8 text-white/55">
                  The project focused on creating a more reliable, scalable and
                  manageable technology environment for the property.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {study.results.map((result) => (
                  <div
                    key={result}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#58AEBC]/30 hover:bg-[#58AEBC]/5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#58AEBC]/10">
                      <CheckCircle2 size={17} className="text-[#58AEBC]" />
                    </span>

                    <span className="text-sm leading-6 text-white/70">
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RELATED SERVICES
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#58AEBC]">
                Related services
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Explore the services behind this project.
              </h2>

              <div className="mt-6 h-1 w-12 rounded-full bg-[#58AEBC]" />
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {study.services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="text-xl font-bold text-slate-950">
                      {service.title}
                    </h3>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 transition group-hover:bg-[#58AEBC]/10">
                      <ArrowRight
                        size={16}
                        className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#58AEBC]"
                      />
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]">
                    Explore service
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

        {/* =====================================================
            RELATED CASE STUDIES
        ====================================================== */}

        {study.relatedCaseStudies?.length > 0 && (
          <section className="bg-slate-50">
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#58AEBC]">
                    More work
                  </span>

                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    Related case studies
                  </h2>

                  <div className="mt-6 h-1 w-12 rounded-full bg-[#58AEBC]" />
                </div>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996] transition hover:text-[#58AEBC]"
                >
                  View all case studies
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {study.relatedCaseStudies.map((related) => (
                  <Link
                    key={related.href}
                    href={related.href}
                    className="group rounded-[24px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-xl"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#58AEBC]">
                      {related.category}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-slate-950">
                      {related.title}
                    </h3>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]">
                      Read case study
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
