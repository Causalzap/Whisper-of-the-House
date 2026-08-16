import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AchievementsContent from "@/data/hell-let-loose-vietnam/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/hell-let-loose-vietnam`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Hell Let Loose Vietnam Achievements Guide: 49 Checklist";

const metadataDescription =
  "Track all 49 achievements, clear the 4 hidden achievements, overlap map and mode wins, and finish the longest Hell Let Loose Vietnam 100% grinds.";

const imageUrls = [
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-achievements-progress.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-achievement-caved-in-enemy-tunnel.webp`,
];

const toc = [
  {
    id: "all-achievements-checklist",
    label: "All 49 achievements checklist",
  },
  {
    id: "best-100-percent-route",
    label: "Best 100% route",
  },
  {
    id: "hidden-achievements",
    label: "Four hidden achievements",
  },
  {
    id: "guardian-angel",
    label: "Guardian Angel",
  },
  {
    id: "pilot-achievements",
    label: "Pilot achievements",
  },
  {
    id: "one-match-achievements",
    label: "One-match achievements",
  },
  {
    id: "map-win-achievements",
    label: "Map win achievements",
  },
  {
    id: "game-mode-wins",
    label: "Game mode wins",
  },
  {
    id: "role-level-five",
    label: "12 roles at Level 5",
  },
  {
    id: "career-levels",
    label: "Career Level 50",
  },
  {
    id: "node-achievements",
    label: "300 Node builds",
  },
  {
    id: "long-cleanup",
    label: "Long cleanup counters",
  },
  {
    id: "missing-achievement",
    label: "Find a missing achievement",
  },
  {
    id: "final-cleanup-rule",
    label: "Final 49/49 check",
  },
];

const relatedLinks = [
  {
    href: "/hell-let-loose-vietnam",
    label: "Hell Let Loose: Vietnam Guide Hub",
  },
  {
    href: "/hell-let-loose-vietnam/nva-tunnels-guide",
    label: "NVA Tunnels Guide",
  },
  {
    href: "/hell-let-loose-vietnam/helicopter-controls",
    label: "Helicopter Controls Guide",
  },
  {
    href: "/hell-let-loose-vietnam/progression-loadouts",
    label: "Progression & Loadouts Guide",
  },
  {
    href: "/hell-let-loose-vietnam/beginner-guide",
    label: "Beginner Guide",
  },
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
    title: "Hell Let Loose Vietnam Achievements Guide & Checklist",
    description:
      "Use the complete 49-achievement checklist, clear all four hidden achievements, combine overlapping grinds, and diagnose whatever is still missing.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Hell Let Loose Vietnam achievement page showing 14 of 49 achievements earned",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hell Let Loose Vietnam Achievements Guide & Checklist",
    description:
      "Track all 49 achievements, clear the hidden requirements, combine map and mode wins, and finish the longest 100% cleanup goals.",
    images: [imageUrls[0]],
  },
};

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
          name: "Hell Let Loose: Vietnam Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements Guide",
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
      headline:
        "Hell Let Loose Vietnam Achievements Guide: All 49 Achievements and 100% Checklist",
      description:
        "A practical Hell Let Loose: Vietnam achievement guide covering all 49 achievements through an interactive checklist, the four hidden achievements, one-match requirements, Guardian Angel, pilot challenges, six map win targets, four 20-win game mode achievements, twelve roles at Level 5, Career Level 50, three 100-Node counters, Artillery kills, headshots, and a final 49/49 cleanup route.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-16",
      dateModified: "2026-08-16",
      articleSection: "Hell Let Loose: Vietnam Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Hell Let Loose: Vietnam",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam achievements",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam achievement checklist",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam 100 percent guide",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam hidden achievements",
        },
        {
          "@type": "Thing",
          name: "Caved In achievement",
        },
        {
          "@type": "Thing",
          name: "Shipwrecked achievement",
        },
        {
          "@type": "Thing",
          name: "Death From Below achievement",
        },
        {
          "@type": "Thing",
          name: "Eagle Has Landed achievement",
        },
        {
          "@type": "Thing",
          name: "Guardian Angel achievement",
        },
        {
          "@type": "Thing",
          name: "LZ Not Secure achievement",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam map wins",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam game mode wins",
        },
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Route All 49 Achievements Without Grinding Everything Twice"
          description="I use the full checklist to track every achievement, clear unusual one-match and hidden requirements first, overlap map and mode wins, and leave passive counters for the final cleanup."
          gameTitle="Hell Let Loose: Vietnam"
          gameHref="/hell-let-loose-vietnam"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}