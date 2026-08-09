import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  Network,
  ShieldCheck,
  Tv,
  Wifi,
} from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// app/locations/page.jsx

export const metadata = {
  title: "Hotel Technology Solutions Across Nigeria | Hotevance",

  description:
    "Hotevance provides hotel Wi-Fi, fiber networking, IPTV, PMS integration, and managed IT solutions for hotels and hospitality businesses across Nigeria.",

  keywords: [
    "hotel technology Nigeria",
    "hotel IT solutions Nigeria",
    "hotel Wi-Fi Nigeria",
    "hotel networking Nigeria",
    "hotel IPTV Nigeria",
    "hospitality technology Nigeria",
    "hotel IT support Nigeria",
    "hotel technology Lagos",
    "hotel technology Abuja",
    "hotel technology Port Harcourt",
    "hotel technology Kano",
    "hotel technology Ibadan",
  ],

  alternates: {
    canonical: "/locations",
  },

  openGraph: {
    title: "Hotel Technology Solutions Across Nigeria | Hotevance",

    description:
      "Hotel Wi-Fi, networking, fiber, IPTV, and managed IT solutions for hospitality businesses across Nigeria.",

    url: "/locations",

    siteName: "Hotevance",

    images: [
      {
        url: "/images/Hotels.png",
        width: 1200,
        height: 630,
        alt: "Hotevance Hotel Technology Solutions Across Nigeria",
      },
    ],

    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Hotel Technology Solutions Across Nigeria | Hotevance",

    description:
      "Hotevance delivers hotel technology and managed IT solutions across Nigeria.",

    images: ["/images/Hotels.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const locations = [
  {
    city: "Lagos",
    description:
      "Hotel Wi-Fi, networking, IPTV and managed IT solutions for hotels and hospitality businesses in Lagos.",
    href: "/locations/lagos",
    popular: true,
  },
  {
    city: "Abuja",
    description:
      "Hospitality technology and hotel IT solutions for properties across Abuja and the Federal Capital Territory.",
    href: "/locations/abuja",
    popular: true,
  },
  {
    city: "Port Harcourt",
    description:
      "Reliable hotel connectivity, networking and technology infrastructure for hospitality properties in Port Harcourt.",
    href: "/locations/port-harcourt",
    popular: true,
  },
  {
    city: "Ibadan",
    description:
      "Hotel networking, Wi-Fi and technology solutions for hospitality businesses in Ibadan.",
    href: "/locations/ibadan",
    popular: false,
  },
  {
    city: "Kano",
    description:
      "Hotel Wi-Fi, IPTV, fiber networking and managed IT solutions for hospitality businesses in Kano.",
    href: "/locations/kano",
    popular: false,
  },
  {
    city: "Benin City",
    description:
      "Hospitality technology solutions for hotels and guest properties in Benin City.",
    href: "/locations/benin-city",
    popular: false,
  },
  {
    city: "Enugu",
    description:
      "Hotel connectivity, networking and managed technology solutions for hospitality businesses in Enugu.",
    href: "/locations/enugu",
    popular: false,
  },
  {
    city: "Kaduna",
    description:
      "Reliable hotel Wi-Fi, network infrastructure and IT solutions for hospitality businesses in Kaduna.",
    href: "/locations/kaduna",
    popular: false,
  },
];

const services = [
  {
    icon: Wifi,
    title: "Hotel Wi-Fi",
    description:
      "High-performance guest and staff Wi-Fi designed for hotels and hospitality environments.",
    href: "/services/hotel-wifi",
  },
  {
    icon: Network,
    title: "Fiber & GPON",
    description:
      "Scalable fiber and GPON infrastructure for reliable hotel connectivity.",
    href: "/services/gpon-fiber",
  },
  {
    icon: Tv,
    title: "Hotel IPTV",
    description:
      "Modern in-room entertainment and IPTV solutions for hospitality properties.",
    href: "/services/hotel-iptv",
  },
  {
    icon: ShieldCheck,
    title: "Managed IT",
    description:
      "Ongoing monitoring, maintenance and technical support for hotel technology.",
    href: "/services/managed-it",
  },
];

const industries = [
  "Hotels",
  "Resorts",
  "Serviced Apartments",
  "Guest Houses",
  "Hospitality Groups",
  "Short-Stay Properties",
];

const benefits = [
  "Hospitality-focused technology expertise",
  "Hotel Wi-Fi assessment and network optimization",
  "Scalable fiber and GPON infrastructure",
  "Hotel IPTV and in-room entertainment",
  "Managed IT and technical support",
  "Solutions designed around each property's requirements",
];

export default function LocationsPage() {
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
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hotevance Limited",
    url: SITE_URL,
    description:
      "Hotevance provides hotel technology, Wi-Fi, fiber networking, IPTV, PMS integration and managed IT solutions across Nigeria.",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    knowsAbout: [
      "Hotel Wi-Fi",
      "Hotel Networking",
      "Fiber Networking",
      "GPON",
      "Hotel IPTV",
      "PMS Integration",
      "Managed IT",
      "Hospitality Technology",
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hotevance Service Locations",
    itemListElement: locations.map((location, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: location.city,
      url: `${SITE_URL}${location.href}`,
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
          __html: JSON.stringify(itemListSchema),
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
                Hotevance Locations
              </div>

              <h1 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Hotel technology solutions across Nigeria.
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                Hotevance provides hotel Wi-Fi, networking, fiber, IPTV, PMS
                integration and managed IT solutions for hospitality businesses
                across Nigeria.
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Hotevance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Our service area
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Supporting connected hotels across Nigeria.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-slate-600">
                <p>
                  Hotels depend on reliable technology every day. Guests expect
                  fast Wi-Fi, hotel teams need dependable systems and properties
                  increasingly rely on connected infrastructure to operate
                  efficiently.
                </p>

                <p>
                  Hotevance works with hospitality businesses to design, deploy
                  and support technology infrastructure that meets these
                  requirements.
                </p>

                <p>
                  Our service coverage extends across major Nigerian cities and
                  can support hospitality projects in additional locations
                  depending on project requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LOCATIONS
        ====================================================== */}

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                Locations
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Find hotel technology services near you.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Explore Hotevance's hospitality technology solutions by
                location.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {locations.map((location) => (
                <Link
                  key={location.city}
                  href={location.href}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-xl"
                >
                  {location.popular && (
                    <span className="absolute right-5 top-5 rounded-full bg-[#58AEBC]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#3d8996]">
                      Popular
                    </span>
                  )}

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#3d8996]">
                    <MapPin size={21} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    Hotel Technology in {location.city}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {location.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]">
                    Explore {location.city}
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
            MAJOR SERVICE AREAS
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Nationwide capability
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Hotel IT solutions beyond the major cities.
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  While we highlight major service areas, Hotevance can also
                  support qualifying hospitality technology projects in other
                  parts of Nigeria.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  If your property is outside the locations listed above,
                  contact our team to discuss your project requirements and
                  deployment location.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]"
                >
                  Discuss your project
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="rounded-3xl bg-[#0F1020] p-8 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#58AEBC]/10">
                  <Building2 size={27} className="text-[#58AEBC]" />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  Hospitality-focused technology
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  We understand the specific technology requirements of hotels,
                  resorts, serviced apartments and other hospitality properties.
                </p>

                <div className="mt-8 space-y-4">
                  {benefits.slice(0, 5).map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-[#58AEBC]"
                      />

                      <span className="text-sm leading-6 text-white/65">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES BY LOCATION
        ====================================================== */}

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                Hotel technology
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Technology services available across our locations.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Our solutions can be tailored to the size, infrastructure and
                operational requirements of each hospitality property.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#58AEBC]/40 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58AEBC]/10 text-[#3d8996]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8996]">
                      View service
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
            INDUSTRIES
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                  Who we support
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Hospitality businesses across Nigeria.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Our technology solutions are designed for hospitality
                  environments where connectivity, reliability and guest
                  experience matter.
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

        {/* =====================================================
            LOCATION SEO CONTENT
        ====================================================== */}

        <section className="bg-slate-50">
          <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#58AEBC]">
                Hotel technology in Nigeria
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Building better connected hotels.
              </h2>
            </div>

            <div className="mt-10 space-y-6 text-base leading-8 text-slate-600">
              <p>
                Hotevance provides hotel technology solutions for properties
                across Nigeria. Our work focuses on the infrastructure that
                keeps modern hospitality businesses connected, including guest
                Wi-Fi, networking, fiber connectivity, IPTV and managed IT.
              </p>

              <p>
                Hotels in Lagos, Abuja, Port Harcourt, Ibadan, Kano, Benin City,
                Enugu, Kaduna and other Nigerian locations can benefit from
                properly planned hospitality technology infrastructure. Every
                property has different requirements, so our solutions are
                designed around the property's size, layout, guest capacity and
                operational needs.
              </p>

              <p>
                Whether you are developing a new hotel, renovating an existing
                property or looking to improve an unreliable network, Hotevance
                can help you assess your requirements and plan an appropriate
                technology solution.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
