import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NoMoreRoomInHell2Content from "@/data/no-more-room-in-hell-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/no-more-room-in-hell-2`;

const metadataTitle =
  "No More Room in Hell 2 Guide & Walkthrough Hub";

const metadataDescription =
  "No More Room in Hell 2 guide for all 6 Objective maps, Survival Mode, infection, extraction, combat, progression, Nightmare, and 35 achievements.";

const imageUrls = [
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-raven-rock-west-gate-blast-door.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-all-star-cast-progress.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-nightmare-difficulty.webp`,
];

const toc = [
  {
    id: "how-the-game-works",
    label: "How the game works",
  },
  {
    id: "where-to-start",
    label: "Where to start",
  },
  {
    id: "objective-maps",
    label: "Objective map walkthroughs",
  },
  {
    id: "route-variation",
    label: "Route variation",
  },
  {
    id: "survival-mode",
    label: "Survival Mode",
  },
  {
    id: "combat-survival",
    label: "Combat & survival",
  },
  {
    id: "infection",
    label: "Infection",
  },
  {
    id: "early-extraction",
    label: "Early Extraction",
  },
  {
    id: "weapons-loadouts",
    label: "Weapons & loadouts",
  },
  {
    id: "responder-progression",
    label: "Responder progression",
  },
  {
    id: "difficulty",
    label: "Difficulty & Nightmare",
  },
  {
    id: "assignments-merits",
    label: "Assignments & Merits",
  },
  {
    id: "achievements",
    label: "Achievements",
  },
  {
    id: "what-to-do-next",
    label: "What to do next",
  },
];

const relatedLinks = [
  {
    href: "/no-more-room-in-hell-2/combat-survival-guide",
    label: "Combat & Survival Guide",
  },
  {
    href: "/no-more-room-in-hell-2/achievements",
    label: "Achievements Guide",
  },
  {
    href: "/no-more-room-in-hell-2/how-to-cure-infection",
    label: "How to Cure Infection",
  },
  {
    href: "/no-more-room-in-hell-2/early-extraction",
    label: "Early Extraction Guide",
  },
];

const guidePages = [
  {
    name: "Power Plant Walkthrough",
    url: `${siteUrl}/no-more-room-in-hell-2/power-plant-walkthrough`,
  },
  {
    name: "Pottsville Walkthrough",
    url: `${siteUrl}/no-more-room-in-hell-2/pottsville-walkthrough`,
  },
  {
    name: "Lewiston Walkthrough",
    url: `${siteUrl}/no-more-room-in-hell-2/lewiston-walkthrough`,
  },
  {
    name: "Broadway Walkthrough",
    url: `${siteUrl}/no-more-room-in-hell-2/broadway-walkthrough`,
  },
  {
    name: "Beaulieu Hospital Walkthrough",
    url: `${siteUrl}/no-more-room-in-hell-2/beaulieu-hospital-walkthrough`,
  },
  {
    name: "Raven Rock Walkthrough",
    url: `${siteUrl}/no-more-room-in-hell-2/raven-rock-walkthrough`,
  },
  {
    name: "Combat & Survival Guide",
    url: `${siteUrl}/no-more-room-in-hell-2/combat-survival-guide`,
  },
  {
    name: "How to Cure Infection",
    url: `${siteUrl}/no-more-room-in-hell-2/how-to-cure-infection`,
  },
  {
    name: "Early Extraction Guide",
    url: `${siteUrl}/no-more-room-in-hell-2/early-extraction`,
  },
  {
    name: "Achievements Guide",
    url: `${siteUrl}/no-more-room-in-hell-2/achievements`,
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
      "A practical No More Room in Hell 2 guide hub covering all six Objective maps, Survival Mode, route variation, combat, infection, extraction, Responders, Nightmare, and achievements.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Responder approaching Raven Rock in No More Room in Hell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Walkthroughs for all six Objective maps plus Survival, combat, infection, extraction, progression, Nightmare, and achievements.",
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
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#guide`,
      url: pageUrl,
      name: "No More Room in Hell 2 Guide & Walkthrough Hub",
      headline: "No More Room in Hell 2 Guide & Walkthrough Hub",
      description:
        "A player-focused No More Room in Hell 2 guide hub covering the current 1.0 Armageddon structure, all six Objective maps, Survival Mode, Solo Mode, changing objective routes, combat and resource decisions, infection and Experimental Gene Therapy, Early Extraction, weapons and loadouts, Responder progression, weekly Assignments and Merits, Nightmare difficulty, and all 35 base-game achievements.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-24",
      dateModified: "2026-08-24",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "No More Room in Hell 2",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 Objective Mode",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 Survival Mode",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 Solo Mode",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 Responder progression",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 infection",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 Early Extraction",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 weapons and loadouts",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 Nightmare difficulty",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 achievements",
        },
      ],
      hasPart: guidePages.map((guide) => ({
        "@type": "WebPage",
        name: guide.name,
        url: guide.url,
      })),
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
          title="No More Room in Hell 2 Guide: Maps, Survival & Progression"
          description="No More Room in Hell 2 is built around repeatable Objective and Survival missions rather than one fixed campaign. I use this hub to decide which map route, survival system, extraction choice, progression goal, or achievement needs attention next."
          gameTitle="No More Room in Hell 2"
          gameHref="/no-more-room-in-hell-2"
          breadcrumbBaseHref="/no-more-room-in-hell-2"
          breadcrumbBaseLabel="No More Room in Hell 2 Guide"
          updatedAt="August 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NoMoreRoomInHell2Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}