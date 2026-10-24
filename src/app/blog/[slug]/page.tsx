import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatBlogDate,
  getPublishedBlogPostBySlug,
  getPublishedBlogPosts,
} from "@/lib/blog/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedBlogPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedBlogPostBySlug(slug);

  return post
    ? { title: `${post.title} | Prayer.Social`, description: post.excerpt }
    : { title: "Blog post not found | Prayer.Social" };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPublishedBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-14 text-[#2A0D33] sm:px-8 md:px-10 lg:px-16 lg:pb-28 lg:pt-20 xl:px-24">
      <div className="max-w-[850px]">
        <Link
          href="/blog"
          className="inline-flex rounded-sm text-[14px] font-semibold transition-colors hover:text-[#a36d00] focus-visible:outline-2 focus-visible:outline-[#EEBF1C]"
        >
          ← Back to Blog
        </Link>

        <h1 className="mt-9 text-[36px] font-normal leading-[1.2] tracking-[-0.025em] sm:text-[47px]">
          {post.title}
        </h1>
        <p className="mt-4 text-[14px] leading-6 text-[#2A0D33]/75">
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          <span aria-hidden="true" className="px-2">·</span>
          {post.category}
        </p>

        <div className="relative mt-8 aspect-[1.8/1] w-full overflow-hidden rounded-[3px]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 767px) calc(100vw - 48px), 850px"
            className="object-cover"
          />
        </div>

        <div className="mt-9 space-y-6 text-[16px] leading-[1.85]">
          {post.body?.length ? (
            post.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <>
              <p>{post.excerpt.replace(/\.\.\.$/, "…")}</p>
              <p className="rounded-[5px] bg-[#FBF9FC] px-5 py-4 text-[14px] leading-6">
                This is the article preview from the Figma design. The full article text has not yet been added to this website.
              </p>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
