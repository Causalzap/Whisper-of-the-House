import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AchievementsContent from "@/data/no-more-room-in-hell-2/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/no-more-room-in-hell-2/achievements`;

const metadataTitle =
  "No More Room in Hell 2 Achievements Guide: All 35 & 100% Route";

const metadataDescription =
  "Complete all 35 No More Room in Hell 2 achievements with a practical 100% route covering map clears, Responder progression, Pacifist, weapon challenges, Nightmare, and final cleanup.";

const imageUrls = [
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-pacifist-extraction.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-nightmare-difficulty.webp`,
];

const toc = [
  {
    id: "all-achievements-checklist",
    label: "All 35 achievements",
  },
  {
    id: "best-achievement-route",
    label: "Best 100% route",
  },
  {
    id: "map-achievements",
    label: "Map achievements",
  },
  {
    id: "closing-tickets",
    label: "Closing Tickets",
  },
  {
    id: "cumulative-achievements",
    label: "Cumulative achievements",
  },
  {
    id: "responder-achievements",
    label: "Responder progression",
  },
  {
    id: "all-star-cast",
    label: "All-Star Cast",
  },
  {
    id: "coop-achievements",
    label: "Co-op achievements",
  },
  {
    id: "nice-shootin-tex",
    label: "Nice Shootin', Tex",
  },
  {
    id: "no-gun-vs-pacifist",
    label: "Pacifist & Pulling a Trigger",
  },
  {
    id: "cowboy-action-shooter",
    label: "Cowboy Action Shooter",
  },
  {
    id: "general-contractor",
    label: "General Contractor",
  },
  {
    id: "waking-nightmare",
    label: "Waking Nightmare",
  },
  {
    id: "account-and-credit-achievements",
    label: "Account & Credit cleanup",
  },
  {
    id: "final-cleanup",
    label: "Final cleanup",
  },
];

const relatedLinks = [
  {
    href: "/no-more-room-in-hell-2/combat-survival-guide",
    label: "Combat & Survival Guide",
  },
  {
    href: "/no-more-room-in-hell-2/survival-mode-guide",
    label: "Survival Mode Guide",
  },
  {
    href: "/no-more-room-in-hell-2/early-extraction",
    label: "Early Extraction Guide",
  },
  {
    href: "/no-more-room-in-hell-2/how-to-cure-infection",
    label: "How to Cure Infection",
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
    title: metadataTitle,
    description:
      "Track all 35 No More Room in Hell 2 achievements with a practical 100% route covering map progression, Responder survival, Pacifist, weapon challenges, Nightmare completions, and final cleanup.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "No More Room in Hell 2 Pacifist achievement extraction route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "All 35 No More Room in Hell 2 achievements with map, Responder, weapon, Nightmare, and 100% cleanup planning.",
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
          name: "No More Room in Hell 2 Guide",
          item: `${siteUrl}/no-more-room-in-hell-2`,
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
        "No More Room in Hell 2 Achievements Guide: All 35 & 100% Route",
      description:
        "A practical No More Room in Hell 2 100% achievement route covering all 35 achievements, map progression, Responder survival, Pacifist, Pulling a Trigger is Like Ordering Takeout, weapon challenges, Nightmare completions, and final cleanup.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-24",
      dateModified: "2026-08-24",
      articleSection: "No More Room in Hell 2 Achievements",
      about: [
        {
          "@type": "VideoGame",
          name: "No More Room in Hell 2",
          url: `${siteUrl}/no-more-room-in-hell-2`,
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 achievements",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 100% completion route",
        },
        {
          "@type": "Thing",
          name: "Pacifist achievement",
        },
        {
          "@type": "Thing",
          name: "Pulling a Trigger is Like Ordering Takeout achievement",
        },
        {
          "@type": "Thing",
          name: "All-Star Cast",
        },
        {
          "@type": "Thing",
          name: "Cowboy Action Shooter",
        },
        {
          "@type": "Thing",
          name: "General Contractor",
        },
        {
          "@type": "Thing",
          name: "Waking Nightmare",
        },
        {
          "@type": "Thing",
          name: "Legendary Responder",
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
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="Achievements Guide: All 35 & 100% Route"
          description="I do not approach all 35 achievements as separate grinds. The fastest route combines map clears, difficulty progress, Responder levels, weapon challenges, and long counters before handling the achievements that require specific setups."
          gameTitle="No More Room in Hell 2"
          gameHref="/no-more-room-in-hell-2"
          breadcrumbBaseHref="/no-more-room-in-hell-2"
          breadcrumbBaseLabel="No More Room in Hell 2 Guide"
          updatedAt="August 24, 2026"
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