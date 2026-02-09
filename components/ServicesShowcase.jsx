// components/ServicesShowcase.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hotel from "../public/images/Hotels.png";
import gpon from "../public/svg/gpon.svg";
import wifi from "../public/svg/enterprise.svg";
import voip from "../public/svg/voip.svg";
import chat from "../public/svg/chat.svg";
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

const services = [
  {
    title: "Enterprise-Grade Wi-Fi That Never Drops",
    description:
      "High-density, hotel-grade wireless networks engineered for guest rooms, lobbies, conference spaces, and outdoor areas. Designed to handle peak usage without service drops.",
    position: "lg:absolute lg:top-[140px] lg:left-16",
    image: wifi,
  },
  {
    title: "Future-Ready GPON & FTTH Backbone",
    description:
      "Scalable GPON and FTTH infrastructure built for modern hotels, supporting IPTV, VoIP, automation, and future expansion with minimal maintenance.",
    position: "lg:absolute lg:bottom-[180px] lg:left-16",
    image: gpon,
  },
  {
    title: "VoIP & Smart Communication",
    description:
      "Reliable IP telephony for guest rooms and staff operations, integrated with hotel workflows to improve response time and service quality.",
    position: "lg:absolute lg:bottom-[600px] lg:right-16",
    image: gpon,
  },
  {
    title: "IPTV & In-Room Entertainment Systems",
    description:
      "Modern IPTV solutions delivering live TV, on-demand content, hotel information, and guest messaging – fully integrable with PMS and other hotel systems.",
    position: "lg:absolute lg:top-[320px] lg:right-16",
    image: voip,
  },
  {
    title: "24/7 Managed Support",
    description:
      "Proactive monitoring, fast fault resolution, and ongoing maintenance to ensure uninterrupted service and operational continuity.",
    position: "lg:absolute lg:bottom-[60px] lg:right-16",
    image: chat,
  },
];

export default function ServicesShowcase() {
  return (
    <>
      <section
        id="services"
        className="pt-[90px] mt-[100px] sectionHeader max-w-[1300px] mx-auto bg-[#F6F6F6] rounded-[10px] bg-opacity-40"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[40px] font-bold text-center"
        >
          Why Leading Hotels{" "}
          <span className="text-primary">Choose Hotevance</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[18px] text-center mt-[20px] mx-auto max-w-[800px]"
        >
          Luxury hotels require more than basic IT. They require technology that
          performs flawlessly under pressure and enhances the guest journey
          without distraction.
        </motion.p>
      </section>
      <section className="h-[900px] pointSection relative max-w-[1300px] mx-auto bg-[#F6F6F6] rounded-[10px] bg-opacity-40 h-[900px]">
        {/* Background Image */}
        <div className="absolute inset-0 top-[100px] backgroundBg left-[400px]">
          <Image
            src={hotel}
            alt="Hotel background"
            priority
            className=""
            width={680}
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
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className={`
                ${service.position}
                pointCards
                backdrop-blur-md bg-white/80
                rounded-2xl
                shadow-xl
                p-6
                max-w-md
                text-[#3C3B41]
              `}
              >
                <Image
                  src={service.image}
                  width={60}
                  height={60}
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
