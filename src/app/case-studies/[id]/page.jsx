"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { caseStudies } from "../../../../data/caseStudies";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function CaseStudyPage({ params }) {
  const caseStudy = caseStudies.find((item) => item.id === params.id);

  if (!caseStudy) return notFound();

  return (
    <section className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 py-20">
      {/* Hero */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mb-16"
      >
        <motion.h1
          variants={fadeUp}
          className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight"
        >
          {caseStudy.title}
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-4 text-primary font-medium">
          {caseStudy.projectType}
        </motion.p>

        {caseStudy.location && (
          <motion.p variants={fadeUp} className="mt-2 text-sm text-gray-500">
            {caseStudy.location}
          </motion.p>
        )}
      </motion.div>

      {/* Meta Info */}
      {caseStudy.projectStage && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 p-6 rounded-xl bg-gray-50"
        >
          <h3 className="font-semibold mb-2">Project Stage</h3>
          <p>{caseStudy.projectStage}</p>
        </motion.div>
      )}

      {/* Challenge */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mb-16"
      >
        <motion.h2 variants={fadeUp} className="text-2xl font-semibold mb-6">
          Challenge
        </motion.h2>

        <ul className="space-y-3">
          {caseStudy.challenge.map((item, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              className="pl-4 border-l-2 border-primary text-gray-700"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Solution */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mb-16"
      >
        <motion.h2 variants={fadeUp} className="text-2xl font-semibold mb-6">
          Hotevance Solution
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-4 font-medium">
          {caseStudy.solution.summary}
        </motion.p>

        <ul className="space-y-3">
          {caseStudy.solution.deliverables.map((item, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              className="pl-4 border-l-2 border-gray-200"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Results */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mb-16"
      >
        <motion.h2 variants={fadeUp} className="text-2xl font-semibold mb-6">
          Results
        </motion.h2>

        <ul className="grid sm:grid-cols-2 gap-4">
          {caseStudy.results.map((item, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              className="bg-gray-50 p-5 rounded-lg"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Outcome */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-primary/5 p-8 rounded-2xl"
      >
        <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
        <p className="text-lg">{caseStudy.outcome}</p>
      </motion.section>
    </section>
  );
}
