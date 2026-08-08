"use client";

import { CheckCircle2, Building2 } from "lucide-react";

export const servicesIndustries = ({
  badge = "Industries We Serve",
  title,
  description,
  industries = [],
}) => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
        </div>

        {/* Industries Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon || Building2;

            return (
              <article
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}

                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition duration-300 group-hover:bg-blue-600"></div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {industry.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-600">
                  {industry.description}
                </p>

                {/* Features */}

                {industry.points?.length > 0 && (
                  <ul className="mt-8 space-y-4">
                    {industry.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />

                        <span className="text-slate-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom Section */}

        <div className="mt-24 overflow-hidden rounded-3xl bg-slate-900">
          <div className="grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-14">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Hospitality Expertise
              </span>

              <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
                Technology Solutions Tailored to Every Property
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Every hotel operates differently. Whether you manage a boutique
                hotel, luxury resort, serviced apartment, or multi-property
                hospitality group, Hotevance delivers scalable technology
                solutions designed around your operational requirements and
                guest experience goals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                "Hotels",
                "Luxury Resorts",
                "Boutique Hotels",
                "Hotel Chains",
                "Serviced Apartments",
                "Conference Centres",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-700 bg-slate-800 p-5 text-center font-medium text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
