import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { getAllPosts } from "../../../../lib/blog";

export const dynamicParams = true;

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  const categories = [
    ...new Set(
      posts
        .map((post) => post.category)
        .filter(
          (category) =>
            typeof category === "string" && category.trim().length > 0
        )
    ),
  ];

  return categories.map((category) => ({
    id: slugify(category),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const posts = getAllPosts();

  const category = posts
    .map((post) => post.category)
    .find((category) => slugify(category) === id);

  if (!category) {
    return {
      title: "Category Not Found | Hotevance",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${category} | Hotevance Blog`,
    description: `Explore Hotevance articles about ${category}, hotel technology, hospitality IT, and digital infrastructure.`,
    alternates: {
      canonical: `/blog/category/${id}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { id } = await params;

  const posts = getAllPosts();

  const category = posts
    .map((post) => post.category)
    .find((category) => slugify(category) === id);

  if (!category) {
    notFound();
  }

  const categoryPosts = posts.filter((post) => slugify(post.category) === id);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Category Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Hotel Technology Insights
            </div>

            {/* Heading */}
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {category}
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Explore our latest articles, insights, and practical guidance
              about{" "}
              <span className="font-medium text-primary">
                {category.toLowerCase()}
              </span>{" "}
              and hotel technology.
            </p>

            {/* Bottom accent */}
            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-primary" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          {categoryPosts.length === 0 ? (
            <div className="py-16 text-center">
              <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-950">
                  No articles yet
                </h2>

                <p className="mt-3 text-slate-600">
                  There are currently no articles in this category.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categoryPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
                >
                  {/* Blog Image */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block aspect-[16/9] overflow-hidden bg-slate-100"
                  >
                    <Image
                      src={post.image || "/images/blog/Hotels.png"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                    {/* Category */}
                    <div className="absolute left-5 top-5">
                      <span className="inline-flex rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-7">
                    {/* Date */}
                    {post.date && (
                      <p className="text-sm font-medium text-primary">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    )}

                    {/* Title */}
                    <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-primary">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    {/* Description */}
                    <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                      {post.description}
                    </p>

                    {/* Read More */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
