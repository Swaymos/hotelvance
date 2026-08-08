// app/services/pms-integration/page.jsx

import voip from "../../../data/services/voip";

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

export const metadata = {
  title: voip.metadata.title,
  description: voip.metadata.description,
  keywords: voip.metadata.keywords,

  alternates: {
    canonical: `https://hotevance.com${voip.url}`,
  },

  openGraph: {
    title: voip.metadata.title,
    description: voip.metadata.description,
    url: `https://hotevance.com${voip.url}`,
    siteName: "Hotevance",
    type: "website",
    images: [
      {
        url: voip.hero.image,
        width: 1200,
        height: 630,
        alt: voip.hero.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: voip.metadata.title,
    description: voip.metadata.description,
    images: [voip.hero.image],
  },
};

export default function VOIPPage() {
  return (
    <>
      {/* Hero */}
      <Hero {...voip.hero} />

      {/* Overview */}
      <Overview {...voip.overview} />

      {/* Features */}
      <Features {...voip.features} />

      {/* Benefits */}
      <Benefits {...voip.benefits} />

      {/* Supported Platforms */}
      <Platforms {...voip.platforms} />

      {/* Process */}
      <Process {...voip.process} />

      {/* Industries */}
      <Industries {...voip.industries} />

      {/* FAQs */}
      <FAQ {...voip.faq} />

      {/* Related Services */}
      <Related services={services} exclude={voip.slug} />
    </>
  );
}
