"use client";

import { useState } from "react";

/** Replace the notice with an actual accessible video player once the URL is supplied. */
export default function BlogVideoButton() {
  const [noticeOpen, setNoticeOpen] = useState(false);

  return (
    <div className="mt-7">
      <button
        type="button"
        onClick={() => setNoticeOpen((open) => !open)}
        aria-expanded={noticeOpen}
        className="inline-flex min-h-12 items-center justify-center rounded-[5px] border border-white bg-white px-6 text-[14px] font-semibold text-[#2A0D33] transition-colors hover:border-[#EEBF1C] hover:bg-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        Play video
      </button>
      {noticeOpen && (
        <p role="status" className="mt-3 max-w-md text-[14px] leading-6 text-white/90">
          The video for this section has not been uploaded yet.
        </p>
      )}
    </div>
  );
}
