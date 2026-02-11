"use client";

import { motion } from "framer-motion";
import { fadeInUp, containerVariants, cardVariants } from "../lib/motion";
import Image from "next/image";
import gpon from "../public/svg/gpon.svg";
import wifi from "../public/svg/enterprise.svg";
import voip from "../public/svg/voip.svg";
import chat from "../public/svg/chat.svg";

const specialty = [
  {
    title: "Hotel Wi-Fi & Network Infrastructure",
    description:
      "Enterprise-grade Wi-Fi designed for guest rooms, public areas, and staff operations.",
    image: wifi,
  },
  {
    title: "GPON & Fiber-Based Hotel Networks",
    description:
      "Future-ready fiber infrastructure that reduces complexity and cost.",
    image: gpon,
  },
  {
    title: "Hotel IPTV & Guest Entertainment",
    description: "Branded IPTV with PMS integration and centralized control.",
    image: gpon,
  },
  {
    title: "VoIP & Hotel Telephony Systems",
    description:
      "Modern hotel phone systems integrated with front desk and PMS.",
    image: voip,
  },
  {
    title: "Security, Access Control & Surveillance",
    description:
      "Hotel-grade CCTV and access systems without operational disruption.",
    image: chat,
  },
  {
    title: "Automation & Energy Management (GRMS)",
    description:
      "Smart room and energy systems that improve efficiency and comfort.",
    image: chat,
  },
  {
    title: "Managed Support & Maintenance",
    description:
      "24/7 monitoring, preventive maintenance, and SLA-based support.",
    image: chat,
  },
];

export default function Services() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="
          bg-gray-50
          py-6 sm:py-20
        "
    >
      <div
        className="
          max-w-[1400px] mx-auto
          px-4 sm:px-6 lg:px-8
        "
      >
        <h2
          className="
            text-[24px]
            sm:text-[30px]
            md:text-[36px]
            font-bold
            mb-8
            text-center
          "
        >
          Our Integrated Solutions Include
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-[1400px] h-[100%] mx-auto px-4 py-14"
        >
          <div className=" grid gap-8 md:grid-cols-4">
            {specialty.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className={`
              
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
                  width={40}
                  height={40}
                  alt="service image"
                />
                <h3 className="text-[22px] mt-4 font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-[18px]  leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
