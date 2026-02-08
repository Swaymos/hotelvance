"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../lib/motion";

export default function SectionHeader({ title, subtitle }) {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[65vh] lg:min-h-[90vh] flex items-center bg-gray-900 text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark/80" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <h1
          className="
          text-[28px]
          sm:text-[36px]
          md:text-[42px]
          lg:text-[48px]
          font-bold
          leading-tight
          max-w-3xl
        "
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="
            mt-4
            sm:mt-6
            text-[15px]
            sm:text-[17px]
            md:text-[18px]
            text-white/80
            max-w-2xl
          "
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
