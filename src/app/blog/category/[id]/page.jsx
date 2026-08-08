import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import BlogCard from "../../../components/blog/BlogCard";
import Breadcrumbs from "../../../components/blog/Breadcrumbs";
import Pagination from "../../../components/blog/Pagination";
import NewsletterCTA from "../../../components/blog/NewsletterCTA";

import {
  getCategories,
  getCategoryBySlug,
  getPostsByCategory,
  paginatePosts,
} from "../../../../lib/blog";

import { absoluteUrl } from "../../../../lib/seo";
import { breadcrumbSchema } from "../../../../lib/schema";

export const revalidate = 3600;

const POSTS_PER_PAGE = 9;

export async function generateStaticParams() {
  return getCategories().map((category) => ({
    id: category.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const category = getCategoryBySlug(id);

  if (!category) {
    return {
      title: "Category Not Found | Hotevance",
    };
  }

  return {
    title: `${category.name} | Hotevance Blog`,

    description: `Explore Hotevance articles about ${category.name}, hotel technology, hospitality IT, networking, and digital transformation.`,

    alternates: {
      canonical: absoluteUrl(`/blog/category/${category.slug}`),
    },

    openGraph: {
      title: `${category.name} | Hotevance Blog`,
      description: `Explore Hotevance articles about ${category.name}.`,
      url: absoluteUrl(`/blog/category/${category.slug}`),
      type: "website",
    },
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const { id } = await params;
  const query = await searchParams;

  const category = getCategoryBySlug(id);

  if (!category) {
    notFound();
  }

  const page = Math.max(1, Number(query?.page || 1));

  const categoryPosts = getPostsByCategory(category.name);

  const pagination = paginatePosts(categoryPosts, page, POSTS_PER_PAGE);

  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: category.name,
      href: `/blog/category/${category.slug}`,
    },
  ];

  return (
    <>
      <Script
        id="category-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <main>
        <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <Breadcrumbs items={breadcrumbs} />

            <div className="mt-10 max-w-3xl">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Blog Category
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                {category.name}
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Explore our latest insights, guides, and practical advice about{" "}
                {category.name}.
              </p>

              <p className="mt-4 text-sm text-slate-500">
                {pagination.totalPosts}{" "}
                {pagination.totalPosts === 1 ? "article" : "articles"}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          {pagination.posts.length > 0 ? (
            <>
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {pagination.posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>

              {pagination.totalPages > 1 && (
                <div className="mt-16">
                  <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-bold">No articles found</h2>

              <p className="mt-3 text-slate-600">
                No articles are currently available in this category.
              </p>

              <Link
                href="/blog"
                className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 font-semibold text-white"
              >
                View all articles
              </Link>
            </div>
          )}

          <div className="mt-24">
            <NewsletterCTA />
          </div>
        </section>
      </main>
    </>
  );
}
