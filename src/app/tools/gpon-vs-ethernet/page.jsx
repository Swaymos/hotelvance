import GponVsEthernet from "./GponVsEthernet";

export const metadata = {
  title: "GPON vs Ethernet Calculator for Hotels | Hotevance",
  description:
    "Compare GPON and Ethernet for hotel network infrastructure. Find out which architecture may be better suited to your hotel's size, floors, deployment stage and scalability requirements.",
  keywords: [
    "GPON vs Ethernet",
    "GPON hotel network",
    "Ethernet hotel network",
    "hotel GPON",
    "hotel fiber network",
    "hotel network architecture",
    "GPON vs Ethernet calculator",
    "hotel network infrastructure",
  ],
  alternates: {
    canonical: "/tools/gpon-vs-ethernet",
  },
  openGraph: {
    title: "GPON vs Ethernet Calculator for Hotels | Hotevance",
    description:
      "Compare GPON and Ethernet network architecture for hotel projects.",
    type: "website",
  },
};

export default function Page() {
  return <GponVsEthernet />;
}
