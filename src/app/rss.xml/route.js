export const runtime = "nodejs";

import { generateRSSFeed } from "../../lib/rss";

export async function GET() {
    try {
        const feed = generateRSSFeed();

        return new Response(feed, {
            headers: {
                "Content-Type":
                    "application/rss+xml; charset=utf-8",

                "Cache-Control":
                    "public, s-maxage=3600, stale-while-revalidate=86400",
            },
        });
    } catch (error) {
        console.error(
            "RSS generation failed:",
            error
        );

        return new Response(
            "Failed to generate RSS feed",
            {
                status: 500,
            }
        );
    }
}