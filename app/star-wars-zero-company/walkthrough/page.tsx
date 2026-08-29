import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WalkthroughContent from "@/data/star-wars-zero-company/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "STAR WARS Zero Company Walkthrough & 14-Chapter Order";

const metadataDescription =
  "Follow the full Zero Company walkthrough and Critical Mission order across all 14 chapters, from Serelonus through Order 66, Umbara and Fathom.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-walkthrough-luunata-citadel-briefing.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-walkthrough-luunata-volcano-route.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-walkthrough-order-66-galactic-empire.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-walkthrough-captain-rex-trick-chip.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-walkthrough-cineurore-final-operation.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-walkthrough-fathom-final-fight.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-walkthrough-fathom-gone-for-good.webp`,
];

const toc = [
  {
    id: "campaign-order",
    label: "14-chapter campaign order",
  },
  {
    id: "serelonus-and-the-den",
    label: "Serelonus & the Den",
  },
  {
    id: "gorga-and-the-debt",
    label: "Gorga & the 80,000 debt",
  },
  {
    id: "republic-intelligence",
    label: "Republic Intelligence",
  },
  {
    id: "cortilius-investigation",
    label: "Cortilius investigation",
  },
  {
    id: "dark-waters-and-tel-rea",
    label: "Dark Waters & Tel-Rea",
  },
  {
    id: "smugglers-den-and-recruitment",
    label: "Smuggler's Den",
  },
  {
    id: "midgame-operator-stories",
    label: "Midgame Operator stories",
  },
  {
    id: "luunata",
    label: "Liberate Luunata",
  },
  {
    id: "tighten-the-noose",
    label: "Tighten the Noose",
  },
  {
    id: "viquist-and-order-66",
    label: "Viquist & Order 66",
  },
  {
    id: "rex-and-umbara",
    label: "Captain Rex & Umbara",
  },
  {
    id: "back-to-business",
    label: "Back to Business",
  },
  {
    id: "cineurore",
    label: "Cineurore",
  },
  {
    id: "final-fathom-fight",
    label: "Final Fathom fight",
  },
  {
    id: "epilogue",
    label: "Epilogue",
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
    href: "/star-wars-zero-company/dark-waters-walkthrough",
    label: "Dark Waters Walkthrough",
  },
  {
    href: "/star-wars-zero-company/smugglers-den-walkthrough",
    label: "Smuggler's Den & Tel-Rea Guide",
  },
  {
    href: "/star-wars-zero-company/achievements-trophies",
    label: "53 Achievements & Trophy Roadmap",
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
      "Follow Zero Company's Critical story route through all 14 chapters, including Gorga, Cortilius, Luunata, Order 66, Captain Rex, Umbara, Cineurore and Fathom.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Zero Company preparing to infiltrate Fathom's Citadel on Luunata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "The full 14-chapter Zero Company Critical Mission route from Serelonus through Order 66, Umbara, Cineurore and the final Fathom fight.",
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
          name: "Walkthrough & Mission Order",
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
        "STAR WARS Zero Company Walkthrough and 14-Chapter Mission Order",
      description:
        "A player-focused STAR WARS Zero Company walkthrough following the full 14-chapter Critical Mission route from Serelonus and the Den through Gorga's debt, Republic Intelligence, Cortilius, Dark Waters, Tel-Rea, Smuggler's Den, Luunata, Viquist, Order 66, Captain Rex, Umbara, Back to Business, Cineurore, the multi-stage Fathom fight and the epilogue. The route focuses on what advances the story next, when to return to the Den, when optional work is worth a Cycle, when extraction matters more than clearing enemies, and how to prepare for the final pursuit.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-28",
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
          name: "STAR WARS Zero Company walkthrough",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company mission order",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company chapter order",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Critical Missions",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company 14 chapters",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Luunata",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Order 66",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Captain Rex",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Umbara",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Cineurore",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Fathom final fight",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company ending",
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
          title="Complete Walkthrough and Critical Mission Route"
          description="I follow the Critical chain through all 14 chapters, return to the Den when major Missions change the roster or open new work, and only spend extra Cycles when the current story deadline leaves room."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}