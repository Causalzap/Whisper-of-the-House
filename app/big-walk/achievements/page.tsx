import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkAchievementsContent from "@/data/big-walk/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/achievements`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-backpack-unlock.png`,
  `${siteUrl}/images/big-walk/big-walk-hip-belt-map.png`,
];

export const metadata: Metadata = {
  title: "Big Walk Achievements: All 12 Unlock Requirements",
  description:
    "Track all 12 Big Walk achievements, including Backpack, Map Room, hip item, Chairlift, Train, Tunnel, endings, Shiny, and full completion.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Achievements: All 12 Requirements",
    description:
      "Use a progression-order checklist for Big Walk, Big Pack, Big View, Big Help, transport, ending, Shiny, and full-completion achievements.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 762,
        height: 722,
        alt: "Big Walk player wearing a hip belt with the portable map attached",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Achievements Guide",
    description:
      "Track all 12 achievements and fix common unlock problems for Backpack, Map Room, hip items, transport, endings, and Shiny.",
    images: [imageUrls[1]],
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
          name: "Big Walk Guide",
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
      headline:
        "Big Walk Achievements Guide: All 12 Unlock Requirements and Progress Checklist",
      description:
        "This Big Walk achievements guide lists all 12 achievements and explains the unlock requirements for Big Walk, Big Pack, Big View, Big Help, Big Sit, Big Climb, Big Ride, Big Tunnel, Big Goodbye, Big Wall, Big Game, and Big Makeover. It also includes a progression-order checklist and fixes for common unlock problems.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-05",
      dateModified: "2026-08-05",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk achievements",
        },
        {
          "@type": "Thing",
          name: "Big Walk achievement list",
        },
        {
          "@type": "Thing",
          name: "Big Pack achievement",
        },
        {
          "@type": "Thing",
          name: "Big View achievement",
        },
        {
          "@type": "Thing",
          name: "Big Help achievement",
        },
        {
          "@type": "Thing",
          name: "Big Sit achievement",
        },
        {
          "@type": "Thing",
          name: "Big Ride achievement",
        },
        {
          "@type": "Thing",
          name: "Big Game achievement",
        },
        {
          "@type": "Thing",
          name: "Big Makeover achievement",
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

const toc = [
  {
    id: "achievement-list",
    label: "All 12 achievements",
  },
  {
    id: "big-walk",
    label: "Big Walk",
  },
  {
    id: "big-pack",
    label: "Big Pack",
  },
  {
    id: "big-view",
    label: "Big View",
  },
  {
    id: "big-help",
    label: "Big Help",
  },
  {
    id: "transport-achievements",
    label: "Big Sit, Ride, and Climb",
  },
  {
    id: "late-achievements",
    label: "Late-game achievements",
  },
  {
    id: "completion-checklist",
    label: "Completion checklist",
  },
  {
    id: "stuck",
    label: "Achievement fixes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/beginner-guide",
    label: "Big Walk Beginner Guide",
  },
  {
    href: "/big-walk/tutorial-walkthrough",
    label: "Tutorial and Drawbridge Walkthrough",
  },
  {
    href: "/big-walk/how-to-unlock-map",
    label: "How to Unlock the Map Room",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/green-tower-walkthrough",
    label: "Green Tower and Green Key Guide",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Big Walk Achievements Guide"
          description="Track all 12 achievements in progression order, understand each unlock requirement, and fix common Backpack, Map Room, hip item, transport, ending, and Shiny problems."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}