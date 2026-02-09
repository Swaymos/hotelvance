import { notFound } from "next/navigation";
import { caseStudies } from "../../../../data/caseStudies";
import CaseStudyClient from "./CaseStudyClient";
import SectionHeader from "../../../../components/SectionHeader";
import CTA from "../../../../components/CTA";

/* ---------- SEO METADATA ---------- */
export async function generateMetadata({ params }) {
  const study = caseStudies.find((item) => item.id === params.id);

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
export default function CaseStudyPage({ params }) {
  const study = caseStudies.find((item) => item.id === params.id);

  if (!study) return notFound();

  const index = caseStudies.findIndex((i) => i.id === params.id);

  return (
    <>
      <SectionHeader title={study.title} subtitle={study.challenge} />
      <CaseStudyClient
        study={study}
        prevCase={caseStudies[index - 1]}
        nextCase={caseStudies[index + 1]}
      />
      <CTA />
    </>
  );
}
