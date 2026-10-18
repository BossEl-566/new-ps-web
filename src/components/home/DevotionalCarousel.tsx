"use client";

import { useState } from "react";
import Link from "next/link";

type Devotional = {
  title: string;
  reference: string;
  description: string;
};

// The headings and Scripture references match the supplied Figma carousel.
// The short descriptions are readable summaries; replace them with the
// complete approved devotional excerpts when that editorial copy is available.
const devotionals: Devotional[] = [
  {
    title: "If it is from Heaven",
    reference: "John 3:27 (KJV)",
    description:
      "John answered and said, A man can receive nothing, except it be given him from heaven. Here's your prayer for today: receive the gifts and grace God has prepared for you.",
  },
  {
    title: "Stronghold",
    reference: "Psalm 18:2",
    description:
      "The Lord is my rock, my fortress and my deliverer. In every season, find shelter, strength and confidence in the One who never fails.",
  },
  {
    title: "You will be Rewarded",
    reference: "Hebrews 10:34–35",
    description:
      "Do not throw away your confidence. Keep trusting God and holding on to His promises, knowing that faithful perseverance carries a great reward.",
  },
  {
    title: "My LOVE",
    reference: "Psalm 18:1",
    description:
      "I will love thee, O Lord, my strength. Let your love for God shape your thoughts, your prayers and the way you live today.",
  },
  {
    title: "The Mighty Terrible One!",
    reference: "Jeremiah 20:11",
    description:
      "The Lord is with me as a mighty, powerful One. Stand firm in faith and remember that you do not face life's battles alone.",
  },
  {
    title: "My Plans for You",
    reference: "Jeremiah 29:11",
    description:
      "God knows the plans He has for you: plans for peace, hope and a future. Trust His direction, even when you cannot see the full path ahead.",
  },
  {
    title: "Strength",
    reference: "Isaiah 40:29 (NIV)",
    description:
      "He gives strength to the weary and increases the power of the weak. Bring your burdens to God and be renewed by His strength.",
  },
  {
    title: "Dance and be Glad",
    reference: "Jeremiah 31:13–14 (NIV)",
    description:
      "God can turn mourning into gladness and fill His people with joy. Take heart in the promise of comfort, restoration and celebration.",
  },
  {
    title: "There is a plan",
    reference: "Jeremiah 29:10–11 (AMPC)",
    description:
      "Even when the waiting season feels long, God has not forgotten His promises. Rest in His care and trust His good plans for your future.",
  },
  {
    title: "Are you hungry or thirsty?",
    reference: "Psalm 107:9 (KJV)",
    description:
      "He satisfies the longing soul and fills the hungry soul with goodness. Seek God with an open heart and find the satisfaction only He can give.",
  },
];

export default function DevotionalCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = devotionals[activeIndex];

  function goTo(nextIndex: number) {
    setActiveIndex((nextIndex + devotionals.length) % devotionals.length);
  }

  return (
    <section
      aria-label="Daily devotional carousel"
      className="flex min-h-[620px] items-center bg-[#2A0D33] px-6 py-20 text-center text-white md:min-h-[720px] md:py-24"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <div aria-live="polite" aria-atomic="true" className="mx-auto max-w-[1050px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
            Daily Prayers
          </p>
          <h2 className="mx-auto mt-6 max-w-[1000px] text-[30px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[36px] lg:text-[42px]">
            {active.title} — {active.reference}
          </h2>
          <p className="mt-5 text-[12px] leading-6 text-white/80 sm:text-[13px]">
            By Prayer Social Community | Daily Prayers | 0 Comments
          </p>
          <p className="mx-auto mt-6 max-w-[900px] text-[14px] leading-[1.85] text-white/90 sm:text-[16px]">
            {active.description}
          </p>
        </div>

        <Link
          href="/blog"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-[5px] bg-white px-7 text-[13px] font-semibold text-[#2A0D33] transition-colors hover:bg-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Read more
        </Link>

        <nav aria-label="Select a devotional" className="mt-9 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-3">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="rounded px-1 py-2 text-[12px] font-semibold text-white/85 transition-colors hover:text-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Previous devotional"
          >
            Previous
          </button>
          {devotionals.map((devotional, index) => (
            <button
              key={`${devotional.title}-${index}`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show devotional ${index + 1}: ${devotional.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`min-h-9 min-w-7 rounded px-1 text-[12px] transition-colors focus-visible:outline-2 focus-visible:outline-white sm:min-w-8 ${
                index === activeIndex
                  ? "bg-white/15 font-bold text-[#EEBF1C]"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="rounded px-1 py-2 text-[12px] font-semibold text-white/85 transition-colors hover:text-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Next devotional"
          >
            Next
          </button>
        </nav>
      </div>
    </section>
  );
}
