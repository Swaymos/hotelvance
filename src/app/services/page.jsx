import Hero from "../../components/services/Hero";
import Integration from "../../components/services/Integration";
import Features from "../../components/services/Features";
import Platforms from "../../components/services/Platforms";
import Benefits from "../../components/services/Benefits";
import Process from "../../components/services/Process";
import Related from "../../components/services/Related";
import CTA from "../../components/services/CTA";

// app/services/pms-integration/page.jsx

export const metadata = {
  title:
    "Hotel PMS Integration Services | Property Management System Integration | Hotevance",

  description:
    "Hotevance provides Hotel PMS Integration services that connect your Property Management System with hotel Wi-Fi, IPTV, VoIP, smart room automation, access control, payment systems, and hospitality technologies.",

  keywords: [
    "Hotel PMS Integration",
    "Property Management System Integration",
    "Hotel Technology Solutions",
    "Opera PMS Integration",
    "Cloudbeds Integration",
    "Hotel Wi-Fi Integration",
    "Hotel IPTV",
    "Guest Room Automation",
    "Hospitality Technology",
    "Hotel Network Solutions",
    "Nigeria Hotel Technology",
  ],

  alternates: {
    canonical: "/services/pms-integration",
  },

  openGraph: {
    title: "Hotel PMS Integration Services | Hotevance",

    description:
      "Connect your Property Management System with hotel Wi-Fi, IPTV, VoIP, and smart hotel technologies.",

    url: "/services/pms-integration",

    siteName: "Hotevance",

    locale: "en_NG",

    type: "website",

    images: [
      {
        url: "/images/og/pms-integration.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel PMS Integration Services by Hotevance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Hotel PMS Integration Services | Hotevance",

    description: "Professional Hotel PMS Integration for modern hotels.",

    images: ["/images/og/pms-integration.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function PMSIntegrationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://hotevance.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://hotevance.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hotel PMS Integration",
            item: "https://hotevance.com/services/pms-integration",
          },
        ],
      },

      {
        "@type": "Service",
        name: "Hotel PMS Integration",

        description:
          "Professional Property Management System Integration for hotels, resorts, serviced apartments and hospitality businesses.",

        provider: {
          "@type": "Organization",
          name: "Hotevance",
          url: "https://hotevance.com",
          logo: "https://hotevance.com/logo.png",
        },

        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },

        serviceType: "Property Management System Integration",

        url: "https://hotevance.com/services/pms-integration",

        category: "Hospitality Technology",

        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },

      {
        "@type": "FAQPage",

        mainEntity: [
          {
            "@type": "Question",
            name: "What is Hotel PMS Integration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hotel PMS Integration connects your Property Management System with hotel technologies such as Wi-Fi, IPTV, VoIP, access control, guest room automation and payment systems.",
            },
          },

          {
            "@type": "Question",
            name: "Which PMS platforms do you support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We support Oracle OPERA, Cloudbeds, Mews, Hotelogix, Protel and other cloud or on-premise Property Management Systems.",
            },
          },

          {
            "@type": "Question",
            name: "Can you integrate hotel Wi-Fi with our PMS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We integrate guest Wi-Fi authentication with your Property Management System to automate internet access during guest check-in.",
            },
          },

          {
            "@type": "Question",
            name: "Do you provide ongoing support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Hotevance provides deployment, monitoring, maintenance and long-term technical support for hospitality technology systems.",
            },
          },
        ],
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

      <main>
        <Hero />

        <Integration />

        <Features />

        <Platforms />

        <Benefits />

        <Process />

        <Related />

        <CTA />
      </main>
    </>
  );
}
