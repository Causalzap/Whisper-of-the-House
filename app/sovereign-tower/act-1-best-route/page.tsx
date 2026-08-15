import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Act1BestRouteContent from "@/data/sovereign-tower/act-1-best-route.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sovereign-tower`;
const pageUrl = `${hubUrl}/act-1-best-route`;

const metadataTitle =
  "Sovereign Tower Act 1 Best Route: Groveshire & Dragon Knight";

const metadataDescription =
  "Choose Groveshire, secure an allied county, protect 400 Gold, prioritize deadlines, and prepare for the Dragon Knight before Act 2.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-1-groveshire-gavault-choice.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-groveshire-wolf-alliance.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-1-dragon-knight-objectives.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-1-dragon-knight-defeated.webp`,
];

const toc = [
  {
    id: "act-1-route",
    label: "Act 1 route",
  },
  {
    id: "early-gold",
    label: "Early Gold",
  },
  {
    id: "groveshire-or-gavault",
    label: "Groveshire or Gavault",
  },
  {
    id: "groveshire-alliance",
    label: "Secure Groveshire",
  },
  {
    id: "quest-priority",
    label: "Quest priority",
  },
  {
    id: "dragon-knight-objectives",
    label: "Dragon Knight objectives",
  },
  {
    id: "last-cycles",
    label: "Final cycles",
  },
  {
    id: "dragon-knight-fight",
    label: "Dragon Knight fight",
  },
  {
    id: "act-1-checkpoint",
    label: "Act 1 checkpoint",
  },
  {
    id: "act-1-mistakes",
    label: "Common mistakes",
  },
];

const relatedLinks = [
  {
    href: "/sovereign-tower",
    label: "Sovereign Tower Guide Hub",
  },
  {
    href: "/sovereign-tower/groveshire-wolf",
    label: "Groveshire Wolf Guide",
  },
  {
    href: "/sovereign-tower/demon-power",
    label: "Demon Power & Rewind Guide",
  },
  {
    href: "/sovereign-tower/act-2-walkthrough",
    label: "Act 2 Walkthrough",
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
    title: "Sovereign Tower Act 1 Best Route",
    description:
      "Take the cleaner Act 1 route through Groveshire, manage the Dragon Knight preparation targets, and enter Act 2 without wasting your final cycles.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Sovereign Tower Act 1 choice between the Groveshire and Gavault routes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower Act 1 Best Route",
    description:
      "Choose Groveshire, secure an ally, protect your Gold, and prepare for the Dragon Knight without forcing every Act 1 objective.",
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
          name: "Sovereign Tower Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Act 1 Best Route",
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
        "Sovereign Tower Act 1 Best Route: Groveshire, Dragon Knight Preparation, and Act 2",
      description:
        "A player-focused Sovereign Tower Act 1 route guide explaining why I prefer Groveshire over Gavault for a first clear, how I secure the allied county before the Dragon Knight deadline, how I manage the 400 Gold preparation target, which quests I prioritize when cycles become limited, how the Merchant 10 and Noble 8 satisfaction bonuses affect preparation, when to stop starting optional work, how I approach the final Dragon Knight fight without requiring every preparation objective, and when I commit to the timeline before entering Act 2.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-09",
      dateModified: "2026-08-15",
      articleSection: "Sovereign Tower Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Sovereign Tower",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 1",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 1 best route",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Groveshire",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Gavault",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Dragon Knight",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Dragon Knight preparation",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Merchant satisfaction",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Noble satisfaction",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower 400 Gold",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower allied county",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 2",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Take a Cleaner Route Through Sovereign Tower Act 1"
          description="Choose Groveshire, secure your county ally before the Dragon Knight deadline, protect the 400 Gold target, and stop wasting the final cycles chasing bonuses you do not actually need."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Act1BestRouteContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}