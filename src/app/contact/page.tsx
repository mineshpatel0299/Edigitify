import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { ContactHero } from "@/components/contact-hero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Partner with Edigitify for product launches, performance pods, and growth retainers. Share your brief and we'll respond with a kickoff plan within 12 hours.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-16 pt-10">
      <ContactHero />
      <ContactSection />
    </div>
  );
}
