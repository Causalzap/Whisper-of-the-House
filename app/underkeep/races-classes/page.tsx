import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UnderkeepRacesClassesContent from "@/data/underkeep/races-classes.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/underkeep`;
const pageUrl = `${hubUrl}/races-classes`;

const metadataTitle = "Underkeep Races & Classes: Skills, Traits & Best Party";
const metadataDescription =
  "Compare all seven Underkeep classes, racial traits, attributes, formation, first skill points, and starting four-character party combinations.";

const articleTitle = "Which Races and Classes Should You Choose in Underkeep?";
const articleDescription =
  "Compare class skills, racial restrictions, attributes, starting formations, and four-character party combinations before beginning your run.";

const imageFilenames = [
  "underkeep-party-formation.webp",
  "underkeep-seven-classes.webp",
  "underkeep-stoneborn-racial-trait.webp",
  "underkeep-paladin-stun-undead.webp",
];
const imageUrls = imageFilenames.map(
  (file) => `${siteUrl}/images/underkeep/${file}`,
);

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [{ url: imageUrls[0], alt: "Underkeep four-character party formation with front and back rows" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "party-formation", label: "How Does Party Formation Work in Underkeep?" },
  { id: "classes", label: "What Are the Seven Classes in Underkeep?" },
  { id: "races", label: "Which Race Should You Choose in Underkeep?" },
  { id: "attributes", label: "How Do Attributes and Stat Rerolls Work?" },
  { id: "skill-points", label: "How Should You Spend Your First Skill Points?" },
  { id: "starting-party", label: "What Is a Good Starting Party in Underkeep?" },
  { id: "race-class-pairings", label: "Which Race and Class Combinations Make Sense?" },
  { id: "character-creation", label: "What Should You Check Before Starting the Game?" },
];

const relatedLinks = [
  { href: "/underkeep", label: "Underkeep: Regions, Tower & Progression" },
  { href: "/underkeep/beginner-guide", label: "Beginner: Combat, Rest & Food" },
  { href: "/underkeep/early-game-walkthrough", label: "Early Game: Silver Key & Village" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Underkeep", item: hubUrl },
        { "@type": "ListItem", position: 3, name: "Races & Classes", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-06",
      dateModified: "2026-11-06",
      about: [
        { "@type": "VideoGame", name: "Underkeep" },
        { "@type": "Thing", name: "Seven playable classes" },
        { "@type": "Thing", name: "Racial traits and equipment restrictions" },
        { "@type": "Thing", name: "Front and back row formation" },
        { "@type": "Thing", name: "Attributes and skill points" },
        { "@type": "Thing", name: "Starting party combinations" },
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Underkeep"
          gameHref="/underkeep"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <UnderkeepRacesClassesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
