import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ChoicesConsequencesContent from "@/data/star-wars-zero-company/choices-consequences.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/choices-consequences`;

const metadataTitle =
  "STAR WARS Zero Company Choices & Consequences Guide";

const metadataDescription =
  "Best Zero Company choices for Kaller or Dantooine, Gorga's Revenge, Bruckner, Dilemmas and Crisis decisions, with rewards and consequences.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-pick-your-poison-kaller-dantooine.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-gorgas-revenge-bruckner-choice.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-trade-federation-defector-dilemma.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-relief-ship-choice.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-crisis-choice-enemy-upgrade.webp`,
];

const toc = [
  {
    id: "kaller-or-dantooine",
    label: "Kaller or Dantooine",
  },
  {
    id: "gorgas-revenge-bruckner",
    label: "Gorga's Revenge",
  },
  {
    id: "dilemmas-and-bonds",
    label: "Dilemmas & Bonds",
  },
  {
    id: "credit-choices",
    label: "Choices that cost Credits",
  },
  {
    id: "crisis-decisions",
    label: "Crisis decisions",
  },
  {
    id: "before-confirming-a-choice",
    label: "Before confirming a choice",
  },
];

const relatedLinks = [
  {
    href: "/star-wars-zero-company",
    label: "STAR WARS Zero Company Guide Hub",
  },
  {
    href: "/star-wars-zero-company/in-debt-to-the-hutts-walkthrough",
    label: "In Debt to the Hutts Walkthrough",
  },
  {
    href: "/star-wars-zero-company/difficulty-settings",
    label: "Difficulty & Beskar Mode",
  },
  {
    href: "/star-wars-zero-company/walkthrough",
    label: "Complete Walkthrough & Mission Order",
  },
  {
    href: "/star-wars-zero-company/classes-specializations",
    label: "Best Classes & Specializations",
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
    description:
      "Choose between Kaller and Dantooine, decide what to do with Bruckner, and handle Dilemmas and Crisis choices around the resources and consequences that matter.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Pick Your Poison choice between Kaller and Dantooine in STAR WARS Zero Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Kaller or Dantooine, Gorga's Revenge, Bruckner, Bond reactions, Credit choices and Crisis decisions in STAR WARS Zero Company.",
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
          name: "STAR WARS Zero Company Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Choices & Consequences",
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
        "STAR WARS Zero Company Choices and Consequences Guide",
      description:
        "A player-focused STAR WARS Zero Company choices guide covering Pick Your Poison and the Kaller or Dantooine decision, Gorga's Revenge and Bruckner, Dilemmas that affect Bonds and resources, Credit-dependent choices such as Relief Ship, and Crisis decisions where ignoring one threat can allow an enemy upgrade to take effect.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-29",
      dateModified: "2026-08-29",
      articleSection: "STAR WARS Zero Company Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "STAR WARS Zero Company",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company choices",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company consequences",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Kaller or Dantooine",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Pick Your Poison",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Gorga's Revenge",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Bruckner",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Dilemmas",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Bond choices",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Crisis decisions",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Relief Ship",
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
          title="Best Choices and What They Actually Change"
          description="I choose Kaller when I want the stronger early weapon-and-Credits package, judge Gorga and Bruckner around the resources I need now, and treat later Dilemmas and Crisis decisions as tradeoffs between Credits, Bonds, time, and future enemy pressure."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ChoicesConsequencesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}