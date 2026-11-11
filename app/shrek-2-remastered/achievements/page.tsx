import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Shrek2RemasteredAchievementsContent from "@/data/shrek-2-remastered/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/shrek-2-remastered`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Shrek 2 Remastered Achievements: All 45 & Platinum Checklist";

const metadataDescription =
  "Track all 45 Shrek 2 Remastered achievements, complete flawless Hero Times and no-damage runs, collect Magic Beans and Snapshots, and earn the PS5 Platinum.";

const articleDescription =
  "Track all 45 Shrek 2 Remastered achievements with a completion checklist. Clear the 11 story chapters, finish King Harold's tasks, earn no-damage victories in Ogre Killer and Shopping Spree, hit all 12 birds in Fiona's Hero Time, finish the Giant Tomatoes challenge in under 45 seconds, complete four perfect Hero Times, collect every Magic Bean and Snapshot, play all five Bonus Levels, buy nine Crazy Larry upgrades, and finish combat, rescue, Photo Mode, and idle-animation achievements. The PS5 version also awards the Happily Ever After Platinum trophy after the other 45 trophies.";

const imageUrls = [
  `${siteUrl}/images/shrek-2-remastered/shrek-2-remastered-fiona-blackbird-hero-time.webp`,
  `${siteUrl}/images/shrek-2-remastered/shrek-2-remastered-puss-qte.webp`,
  `${siteUrl}/images/shrek-2-remastered/shrek-2-remastered-crazy-larry-upgrades.webp`,
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
    images: [
      {
        url: imageUrls[0],
        alt: "Fiona's Blackbird Hero Time with the bird nests and button prompts in Shrek 2 Remastered",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "achievement-checklist", label: "All 45 Achievements" },
  { id: "story-achievements", label: "Story Achievements" },
  { id: "far-far-away-tasks", label: "King Harold's Tasks" },
  { id: "no-hit-challenges", label: "No-Damage Challenges" },
  { id: "hero-time-challenges", label: "Hero Time Challenges" },
  { id: "collectibles", label: "Magic Beans & Snapshots" },
  { id: "bonus-levels", label: "Bonus Level Achievements" },
  { id: "larry-upgrades", label: "Crazy Larry Upgrades" },
  { id: "coins-and-combat", label: "Coins & Enemy Defeats" },
  { id: "rescues", label: "Rescue Achievements" },
  { id: "photo-mode-idle", label: "Photo Mode & Idle" },
  { id: "completion-plan", label: "Finish Remaining Achievements" },
];

const relatedLinks = [
  {
    href: "/shrek-2-remastered",
    label: "Shrek 2 Remastered Walkthrough: All 11 Chapters & Bosses",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          name: "Shrek 2 Remastered",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: metadataTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-11",
      dateModified: "2026-11-11",
      about: [
        { "@type": "VideoGame", name: "Shrek 2 Remastered" },
        { "@type": "Thing", name: "Shrek 2 Remastered achievements and trophies" },
        { "@type": "Thing", name: "Hero Time and no-damage challenges" },
        { "@type": "Thing", name: "Magic Beans and Snapshots achievements" },
        { "@type": "Thing", name: "Crazy Larry upgrade achievements" },
        { "@type": "Thing", name: "PS5 Happily Ever After Platinum trophy" },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="Shrek 2 Remastered Achievements: All 45 & Platinum Checklist"
          description="Check off all 45 achievements, finish no-damage and Hero Time challenges, complete the collections, and earn the PS5 Platinum trophy."
          gameTitle="Shrek 2 Remastered"
          gameHref="/shrek-2-remastered"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Shrek2RemasteredAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
