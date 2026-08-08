// src/lib/blog.js

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_PATH = path.join(
    process.cwd(),
    "src",
    "data",
    "blog"
);

/* -------------------------------------------------------
   Helpers
------------------------------------------------------- */

function slugify(value = "") {
    return String(value)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

function ensurePostsDirectory() {
    if (!fs.existsSync(POSTS_PATH)) {
        return false;
    }

    return true;
}

function getPostFiles() {
    if (!ensurePostsDirectory()) {
        return [];
    }

    return fs
        .readdirSync(POSTS_PATH)
        .filter(
            (file) =>
                file.endsWith(".md") ||
                file.endsWith(".mdx")
        );
}

/* -------------------------------------------------------
   Get all posts
------------------------------------------------------- */

export function getAllPosts() {
    const files = getPostFiles();

    const posts = files
        .map((filename) => {
            const filePath = path.join(POSTS_PATH, filename);

            try {
                const source = fs.readFileSync(filePath, "utf8");

                const { data, content } = matter(source);

                const slug =
                    data.slug ||
                    filename
                        .replace(/\.mdx?$/, "");

                const stats = readingTime(content);

                return {
                    ...data,

                    slug,

                    content,

                    readingTime:
                        data.readingTime || stats.text,

                    wordCount:
                        data.wordCount ||
                        stats.words,

                    date: data.date
                        ? String(data.date)
                        : "",

                    updatedAt: data.updatedAt
                        ? String(data.updatedAt)
                        : data.date
                            ? String(data.date)
                            : "",
                };
            } catch (error) {
                console.error(
                    `Failed to read blog post: ${ filename }`,
                    error
                );

                return null;
            }
        })
        .filter(Boolean);

    return posts.sort((a, b) => {
        return (
            new Date(b.date || 0) -
            new Date(a.date || 0)
        );
    });
}

/* -------------------------------------------------------
   Get one post
------------------------------------------------------- */

export function getPost(slug) {
    if (!slug) return null;

    const posts = getAllPosts();

    return (
        posts.find(
            (post) =>
                post.slug === slug
        ) || null
    );
}

/* -------------------------------------------------------
   Get post slugs
------------------------------------------------------- */

export function getPostSlugs() {
    return getAllPosts().map(
        (post) => post.slug
    );
}

/* -------------------------------------------------------
   Categories
------------------------------------------------------- */

export function getCategories() {
    const categories = new Set();

    getAllPosts().forEach((post) => {
        if (post.category) {
            categories.add(post.category);
        }
    });

    return Array.from(categories).sort(
        (a, b) =>
            a.localeCompare(b)
    );
}

export function getCategorySlugs() {
    return getCategories().map(
        (category) =>
            slugify(category)
    );
}

export function getCategoryBySlug(slug) {
    if (!slug) return null;

    return (
        getCategories().find(
            (category) =>
                slugify(category) === slug
        ) || null
    );
}

export function getPostsByCategory(category) {
    if (!category) return [];

    const categorySlug =
        slugify(category);

    return getAllPosts().filter(
        (post) =>
            post.category &&
            slugify(post.category) ===
            categorySlug
    );
}

/* -------------------------------------------------------
   Tags
------------------------------------------------------- */

export function getTags() {
    const tags = new Set();

    getAllPosts().forEach((post) => {
        if (!Array.isArray(post.tags)) {
            return;
        }

        post.tags.forEach((tag) => {
            if (tag) {
                tags.add(tag);
            }
        });
    });

    return Array.from(tags).sort(
        (a, b) =>
            a.localeCompare(b)
    );
}

export function getTagSlugs() {
    return getTags().map(
        (tag) => slugify(tag)
    );
}

export function getTagBySlug(slug) {
    if (!slug) return null;

    return (
        getTags().find(
            (tag) =>
                slugify(tag) === slug
        ) || null
    );
}

export function getPostsByTag(tag) {
    if (!tag) return [];

    const tagSlug =
        slugify(tag);

    return getAllPosts().filter(
        (post) => {
            if (!Array.isArray(post.tags)) {
                return false;
            }

            return post.tags.some(
                (postTag) =>
                    slugify(postTag) ===
                    tagSlug
            );
        }
    );
}

/* -------------------------------------------------------
   Featured posts
------------------------------------------------------- */

export function getFeaturedPosts() {
    return getAllPosts()
        .filter(
            (post) =>
                post.featured === true ||
                post.featured === "true"
        )
        .sort((a, b) => {
            if (
                a.featuredOrder != null &&
                b.featuredOrder != null
            ) {
                return (
                    Number(a.featuredOrder) -
                    Number(b.featuredOrder)
                );
            }

            return (
                new Date(b.date || 0) -
                new Date(a.date || 0)
            );
        });
}

/* -------------------------------------------------------
   Related posts
------------------------------------------------------- */

export function getRelatedPosts(
    currentPost,
    limit = 3
) {
    if (!currentPost) {
        return [];
    }

    const posts = getAllPosts();

    const related = posts
        .filter(
            (post) =>
                post.slug !==
                currentPost.slug
        )
        .map((post) => {
            let score = 0;

            if (
                post.category &&
                currentPost.category &&
                slugify(post.category) ===
                slugify(currentPost.category)
            ) {
                score += 5;
            }

            if (
                Array.isArray(post.tags) &&
                Array.isArray(currentPost.tags)
            ) {
                const currentTags =
                    currentPost.tags.map(
                        (tag) => slugify(tag)
                    );

                const matchingTags =
                    post.tags.filter((tag) =>
                        currentTags.includes(
                            slugify(tag)
                        )
                    );

                score +=
                    matchingTags.length * 2;
            }

            return {
                ...post,
                relevanceScore: score,
            };
        })
        .filter(
            (post) =>
                post.relevanceScore > 0
        )
        .sort(
            (a, b) =>
                b.relevanceScore -
                a.relevanceScore
        );

    return related.slice(0, limit);
}

/* -------------------------------------------------------
   Search
------------------------------------------------------- */

export function searchPosts(query) {
    if (!query) {
        return getAllPosts();
    }

    const normalizedQuery =
        query.toLowerCase().trim();

    if (!normalizedQuery) {
        return getAllPosts();
    }

    return getAllPosts().filter(
        (post) => {
            const searchableText = [
                post.title,
                post.description,
                post.category,
                post.author,
                ...(Array.isArray(post.tags)
                    ? post.tags
                    : []),
                post.content,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return searchableText.includes(
                normalizedQuery
            );
        }
    );
}

/* -------------------------------------------------------
   Pagination
------------------------------------------------------- */

export function paginatePosts(
    posts,
    page = 1,
    perPage = 9
) {
    const currentPage =
        Math.max(1, Number(page) || 1);

    const totalPosts =
        posts.length;

    const totalPages =
        Math.ceil(
            totalPosts / perPage
        );

    const start =
        (currentPage - 1) * perPage;

    const end =
        start + perPage;

    return {
        posts: posts.slice(
            start,
            end
        ),

        page: currentPage,

        perPage,

        totalPosts,

        totalPages,

        hasNextPage:
            currentPage <
            totalPages,

        hasPreviousPage:
            currentPage > 1,
    };
}

/* -------------------------------------------------------
   Latest posts
------------------------------------------------------- */

export function getLatestPosts(
    limit = 3
) {
    return getAllPosts().slice(
        0,
        limit
    );
}

/* -------------------------------------------------------
   Export helper
------------------------------------------------------- */

export { slugify };