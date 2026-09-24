import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HundredPercentCompletionContent from "@/data/well-dweller/100-percent-completion.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/well-dweller`;
const pageUrl = `${hubUrl}/100-percent-completion`;

const metadataTitle =
  "Well Dweller 100% Completion Guide & 41 Achievements";

const metadataDescription =
  "Track all 41 Well Dweller achievements, collect 32 Trinkets, reach 50 Trinket Slots, return 20 Spirits, finish pages, and max every Trinket.";

const imageUrls = [
  `${siteUrl}/images/well-dweller/well-dweller-map-cleanup-markers.webp`,
];

const toc = [
  {
    id: "achievement-tracker",
    label: "41-Achievement Tracker",
  },
  {
    id: "completion-plan",
    label: "Finish Progression First",
  },
  {
    id: "map-cleanup",
    label: "Use Map Markers",
  },
  {
    id: "story-progress",
    label: "Story Achievements",
  },
  {
    id: "trinkets",
    label: "Collect 32 Trinkets",
  },
  {
    id: "trinket-slots",
    label: "Reach 50 Trinket Slots",
  },
  {
    id: "spirits",
    label: "Return 20 Spirits",
  },
  {
    id: "story-pages",
    label: "Complete Story Pages",
  },
  {
    id: "upgrade-all-trinkets",
    label: "Max Every Trinket",
  },
  {
    id: "postgame",
    label: "Post-Queen Achievements",
  },
  {
    id: "misc-achievements",
    label: "Other Achievements",
  },
  {
    id: "cleanup-order",
    label: "Final Cleanup Order",
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
    href: "/well-dweller/golden-feathers-locations",
    label: "All 7 Golden Feather Locations",
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
    title: "Well Dweller 100% Completion Guide",
    description:
      "Use the 41-achievement tracker, Map Markers, collectible totals, page sets, upgrade requirements, and post-Queen objectives to finish Well Dweller.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Well Dweller Map Markers station showing Trinkets, Trinket Slots, Spirits, Pages, and Tokens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Dweller 100% Completion Guide",
    description:
      "Track all 41 achievements and finish Trinkets, Slots, Spirits, pages, upgrades, Map Markers, and post-Queen objectives.",
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
          name: "Well Dweller Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "100% Completion",
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
        "Well Dweller 100% Completion Guide: 41 Achievements, Collectibles, Spirits, Pages, and Upgrades",
      description:
        "A Well Dweller completion guide covering all 41 achievements, 32 Trinkets, 50 Trinket Slots, 20 ordinary Spirits, three complete story-page sets, Map Markers, fully upgraded Trinkets, post-Queen achievements, and the final cleanup order.",
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
          name: "Well Dweller 100 percent completion",
        },
        {
          "@type": "Thing",
          name: "Well Dweller achievements",
        },
        {
          "@type": "Thing",
          name: "Well Dweller 41 achievements",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Trinkets",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Trinket Slots",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Spirits",
        },
        {
          "@type": "Thing",
          name: "Well Dweller story pages",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Map Markers",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Fully Stocked",
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
          title="Well Dweller 100% Completion Guide & 41 Achievements"
          description="Track every achievement and finish the remaining Trinkets, Slots, Spirits, story pages, upgrades, Map Markers, and post-Queen objectives."
          gameTitle="Well Dweller"
          gameHref="/well-dweller"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HundredPercentCompletionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}