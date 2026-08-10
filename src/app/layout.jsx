// app/layout.jsx

import "./globals.css";
import { Outfit } from "next/font/google";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  metadataBase: new URL("https://hotevance.com"),

  title: {
    default: "Hotevance | Smart Hotel Technology Solutions",
    template: "%s | Hotevance",
  },

  description:
    "Hotevance provides reliable hotel technology solutions including enterprise Wi-Fi, GPON fiber, IPTV, VoIP, PMS integration, and managed IT services for hotels across Nigeria.",

  keywords: [
    "hotel technology",
    "hotel Wi-Fi",
    "hotel internet",
    "GPON fiber",
    "hotel IPTV",
    "hotel VoIP",
    "PMS integration",
    "managed IT services",
    "hotel networking",
    "hospitality technology",
    "hotel technology Nigeria",
  ],

  authors: [
    {
      name: "Hotevance",
      url: "https://hotevance.com",
    },
  ],

  creator: "Hotevance",

  publisher: "Hotevance",

  alternates: {
    canonical: "https://hotevance.com",
  },

  openGraph: {
    title: "Hotevance | Smart Hotel Technology Solutions",

    description:
      "Reliable hotel Wi-Fi, GPON fiber, IPTV, VoIP, PMS integration, and managed IT solutions for modern hotels.",

    url: "https://hotevance.com",

    siteName: "Hotevance",

    images: [
      {
        url: "/images/Hotels.png",
        width: 1200,
        height: 630,
        alt: "Hotevance Smart Hotel Technology Solutions",
      },
    ],

    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Hotevance | Smart Hotel Technology Solutions",

    description:
      "Premium hotel Wi-Fi, GPON fiber, IPTV, VoIP, PMS integration, and managed IT solutions.",

    images: ["/images/Hotels.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NG">
      <head>
        <meta
          name="google-site-verification"
          content="rMmRTsVzPP-fMgyGaW7eEQ-wJqwV5aafb-DtpcSRloE"
        />
      </head>
      <body
        className={`${outfit.variable} ${outfit.className} bg-white text-gray-900 antialiased`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
