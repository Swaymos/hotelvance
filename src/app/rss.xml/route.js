import { generateRSSFeed } from "@/lib/rss";

export async function GET() {
    try {
        const rss = generateRSSFeed();

        return new Response(rss, {
            status: 200,
            headers: {
                "Content-Type": "application/rss+xml; charset=utf-8",
                "Cache-Control":
                    "public, s-maxage=3600, stale-while-revalidate=86400",
            },
        });
    } catch (error) {
        console.error("Failed to generate RSS feed:", error);

        return new Response("Failed to generate RSS feed", {
            status: 500,
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        });
    }
}