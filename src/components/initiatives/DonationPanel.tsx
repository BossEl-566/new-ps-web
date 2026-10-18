"use client";

import { useState } from "react";

export default function DonationPanel() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="mt-7 rounded-[2px] bg-[#FBF9FC] px-5 py-6 sm:px-7">
      <h3 className="text-[23px] font-normal leading-snug">Reaching The Golden Age Initiative</h3>
      <p className="mt-3 text-[14px]">Prayer Social</p>
      <button
        type="button"
        aria-expanded={showInfo}
        aria-controls="donate-payment-info"
        onClick={() => setShowInfo((previous) => !previous)}
        className="mt-4 inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-[6px] bg-[#EEBF1C] px-5 text-[14px] font-semibold text-[#2A0D33] transition-colors hover:bg-[#e3b000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A0D33]"
      >
        Donate with PayPal
      </button>
      {showInfo && (
        <div id="donate-payment-info" role="status" className="mt-4 max-w-xl text-[14px] leading-relaxed">
          The official PayPal donation link has not been connected yet. To arrange support for this initiative, please email{" "}
          <a className="font-semibold underline underline-offset-2" href="mailto:info@prayer.social?subject=Support%20for%20Reaching%20The%20Golden%20Age%20Initiative">
            info@prayer.social
          </a>.
        </div>
      )}
    </div>
  );
}
