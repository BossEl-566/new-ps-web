"use client";

import { useRef } from "react";

type VideoPlaceholderProps = {
  title: string;
  variant?: "panel" | "button";
  id?: string;
};

/**
 * Video asset URLs have not been provided yet. This presents the Figma video
 * surfaces without pretending a video can be played.
 * Replace this component's dialog with an accessible video player once media
 * is available.
 */
export default function VideoPlaceholder({
  title,
  variant = "panel",
  id,
}: VideoPlaceholderProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const button = (
    <button
      type="button"
      onClick={() => dialogRef.current?.showModal()}
      aria-label={`Play video: ${title}`}
      className="inline-flex h-[48px] min-w-[108px] cursor-pointer items-center justify-center rounded-[5px] bg-white px-5 text-[14px] font-semibold text-[#2A0D33] transition-colors duration-200 hover:bg-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEBF1C]"
    >
      Play video
    </button>
  );

  return (
    <>
      {variant === "button" ? (
        button
      ) : (
        <div
          id={id}
          className="flex aspect-video w-full items-center justify-center bg-[#2A0D33]"
        >
          {button}
        </div>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby={`video-dialog-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        className="m-auto w-[min(90vw,440px)] rounded-xl border-0 bg-white p-7 text-[#2A0D33] shadow-2xl backdrop:bg-black/60"
      >
        <h2
          id={`video-dialog-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          className="text-[24px] font-normal"
        >
          {title}
        </h2>
        <p className="mt-3 text-[15px] leading-7">
          This video hasn&apos;t been added to the website yet. Please check
          back soon.
        </p>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="mt-6 inline-flex h-11 cursor-pointer items-center justify-center rounded-md bg-[#EEBF1C] px-6 text-[14px] font-semibold hover:bg-[#e6b400] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A0D33]"
        >
          Close
        </button>
      </dialog>
    </>
  );
}
