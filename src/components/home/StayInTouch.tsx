"use client";

import { FormEvent, useState } from "react";

export default function StayInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No subscription backend has been provided. Open an explicit email request
    // instead of incorrectly claiming the visitor has been subscribed.
    const subject = encodeURIComponent("Prayer.Social newsletter subscription");
    const body = encodeURIComponent(
      `Hello Prayer.Social,\n\nPlease add me to your newsletter.\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nThank you.`
    );
    setStatus("Your email application should open with a subscription request. Please send it to complete your request.");
    window.location.href = `mailto:info@prayer.social?subject=${subject}&body=${body}`;
  }

  return (
    <section aria-labelledby="stay-in-touch" className="bg-[#FBF9FC] px-6 py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1248px]">
        <h2 id="stay-in-touch" className="text-[30px] font-normal leading-tight tracking-[-0.025em] text-[#2A0D33] md:text-[36px]">
          Stay In Touch
        </h2>
        <form onSubmit={handleSubscribe} className="mt-7 flex max-w-[1000px] flex-col items-start gap-5 md:flex-row md:items-end md:gap-6">
          <label className="w-full flex-1 text-[13px] font-semibold text-[#2A0D33]">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              placeholder="Your name"
              required
              maxLength={100}
              className="mt-2 h-12 w-full rounded-[5px] border border-[#2A0D33]/25 bg-white px-4 text-[14px] font-normal text-[#2A0D33] outline-none placeholder:text-[#2A0D33]/55 focus:border-[#2A0D33] focus:ring-2 focus:ring-[#EEBF1C]/45"
            />
          </label>
          <label className="w-full flex-1 text-[13px] font-semibold text-[#2A0D33]">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              placeholder="Your email"
              required
              maxLength={254}
              className="mt-2 h-12 w-full rounded-[5px] border border-[#2A0D33]/25 bg-white px-4 text-[14px] font-normal text-[#2A0D33] outline-none placeholder:text-[#2A0D33]/55 focus:border-[#2A0D33] focus:ring-2 focus:ring-[#EEBF1C]/45"
            />
          </label>
          <button
            type="submit"
            className="inline-flex h-12 shrink-0 cursor-pointer items-center justify-center rounded-[5px] bg-[#EEBF1C] px-7 text-[13px] font-semibold text-[#2A0D33] transition-colors hover:bg-[#e1ac00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A0D33]"
          >
            Subscribe
          </button>
        </form>
        {status && <p className="mt-4 max-w-[800px] text-[13px] leading-6 text-[#2A0D33]" role="status">{status}</p>}
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-semibold text-[#2A0D33]">
          <span>Facebook</span>
          <span>X</span>
          <span>Instagram</span>
          <span>YouTube</span>
        </div>
      </div>
    </section>
  );
}
