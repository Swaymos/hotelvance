"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../public/svg/logo-dark.svg";
import phoneIcon from "../public/svg/phone.svg";
import mailIcon from "../public/svg/mail.svg";
import locationIcon from "../public/svg/location.svg";

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

          <p className="text-[16px] text-gray-600 leading-relaxed max-w-sm">
            Hotevance Limited is a Nigerian smart hospitality technology company
            specializing in hotel Wi-Fi, GPON fiber networks, IPTV, VoIP phones,
            automation, access control, and managed IT services. We serve
            luxury, business, and boutique hotels seeking reliable, scalable,
            and professionally supported technology solutions.
          </p>

          <p className="mt-6 text-[18px] text-gray-500">
            © 2026 Hotevance. All rights reserved
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div variants={item} className="md:justify-self-center">
          <h4 className="mb-4 text-[20px] font-semibold text-primary">
            Company
          </h4>
          <ul className="space-y-3 text-[18px] text-gray-700">
            <li>
              <a className="hover:text-primary" href="/services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="/case-studies">
                Case Studies
              </a>
            </li>
            <li className="">
              <a className="hover:text-primary" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={item}>
          <h4 className="mb-4 text-[20px] font-semibold text-primary">
            Say Hello!
          </h4>
          <ul className="space-y-4 text-[18px] text-gray-700">
            <li className="">
              <a
                className="flex items-center gap-3 hover:text-primary"
                href="mailto:hello@hotevance.com"
              >
                <span className="text-primary">
                  {" "}
                  <Image src={mailIcon} width={30} height={30} alt="icon" />
                </span>
                hello@hotevance.com
              </a>
            </li>
            <li className="">
              <a
                className="flex items-center gap-3 hover:text-primary"
                href="tel:+2347063830062"
              >
                {" "}
                <span className="text-primary text-[18px]">
                  {" "}
                  <Image src={phoneIcon} width={30} height={30} alt="icon" />
                </span>
                +234-706-383-0062
              </a>
            </li>
            <li className="flex items-start text-[18px] gap-3">
              <p className="flex items-center gap-3 hover:text-primary">
                <span className="text-primary mt-1">
                  <Image src={locationIcon} width={30} height={30} alt="logo" />
                </span>
                Suite 320 Rock of Ages Mall, Utako, Abuja
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  );
}
