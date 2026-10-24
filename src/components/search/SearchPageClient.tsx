
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type SearchPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

type SearchPageClientProps = {
  initialQuery: string;
  posts: SearchPost[];
};

export default function SearchPageClient({
  initialQuery,
  posts,
}: SearchPageClientProps) {
  const [query, setQuery] = useState(initialQuery);

  // Filter blog posts as the visitor types.
  const filteredPosts = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return posts;
    }

    return posts.filter((post) => {
      const searchableContent = [
        post.title,
        post.category,
        post.excerpt,
      ]
        .join(" ")
        .toLowerCase();

      return searchableContent.includes(searchTerm);
    });
  }, [query, posts]);

  return (
    <section
      aria-labelledby="search-page-title"
      className="
        w-full
        bg-white
        text-[#2A0D33]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          pb-12
          pt-14
          sm:px-8
          md:px-10
          md:pt-12
          lg:px-16
          lg:pb-14
          xl:px-24
        "
      >
        {/* PAGE TITLE */}
        <h1
          id="search-page-title"
          className="
            text-[29px]
            font-normal
            leading-[1.25]
            tracking-[-0.025em]
            sm:text-[35px]
            lg:text-[40px]
          "
        >
          Search Prayer Social
        </h1>

        {/* SEARCH INPUT */}
        <div className="mt-7 max-w-[740px]">
          <label
            htmlFor="prayer-social-search"
            className="
              block
              text-[14px]
              font-semibold
              leading-6
            "
          >
            Search
          </label>

          <input
            id="prayer-social-search"
            type="search"
            name="q"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search posts..."
            autoComplete="off"
            className="
              mt-2
              block
              h-[58px]
              w-full
              min-w-0
              rounded-[7px]
              border
              border-[#2A0D33]/65
              bg-white
              px-4
              text-[16px]
              font-normal
              text-[#2A0D33]
              outline-none
              transition-colors
              duration-200
              placeholder:text-[#2A0D33]/60
              focus:border-[#ED9322]
              focus:ring-2
              focus:ring-[#ED9322]/15
              md:h-[52px]
            "
          />
        </div>

        {/* SEARCH RESULTS */}
        <section
          aria-labelledby="recent-posts-title"
          className="mt-9 md:mt-7"
        >
          <h2
            id="recent-posts-title"
            className="
              text-[27px]
              font-normal
              leading-[1.3]
              tracking-[-0.025em]
              md:text-[25px]
            "
          >
            Recent posts
          </h2>

          {/* POSTS LIST */}
          <div
            aria-live="polite"
            aria-atomic="false"
            className="mt-9 max-w-[820px] md:mt-7"
          >
            {filteredPosts.length > 0 ? (
              <ul className="space-y-9">
                {filteredPosts.map((post) => (
                  <li key={post.id}>
                    <article>
                      {/* POST TITLE */}
                      <h3
                        className="
                          text-[26px]
                          font-normal
                          leading-[1.4]
                          tracking-[-0.025em]
                          md:text-[24px]
                        "
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          className="
                            transition-colors
                            duration-200
                            hover:text-[#BD8614]
                            focus-visible:rounded-sm
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-[#EEBF1C]
                          "
                        >
                          {post.title}
                        </Link>
                      </h3>

                      {/* POST METADATA */}
                      <p
                        className="
                          mt-7
                          text-[14px]
                          font-normal
                          leading-6
                          text-[#2A0D33]
                          md:text-[13px]
                        "
                      >
                        <time>
                          {post.date}
                        </time>

                        <span
                          aria-hidden="true"
                          className="mx-1"
                        >
                          ·
                        </span>

                        <span>{post.category}</span>
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-3">
                <h3
                  className="
                    text-[22px]
                    font-normal
                    leading-snug
                  "
                >
                  No matching posts found
                </h3>

                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-7
                    text-[#2A0D33]/75
                  "
                >
                  We couldn&apos;t find any posts
                  matching &quot;{query.trim()}&quot;.
                  Try another search term.
                </p>

                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="
                    mt-5
                    cursor-pointer
                    text-[14px]
                    font-semibold
                    underline
                    underline-offset-4
                    transition-colors
                    hover:text-[#BD8614]
                  "
                >
                  View all posts
                </button>
              </div>
            )}
          </div>
        </section>

        {/* BACK TO HOME */}
        <div className="mt-9 md:mt-8">
          <Link
            href="/"
            className="
              inline-flex
              min-h-[52px]
              items-center
              justify-center
              rounded-[8px]
              border
              border-[#2A0D33]
              bg-white
              px-5
              text-[14px]
              font-semibold
              text-[#2A0D33]
              transition-colors
              duration-200
              hover:border-[#EEBF1C]
              hover:bg-[#EEBF1C]/15
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#EEBF1C]
            "
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
