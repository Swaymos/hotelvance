import CTA from "../../../components/CTA";
import SectionHeader from "../../../components/SectionHeader";
import ServiceSection from "../../../components/ServicesSection";
import wifiImg from "../../../public/images/cta-bg.jpg";
import gponImg from "../../../public/images/cta-bg.jpg";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <SectionHeader
        title="Hotel Technology Built for Performance"
        subtitle="Enterprise-grade systems designed for guest satisfaction and operational excellence."
      />

      <ServiceSection
        href="https://wa.link/pn4i7u"
        eyebrow="Hotel Wi-Fi & Networking"
        title="Hotel Wi-Fi That Performs Under Pressure"
        subtitle="Designed for Guests. Engineered for Operations."
        body={[
          "In today’s hospitality environment, Wi-Fi is no longer an amenity — it is a critical service.",
          "Hotevance designs and deploys hospitality-grade Wi-Fi and network infrastructure built for high-density usage.",
          "Our solutions prioritize reliability, security, and long-term scalability.",
        ]}
        bullets={[
          "Professional RF site surveys & network design",
          "Enterprise-grade access points & switching",
          "Guest, staff & operational network segmentation",
          "Centralized monitoring & performance optimization",
          "GPON or LAN-based backbone integration",
        ]}
        secondaryTitle="Ideal For"
        secondaryBullets={[
          "3–5 star hotels",
          "Business hotels & conference facilities",
          "Resorts & mixed-use hospitality developments",
        ]}
        cta="Book a Free Hotel Wi-Fi & Network Audit"
        image={wifiImg}
        imageAlt="Hotel Wi-Fi infrastructure"
      />

      <ServiceSection
        eyebrow="GPON & Fiber Infrastructure"
        title="Future-Ready Hotel Infrastructure with GPON & Fiber"
        body={[
          "Traditional copper networks struggle to meet modern hospitality demands.",
          "GPON provides a scalable, high-performance backbone for all hotel systems.",
        ]}
        bullets={[
          "Reduced cabling & infrastructure complexity",
          "Higher bandwidth & performance consistency",
          "Lower long-term operational costs",
          "Seamless scalability for future upgrades",
        ]}
        secondaryTitle="Our GPON Services"
        secondaryBullets={[
          "GPON feasibility & design assessment",
          "OLT & ONU deployment and configuration",
          "Room-by-room fiber distribution",
          "Integration with Wi-Fi, IPTV & VoIP systems",
        ]}
        cta="Request a GPON Infrastructure Audit"
        image={gponImg}
        imageAlt="Fiber optic GPON infrastructure"
        reverse
        href="https://wa.link/pn4i7u"
      />
      <CTA />
    </main>
  );
}
