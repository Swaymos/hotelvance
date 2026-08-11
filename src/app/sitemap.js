import {
    getAllPosts,
    getCategories,
    getTags,
} from "../lib/blog";

import services from "../data/services";
import locations from "../data/locationsData";

export const runtime = "nodejs";

/* =========================================================
   SITE CONFIG
========================================================= */

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://hotevance.com";

/* =========================================================
   SLUG HELPER
========================================================= */

function slugify(value = "") {
    return String(value)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

/* =========================================================
   SITEMAP
========================================================= */

export default function sitemap() {
    const posts = getAllPosts();
    const categories = getCategories();
    const tags = getTags();

    const now = new Date();

    /* =======================================================
       STATIC PAGES
    ======================================================= */

    const staticPages = [
        {
            url: SITE_URL,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },

        {
            url: `${ SITE_URL }/services`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },

        {
            url: `${ SITE_URL }/tools`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },

        {
            url: `${ SITE_URL }/industries`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${ SITE_URL }/case-studies`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${ SITE_URL }/about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },

        {
            url: `${ SITE_URL }/contact`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },

        {
            url: `${ SITE_URL }/locations`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${ SITE_URL }/blog`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },

        {
            url: `${ SITE_URL }/hotel-wifi-audit`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },

        {
            url: `${ SITE_URL }/faqs`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.6,
        },

        {
            url: `${ SITE_URL }/privacy-policy`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },

        {
            url: `${ SITE_URL }/terms`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    /* =======================================================
       SERVICES
    ======================================================= */

    const servicePages = Array.isArray(services)
        ? services
            .filter((service) => service?.slug)
            .map((service) => ({
                url: `${ SITE_URL }/services/${ service.slug }`,
                lastModified: service.updatedAt
                    ? new Date(service.updatedAt)
                    : now,
                changeFrequency: "monthly",
                priority: 0.8,
            }))
        : [];

    /* =======================================================
       HOTEL TOOLS
    ======================================================= */

    const toolPages = [
        {
            url: `${ SITE_URL }/tools/hotel-wifi-health-checker`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${ SITE_URL }/tools/hotel-technology-audit`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${ SITE_URL }/tools/hotel-wifi-bandwidth-calculator`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${ SITE_URL }/tools/hotel-wifi-access-point-calculator`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];

    /* =======================================================
       LOCATIONS
    ======================================================= */

    const locationPages = Array.isArray(locations)
        ? locations
            .filter((location) => location?.slug)
            .map((location) => ({
                url: `${ SITE_URL }/locations/${ location.slug }`,
                lastModified: location.updatedAt
                    ? new Date(location.updatedAt)
                    : now,
                changeFrequency: "monthly",
                priority: 0.7,
            }))
        : [];

    /* =======================================================
       BLOG POSTS
    ======================================================= */

    const blogPages = Array.isArray(posts)
        ? posts
            .filter((post) => post?.slug)
            .map((post) => ({
                url: `${ SITE_URL }/blog/${ post.slug }`,

                lastModified: post.updatedAt
                    ? new Date(post.updatedAt)
                    : post.date
                        ? new Date(post.date)
                        : now,

                changeFrequency: "monthly",
                priority: 0.8,
            }))
        : [];

    /* =======================================================
       BLOG CATEGORIES
    ======================================================= */

    const categoryPages = Array.isArray(categories)
        ? categories
            .filter(Boolean)
            .map((category) => ({
                url: `${ SITE_URL }/blog/category/${ slugify(category) }`,
                lastModified: now,
                changeFrequency: "weekly",
                priority: 0.6,
            }))
        : [];

    /* =======================================================
       BLOG TAGS
    ======================================================= */

    const tagPages = Array.isArray(tags)
        ? tags
            .filter(Boolean)
            .map((tag) => ({
                url: `${ SITE_URL }/blog/tag/${ slugify(tag) }`,
                lastModified: now,
                changeFrequency: "weekly",
                priority: 0.5,
            }))
        : [];

    /* =======================================================
       RETURN COMPLETE SITEMAP
    ======================================================= */

    return [
        ...staticPages,
        ...servicePages,
        ...toolPages,
        ...locationPages,
        ...blogPages,
        ...categoryPages,
        ...tagPages,
    ];
}
