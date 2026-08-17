import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Network,
  Headphones,
  ChevronRight,
} from "lucide-react";
import industries from "../../../data/industries";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found | Hotevance",
    };
  }

  const url = `https://hotevance.com/industries/${industry.slug}`;

  return {
    title: industry.seoTitle,

    description: industry.seoDescription,

    keywords: industry.keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: industry.seoTitle,
      description: industry.seoDescription,
      url,
      siteName: "Hotevance",
      type: "website",
      locale: "en_NG",
      images: [
        {
          url: `https://hotevance.com/images/industries/${industry.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${industry.title} technology solutions`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: industry.seoTitle,
      description: industry.seoDescription,
      images: [`https://hotevance.com/images/industries/${industry.slug}.jpg`],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;

  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;

  const url = `https://hotevance.com/industries/${industry.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: industry.seoTitle,
        description: industry.seoDescription,
        isPartOf: {
          "@type": "WebSite",
          name: "Hotevance",
          url: "https://hotevance.com",
        },
      },

      {
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
          {
            "@type": "ListItem",
            position: 3,
            name: industry.title,
            item: url,
          },
        ],
      },

      {
        "@type": "Service",
        name: `${industry.title} Technology Solutions`,
        description: industry.description,
        provider: {
          "@type": "Organization",
          name: "Hotevance",
          url: "https://hotevance.com",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Nigeria",
          },
          {
            "@type": "Place",
            name: "Africa",
          },
        ],
        serviceType: industry.services,
      },

      {
        "@type": "FAQPage",
        mainEntity: industry.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="bg-white text-slate-950">
        {/* Breadcrumbs */}
        <div className="border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-slate-500"
            >
              <Link href="/" className="transition hover:text-slate-950">
                Home
              </Link>

              <ChevronRight size={15} />

              <Link
                href="/industries"
                className="transition hover:text-slate-950"
              >
                Industries
              </Link>

              <ChevronRight size={15} />

              <span className="font-medium text-slate-900">
                {industry.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_40%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                <Icon size={18} />
                {industry.title}
              </div>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {industry.title} Technology Solutions
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                {industry.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/hotel-wifi-audit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Request a Technology Audit
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
                  Technology built around your operation
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Technology infrastructure designed for{" "}
                  {industry.title.toLowerCase()}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {industry.intro}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Network className="mb-4 text-blue-600" size={30} />
                    <h3 className="font-semibold">Connected Infrastructure</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Reliable networking designed around your property.
                    </p>
                  </div>

                  <div>
                    <ShieldCheck className="mb-4 text-blue-600" size={30} />
                    <h3 className="font-semibold">Secure Systems</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Infrastructure designed with security and reliability in
                      mind.
                    </p>
                  </div>

                  <div>
                    <Headphones className="mb-4 text-blue-600" size={30} />
                    <h3 className="font-semibold">Technical Support</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Ongoing assistance when your technology needs attention.
                    </p>
                  </div>

                  <div>
                    <CheckCircle2 className="mb-4 text-blue-600" size={30} />
                    <h3 className="font-semibold">Scalable Solutions</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Infrastructure that can evolve with your property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our solutions
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Technology services for {industry.title.toLowerCase()}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Build a more reliable technology environment with services
                designed around the needs of your property.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industry.services.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <CheckCircle2 className="text-blue-600" size={24} />

                  <h3 className="mt-5 text-lg font-semibold">{service}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Professional {service.toLowerCase()} infrastructure designed
                    for reliable day-to-day operations.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  Common challenges
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Technology problems can affect the entire operation
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Unreliable infrastructure can affect guest satisfaction, staff
                  productivity, security, and business continuity.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {industry.challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <div className="flex gap-3">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                      <p className="font-medium text-slate-800">{challenge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Why Hotevance
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built around reliability, performance and operational needs
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industry.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <CheckCircle2 className="text-blue-400" size={24} />

                  <p className="mt-5 leading-7 text-slate-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                From assessment to ongoing support
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We focus on understanding your requirements before recommending
                or deploying technology.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {industry.process.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-slate-200 p-7"
                >
                  <span className="text-sm font-bold text-blue-600">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Frequently asked questions
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {industry.title} technology FAQs
              </h2>
            </div>

            <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {industry.faqs.map((faq) => (
                <details key={faq.question} className="group p-6">
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">
                    <div className="flex items-center justify-between gap-6">
                      <span>{faq.question}</span>

                      <span className="text-xl text-blue-600 transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <p className="mt-4 max-w-3xl leading-7 text-slate-600">
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
