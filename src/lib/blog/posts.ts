/**
 * Temporary typed post source for the Prayer.Social Blog.
 * Replace these read functions with database queries when the admin dashboard
 * and publishing backend are implemented. Do not add untrusted HTML to posts.
 */
export type BlogSectionName = "inspiration" | "news";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  publishedAt: string; // ISO date, UTC
  category: string;
  excerpt: string;
  body?: string[]; // Full editorial text, once supplied/published
  sections: BlogSectionName[];
  status: "draft" | "published";
};

export const POSTS_PER_PAGE = 3;

/** All starter content visible in the Figma reference. */
const initialBlogPosts: BlogPost[] = [
  {
    id: "prayer-001",
    slug: "if-it-is-from-heaven-john-3-27",
    title: "If it is from Heaven — John 3:27 (KJV)",
    image: "/images/blog-image1.jpg",
    imageAlt: "Hands holding a wrapped gift tied with a red ribbon",
    publishedAt: "2026-07-14",
    category: "Daily Prayers",
    excerpt:
      "If it is from Heaven John 3:27 (KJV) 27 John answered and said, a man can receive nothing, except it be given him from heaven. Here's Your Prayer For Today Receive. Heavenly Father, I am before you today with a grateful and humble heart, recognizing the truth of your...",
    sections: ["inspiration", "news"],
    status: "published",
  },
  {
    id: "prayer-002",
    slug: "stronghold-psalm-18-2",
    title: "Stronghold — Psalm 18:2",
    image: "/images/blog-image2.jpg",
    imageAlt: "Historic stone fortress surrounded by green trees",
    publishedAt: "2026-06-11",
    category: "Daily Prayers",
    excerpt:
      "Stronghold Psalm 18:2 The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield[b] and the horn[c] of my salvation, my stronghold. Here's Your Prayer For Today My Horn of Salvation. Father, Blessed be your name forever and...",
    sections: ["inspiration", "news"],
    status: "published",
  },
  {
    id: "prayer-003",
    slug: "you-will-be-rewarded-hebrews-10-34-35",
    title: "You will be Rewarded — Hebrews 10:34-35",
    image: "/images/blog-image3.jpg",
    imageAlt: "Golden yellow background with decorative lettering and stars",
    publishedAt: "2026-06-10",
    category: "Daily Prayers",
    excerpt:
      "You will be Rewarded Hebrews 10:34-35 You suffered along with those in prison and joyfully accepted the confiscation of your property, because you knew that you yourselves had better and lasting possessions. 35 So do not throw away your...",
    sections: ["inspiration", "news"],
    status: "published",
  },
];

export function getPublishedBlogPosts(section?: BlogSectionName): BlogPost[] {
  return initialBlogPosts
    .filter((post) => post.status === "published")
    .filter((post) => (section ? post.sections.includes(section) : true))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getPublishedBlogPostBySlug(slug: string): BlogPost | undefined {
  return getPublishedBlogPosts().find((post) => post.slug === slug);
}

export function formatBlogDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
