import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

import Image from "next/image";
import Link from "next/link";

const prettyCodeOptions = {
    theme: "github-dark-default",
    keepBackground: false,
};

const mdxComponents = {
    img: ({ alt = "", ...props }) => (
        <span className="my-8 block overflow-hidden rounded-2xl">
            <Image
                alt={alt}
                width={1200}
                height={675}
                className="h-auto w-full rounded-2xl"
                sizes="100vw"
                {...props}
            />
        </span>
    ),

    a: ({ href = "", children, ...props }) => {
        const external = href.startsWith("http");

        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
                    {...props}
                >
                    {children}
                </a>
            );
        }

        return (
            <Link
                href={href}
                className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
            >
                {children}
            </Link>
        );
    },

    table: (props) => (
        <div className="my-8 overflow-x-auto">
            <table
                className="w-full border-collapse"
                {...props}
            />
        </div>
    ),

    th: (props) => (
        <th
            className="border border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold dark:border-slate-700 dark:bg-slate-800"
            {...props}
        />
    ),

    td: (props) => (
        <td
            className="border border-slate-300 px-4 py-3 dark:border-slate-700"
            {...props}
        />
    ),

    blockquote: (props) => (
        <blockquote
            className="my-8 border-l-4 border-primary pl-6 italic text-slate-600 dark:text-slate-300"
            {...props}
        />
    ),

    hr: () => (
        <hr className="my-12 border-slate-300 dark:border-slate-700" />
    ),

    pre: (props) => (
        <pre
            className="my-8 overflow-x-auto rounded-2xl"
            {...props}
        />
    ),

    code: (props) => (
        <code {...props} />
    ),
};

export async function parseMDX(source) {
    const { content, frontmatter } = await compileMDX({
        source,

        options: {
            parseFrontmatter: true,

            mdxOptions: {
                remarkPlugins: [
                    remarkGfm,
                    remarkBreaks,
                ],

                rehypePlugins: [
                    rehypeSlug,

                    [
                        rehypeAutolinkHeadings,
                        {
                            behavior: "wrap",
                        },
                    ],

                    [
                        rehypePrettyCode,
                        prettyCodeOptions,
                    ],
                ],
            },
        },

        components: mdxComponents,
    });

    return {
        content,
        frontmatter,
    };
}

export { mdxComponents };