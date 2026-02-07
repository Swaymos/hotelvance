// components/CaseStudies.jsx
"use client";

import { motion, stagger } from "framer-motion";
import { fadeUp } from "../lib/motion";
import hotelAbuja from "../public/hotels/hotel-abuja.png";
import hotelAbuja2 from "../public/hotels/hotel-abuja2.png";
import hotelLagos from "../public/hotels/hotel-lagos.png";
import Image from "next/image";

const caseStudy = [
  {
    title: "65‑Room City Hotel — Abuja",
    description:
      "Complete Wi‑Fi redesign using GPON infrastructure • Full coverage across guest rooms and public areas • Significant reduction in guest connectivity complaints",
    image: hotelAbuja,
  },
  {
    title: "Business Hotel — Lagos",
    description:
      "High‑density Wi‑Fi upgrade for business travelers • IPTV and network optimization • Improved guest reviews and operational efficiency",
    image: hotelAbuja2,
  },
  {
    title: "Boutique City Hotel — Abuja",
    description:
      "Scalable network backbone deployment • Seamless guest Wi‑Fi experience • Infrastructure designed for future expansion",
    image: hotelLagos,
  },
];

export default function CaseStudies() {
  return (
    <>
      <section
        id="case-studies"
        className="pt-[80px] sectionHeader pb-[20px] max-w-[900px] mx-auto"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[40px] font-bold text-center"
        >
          Proven Results Across{" "}
          <span className="text-primary">Luxury & Business Hotels</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[18px] text-center mt-[20px]"
        >
          Our solutions are trusted by hotels that value performance,
          reliability, and guest satisfaction.
        </motion.p>
      </section>
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-16 grid gap-8 md:grid-cols-3"
          >
            {caseStudy.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="h-[500px] caseStudy  rounded-2xl overflow-hidden  shadow-sm  relative"
              >
                <Image src={item.image} />
                <div className="p-6 itemDescription   backdrop-blur-md bg-white/80 absolute bottom-[55px] rounded-[6px] w-[94%] left-[50%] ml-[-184px]">
                  <h3 className="text-[22px] font-semibold">{item.title}</h3>
                  <p className="text-[16px] text-gray-600 mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
