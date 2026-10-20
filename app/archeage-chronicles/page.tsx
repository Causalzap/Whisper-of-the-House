
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ArcheAgeChroniclesContent from "@/data/archeage-chronicles/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/archeage-chronicles`;

const metadataTitle =
  "How to Finish the ArcheAge Chronicles Demo";

const metadataDescription =
  "Finish the ArcheAge Chronicles demo from Herald Knight to the final departure, with Diamond Shores progression, class choices, Glider, and PvP.";

const articleDescription =
  "Follow the ArcheAge Chronicles demo from the Herald Knight tutorial through Diamond Shores and Cliff of Madness to the final End of Preview message.";

const imageUrls = [
  `${siteUrl}/images/archeage-chronicles/archeage-chronicles-end-of-preview.webp`,
  `${siteUrl}/images/archeage-chronicles/classes-and-weapons-selection.webp`,
  `${siteUrl}/images/archeage-chronicles/archeage-chronicles-flites-prototype-glider-stats.webp`,
];

const toc = [
  {
    id: "choose-class",
    label: "Classes & Weapons",
  },
  {
    id: "opening-tutorial",
    label: "Tutorial & Herald Knight",
  },
  {
    id: "watchtower-of-hope",
    label: "Watchtower of Hope",
  },
  {
    id: "diamond-shores-exploration",
    label: "Diamond Shores & Glider",
  },
  {
    id: "altar-of-seals",
    label: "Altar of Seals",
  },
  {
    id: "pirate-story",
    label: "Cliff of Madness",
  },
  {
    id: "equipment-progress",
    label: "Gear & Trait Points",
  },
  {
    id: "pvp-conflict-channel",
    label: "PvP & Conflict Channel",
  },
  {
    id: "demo-ending",
    label: "Demo Ending",
  },
  {
    id: "after-preview",
    label: "After the Preview",
  },
];

const relatedLinks = [
  {
    href: "/archeage-chronicles/throne-of-hinnon",
    label: "Throne of Hinnon: Key & Helkum",
  },
  {
    href: "/archeage-chronicles/cliff-of-madness",
    label: "Cliff of Madness Walkthrough",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: imageUrls.map((url) => ({
      url,
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

export default function ArcheAgeChroniclesPage() {
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
            name: "ArcheAge Chronicles",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "How Do You Finish the ArcheAge Chronicles Demo?",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-20",
        dateModified: "2026-10-20",
        author: {
          "@type": "Organization",
          name: "Whisper of the House",
          url: siteUrl,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

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
          title="How Do You Finish the ArcheAge Chronicles Demo?"
          description={articleDescription}
          gameTitle="ArcheAge Chronicles"
          gameHref="/archeage-chronicles"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ArcheAgeChroniclesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
