"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const servicesFAQ = ({
  badge = "Frequently Asked Questions",
  title,
  description,
  faqs = [],
}) => {
  const [active, setActive] = useState(0);

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          {/* Header */}

          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              {badge}
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              {title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {description}
            </p>
          </div>

          {/* Accordion */}

          <div className="mt-16 space-y-5">
            {faqs.map((faq, index) => {
              const open = active === index;

              return (
                <article
                  key={index}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <button
                    onClick={() => setActive(open ? -1 : index)}
                    className="flex w-full items-center justify-between px-8 py-6 text-left"
                  >
                    <h3 className="pr-8 text-lg font-semibold text-slate-900">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-8 py-6 leading-8 text-slate-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}

          <div className="mt-20 rounded-3xl bg-slate-900 p-10 text-center">
            <h3 className="text-3xl font-bold text-white">
              Still Have Questions?
            </h3>

            <p className="mt-5 mx-auto max-w-2xl leading-8 text-slate-300">
              Our hospitality technology specialists are available to help you
              choose the right solution for your hotel, explain integrations,
              and answer any technical questions.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
