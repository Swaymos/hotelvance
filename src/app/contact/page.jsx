"use client";

import { motion } from "framer-motion";
import { Mail, Settings, Wrench } from "lucide-react";
import SectionHeader from "../../../components/SectionHeader";
import CTA from "../../../components/CTA";

/* ---------------- ANIMATION VARIANTS ---------------- */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ContactInfo() {
  return (
    <>
      <SectionHeader title="Contact Hotevance" subtitle="Say Hello" />
      <section className="bg-red-600 pt-[80px] py-12">
        <motion.div
          className="max-w-[700px] mx-auto px-6 space-y-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* HEADER */}
          <motion.div variants={fadeUp} className="text-center">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-gray-900 leading-tight">
              Do you have any questions?
            </h2>
            <p className="mt-2 text-gray-600 text-[18px]">
              Ask <span className="font-semibold">Hotevance</span> for the
              information you are looking for.
            </p>

            <a
              href="mailto:info@hotevance.com"
              className="inline-flex items-center justify-center gap-2 mt-4 text-primary font-semibold text-[18px]"
            >
              <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
                info@
              </span>
              hotevance.com →
            </a>
          </motion.div>
        </motion.div>
      </section>
      <div className="bg-[#ffffff] max-w-[900px] mx-auto mt-16 grid gap-8 md:grid-cols-3">
        <motion.div
          variants={fadeUp}
          className="bg-slate-300 rounded-2xl p-6 shadow-sm "
        >
          <div className="text-center">
            <h3 className="text-[18px] font-bold tracking-wide text-gray-900">
              CUSTOMER CARE
            </h3>
            <div className="w-12 h-12 flex text-center items-center justify-center rounded-full bg-gray-200">
              <Settings className="w-6 h-6 text-gray-600" />
            </div>
            <p className="mt-2 text-gray-600 text-[18px]">
              Contact the customer care service for commercial information:
            </p>

            <div className="mt-3 ">
              <a
                href="mailto:wecare@hotevance.com"
                className="inline-flex items-center gap-2 mt-4 text-primary font-semibold text-[18px]"
              >
                wecare@<span className="text-black">hotevance.com</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-white rounded-2xl p-6 shadow-sm flex gap-4"
        >
          <div className="text-center">
            <h3 className="text-[18px] font-bold tracking-wide text-gray-900">
              ASK FOR INFORMATION
            </h3>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
              <Mail className="w-6 h-6 text-gray-600" />
            </div>
            <p className="mt-2 text-gray-600 text-[18px]">
              For general information contact
            </p>

            <div className="mt-3 space-y-2">
              <a
                href="mailto:info@hotevance.com"
                className="inline-flex items-center gap-2 mt-4 text-primary font-semibold text-[18px]"
              >
                info@<span className="text-black">hotevance.com</span>
              </a>
              <a
                href="tel:+2349085444555"
                className="inline-flex items-center gap-2 mt-2 text-primary font-semibold text-[18px]"
              >
                tel +234 908 544 4555
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-white rounded-2xl p-6 shadow-sm flex gap-4"
        >
          <div className="text-center">
            <h3 className="text-[18px] font-bold tracking-wide text-gray-900">
              TECHNICAL ASSISTANCE
            </h3>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
              <Wrench className="w-6 h-6 text-gray-600" />
            </div>
            <p className="mt-2 text-gray-600 text-[18px]">
              Contact the support service for technical information
            </p>

            <div className="mt-3 space-y-2">
              <a
                href="mailto:support@hotevance.com"
                className="inline-flex items-center gap-2 mt-4 text-primary font-semibold text-[18px]"
              >
                support@<span className="text-black">hotevance.com</span>
              </a>
              <a
                href="tel:+2349085444555"
                className="inline-flex items-center gap-2 mt-2 text-primary font-semibold text-[18px]"
              >
                tel +234 908 544 4555
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <CTA />
    </>
  );
}
