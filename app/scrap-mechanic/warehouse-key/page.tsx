import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarehouseKeyGuideContent from "@/data/scrap-mechanic/warehouse-key.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/scrap-mechanic`;
const pageUrl = `${hubUrl}/warehouse-key`;

const metadataTitle =
  "Scrap Mechanic Warehouse Key: Hubert & Farmbot Drops";

const metadataDescription =
  "Get the Scrap Mechanic Warehouse Key from Hubert or Farmbot drops, learn why the Master Key fails, follow the right marker, and fix “Requires warehouse key.";

const imageUrls = [
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-warehouse-door-requires-key.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-hubert-spare-warehouse-key.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-story-warehouse-quest-marker.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-farmbot-warehouse-key-drop.webp`,
];

const toc = [
  {
    id: "warehouse-key-types",
    label: "Warehouse Key vs. Master Key",
  },
  {
    id: "hubert-story-key",
    label: "Get Hubert's story key",
  },
  {
    id: "choose-warehouse-and-prepare",
    label: "Choose and prepare",
  },
  {
    id: "farmbot-key-drop",
    label: "Farmbot key drops",
  },
  {
    id: "door-still-locked",
    label: "Door still locked",
  },
  {
    id: "after-opening-warehouse",
    label: "After the door opens",
  },
  {
    id: "faq",
    label: "Warehouse Key edge cases",
  },
];

const relatedLinks = [
    {
      href: "/scrap-mechanic",
      label: "Scrap Mechanic 1.0 Guide Hub",
    },
    {
      href: "/scrap-mechanic/first-grow-lab-walkthrough",
      label: "First Grow Lab Walkthrough",
    },
    {
      href: "/scrap-mechanic/hubert-watchtower-small-tank",
      label: "Hubert Watchtower & Small Tank",
    },
    {
      href: "/scrap-mechanic/mining-guide",
      label: "Plasma Drill & Mining Guide",
    },
    {
      href: "/scrap-mechanic/ore-processing-guide",
      label: "Ore Processing, Ingots & Vault",
    },
    {
      href: "/scrap-mechanic/warehouse-walkthrough",
      label: "Warehouse Walkthrough",
    },
    {
      href: "/scrap-mechanic/achievements",
      label: "All 34 Achievements Guide",
    },
  ];

const faqEntities = [
  {
    question:
      "Can a Farmbot inside a Grow Lab drop a Warehouse Key?",
    answer:
      "Yes. The confirmed Farmbot Warehouse Key drop in this route occurred during a Grow Lab run rather than directly outside a Warehouse. The Farmbot enemy type matters more than one fixed Warehouse location.",
  },
  {
    question:
      "Can I re-enter the story Warehouse after it explodes?",
    answer:
      "Not through its original entrance. After the self-destruct sequence, the story Warehouse is damaged and its former entrance is blocked. Use another intact Warehouse for repeat exploration, optional materials, or another Small Tank.",
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
    title:
      "Scrap Mechanic Warehouse Key Guide: Hubert, Farmbots and Locked Doors",
    description:
      "Follow the Lost and Found route for Hubert's spare key, farm optional keys from Farmbots, distinguish the regular key from the Master Key, and fix a Warehouse entrance that remains locked.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1280,
        height: 720,
        alt: "Hubert giving the player a spare Warehouse Key in Scrap Mechanic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Get the correct Warehouse Key, follow Hubert's story marker, prepare for the interior, and diagnose a door that still says Requires warehouse key.",
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
          name: "Scrap Mechanic Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Warehouse Key Guide",
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
        "Scrap Mechanic Warehouse Key Guide: Hubert, Farmbot Drops and Master Key Differences",
      description:
        "A practical Scrap Mechanic 1.0 Warehouse Key guide covering the Lost and Found recorder route, Hubert's spare key, Farmbot key drops, the difference between the regular Warehouse Key and Warehouse Master Key, the distant story Warehouse marker, carried inventory requirements, Warehouse preparation, locked-door troubleshooting, destroyed story Warehouses, Grow Lab Farmbot drops, and links to the complete Warehouse and Small Tank routes.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-28",
      dateModified: "2026-07-28",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Scrap Mechanic",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Warehouse Key",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Warehouse Master Key",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Hubert Warehouse Key",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Farmbot Warehouse Key drop",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Lost and Found",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic story Warehouse",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Requires warehouse key",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Warehouse door not opening",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Grow Lab Farmbot",
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
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          title="How I Get the Correct Warehouse Key"
          description="I get the story key from Hubert or an optional key from a Farmbot, keep it separate from the Warehouse Master Key, follow the correct marker, and fix an exterior door that remains locked."
          gameTitle="Scrap Mechanic"
          gameHref="/scrap-mechanic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarehouseKeyGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}