// app/layout.jsx
import Head from "next/head";
import "./globals.css";
import { Outfit } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://hotevance.com"),

  title: {
    default: "Hotevance | Smart Hotel Technology Solutions",
    template: "%s | Hotevance",
  },

  description:
    "Luxury-grade hotel technology solutions including enterprise Wi-Fi, GPON fiber, IPTV, VoIP, and automation for 4–5 star hotels across Nigeria.",

  openGraph: {
    title: "Hotevance | Smart Hotel Technology Solutions",
    description:
      "Reliable, secure, luxury-grade Wi-Fi, GPON, IPTV & automation systems trusted by leading hotels.",
    url: "https://hotevance.com",
    siteName: "Hotevance",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotevance Smart Hotel Technology",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hotevance | Smart Hotel Technology Solutions",
    description:
      "Premium hotel Wi-Fi, GPON fiber, IPTV, VoIP & automation solutions.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`bg-white text-gray-900 antialiased ${outfit.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
