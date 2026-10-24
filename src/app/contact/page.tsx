
import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Prayer.Social",
  description:
    "Contact Prayer.Social for questions, suggestions, prayer requests, and opportunities to get involved.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
