"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { fadeInUp, staggerContainer, fadeItem } from "../../../../lib/motion";
import { NavCard } from "../../../../components/NavCard";
import { ContentBlock } from "../../../../components/ContentBlock";
import { CaseStudyImage } from "../../../../components/CaseStudyImage";

export default function CaseStudyClient({ study, prevCase, nextCase }) {
  return (
    <main className="bg-white">
      {/* HERO */}

      <section className="bg-gray-900 text-white  pt-[40px] pb-[30px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28"
        >
          <p className="text-[18px] uppercase tracking-widest text-primary mb-4">
            Case Study
          </p>
          <h1 className="text-[40px] sm:text-[40px] lg:text-[52px] font-bold max-w-4xl">
            {study.title}
          </h1>
        </motion.div>
      </section>

      {/* META */}
      <section className="w-full bg-gray-900 text-white px-4   border-b">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 caseStudyMeta ">
          <Meta label="Project Type" value={study.projectType} />
          {study.projectStage && (
            <Meta label="Project Stage" value={study.projectStage} />
          )}
          {study.location && <Meta label="Location" value={study.location} />}
        </div>
      </section>

      <CaseStudyImage study={study} />

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24 caseChallenge">
        <ContentBlock title="Challenge" items={study.challenge} />

        <ContentBlock
          title="Hotevance Solution"
          subtitle={study.solution.summary}
          items={study.solution.deliverables}
        />

        {/* RESULTS */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
          <h2 className="text-2xl font-bold mb-8">Results</h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {study.results.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeItem}
                className="bg-gray-50 p-6 rounded-xl flex gap-4"
              >
                <CheckCircle className="text-primary text-[20px] mt-1 mr-[6px] resultIcon" />
                <p className="text-gray-700 text-[18px]">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* OUTCOME */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="bg-primary/5 p-8 rounded-2xl max-w-4xl outcome"
        >
          <h3 className="text-xl font-semibold mb-4">Outcome</h3>
          <p className="text-gray-700 text-[18px]">{study.outcome}</p>
        </motion.div>

        {/* PREV / NEXT */}
        <div className="grid sm:grid-cols-2 gap-6 pt-12 border-t navcard">
          {prevCase && <NavCard label="Previous Case" item={prevCase} />}
          {nextCase && (
            <NavCard label="Next Case" item={nextCase} align="right" />
          )}
        </div>
      </section>
    </main>
  );
}

/* ---------- UI COMPONENTS ---------- */

function Meta({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
