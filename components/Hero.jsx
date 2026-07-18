// components/Hero.jsx
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative hero min-h-screen flex items-center bg-cover bg-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark/80" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="
        heroContent
          relative z-10
          max-w-[900px]
          mx-auto
          px-5 sm:px-6 md:px-8
          pt-32 pb-24
          sm:pt-36 sm:pb-28
          md:pt-40 md:pb-32
          lg:pt-44 lg:pb-36
          text-white
        "
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="
            font-bold leading-tight
            text-[32px]
            sm:text-[36px]
            md:text-[48px]
            lg:text-[56px]
          "
        >
          Integrated Smart Hotel Technology, Engineered for Reliable Guest
          Experiences
        </motion.h1>
        {/* Paragraph 1 */}
        <motion.p
          variants={fadeUp}
          className="
            mt-5 sm:mt-6
            text-white/80
            text-[15px]
            sm:text-[16px]
            md:text-[18px]
            leading-relaxed
          "
        >
          Hotevance designs, deploys, and supports end-to-end hotel technology
          systems — Wi-Fi, GPON, IPTV, VoIP, security, automation, and PMS
          integration — built to international hospitality standards.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          variants={fadeUp}
          className="
            mt-5
            text-white/80
            text-[15px]
            sm:text-[16px]
            md:text-[18px]
            leading-relaxed
          "
        >
          We delivers integrated smart hotel technology, networking, automation,
          security, and guest system built to international hospitality
          standards
        </motion.p>

        {/* CTA */}
        <div className="flex flex-wrap justify-start mt-[40px]">
          <Link
            href="https://wa.link/pn4i7u"
            className="bg-primary text-white px-8 py-4 rounded-xl font-medium"
          >
            Book a Free Hotel Technology Audit
          </Link>
          <Link
            href="https://wa.link/pn4i7u"
            className="border border-white/30 px-8 py-4 rounded-xl ml-[16px] font-medium hover:bg-white hover:text-gray-900 transition"
          >
            Talk to a Hospitality Technology Expert
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
