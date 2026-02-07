// components/Navbar.jsx
"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";
import logo from "../public/svg/logo-primary.svg";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = scrollY.get();

    return scrollY.on("change", (latest) => {
      if (latest > lastScrollY && latest > 100) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
      lastScrollY = latest;
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-dark/30 desktopNavigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="text-white font-bold">
          {" "}
          <Image src={logo} />
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-white/80  text-[16px]">
          <a href="#">Services</a>
          <a href="#">Case Studies</a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-primary text-white px-4 py-4 rounded-[10px] text-[16px]">
          Hire Hotevance
        </button>
      </div>
    </motion.header>
  );
}
