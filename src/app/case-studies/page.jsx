"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeItem,
  fadeUp,
  stagger,
  containerVariants,
  cardVariants,
} from "../../../lib/motion";
import Image from "next/image";
import gpon from "../../../public/svg/gpon.svg";
import wifi from "../../../public/svg/enterprise.svg";
import voip from "../../../public/svg/voip.svg";
import chat from "../../../public/svg/chat.svg";
import SectionHeader from "../../../components/SectionHeader";
import Link from "next/link";
import { caseStudies } from "../../../data/caseStudies";

const specialty = [
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

export default function CaseStudyPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <SectionHeader
        title=" Case Study - Integrated Hospitality Technology for Premium Properties"
        subtitle=" End-to-end technology systems designed to support world-class
            hospitality operations across Nigeria, Africa, and international
            markets."
      />

      {/* OVERVIEW */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-16 sm:py-20
        "
      >
        <div className="max-w-3xl mx-auto text-gray-700 space-y-5 text-[18px] sm:text-[16px] md:text-[18px] ">
          <p>
            Leading hotels and premium hospitality properties across Nigeria,
            Africa, and international markets rely on Hotevance Limited for the
            design, deployment, and long-term support of integrated hotel
            technology systems.
          </p>
          <p className="pt-[40px]">
            Hotevance delivers end-to-end solutions for the distribution of
            audio-visual services, guest connectivity, and critical building
            systems — ensuring consistent performance, reliability, and
            scalability across complex hospitality environments.
          </p>
        </div>
      </motion.section>

      {/* SOLUTIONS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="
          bg-gray-50
          py-16 sm:py-20
        "
      >
        <div
          className="
          max-w-7xl mx-auto
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
            className="relative z-10 max-w-7xl h-[100%] mx-auto px-4 py-24"
          >
            <div className=" grid gap-8 md:grid-cols-3">
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
                  <Image src={service.image} />
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
        </div>
      </motion.section>

      {/* INFRASTRUCTURE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-16 sm:py-20
        "
      >
        <div className="max-w-3xl mx-auto text-gray-700 space-y-5 text-[18px] sm:text-[16px] md:text-[18px] ">
          <p>
            We design infrastructure that connects hotels to global broadcast
            content, satellite platforms, and IP-based services, while also
            supporting modern streaming, branding, and guest information
            applications.
          </p>

          <p className="mt-[20px]">
            Hotevance’s fiber-based and GPON architectures provide
            ultra-broadband capacity, predictable performance, and future-ready
            scalability — forming a resilient foundation for modern hospitality
            technology ecosystems.
          </p>
        </div>
      </motion.section>
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
                <Image src={item.image} />
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
    </main>
  );
}
