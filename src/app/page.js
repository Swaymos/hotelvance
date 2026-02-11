"use client"

import { motion, stagger } from "framer-motion";
import CTA from "../../components/CTA";
import CaseStudies from "../../components/CaseStudies";
import Hero from "../../components/Hero";
import Process from "../../components/Process";
import Services from "../../components/Services";
import { fadeUp } from "../../lib/motion";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ================= PROBLEM ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold">
              Hotel Technology Fails When It’s Not Designed as a System
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-gray-600 leading-relaxed"
            >
              Most hotel technology problems are not device failures — they are
              design and integration failures.
            </motion.p>
          </div>

          <motion.ul variants={stagger} className="space-y-4">
            {[
              "Slow or unstable guest Wi-Fi",
              "Disconnected systems (Wi-Fi, IPTV, VoIP, PMS)",
              "Multiple vendors with no accountability",
              "Guest complaints affecting online reviews",
              "High maintenance cost with poor performance",
            ].map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="text-primary font-bold mt-1">—</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="bg-gray-50">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="text-3xl font-bold">
              One Technology Partner. One Integrated System.
            </h2>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Hotevance acts as a single technology partner for hotels — from
              assessment and design to deployment and long-term support.
            </p>
            <p className="font-medium text-gray-900">
              We don’t sell boxes. We engineer systems that scale, perform, and
              stay reliable.
            </p>
          </div>
        </motion.div>
      </section>
      <Services />
      <CaseStudies />
      <Process />
      <CTA />
    </>
  );
}
