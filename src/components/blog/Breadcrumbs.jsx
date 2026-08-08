import Link from "next/link";
import Script from "next/script";
import { ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://hotevance.com";

export default function Breadcrumbs({ items = [] }) {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    ...items,
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          {breadcrumbs.map((item, index) => {
            const last = index === breadcrumbs.length - 1;

            return (
              <li key={index} className="flex items-center">
                {index === 0 && <Home size={15} className="mr-1" />}

                {last ? (
                  <span
                    aria-current="page"
                    className="font-medium text-slate-900 dark:text-white"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}

                {!last && (
                  <ChevronRight size={15} className="mx-2 text-slate-400" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
