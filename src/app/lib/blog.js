import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_PATH = path.join(
    process.cwd(),
    "content",
    "blog"
);

/*
|--------------------------------------------------------------------------
| Utilities
|--------------------------------------------------------------------------
*/

function slugify(value = "") {
    return value
        .toString()
        .trim()
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/['"]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/*
|--------------------------------------------------------------------------
| Blog Directory
|--------------------------------------------------------------------------
*/

function getFiles() {
    if (!fs.existsSync(POSTS_PATH)) {
        return [];
    }

    return fs
        .readdirSync(POSTS_PATH, {
            withFileTypes: true,
        })
        .filter(
            (entry) =>
                entry.isFile() &&
                /\.(md|mdx)$/i.test(entry.name)
        )
        .map((entry) => entry.name);
}

/*
|--------------------------------------------------------------------------
| Slugs
|--------------------------------------------------------------------------
*/

export function getPostSlugs() {
    return getFiles().map((file) =>
        file.replace(/\.mdx?$/i, "")
    );
}

/*
|--------------------------------------------------------------------------
| Get Single Post
|--------------------------------------------------------------------------
*/

export function getPost(slug) {
    if (!slug) {
        return null;
    }

    const realSlug = String(slug)
        .replace(/\.mdx?$/i, "")
        .trim();

    if (!realSlug) {
        return null;
    }

    const mdxPath = path.join(
        POSTS_PATH,
        `${ realSlug }.mdx`
    );

    const mdPath = path.join(
        POSTS_PATH,
        `${ realSlug }.md`
    );

    let filePath = null;

    if (fs.existsSync(mdxPath)) {
        filePath = mdxPath;
    } else if (fs.existsSync(mdPath)) {
        filePath = mdPath;
    }

    if (!filePath) {
        return null;
    }

    const source = fs.readFileSync(
        filePath,
        "utf8"
    );

    const { data, content } =
        matter(source);

    const normalizedTags = Array.isArray(
        data.tags
    )
        ? data.tags.filter(Boolean)
        : [];

    const category =
        typeof data.category === "string"
            ? data.category.trim()
            : "";

    const title =
        typeof data.title === "string"
            ? data.title.trim()
            : realSlug;

    const description =
        typeof data.description === "string"
            ? data.description.trim()
            : "";

    return {
        slug: realSlug,

        title,

        description,

        category,

        categorySlug: slugify(category),

        tags: normalizedTags,

        date: data.date || null,

        updatedAt:
            data.updatedAt || data.date || null,

        author:
            data.author || "Hotevance Team",

        authorRole:
            data.authorRole || "",

        authorBio:
            data.authorBio || "",

        authorImage:
            data.authorImage || "",

        image: data.image || "",

        featured:
            Boolean(data.featured),

        featuredOrder:
            Number(data.featuredOrder || 999),

        wordCount:
            Number(data.wordCount || 0),

        readingTime:
            data.readingTime ||
            readingTime(content).text,

        content,
    };
}

/*
|--------------------------------------------------------------------------
| All Posts
|--------------------------------------------------------------------------
*/

export function getAllPosts() {
    return getPostSlugs()
        .map((slug) => getPost(slug))
        .filter(Boolean)
        .sort((a, b) => {
            const dateA = new Date(
                a.date || 0
            ).getTime();

            const dateB = new Date(
                b.date || 0
            ).getTime();

            return dateB - dateA;
        });
}

/*
|--------------------------------------------------------------------------
| Featured Posts
|--------------------------------------------------------------------------
*/

export function getFeaturedPosts(
    limit = 3
) {
    return getAllPosts()
        .filter((post) => post.featured)
        .sort(
            (a, b) =>
                a.featuredOrder -
                b.featuredOrder
        )
        .slice(0, limit);
}

/*
|--------------------------------------------------------------------------
| Latest Posts
|--------------------------------------------------------------------------
*/

export function getLatestPosts(
    limit = 6
) {
    return getAllPosts().slice(0, limit);
}

/*
|--------------------------------------------------------------------------
| Categories
|--------------------------------------------------------------------------
*/

export function getCategories() {
    const categoryMap = new Map();

    getAllPosts().forEach((post) => {
        if (!post.category) {
            return;
        }

        const name =
            post.category.trim();

        const slug =
            slugify(name);

        if (!slug) {
            return;
        }

        if (!categoryMap.has(slug)) {
            categoryMap.set(slug, {
                name,
                slug,
                count: 0,
            });
        }

        const category =
            categoryMap.get(slug);

        category.count += 1;
    });

    return Array.from(
        categoryMap.values()
    ).sort((a, b) =>
        a.name.localeCompare(
            b.name
        )
    );
}

/*
|--------------------------------------------------------------------------
| Get Category By Slug
|--------------------------------------------------------------------------
*/

export function getCategoryBySlug(
    slug
) {
    if (!slug) {
        return null;
    }

    const normalizedSlug =
        slugify(slug);

    return (
        getCategories().find(
            (category) =>
                category.slug ===
                normalizedSlug
        ) || null
    );
}

/*
|--------------------------------------------------------------------------
| Category Slugs
|--------------------------------------------------------------------------
*/

export function getCategorySlugs() {
    return getCategories().map(
        (category) => category.slug
    );
}

/*
|--------------------------------------------------------------------------
| Posts By Category
|--------------------------------------------------------------------------
*/

export function getPostsByCategory(
    category
) {
    if (!category) {
        return [];
    }

    const categorySlug =
        slugify(category);

    return getAllPosts().filter(
        (post) =>
            post.categorySlug ===
            categorySlug
    );
}

/*
|--------------------------------------------------------------------------
| Tags
|--------------------------------------------------------------------------
*/

export function getTags() {
    const tagMap = new Map();

    getAllPosts().forEach((post) => {
        post.tags.forEach((tag) => {
            const name =
                String(tag).trim();

            const slug =
                slugify(name);

            if (!slug) {
                return;
            }

            if (!tagMap.has(slug)) {
                tagMap.set(slug, {
                    name,
                    slug,
                    count: 0,
                });
            }

            tagMap.get(slug).count += 1;
        });
    });

    return Array.from(
        tagMap.values()
    ).sort(
        (a, b) =>
            b.count - a.count ||
            a.name.localeCompare(
                b.name
            )
    );
}

/*
|--------------------------------------------------------------------------
| Get Tag By Slug
|--------------------------------------------------------------------------
*/

export function getTagBySlug(
    slug
) {
    if (!slug) {
        return null;
    }

    const normalizedSlug =
        slugify(slug);

    return (
        getTags().find(
            (tag) =>
                tag.slug ===
                normalizedSlug
        ) || null
    );
}

/*
|--------------------------------------------------------------------------
| Posts By Tag
|--------------------------------------------------------------------------
*/

export function getPostsByTag(
    tag
) {
    if (!tag) {
        return [];
    }

    const tagSlug =
        slugify(tag);

    return getAllPosts().filter(
        (post) =>
            post.tags.some(
                (postTag) =>
                    slugify(postTag) ===
                    tagSlug
            )
    );
}

/*
|--------------------------------------------------------------------------
| Related Posts
|--------------------------------------------------------------------------
*/

export function getRelatedPosts(
    slug,
    limit = 3
) {
    const current =
        getPost(slug);

    if (!current) {
        return [];
    }

    return getAllPosts()
        .filter(
            (post) =>
                post.slug !== current.slug
        )
        .map((post) => {
            let score = 0;

            if (
                post.categorySlug ===
                current.categorySlug
            ) {
                score += 10;
            }

            const sharedTags =
                post.tags.filter(
                    (tag) =>
                        current.tags.some(
                            (currentTag) =>
                                slugify(
                                    currentTag
                                ) ===
                                slugify(tag)
                        )
                );

            score +=
                sharedTags.length * 3;

            return {
                ...post,
                score,
            };
        })
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }

            return (
                new Date(b.date || 0) -
                new Date(a.date || 0)
            );
        })
        .slice(0, limit);
}

/*
|--------------------------------------------------------------------------
| Pagination
|--------------------------------------------------------------------------
*/

export function paginatePosts(
    posts = [],
    page = 1,
    perPage = 9
) {
    const totalPosts =
        posts.length;

    const totalPages =
        Math.max(
            1,
            Math.ceil(
                totalPosts / perPage
            )
        );

    const currentPage = Math.min(
        Math.max(
            1,
            Number(page) || 1
        ),
        totalPages
    );

    const start =
        (currentPage - 1) *
        perPage;

    const end =
        start + perPage;

    return {
        posts: posts.slice(
            start,
            end
        ),

        currentPage,

        totalPages,

        totalPosts,

        hasPreviousPage:
            currentPage > 1,

        hasNextPage:
            currentPage <
            totalPages,
    };
}

/*
|--------------------------------------------------------------------------
| Search
|--------------------------------------------------------------------------
*/

export function searchPosts(
    query
) {
    if (!query?.trim()) {
        return getAllPosts();
    }

    const search =
        query
            .toLowerCase()
            .trim();

    return getAllPosts().filter(
        (post) => {
            const title =
                post.title
                    ?.toLowerCase() || "";

            const description =
                post.description
                    ?.toLowerCase() || "";

            const category =
                post.category
                    ?.toLowerCase() || "";

            const tags =
                post.tags
                    .join(" ")
                    .toLowerCase();

            return (
                title.includes(search) ||
                description.includes(search) ||
                category.includes(search) ||
                tags.includes(search)
            );
        }
    );
}

/*
|--------------------------------------------------------------------------
| Static Params
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
    return getPostSlugs().map(
        (slug) => ({
            slug,
        })
    );
}