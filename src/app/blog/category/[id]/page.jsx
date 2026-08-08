import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

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
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Blog Category
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            {category}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore our latest articles, insights, and practical guidance about{" "}
            {category.toLowerCase()} and hotel technology.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          {categoryPosts.length === 0 ? (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-bold text-slate-900">
                No articles found
              </h2>

              <p className="mt-3 text-slate-600">
                There are currently no articles in this category.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categoryPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <span className="text-sm font-semibold text-blue-600">
                    {post.category}
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-slate-950">
                    {post.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
