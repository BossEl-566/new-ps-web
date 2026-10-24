
import type { Metadata } from "next";
import Image from "next/image";

import DonateContactForm from "@/components/donate/DonateContactForm";

export const metadata: Metadata = {
  title: "Donate | Prayer.Social",
  description:
    "Support the Prayer.Social ministry and help connect people around the world through prayer.",
};

const DONATION_URL =
  "https://www.paypal.com/donate/?hosted_button_id=P99KWBGQ5GM9W";

const containerClasses =
  "mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24";

const supportServices = [
  "Application development",
  "Database hosting services",
  "Application hosting services",
  "Other online support services",
  "Web hosting services",
  "Administrative service costs",
];

function DonateButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <a
      href={DONATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        min-h-[48px]
        items-center
        justify-center
        rounded-[5px]
        bg-white
        px-6
        text-[14px]
        font-semibold
        text-[#2A0D33]
        transition-colors
        duration-200
        hover:bg-[#EEBF1C]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#EEBF1C]
      "
    >
      {children}
    </a>
  );
}

function DonateHero() {
  return (
    <section
      aria-labelledby="donate-hero-title"
      className="relative isolate overflow-hidden bg-[#2A0D33] text-white"
    >
      <div
        className={`${containerClasses} relative`}
      >
        {/* HERO TEXT */}
        <div
          className="
            relative
            z-20
            max-w-[590px]
            pb-2
            pt-16
            sm:pt-20
            lg:flex
            lg:min-h-[545px]
            lg:flex-col
            lg:justify-center
            lg:py-20
          "
        >
          <h1
            id="donate-hero-title"
            className="
              max-w-[520px]
              text-[36px]
              font-normal
              leading-[1.18]
              tracking-[-0.035em]
              sm:text-[43px]
              lg:text-[52px]
              xl:text-[58px]
            "
          >
            Your Sponsorship is Greatly Appreciated
          </h1>

          <p
            className="
              mt-6
              max-w-[470px]
              text-[15px]
              leading-[1.8]
              text-white/95
              sm:text-[16px]
            "
          >
            100% of your donations are used to
            support the ministry.
          </p>

          <div className="mt-6">
            <DonateButton>
              Donate Now
            </DonateButton>
          </div>
        </div>

        {/* HERO IMAGE COMPOSITION */}
        <div
          className="
            pointer-events-none
            relative
            mx-[-24px]
            mt-5
            h-[300px]
            overflow-hidden
            sm:mx-[-32px]
            sm:h-[350px]
            md:mx-[-40px]
            lg:absolute
            lg:inset-y-0
            lg:right-0
            lg:mt-0
            lg:h-full
            lg:w-[57%]
            lg:overflow-visible
          "
        >
          {/* BACK IMAGE: HANDS */}
          <Image
            src="/images/hands.png"
            alt=""
            aria-hidden="true"
            width={550}
            height={350}
            priority
            className="
              absolute
              bottom-[-10px]
              right-[-125px]
              z-0
              w-[490px]
              max-w-none
              object-contain
              sm:right-[-85px]
              sm:w-[550px]
              lg:bottom-0
              lg:right-[-60px]
              lg:w-[550px]
              xl:w-[650px]
            "
          />

          {/* FRONT IMAGE: COIN CONTAINER */}
          <Image
            src="/images/coin-container.png"
            alt="Illustration of a donation coin being placed into a collection jar"
            width={500}
            height={465}
            priority
            className="
              absolute
              bottom-[-36px]
              right-[2%]
              z-10
              w-[290px]
              max-w-none
              object-contain
              sm:bottom-[-35px]
              sm:right-[12%]
              sm:w-[360px]
              lg:bottom-[-45px]
              lg:right-[9%]
              lg:w-[410px]
              xl:bottom-[-50px]
              xl:right-[20%]
              xl:w-[500px]
            "
          />
        </div>
      </div>
    </section>
  );
}

function DonationInformation() {
  return (
    <section
      aria-labelledby="donation-information-title"
      className="bg-white py-16 text-[#2A0D33] lg:py-24"
    >
      <div
        className={`
          ${containerClasses}
          grid
          grid-cols-1
          items-start
          gap-x-12
          gap-y-10
          lg:grid-cols-2
          lg:gap-x-16
        `}
      >
        {/* LEFT: EXPLANATION */}
        <div>
          <h2
            id="donation-information-title"
            className="
              max-w-[570px]
              text-[30px]
              font-normal
              leading-[1.3]
              tracking-[-0.025em]
              sm:text-[36px]
            "
          >
            About Your Donations, Where &amp; How
            They are used
          </h2>

          <div
            className="
              mt-7
              space-y-6
              text-[15px]
              leading-[1.85]
            "
          >
            <p>
              We are committed to ensuring we are
              using your donations appropriately and
              judiciously. 100% of your donations are
              used for the full running of Prayer
              Social. This falls into two broad
              categories:
            </p>

            <p>
              1. Continue with the development and
              maintenance of the Network and the App
            </p>

            <p>
              2. Pay for services needed to run the
              ministry.
            </p>
          </div>
        </div>

        {/* RIGHT: SUPPORT SERVICE CARDS */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            lg:gap-5
          "
        >
          {supportServices.map((service) => (
            <div
              key={service}
              className="
                flex
                min-h-[66px]
                items-center
                rounded-[2px]
                bg-[#FBF9FC]
                px-5
                py-4
                text-[14px]
                font-semibold
                leading-6
                text-[#2A0D33]
                sm:px-6
              "
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DonateContact() {
  return (
    <section
      id="donate-contact"
      aria-labelledby="donate-contact-title"
      className="bg-[#2A0D33] py-16 text-white lg:py-24"
    >
      <div
        className={`
          ${containerClasses}
          grid
          grid-cols-1
          items-start
          gap-x-12
          gap-y-12
          lg:grid-cols-2
          lg:gap-x-16
        `}
      >
        {/* LEFT: CONTACT INFORMATION */}
        <div>
          <h2
            id="donate-contact-title"
            className="
              text-[31px]
              font-normal
              leading-[1.3]
              tracking-[-0.025em]
              sm:text-[38px]
            "
          >
            Get in Touch. Get Involved.
          </h2>

          <p
            className="
              mt-7
              max-w-[470px]
              text-[15px]
              leading-[1.8]
              text-white/90
            "
          >
            We&apos;re a few clicks and call away.
            Please reach out.
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              items-start
              gap-5
            "
          >
            <a
              href="mailto:info@prayer.social"
              className="
                text-[22px]
                leading-snug
                transition-colors
                hover:text-[#EEBF1C]
              "
            >
              info@prayer.social
            </a>

            <a
              href="tel:+12487191653"
              className="
                text-[22px]
                leading-snug
                transition-colors
                hover:text-[#EEBF1C]
              "
            >
              Call Us: 1 (248) 719-1653
            </a>

            <DonateButton>
              Make a Donation
            </DonateButton>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div className="w-full lg:mt-20">
          <DonateContactForm />
        </div>
      </div>
    </section>
  );
}

export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <DonationInformation />
      <DonateContact />
    </>
  );
}
