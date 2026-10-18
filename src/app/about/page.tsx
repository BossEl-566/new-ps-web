import type { Metadata } from "next";
import Link from "next/link";

import AboutVideo from "@/components/about/AboutVideo";
import StayInTouch from "@/components/home/StayInTouch";

export const metadata: Metadata = {
  title: "About Us | Prayer.Social",
  description:
    "Learn about Prayer.Social's mission to connect prayer needs with praying people around the world, and the values that guide our community.",
};

const missionSteps = [
  "Confidently Create and Submit prayer requests to a very responsive community and expect people to pray for you",
  "Pray for existing prayer requests",
  "See, read and engage with great testimonies from delighted members who are beneficiaries of answered prayers",
  "Create or join audio only Live Prayer Rooms for live prayers sessions where you can pop-in and pop-out anytime",
  "Create or join Video based Live Prayer Rooms for live prayers sessions where you can pop-in and pop-out anytime",
  "Engage with Daily devotionals which help guide you to spiritual growth and maturity",
  "Have access to curated and powerful Daily Affirmations which help you build and strengthen your spirit, soul and body",
  "Find and form great friendships and bonds with like minded people or at least people with similar belief systems who are Kingdom minded and believe in the power of prayer",
  "Join Chat Rooms for great spiritual growth",
  "Develop your personal ministry of helping members of the body of Christ",
];

const beliefs = [
  {
    heading: "Be The Global Go-to Platform For Social Prayer",
    description:
      "Be the best platform for connecting people around the world in heartfelt and fervent prayer to The Father. This platform serves as an all in one digital tool with all the salient social media tools to facilitate praying for one another.",
  },
  {
    heading: "Influence The World Through Prayer",
    description:
      "Prayer is accessing Heaven, getting the thoughts and plans of Heaven and bringing them down to the earth. Prayer solicits Heaven's intervention regarding earth's problems. This platform facilitates access to prayer amongst people of all nations.",
  },
  {
    heading: "Enhance The Spiritual Development Of People Of All Nations",
    description:
      "Foster the spiritual development of people of all nations through the power of prayer.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header and footer are already included in src/app/layout.tsx. */}
      <section
        aria-labelledby="about-title"
        className="bg-[#2A0D33] text-white"
      >
        <div className="mx-auto flex min-h-[615px] max-w-[1248px] flex-col px-6 pb-14 pt-12 lg:min-h-[500px] lg:pb-[68px] lg:pt-[76px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.17em]">
            About Us
          </p>

          <h1
            id="about-title"
            className="mt-7 max-w-[1180px] text-[38px] font-normal leading-[1.19] tracking-[-0.035em] sm:text-[48px] lg:mt-8 lg:text-[64px] lg:leading-[1.1] lg:tracking-[-0.035em]"
          >
            One Place Connecting Prayer Needs With Praying People Around The
            World
          </h1>

          <div className="mt-8 flex flex-col items-start gap-8 lg:mt-7 lg:gap-8">
            <Link
              href="#mission-and-vision"
              className="inline-flex h-12 min-w-[158px] items-center justify-center rounded-[5px] bg-white px-5 text-[14px] font-semibold text-[#2A0D33] transition-colors hover:bg-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEBF1C] lg:min-w-0"
            >
              New Here?
            </Link>
            <Link
              href="#about-video"
              className="inline-flex h-12 min-w-[110px] items-center justify-center rounded-[5px] bg-white px-5 text-[14px] font-semibold text-[#2A0D33] transition-colors hover:bg-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEBF1C]"
            >
              Play video
            </Link>
          </div>
        </div>
      </section>

      <section
        id="mission-and-vision"
        aria-labelledby="mission-title"
        className="scroll-mt-6 bg-white text-[#2A0D33]"
      >
        <div className="mx-auto grid max-w-[1248px] grid-cols-1 gap-y-12 px-6 pb-16 pt-14 lg:grid-cols-[minmax(0,550px)_minmax(0,1fr)] lg:gap-x-[50px] lg:pb-[76px] lg:pt-[78px]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em]">
              Our Mission &amp; Vision
            </p>

            <h2
              id="mission-title"
              className="mt-6 max-w-[580px] text-[30px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[40px]"
            >
              To connect prayer needs with praying people around the world
            </h2>

            <p className="mt-6 max-w-[570px] text-[16px] leading-[1.69] lg:text-[16px]">
              PRAYER.SOCIAL&apos;s goal is to connect people around the world
              in heartfelt and fervent prayer to the Father. Scripture
              describes prayer as sweet incense that rises to the Father. This
              app is a digital imagining of unceasing prayer around the world.
              On our platform, members are provided with familiar tools so they
              are right at home even if it is the first time they are joining.
            </p>
          </div>

          <div>
            <h3 className="text-[26px] font-normal leading-[1.3] tracking-[-0.025em]">
              Mission &amp; Purpose
            </h3>
            <p className="mt-5 text-[15px] leading-[1.65] lg:text-[16px]">
              On our platform you instantly have at your fingertips, useful
              and intuitive tools which help you for instance:
            </p>

            <ol className="mt-6 flex flex-col gap-[19px]">
              {missionSteps.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[26px_minmax(0,1fr)] gap-x-3 text-[15px] leading-[1.65] lg:text-[16px]"
                >
                  <span aria-hidden="true" className="tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <AboutVideo />

      <section
        aria-labelledby="beliefs-title"
        className="relative isolate overflow-hidden bg-white text-[#2A0D33]"
      >
        {/* The image exists in public/images/background-image.jpg.
            Keeping it in a low-opacity layer reproduces the faint Figma pattern. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/background-image.jpg')] bg-cover bg-center bg-no-repeat opacity-[0.32] lg:bg-right"
        />

        <div className="mx-auto max-w-[1248px] px-6 pb-[78px] pt-[58px] lg:pb-[76px] lg:pt-[76px]">
          <h2
            id="beliefs-title"
            className="text-[30px] font-normal leading-[1.2] tracking-[-0.035em] sm:text-[36px] lg:text-[40px]"
          >
            Our Beliefs &amp; Values
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-y-10 lg:mt-7 lg:grid-cols-3 lg:gap-x-9">
            {beliefs.map((belief) => (
              <article key={belief.heading}>
                <h3 className="max-w-[390px] text-[25px] font-normal leading-[1.28] tracking-[-0.02em] lg:text-[25px]">
                  {belief.heading}
                </h3>
                <p className="mt-5 max-w-[400px] text-[15px] leading-[1.67] lg:text-[15px]">
                  {belief.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shared newsletter: exactly the same component as the homepage. */}
      <StayInTouch />
    </>
  );
}
