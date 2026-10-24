"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  POSTS_PER_PAGE,
  formatBlogDate,
  type BlogPost,
} from "@/lib/blog/posts";

type BlogSectionProps = {
  sectionId: string;
  heading: string;
  posts: BlogPost[];
  tone: "white" | "light";
};

function BlogCard({ post }: { post: BlogPost }) {
  const href = `/blog/${post.slug}`;

  return (
    <article className="flex h-full min-w-0 flex-col items-start text-[#2A0D33]">
      <Link
        href={href}
        aria-label={`Read ${post.title}`}
        className="group relative block aspect-[1.8/1] w-full overflow-hidden rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A0D33]"
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 45vw, (max-width: 1439px) 29vw, 390px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.035]"
        />
      </Link>

      <h3 className="mt-5 text-[23px] font-normal leading-[1.35] tracking-[-0.025em] md:text-[24px]">
        <Link
          href={href}
          className="rounded-sm transition-colors hover:text-[#b2790c] focus-visible:outline-2 focus-visible:outline-[#EEBF1C]"
        >
          {post.title}
        </Link>
      </h3>

      <p className="mt-4 text-[12px] leading-5 text-[#2A0D33]/85">
        <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
        <span aria-hidden="true" className="px-2">·</span>
        {post.category}
      </p>

      <p className="mt-4 flex-1 text-[14px] leading-[1.7] md:text-[15px]">
        {post.excerpt}
      </p>

      <Link
        href={href}
        className="mt-5 inline-flex min-h-[47px] items-center justify-center rounded-[5px] border border-[#2A0D33] px-6 text-[13px] font-semibold transition-colors hover:border-[#EEBF1C] hover:bg-[#EEBF1C]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A0D33]"
      >
        Read more
      </Link>
    </article>
  );
}

export default function BlogSection({
  sectionId,
  heading,
  posts,
  tone,
}: BlogSectionProps) {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const visiblePosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  function goToPage(nextPage: number) {
    setPage(nextPage);
    if (typeof window !== "undefined") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const buttonClasses =
    "inline-flex min-h-[48px] items-center justify-center rounded-[5px] border border-[#2A0D33] px-5 text-[13px] font-semibold text-[#2A0D33] transition-colors hover:bg-[#EEBF1C]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A0D33] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-transparent";

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      aria-labelledby={`${sectionId}-title`}
      className={`w-full scroll-mt-4 py-[70px] text-[#2A0D33] md:pb-[78px] md:pt-[72px] ${tone === "light" ? "bg-[#FBF9FC]" : "bg-white"}`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em]">Read</p>
        <h2
          id={`${sectionId}-title`}
          className="mb-8 mt-7 text-[30px] font-normal leading-[1.25] tracking-[-0.025em] sm:text-[36px] lg:text-[39px]"
        >
          {heading}
        </h2>

        {visiblePosts.length ? (
          <div className="grid min-w-0 grid-cols-1 items-stretch gap-x-7 gap-y-12 md:grid-cols-3">
            {visiblePosts.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
        ) : (
          <p className="text-[15px]">No published posts in this section yet.</p>
        )}

        <nav aria-label={`${heading} pagination`} className="mt-9 flex flex-wrap gap-3">
          {page > 1 && (
            <button type="button" onClick={() => goToPage(page - 1)} className={buttonClasses}>
              » Newer entries
            </button>
          )}
          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages}
            title={page >= totalPages ? "No older entries have been published yet" : "Show older entries"}
            className={buttonClasses}
          >
            « Older entries
          </button>
        </nav>
      </div>
    </section>
  );
}
