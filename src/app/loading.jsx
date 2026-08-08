"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#0F1020]">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold tracking-[-0.05em]"
        >
          <span className="text-white">Hote</span>
          <span className="text-[#58AEBC]">vance</span>
        </motion.div>

        {/* Loading indicator */}
        <div className="mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full w-1/2 rounded-full bg-[#58AEBC]"
            initial={{ x: "-100%" }}
            animate={{ x: "300%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40"
        >
          Loading
        </motion.p>
      </div>
    </div>
  );
}
