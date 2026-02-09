"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import close from "../public/svg/close.svg";
import hamburger from "../public/svg/hamburger.svg";
import logo from "../public/svg/logo-dark.svg";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const menuVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white mobileNavigation">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Hotevance" width={240} height={36} priority />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="inline-flex flex-col justify-center gap-1.5 rounded-lg p-2 hover:bg-gray-100"
        >
          <Image src={hamburger} width={50} height={50} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-50 "
          >
            {/* Close */}
            <div className="flex justify-between px-6 py-[40px] bg-white ">
              <Link href="/" className="">
                <Image
                  src={logo}
                  alt="Hotevance"
                  width={220}
                  height={56}
                  priority
                />
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="pt-[12px] pr-[18px]"
              >
                <Image src={close} width={40} height={40} />
              </button>
            </div>

            {/* Links */}
            <nav className="hidden md:flex gap-8 text-sm text-white/80  text-[16px]">
              <a href="/services">Services</a>
              <a href="/case-studies">Case Studies</a>
              <a href="/contact">Contact</a>
            </nav>
            <motion.ul className="mt-[0px] px-[40px] pt-[40px] pb-[40px] flex flex-col items-center gap-8 text-[34px] font-medium text-gray-800 bg-white">
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <a href={link.href}>{link.label}</a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
