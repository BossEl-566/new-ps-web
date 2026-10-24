
"use client";

import Link from "next/link";
import { useState } from "react";

const recentPosts = [
  {
    title: "If it is from Heaven — John 3:27 (KJV)",
    href: "/blog/if-it-is-from-heaven-john-3-27",
  },
  {
    title: "Stronghold — Psalm 18:2",
    href: "/blog/stronghold-psalm-18-2",
  },
  {
    title: "You will be Rewarded — Hebrews 10:34-35",
    href: "/blog/you-will-be-rewarded-hebrews-10-34-35",
  },
  {
    title: "My LOVE — Psalm 18:1",
    href: null,
  },
  {
    title: "The Mighty Terrible One! — Jeremiah 20:11",
    href: null,
  },
];

const recentComments = [
  "Victoria Tachie-Menson on Nothing is impossible with God — Luke 1:37 (AMPC)",
  "Sain Muskamobo on Nothing is impossible with God — Luke 1:37 (AMPC)",
  "Victoria Tachie-Menson on Daily Prayer - Think On These things!",
  "Sign up here on Daily Prayer - Think On These things!",
];

export default function ArticleSidebar() {
  const [search, setSearch] = useState("");

  const normalizedSearch = search.trim().toLowerCase();

  const filteredPosts = recentPosts.filter((post) =>
    post.title.toLowerCase().includes(normalizedSearch)
  );

  const filteredComments = recentComments.filter((comment) =>
    comment.toLowerCase().includes(normalizedSearch)
  );

  return (
    <aside
      className="min-w-0 w-full text-[#2A0D33]"
      aria-label="Blog sidebar"
    >
      {/* SEARCH */}
      <div>
        <label
          htmlFor="article-search"
          className="mb-2 block text-[14px] font-semibold"
        >
          Search
        </label>

        <input
          id="article-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search..."
          className="
            h-[52px]
            w-full
            rounded-[5px]
            border
            border-[#2A0D33]/60
            bg-white
            px-4
            text-[14px]
            text-[#2A0D33]
            outline-none
            transition-colors
            placeholder:text-[#2A0D33]/60
            focus:border-[#ED9322]
            focus:ring-2
            focus:ring-[#ED9322]/20
          "
        />
      </div>

      {/* RECENT POSTS */}
      <section className="mt-8">
        <h2 className="text-[25px] font-normal leading-[1.3]">
          Recent Posts
        </h2>

        <ul className="mt-6 flex flex-col gap-6">
          {filteredPosts.map((post) => (
            <li key={post.title}>
              {post.href ? (
                <Link
                  href={post.href}
                  className="
                    text-[14px]
                    leading-[1.7]
                    transition-colors
                    duration-200
                    hover:text-[#C58C15]
                    focus-visible:rounded-sm
                    focus-visible:outline-2
                    focus-visible:outline-[#EEBF1C]
                  "
                >
                  {post.title}
                </Link>
              ) : (
                <span className="text-[14px] leading-[1.7]">
                  {post.title}
                </span>
              )}
            </li>
          ))}

          {filteredPosts.length === 0 && (
            <li className="text-[14px] text-[#2A0D33]/65">
              No matching posts found.
            </li>
          )}
        </ul>
      </section>

      {/* RECENT COMMENTS */}
      <section className="mt-9">
        <h2 className="text-[25px] font-normal leading-[1.3]">
          Recent Comments
        </h2>

        <ul className="mt-6 flex flex-col gap-6">
          {filteredComments.map((comment) => (
            <li
              key={comment}
              className="text-[14px] leading-[1.7]"
            >
              {comment}
            </li>
          ))}

          {filteredComments.length === 0 && (
            <li className="text-[14px] text-[#2A0D33]/65">
              No matching comments found.
            </li>
          )}
        </ul>
      </section>
    </aside>
  );
}
