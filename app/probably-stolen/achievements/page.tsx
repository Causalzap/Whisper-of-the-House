import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AchievementsContent from "@/data/probably-stolen/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle = "Probably Stolen Achievements: All 21 & 100% Checklist";
const metadataDescription = "Track all 21 Probably Stolen achievements, including store buyout, Prodigious before Day 50, Clean Hands, Rock Bottom, Jackpot and Aug Hunter.";
const articleDescription = "Complete all 21 Probably Stolen Steam achievements with a checkable progress tracker. Plan store buyout and Prodigious before Day 50, complete Clean Hands and Rock Bottom victories, earn Perfect Appraisals, identify Augs, and win the Scratcher jackpot.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/store-buyout-deed-confirmation.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: "Track all 21 Steam achievements and complete the Deed, Prodigious, Clean Hands, Rock Bottom, and Jackpot challenges.",
    siteName: "Whisper of the House",
    images: [{ url: imageUrls[0], alt: "Probably Stolen store deed confirmation after buying the shop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: "Use the 21-achievement checklist and follow the conditions for difficult and missable challenges.",
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "all-achievements", label: "21 Achievements Checklist" },
  { id: "buyout-achievements", label: "Store Deed & Prodigious" },
  { id: "clean-hands", label: "Clean Hands" },
  { id: "rock-bottom", label: "Rock Bottom Challenges" },
  { id: "early-achievements", label: "Opening-Day Achievements" },
  { id: "perfect-appraisals", label: "Perfect Appraisals" },
  { id: "wealth-achievements", label: "Wealth, Machines & Attractiveness" },
  { id: "machine-quality", label: "Cranked to Eleven" },
  { id: "reputation-achievements", label: "Reputation & Aug Hunter" },
  { id: "production-achievements", label: "Production Achievements" },
  { id: "hidden-scenario", label: "We Have Rats!" },
  { id: "jackpot", label: "Scratcher Jackpot" },
  { id: "completion-check", label: "100% Completion Check" },
];

const relatedLinks = [
  { href: "/probably-stolen", label: "Probably Stolen: Starting Scenarios & Shop Basics" },
  { href: "/probably-stolen/augs", label: "Identify Augs & Survive Encounters" },
  { href: "/probably-stolen/factions", label: "Faction Reputation & Security Effects" },
  { href: "/probably-stolen/rat-breeding", label: "Rat Wrangler: Breeding & Cages" },
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
        { "@type": "ListItem", position: 3, name: "Achievements", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: "How Do You Get All 21 Achievements in Probably Stolen?",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-29",
      dateModified: "2026-10-29",
      about: [
        { "@type": "VideoGame", name: "Probably Stolen" },
        { "@type": "Thing", name: "Steam achievements" },
        { "@type": "Thing", name: "Store buyout and Deed" },
        { "@type": "Thing", name: "Prodigious before Day 50" },
        { "@type": "Thing", name: "Clean Hands and Rock Bottom" },
        { "@type": "Thing", name: "Perfect appraisals and Aug Hunter" },
        { "@type": "Thing", name: "Scratcher jackpot" },
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
          title="How Do You Get All 21 Achievements in Probably Stolen?"
          description="Track 21 Steam achievements, plan the Deed and Day 50 deadline, and check the requirements for Clean Hands, Rock Bottom, Aug Hunter, and more."
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AchievementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
