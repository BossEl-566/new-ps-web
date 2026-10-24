
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import StayInTouch from "@/components/home/StayInTouch";

const container =
  "mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24";

const inputClass = `
  mt-2
  block
  h-[52px]
  w-full
  min-w-0
  rounded-[5px]
  border
  border-[#2A0D33]/60
  bg-white
  px-4
  text-[14px]
  text-[#2A0D33]
  outline-none
  transition-colors
  placeholder:text-[#2A0D33]/60
  focus:border-[#ED9322]
  focus:ring-2
  focus:ring-[#ED9322]/20
`;

const heroButtonClass = `
  inline-flex
  min-h-[46px]
  items-center
  justify-center
  rounded-[5px]
  bg-white
  px-5
  text-[13px]
  font-semibold
  text-[#2A0D33]
  transition-colors
  duration-200
  hover:bg-[#EEBF1C]
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-[#EEBF1C]
`;

const navigationCards = [
  { title: "Our Blog", href: "/blog" },
  { title: "Volunteer", href: "/participate" },
  { title: "Enter The App", href: "/app" },
  { title: "Donate", href: "/donate" },
];

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  mathAnswer: string;
};

type PageView = "form" | "success" | "validation";

const emptyForm: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
  mathAnswer: "",
};

function FeedbackScreen({
  status,
  onReturn,
}: {
  status: "success" | "validation";
  onReturn: () => void;
}) {
  const success = status === "success";

  return (
    <section
      className="
        flex
        min-h-[350px]
        items-center
        bg-[#FBF9FC]
        py-16
        text-[#2A0D33]
        lg:py-[72px]
      "
    >
      <div className={container}>
        <h1
          className="
            text-[36px]
            font-normal
            leading-[1.2]
            tracking-[-0.03em]
            sm:text-[44px]
          "
        >
          {success ? "Thank you" : "Please check the form"}
        </h1>

        <p className="mt-8 text-[16px] leading-7">
          {success
            ? "Your submission has been received."
            : "Complete the required fields and check that your email address is correct."}
        </p>

        <button
          type="button"
          onClick={onReturn}
          className="
            mt-8
            inline-flex
            min-h-[52px]
            cursor-pointer
            items-center
            justify-center
            rounded-[9px]
            border
            border-[#2A0D33]
            bg-transparent
            px-5
            text-[14px]
            font-semibold
            transition-colors
            hover:bg-[#EEBF1C]/15
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#EEBF1C]
          "
        >
          Return to the form
        </button>
      </div>
    </section>
  );
}

export default function ContactPageClient() {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [view, setView] = useState<PageView>("form");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [videoNotice, setVideoNotice] = useState("");
  const [website, setWebsite] = useState("");

  function updateField(
    field: keyof FormValues,
    value: string
  ) {
    setValues((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (error) setError("");
  }

  function scrollToForm(subject?: string) {
    if (subject) {
      setValues((previous) => ({
        ...previous,
        subject,
      }));
    }

    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function returnToForm() {
    setView("form");
    setError("");

    requestAnimationFrame(() => {
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  function validateForm() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
      values.firstName.trim().length > 0 &&
      values.firstName.trim().length <= 100 &&
      values.lastName.trim().length > 0 &&
      values.lastName.trim().length <= 100 &&
      emailPattern.test(values.email.trim()) &&
      values.email.trim().length <= 254 &&
      values.subject.trim().length > 0 &&
      values.subject.trim().length <= 160 &&
      values.message.trim().length >= 5 &&
      values.message.trim().length <= 5000 &&
      values.mathAnswer.trim() === "16"
    );
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    if (submitting) return;

    if (!validateForm()) {
      setView("validation");
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          website,
        }),
      });

      if (response.ok) {
        setView("success");
        setValues(emptyForm);
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      if (response.status === 400) {
        setView("validation");
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      if (response.status === 429) {
        setError(
          "Too many requests. Please try again later."
        );
        return;
      }

      setError(
        "Your message could not be submitted. Please try again later or email info@prayer.social."
      );
    } catch {
      setError(
        "Unable to connect. Please check your internet connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  // FEEDBACK SCREEN
  if (view !== "form") {
    return (
      <FeedbackScreen
        status={view}
        onReturn={returnToForm}
      />
    );
  }

  return (
    <div className="w-full text-[#2A0D33]">

      {/* ======================================
          SECTION 1 — CONTACT HERO
      ====================================== */}
      <section
        className="w-full bg-[#2A0D33] text-white"
        aria-labelledby="contact-hero-title"
      >
        <div
          className={`
            ${container}
            flex
            min-h-[410px]
            flex-col
            justify-center
            py-16
            lg:py-20
          `}
        >
          <h1
            id="contact-hero-title"
            className="
              text-[39px]
              font-normal
              leading-[1.2]
              tracking-[-0.035em]
              sm:text-[48px]
              lg:text-[58px]
            "
          >
            Contact Prayer Social
          </h1>

          <p
            className="
              mt-7
              text-[15px]
              leading-[1.8]
              text-white/95
              sm:text-[16px]
            "
          >
            Have a question? Need to speak to us?
            Have a suggestion?
          </p>

          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-5
            "
          >
            <button
              type="button"
              onClick={() => scrollToForm()}
              className={heroButtonClass}
            >
              Fill out a connection card
            </button>

            <button
              type="button"
              onClick={() => scrollToForm("Prayer request")}
              className={heroButtonClass}
            >
              Prayer requests
            </button>
          </div>

          <div className="mt-7">
            <button
              type="button"
              onClick={() =>
                setVideoNotice(
                  "The Prayer Social introduction video will be available soon."
                )
              }
              className={heroButtonClass}
            >
              Play video
            </button>

            {videoNotice && (
              <p
                role="status"
                className="mt-3 text-[13px] text-white/85"
              >
                {videoNotice}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 2 — CONTACT INFO
      ====================================== */}
      <section
        aria-labelledby="contact-info-title"
        className="bg-white py-16 lg:py-20"
      >
        <div className={container}>
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.14em]
            "
          >
            Get in touch
          </p>

          <h2
            id="contact-info-title"
            className="
              mt-7
              text-[32px]
              font-normal
              tracking-[-0.025em]
              sm:text-[38px]
            "
          >
            Contact Info
          </h2>

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
              md:gap-6
            "
          >
            <a
              href="mailto:info@prayer.social"
              className="
                w-fit
                text-[20px]
                transition-colors
                hover:text-[#BD8614]
                sm:text-[23px]
              "
            >
              info@prayer.social
            </a>

            <a
              href="tel:+12487191653"
              className="
                w-fit
                text-[20px]
                transition-colors
                hover:text-[#BD8614]
                sm:text-[23px]
              "
            >
              +1 248 719 1653
            </a>
          </div>

          {/* FOUR NAVIGATION CARDS */}
          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-7
            "
          >
            {navigationCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="
                  flex
                  min-h-[155px]
                  items-center
                  rounded-[5px]
                  bg-[#2A0D33]
                  px-7
                  py-8
                  text-[23px]
                  font-normal
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-[#43204C]
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#EEBF1C]
                  lg:min-h-[174px]
                "
              >
                {card.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 3 — CONTACT FORM
      ====================================== */}
      <section
        id="contact-form"
        aria-label="Contact form"
        className="
          scroll-mt-6
          bg-[#FBF9FC]
          py-16
          lg:py-[78px]
        "
      >
        <div className={container}>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="w-full"
          >
            {/* SPAM TRAP */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-website">
                Website
              </label>
              <input
                id="contact-website"
                name="website"
                type="text"
                autoComplete="off"
                tabIndex={-1}
                value={website}
                onChange={(e) =>
                  setWebsite(e.target.value)
                }
              />
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-x-7
                gap-y-7
                md:grid-cols-2
              "
            >
              {/* FIRST NAME */}
              <div>
                <label
                  htmlFor="contact-first-name"
                  className="text-[13px] font-semibold"
                >
                  First Name
                </label>

                <input
                  id="contact-first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={values.firstName}
                  onChange={(e) =>
                    updateField(
                      "firstName",
                      e.target.value
                    )
                  }
                  maxLength={100}
                  required
                  className={inputClass}
                />
              </div>

              {/* LAST NAME */}
              <div>
                <label
                  htmlFor="contact-last-name"
                  className="text-[13px] font-semibold"
                >
                  Last Name
                </label>

                <input
                  id="contact-last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={(e) =>
                    updateField(
                      "lastName",
                      e.target.value
                    )
                  }
                  maxLength={100}
                  required
                  className={inputClass}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-[13px] font-semibold"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) =>
                    updateField(
                      "email",
                      e.target.value
                    )
                  }
                  maxLength={254}
                  required
                  className={inputClass}
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-[13px] font-semibold"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={(e) =>
                    updateField(
                      "subject",
                      e.target.value
                    )
                  }
                  maxLength={160}
                  required
                  className={inputClass}
                />
              </div>

              {/* MESSAGE */}
              <div className="md:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="text-[13px] font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={values.message}
                  onChange={(e) =>
                    updateField(
                      "message",
                      e.target.value
                    )
                  }
                  maxLength={5000}
                  rows={5}
                  required
                  className={`
                    ${inputClass}
                    h-auto
                    min-h-[145px]
                    resize-y
                    py-4
                  `}
                />
              </div>
            </div>

            {/* VERIFICATION AND SUBMIT */}
            <div
              className="
                mt-7
                flex
                flex-wrap
                items-end
                gap-6
              "
            >
              <div className="w-[160px]">
                <label
                  htmlFor="contact-math"
                  className="text-[13px] font-semibold"
                >
                  3 + 13 =
                </label>

                <input
                  id="contact-math"
                  name="mathAnswer"
                  type="text"
                  inputMode="numeric"
                  value={values.mathAnswer}
                  onChange={(e) =>
                    updateField(
                      "mathAnswer",
                      e.target.value
                    )
                  }
                  maxLength={3}
                  required
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="
                  inline-flex
                  min-h-[48px]
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-[5px]
                  bg-[#EEBF1C]
                  px-6
                  text-[14px]
                  font-semibold
                  text-[#2A0D33]
                  transition-colors
                  duration-200
                  hover:bg-[#DFAD00]
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#2A0D33]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            {error && (
              <p
                role="alert"
                className="
                  mt-5
                  max-w-[650px]
                  text-[14px]
                  leading-6
                  text-red-700
                "
              >
                {error}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ======================================
          SECTION 4 — PRAYER SOCIAL GROUPS
      ====================================== */}
      <section
        className="
          bg-[#2A0D33]
          py-16
          text-white
          lg:py-[82px]
        "
      >
        <div className={container}>
          <h2
            className="
              max-w-[1150px]
              text-[22px]
              font-normal
              leading-[1.65]
              tracking-[-0.02em]
              sm:text-[26px]
            "
          >
            We have local Prayer Social Groups for
            periodic in-person meet ups. These
            gatherings are exciting, uplifting
            and exceptional. They are Spirit-filled
            and participants never leave the same.
          </h2>

          <a
            href="mailto:info@prayer.social?subject=Prayer%20Social%20Local%20Group%20Enquiry"
            className={`
              ${heroButtonClass}
              mt-7
              w-fit
            `}
          >
            Find a group
          </a>
        </div>
      </section>

      {/* ======================================
          SECTION 5 — EXISTING NEWSLETTER
      ====================================== */}
      <StayInTouch />
    </div>
  );
}
