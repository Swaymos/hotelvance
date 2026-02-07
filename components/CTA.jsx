"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ctaBg from "../public/images/cta-bg.jpg";
import { fadeUp } from "../lib/motion";

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
          <h2 className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8">
            Schedule a free Wi-Fi and network audit today and discover
            <br className="hidden md:block" />
            how Hotevance can upgrade your hotel infrastructure.
          </h2>

          <form className="mx-auto flex w-full max-w-xl flex-col sm:flex-row items-stretch gap-3 bg-white rounded-xl p-2">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none rounded-lg"
            />
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-700"
            >
              Get Started
            </button>
          </form>
        </div>
      </motion.section>
    </>
  );
}
