import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AugsContent from "@/data/probably-stolen/augs.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/augs`;

const metadataTitle = "Probably Stolen Augs: How to Identify and Kill Them";
const metadataDescription = "Identify Augs in Probably Stolen using faces, dialogue and the Aug Scanner. Fix shotgun problems, avoid false kills, and survive Aug Menace.";
const articleDescription = "Recognize augmented customers from their appearance, clothing and dialogue, use the Aug Scanner, resolve shotgun equip conditions, and avoid attacking humans. Understand confirmed kills, the consequences of missed Augs, Aug Menace, and the Aug Hunter achievement.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/aug-confirmed-kill-101-credits.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: "Identify Aug customers, use the Aug Scanner, understand shotgun restrictions and survive encounters.",
    siteName: "Whisper of the House",
    images: [{ url: imageUrls[0], alt: "Probably Stolen confirmed Aug elimination with a 101 Credits reward" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: "Find Aug signs, shotgun restrictions, confirmed kill outcomes, and the risks of Aug Menace.",
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "when-augs-appear", label: "When Augs Appear" },
  { id: "identify-augs", label: "Identify an Aug" },
  { id: "aug-scanner", label: "Use the Aug Scanner" },
  { id: "shotgun", label: "Shotgun Not Equipping" },
  { id: "shooting-results", label: "Confirmed Kills & Mistakes" },
  { id: "aug-menace", label: "Aug Menace Starting Perk" },
  { id: "missed-augs", label: "When an Aug Escapes" },
  { id: "aug-hunter", label: "Aug Hunter Achievement" },
];

const relatedLinks = [
  { href: "/probably-stolen", label: "Probably Stolen: Shop Basics & Security" },
  { href: "/probably-stolen/achievements", label: "Aug Hunter & All Achievements" },
  { href: "/probably-stolen/factions", label: "Security and Faction Reputation" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Probably Stolen", item: hubUrl },
        { "@type": "ListItem", position: 3, name: "Augs", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: "How Do You Identify and Kill Augs in Probably Stolen?",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-29",
      dateModified: "2026-10-29",
      about: [
        { "@type": "VideoGame", name: "Probably Stolen" },
        { "@type": "Thing", name: "Aug detection" },
        { "@type": "Thing", name: "Aug Scanner" },
        { "@type": "Thing", name: "Shotgun equip conditions" },
        { "@type": "Thing", name: "Aug Menace perk" },
        { "@type": "Thing", name: "Aug elimination and rewards" },
        { "@type": "Thing", name: "Aug Hunter achievement" },
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
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <GuideArticlePage
          title="How Do You Identify and Kill Augs in Probably Stolen?"
          description="Recognize an Aug, confirm suspicious encounters with the Aug Scanner, find out when the shotgun works, and avoid costly mistakes."
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AugsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
