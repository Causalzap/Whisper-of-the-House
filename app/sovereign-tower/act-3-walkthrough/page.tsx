import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Act3WalkthroughContent from "@/data/sovereign-tower/act-3-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sovereign-tower`;
const pageUrl = `${hubUrl}/act-3-walkthrough`;

const metadataTitle =
  "Sovereign Tower Act 3 Walkthrough: Arthur & Golden Key";

const metadataDescription =
  "Plan Act 3 around Arthur, level 15, 5–7 Damage Risk, county completion, the Golden Key, the 13-cycle clock, and the 3–6 final confrontation.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-3-arthur-diplomacy-war.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-3-level-15-cap.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-3-five-to-seven-damage-risk.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-3-victoria-sword.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-3-final-confrontation.webp`,
];

const toc = [
  {
    id: "act-3-route",
    label: "Act 3 route",
  },
  {
    id: "act-3-start",
    label: "Act 3 start",
  },
  {
    id: "arthur-first-audience",
    label: "Arthur's first audience",
  },
  {
    id: "act-3-priorities",
    label: "Act 3 priorities",
  },
  {
    id: "level-15",
    label: "Level 15 cap",
  },
  {
    id: "late-damage-risk",
    label: "Late Damage Risk",
  },
  {
    id: "victoria",
    label: "Victoria",
  },
  {
    id: "epicr",
    label: "Epicr",
  },
  {
    id: "thirteen-cycles",
    label: "13-cycle warning",
  },
  {
    id: "finish-counties",
    label: "Finish the counties",
  },
  {
    id: "golden-key-phase",
    label: "Golden Key phase",
  },
  {
    id: "final-preparation",
    label: "Final preparation",
  },
  {
    id: "arthur-final-confrontation",
    label: "Arthur final confrontation",
  },
  {
    id: "ending-branch",
    label: "Ending branch",
  },
  {
    id: "act-3-mistakes",
    label: "Act 3 mistakes",
  },
];

const relatedLinks = [
  {
    href: "/sovereign-tower",
    label: "Sovereign Tower Guide Hub",
  },
  {
    href: "/sovereign-tower/golden-key",
    label: "Golden Key Guide",
  },
  {
    href: "/sovereign-tower/endings",
    label: "Endings & True Ending Guide",
  },
  {
    href: "/sovereign-tower/king-slayer",
    label: "King Slayer Guide",
  },
  {
    href: "/sovereign-tower/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/sovereign-tower/demon-power",
    label: "Demon Power & Rewind Guide",
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
    title: "Sovereign Tower Act 3 Walkthrough",
    description:
      "Plan Act 3 around Arthur, county completion, late Knight availability, Victoria, Epicr, the Golden Key phase, and the final confrontation.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Arthur Pendragon discussing diplomacy and war in Sovereign Tower Act 3",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower Act 3 Walkthrough",
    description:
      "Finish permanent routes, manage the 13-cycle clock, prepare for late Damage Risk, secure the Golden Key state, and build the Arthur final party.",
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
          name: "Sovereign Tower Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Act 3 Walkthrough",
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
        "Sovereign Tower Act 3 Walkthrough: Arthur, Golden Key, and Final Preparation",

      description:
        "A player-focused Sovereign Tower Act 3 walkthrough covering how I prioritize permanent county and Knight outcomes before Arthur closes the timeline, why level 15 changes the value of XP quests, how I handle late assignments with 5–7 Damage Risk, when Victoria's route is worth resolving, why Victoria's Sword is useful for the final Strength check, when I preserve Epicr for the late game, how I use the 13-cycle warning, why county completion can unlock the Golden Key phase, how I prepare the final roster from the actual requirement wheel, and how I handle the 3–6 Damage Risk Arthur confrontation before committing to an ending branch.",

      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",

      datePublished: "2026-08-15",
      dateModified: "2026-08-15",

      articleSection: "Sovereign Tower Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Sovereign Tower",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 3",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 3 walkthrough",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Arthur Pendragon",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Golden Key",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower all counties",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Victoria",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Victoria's Sword",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Epicr",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower level 15",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower 13 cycles",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower final confrontation",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower endings",
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
          title="Plan Act 3 Before Arthur Turns the Run Into Final Preparation"
          description="Finish the permanent county and Knight routes that still matter, stop wasting capped Knights on XP, protect the roster through late Damage Risk, then build around the Golden Key and Arthur's final confrontation."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Act3WalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}