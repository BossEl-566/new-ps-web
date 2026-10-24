
"use client";

import { useState, type FormEvent } from "react";

const inputClassName = `
  mt-2
  block
  min-h-[52px]
  w-full
  rounded-[5px]
  border
  border-[#2A0D33]/60
  bg-white
  px-4
  py-3
  text-[14px]
  text-[#2A0D33]
  outline-none
  transition-colors
  focus:border-[#ED9322]
  focus:ring-2
  focus:ring-[#ED9322]/20
`;

export default function DonateContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(
      formData.get("name") ?? ""
    ).trim();

    const email = String(
      formData.get("email") ?? ""
    ).trim();

    const userMessage = String(
      formData.get("message") ?? ""
    ).trim();

    if (!name || !email || !userMessage) {
      setMessage("Please complete all fields.");
      return;
    }

    const subject = encodeURIComponent(
      `Prayer.Social enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${userMessage}`
    );

    const mailtoUrl =
      `mailto:info@prayer.social?subject=${subject}&body=${body}`;

    setMessage(
      "Your email application should open with a prepared message. Please send the email to complete your enquiry."
    );

    window.location.href = mailtoUrl;
  }

  return (
    <div
      className="
        w-full
        bg-white
        p-6
        text-[#2A0D33]
        sm:p-8
      "
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        {/* NAME */}
        <div>
          <label
            htmlFor="donate-name"
            className="block text-[14px] font-semibold"
          >
            Name
          </label>

          <input
            id="donate-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            className={inputClassName}
          />
        </div>

        {/* EMAIL */}
        <div>
          <label
            htmlFor="donate-email"
            className="block text-[14px] font-semibold"
          >
            Email Address
          </label>

          <input
            id="donate-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className={inputClassName}
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label
            htmlFor="donate-message"
            className="block text-[14px] font-semibold"
          >
            Message
          </label>

          <textarea
            id="donate-message"
            name="message"
            required
            maxLength={5000}
            rows={6}
            className={`
              ${inputClassName}
              min-h-[160px]
              resize-y
            `}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="
            inline-flex
            min-h-[48px]
            w-fit
            min-w-[100px]
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
            hover:bg-[#dfad00]
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#2A0D33]
          "
        >
          Submit
        </button>

        {message && (
          <p
            role="status"
            className="text-[13px] leading-6"
          >
            {message}
          </p>
        )}
      </form>

      {/* SOCIAL PLATFORM LABELS */}
      <div
        className="
          mt-7
          flex
          flex-wrap
          items-center
          gap-5
          text-[13px]
          font-semibold
        "
      >
        <span>Facebook</span>
        <span>X</span>
        <span>Instagram</span>
      </div>
    </div>
  );
}
