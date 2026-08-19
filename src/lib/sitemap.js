import { getAllPosts, getCategories, getTags } from "../lib/blog";
import industries from "../data/industries";
import services from "../data/services";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://hotevance.com";

export default async function sitemap() {
    const now = new Date();

    /* =====================================================
       STATIC PAGES
    ===================================================== */

    const staticPages = [
        {
            url: `${ SITE_URL }/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${ SITE_URL }/about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${ SITE_URL }/services`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${ SITE_URL }/industries`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${ SITE_URL }/case-studies`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${ SITE_URL }/blog`,
            lastModified: now,
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${ SITE_URL }/contact`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
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

    /* =====================================================
       SERVICE PAGES
    ===================================================== */

    const servicePages = services.map((service) => ({
        url: `${ SITE_URL }/services/${ service.slug }`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    /* =====================================================
       INDUSTRY PAGES
    ===================================================== */

    const industryPages = industries.map((industry) => ({
        url: `${ SITE_URL }/industries/${ industry.slug }`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    /* =====================================================
       BLOG POSTS
    ===================================================== */

    const posts = getAllPosts();

    const blogPages = posts.map((post) => ({
        url: `${ SITE_URL }/blog/${ post.slug }`,
        lastModified: new Date(
            post.updatedAt || post.date
        ),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    /* =====================================================
       BLOG CATEGORIES
    ===================================================== */

    const categoryPages = getCategories().map((category) => ({
        url: `${ SITE_URL }/blog/category/${ slugify(
            category.name
        ) }`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
    }));

    /* =====================================================
       BLOG TAGS
    ===================================================== */

    const tagPages = getTags().map((tag) => ({
        url: `${ SITE_URL }/blog/tag/${ slugify(tag.name) }`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
    }));

    /* =====================================================
       RETURN SITEMAP
    ===================================================== */

    return [
        ...staticPages,
        ...servicePages,
        ...industryPages,
        ...blogPages,
    ];
}

/* =====================================================
   SLUGIFY
===================================================== */

function slugify(value = "") {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}