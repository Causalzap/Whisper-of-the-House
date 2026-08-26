import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishAchievementsContent from "@/data/how-to-fish/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "How to Fish Achievements: All 28 & 100% Guide";

const metadataDescription =
  "Complete all 28 How to Fish achievements with an efficient 100% route for Bean, Handyman, Fishipedia, Killscore, cooking, casino, and more.";

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-achievements-360-no-scope.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-achievements-start-grill.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-achievements-legendary-skin.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-achievements-all-in-green.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-achievements-let-me-go-seagull.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-achievements-boat-fly.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: imageUrls.map((url) => ({
      url,
      alt: "How to Fish achievements and 100% completion guide",
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "How to Fish Guide",
      item: hubUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Achievements",
      item: pageUrl,
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Fish Achievements Guide: All 28 Unlocks",
  description: metadataDescription,
  image: imageUrls,
  datePublished: "2026-08-23",
  dateModified: "2026-08-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  about: {
    "@type": "VideoGame",
    name: "How to Fish",
    url: hubUrl,
  },
  author: {
    "@type": "Organization",
    name: "Whisper of the House",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Whisper of the House",
    url: siteUrl,
  },
};

const toc = [
  {
    id: "all-achievements-checklist",
    label: "All 28 achievements",
  },
  {
    id: "best-100-percent-route",
    label: "Best 100% route",
  },
  {
    id: "killscore-achievements",
    label: "Killscore achievements",
  },
  {
    id: "cooking-achievements",
    label: "Cooking achievements",
  },
  {
    id: "casino-money-achievements",
    label: "Casino and money",
  },
  {
    id: "gear-and-boat",
    label: "Gear and boat",
  },
  {
    id: "one-off-achievements",
    label: "Seagulls and boat physics",
  },
  {
    id: "easy-fast-boss",
    label: "Easy: 10-second boss",
  },
  {
    id: "collector-fishipedia",
    label: "Collector and Fishipedia",
  },
  {
    id: "bean-speedrun",
    label: "Bean speedrun",
  },
  {
    id: "handyman",
    label: "Handyman",
  },
  {
    id: "final-cleanup",
    label: "Final cleanup",
  },
];

const relatedLinks = [
  {
    href: "/how-to-fish",
    label: "How to Fish Walkthrough & Guide Hub",
  },
  {
    href: "/how-to-fish/all-fish-locations",
    label: "All 49 Creatures & Collector Guide",
  },
  {
    href: "/how-to-fish/spider-crab",
    label: "Spider Crab & Boat Keys Guide",
  },
  {
    href: "/how-to-fish/boss-guide",
    label: "How to Fish Boss Guide",
  },
  {
    href: "/how-to-fish/giant-piranha",
    label: "Giant Piranha Guide",
  },
  {
    href: "/how-to-fish/pufferfish",
    label: "Pufferfish Boss Guide",
  },
];

export default function HowToFishAchievementsPage() {
  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <GuideArticlePage
        title="How to Fish Achievements Guide: All 28 Unlocks"
        description="Track every achievement, follow an efficient three-pass 100% route, and use reliable setups for Bean, Handyman, Fishipedia, Easy, Killscore, cooking, and casino challenges."
        gameTitle="How to Fish"
        gameHref="/how-to-fish"
        breadcrumbBaseHref="/how-to-fish"
        breadcrumbBaseLabel="How to Fish Guide"
        updatedAt="August 26, 2026"
        toc={toc}
        relatedLinks={relatedLinks}
      >
        <HowToFishAchievementsContent />
      </GuideArticlePage>

      <Footer />
    </>
  );
}