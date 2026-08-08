const SEARCHABLE_FIELDS = [
    "title",
    "description",
    "category",
    "author",
];

function normalize(value = "") {
    return value
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}

function getSearchText(post) {
    return [
        ...SEARCHABLE_FIELDS.map((field) => post[field] || ""),
        ...(post.tags || []),
        post.content || "",
    ]
        .join(" ")
        .toLowerCase();
}

function scorePost(post, query) {
    const search = normalize(query);

    let score = 0;

    const title = normalize(post.title);
    const description = normalize(post.description);
    const category = normalize(post.category);
    const author = normalize(post.author);

    const tags = (post.tags || []).map(normalize);

    if (title === search) score += 100;

    if (title.startsWith(search)) score += 75;

    if (title.includes(search)) score += 50;

    if (category.includes(search)) score += 30;

    if (author.includes(search)) score += 20;

    if (description.includes(search)) score += 15;

    tags.forEach((tag) => {
        if (tag === search) score += 25;

        if (tag.includes(search)) score += 10;
    });

    const content = normalize(post.content);

    if (content.includes(search)) score += 5;

    return score;
}

export function searchPosts(posts = [], query = "") {
    if (!query.trim()) return posts;

    return posts
        .map((post) => ({
            ...post,
            score: scorePost(post, query),
        }))
        .filter((post) => post.score > 0)
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }

            return new Date(b.date) - new Date(a.date);
        });
}

export function filterByCategory(posts = [], category = "All") {
    if (!category || category === "All") {
        return posts;
    }

    return posts.filter(
        (post) =>
            normalize(post.category) === normalize(category)
    );
}

export function filterByTag(posts = [], tag = "All") {
    if (!tag || tag === "All") {
        return posts;
    }

    const search = normalize(tag);

    return posts.filter((post) =>
        (post.tags || [])
            .map(normalize)
            .includes(search)
    );
}

export function sortPosts(
    posts = [],
    sort = "latest"
) {
    const sorted = [...posts];

    switch (sort) {
        case "oldest":
            return sorted.sort(
                (a, b) =>
                    new Date(a.date) - new Date(b.date)
            );

        case "title":
            return sorted.sort((a, b) =>
                a.title.localeCompare(b.title)
            );

        case "reading-time":
            return sorted.sort(
                (a, b) =>
                    parseInt(a.readingTime) -
                    parseInt(b.readingTime)
            );

        default:
            return sorted.sort(
                (a, b) =>
                    new Date(b.date) - new Date(a.date)
            );
    }
}

export function paginatePosts(
    posts = [],
    page = 1,
    perPage = 9
) {
    const currentPage = Math.max(1, Number(page));

    const totalPosts = posts.length;

    const totalPages = Math.max(
        1,
        Math.ceil(totalPosts / perPage)
    );

    const start = (currentPage - 1) * perPage;

    return {
        posts: posts.slice(start, start + perPage),
        currentPage,
        totalPages,
        totalPosts,
        hasPreviousPage: currentPage > 1,
        hasNextPage: currentPage < totalPages,
    };
}

export function getSearchSuggestions(
    posts = [],
    limit = 8
) {
    const suggestions = new Set();

    posts.forEach((post) => {
        if (post.category) {
            suggestions.add(post.category);
        }

        (post.tags || []).forEach((tag) =>
            suggestions.add(tag)
        );
    });

    return [...suggestions]
        .sort()
        .slice(0, limit);
}

export function getPopularTags(posts = []) {
    const counts = {};

    posts.forEach((post) => {
        (post.tags || []).forEach((tag) => {
            counts[tag] = (counts[tag] || 0) + 1;
        });
    });

    return Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([tag, count]) => ({
            tag,
            count,
        }));
}

export function getPopularCategories(posts = []) {
    const counts = {};

    posts.forEach((post) => {
        if (!post.category) return;

        counts[post.category] =
            (counts[post.category] || 0) + 1;
    });

    return Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([category, count]) => ({
            category,
            count,
        }));
}