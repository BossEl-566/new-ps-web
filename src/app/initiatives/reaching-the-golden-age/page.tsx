import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import DonationPanel from "@/components/initiatives/DonationPanel";
import InitiativeSidebar from "@/components/initiatives/InitiativeSidebar";
import { goldenAgeInitiative } from "@/lib/initiatives";

export const metadata: Metadata = {
  title: "Reaching The Golden Age Initiative | Prayer.Social",
  description: goldenAgeInitiative.excerpt,
};

const volunteerNames = [
  "Hebron Maghanga Mwakindo",
  "Prudence Wanjala Maghanga",
  "Sophie Kanda",
  "Moses Baraka",
  "Peter Katana",
];

const activities = [
  "Share the Love of God with them",
  "Fellowship with them",
  "Share Meal with them",
  "Pray with them",
];

const needs = [
  "Cater for transport for the old men where necessary.",
  "Medication for the sick",
  "Payment of Government Medical Cover for them",
  "Food and Beverages",
  "Allowance for the team",
];

function ArticleHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 mt-7 text-[25px] font-normal leading-tight tracking-[-0.02em] sm:text-[28px]">
      {children}
    </h2>
  );
}

function ArticleParagraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-5">
      {items.map((item) => <p key={item}>{item}</p>)}
    </div>
  );
}

export default function GoldenAgeInitiativeDetailPage() {
  return (
    <>
      {/* Header and footer are provided by the global layout. */}
      
<div
  className="
    mx-auto
    grid
    box-border
    w-full
    max-w-[1440px]
    min-w-0
    grid-cols-1
    gap-y-16
    px-6
    pb-16
    pt-14
    text-[#2A0D33]
    sm:px-8
    md:px-10
    lg:grid-cols-[minmax(0,2.37fr)_minmax(0,1fr)]
    lg:gap-x-[62px]
    lg:px-16
    lg:pb-[78px]
    lg:pt-[70px]
    xl:px-24
  "
>

        <article className="min-w-0 text-[16px] font-normal leading-[1.65] sm:text-[17px]">
          <header>
            <h1 className="text-[32px] font-normal leading-[1.24] tracking-[-0.025em] sm:text-[38px] lg:text-[40px]">
              {goldenAgeInitiative.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] text-[#2A0D33]/80">
              <time dateTime="2023-04-01">{goldenAgeInitiative.date}</time>
              <span aria-hidden="true">·</span>
              <Link className="hover:underline focus-visible:outline-2 focus-visible:outline-[#EEBF1C]" href="/initiatives">
                Initiatives
              </Link>
            </div>
          </header>

          {/* Both full-width photos appear in the desktop and mobile references. */}
          <div className="mt-6 space-y-5">
            {[1, 2].map((photo) => (
              <div key={photo} className="overflow-hidden">
                <Image
                  src={goldenAgeInitiative.image}
                  alt={photo === 1
                    ? "Volunteers greeting and caring for older residents at the Golden Age Initiative community gathering"
                    : "Older community members and volunteers spending time together outdoors in Kenya"}
                  width={1200}
                  height={750}
                  sizes="(min-width: 1280px) 834px, (min-width: 1024px) 65vw, calc(100vw - 48px)"
                  priority={photo === 1}
                  className="aspect-[1.6] w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-5">
            <h2 className="mb-5 text-[24px] font-normal leading-[1.3] tracking-[-0.02em] sm:text-[27px]">
              {goldenAgeInitiative.subtitle}
            </h2>
            <ArticleParagraphs items={[
              goldenAgeInitiative.excerpt,
              "In 2020, I relocated to the nearest town near my father-in-law. From October 2020 to November 2021, we could meet three times a week just to talk about various things and generally talk about life. When he started losing, he lived in my house until the time the Lord took him.",
              "While in my house we talked every evening, sometimes for hours. One critical thing I discovered about my father-in-law was that, although he was not sick, he was suffering from loneliness. His wife had passed on in 2004, and he decided not to remarry, so he lived alone for all these years.",
              "My father-in-law did not lack money at all. But he lacked someone to talk to. Someone to exchange ideas. His Sons were not close to him at all. He just needed someone to talk to. Someone to exchange ideas. Someone to laugh or cry with.",
              "He was lonely and started dying from the inside, until he reached a point of despair. He desperately wanted to die. Although he translated it as having faith to go to his father, I discovered he feared living because of loneliness.",
            ]} />

            <ArticleHeading>Why This Program?</ArticleHeading>
            <p>
              This is a program designed to reach out to the elderly, both men and women aged 70 and above. When we visit them we want to:-
            </p>
            <div className="mt-5">
              <ArticleParagraphs items={activities} />
            </div>

            <ArticleHeading>The Problem We Are Solving</ArticleHeading>
            <p>
              The need we are meeting in this initiative is loneliness and the lack of basic care for the aged in the communities. The people identified in these communities are aged and lonely, they need care and Love.
            </p>

            <ArticleHeading>Target</ArticleHeading>
            <p>
              We have so far identified 30 old people in the Pilot Community :- Couples, Widows and Widowers. Most of them live by themselves and they have no one to visit them or talk to. Some are sick and bedridden and very lonely.
            </p>

            <ArticleHeading>The Program</ArticleHeading>
            <p>We will:-</p>
            <div className="mt-5">
              <ArticleParagraphs items={[
                "Visit them at least once in a month in their homes",
                "We will provide them together once in a while at least once quarterly to help them interact.",
                "Those who are sick we will visit to pray with them as often as we can",
              ]} />
            </div>

            <ArticleHeading>Our team</ArticleHeading>
            <p>We have a team of 5 volunteers..</p>
            <div className="mt-5"><ArticleParagraphs items={volunteerNames} /></div>

            <ArticleHeading>What do We need from you?</ArticleHeading>
            <p>We need your financial support. The finances will help us to do the following.</p>
            <div className="mt-5"><ArticleParagraphs items={needs} /></div>

            <ArticleHeading>Starting Month of the Program</ArticleHeading>
            <p>
              We are starting the program in April 2023. Our budget is US $300/month and the total for a year is US $3,600.
            </p>

            <ArticleHeading>Donations</ArticleHeading>
            <p>Through Prayer Social Donations Channels:</p>
            <DonationPanel />
            <p className="mt-5 text-[13px]">Tags: initiatives, reaching senior citizens</p>
          </div>
        </article>

        {/* On mobile the sidebar follows the complete article, matching the reference. */}
        <InitiativeSidebar />
      </div>
    </>
  );
}
