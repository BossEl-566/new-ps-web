import type { Metadata } from "next";
import BlogSection from "@/components/blog/BlogSection";
import BlogVideoButton from "@/components/blog/BlogVideoButton";
import StayInTouch from "@/components/home/StayInTouch";
import { getPublishedBlogPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog | Prayer.Social",
  description:
    "Read daily prayers, inspirational pieces, and community stories from Prayer.Social.",
};

export default function BlogPage() {
  return (
    <>
      {/* Header and Footer already live in src/app/layout.tsx. */}
      <section aria-labelledby="blog-hero-title" className="w-full bg-[#2A0D33] text-white">
        <div className="mx-auto flex min-h-[315px] w-full max-w-[1440px] flex-col items-start justify-center px-6 py-[56px] sm:px-8 md:px-10 lg:min-h-[345px] lg:px-16 xl:px-24">
          <h1
            id="blog-hero-title"
            className="text-[41px] font-normal leading-[1.13] tracking-[-0.035em] sm:text-[52px] lg:text-[64px]"
          >
            Watch &amp; Read
          </h1>
          <p className="mt-6 max-w-[650px] text-[15px] leading-[1.65] sm:text-[17px]">
            Great Inspiration Pieces Curated For Your Reading Pleasure.
          </p>
          <BlogVideoButton />
        </div>
      </section>

      <BlogSection
        sectionId="latest-inspirational-pieces"
        heading="Latest Inspirational Pieces"
        posts={getPublishedBlogPosts("inspiration")}
        tone="white"
      />

      <BlogSection
        sectionId="news-and-stories"
        heading="News & Stories"
        posts={getPublishedBlogPosts("news")}
        tone="light"
      />

      <StayInTouch />
    </>
  );
}
