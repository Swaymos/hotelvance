"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../public/svg/logo-dark.svg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-16 rounded-3xl bg-white px-6 py-14"
    >
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-3">
        {/* Company Info */}
        <motion.div variants={item}>
          <div className="mb-4">
            <Image src={logo} alt="Hotevance logo" width={160} height={40} />
          </div>

          <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
            Hotevance Limited is a Nigerian smart hospitality technology company
            specializing in hotel Wi-Fi, GPON fiber networks, IPTV, VoIP phones,
            automation, access control, and managed IT services. We serve
            luxury, business, and boutique hotels seeking reliable, scalable,
            and professionally supported technology solutions.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            © 2026 Hotevance. All rights reserved
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div variants={item} className="md:justify-self-center">
          <h4 className="mb-4 text-sm font-semibold text-violet-600">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>About</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Contact</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={item}>
          <h4 className="mb-4 text-sm font-semibold text-violet-600">
            Say Hello!
          </h4>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-violet-600">✉️</span>
              hello@hotevance.com
            </li>
            <li className="flex items-center gap-3">
              <span className="text-violet-600">📞</span>
              +23440276863
            </li>
            <li className="flex items-start gap-3">
              <span className="text-violet-600 mt-1">📍</span>
              Suite 320 Rock of Ages Mall, Utako, Abuja
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  );
}
