import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GoldenFeathersLocationsContent from "@/data/well-dweller/golden-feathers-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/well-dweller`;
const pageUrl = `${hubUrl}/golden-feathers-locations`;

const metadataTitle =
  "Well Dweller Golden Feathers: All 7 Locations & Quests";

const metadataDescription =
  "Find all 7 Golden Feathers in Well Dweller, including Lady of the Drains, Seven Sons, Starsinger, Squinton, Forest King, and Webdrench Inn.";

const imageUrls = [
  `${siteUrl}/images/well-dweller/well-dweller-golden-feather-lady-of-the-drains.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-golden-feather-shrine-seven-sons.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-golden-feather-starsinger.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-golden-feather-lutter.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-golden-feather-squinton-party.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-golden-feather-forest-king.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-seven-golden-feathers-complete.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-queens-castle-entry.webp`,
];

const toc = [
  {
    id: "lady-of-the-drains",
    label: "Lady of the Drains",
  },
  {
    id: "shrine-seven-sons",
    label: "Shrine of the Seven Sons",
  },
  {
    id: "starsinger",
    label: "Starsinger",
  },
  {
    id: "lutter",
    label: "Rebuild Lutter",
  },
  {
    id: "squinton-party",
    label: "Squinton's Birthday Party",
  },
  {
    id: "forest-king",
    label: "Forest King",
  },
  {
    id: "webdrench-inn",
    label: "Webdrench Inn",
  },
  {
    id: "missing-feather",
    label: "Stuck at 6/7?",
  },
  {
    id: "after-seven",
    label: "Return to Queen's Castle",
  },
];

const relatedLinks = [
  {
    href: "/well-dweller",
    label: "Well Dweller Guide",
  },
  {
    href: "/well-dweller/walkthrough",
    label: "Well Dweller Walkthrough",
  },
  {
    href: "/well-dweller/the-drains-walkthrough",
    label: "The Drains Walkthrough",
  },
  {
    href: "/well-dweller/elevator-parts-locations",
    label: "All 3 Elevator Part Locations",
  },
  {
    href: "/well-dweller/true-ending",
    label: "Well Dweller True Ending",
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
    title: "Well Dweller Golden Feathers: All 7",
    description:
      "Complete all seven Golden Feather objectives, identify the event you are missing at 6/7, and open Queen's Castle.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[6],
        width: 1600,
        height: 900,
        alt: "Well Dweller Golden Feather total reaching seven out of seven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Dweller Golden Feathers: All 7",
    description:
      "Find every Golden Feather, fix a 6/7 total, and return to Queen's Castle once the set is complete.",
    images: [imageUrls[6]],
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
          name: "Well Dweller Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Golden Feathers",
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
        "Well Dweller Golden Feathers: All 7 Locations, Bosses, and Quest Events",
      description:
        "Find all seven Golden Feathers in Well Dweller by completing Lady of the Drains, Shrine of the Seven Sons, Starsinger, the four-piece Lutter quest, Squinton's birthday party, the Forest King event, and the Webdrench Inn escape, then return to Queen's Castle at 7/7.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-24",
      dateModified: "2026-09-24",
      articleSection: "Well Dweller Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Well Dweller",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Well Dweller Golden Feathers",
        },
        {
          "@type": "Thing",
          name: "Lady of the Drains Golden Feather",
        },
        {
          "@type": "Thing",
          name: "Shrine of the Seven Sons",
        },
        {
          "@type": "Thing",
          name: "Starsinger",
        },
        {
          "@type": "Thing",
          name: "Squinton's birthday party",
        },
        {
          "@type": "Thing",
          name: "Forest King",
        },
        {
          "@type": "Thing",
          name: "Webdrench Inn",
        },
        {
          "@type": "Thing",
          name: "Queen's Castle",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Well Dweller Golden Feathers: All 7 Locations & Quests"
          description="Complete all seven Golden Feather objectives, identify which event is still missing at 6/7, and return to Queen's Castle once the counter reaches 7/7."
          gameTitle="Well Dweller"
          gameHref="/well-dweller"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GoldenFeathersLocationsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}