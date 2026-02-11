"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ctaBg from "../public/images/cta-bg.jpg";
import { fadeUp } from "../lib/motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CTA() {
  return (
    <>
      <section
        id="contact"
        className="py-[100px] sectionHeader cta max-w-[700px] text-secondary mx-auto"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[40px] font-bold text-center"
        >
          Book A{" "}
          <span className="text-primary">Free Hotel Technology Audit</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[18px] text-center mt-[20px]"
        >
          Protect your guest experience, online reviews, and brand reputation
          with professionally managed hotel technology.
        </motion.p>
      </section>
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto  max-w-[900px] overflow-hidden rounded-[20px]"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={ctaBg}
            alt="Hotel resort background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[700px] mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Not Sure Where to Start? Start With an Audit.
          </h2>

          <p className="mt-4 mb-10 text-white text-[18px]">
            Free Hotel Technology Audit Includes: Wi-Fi • GPON • IPTV • VoIP •
            Security • PMS Integration
          </p>

          <Link
            href="https://wa.link/pn4i7u"
            className="rounded-lg bg-primary px-6 py-4 text-[16px] font-medium text-white transition hover:opacity-95"
          >
            Book Your Free Audit Now
          </Link>
        </div>
      </motion.section>
    </>
  );
}
