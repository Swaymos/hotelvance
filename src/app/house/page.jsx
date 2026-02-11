"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative bg-gray-900 text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-7xl mx-auto px-6 py-28 text-center"
        >
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight max-w-4xl mx-auto">
            Integrated Smart Hotel Technology, Engineered for Reliable Guest
            Experiences
          </h1>

          <p className="mt-6 text-[17px] sm:text-[18px] text-gray-300 max-w-3xl mx-auto">
            Hotevance designs, deploys, and supports end-to-end hotel technology
            systems — Wi-Fi, GPON, IPTV, VoIP, security, automation, and PMS
            integration — built to international hospitality standards.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#audit"
              className="bg-primary text-white px-8 py-4 rounded-xl font-medium"
            >
              Book a Free Hotel Technology Audit
            </Link>
            <Link
              href="#contact"
              className="border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-gray-900 transition"
            >
              Talk to a Hospitality Technology Expert
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-8 grid gap-4 text-center">
          <p className="text-sm text-gray-600">
            Trusted by hotels, serviced apartments, and hospitality developments
            across Nigeria and Africa.
          </p>
          <p className="text-sm font-semibold tracking-wide text-gray-800">
            HOTELS • SERVICED APARTMENTS • RESORTS
          </p>
        </div>
      </section>

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

      {/* ================= CORE SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            [
              "Hotel Wi-Fi & Network Infrastructure",
              "Enterprise-grade Wi-Fi designed for guest rooms, public areas, and staff operations.",
            ],
            [
              "GPON & Fiber-Based Hotel Networks",
              "Future-ready fiber infrastructure that reduces complexity and cost.",
            ],
            [
              "Hotel IPTV & Guest Entertainment",
              "Branded IPTV with PMS integration and centralized control.",
            ],
            [
              "VoIP & Hotel Telephony Systems",
              "Modern hotel phone systems integrated with front desk and PMS.",
            ],
            [
              "Security, Access Control & Surveillance",
              "Hotel-grade CCTV and access systems without operational disruption.",
            ],
            [
              "Automation & Energy Management (GRMS)",
              "Smart room and energy systems that improve efficiency and comfort.",
            ],
            [
              "Managed Support & Maintenance",
              "24/7 monitoring, preventive maintenance, and SLA-based support.",
            ],
          ].map(([title, desc]) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="border rounded-2xl p-8 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-gray-900 text-white">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 py-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {[
            ["Audit", "Assess existing infrastructure and risks"],
            ["Design", "Engineer a scalable hospitality-grade system"],
            ["Deploy", "Professional installation and commissioning"],
            ["Support", "Ongoing monitoring and optimization"],
          ].map(([step, desc], i) => (
            <motion.div key={step} variants={fadeUp}>
              <div className="text-primary font-bold text-lg mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold mb-2">{step}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section id="audit" className="bg-primary text-white text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6 py-20"
        >
          <h2 className="text-3xl font-bold">
            Not Sure Where to Start? Start With an Audit.
          </h2>
          <p className="mt-4">
            Free Hotel Technology Audit Includes: Wi-Fi • GPON • IPTV • VoIP •
            Security • PMS Integration
          </p>
          <Link
            href="#contact"
            className="inline-block mt-8 bg-white text-primary px-8 py-4 rounded-xl font-medium"
          >
            Book Your Free Audit Now
          </Link>
        </motion.div>
      </section>

      {/* ================= FOOTER VALUE ================= */}
      <footer className="bg-gray-950 text-gray-400 text-center py-8 text-sm">
        Hotevance Limited is a hospitality technology company serving hotels
        across Nigeria, Africa, and international markets with smart, scalable,
        and reliable hotel systems.
      </footer>
    </main>
  );
}
