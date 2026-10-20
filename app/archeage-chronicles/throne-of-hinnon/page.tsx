
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ThroneOfHinnonContent from "@/data/archeage-chronicles/throne-of-hinnon.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/archeage-chronicles`;
const pageUrl = `${hubUrl}/throne-of-hinnon`;

const metadataTitle =
  "ArcheAge Chronicles Throne of Hinnon Key & Helkum";

const metadataDescription =
  "Find the Throne of Hinnon key in Sunken Ruins, open the Altar of Seals dungeon, activate four Sigils, and defeat Helkum in ArcheAge Chronicles.";

const articleDescription =
  "Get the hidden Throne of Hinnon Dungeon Key, unlock the Altar of Seals entrance, activate four Sigils, and defeat Helkum, King of Hinnon.";

const imageUrls = [
  `${siteUrl}/images/archeage-chronicles/throne-of-hinnon-sunken-ruins-glide-route.webp`,
  `${siteUrl}/images/archeage-chronicles/throne-of-hinnon-key-ledge.webp`,
  `${siteUrl}/images/archeage-chronicles/throne-of-hinnon-dungeon-lever.webp`,
  `${siteUrl}/images/archeage-chronicles/throne-of-hinnon-reaper-red-heavy.webp`,
];

const toc = [
  {
    id: "throne-of-hinnon-key",
    label: "Dungeon Key Location",
  },
  {
    id: "dungeon-entrance",
    label: "Dungeon Entrance",
  },
  {
    id: "dungeon-preparation",
    label: "Level & Equipment",
  },
  {
    id: "four-sigils",
    label: "Four Sigils & Lever",
  },
  {
    id: "reaper-boss",
    label: "Helkum Boss Fight",
  },
  {
    id: "death-and-retry",
    label: "Death & Portal Shortcut",
  },
  {
    id: "rewards-and-farming",
    label: "Rewards & Farming",
  },
];

const relatedLinks = [
  {
    href: "/archeage-chronicles",
    label: "Demo Walkthrough",
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

export default function ArcheAgeChroniclesThroneOfHinnonPage() {
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
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Throne of Hinnon",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "How Do You Unlock Throne of Hinnon and Beat Helkum?",
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
          title="How Do You Unlock Throne of Hinnon and Beat Helkum?"
          description={articleDescription}
          gameTitle="ArcheAge Chronicles"
          gameHref="/archeage-chronicles"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ThroneOfHinnonContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
