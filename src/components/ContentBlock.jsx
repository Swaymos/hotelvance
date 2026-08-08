import { motion } from "framer-motion";
import { fadeInUp, fadeItem, staggerContainer } from "../lib/motion";

export function ContentBlock({ title, subtitle, items }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      className="grid lg:grid-cols-2 gap-10"
    >
      <div>
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        {subtitle && <p className="text-gray-600 text-[18px]">{subtitle}</p>}
      </div>

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="space-y-4"
      >
        {items.map((item, i) => (
          <motion.li
            key={i}
            variants={fadeItem}
            className="flex gap-3 text-gray-700 text-[18px]"
          >
            <span className="text-primary text-[20px]">•</span>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
