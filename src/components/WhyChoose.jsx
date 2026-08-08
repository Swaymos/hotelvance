// components/WhyChoose.jsx
"use client";

const items = [
  {
    title: "Enterprise-Grade Wi-Fi That Never Drops",
    text: "High-density coverage for rooms, conference spaces, and outdoor areas.",
  },
  {
    title: "Future-Ready GPON & FTTH Backbone",
    text: "Scalable infrastructure built for IPTV, VoIP, and automation.",
  },
  {
    title: "IPTV & In-Room Entertainment",
    text: "Modern TV solutions with PMS integration.",
  },
  {
    title: "VoIP & Smart Communication",
    text: "Reliable voice platforms with hotel workflows.",
  },
  {
    title: "24/7 Manged Support",
    text: "Proactive monitoring and rapid response.",
  },
];

import { motion, stagger } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="relative max-w-[1300px] mx-auto bg-[#F6F6F6] rounded-[10px] bg-opacity-40 h-[900px]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl font-bold text-center"
        >
          Why Leading Hotels{" "}
          <span className="text-primary">Choose Hotevance</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-3 text-gray-600 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
