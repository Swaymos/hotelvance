"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeItem, ctaFade } from "../lib/motion";

const imageFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ServiceSection({
  eyebrow,
  title,
  subtitle,
  body,
  bullets,
  secondaryTitle,
  secondaryBullets,
  cta,
  image,
  imageAlt,
  reverse = false,
}) {
  return (
    <section className="bg-white">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-16 sm:py-20 lg:py-24
          grid gap-12 lg:gap-16
          lg:grid-cols-2
          items-center
        "
      >
        {/* TEXT COLUMN */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className={reverse ? "lg:order-2" : "lg:order-1"}
        >
          <p className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wide mb-2">
            {eyebrow}
          </p>

          <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3 sm:mt-4 text-[15px] sm:text-[16px] md:text-[18px] text-gray-600">
              {subtitle}
            </p>
          )}

          <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-[14.5px] sm:text-[16px] md:text-[17px] text-gray-700 leading-relaxed">
            {body.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          {/* BULLETS */}
          {bullets && (
            <>
              <h3 className="mt-8 sm:mt-10 mb-3 sm:mb-4 text-[18px] sm:text-[20px] font-semibold">
                What We Deliver
              </h3>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-2.5 sm:space-y-3"
              >
                {bullets.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeItem}
                    className="flex gap-3 text-[14.5px] sm:text-[16px] text-gray-700"
                  >
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </>
          )}

          {/* CTA */}
          <motion.div variants={ctaFade}>
            <Link
              href="/contact"
              className="
                inline-block
                mt-8 sm:mt-10
                bg-primary text-white
                px-5 sm:px-6
                py-3.5 sm:py-4
                rounded-[10px]
                text-sm sm:text-base
                font-medium
                hover:opacity-90
                transition
              "
            >
              {cta}
            </Link>
          </motion.div>
        </motion.div>

        {/* IMAGE COLUMN */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={imageFade}
          className={reverse ? "lg:order-1" : "lg:order-2"}
        >
          <div
            className="
              relative
              w-full
              h-[260px]
              sm:h-[320px]
              md:h-[380px]
              lg:h-[460px]
              rounded-2xl
              overflow-hidden
            "
          >
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
