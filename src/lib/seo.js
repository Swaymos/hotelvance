const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://hotevance.com";

const SITE_NAME = "Hotevance";

const DEFAULT_TITLE =
    "Hotevance | Hotel Technology Solutions";

const DEFAULT_DESCRIPTION =
    "Hotevance helps hotels improve guest experiences through enterprise Wi-Fi, GPON fiber, IPTV, managed IT services, cybersecurity, and hospitality technology solutions.";

const DEFAULT_IMAGE = `${ SITE_URL }/images/og-default.jpg`;

const TWITTER_HANDLE = "@Hotevance";

export function absoluteUrl(path = "") {
    if (!path) return SITE_URL;

    if (path.startsWith("http")) {
        return path;
    }

    return `${ SITE_URL }${ path }`;
}

export function createMetadata({
    title,
    description = DEFAULT_DESCRIPTION,
    image = DEFAULT_IMAGE,
    url = "/",
    keywords = [],
    noIndex = false,
    type = "website",
} = {}) {
    const pageTitle = title
        ? `${ title } | ${ SITE_NAME }`
        : DEFAULT_TITLE;

    const canonical = absoluteUrl(url);

    const imageUrl = absoluteUrl(image);

    return {
        metadataBase: new URL(SITE_URL),

        title: pageTitle,

        description,

        keywords,

        alternates: {
            canonical,
        },

        robots: {
            index: !noIndex,
            follow: !noIndex,

            googleBot: {
                index: !noIndex,
                follow: !noIndex,

                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },

        openGraph: {
            type,

            url: canonical,

            siteName: SITE_NAME,

            title: pageTitle,

            description,

            locale: "en_US",

            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: pageTitle,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",

            creator: TWITTER_HANDLE,

            title: pageTitle,

            description,

            images: [imageUrl],
        },
    };
}

export function createBlogMetadata(post) {
    return createMetadata({
        title: post.title,

        description: post.description,

        image: post.image,

        url: `/blog/${ post.slug }`,

        keywords: [
            post.category,
            ...(post.tags || []),
        ],

        type: "article",
    });
}

export function createServiceMetadata(service) {
    return createMetadata({
        title: service.title,

        description: service.description,

        image: service.image,

        url: `/services/${ service.slug }`,

        keywords: service.keywords || [],

        type: "website",
    });
}

export function createCategoryMetadata(category) {
    return createMetadata({
        title: `${ category } Articles`,

        description: `Browse all Hotevance articles about ${ category }.`,

        url: `/blog/category/${ encodeURIComponent(
            category.toLowerCase().replace(/\s+/g, "-")
        ) }`,

        keywords: [category],
    });
}

export function createTagMetadata(tag) {
    return createMetadata({
        title: `${ tag } Articles`,

        description: `Explore Hotevance articles tagged with ${ tag }.`,

        url: `/blog/tag/${ encodeURIComponent(
            tag.toLowerCase().replace(/\s+/g, "-")
        ) }`,

        keywords: [tag],
    });
}

export function createAuthorMetadata(author) {
    return createMetadata({
        title: author.name,

        description: author.bio,

        image: author.image,

        url: `/authors/${ author.slug }`,

        keywords: author.expertise || [],
    });
}

export function createPaginationMetadata({
    currentPage,
    basePath = "/blog",
}) {
    if (currentPage <= 1) {
        return createMetadata({
            title: "Blog",
            url: basePath,
        });
    }

    return createMetadata({
        title: `Blog - Page ${ currentPage }`,
        url: `${ basePath }?page=${ currentPage }`,
    });
}

export function createSearchMetadata(query) {
    return createMetadata({
        title: `Search: ${ query }`,

        description: `Search results for "${ query }" on Hotevance.`,

        url: `/blog?search=${ encodeURIComponent(query) }`,

        noIndex: true,
    });
}