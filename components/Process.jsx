// components/ServicesShowcase.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hotel from "../public/images/hotels-2.png";
import gpon from "../public/svg/gpon.svg";
import { fadeUp } from "../lib/motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.6,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const process = [
  {
    title: "1. Audit",
    description:
      "Comprehensive assessment of existing infrastructure, coverage gaps, and guest experience challenges.",
    position: "lg:absolute lg:top-[140px] lg:left-16",
    image: gpon,
  },
  {
    title: "2. Design",
    description:
      "Custom system design aligned with your hotel’s size, classification, and service expectations.",
    position: "lg:absolute lg:bottom-[260px] lg:left-16",
    image: gpon,
  },
  {
    title: "3. Deployment",
    description:
      "Professional installation with minimal disruption to guests and daily operations.",
    position: "lg:absolute lg:bottom-[550px] lg:right-16",
    image: gpon,
  },
  {
    title: "4. Support",
    description:
      "Ongoing monitoring, preventive maintenance, and responsive technical support to protect long‑term performance.",
    position: "lg:absolute lg:top-[430px] lg:right-16",
    image: gpon,
  },
];

export default function Process() {
  return (
    <>
      <section className="pt-[50px] sectionHeader max-w-[1300px] mx-auto bg-[#F6F6F6] rounded-[10px] bg-opacity-40">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[40px] font-bold text-center"
        >
          Our <span className="text-primary">Proven Approach</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[18px] text-center mt-[20px]"
        >
          We follow a structured, hotel‑focused methodology to ensure consistent
          results.
        </motion.p>
      </section>
      <section className="relative max-w-[1300px] mx-auto bg-[#F6F6F6] pointSection rounded-[10px] bg-opacity-40 h-[900px]">
        {/* Background Image */}
        <div className="absolute inset-0 top-[100px] left-[400px] backgroundBg process">
          <Image
            src={hotel}
            alt="Hotel background"
            priority
            className=""
            width={750}
          />
        </div>

        {/* Content Wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-7xl h-[100%] mx-auto px-4 py-24"
        >
          <div className="grid gap-6 lg:block">
            {process.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className={`
                ${service.position}
                backdrop-blur-md bg-white/80
                rounded-2xl
                shadow-xl
                p-6
                max-w-md
                text-[#3C3B41]
                pointCard
              `}
              >
                <Image
                  src={service.image}
                  width={50}
                  height={50}
                  alt="service image"
                />
                <h3 className="text-[22px] font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-[18px]  leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
