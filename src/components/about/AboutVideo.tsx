"use client";

import { useRef } from "react";

// Set this to the real video URL when Prayer.Social supplies the video.
// Example: "/videos/about-prayer-social.mp4"
const ABOUT_VIDEO_SRC: string | null = null;

export default function AboutVideo() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  function openDialog() {
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    videoRef.current?.pause();
    dialogRef.current?.close();
  }

  return (
    <section
      id="about-video"
      aria-label="About Prayer.Social video"
      className="flex h-[455px] scroll-mt-6 items-center justify-center bg-[#2A0D33] px-6 lg:h-[660px]"
    >
      <button
        type="button"
        onClick={openDialog}
        className="inline-flex h-12 min-w-[158px] cursor-pointer items-center justify-center rounded-[5px] bg-white px-5 text-[14px] font-semibold text-[#2A0D33] transition-colors hover:bg-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEBF1C] lg:min-w-[95px]"
      >
        Play video
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => videoRef.current?.pause()}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        aria-labelledby="about-video-dialog-title"
        className="fixed inset-0 m-auto w-[calc(100%-32px)] max-w-[860px] rounded-xl border-0 bg-white p-0 text-[#2A0D33] shadow-2xl backdrop:bg-black/70"
      >
        <div className="p-5 sm:p-7">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2
              id="about-video-dialog-title"
              className="text-lg font-semibold"
            >
              About Prayer.Social
            </h2>
            <button
              type="button"
              onClick={closeDialog}
              className="rounded-md border border-[#2A0D33] px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A0D33]"
            >
              Close
            </button>
          </div>

          {ABOUT_VIDEO_SRC ? (
            <video
              ref={videoRef}
              controls
              playsInline
              autoPlay
              className="aspect-video w-full rounded-md bg-black"
            >
              <source src={ABOUT_VIDEO_SRC} type="video/mp4" />
              Your browser does not support this video.
            </video>
          ) : (
            <p className="py-8 text-base leading-7">
              The About Us video has not been added yet. Once the video is
              provided, it can play here without changing the page layout.
            </p>
          )}
        </div>
      </dialog>
    </section>
  );
}
