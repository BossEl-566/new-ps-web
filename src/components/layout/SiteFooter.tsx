
import Link from "next/link";

type FooterLink = {
  label: string;
  href?: string;
};

type FooterSection = {
  title: string;
  id: string;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    id: "about-us",
    title: "About Us",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms Of Use", href: "/terms-of-use" },
    ],
  },
  {
    id: "get-involved",
    title: "Get Involved",
    links: [
      { label: "Give", href: "/donate" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      { label: "Bible", href: "/bible" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    id: "follow-us",
    title: "Follow Us",
    links: [
      { label: "Facebook" },
      { label: "Instagram" },
      { label: "TikTok" },
      { label: "Twitter" },
      { label: "YouTube" },
      { label: "LinkedIn" },
    ],
  },
];

const bottomSocialLinks: FooterLink[] = [
  { label: "Facebook" },
  { label: "X" },
];

function FooterItem({ label, href }: FooterLink) {
  const className = `
    inline-flex
    min-h-6
    items-center
    text-[14px]
    font-semibold
    leading-6
  `;

  if (!href) {
    return <span className={className}>{label}</span>;
  }

  return (
    <Link
      href={href}
      className={`
        ${className}
        transition-colors
        duration-200
        hover:text-brand-orange
        focus-visible:rounded-sm
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-brand-orange
      `}
    >
      {label}
    </Link>
  );
}

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-ink text-white">
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-6
          pb-8
          pt-12
          lg:px-12
          lg:pb-[34px]
          lg:pt-16
          xl:px-24
        "
      >
        {/* MAIN FOOTER SECTIONS */}
        <nav
          aria-label="Footer navigation"
          className="
            grid
            grid-cols-1
            gap-y-8
            lg:grid-cols-4
            lg:gap-x-8
            lg:gap-y-0
          "
        >
          {footerSections.map((section) => (
            <section
              key={section.id}
              aria-labelledby={`footer-${section.id}`}
            >
              <h2
                id={`footer-${section.id}`}
                className="
                  text-[26px]
                  font-normal
                  leading-9
                  tracking-[-0.02em]
                  text-white
                "
              >
                {section.title}
              </h2>

              <ul
                className="
                  mt-2
                  flex
                  flex-col
                  gap-2
                  lg:mt-3
                  lg:gap-3
                "
              >
                {section.links.map((link) => (
                  <li key={link.label}>
                    <FooterItem {...link} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>

        {/* BOTTOM FOOTER INFORMATION */}
        <div
          className="
            mt-7
            flex
            flex-col
            text-[14px]
            leading-6
            lg:mt-11
            lg:grid
            lg:grid-cols-[34%_34%_1fr]
            lg:items-start
            lg:text-[13px]
          "
        >
          {/* COPYRIGHT */}
          <div className="min-w-0">
            <p
              className="
                whitespace-nowrap
                text-[13px]
                font-normal
                min-[390px]:text-[14px]
                lg:text-[13px]
              "
            >
              Prayer Social | All Rights Reserved | Copyright{" "}
              {currentYear}
            </p>
          </div>

          {/* CONTACT DETAILS */}
          <div
            className="
              mt-[30px]
              flex
              flex-col
              text-[14px]
              leading-[22px]
              lg:mt-0
              lg:flex-row
              lg:flex-wrap
              lg:items-center
              lg:gap-x-3
              lg:leading-6
              lg:text-[13px]
            "
          >
            <a
              href="tel:+12487191653"
              className="
                w-fit
                transition-colors
                duration-200
                hover:text-brand-orange
                focus-visible:outline-2
                focus-visible:outline-brand-orange
              "
            >
              <span className="lg:hidden">Call: </span>
              <span className="hidden lg:inline">+</span>
              1 248 719 1653
            </a>

            <span
              aria-hidden="true"
              className="hidden lg:inline"
            >
              ·
            </span>

            <a
              href="mailto:info@prayer.social"
              className="
                w-fit
                transition-colors
                duration-200
                hover:text-brand-orange
                focus-visible:outline-2
                focus-visible:outline-brand-orange
              "
            >
              <span className="lg:hidden">Email: </span>
              info@prayer.social
            </a>
          </div>

          {/* ADDITIONAL SOCIAL LINKS */}
          <div
            className="
              mt-8
              flex
              items-center
              gap-5
              lg:mt-0
              lg:gap-4
            "
          >
            {bottomSocialLinks.map((link) => (
              <FooterItem key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
