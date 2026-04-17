import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "MOUSE: P.I. For Hire",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  redirect("/mouse-pi-for-hire/collectibles-hub");
}