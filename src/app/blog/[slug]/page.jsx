import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getPost, getPostSlugs, getAllPosts } from "../../../lib/blog";

import { parseMDX } from "../../../lib/mdx";

import { createBlogMetadata, absoluteUrl } from "../../../lib/seo";

import { articleSchema, breadcrumbSchema } from "../../../lib/schema";

import Breadcrumbs from "../../../components/blog/Breadcrumbs";
import ReadingProgress from "../../../components/blog/ReadingProgress";
import TOC from "../../../components/blog/TOC";
import ShareButtons from "../../../components/blog/ShareButtons";
import RelatedPosts from "../../../components/blog/RelatedPosts";

export const revalidate = 3600;

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return createBlogMetadata(post);
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const { content } = await parseMDX(post.content);

  const allPosts = getAllPosts();

  const breadcrumbs = [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: post.title,
      href: `/blog/${post.slug}`,
    },
  ];

  return (
    <>
      <ReadingProgress />

      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(post)),
        }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <main>
        <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <Breadcrumbs items={breadcrumbs} />

            <div className="mt-8">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                {post.category}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              {post.title}
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-600 dark:text-slate-400">
              {post.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>{post.author}</span>

              <span>•</span>

              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>

              <span>•</span>

              <span>{post.readingTime}</span>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article>
            {post.image && (
              <div className="mb-12 overflow-hidden rounded-3xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={675}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            )}

            <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-28">
              {content}
            </div>

            {/* <div className="mt-12">
              <ArticleTags tags={post.tags} />
            </div> */}

            <div className="mt-10">
              <ShareButtons
                title={post.title}
                description={post.description}
                url={absoluteUrl(`/blog/${post.slug}`)}
              />
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              <TOC />
            </div>
          </aside>
        </section>

        <RelatedPosts currentPost={post} posts={allPosts} />
      </main>
    </>
  );
}
