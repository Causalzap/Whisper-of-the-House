import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Whisper of the House",
  description:
    "Read the Whisper of the House Privacy Policy, including information about cookies, analytics, advertising, Mediavine, and privacy choices.",
  alternates: {
    canonical: "https://www.whisperofthehouse.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}