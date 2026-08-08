import RSS from "rss";
import { getAllPosts } from "./blog";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://hotevance.com";

export function generateRSSFeed() {
    const posts = getAllPosts();

    const feed = new RSS({
        title: "Hotevance Blog",
        description:
            "Insights on hotel Wi-Fi, GPON, IPTV, managed IT, cybersecurity, and hospitality technology.",
        feed_url: `${ SITE_URL }/rss.xml`,
        site_url: SITE_URL,
        image_url: `${ SITE_URL }/images/logo.png`,
        managingEditor: "info@hotevance.com (Hotevance)",
        webMaster: "info@hotevance.com (Hotevance)",
        language: "en",
        copyright: `© ${ new Date().getFullYear() } Hotevance`,
        pubDate: new Date(),
        ttl: 60,
        generator: "Next.js",
        docs: "https://www.rssboard.org/rss-specification",
    });

    posts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.description,
            url: `${ SITE_URL }/blog/${ post.slug }`,
            guid: `${ SITE_URL }/blog/${ post.slug }`,
            date: post.date,
            author: post.author || "Hotevance",
            categories: [
                post.category,
                ...(post.tags || []),
            ],
            enclosure: post.image
                ? {
                    url: `${ SITE_URL }${ post.image }`,
                    type: "image/jpeg",
                }
                : undefined,
        });
    });

    return feed.xml({ indent: true });
}