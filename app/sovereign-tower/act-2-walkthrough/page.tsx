import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Act2WalkthroughContent from "@/data/sovereign-tower/act-2-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sovereign-tower`;
const pageUrl = `${hubUrl}/act-2-walkthrough`;

const metadataTitle =
  "Sovereign Tower Act 2 Walkthrough: Murder to King Slayer";

const metadataDescription =
  "Plan Act 2 around the 8-slot Round Table, Tower murder, South Bay, Rufus, and King Slayer's five-circle countdown without wasting cycles.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-2-round-table-eight-slots.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-2-clovermont-location-destroyed.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-gwendan-inconsistent-evidence.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-2-gideon-recruit.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-king-slayer-five-turn-warning.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-demon-power-act-2-checkpoint.webp`,
];

const toc = [
  {
    id: "act-2-route",
    label: "Act 2 route",
  },
  {
    id: "act-2-start",
    label: "Act 2 start",
  },
  {
    id: "eight-knight-slots",
    label: "8-slot Round Table",
  },
  {
    id: "early-act-2-spending",
    label: "Early Act 2 spending",
  },
  {
    id: "clovermont",
    label: "Clovermont flood",
  },
  {
    id: "tower-murder",
    label: "Tower murder",
  },
  {
    id: "gwendan-gap",
    label: "Gwendan roster gap",
  },
  {
    id: "recruit-gideon",
    label: "Recruit Gideon",
  },
  {
    id: "major-routes",
    label: "Major Act 2 routes",
  },
  {
    id: "south-bay-scheduling",
    label: "South Bay scheduling",
  },
  {
    id: "wolf-to-rufus",
    label: "Wolf to Rufus",
  },
  {
    id: "quest-capacity",
    label: "Quest capacity",
  },
  {
    id: "king-slayer-countdown",
    label: "King Slayer countdown",
  },
  {
    id: "late-emergencies",
    label: "Late emergencies",
  },
  {
    id: "final-resolution",
    label: "Final King Slayer choice",
  },
  {
    id: "final-cycles",
    label: "Final cycles",
  },
  {
    id: "finish-act-2",
    label: "Finish Act 2",
  },
  {
    id: "act-2-mistakes",
    label: "Act 2 mistakes",
  },
];

const relatedLinks = [
  {
    href: "/sovereign-tower",
    label: "Sovereign Tower Guide Hub",
  },
  {
    href: "/sovereign-tower/gwendan-questline",
    label: "Gwendan Murder & Debt Guide",
  },
  {
    href: "/sovereign-tower/south-bay-lamp",
    label: "South Bay Lamp Guide",
  },
  {
    href: "/sovereign-tower/groveshire-wolf",
    label: "Wolf, Curse & Rufus Guide",
  },
  {
    href: "/sovereign-tower/king-slayer",
    label: "King Slayer Guide",
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
    title: "Sovereign Tower Act 2 Walkthrough",
    description:
      "Route Act 2 through the Tower murder, Gideon, South Bay, Wolf-to-Rufus transition, five-circle King Slayer countdown, and final Demon checkpoint.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Sovereign Tower Act 2 Round Table expanded to eight Knight slots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower Act 2 Walkthrough",
    description:
      "Plan the Tower murder, South Bay, Rufus transition, King Slayer countdown, and Act 2 point of no return without wasting cycles.",
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
          name: "Act 2 Walkthrough",
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
        "Sovereign Tower Act 2 Walkthrough: Tower Murder, South Bay, Rufus, and King Slayer",
      description:
        "A player-focused Sovereign Tower Act 2 walkthrough covering the locked Act 1 timeline, the expanded eight-slot Round Table, conservative early spending, Clovermont's destruction and recovery tradeoff, why I investigate the Tower murder before rewinding, how I route around Gwendan's temporary absence, Gideon's role as a replacement Charisma option, when to start South Bay, how the Wolf-to-Rufus cure temporarily reduces roster capacity, how I preserve future Knight availability, when the King Slayer's five-circle warning ends open-ended exploration, how late emergencies change repair priorities, why the final King Slayer resolution may require four rather than six Knights, and when I stop at the Demon's now-or-never checkpoint before Act 3.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-09",
      dateModified: "2026-08-09",
      articleSection: "Sovereign Tower Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Sovereign Tower",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 2",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 2 walkthrough",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Tower murder",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Gwendan",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Gideon",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower South Bay",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Wolf Rufus",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower King Slayer",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower five circles",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower King Slayer purification",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 2 point of no return",
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
          title="Plan Act 2 Around the Murder, South Bay, Rufus, and King Slayer"
          description="Use the eight-slot Round Table as a buffer, learn before rewinding the murder, protect roster capacity through South Bay and the Wolf cure, then stop expanding once King Slayer gives five circles."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Act2WalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}