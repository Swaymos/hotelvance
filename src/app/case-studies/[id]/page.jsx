import { notFound } from "next/navigation";
import SectionHeader from "../../../../components/SectionHeader";
import CTA from "../../../../components/CTA";
import CaseStudyClient from "./caseStudyClient";
import { caseStudies } from "../../../../data/caseStudies";

/* ---------- SEO METADATA ---------- */
export async function generateMetadata({ params }) {
  const { id } = await params;

  const study = caseStudies.find((item) => item.id === id);

  if (!study) {
    return {
      title: "Case Study | Hotevance",
    };
  }

  return {
    title: `${study.title} | Case Study – Hotevance`,
    description: study.outcome,
    openGraph: {
      title: study.title,
      description: study.outcome,
      type: "article",
    },
  };
}

/* ---------- PAGE ---------- */
export default async function CaseStudyPage({ params }) {
  const { id } = await params;

  const study = caseStudies.find((item) => item.id === id);

  if (!study) return notFound();

  const index = caseStudies.findIndex((item) => item.id === id);

  return (
    <>
      <SectionHeader title={study.title} subtitle="Project Overview" />

      <CaseStudyClient
        study={study}
        prevCase={caseStudies[index - 1] ?? null}
        nextCase={caseStudies[index + 1] ?? null}
      />

      <CTA />
    </>
  );
}
