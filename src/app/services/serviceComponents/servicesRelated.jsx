"use client";

import Link from "next/link";
import * as Icons from "lucide-react";

export const servicesRelated = ({
  badge = "Related Services",
  title = "Explore More Hospitality Technology Solutions",
  description = "Discover complementary hospitality technology services that improve guest experience, connectivity and operational efficiency.",
  services = [],
  exclude = "",
}) => {
  const relatedServices = services.filter(
    (service) => service.slug !== exclude
  );

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

        {/* Services */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {relatedServices.map((service) => {
            const Icon = Icons[service.icon] || Icons.Circle;

            return (
              <article
                key={service.slug}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}

                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Content */}

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 flex-grow leading-7 text-slate-600">
                  {service.short}
                </p>

                {service.features?.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {service.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3"
                >
                  Learn More
                  <Icons.ArrowRight className="h-5 w-5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
