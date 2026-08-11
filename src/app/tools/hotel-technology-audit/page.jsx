import HotelTechnologyAudit from "./HotelTechnologyAudit";

export const metadata = {
  title: "Hotel Technology Audit Calculator | Hotevance",
  description:
    "Estimate the technology and infrastructure requirements for your hotel. Calculate recommended Wi-Fi access points, network switches, fiber backbone, IPTV, VoIP and PMS integration.",
  keywords: [
    "hotel technology calculator",
    "hotel technology audit",
    "hotel infrastructure calculator",
    "hotel Wi-Fi calculator",
    "hotel IPTV calculator",
    "hotel network calculator",
    "hotel technology requirements",
    "hotel IT infrastructure",
  ],
  alternates: {
    canonical: "/tools/hotel-technology-audit",
  },
  openGraph: {
    title: "Hotel Technology Audit Calculator | Hotevance",
    description:
      "Estimate your hotel's technology infrastructure requirements with the Hotevance Hotel Technology Audit Calculator.",
    type: "website",
  },
};

export default function Page() {
  return <HotelTechnologyAudit />;
}
