import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us | Whisper of the House",
  description:
    "Contact Whisper of the House about gaming guides, corrections, site feedback, business inquiries, advertising, or other questions.",
  alternates: {
    canonical: "https://www.whisperofthehouse.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}