// components/Navbar.jsx
"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import logo from "../public/svg/logo-primary.svg";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("");
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
          <Link href="/">
            <Image src={logo} width={200} height={100} alt="logo" />
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 text-[18px] text-white/80   text-[16px]">
          <a className={`hover:text-primary"`} href="/services">
            Services
          </a>
          <a className="hover:text-primary" href="/case-studies">
            Case Studies
          </a>
          <a className="hover:text-primary" href="/contact">
            Contact
          </a>
        </nav>

        <Link
          href="https://wa.link/pn4i7u"
          className="rounded-lg bg-primary px-6 py-3 text-[16px]  hover:opacity-90 text-white transition "
        >
          Hire Hotevance
        </Link>
      </div>
    </motion.header>
  );
}
