
import type { Metadata } from "next";

import SearchPageClient from "@/components/search/SearchPageClient";

import {
  getPublishedBlogPosts,
  formatBlogDate,
} from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Search | Prayer.Social",
  description:
    "Search Prayer.Social for inspirational articles, daily prayers, and Christian devotional content.",
};

type SearchPageProps = {
  searchParams: Promise<{
    q?: string | string[];
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;

  const initialQuery =
    typeof params.q === "string" ? params.q : "Prayer";

  const posts = getPublishedBlogPosts().map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    date: formatBlogDate(post.publishedAt),
    category: post.category,
    excerpt: post.excerpt,
  }));

  return (
    <SearchPageClient
      initialQuery={initialQuery}
      posts={posts}
    />
  );
}
