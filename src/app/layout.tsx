
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import SiteHeader from "@/components/layout/SiteHeader";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Prayer.Social",
  description: "Prayer.Social official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} font-sans antialiased`}
      >
        <SiteHeader />

        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
