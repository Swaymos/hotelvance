import HotelWifiHealthChecker from "./HotelWifiHealthChecker";

export const metadata = {
  title: "Hotel Wi-Fi Health Checker | Free Hotel Wi-Fi Assessment",
  description:
    "Check your hotel's Wi-Fi health in minutes. Get a free hotel Wi-Fi risk score based on rooms, internet speed, access points, coverage and network setup.",
  keywords: [
    "hotel Wi-Fi health checker",
    "hotel Wi-Fi assessment",
    "hotel Wi-Fi calculator",
    "hotel Wi-Fi audit",
    "hotel wireless network",
    "hotel Wi-Fi coverage",
    "hotel network assessment",
  ],
  alternates: {
    canonical: "/tools/hotel-wifi-health-checker",
  },
  openGraph: {
    title: "Hotel Wi-Fi Health Checker | Hotevance",
    description:
      "Check your hotel's Wi-Fi health and identify potential network risks with the free Hotevance Hotel Wi-Fi Health Checker.",
    url: "/tools/hotel-wifi-health-checker",
    type: "website",
  },
};

export default function Page() {
  return <HotelWifiHealthChecker />;
}
