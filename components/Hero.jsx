// components/Hero.jsx
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

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
          Smart Hotel Technology. Designed for Exceptional Guest Experiences.
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
          Hotevance Limited delivers premium smart technology solutions tailored
          for 3–5 star hotels that demand flawless performance, elegant design,
          and dependable support. We design, install, and manage hotel Wi-Fi,
          GPON fiber networks, IPTV, VoIP phones, automation, and integrated
          guest systems that enhance comfort, protect your brand reputation, and
          elevate guest satisfaction.
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
          Trusted by hotels across Abuja, Lagos, and major cities in Nigeria &
          Beyond Hotevance partners with hotel owners and operators to deliver
          premium technology that works seamlessly — quietly supporting
          world-class hospitality.
        </motion.p>
        {/* CTA */}
        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="
            mt-8 sm:mt-10
            inline-flex items-center justify-center
            bg-primary
            px-6 sm:px-8
            py-4 sm:py-5
            rounded-[10px]
            text-sm sm:text-base
            font-medium
          "
        >
          Book a Free Hotel Technology Audit
        </motion.button>
      </motion.div>
    </section>
  );
}
