// app/services/pms-integration/page.jsx

import mit from "../../../data/services/managed-it";

import services from "../../../data/services/index";
import { servicesBenefits as Benefits } from "../serviceComponents/servicesBenefits";
import { servicesHero as Hero } from "../serviceComponents/servicesHero";
import { servicesFAQ as FAQ } from "../serviceComponents/servicesFAQ";
import { servicesProcess as Process } from "../serviceComponents/servicesProcess";
import { servicesRelated as Related } from "../serviceComponents/servicesRelated";
import { servicesIndustries as Industries } from "../serviceComponents/servicesIndustries";
import { servicesPlatforms as Platforms } from "../serviceComponents/servicesPlatforms";
import { servicesFeatures as Features } from "../serviceComponents/servicesFeatures";
import { servicesOverview as Overview } from "../serviceComponents/servicesOverview";

const mainData = mit;

export const metadata = {
  title: mainData.metadata.title,
  description: mainData.metadata.description,
  keywords: mainData.metadata.keywords,

  alternates: {
    canonical: `https://hotevance.com${mainData.url}`,
  },

  openGraph: {
    title: mainData.metadata.title,
    description: mainData.metadata.description,
    url: `https://hotevance.com${mainData.url}`,
    siteName: "Hotevance",
    type: "website",
    images: [
      {
        url: mainData.hero.image,
        width: 1200,
        height: 630,
        alt: mainData.hero.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: mainData.metadata.title,
    description: mainData.metadata.description,
    images: [mainData.hero.image],
  },
};

export default function ManagedItServicesPage() {
  return (
    <>
      {/* Hero */}
      <Hero {...mainData.hero} />

      {/* Overview */}
      <Overview {...mainData.overview} />

      {/* Features */}
      <Features {...mainData.features} />

      {/* Benefits */}
      <Benefits {...mainData.benefits} />

      {/* Supported Platforms */}
      <Platforms {...mainData.platforms} />

      {/* Process */}
      <Process {...mainData.process} />

      {/* Industries */}
      <Industries {...mainData.industries} />

      {/* FAQs */}
      <FAQ {...mainData.faq} />

      {/* Related Services */}
      <Related services={services} exclude={mainData.slug} />
    </>
  );
}
