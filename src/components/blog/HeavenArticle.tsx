
import Image from "next/image";
import Link from "next/link";

import ArticleSidebar from "./ArticleSidebar";

const PAYPAL_NOTE =
  "The general Prayer.Social donation page will be added separately.";

export default function HeavenArticle() {
  return (
    <div className="w-full bg-white text-[#2A0D33]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          min-w-0
          grid-cols-1
          gap-x-14
          gap-y-16
          px-6
          pb-20
          pt-14
          sm:px-8
          md:px-10
          lg:grid-cols-[minmax(0,2.25fr)_minmax(0,1fr)]
          lg:px-16
          lg:pb-24
          lg:pt-20
          xl:px-24
        "
      >
        {/* MAIN ARTICLE */}
        <article className="min-w-0">
          {/* ARTICLE TITLE */}
          <header>
            <h1
              className="
                text-[30px]
                font-normal
                leading-[1.3]
                tracking-[-0.025em]
                sm:text-[36px]
                lg:text-[40px]
              "
            >
              If it is from Heaven — John 3:27 (KJV)
            </h1>

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-x-2
                gap-y-1
                text-[13px]
                leading-6
                text-[#2A0D33]/90
              "
            >
              <span>by Victoria Tachie-Menson</span>

              <span aria-hidden="true">|</span>

              <time dateTime="2026-07-14">
                Jul 14, 2026
              </time>

              <span aria-hidden="true">|</span>

              <span>Daily Prayers</span>
            </div>
          </header>

          {/* FIRST ARTICLE IMAGE */}
          <div
            className="
              relative
              mt-6
              aspect-[1.6/1]
              w-full
              overflow-hidden
            "
          >
            <Image
              src="/images/ariticle-image1.jpg"
              alt="Hands holding a wrapped gift tied with a red ribbon"
              fill
              priority
              sizes="(max-width: 1023px) calc(100vw - 48px), 850px"
              className="object-cover"
            />
          </div>

          {/* SCRIPTURE AND PRAYER */}
          <div className="mt-6 text-[15px] leading-[1.8]">
            <h2 className="text-[24px] font-normal leading-[1.4]">
              If it is from Heaven
            </h2>

            <h3 className="mt-6 text-[23px] font-normal leading-[1.4]">
              John 3:27 (KJV)
            </h3>

            <p className="mt-6">
              27 John answered and said, A man can receive
              nothing, except it be given him from heaven.
            </p>

            <h2 className="mt-7 text-[24px] font-normal leading-[1.4]">
              Here’s Your Prayer For Today
            </h2>

            <h3 className="mt-6 text-[23px] font-normal leading-[1.4]">
              Receive.
            </h3>

            <div className="mt-6 space-y-6">
              <p>Heavenly Father,</p>

              <p>
                I am before you today with a grateful and
                humble heart, recognizing the truth of your
                Word. I acknowledge that every good thing,
                every talent, every opportunity, and every
                blessing I have is a gift sent directly from
                heaven. Nothing I possess is by my power.
              </p>

              <p>
                I pray that you teach me to trust your timing
                and your perfect provision, knowing that you
                give exactly what I need. Let me never boast
                in my own strength, but always point the
                glory back to you.
              </p>

              <p>
                Lastly, please release me from the pressure
                of trying to force things to happen, and help
                me rest in the assurance that what is meant
                for me will come from your hands.
              </p>

              <p>
                I surrender my daily walk to you, trusting
                that you will help me.
              </p>

              <p>Amen</p>
            </div>
          </div>

          {/* SECOND ARTICLE IMAGE */}
          <div
            className="
              relative
              mt-7
              aspect-[1.8/1]
              w-full
              overflow-hidden
            "
          >
            <Image
              src="/images/article-image2.jpg"
              alt="Two people extending their arms toward one another"
              fill
              sizes="(max-width: 1023px) calc(100vw - 48px), 850px"
              className="object-cover"
            />
          </div>

          {/* PRAYER GUIDE */}
          <section
            aria-labelledby="prayer-guide-title"
            className="mt-6"
          >
            <h2
              id="prayer-guide-title"
              className="text-[24px] font-normal leading-[1.4]"
            >
              Prayer Guide
            </h2>

            <div
              className="
                mt-6
                space-y-6
                text-[15px]
                leading-[1.8]
              "
            >
              <p>
                Prayer to receive everything God has given
                you from heaven.
              </p>

              <p>
                Also, pray not to lose sight of what the
                Lord has blessed you with.
              </p>

              <p>
                We invite you to donate towards this worthy
                cause of making the presence of the Lord
                Jesus Christ felt all over the world through
                prayer. Your donations go a long way to save
                lives both spiritually and physically.
              </p>

              <p>The Lord is counting on you.</p>

              <p>Blessings.</p>
            </div>

            {/* DONATE BUTTON */}
            
<a
  href="https://www.paypal.com/donate/?hosted_button_id=P99KWBGQ5GM9W"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Donate to Prayer Social via PayPal"
  className="
    mt-6
    inline-flex
    min-h-[48px]
    min-w-[95px]
    items-center
    justify-center
    rounded-[6px]
    bg-[#EEBF1C]
    px-6
    text-[14px]
    font-semibold
    text-[#2A0D33]
    transition-colors
    duration-200
    hover:bg-[#dfad00]
    focus-visible:outline-2
    focus-visible:outline-offset-4
    focus-visible:outline-[#2A0D33]
  "
>
  Donate
</a>

          </section>
        </article>

        {/* SIDEBAR — RIGHT ON DESKTOP, BELOW ON MOBILE */}
        <ArticleSidebar />
      </div>
    </div>
  );
}
