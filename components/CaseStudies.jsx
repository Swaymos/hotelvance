// components/CaseStudies.jsx
"use client";

import { motion, stagger } from "framer-motion";
import { fadeUp } from "../lib/motion";
import Image from "next/image";

import { caseStudies } from "../data/caseStudies";
import Link from "next/link";

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
            {caseStudies.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="h-[500px] caseStudy  rounded-2xl overflow-hidden  shadow-sm  relative"
              >
                <Image src={item.image} fill alt="image" />
                <div className="p-6 itemDescription   backdrop-blur-md bg-white/80 absolute bottom-[55px] rounded-[6px] w-[94%] left-[50%] ml-[-184px]">
                  <h3 className="text-[22px] font-semibold">{item.title}</h3>
                  <p className="text-[18px] text-gray-600 mt-2 mb-2">
                    {item.projectType}
                  </p>
                  <Link
                    className="hover:text-primary"
                    href={`/case-studies/${item.id}`}
                  >
                    View Case Study <span></span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
