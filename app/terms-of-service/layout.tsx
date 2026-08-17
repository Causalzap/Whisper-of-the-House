import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service | Whisper of the House",
  description:
    "Read the Whisper of the House Terms of Service covering site use, gaming guide content, intellectual property, disclaimers, and other terms.",
  alternates: {
    canonical: "https://www.whisperofthehouse.com/terms-of-service",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}