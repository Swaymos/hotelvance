import Script from "next/script";
import { notFound } from "next/navigation";

import BlogHero from "@/components/blog/BlogHero";
import BlogCard from "@/components/blog/BlogCard";
import Search from "@/components/blog/Search";
import Pagination from "@/components/blog/Pagination";
import NewsletterCTA from "@/components/blog/NewsletterCTA";
import Tags from "@/components/blog/Tags";

import { getTagBySlug, getTagSlugs, getTags, getPostsByTag } from "@/lib/blog";

import { searchPosts, paginatePosts } from "@/lib/search";

import { createTagMetadata } from "@/lib/seo";

import { breadcrumbSchema } from "@/lib/schema";

export const revalidate = 3600;

const POSTS_PER_PAGE = 9;

export async function generateStaticParams() {
  return getTagSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const tag = getTagBySlug(params.slug);

  if (!tag) {
    return {
      title: "Tag Not Found",
    };
  }

  return createTagMetadata(tag.name);
}

export default async function TagPage({ params, searchParams }) {
  const tag = getTagBySlug(params.slug);

  if (!tag) {
    notFound();
  }

  const page = Number(searchParams?.page || 1);
  const query = searchParams?.search || "";

  let posts = getPostsByTag(tag.name);

  if (query) {
    posts = searchPosts(posts, query);
  }

  const {
    posts: paginatedPosts,
    currentPage,
    totalPages,
    totalPosts,
  } = paginatePosts(posts, page, POSTS_PER_PAGE);

  const tags = getTags();

  const breadcrumb = breadcrumbSchema([
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: tag.name,
      href: `/blog/tag/${tag.slug}`,
    },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb),
        }}
      />

      <BlogHero
        title={`#${tag.name}`}
        subtitle={`${totalPosts} article${
          totalPosts === 1 ? "" : "s"
        } tagged with "${tag.name}".`}
      />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Search />

          <Tags tags={tags} activeTag={tag.name} />
        </div>

        {paginatedPosts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 py-24 text-center dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              No articles found
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              No posts match this tag and search criteria.
            </p>
          </div>
        ) : (
          <>
            <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </section>

            {totalPages > 1 && (
              <div className="mt-16">
                <Pagination currentPage={currentPage} totalPages={totalPages} />
              </div>
            )}
          </>
        )}

        <div className="mt-24">
          <NewsletterCTA />
        </div>
      </main>
    </>
  );
}
