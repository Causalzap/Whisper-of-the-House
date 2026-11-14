
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SlotboundGuideContent from "@/data/slotbound/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slotbound`;

const metadataTitle =
  "Slotbound Beginner Guide: First Upgrades & Progression";

const metadataDescription =
  "Start Slotbound in Open Forest Easy, learn Spin, Nudge, and Absorb, clear Wave 30, choose permanent upgrades, and unlock Awakening with Dormant Power.";

const articleTitle =
  "Slotbound Beginner Guide: What Should You Do First?";

const articleDescription =
  "Learn how to summon units with winning lines, use Nudge, absorb units for Imprints, promote your first Archer, clear Open Forest, and choose upgrades including Advanced Units, Command Limit, and Dormant Power.";

const imageUrls = [
  `${siteUrl}/images/slotbound/slotbound-winning-line-nudge-tutorial.webp`,
  `${siteUrl}/images/slotbound/slotbound-spearman-into-archer-absorb.webp`,
  `${siteUrl}/images/slotbound/slotbound-pierce-i-imprint-effect.webp`,
  `${siteUrl}/images/slotbound/slotbound-first-class-promotion.webp`,
  `${siteUrl}/images/slotbound/slotbound-dormant-power-awakening-unlock.webp`,
];

const socialImage =
  `${siteUrl}/images/slotbound/slotbound-dormant-power-awakening-unlock.webp`;

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
        alt: "Slotbound permanent upgrade tree showing Dormant Power and the Awakening unlock",
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
  { id: "what-to-do-first", label: "What to Do First" },
  { id: "slot-machine", label: "Spins, Lines & Nudge" },
  {
    id: "absorb-and-promotion",
    label: "Absorb, Imprints & Promotions",
  },
  { id: "first-clear", label: "Clear Open Forest" },
  { id: "permanent-upgrades", label: "Best First Upgrades" },
  { id: "gold-and-interest", label: "Gold & Interest" },
  { id: "awakening-unlock", label: "Unlock Awakening" },
  {
    id: "battlefield-progression",
    label: "Where to Go Next",
  },
];

const relatedLinks = [
  {
    href: "/slotbound/builds",
    label: "Best Builds & Unit Evolutions",
  },
  {
    href: "/slotbound/cores",
    label: "Best Cores & Items",
  },
  {
    href: "/slotbound/jester",
    label: "Jester: Summon & Awaken",
  },
  {
    href: "/slotbound/achievements",
    label: "All 64 Achievements",
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
        { "@type": "Thing", name: "Open Forest Easy" },
        { "@type": "Thing", name: "Slot machine winning lines and Nudge" },
        { "@type": "Thing", name: "Absorb and Pierce I Imprint" },
        { "@type": "Thing", name: "Archer Class Promotion" },
        { "@type": "Thing", name: "Wave 30 Campaign clear" },
        { "@type": "Thing", name: "Advanced Units and Command Limit" },
        { "@type": "Thing", name: "Dormant Power and Awakening" },
        { "@type": "Thing", name: "Gold interest and progression" },
        { "@type": "Thing", name: "Six Campaign battlefields" },
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
          <SlotboundGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
