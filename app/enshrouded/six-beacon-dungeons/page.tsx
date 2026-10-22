
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SixBeaconDungeonsContent from "@/data/enshrouded/six-beacon-dungeons.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/enshrouded`;
const pageUrl = `${hubUrl}/six-beacon-dungeons`;

const metadataTitle =
  "Enshrouded All 6 Beacon Dungeons: Locations & Walkthrough";

const metadataDescription =
  "Find all six Beacon Dungeon entrances in Enshrouded 1.0. Solve barriers, switches, alarms and water puzzles to complete Gate to the Stars 6/6.";

const articleDescription =
  "Complete Activating the Gate to the Stars by finding all six Beacon Dungeons in Cinder's Cradle, clearing the museum barriers, solving the telescope puzzle, crossing moving platforms and flooded passages, and confirming the final 6/6 objective.";

const imageUrls = [
  `${siteUrl}/images/enshrouded/enshrouded-first-beacon-activated.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-revelwood-beacon-pressure-plate.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-revelwood-beacon-telescope-angle.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-revelwood-beacon-barrier-unlocked.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-nomad-beacon-wall-control.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-nomad-beacon-door-opened.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-nomad-beacon-moving-platform.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-nomad-beacon-spdr-stairs.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-nomad-beacon-completed-4-of-6.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-kindlewastes-beacon-purple-control.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-kindlewastes-beacon-shroud-root.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-kindlewastes-beacon-broken-framework.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-kindlewastes-beacon-final-wall-control.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-kindlewastes-beacon-completed-5-of-6.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-floating-isles-unlocked.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "quick-answer",
    label: "Quick answer",
  },
  {
    id: "all-locations",
    label: "All 6 Beacon locations",
  },
  {
    id: "start-quest",
    label: "Start Gate to the Stars",
  },
  {
    id: "springlands",
    label: "Springlands Beacon",
  },
  {
    id: "revelwood",
    label: "Revelwood Beacon",
  },
  {
    id: "albaneve",
    label: "Albaneve Summits Beacon",
  },
  {
    id: "nomad",
    label: "Nomad Highlands Beacon",
  },
  {
    id: "kindlewastes",
    label: "Kindlewastes Beacon",
  },
  {
    id: "veilwater",
    label: "Veilwater Basin Beacon",
  },
  {
    id: "rewards",
    label: "Beacon rewards",
  },
  {
    id: "completion",
    label: "After completing 6/6",
  },
];

const relatedLinks = [
  {
    href: "/enshrouded",
    label: "Enshrouded 1.0 Walkthrough",
  },
  {
    href: "/enshrouded/vorgoth-final-boss",
    label: "Vorgoth Final Boss Guide",
  },
  {
    href: "/enshrouded/achievements",
    label: "All 58 Achievements",
  },
  {
    href: "/enshrouded/revelwood-hollow-halls",
    label: "Revelwood Hollow Halls: Key, Runes & Cyclops",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 2004,
        height: 854,
        alt: "Enshrouded Activating the Gate to the Stars quest showing the first Beacon Dungeon completed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "Enshrouded",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All 6 Beacon Dungeons",
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
      datePublished: "2026-10-22",
      dateModified: "2026-10-22",
      inLanguage: "en",
      about: [
        {
          "@type": "VideoGame",
          name: "Enshrouded",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Activating the Gate to the Stars",
        },
        {
          "@type": "Thing",
          name: "Enshrouded Beacon Dungeons",
        },
        {
          "@type": "Thing",
          name: "Springlands Beacon Dungeon",
        },
        {
          "@type": "Thing",
          name: "Revelwood Beacon Dungeon",
        },
        {
          "@type": "Thing",
          name: "Albaneve Summits Beacon Dungeon",
        },
        {
          "@type": "Thing",
          name: "Nomad Highlands Beacon Dungeon",
        },
        {
          "@type": "Thing",
          name: "Kindlewastes Beacon Dungeon",
        },
        {
          "@type": "Thing",
          name: "Veilwater Basin Beacon Dungeon",
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
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}#organization`,
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Enshrouded All 6 Beacon Dungeons: Locations & Walkthrough"
          description={articleDescription}
          gameTitle="Enshrouded"
          gameHref="/enshrouded"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SixBeaconDungeonsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
