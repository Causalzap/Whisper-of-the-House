
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FromTheAshesContent from "@/data/crimson-desert/from-the-ashes.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const dlcPath = "/crimson-desert/charting-the-unknown";
const pagePath = "/crimson-desert/from-the-ashes";
const pageUrl = `${siteUrl}${pagePath}`;

const articleTitle =
  "How Do You Complete From the Ashes in Crimson Desert?";

const metadataDescription =
  "Complete all 9 From the Ashes quests in Crimson Desert. Investigate the depot fire, catch the agitator, defeat Geago, and find Countess Azerian.";

const articleDescription =
  "Follow Damiane's nine quests through Demeniss, find both fire investigation clues, capture the agitator, defeat Geago at Scorchrock Castle, and uncover the secret summons.";

const imageUrls = [
  `${siteUrl}/images/crimson-desert/crimson-desert-charting-the-unknown-story-questlines.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-from-the-ashes-pickpocket-captured.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-from-the-ashes-depot-fire-clues.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-from-the-ashes-fire-deepest-scar.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-from-the-ashes-geago-flamecrazed.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-from-the-ashes-secret-summons-safehouse.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-from-the-ashes-final-edict.webp`,
];

export const metadata: Metadata = {
  title: articleTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: articleTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: articleTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "start-from-the-ashes",
    label: "How to Start From the Ashes",
  },
  {
    id: "all-nine-quests",
    label: "All 9 Quests in Order",
  },
  {
    id: "reclaimed-and-remaining",
    label: "Quell the Chaos in Demeniss",
  },
  {
    id: "countess-whereabouts",
    label: "Find Countess Azerian",
  },
  {
    id: "judgment-of-fire",
    label: "Two Fire Investigation Clues",
  },
  {
    id: "schemes",
    label: "Catch the Suspect",
  },
  {
    id: "wavering-sentiment",
    label: "Find the Agitator",
  },
  {
    id: "chasing-a-shadow",
    label: "Enter Scorchrock Castle",
  },
  {
    id: "geago-boss",
    label: "Geago Boss Fight",
  },
  {
    id: "secret-summons",
    label: "Secret Letter & Safehouse",
  },
  {
    id: "path-of-the-politician",
    label: "Finish the Final Quest",
  },
  {
    id: "from-the-ashes-rewards",
    label: "Quest Rewards",
  },
  {
    id: "not-progressing",
    label: "Quest Not Progressing",
  },
];

const relatedLinks = [
  {
    label: "Charting the Unknown DLC",
    href: dlcPath,
  },
  {
    label: "Beyond the Margins Walkthrough",
    href: "/crimson-desert/beyond-the-margins",
  },
  {
    label: "Forged Resolve Walkthrough",
    href: "/crimson-desert/forged-resolve",
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
          name: "Crimson Desert",
          item: `${siteUrl}/crimson-desert`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Charting the Unknown",
          item: `${siteUrl}${dlcPath}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "From the Ashes",
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
      datePublished: "2026-11-02",
      dateModified: "2026-11-02",
      about: [
        {
          "@type": "VideoGame",
          name: "Crimson Desert",
        },
        {
          "@type": "Thing",
          name: "Charting the Unknown",
        },
        {
          "@type": "Thing",
          name: "From the Ashes",
        },
        {
          "@type": "Thing",
          name: "Judgment of Fire",
        },
        {
          "@type": "Thing",
          name: "Geago the Flamecrazed",
        },
        {
          "@type": "Thing",
          name: "Scorchrock Castle",
        },
        {
          "@type": "Thing",
          name: "Secret Summons",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <GuideArticlePage
          title={articleTitle}
          description="Follow Damiane's nine quests, investigate the burned depot, expose the plot against Demeniss, defeat Geago, and complete King Thorel's final proclamation."
          gameTitle="Crimson Desert: Charting the Unknown"
          gameHref={dlcPath}
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FromTheAshesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
