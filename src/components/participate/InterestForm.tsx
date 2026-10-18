"use client";

import { FormEvent, useState } from "react";

type AgeRange = "18+" | "15-17" | "";

const fieldClass =
  "mt-2 block h-[52px] w-full rounded-[5px] border border-[#2A0D33]/30 bg-white px-4 text-[15px] font-normal text-[#2A0D33] outline-none transition-colors focus:border-[#2A0D33] focus:ring-2 focus:ring-[#EEBF1C]/50";
const labelClass = "block text-[13px] font-semibold text-[#2A0D33]";

export default function InterestForm() {
  const [ageRange, setAgeRange] = useState<AgeRange>("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    const form = event.currentTarget;
    const fields = new FormData(form);
    const read = (name: string) => String(fields.get(name) ?? "").trim();

    if (read("email").toLowerCase() !== read("confirmEmail").toLowerCase()) {
      setError("The email addresses do not match. Please check them.");
      form.querySelector<HTMLInputElement>('#confirmEmail')?.focus();
      return;
    }
    if (!ageRange) {
      setError("Please choose your age range before continuing.");
      form.querySelector<HTMLInputElement>('#age-adult')?.focus();
      return;
    }
    if (read("answer") !== "16") {
      setError("Please check your answer to 3 + 13 and try again.");
      form.querySelector<HTMLInputElement>('#answer')?.focus();
      return;
    }

    // No submissions API or email service is configured yet. Prepare a draft
    // in the user's email client rather than claiming the details were saved.
    const subject = encodeURIComponent("Prayer.Social — volunteer interest");
    const body = encodeURIComponent(
      [
        "Hello Prayer.Social,",
        "",
        "I would like to express my interest in volunteering.",
        "",
        `First name: ${read("firstName")}`,
        `Last name: ${read("lastName")}`,
        `Email: ${read("email")}`,
        `Address: ${read("address") || "Not provided"}`,
        `Phone number: ${read("phone") || "Not provided"}`,
        `Age range: ${ageRange}`,
        `Comments: ${read("comment") || "None"}`,
        "",
        "Thank you.",
      ].join("\n")
    );

    setMessage(
      "An email draft should open. Please send the email to complete your enquiry — your details have not been submitted directly through this website."
    );
    window.location.href = `mailto:info@prayer.social?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="interest-form"
      aria-labelledby="interest-heading"
      className="scroll-mt-8 bg-[#FBF9FC] text-[#2A0D33]"
    >
      
<div
  className="
    site-container
    pb-12
    pt-[72px]
    lg:pb-[90px]
    lg:pt-[88px]
  "
>

        <h2
          id="interest-heading"
          className="max-w-[950px] text-[30px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[40px]"
        >
          Complete Form To Express Your Interest
        </h2>

        <form onSubmit={handleSubmit} className="mt-8" noValidate={false}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
            <label className={labelClass} htmlFor="firstName">
              First Name *
              <input id="firstName" name="firstName" type="text" autoComplete="given-name" required maxLength={100} className={fieldClass} />
            </label>
            <label className={labelClass} htmlFor="lastName">
              Last Name *
              <input id="lastName" name="lastName" type="text" autoComplete="family-name" required maxLength={100} className={fieldClass} />
            </label>
            <label className={labelClass} htmlFor="email">
              Email Address *
              <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} />
            </label>
            <label className={labelClass} htmlFor="confirmEmail">
              Confirm Email Address *
              <input id="confirmEmail" name="confirmEmail" type="email" autoComplete="off" required maxLength={254} className={fieldClass} />
            </label>
            <label className={labelClass} htmlFor="address">
              Address
              <input id="address" name="address" type="text" autoComplete="street-address" maxLength={250} className={fieldClass} />
            </label>
            <label className={labelClass} htmlFor="phone">
              Phone Number
              <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={35} className={fieldClass} />
            </label>
          </div>

          <fieldset className="mt-8">
            <legend className="text-[13px] font-semibold">
              Are you 18 years or older? *
            </legend>
            <p className="mt-5 text-[14px] leading-6">
              You must be 15 years or older to volunteer with Prayer Social.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <label className="flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-[5px] border border-[#2A0D33]/30 bg-white px-4 py-3 text-center text-[14px] focus-within:border-[#2A0D33] focus-within:ring-2 focus-within:ring-[#EEBF1C]/50">
                <input
                  id="age-adult"
                  type="radio"
                  name="ageRange"
                  value="18+"
                  required
                  checked={ageRange === "18+"}
                  onChange={() => setAgeRange("18+")}
                  className="accent-[#2A0D33]"
                />
                Yes, I am 18 years or older
              </label>
              <label className="flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-[5px] border border-[#2A0D33]/30 bg-white px-4 py-3 text-center text-[14px] focus-within:border-[#2A0D33] focus-within:ring-2 focus-within:ring-[#EEBF1C]/50">
                <input
                  type="radio"
                  name="ageRange"
                  value="15-17"
                  required
                  checked={ageRange === "15-17"}
                  onChange={() => setAgeRange("15-17")}
                  className="accent-[#2A0D33]"
                />
                No, I&apos;m between 15 and 17
              </label>
            </div>
          </fieldset>

          <label className={`${labelClass} mt-8`} htmlFor="comment">
            Comment
            <textarea
              id="comment"
              name="comment"
              rows={5}
              maxLength={1000}
              className="mt-2 block min-h-[145px] w-full resize-y rounded-[5px] border border-[#2A0D33]/30 bg-white px-4 py-3 text-[15px] font-normal text-[#2A0D33] outline-none focus:border-[#2A0D33] focus:ring-2 focus:ring-[#EEBF1C]/50"
            />
          </label>

          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:gap-8">
            <label className={labelClass} htmlFor="answer">
              3 + 13 =
              <input
                id="answer"
                name="answer"
                type="text"
                inputMode="numeric"
                pattern="[0-9]+"
                required
                maxLength={3}
                autoComplete="off"
                className={`${fieldClass} w-[160px]`}
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-[52px] min-w-[92px] cursor-pointer items-center justify-center rounded-[5px] bg-[#EEBF1C] px-6 text-[14px] font-semibold text-[#2A0D33] transition-colors duration-200 hover:bg-[#e6b400] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A0D33]"
            >
              Submit
            </button>
          </div>
          {error && (
            <p role="alert" className="mt-5 max-w-2xl text-[14px] font-semibold text-red-700">
              {error}
            </p>
          )}
          {message && (
            <p role="status" className="mt-5 max-w-2xl text-[14px] leading-6">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
