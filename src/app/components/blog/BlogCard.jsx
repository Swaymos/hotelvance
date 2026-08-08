import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogCard({ post, featured = false }) {
  if (!post) return null;

  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 ${
        featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      {/* Featured Image */}
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block overflow-hidden ${
          featured ? "min-h-[340px]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority={featured}
          sizes={
            featured
              ? "(max-width:1024px) 100vw, 50vw"
              : "(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          }
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-slate-950">
          {post.category}
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-col p-6 lg:p-8">
        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
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
          <h2
            className={`font-bold tracking-tight text-slate-900 transition group-hover:text-primary dark:text-white ${
              featured ? "text-3xl" : "text-2xl"
            }`}
          >
            {post.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-slate-600 dark:text-slate-300">
          {post.description}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
              {post.authorImage ? (
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-700">
                  {post.author?.charAt(0)}
                </div>
              )}
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {post.author}
              </p>

              <p className="text-xs text-slate-500">Hotevance Team</p>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
          >
            Read More
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}
