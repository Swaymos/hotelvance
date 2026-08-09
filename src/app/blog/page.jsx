import Script from "next/script";

import BlogHero from "../../components/blog/BlogHero";
import FeaturedPost from "../../components/blog/FeaturedPost";
import BlogCard from "../../components/blog/BlogCard";
import Search from "../../components/blog/Search";
import Categories from "../../components/blog/Categories";
import Pagination from "../../components/blog/Pagination";

import {
  getAllPosts,
  getFeaturedPosts,
  getCategories,
  paginatePosts,
} from "../../lib/blog";

import { createBlogMetadata, absoluteUrl } from "../../lib/seo";

import { websiteSchema, breadcrumbSchema } from "../../lib/schema";

export const revalidate = 3600;

const POSTS_PER_PAGE = 9;

/*
|--------------------------------------------------------------------------
| Metadata
|--------------------------------------------------------------------------
*/

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;

  const page = Number(params?.page || 1);
  const search = params?.search?.trim() || "";
  const category = params?.category?.trim() || "";

  const titleParts = [];

  if (search) {
    titleParts.push(`Search: ${search}`);
  }

  if (category) {
    titleParts.push(category);
  }

  if (page > 1) {
    titleParts.push(`Page ${page}`);
  }

  const title =
    titleParts.length > 0
      ? `${titleParts.join(" | ")} | Hotevance Blog`
      : "Hotel Technology Blog | Hotevance";

  const description =
    search || category
      ? `Explore Hotevance articles about ${[search, category]
          .filter(Boolean)
          .join(", ")}.`
      : "Expert insights on hotel Wi-Fi, GPON fiber, IPTV, PMS integration, managed IT, networking, and hospitality technology.";

  return {
    title,

    description,

    keywords: [
      "hotel technology blog",
      "hotel technology",
      "hotel Wi-Fi",
      "hotel GPON",
      "hotel IPTV",
      "hotel PMS integration",
      "hotel networking",
      "managed IT for hotels",
      "hospitality technology",
      "hotel IT",
    ],

    alternates: {
      canonical: "/blog",
    },

    openGraph: {
      title,

      description,

      url: "/blog",

      siteName: "Hotevance",

      locale: "en_NG",

      type: "website",

      images: [
        {
          url: "/images/Hotels.png",
          width: 1200,
          height: 630,
          alt: "Hotevance Hotel Technology Blog",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: ["/images/Hotels.png"],
    },

    robots: {
      index: !search && !category && page === 1,
      follow: true,
    },
  };
}

/*
|--------------------------------------------------------------------------
| Blog Page
|--------------------------------------------------------------------------
*/

export default async function BlogPage({ searchParams }) {
  /*
   * Next.js 16:
   * searchParams is a Promise and MUST be awaited.
   */
  const params = await searchParams;

  const pageParam = params?.page;
  const searchParam = params?.search;
  const categoryParam = params?.category;

  const page = Math.max(1, Number(pageParam || 1));

  const search = String(searchParam || "").trim();

  const activeCategory = String(categoryParam || "All").trim();

  /*
  |--------------------------------------------------------------------------
  | Get Posts
  |--------------------------------------------------------------------------
  */

  const allPosts = getAllPosts();

  /*
  |--------------------------------------------------------------------------
  | Featured Post
  |--------------------------------------------------------------------------
  */

  const featuredPosts = getFeaturedPosts(1);

  const featured = featuredPosts.length > 0 ? featuredPosts[0] : null;

  /*
  |--------------------------------------------------------------------------
  | Filter Posts
  |--------------------------------------------------------------------------
  */

  let posts = [...allPosts];

  /*
   * Search
   *
   * Searches:
   * - title
   * - description
   * - category
   * - tags
   */
  if (search) {
    const query = search.toLowerCase();

    posts = posts.filter((post) => {
      const title = post.title?.toLowerCase() || "";

      const description = post.description?.toLowerCase() || "";

      const category = post.category?.toLowerCase() || "";

      const tags = Array.isArray(post.tags)
        ? post.tags.join(" ").toLowerCase()
        : "";

      return (
        title.includes(query) ||
        description.includes(query) ||
        category.includes(query) ||
        tags.includes(query)
      );
    });
  }

  /*
   * Category filtering
   */
  if (activeCategory && activeCategory !== "All") {
    posts = posts.filter((post) => post.category === activeCategory);
  }

  /*
  |--------------------------------------------------------------------------
  | Featured Post Handling
  |--------------------------------------------------------------------------
  |
  | Don't display the featured post twice
  | on the first/default page.
  |
  */

  const showingDefaultBlog = !search && activeCategory === "All";

  if (featured && page === 1 && showingDefaultBlog) {
    posts = posts.filter((post) => post.slug !== featured.slug);
  }

  /*
  |--------------------------------------------------------------------------
  | Pagination
  |--------------------------------------------------------------------------
  */

  const pagination = paginatePosts(posts, page, POSTS_PER_PAGE);

  const paginatedPosts = pagination.posts;

  const currentPage = pagination.currentPage;

  const totalPages = pagination.totalPages;

  /*
  |--------------------------------------------------------------------------
  | Categories
  |--------------------------------------------------------------------------
  */

  const categories = [
    {
      name: "All",
      slug: "all",
      count: allPosts.length,
    },
    ...getCategories(),
  ];

  /*
  |--------------------------------------------------------------------------
  | Structured Data
  |--------------------------------------------------------------------------
  */

  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];

  return (
    <>
      {/* Website Schema */}

      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema()),
        }}
      />

      {/* Breadcrumb Schema */}

      <Script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <BlogHero />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-16">
          {/* Search Result Heading */}

          {(search || activeCategory !== "All") && (
            <div className="mb-10">
              <p className="text-sm font-medium text-primary">
                {search ? `Search results` : `Category`}
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {search ? `Results for "${search}"` : activeCategory}
              </h2>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {posts.length} {posts.length === 1 ? "article" : "articles"}{" "}
                found
              </p>
            </div>
          )}

          {/* Featured Post */}

          {featured && page === 1 && showingDefaultBlog && (
            <section className="mb-20">
              <FeaturedPost post={featured} />
            </section>
          )}

          {/* Articles */}

          {paginatedPosts.length > 0 ? (
            <>
              <section
                aria-label="Blog articles"
                className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
              >
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </section>

              {/* Pagination */}

              {totalPages > 1 && (
                <div className="mt-16">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                  />
                </div>
              )}
            </>
          ) : (
            /* Empty State */

            <section className="rounded-3xl border border-dashed border-slate-300 px-6 py-24 text-center dark:border-slate-700">
              <div className="mx-auto max-w-xl">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  No articles found
                </h2>

                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  {search
                    ? `We couldn't find any articles matching "${search}". Try another search term.`
                    : activeCategory !== "All"
                    ? `There are currently no articles in the "${activeCategory}" category.`
                    : "There are currently no articles available."}
                </p>

                {search && (
                  <a
                    href="/blog"
                    className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    View all articles
                  </a>
                )}
              </div>
            </section>
          )}
        </section>
      </main>
    </>
  );
}
