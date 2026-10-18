
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Enter App", href: "/app" },
  { label: "Participate", href: "/participate" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
  { label: "Search", href: "/search" },
];

const socialPlatforms = [
  "Facebook",
  "X",
  "Instagram",
  "RSS",
];

export default function SiteHeader() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  // Lock page scrolling and handle keyboard navigation.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = menuPanelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href]'
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="relative z-50 w-full bg-white text-brand-ink">

      {/* TOP SOCIAL BAR */}
      <div
        className="
          mx-auto
          flex
          h-9
          w-full
          items-center
          justify-between
          bg-brand-orange
          pl-8
          pr-12
          lg:w-[448px]
          lg:justify-center
          lg:gap-7
          lg:px-0
        "
        aria-label="Social platforms"
      >
        {socialPlatforms.map((platform) => (
          <span
            key={platform}
            className="whitespace-nowrap text-[14px] font-semibold leading-none"
          >
            {platform}
          </span>
        ))}
      </div>

      {/* MAIN HEADER */}
      <div
        className="
          mx-auto
          flex
          h-[100px]
          w-full
          max-w-[992px]
          items-center
          justify-between
          px-6
          lg:h-[92px]
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Prayer.Social home"
          className="inline-flex shrink-0 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-contain lg:h-14 lg:w-14"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Primary navigation"
          className="
            hidden
            min-w-0
            flex-1
            items-center
            justify-between
            pl-6
            lg:flex
          "
        >
          {navigationLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`
                  whitespace-nowrap
                  rounded-lg
                  px-2
                  py-2
                  text-[14px]
                  font-semibold
                  leading-5
                  transition-colors
                  duration-200
                  hover:bg-brand-orange/15
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-brand-orange
                  ${
                    active
                      ? "bg-brand-orange/15 text-brand-ink"
                      : "text-brand-ink"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(true)}
          className="
            flex
            h-[52px]
            min-w-[71px]
            cursor-pointer
            items-center
            justify-center
            rounded-[9px]
            border
            border-brand-ink
            px-[15px]
            text-[14px]
            font-semibold
            transition-colors
            duration-200
            hover:border-brand-orange
            hover:bg-brand-orange/10
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-brand-orange
            lg:hidden
          "
        >
          Menu
        </button>
      </div>

      {/* MOBILE FULL-SCREEN MENU */}
      {menuOpen && (
        <div
          ref={menuPanelRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="
            fixed
            inset-0
            z-[100]
            overflow-y-auto
            bg-white
            lg:hidden
          "
        >
          <div className="min-h-full px-6 pb-7 pt-12">

            {/* CLOSE BUTTON */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="
                flex
                h-[52px]
                min-w-[69px]
                cursor-pointer
                items-center
                justify-center
                rounded-[9px]
                border
                border-brand-ink
                px-[15px]
                text-[14px]
                font-semibold
                transition-colors
                duration-200
                hover:border-brand-orange
                hover:bg-brand-orange/10
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-brand-orange
              "
            >
              Close
            </button>

            {/* MOBILE MENU LOGO */}
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Prayer.Social home"
              className="mt-8 flex h-14 w-14 items-center justify-center"
            >
              <Image
                src="/images/logo.png"
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </Link>

            {/* MOBILE NAVIGATION LINKS */}
            <nav
              aria-label="Mobile primary navigation"
              className="mt-3 flex flex-col"
            >
              {navigationLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`
                      flex
                      h-[52px]
                      w-full
                      shrink-0
                      items-center
                      rounded-lg
                      text-[14px]
                      font-semibold
                      transition-colors
                      duration-200
                      hover:bg-brand-orange/10
                      focus-visible:outline-2
                      focus-visible:outline-brand-orange
                      ${
                        active
                          ? "bg-brand-orange/15"
                          : "bg-transparent"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
