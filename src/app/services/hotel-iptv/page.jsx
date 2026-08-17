import iptv from "../../../data/services/iptv";

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
  title: iptv.metadata.title,
  description: iptv.metadata.description,
  keywords: iptv.metadata.keywords,

  alternates: {
    canonical: `https://hotevance.com${iptv.url}`,
  },

  openGraph: {
    title: iptv.metadata.title,
    description: iptv.metadata.description,
    url: `https://hotevance.com${iptv.url}`,
    siteName: "Hotevance",
    type: "website",
    images: [
      {
        url: iptv.hero.image,
        width: 1200,
        height: 630,
        alt: iptv.hero.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: iptv.metadata.title,
    description: iptv.metadata.description,
    images: [iptv.hero.image],
  },
};

export default function IPTVPage() {
  return (
    <>
      {/* Hero */}
      <Hero {...iptv.hero} />

      {/* Overview */}
      <Overview {...iptv.overview} />

      {/* Features */}
      <Features {...iptv.features} />

      {/* Benefits */}
      <Benefits {...iptv.benefits} />

      {/* Supported Platforms */}
      <Platforms {...iptv.platforms} />

      {/* Process */}
      <Process {...iptv.process} />

      {/* Industries */}
      <Industries {...iptv.industries} />

      {/* FAQs */}
      <FAQ {...iptv.faq} />

      {/* Related Services */}
      <Related services={services} exclude={iptv.slug} />
    </>
  );
}
