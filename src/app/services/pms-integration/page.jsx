import pms from "../../../data/services/pms";

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
  title: pms.metadata.title,
  description: pms.metadata.description,
  keywords: pms.metadata.keywords,

  alternates: {
    canonical: `https://hotevance.com${pms.url}`,
  },

  openGraph: {
    title: pms.metadata.title,
    description: pms.metadata.description,
    url: `https://hotevance.com${pms.url}`,
    siteName: "Hotevance",
    type: "website",
    images: [
      {
        url: pms.hero.image,
        width: 1200,
        height: 630,
        alt: pms.hero.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pms.metadata.title,
    description: pms.metadata.description,
    images: [pms.hero.image],
  },
};

export default function PMSIntegrationPage() {
  return (
    <>
      {/* Hero */}
      <Hero {...pms.hero} />

      {/* Overview */}
      <Overview {...pms.overview} />

      {/* Features */}
      <Features {...pms.features} />

      {/* Benefits */}
      <Benefits {...pms.benefits} />

      {/* Supported Platforms */}
      <Platforms {...pms.platforms} />

      {/* Process */}
      <Process {...pms.process} />

      {/* Industries */}
      <Industries {...pms.industries} />

      {/* FAQs */}
      <FAQ {...pms.faq} />

      {/* Related Services */}
      <Related services={services} exclude={pms.slug} />
    </>
  );
}
