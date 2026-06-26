import type { Metadata } from "next";
import Layout from "../components/Layout";
import HomeHero from "@/components/home/HomeHero";
import HomeLatestStories from "@/components/home/HomeLatestStories";
import HomeSpotlight from "@/components/home/HomeSpotlight";
import HomeGuideHubs from "@/components/home/HomeGuideHubs";
import HomeEditorialFocus from "@/components/home/HomeEditorialFocus";
import HomeAllGuides from "@/components/home/HomeAllGuides";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/`;

export const metadata: Metadata = {
  title: "Indie Game Guides & Walkthroughs | Whisper of the House",
  description:
    "Independent PC and indie game guides for walkthroughs, endings, achievements, builds, collectibles, puzzle solutions, and first-hour routes.",
  alternates: {
    canonical: pageUrl,
  },
};

export default function Home() {
  return (
    <Layout>
      <main className="bg-slate-950 text-white">
        <HomeHero />
        <HomeLatestStories />
        {/* <HomeSpotlight /> */}
        <HomeGuideHubs />
        <HomeEditorialFocus />
        <HomeAllGuides />
      </main>
    </Layout>
  );
}