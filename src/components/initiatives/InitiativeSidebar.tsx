"use client";

import { useMemo, useState } from "react";

const recentPosts = [
  "If it is from Heaven — John 3:27 (KJV)",
  "Stronghold — Psalm 18:2",
  "You will be Rewarded — Hebrews 10:34-35",
  "My LOVE — Psalm 18:1",
  "The Mighty Terrible One! — Jeremiah 20:11",
];

const recentComments = [
  "Victoria Tsahia Menson on Nothing is impossible with God — Luke 1:37 (AMPC)",
  "Sain Muskambe on Nothing is impossible with God — Luke 1:37 (AMPC)",
  "Victoria Tsahia Menson on Daily Prayer - Think On These things!",
  "Sign up here on Daily Prayer - Think On These things!",
];

export default function InitiativeSidebar() {
  const [query, setQuery] = useState("");
  const term = query.trim().toLocaleLowerCase();
  const posts = useMemo(() => recentPosts.filter((item) => item.toLocaleLowerCase().includes(term)), [term]);
  const comments = useMemo(() => recentComments.filter((item) => item.toLocaleLowerCase().includes(term)), [term]);

  return (
    <aside aria-label="Recent activity" className="w-full text-[#2A0D33]">
      <label htmlFor="initiative-sidebar-search" className="mb-2 block text-[14px] font-medium">
        Search
      </label>
      <input
        id="initiative-sidebar-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search..."
        aria-describedby="sidebar-search-help"
        className="h-[51px] w-full rounded-[4px] border border-[#2A0D33]/50 bg-white px-4 text-[15px] outline-none placeholder:text-[#2A0D33]/55 focus:border-[#2A0D33] focus:ring-2 focus:ring-[#EEBF1C]/50"
      />
      <p id="sidebar-search-help" className="sr-only">Filter the recent posts and comments displayed below.</p>

      <section aria-labelledby="recent-posts-title" className="mt-7">
        <h2 id="recent-posts-title" className="text-[26px] font-normal leading-tight tracking-[-0.02em]">Recent Posts</h2>
        <ul className="mt-5 space-y-5 text-[14px] leading-[1.6]">
          {posts.map((post) => <li key={post}>{post}</li>)}
          {posts.length === 0 && <li className="text-[#2A0D33]/70">No matching posts.</li>}
        </ul>
      </section>

      <section aria-labelledby="recent-comments-title" className="mt-9">
        <h2 id="recent-comments-title" className="text-[26px] font-normal leading-tight tracking-[-0.02em]">Recent Comments</h2>
        <ul className="mt-5 space-y-5 text-[14px] leading-[1.6]">
          {comments.map((comment) => <li key={comment}>{comment}</li>)}
          {comments.length === 0 && <li className="text-[#2A0D33]/70">No matching comments.</li>}
        </ul>
      </section>
    </aside>
  );
}
