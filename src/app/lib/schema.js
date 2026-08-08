const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://hotevance.com";

const COMPANY_NAME = "Hotevance";

const LOGO = `${ SITE_URL }/images/logo.png`;

const DEFAULT_IMAGE = `${ SITE_URL }/images/og-default.jpg`;

export function organizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",

        name: COMPANY_NAME,

        url: SITE_URL,

        logo: LOGO,

        image: LOGO,

        email: "info@hotevance.com",

        sameAs: [
            "https://www.linkedin.com/company/hotevance",
            "https://www.facebook.com/hotevance",
            "https://x.com/hotevance",
        ],

        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            email: "info@hotevance.com",
            availableLanguage: ["English"],
        },
    };
}

export function websiteSchema() {
    return {
        "@context": "https://schema.org",

        "@type": "WebSite",

        url: SITE_URL,

        name: COMPANY_NAME,

        publisher: {
            "@type": "Organization",
            name: COMPANY_NAME,
        },

        potentialAction: {
            "@type": "SearchAction",

            target: `${ SITE_URL }/blog?search={search_term_string}`,

            "query-input": "required name=search_term_string",
        },
    };
}

export function breadcrumbSchema(items) {
    return {
        "@context": "https://schema.org",

        "@type": "BreadcrumbList",

        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",

            position: index + 1,

            name: item.label,

            item: `${ SITE_URL }${ item.href }`,
        })),
    };
}

export function articleSchema(post) {
    return {
        "@context": "https://schema.org",

        "@type": "BlogPosting",

        headline: post.title,

        description: post.description,

        image: [
            post.image
                ? `${ SITE_URL }${ post.image }`
                : DEFAULT_IMAGE,
        ],

        datePublished: post.date,

        dateModified:
            post.updatedAt || post.date,

        mainEntityOfPage: {
            "@type": "WebPage",

            "@id": `${ SITE_URL }/blog/${ post.slug }`,
        },

        author: {
            "@type": "Person",

            name: post.author || COMPANY_NAME,
        },

        publisher: {
            "@type": "Organization",

            name: COMPANY_NAME,

            logo: {
                "@type": "ImageObject",

                url: LOGO,
            },
        },

        keywords: post.tags?.join(", "),

        articleSection: post.category,

        wordCount: post.wordCount,

        inLanguage: "en",
    };
}

export function faqSchema(faqs = []) {
    return {
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
}

export function serviceSchema(service) {
    return {
        "@context": "https://schema.org",

        "@type": "Service",

        name: service.title,

        description: service.description,

        provider: {
            "@type": "Organization",

            name: COMPANY_NAME,
        },

        areaServed: service.areaServed || "Nigeria",

        url: `${ SITE_URL }/services/${ service.slug }`,

        image: service.image
            ? `${ SITE_URL }${ service.image }`
            : DEFAULT_IMAGE,
    };
}

export function localBusinessSchema() {
    return {
        "@context": "https://schema.org",

        "@type": "ProfessionalService",

        name: COMPANY_NAME,

        url: SITE_URL,

        logo: LOGO,

        image: LOGO,

        email: "info@hotevance.com",

        areaServed: "Nigeria",

        priceRange: "$$",
    };
}

export function personSchema(author) {
    return {
        "@context": "https://schema.org",

        "@type": "Person",

        name: author.name,

        image: author.image,

        jobTitle: author.role,

        description: author.bio,

        url: author.website,

        sameAs: [
            ...(author.linkedin
                ? [author.linkedin]
                : []),
        ],
    };
}

export function searchResultsSchema(query, totalResults) {
    return {
        "@context": "https://schema.org",

        "@type": "SearchResultsPage",

        name: `Search results for "${ query }"`,

        url: `${ SITE_URL }/blog?search=${ encodeURIComponent(
            query
        ) }`,

        mainEntity: {
            "@type": "ItemList",

            numberOfItems: totalResults,
        },
    };
}