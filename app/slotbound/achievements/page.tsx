
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SlotboundAchievementsContent from "@/data/slotbound/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/slotbound`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Slotbound Achievements Guide: All 64 & Checklist";

const metadataDescription =
  "Track all 64 Slotbound Steam achievements, including six Hard battlefield clears, Jester Troupe, restricted runs, Collection tasks, and Endless wave 130.";

const articleTitle =
  "How Do You Unlock All 64 Achievements in Slotbound?";

const articleDescription =
  "Use a checklist to track all 64 Slotbound achievements. Check the requirements for Hard victories, restricted runs, special summons, Jester Troupe, faction conditions, Fate Stones, Collection entries, and Endless Mode milestones.";

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
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },
};

const toc = [
  {
    id: "achievement-checklist",
    label: "All 64 Achievements",
  },
  {
    id: "first-steps",
    label: "First-Run Achievements",
  },
  {
    id: "hard-clears",
    label: "Six Hard Battlefield Clears",
  },
  {
    id: "survival-and-restrictions",
    label: "Survival & Restrictions",
  },
  {
    id: "slots-and-summons",
    label: "Spins, Nudges & Blasts",
  },
  {
    id: "units-and-factions",
    label: "Units, Jesters & Factions",
  },
  {
    id: "endless-and-leaderboards",
    label: "Endless Mode Medals",
  },
  {
    id: "upgrades-and-collection",
    label: "Upgrades & Collection",
  },
  {
    id: "long-term-goals",
    label: "Long-Term Achievements",
  },
];

const relatedLinks = [
  {
    href: "/slotbound",
    label: "Beginner Guide: First Steps & Progression",
  },
  {
    href: "/slotbound/builds",
    label: "Hard Mode Builds: Four Battlefields",
  },
  {
    href: "/slotbound/jester",
    label: "Jester Troupe: Summon Two Jesters",
  },
  {
    href: "/slotbound/cores",
    label: "Cores, Items & Fate Stones",
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
          name: "Slotbound",
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
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      datePublished: "2026-11-14",
      dateModified: "2026-11-14",
      about: [
        { "@type": "VideoGame", name: "Slotbound" },
        { "@type": "Thing", name: "All 64 Steam achievements" },
        { "@type": "Thing", name: "Hard Mode battlefield achievements" },
        { "@type": "Thing", name: "Open Forest and Deep Cave Hard clears" },
        { "@type": "Thing", name: "Wasteland and Lost Ruins Hard clears" },
        { "@type": "Thing", name: "Crimson Hell and Split Space Hard clears" },
        { "@type": "Thing", name: "Flawless and Undying Legion" },
        { "@type": "Thing", name: "Jester Troupe" },
        { "@type": "Thing", name: "Slot machine and summon achievements" },
        { "@type": "Thing", name: "Fate Stone and Collection achievements" },
        { "@type": "Thing", name: "Endless Mode wave 50 through 130" },
        { "@type": "Thing", name: "Slotbound Master" },
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
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Slotbound"
          gameHref="/slotbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SlotboundAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
