import type { Metadata } from "next";
import Link from "next/link";

import InterestForm from "@/components/participate/InterestForm";
import VideoPlaceholder from "@/components/participate/VideoPlaceholder";
import StayInTouch from "@/components/home/StayInTouch";

export const metadata: Metadata = {
  title: "Participate | Prayer.Social",
  description:
    "Get involved with Prayer.Social: volunteer your skills, support the community, and help connect people through prayer.",
};

const opportunities = [
  { title: "Product Support", href: "#product-support" },
  { title: "Marketing", href: "#marketing" },
  { title: "Spiritual Support", href: "#spiritual-support" },
  { title: "Social Media", href: "#social-media" },
  { title: "Content Support", href: "#content-support" },
  { title: "Donate", href: "/donate" },
];

const supportSections = [
  {
    id: "product-support",
    title: "Product Support",
    description:
      "Are you a programmer? Are you good with programs such as Adalo, Flutterflow, Bubble to name a few? Are you willing to put those skills to use in your spare time? Please reach out to us at info@prayer.social and let’s help you share those skills with the world.",
    videoFirst: false,
  },
  {
    id: "spiritual-support",
    title: "Spiritual Support",
    description:
      "Do you feel a drive to help others spiritually? Are you a Prayer Warrior who would like to pray for others? There’s space for you on the PRAYER.SOCIAL Team. Please reach out to us.",
    videoFirst: true,
  },
  {
    id: "content-support",
    title: "Content Support",
    description:
      "Are you great with copy? Do you find pleasure in making sure content is just right? Are you a designer with a keen eye for great design? Would you like to share those skills voluntarily with others in the Kingdom? There’s a place for you on the PRAYER.SOCIAL Team. Please contact us.",
    videoFirst: false,
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Are you a marketing guru with a heart for people and looking for volunteer opportunities? There’s a place for you @ PRAYER.SOCIAL. Please reach out to us.",
    videoFirst: true,
  },
  {
    id: "social-media",
    title: "Social Media",
    description:
      "Do you love sharing and managing social media growth? Would you like to share this love with the world while impacting it positively? You’ll have a great place to reach that goal on the PRAYER.SOCIAL Team. Please reach out to us.",
    videoFirst: false,
  },
];

function SupportCopy({ title, description, id }: { title: string; description: string; id: string }) {
  return (
    <div className="self-start">
      <h2
        id={`${id}-title`}
        className="text-[27px] font-normal leading-[1.24] tracking-[-0.025em] sm:text-[32px] lg:text-[35px]"
      >
        {title}
      </h2>
      <p className="mt-5 max-w-[590px] text-[15px] leading-[1.7] lg:text-[16px]">
        {description}
      </p>
    </div>
  );
}

export default function ParticipatePage() {
  return (
    <>
      {/* Shared SiteHeader and SiteFooter are already in src/app/layout.tsx. */}
      <section aria-labelledby="participate-title" className="bg-[#2A0D33] text-white">
        <div className="mx-auto flex min-h-[410px] max-w-[1248px] flex-col items-start px-6 pb-[54px] pt-[62px] lg:min-h-[465px] lg:pb-[72px] lg:pt-[82px]">
          <h1
            id="participate-title"
            className="text-[42px] font-normal leading-[1.15] tracking-[-0.035em] sm:text-[52px] lg:text-[64px]"
          >
            Get Involved
          </h1>
          <p className="mt-7 text-[16px] leading-7 lg:text-[18px]">
            We Wholeheartedly Welcome Your Participation
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/about"
              className="inline-flex h-[48px] items-center justify-center rounded-[5px] bg-white px-6 text-[14px] font-semibold text-[#2A0D33] transition-colors hover:bg-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEBF1C]"
            >
              New Here?
            </Link>
            <Link
              href="#interest-form"
              className="inline-flex h-[48px] items-center justify-center rounded-[5px] bg-white px-6 text-[14px] font-semibold text-[#2A0D33] transition-colors hover:bg-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEBF1C]"
            >
              Get in touch
            </Link>
          </div>
          <div className="mt-8">
            <VideoPlaceholder title="Get Involved" variant="button" />
          </div>
        </div>
      </section>

      <section aria-labelledby="participation-ways" className="bg-white text-[#2A0D33]">
        <div className="mx-auto max-w-[1248px] px-6 pb-[62px] pt-[65px] lg:pb-[82px] lg:pt-[82px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.17em]">
            Participate
          </p>
          <h2
            id="participation-ways"
            className="mt-7 text-[30px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[36px] lg:text-[40px]"
          >
            Lots of Ways to Get Involved.
          </h2>

          <div className="mt-7 grid grid-cols-1 gap-[28px] md:grid-cols-2 lg:grid-cols-3 lg:gap-[32px]">
            {opportunities.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex min-h-[200px] items-center rounded-[6px] bg-[#2A0D33] px-8 py-7 text-[23px] font-normal leading-[1.35] text-white transition-colors duration-200 hover:bg-[#42194b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEBF1C]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="text-[#2A0D33]">
        {supportSections.map((item, index) => {
          const copy = (
            <SupportCopy
              key="copy"
              id={item.id}
              title={item.title}
              description={item.description}
            />
          );
          const video = (
            <VideoPlaceholder
              key="video"
              title={item.title}
              id={`${item.id}-video`}
            />
          );

          return (
            <section
              key={item.id}
              id={item.id}
              aria-labelledby={`${item.id}-title`}
              className={`scroll-mt-8 ${index % 2 === 0 ? "bg-white" : "bg-[#FBF9FC]"}`}
            >
              <div className="mx-auto grid max-w-[1248px] grid-cols-1 items-start gap-x-9 gap-y-8 px-6 py-[62px] lg:grid-cols-2 lg:gap-x-[36px] lg:py-[88px]">
                {item.videoFirst ? [video, copy] : [copy, video]}
              </div>
            </section>
          );
        })}
      </div>

      <InterestForm />
      <StayInTouch />
    </>
  );
}
