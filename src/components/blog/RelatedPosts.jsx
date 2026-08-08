import Link from "next/link";
import BlogCard from "./BlogCard";
import { ArrowRight } from "lucide-react";

export default function RelatedPosts({ currentPost, posts = [], limit = 3 }) {
  if (!currentPost || !posts.length) return null;

  const relatedPosts = posts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      let score = 0;

      // Same category
      if (post.category === currentPost.category) {
        score += 10;
      }

      // Shared tags
      if (post.tags && currentPost.tags) {
        const sharedTags = post.tags.filter((tag) =>
          currentPost.tags.includes(tag)
        );

        score += sharedTags.length * 3;
      }

      return {
        ...post,
        score,
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;

      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, limit);

  if (!relatedPosts.length) return null;

  return (
    <section className="border-t border-slate-200 py-20 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Continue Reading
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Related Articles
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              Continue exploring hospitality technology with these expert
              articles chosen based on similar topics and categories.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {relatedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
