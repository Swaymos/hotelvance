import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Wifi,
} from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Replace these with Hotevance's actual contact details.
const CONTACT = {
  email: "wecare@hotevance.com",
  phone: "+2349085444555",
  whatsapp: "+2349085444555",
  address: "Hotevance Limited Port Harcourt, Rivers State, Nigeria",
};

export const metadata = {
  title: "Contact Hotevance | Hotel Technology Solutions in Nigeria",

  description:
    "Contact Hotevance for hotel Wi-Fi, fiber and GPON, IPTV, PMS integration and managed IT solutions for hotels and hospitality businesses in Nigeria.",

  keywords: [
    "contact Hotevance",
    "hotel technology company Nigeria",
    "hotel IT support Nigeria",
    "hotel Wi-Fi company Nigeria",
    "hospitality technology Nigeria",
    "hotel networking Nigeria",
    "hotel IPTV Nigeria",
    "managed IT hotels Nigeria",
  ],

  alternates: {
    canonical: `${SITE_URL}/contact`,
  },

  openGraph: {
    title: "Contact Hotevance | Hotel Technology Solutions in Nigeria",
    description:
      "Talk to Hotevance about hotel Wi-Fi, networking, IPTV, fiber infrastructure and managed IT solutions.",
    url: `${SITE_URL}/contact`,
    siteName: "Hotevance",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Hotevance",
    description:
      "Get in touch with Hotevance for hospitality technology and hotel IT solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    title: "Hotel Wi-Fi",
    description:
      "Reliable guest and staff Wi-Fi designed for hotels and hospitality environments.",
    href: "/services/hotel-wifi",
  },
  {
    title: "Fiber & GPON",
    description:
      "Scalable fiber infrastructure for high-capacity hotel networks.",
    href: "/services/gpon-fiber",
  },
  {
    title: "Hotel IPTV",
    description: "Modern in-room entertainment and hospitality TV solutions.",
    href: "/services/hotel-iptv",
  },
  {
    title: "Managed IT",
    description:
      "Ongoing monitoring, maintenance and technical support for hotel technology.",
    href: "/services/managed-it",
  },
];

const reasons = [
  "Hotel Wi-Fi assessments and network upgrades",
  "Fiber and GPON infrastructure",
  "Hotel IPTV and in-room entertainment",
  "PMS and hotel technology integration",
  "Managed IT and technical support",
  "Hospitality network design and optimization",
];

export default function ContactPage() {
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
        name: "Contact",
        item: `${SITE_URL}/contact`,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Hotevance Limited",
    url: SITE_URL,
    description:
      "Hospitality technology company providing hotel Wi-Fi, fiber networking, IPTV, PMS integration and managed IT solutions.",
    email: `mailto:${CONTACT.email}`,
    telephone: CONTACT.phone,

    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },

    serviceType: [
      "Hotel Wi-Fi Solutions",
      "Hotel Networking",
      "Fiber and GPON Infrastructure",
      "Hotel IPTV",
      "PMS Integration",
      "Managed IT Services",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What hotel technology services does Hotevance provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hotevance provides hotel Wi-Fi, fiber and GPON networking, IPTV, PMS integration and managed IT solutions for hotels and hospitality businesses.",
        },
      },
      {
        "@type": "Question",
        name: "Does Hotevance work with hotels in Nigeria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Hotevance provides hospitality technology solutions for hotels and hospitality businesses across Nigeria.",
        },
      },
      {
        "@type": "Question",
        name: "Can Hotevance assess an existing hotel Wi-Fi network?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Hotevance can assess hotel Wi-Fi infrastructure and identify opportunities to improve coverage, reliability, capacity and overall network performance.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Hotevance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Hotevance directly by email, phone or WhatsApp using the contact options provided on the Hotevance contact page.",
        },
      },
    ],
  };

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
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
                Contact Hotevance
              </div>

              <h1 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Let's improve your hotel's technology.
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                Talk to Hotevance about hotel Wi-Fi, networking, fiber, IPTV,
                PMS integration or managed IT support. Our team can help you
                identify the right technology solution for your property.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#58AEBC] px-6 py-3.5 text-sm font-semibold text-[#0F1020] transition hover:bg-white"
                >
                  <Mail size={17} />
                  Email Hotevance
                </a>

                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle size={17} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT OPTIONS
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-5 md:grid-cols-3">
              {/* Email */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#3d8996]">
                  <Mail size={22} />
                </div>

                <h2 className="mt-6 text-lg font-bold text-slate-950">
                  Email us
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Send us your hotel technology requirements.
                </p>

                <span className="mt-5 block break-all text-sm font-semibold text-[#3d8996]">
                  {CONTACT.email}
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#3d8996]">
                  <Phone size={22} />
                </div>

                <h2 className="mt-6 text-lg font-bold text-slate-950">
                  Call us
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Speak directly with our team.
                </p>

                <span className="mt-5 block text-sm font-semibold text-[#3d8996]">
                  {CONTACT.phone}
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#3d8996]">
                  <MessageCircle size={22} />
                </div>

                <h2 className="mt-6 text-lg font-bold text-slate-950">
                  WhatsApp
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Start a conversation with Hotevance.
                </p>

                <span className="mt-5 block text-sm font-semibold text-[#3d8996]">
                  Chat with our team
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN CONTACT CONTENT
        ====================================================== */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
              {/* Left */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  How we can help
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Have a hotel technology project?
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                  Whether you are opening a new property, upgrading existing
                  infrastructure or looking for ongoing IT support, tell us what
                  you are working on and we'll help you determine the right next
                  step.
                </p>

                <div className="mt-8 space-y-4">
                  {reasons.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-[#58AEBC]"
                      />

                      <span className="text-sm leading-7 text-slate-600">
                        {reason}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="rounded-3xl bg-[#0F1020] p-7 sm:p-9">
                <h2 className="text-xl font-bold text-white">
                  Contact information
                </h2>

                <div className="mt-8 space-y-7">
                  <div className="flex gap-4">
                    <Mail size={20} className="mt-1 shrink-0 text-[#58AEBC]" />

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                        Email
                      </p>

                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="mt-2 block break-all text-sm font-medium text-white hover:text-[#7bc5d0]"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone size={20} className="mt-1 shrink-0 text-[#58AEBC]" />

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                        Phone
                      </p>

                      <a
                        href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                        className="mt-2 block text-sm font-medium text-white hover:text-[#7bc5d0]"
                      >
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin
                      size={20}
                      className="mt-1 shrink-0 text-[#58AEBC]"
                    />

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                        Service area
                      </p>

                      <p className="mt-2 text-sm font-medium text-white">
                        Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock3
                      size={20}
                      className="mt-1 shrink-0 text-[#58AEBC]"
                    />

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                        Response
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/70">
                        Contact us directly and our team will respond with the
                        appropriate next steps.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-9 border-t border-white/10 pt-7">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex items-center justify-between rounded-xl bg-[#58AEBC] px-5 py-4 text-sm font-semibold text-[#0F1020] transition hover:bg-white"
                  >
                    Start a conversation
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                Our services
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Hotel technology services
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Explore the technology solutions Hotevance provides for hotels
                and hospitality businesses.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-2xl border border-slate-200 p-6 transition hover:border-[#58AEBC]/40 hover:shadow-lg"
                >
                  <h3 className="font-bold text-slate-950">{service.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]">
                    Explore
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
            HOTEL WIFI AUDIT CTA
        ====================================================== */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
            <div className="relative overflow-hidden rounded-3xl bg-[#0F1020] px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#58AEBC]/15 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58AEBC]/10">
                    <Wifi size={23} className="text-[#58AEBC]" />
                  </div>

                  <h2 className="mt-6 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                    Not sure what your hotel needs?
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                    Start with a hotel Wi-Fi audit to identify connectivity,
                    coverage and network performance opportunities.
                  </p>
                </div>

                <Link
                  href="/hotel-wifi-audit"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#58AEBC] px-6 py-4 text-sm font-semibold text-[#0F1020] transition hover:bg-white"
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

        {/* =====================================================
            FAQ / SEO CONTENT
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                Frequently asked questions
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Contact Hotevance
              </h2>
            </div>

            <div className="mt-12 divide-y divide-slate-200">
              <details open className="group py-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-slate-950">
                  What hotel technology services does Hotevance provide?
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Hotevance provides hotel Wi-Fi, fiber and GPON networking,
                  IPTV, PMS integration and managed IT solutions for hotels and
                  hospitality businesses.
                </p>
              </details>

              <details className="group py-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-slate-950">
                  Does Hotevance work with hotels in Nigeria?
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Yes. Hotevance provides hospitality technology solutions for
                  hotels and hospitality businesses across Nigeria.
                </p>
              </details>

              <details className="group py-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-slate-950">
                  Can Hotevance assess an existing hotel Wi-Fi network?
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Yes. Hotevance can assess hotel Wi-Fi infrastructure and
                  identify opportunities to improve coverage, reliability,
                  capacity and overall network performance.
                </p>
              </details>

              <details className="group py-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-slate-950">
                  How can I contact Hotevance?
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  You can contact Hotevance directly by email, phone or WhatsApp
                  using the contact options provided on this page.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
