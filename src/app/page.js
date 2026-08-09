import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Wifi,
  Network,
  Tv,
  Phone,
  ShieldCheck,
  Settings2,
  Headphones,
  Building2,
  Gauge,
  Cable,
  Hotel,
} from "lucide-react";

export const metadata = {
  title: "Hotel Technology Solutions in Nigeria & Africa | Hotevance",
  description:
    "Hotevance provides hotel technology solutions including Wi-Fi, GPON fiber, IPTV, VoIP, PMS integration, security and managed IT for hotels across Nigeria and Africa.",
  keywords: [
    "hotel technology solutions Nigeria",
    "hotel IT solutions Nigeria",
    "hotel Wi-Fi solutions",
    "hospitality technology Nigeria",
    "hotel networking company Nigeria",
    "hotel IPTV",
    "hotel GPON",
    "hotel PMS integration",
    "managed hotel IT",
  ],
  alternates: {
    canonical: "https://hotevance.com/",
  },
  openGraph: {
    title: "Hotel Technology Solutions in Nigeria & Africa | Hotevance",
    description:
      "Reliable hotel Wi-Fi, fiber, IPTV, VoIP, PMS integration, security and managed IT solutions designed for modern hospitality.",
    url: "https://hotevance.com/",
    siteName: "Hotevance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Technology Solutions in Nigeria & Africa | Hotevance",
    description:
      "Technology infrastructure designed for hotels, resorts and hospitality businesses.",
  },
};

const solutions = [
  {
    icon: Wifi,
    title: "Hotel Wi-Fi & Networking",
    description:
      "Reliable, high-performance Wi-Fi designed for guest rooms, public spaces, conference areas and hotel operations.",
    href: "/services/hotel-wifi",
  },
  {
    icon: Cable,
    title: "GPON & Fiber Infrastructure",
    description:
      "Scalable fiber infrastructure that provides dependable connectivity across guest rooms and hotel facilities.",
    href: "/services/gpon-fiber",
  },
  {
    icon: Tv,
    title: "Hotel IPTV",
    description:
      "Modern IPTV and guest entertainment systems that create a better in-room experience.",
    href: "/services/hotel-iptv",
  },
  {
    icon: Phone,
    title: "Hotel VoIP",
    description:
      "Reliable IP telephony systems connecting guests, reception, departments and hotel operations.",
    href: "/services/hotel-voip",
  },
  {
    icon: Network,
    title: "PMS Integration",
    description:
      "Connect hotel technology systems with your property management platform for a more seamless operation.",
    href: "/services/pms-integration",
  },
  {
    icon: ShieldCheck,
    title: "Security & Infrastructure",
    description:
      "Secure technology infrastructure designed to protect hotel operations, systems and connected devices.",
    href: "/services/hotel-security",
  },
  {
    icon: Settings2,
    title: "Hotel Automation",
    description:
      "Smart technology solutions that improve operational efficiency and the guest experience.",
    href: "/services/hotel-automation",
  },
  {
    icon: Headphones,
    title: "Managed Hotel IT",
    description:
      "Ongoing monitoring, maintenance and technical support to keep your hotel technology running reliably.",
    href: "/services/managed-hotel-it",
  },
];

const benefits = [
  "Technology designed specifically for hospitality",
  "Scalable infrastructure for new and existing hotels",
  "Reliable connectivity for guests and hotel operations",
  "Integrated systems instead of disconnected technology",
  "Professional deployment and technical support",
  "Solutions designed around your property's requirements",
];

const problems = [
  {
    icon: Wifi,
    title: "Slow or unreliable Wi-Fi",
    description:
      "Poor connectivity can lead to guest complaints, bad reviews and unnecessary support requests.",
  },
  {
    icon: Gauge,
    title: "Unstable hotel infrastructure",
    description:
      "Disconnected systems and outdated infrastructure make hotel operations harder to manage.",
  },
  {
    icon: Cable,
    title: "Poor network coverage",
    description:
      "Guest rooms, corridors, restaurants and meeting spaces require carefully planned connectivity.",
  },
  {
    icon: Hotel,
    title: "Technology that does not scale",
    description:
      "Your infrastructure should be able to support new rooms, services and connected hotel systems.",
  },
];

const faqs = [
  {
    question: "What hotel technology services does Hotevance provide?",
    answer:
      "Hotevance provides hotel Wi-Fi and networking, GPON and fiber infrastructure, IPTV, VoIP, PMS integration, security infrastructure, hotel automation and managed IT support.",
  },
  {
    question: "Does Hotevance work with existing hotels?",
    answer:
      "Yes. Hotevance can assess existing hotel infrastructure, identify performance and reliability issues, and recommend upgrades or improvements based on the property's requirements.",
  },
  {
    question: "Can Hotevance support new hotel developments?",
    answer:
      "Yes. Hotevance can help plan and deploy technology infrastructure for new hotel developments, including connectivity, fiber, Wi-Fi, IPTV, VoIP and integrated hotel systems.",
  },
  {
    question: "Where does Hotevance provide hotel technology services?",
    answer:
      "Hotevance provides hospitality technology solutions for hotels across Nigeria and supports projects across Africa.",
  },
  {
    question: "What is included in the free hotel technology audit?",
    answer:
      "The audit can identify potential issues across hotel connectivity, networking, infrastructure, coverage, system integration and technology performance, helping you understand where improvements may be needed.",
  },
];

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hotevance Limited",
    url: "https://hotevance.com",
    description:
      "Hospitality technology company providing hotel Wi-Fi, GPON, IPTV, VoIP, PMS integration, security, automation and managed IT solutions.",
    areaServed: [
      {
        "@type": "Country",
        name: "Nigeria",
      },
      {
        "@type": "Continent",
        name: "Africa",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hotevance",
    url: "https://hotevance.com",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="overflow-hidden">
        {/* HERO */}
        <section className="relative isolate min-h-[720px] overflow-hidden bg-[#0F1020]">
          {/* Background Video */}
          <video
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero/hotel-technology-poster.jpg"
            aria-hidden="true"
          >
            <source
              src="/videos/hotel-technology-hero.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 -z-10 bg-[#0F1020]/75" />

          {/* Gradient for readability */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0F1020] via-[#0F1020]/80 to-[#0F1020]/30" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#0F1020] to-transparent" />

          <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:px-8">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-[#8ed5df] backdrop-blur-md">
                <Hotel className="h-4 w-4" />
                Hospitality Technology Solutions
              </div>

              {/* H1 */}
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Hotel Technology Solutions Built for Better Guest Experiences
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                Hotevance designs and deploys reliable technology infrastructure
                for hotels across Nigeria and Africa — from high-performance
                Wi-Fi and GPON fiber to IPTV, VoIP, PMS integration and managed
                hotel IT.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/hotel-wifi-audit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#58AEBC] px-7 py-4 font-medium text-[#0F1020] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white hover:shadow-xl"
                >
                  Request a Free Hotel Technology Audit

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  Explore Our Solutions

                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              {/* Trust points */}
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  "Hospitality-focused",
                  "Scalable infrastructure",
                  "End-to-end support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#58AEBC]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="border-b border-black/5 bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                Technology for hospitality
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F1020] sm:text-4xl">
                Your hotel's technology should work as one system.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-600">
                Modern hotels depend on reliable technology at every stage of
                the guest journey. From the first Wi-Fi connection to
                entertainment, communication and hotel operations, Hotevance
                helps you build infrastructure that is reliable, scalable and
                easier to manage.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                Hotel technology solutions
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F1020] sm:text-5xl">
                Everything your hotel needs to stay connected
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                From network infrastructure to guest entertainment and
                integrated systems, we design technology around the way your
                hotel operates.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {solutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <Link
                    key={solution.title}
                    href={solution.href}
                    className="group rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#58AEBC]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-[#0F1020]">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {solution.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#58AEBC]">
                      Explore solution
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY HOTEvance */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                Why Hotevance
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F1020] sm:text-5xl">
                Technology designed around your hotel
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Your hotel has different room layouts, guest expectations,
                operational requirements and technology systems. We don't
                believe in one-size-fits-all infrastructure.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                We assess your requirements, design the right architecture and
                deploy technology that supports both guest experience and
                hotel operations.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-medium text-[#0F1020]"
              >
                Learn more about Hotevance
                <ArrowRight className="h-5 w-5 text-[#58AEBC]" />
              </Link>
            </div>

            <div className="rounded-3xl bg-[#0F1020] p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-white">
                Built for hospitality
              </h3>

              <div className="mt-8 space-y-5">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#58AEBC]" />

                    <p className="text-white/75">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="bg-[#f7f8f9] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                Common hotel technology problems
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F1020] sm:text-5xl">
                Technology problems become guest problems
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Unreliable infrastructure can affect guest satisfaction,
                staff productivity and your hotel's reputation.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {problems.map((problem) => {
                const Icon = problem.icon;

                return (
                  <div
                    key={problem.title}
                    className="rounded-2xl bg-white p-7 shadow-sm"
                  >
                    <Icon className="h-7 w-7 text-[#58AEBC]" />

                    <h3 className="mt-6 text-lg font-semibold text-[#0F1020]">
                      {problem.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {problem.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                Our process
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F1020] sm:text-5xl">
                From assessment to reliable hotel infrastructure
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Assess",
                  text: "We understand your hotel's current infrastructure, requirements and challenges.",
                },
                {
                  number: "02",
                  title: "Design",
                  text: "We develop a technology architecture designed around your property's needs.",
                },
                {
                  number: "03",
                  title: "Deploy",
                  text: "Our team implements and integrates the required technology systems.",
                },
                {
                  number: "04",
                  title: "Support",
                  text: "We help keep your technology reliable through ongoing monitoring and support.",
                },
              ].map((step) => (
                <div key={step.number}>
                  <span className="text-sm font-semibold text-[#58AEBC]">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold text-[#0F1020]">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="bg-[#0F1020] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                  Case studies
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  Technology built for real hospitality environments
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/65">
                  Explore selected hotel technology projects and see how
                  infrastructure can be designed around different property
                  requirements.
                </p>
              </div>

              <Link
                href="/case-studies"
                className="inline-flex shrink-0 items-center gap-2 font-medium text-white"
              >
                View case studies
                <ArrowRight className="h-5 w-5 text-[#58AEBC]" />
              </Link>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  location: "Abuja",
                  title: "New Hotel Development",
                  text: "Technology infrastructure designed for a new hospitality development.",
                },
                {
                  location: "Lagos",
                  title: "Airport Hotel",
                  text: "Connectivity and technology solutions for a high-demand hotel environment.",
                },
                {
                  location: "Lagos",
                  title: "Serviced Apartments",
                  text: "Reliable technology infrastructure designed for connected guest accommodation.",
                },
              ].map((project) => (
                <Link
                  key={project.title}
                  href="/case-studies"
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:bg-white/[0.07]"
                >
                  <span className="text-sm text-[#58AEBC]">
                    {project.location}
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">
                    {project.text}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white">
                    View project
                    <ArrowRight className="h-4 w-4 text-[#58AEBC] transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AUDIT CTA */}
        <section className="bg-[#58AEBC] py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F1020]/70">
              Free hotel technology audit
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0F1020] sm:text-5xl">
              Is your hotel's technology ready for your guests?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#0F1020]/70">
              Identify connectivity, infrastructure and technology gaps before
              they become guest complaints or operational problems.
            </p>

            <Link
              href="/hotel-wifi-audit"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0F1020] px-7 py-4 font-medium text-white transition hover:bg-white hover:text-[#0F1020]"
            >
              Request Your Free Hotel Technology Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58AEBC]">
                Frequently asked questions
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F1020] sm:text-5xl">
                Hotel technology questions
              </h2>
            </div>

            <div className="mt-14 divide-y divide-black/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-[#0F1020]">
                    {faq.question}

                    <span className="text-2xl font-light text-[#58AEBC] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-black/5 bg-gray-50 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-[#0F1020] sm:text-5xl">
              Build a better technology foundation for your hotel
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Whether you're upgrading an existing property or planning a new
              hotel, Hotevance can help you design the technology
              infrastructure behind a better guest experience.
            </p>

            <Link
              href="/hotel-wifi-audit"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0F1020] px-7 py-4 font-medium text-white transition hover:bg-[#58AEBC] hover:text-[#0F1020]"
            >
              Request a Free Hotel Technology Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}