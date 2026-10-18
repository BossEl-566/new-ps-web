
export default function DonationPanel() {
  return (
    <div className="mt-7 rounded-[2px] bg-[#FBF9FC] px-5 py-6 sm:px-7">
      <h3 className="text-[23px] font-normal leading-snug">
        Reaching The Golden Age Initiative
      </h3>

      <p className="mt-3 text-[14px]">
        Prayer Social
      </p>

      <a
        href="https://www.paypal.com/giving/campaigns?campaign_id=LD27EH259VW5S"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-4
          inline-flex
          min-h-[48px]
          cursor-pointer
          items-center
          justify-center
          rounded-[6px]
          bg-[#EEBF1C]
          px-5
          text-[14px]
          font-semibold
          text-[#2A0D33]
          transition-colors
          duration-200
          hover:bg-[#e3b000]
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#2A0D33]
        "
      >
        Donate with PayPal
      </a>
    </div>
  );
}
