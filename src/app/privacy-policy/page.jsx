import Link from "next/link";
import {
  ShieldCheck,
  Cookie,
  Database,
  Mail,
  Lock,
  Eye,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Hotevance",
  description:
    "Read the Hotevance privacy policy to understand how we collect, use, protect, and manage information when you visit our website or use our hotel technology services.",
  keywords: [
    "Hotevance privacy policy",
    "privacy policy",
    "hotel technology privacy",
    "hotel technology services",
    "website data privacy",
    "cookies policy",
    "data protection",
  ],
  alternates: {
    canonical: "https://hotevance.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Hotevance",
    description:
      "Learn how Hotevance collects, uses, protects, and manages information from visitors and customers.",
    url: "https://hotevance.com/privacy-policy",
    siteName: "Hotevance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Hotevance",
    description:
      "Learn how Hotevance handles website visitor and customer information.",
  },
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    icon: Database,
    content: (
      <>
        <p>
          Hotevance may collect information that you provide directly to us,
          information collected automatically when you use our website, and
          information provided through third-party services.
        </p>

        <h3>Information you provide</h3>

        <p>
          Depending on how you interact with Hotevance, we may collect
          information such as:
        </p>

        <ul>
          <li>Your name</li>
          <li>Company or organization name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Job title or role</li>
          <li>Property or hotel information</li>
          <li>Information included in enquiries or messages</li>
          <li>Other information you voluntarily submit to us</li>
        </ul>

        <p>
          You should avoid submitting sensitive personal information through
          website forms unless it is specifically requested and necessary.
        </p>
      </>
    ),
  },

  {
    id: "automatically-collected-information",
    title: "2. Information Collected Automatically",
    icon: Eye,
    content: (
      <>
        <p>
          When you visit the Hotevance website, certain technical information
          may be collected automatically. This information helps us understand
          how visitors use our website and improve website performance.
        </p>

        <p>This information may include:</p>

        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>Pages visited</li>
          <li>Referring pages or websites</li>
          <li>Date and time of visits</li>
          <li>General website usage information</li>
        </ul>

        <p>
          We may use this information for website security, analytics,
          troubleshooting, performance monitoring, and improving the user
          experience.
        </p>
      </>
    ),
  },

  {
    id: "how-we-use-information",
    title: "3. How We Use Your Information",
    icon: FileText,
    content: (
      <>
        <p>
          Hotevance may use information collected through our website and
          services for legitimate business purposes, including:
        </p>

        <ul>
          <li>Responding to enquiries and requests</li>
          <li>Providing information about our services</li>
          <li>Preparing proposals or technology assessments</li>
          <li>Providing and improving our services</li>
          <li>Operating and maintaining our website</li>
          <li>Understanding website usage and visitor behaviour</li>
          <li>Improving website content and functionality</li>
          <li>Preventing fraud, abuse, and security threats</li>
          <li>Communicating with customers and prospective customers</li>
          <li>Complying with applicable legal obligations</li>
        </ul>

        <p>
          We do not use personal information for purposes that are incompatible
          with the purpose for which it was collected unless permitted or
          required by applicable law.
        </p>
      </>
    ),
  },

  {
    id: "cookies",
    title: "4. Cookies and Similar Technologies",
    icon: Cookie,
    content: (
      <>
        <p>
          Hotevance may use cookies and similar technologies to improve website
          functionality, understand website traffic, remember preferences, and
          support analytics.
        </p>

        <p>
          Cookies are small text files that may be stored on your device when
          you visit a website.
        </p>

        <p>
          Depending on how the website is configured, cookies may be used to:
        </p>

        <ul>
          <li>Keep the website functioning properly</li>
          <li>Remember user preferences</li>
          <li>Measure website traffic</li>
          <li>Understand which pages are most useful to visitors</li>
          <li>Improve website performance</li>
          <li>Support website security</li>
        </ul>

        <p>
          You can generally manage or disable cookies through your browser
          settings. Disabling certain cookies may affect the functionality of
          some parts of the website.
        </p>
      </>
    ),
  },

  {
    id: "analytics",
    title: "5. Analytics and Website Performance",
    icon: Eye,
    content: (
      <>
        <p>
          Hotevance may use website analytics and performance tools to
          understand how visitors interact with our website.
        </p>

        <p>
          These tools may collect information such as page views, traffic
          sources, device information, approximate geographic information, and
          interaction data.
        </p>

        <p>
          Analytics information is generally used in aggregated or statistical
          form to help us improve our website, content, services, and user
          experience.
        </p>
      </>
    ),
  },

  {
    id: "how-we-share-information",
    title: "6. How We Share Information",
    icon: ShieldCheck,
    content: (
      <>
        <p>Hotevance does not sell your personal information.</p>

        <p>
          We may share information with trusted service providers when necessary
          to operate our website or provide our services. These providers may
          assist with areas such as:
        </p>

        <ul>
          <li>Website hosting</li>
          <li>Website analytics</li>
          <li>Email and communication services</li>
          <li>Cloud and infrastructure services</li>
          <li>Security and fraud prevention</li>
          <li>Business and technical operations</li>
        </ul>

        <p>
          Service providers are expected to process information only as
          necessary to provide their services and in accordance with applicable
          privacy requirements.
        </p>

        <p>
          We may also disclose information where required by law, legal
          proceedings, regulatory authorities, or to protect the rights,
          property, and security of Hotevance, our customers, or others.
        </p>
      </>
    ),
  },

  {
    id: "data-security",
    title: "7. Data Security",
    icon: Lock,
    content: (
      <>
        <p>
          Hotevance takes reasonable technical and organizational measures to
          protect information against unauthorized access, alteration,
          disclosure, loss, or destruction.
        </p>

        <p>
          However, no method of transmitting information over the internet or
          storing information electronically can be guaranteed to be completely
          secure.
        </p>

        <p>
          While we work to protect information entrusted to us, we cannot
          guarantee absolute security.
        </p>
      </>
    ),
  },

  {
    id: "data-retention",
    title: "8. Data Retention",
    icon: Database,
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes described in this Privacy Policy, including
          providing services, maintaining business records, resolving disputes,
          enforcing agreements, and complying with legal obligations.
        </p>

        <p>
          The length of time information is retained may vary depending on the
          type of information and the reason it was collected.
        </p>
      </>
    ),
  },

  {
    id: "third-party-links",
    title: "9. Third-Party Websites and Services",
    icon: Eye,
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, platforms, or
          services.
        </p>

        <p>
          Hotevance is not responsible for the privacy practices, security, or
          content of third-party websites. We encourage you to review the
          privacy policies of third-party websites before providing them with
          personal information.
        </p>
      </>
    ),
  },

  {
    id: "your-rights",
    title: "10. Your Privacy Rights",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Depending on your location and applicable law, you may have certain
          rights relating to your personal information.
        </p>

        <p>These rights may include the ability to:</p>

        <ul>
          <li>Request access to personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of certain information</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Request information about how your data is processed</li>
        </ul>

        <p>
          These rights are subject to applicable laws and may not apply in every
          circumstance.
        </p>

        <p>
          To make a privacy-related request, please contact us using the
          information provided below.
        </p>
      </>
    ),
  },

  {
    id: "children",
    title: "11. Children's Privacy",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Hotevance's website and services are intended primarily for
          businesses, hospitality professionals, hotel owners, managers, and
          other adult users.
        </p>

        <p>
          We do not knowingly collect personal information from children through
          our website.
        </p>
      </>
    ),
  },

  {
    id: "policy-changes",
    title: "12. Changes to This Privacy Policy",
    icon: FileText,
    content: (
      <>
        <p>
          Hotevance may update this Privacy Policy from time to time to reflect
          changes to our services, website, technology, legal requirements, or
          privacy practices.
        </p>

        <p>
          When changes are made, the updated version will be published on this
          page with a revised effective date.
        </p>

        <p>
          We encourage you to review this page periodically to stay informed
          about how we handle information.
        </p>
      </>
    ),
  },

  {
    id: "contact",
    title: "13. Contact Hotevance",
    icon: Mail,
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy, your personal
          information, or our privacy practices, please contact Hotevance.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="font-semibold text-slate-900">Hotevance Limited</p>

          <p className="mt-2 text-slate-600">
            Email:{" "}
            <a
              href="mailto:hello@hotevance.com"
              className="font-medium text-blue-600 hover:underline"
            >
              hello@hotevance.com
            </a>
          </p>

          <p className="mt-1 text-slate-600">
            Website:{" "}
            <a
              href="https://hotevance.com"
              className="font-medium text-blue-600 hover:underline"
            >
              hotevance.com
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-300">
              <ShieldCheck size={16} />
              Privacy & Data Protection
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hotevance Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              This Privacy Policy explains how Hotevance collects, uses,
              protects, and manages information when you visit our website or
              interact with our hotel technology services.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
              <span>Effective date: August 17, 2026</span>
              <span>•</span>
              <span>Last updated: August 17, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          {/* =================================================
              TABLE OF CONTENTS
          ================================================= */}

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-4 text-sm font-bold text-slate-900">
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-sm leading-5 text-slate-600 transition hover:bg-white hover:text-blue-600"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* =================================================
              POLICY CONTENT
          ================================================= */}

          <article className="max-w-4xl">
            <div className="mb-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex gap-4">
                <ShieldCheck
                  className="mt-1 shrink-0 text-blue-600"
                  size={24}
                />

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Your privacy matters
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Hotevance is committed to handling personal information
                    responsibly and transparently. This policy explains what
                    information we may collect and how we use it.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-14">
              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28"
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={20} />
                      </div>

                      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-5 text-[16px] leading-8 text-slate-600">
                      {section.content}
                    </div>
                  </section>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SMALL ARROW ICON
========================================================= */

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
