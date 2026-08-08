import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, TrendingUp } from "lucide-react";

export default function FeaturedPost({ post }) {
  if (!post) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <TrendingUp size={16} />
              Featured Article
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Editor's Pick
            </h2>

            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
              Explore our latest expert insight on hospitality technology,
              networking, guest experience, and digital transformation.
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden items-center gap-2 font-semibold text-primary transition hover:gap-3 md:inline-flex"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Card */}
        <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 lg:grid lg:grid-cols-2">
          {/* Image */}
          <Link
            href={`/blog/${post.slug}`}
            className="relative block min-h-[320px] overflow-hidden lg:min-h-[520px]"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width:1024px)100vw,50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            <span className="absolute left-6 top-6 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-slate-950">
              {post.category}
            </span>
          </Link>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 lg:p-14">
            {/* Meta */}
            <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {post.date}
              </span>

              <span className="flex items-center gap-2">
                <Clock size={16} />
                {post.readingTime}
              </span>
            </div>

            {/* Title */}
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 transition group-hover:text-primary dark:text-white lg:text-5xl">
                {post.title}
              </h2>
            </Link>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {post.description}
            </p>

            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-8 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                  {post.authorImage ? (
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-semibold text-slate-700">
                      {post.author?.charAt(0)}
                    </div>
                  )}
                </div>

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {post.author}
                  </p>

                  <p className="text-sm text-slate-500">
                    Hospitality Technology Expert
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-slate-950 transition hover:gap-3 hover:brightness-110"
              >
                Read Full Article
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </article>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold text-primary"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
