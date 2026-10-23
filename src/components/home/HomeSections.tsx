import Image from "next/image";
import Link from "next/link";
import DevotionalCarousel from "./DevotionalCarousel";
import StayInTouch from "./StayInTouch";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/prayer-social-community/id6443405337";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.prayersocial.android";

const introColumns = [
  {
    title: "About Us",
    description:
      "Prayer Social's goal is to connect people around the world in heartfelt and fervent prayer to the Father. Scripture directs us that prayer is a sweet incense that rises to the Father.",
    action: "Learn more",
    href: "/about",
  },
  {
    title: "Get Involved",
    description:
      "Prayer Social is a community driven in every way. We are impacting the community positively and we do it with the help of the community.",
    action: "Learn how",
    href: "/participate",
  },
  {
    title: "Donate",
    description:
      "Your sponsorship is greatly appreciated. Our team works hard to ensure your donations are used for the sole purpose of resourcing the ministry.",
    action: "Donate",
    href: "/donate",
  },
];


const featureCards = [
  {
    title: "Powerful Testimonies",
    description:
      "Testimonies that demonstrate the goodness of God and His willingness to be God to all His children.",
  },
  {
    title: "Request for Prayers",
    description:
      "Boldly ask for prayer knowing that someone in the community will respond and pray fervently for you.",
  },
  {
    title: "Pray for Others",
    description:
      "Pray for someone like the need is your own need. Pray with and agree fervently.",
  },
  {
    title: "Connect With Kingdom Minded People and Build Your Faith",
    description:
      "Be in a community of people with kingdom results and minds.",
  },
  {
    title: "Powerful God Encounter Stories",
    description:
      "God encounter stories that demonstrate God's desire to partner with us and be intimate with us.",
  },
];

const nextSteps = [
  ["Step 1", "Pray", "Sign Up"],
  ["Step 2", "Make Friends", "Interact"],
  ["Step 3", "Missions", "Salvation"],
];

const events = [
  {
    title: "PS Bonfire",
    description:
      "A global event where Prayer Social members meet at their designated local meeting places to have a bonfire, share fellowship, worship and encourage one another. Details coming soon.",
  },
  {
    title: "PS Flash Splash",
    description:
      "A global event where Prayer Social members around the globe meet at designated local places to spend time together, build friendships and pray for one another. Details coming soon.",
  },
  {
    title: "Prayer Night",
    description:
      "A global event where Prayer Social members meet at their designated local meeting places for an evening of heartfelt prayer. Details coming soon.",
  },
];

const news = [
  {
    image: "/images/image1.jpg",
    title: "If it is from Heaven — John 3:27 (KJV)",
    excerpt:
      "John answered and said, a man can receive nothing, except it be given him from heaven. Here's your prayer for today: receive and walk in God's gifts for you.",
  },
  {
    image: "/images/image2.jpg",
    title: "Stronghold — Psalm 18:2",
    excerpt:
      "The Lord is my rock, my fortress and my deliverer. My God is my rock, in whom I take refuge. Find strength and peace in His unfailing care.",
  },
  {
    image: "/images/image3.jpg",
    title: "You will be Rewarded — Hebrews 10:34–35",
    excerpt:
      "You endured in faith and stood with others through difficult times. Hold firmly to your confidence in God, because it carries a great reward.",
  },
];

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  yellow?: boolean;
  white?: boolean;
};

function ButtonLink({ href, children, yellow = false, white = false }: ButtonLinkProps) {
  const colors = yellow
    ? "border-[#EEBF1C] bg-[#EEBF1C] text-[#2A0D33] hover:border-[#dfad00] hover:bg-[#dfad00]"
    : white
      ? "border-white bg-white text-[#2A0D33] hover:border-[#EEBF1C] hover:bg-[#EEBF1C]"
      : "border-[#2A0D33] bg-white text-[#2A0D33] hover:border-[#EEBF1C] hover:bg-[#EEBF1C]/20";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 w-fit items-center justify-center rounded-[5px] border px-5 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEBF1C] ${colors}`}
    >
      {children}
    </Link>
  );
}

function PageIntro() {
  return (
    <section className="px-6 pb-14 pt-12 text-center text-[#2A0D33] md:pb-[76px] md:pt-[72px]">
      <h1 className="mx-auto max-w-[1200px] text-[27px] font-normal leading-[1.3] tracking-[-0.025em] sm:text-[34px] lg:text-[40px]">
        Prayer Social – Global Christian Prayer Community &amp; App
      </h1>
      <p className="mx-auto mt-5 max-w-[750px] text-[14px] leading-7 sm:text-[17px]">
        Pray together. Share requests. Grow in faith worldwide.
      </p>
    </section>
  );
}

function IntroAndFeatures() {
  return (
    
<section
  aria-label="About the Prayer Social community"
  className="relative overflow-hidden bg-white pb-20 pt-12 text-[#2A0D33] md:pb-28 md:pt-16"
>

      <div className="pointer-events-none absolute -bottom-24 right-[-10%] z-0 h-[520px] w-[520px] opacity-[0.035] md:h-[780px] md:w-[780px]">
        <Image src="/images/logo.png" alt="" fill sizes="(max-width: 768px) 520px, 780px" className="object-contain" />
      </div>
      
<div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24">

        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download Prayer Social on the Apple App Store" className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A0D33]">
            <Image src="/images/appstore.png" width={150} height={50} alt="Download on the App Store" className="h-[48px] w-auto max-w-[150px] object-contain" />
          </a>
          <ButtonLink href="/app" yellow>Enter App</ButtonLink>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get Prayer Social on Google Play" className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A0D33]">
            <Image src="/images/playstore.png" width={160} height={50} alt="Get it on Google Play" className="h-[48px] w-auto max-w-[165px] object-contain" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-12">
          {introColumns.map((item) => (
            <article key={item.title} className="flex flex-col items-start">
              <h2 className="text-[24px] font-normal leading-[1.35] tracking-[-0.025em]">{item.title}</h2>
              <p className="mt-4 flex-1 text-[14px] leading-[1.8]">{item.description}</p>
              <div className="mt-5"><ButtonLink href={item.href}>{item.action}</ButtonLink></div>
            </article>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-5 md:mt-32 md:grid-cols-3 md:gap-7">
          {featureCards.slice(0, 3).map((feature) => (
            <article key={feature.title} className="flex min-h-[238px] flex-col justify-center rounded-[5px] bg-[#2A0D33] p-7 text-white sm:p-9 md:min-h-[320px]">
              <h3 className="text-[23px] font-normal leading-[1.3] tracking-[-0.025em]">{feature.title}</h3>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/90">{feature.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-[2fr_3fr] md:gap-7">
          {featureCards.slice(3).map((feature) => (
            <article key={feature.title} className="flex min-h-[238px] flex-col justify-center rounded-[5px] bg-[#2A0D33] p-7 text-white sm:p-9 md:min-h-[300px]">
              <h3 className="max-w-[520px] text-[23px] font-normal leading-[1.3] tracking-[-0.025em]">{feature.title}</h3>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/90">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    
<section
  aria-labelledby="mission-title"
  className="bg-white pb-20 pt-4 text-[#2A0D33] md:pb-28 md:pt-10"
>

      
<div
  className="
    mx-auto
    grid
    w-full
    max-w-[1440px]
    min-w-0
    grid-cols-1
    gap-12
    px-6
    sm:px-8
    md:px-10
    lg:grid-cols-[1.7fr_1fr]
    lg:gap-16
    lg:px-16
    xl:px-24
  "
>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em]">Our Mission &amp; Vision</p>
          <h2 id="mission-title" className="mt-7 max-w-[760px] text-[30px] font-normal leading-[1.3] tracking-[-0.03em] sm:text-[38px] lg:text-[44px]">
            At Prayer Social Our vision and mission is to help connect people with The Father.
          </h2>
          <p className="mt-6 max-w-[800px] text-[14px] leading-[1.9] sm:text-[16px]">
            PRAYER.SOCIAL&apos;s goal is to connect people around the world in heartfelt and fervent prayer to the Father. Scripture describes prayer as sweet incense that rises to the Father. This app is a digital meeting of unceasing prayer around the world. On our platform, members are provided with familiar tools to stay connected, allowing them to be in prayer, and to live lives of prayer.
          </p>
          <div className="mt-6"><ButtonLink href="/about" yellow>Learn more</ButtonLink></div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex min-h-[245px] items-center justify-center rounded-[5px] bg-[#2A0D33] px-6 py-12 text-white">
            <ButtonLink href="/app" white>Pray Also</ButtonLink>
          </div>
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em]">What members are saying</p>
            <div className="rounded-[5px] bg-[#2A0D33] px-8 py-9 text-white">
              <h3 className="text-[24px] font-normal leading-[1.35]">Prayer Social Community Members</h3>
              <p className="mt-3 text-[14px] text-white/85">Experience, Care &amp; Support</p>
              <div className="mt-6"><ButtonLink href="/about" white>More info</ButtonLink></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityBanner() {
  return (
    <section className="bg-[#2A0D33] px-6 py-20 text-center text-white md:py-28">
      
<div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24">

        <h2 className="text-[29px] font-normal leading-[1.35] tracking-[-0.03em] sm:text-[38px] lg:text-[44px]">
          Community . Redemption . Restoration . Freedom.
        </h2>
        <p className="mx-auto mt-6 max-w-[1150px] text-[14px] leading-[1.85] text-white/90 sm:text-[16px]">
          Wherever you are in life, whatever circumstances you find yourself in, whatever challenges you are facing right now, whether or not you feel like you don&apos;t belong where you are, you will find a place in Prayer Social.
        </p>
        <div className="mt-7 flex justify-center"><ButtonLink href="/contact" white>Contact Us</ButtonLink></div>
      </div>
    </section>
  );
}

function NextSteps() {
  return (
    
<section
  aria-labelledby="next-steps-title"
  className="relative overflow-hidden bg-white py-20 text-[#2A0D33] md:py-24"
>

      <div className="pointer-events-none absolute bottom-[-100px] left-1/2 h-[550px] w-[550px] -translate-x-1/2 opacity-[0.025] md:h-[800px] md:w-[800px]">
        <Image src="/images/logo.png" alt="" fill sizes="(max-width: 768px) 550px, 800px" className="object-contain" />
      </div>
      
<div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24">

        <p className="text-[11px] font-semibold uppercase tracking-[0.14em]">Next Steps</p>
        <h2 id="next-steps-title" className="mb-8 mt-5 text-[30px] font-normal tracking-[-0.025em] sm:text-[38px]">Lots of Ways to Get Involved.</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7">
          {nextSteps.flatMap((row) => row).map((step, index) => (
            <div key={`${step}-${index}`} className="flex min-h-[148px] items-center rounded-[5px] bg-[#2A0D33] px-8 py-9 text-[22px] font-normal text-white md:min-h-[170px] md:px-10">
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingEvents() {
  return (
    
<section
  aria-labelledby="events-title"
  className="bg-[#2A0D33] py-20 text-white md:py-24"
>

      
<div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24">

        <p className="text-[11px] font-semibold uppercase tracking-[0.13em]">Get Involved</p>
        <h2 id="events-title" className="mt-6 text-[31px] font-normal leading-tight tracking-[-0.025em] sm:text-[39px]">Join Us At Any Event!</h2>
        <a href="#events-list" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-[5px] bg-white px-5 text-[13px] font-semibold text-[#2A0D33] transition-colors hover:bg-[#EEBF1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          Calendar
        </a>
        <div id="events-list" className="mt-10 grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-10">
          {events.map((event) => (
            <article key={event.title}>
              <h3 className="text-[23px] font-normal leading-[1.3]">{event.title}</h3>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85">Coming Soon — Global Prayer Meetup</p>
              <p className="mt-5 text-[14px] leading-[1.85] text-white/90">{event.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestNews() {
  return (
    
<section
  aria-labelledby="news-title"
  className="bg-white py-20 text-[#2A0D33] md:py-24"
>

      
<div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24">

        <p className="text-[11px] font-semibold uppercase tracking-[0.13em]">Prayer Social Blog</p>
        <h2 id="news-title" className="mb-8 mt-6 text-[31px] font-normal tracking-[-0.025em] sm:text-[39px]">The Latest News &amp; Updates</h2>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-7">
          {news.map((article) => (
            <article key={article.title} className="flex h-full flex-col items-start">
              <Link href="/blog" aria-label={`Read ${article.title}`} className="relative block aspect-[1.8/1] w-full overflow-hidden rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A0D33]">
                <Image src={article.image} alt="Prayer Social devotional article illustration" fill sizes="(max-width: 767px) 100vw, (max-width: 1280px) 33vw, 400px" className="object-cover transition-transform duration-300 hover:scale-[1.035]" />
              </Link>
              <h3 className="mt-5 text-[23px] font-normal leading-[1.3] tracking-[-0.02em]">{article.title}</h3>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.07em] text-[#2A0D33]/75">Daily Prayers</p>
              <p className="mt-4 flex-1 text-[14px] leading-[1.8]">{article.excerpt}</p>
              <div className="mt-5"><ButtonLink href="/blog">Read more</ButtonLink></div>
            </article>
          ))}
        </div>
        <div className="mt-9"><ButtonLink href="/blog" yellow>Read more articles</ButtonLink></div>
      </div>
    </section>
  );
}

export default function HomeSections() {
  return (
    <>
      <PageIntro />
      <DevotionalCarousel />
      <IntroAndFeatures />
      <MissionSection />
      <CommunityBanner />
      <NextSteps />
      <UpcomingEvents />
      <LatestNews />
      <StayInTouch />
    </>
  );
}
