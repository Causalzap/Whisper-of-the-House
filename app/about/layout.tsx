import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us | Whisper of the House",
  description:
    "Learn about Whisper of the House, an independent gaming guide site covering walkthroughs, puzzles, progression, endings, secrets, and player problems.",
  alternates: {
    canonical: "https://www.whisperofthehouse.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}