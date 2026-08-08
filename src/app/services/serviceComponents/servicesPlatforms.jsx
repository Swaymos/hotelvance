"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const servicesPlatforms = ({
  badge = "Supported Platforms",
  title,
  description,
  platforms = [],
  cta = {
    title: "Need a Custom Integration?",
    description:
      "Our engineers can integrate with third-party systems, legacy infrastructure, and enterprise hospitality technologies.",
    button: "Talk to an Expert",
    href: "/contact",
  },
}) => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
        </div>

        {/* Platforms */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {platforms.map((platform, index) => (
            <article
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              {/* Logo */}

              {platform.logo && (
                <div className="flex h-14 items-center">
                  <Image
                    src={platform.logo}
                    alt={platform.title}
                    width={150}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              )}

              <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                {platform.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {platform.description}
              </p>

              {platform.features?.length > 0 && (
                <ul className="mt-8 space-y-3">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />

                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-24 rounded-3xl bg-slate-900 p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">{cta.title}</h2>

              <p className="mt-5 leading-8 text-slate-300">{cta.description}</p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                {cta.button}

                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
