import HotelWifiBandwidthCalculator from "./HotelWifiBandwidthCalculator";

export const metadata = {
  title: "Hotel Wi-Fi Bandwidth Calculator | Hotevance",
  description:
    "Calculate your hotel's estimated peak connected devices and recommended internet capacity based on rooms, occupancy, guest devices and streaming usage.",
  keywords: [
    "hotel Wi-Fi bandwidth calculator",
    "hotel internet bandwidth calculator",
    "hotel Wi-Fi calculator",
    "hotel internet speed calculator",
    "hotel network bandwidth",
    "hotel Wi-Fi capacity planning",
    "hotel internet requirements",
  ],
  alternates: {
    canonical: "/tools/hotel-wifi-bandwidth-calculator",
  },
  openGraph: {
    title: "Hotel Wi-Fi Bandwidth Calculator | Hotevance",
    description:
      "Estimate the internet bandwidth your hotel needs for peak guest usage.",
    type: "website",
  },
};

export default function Page() {
  return <HotelWifiBandwidthCalculator />;
}
