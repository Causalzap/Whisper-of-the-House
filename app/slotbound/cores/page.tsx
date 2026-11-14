
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SlotboundCoresContent from "@/data/slotbound/cores.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/slotbound`;
const pageUrl = `${hubUrl}/cores`;

const metadataTitle =
  "Slotbound Best Cores & Items: Effects, Synergies & Picks";

const metadataDescription =
  "Compare Slotbound Cores and Items, including Gold Tooth, Copycat, Wildcard, First Aid, Sturdy Fist, Wasteland Camel, Hardening Powder, and Fate Stones.";

const articleTitle =
  "Which Cores and Items Should You Pick in Slotbound?";

const articleDescription =
  "Compare spin discounts, reel-changing Cores, Jester Hat effects, Item bonuses, and Fate Stone requirements. Learn when to choose Gold Tooth, Copycat, First Aid, Wasteland Camel, and Hardening Powder.";

const imageUrls = [
  `${siteUrl}/images/slotbound/slotbound-wild-card-core.webp`,
  `${siteUrl}/images/slotbound/slotbound-gold-tooth-core.webp`,
  `${siteUrl}/images/slotbound/slotbound-wasteland-camel-item.webp`,
  `${siteUrl}/images/slotbound/slotbound-hardening-powder-marsh.webp`,
  `${siteUrl}/images/slotbound/slotbound-fate-stone-origin-milestone-blessing.webp`,
];

const socialImage =
  `${siteUrl}/images/slotbound/slotbound-gold-tooth-core.webp`;

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
    images: [
      {
        url: socialImage,
        alt: "Slotbound Gold Tooth Core and alternative Core choices in the selection screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [socialImage],
  },
};

const toc = [
  { id: "cores-vs-items", label: "Cores vs Items" },
  { id: "best-cores", label: "Best Cores & Effects" },
  { id: "reel-control", label: "Reel Control Cores" },
  { id: "jester-cores", label: "Jester Hat Cores" },
  { id: "best-items", label: "Best Items & Shop Choices" },
  { id: "fate-stones", label: "Fate Stone Quests" },
];

const relatedLinks = [
  {
    href: "/slotbound",
    label: "Beginner Guide: Spin, Absorb & Upgrades",
  },
  {
    href: "/slotbound/builds",
    label: "Hard Mode Builds & Unit Roles",
  },
  {
    href: "/slotbound/jester",
    label: "Jester: Hats, Cores & Summoning",
  },
  {
    href: "/slotbound/achievements",
    label: "Fate Stones & All 64 Achievements",
  },
];

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
          name: "Slotbound",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cores & Items",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-14",
      dateModified: "2026-11-14",
      about: [
        { "@type": "VideoGame", name: "Slotbound" },
        { "@type": "Thing", name: "Slotbound Cores" },
        { "@type": "Thing", name: "Gold Tooth and Nutrient Leaf" },
        { "@type": "Thing", name: "Double Ledger and Copycat" },
        { "@type": "Thing", name: "Echo Mirror and Oracle's Mirror" },
        { "@type": "Thing", name: "Joker Seed and Wildcard" },
        { "@type": "Thing", name: "First Aid and Sturdy Fist" },
        { "@type": "Thing", name: "Wasteland Camel" },
        { "@type": "Thing", name: "Hardening Powder and Marsh" },
        { "@type": "Thing", name: "Fate Stone quests" },
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
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Slotbound"
          gameHref="/slotbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SlotboundCoresContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
