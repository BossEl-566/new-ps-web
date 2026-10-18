import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import StayInTouch from "@/components/home/StayInTouch";
import { goldenAgeInitiative } from "@/lib/initiatives";

export const metadata: Metadata = {
  title: "Initiatives | Prayer.Social",
  description:
    "Explore Prayer.Social initiatives and partner with us to share the love of Christ around the world.",
};

export default function InitiativesPage() {
  return (
    <>
      {/* Global header and footer already live in src/app/layout.tsx. */}
      <section aria-labelledby="initiatives-hero-title" className="bg-[#2A0D33] text-white">
        
<div
  className="
    mx-auto
    flex
    box-border
    min-h-[365px]
    w-full
    max-w-[1440px]
    flex-col
    justify-center
    px-6
    py-12
    sm:px-8
    md:px-10
    lg:min-h-[395px]
    lg:px-16
    lg:py-20
    xl:px-24
  "
>

          <h1
            id="initiatives-hero-title"
            className="max-w-[1120px] text-[40px] font-normal leading-[1.17] tracking-[-0.025em] sm:text-[48px] lg:text-[64px] lg:leading-[1.12]"
          >
            Initiatives Impacting The World
          </h1>
          <p className="mt-7 max-w-[780px] text-[18px] font-normal leading-[1.5] lg:mt-8 lg:text-[19px]">
            Choose An Initiative And Partner With Us To Bring The Love Of Christ To The World.
          </p>
        </div>
      </section>

      <section aria-labelledby="latest-initiatives-title" className="bg-white text-[#2A0D33]">
        
<div
  className="
    mx-auto
    box-border
    w-full
    max-w-[1440px]
    px-6
    pb-12
    pt-12
    sm:px-8
    md:px-10
    lg:px-16
    lg:pb-[80px]
    lg:pt-[82px]
    xl:px-24
  "
>

          <h2
            id="latest-initiatives-title"
            className="text-[28px] font-normal leading-[1.25] tracking-[-0.025em] sm:text-[34px] lg:text-[40px]"
          >
            Latest Initiatives
          </h2>

          <article className="mt-7 grid grid-cols-1 items-start gap-x-8 gap-y-7 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Link
              href={goldenAgeInitiative.url}
              aria-label={`Read ${goldenAgeInitiative.title}`}
              className="block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEBF1C]"
            >
              <Image
                src={goldenAgeInitiative.image}
                alt="Volunteers visiting and supporting older people at a community gathering in Kenya"
                width={900}
                height={560}
                sizes="(min-width: 1280px) 608px, (min-width: 1024px) 46vw, (min-width: 640px) 90vw, calc(100vw - 48px)"
                className="aspect-[1.6] h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                priority
              />
            </Link>

            <div className="lg:pt-1">
              <h3 className="max-w-[590px] text-[28px] font-normal leading-[1.28] tracking-[-0.02em] sm:text-[32px] lg:text-[40px]">
                <Link
                  href={goldenAgeInitiative.url}
                  className="transition-colors hover:text-[#A35B00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEBF1C]"
                >
                  {goldenAgeInitiative.title}
                </Link>
              </h3>
              <p className="mt-5 text-[17px] leading-[1.55] lg:mt-6 lg:text-[18px]">
                {goldenAgeInitiative.subtitle}
              </p>
              <p className="mt-7 text-[17px] leading-[1.6] lg:mt-7 lg:text-[18px]">
                {goldenAgeInitiative.excerpt}
              </p>
              <Link
                href={goldenAgeInitiative.url}
                className="mt-6 inline-flex min-h-[52px] min-w-[160px] items-center justify-center rounded-[7px] bg-[#EEBF1C] px-6 text-[15px] font-semibold text-[#2A0D33] transition-colors hover:bg-[#e3b000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A0D33]"
              >
                Read more
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Reuse the newsletter from the homepage; do not duplicate the footer. */}
      <StayInTouch />
    </>
  );
}
