import {
    getAllPosts,
    getCategories,
    getTags,
} from "../lib/blog";

import services from "../data/services";

export const runtime = "nodejs";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://hotevance.com";

export default function sitemap() {
    const posts = getAllPosts();
    const categories = getCategories();
    const tags = getTags();

    const now = new Date();

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
            url: `${ SITE_URL }/blog`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${ SITE_URL }/contact`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    /* --------------------------------
       Service pages
    -------------------------------- */

    const servicePages = Array.isArray(services)
        ? services
            .filter((service) => service?.slug)
            .map((service) => ({
                url: `${ SITE_URL }/services/${ service.slug }`,
                lastModified: now,
                changeFrequency: "monthly",
                priority: 0.8,
            }))
        : [];

    /* --------------------------------
       Blog posts
    -------------------------------- */

    const blogPages = posts
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
        }));

    /* --------------------------------
       Categories
    -------------------------------- */

    const categoryPages = categories.map(
        (category) => ({
            url: `${ SITE_URL }/blog/category/${ slugify(
                category
            ) }`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.6,
        })
    );

    /* --------------------------------
       Tags
    -------------------------------- */

    const tagPages = tags.map(
        (tag) => ({
            url: `${ SITE_URL }/blog/tag/${ slugify(tag) }`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.5,
        })
    );

    return [
        ...staticPages,
        ...servicePages,
        ...blogPages,
        ...categoryPages,
        ...tagPages,
    ];
}

/* --------------------------------
   Slug helper
-------------------------------- */

function slugify(value = "") {
    return String(value)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}