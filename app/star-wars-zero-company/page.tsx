import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import StarWarsZeroCompanyContent from "@/data/star-wars-zero-company/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/star-wars-zero-company`;

const metadataTitle =
  "STAR WARS Zero Company Guide: Walkthrough, Choices & Tips";

const metadataDescription =
  "Start Zero Company with the right route for Cycles, difficulty, injuries, the 80,000-Credit debt, Tel-Rea, classes, Order 66, achievements, and the ending.";

  const imageUrls = [
    `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-holotable-objectives-expire.webp`,
    `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-walkthrough-luunata-citadel-briefing.webp`,
    `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-walkthrough-order-66-galactic-empire.webp`,
  ];

const toc = [
    {
      id: "where-to-start",
      label: "Where to start",
    },
    {
      id: "choose-next-mission",
      label: "What to do next",
    },
    {
      id: "campaign-structure",
      label: "Campaign structure",
    },
    {
      id: "major-roadblocks",
      label: "Early roadblocks",
    },
    {
      id: "build-squad",
      label: "Build your squad",
    },
    {
      id: "choices-consequences",
      label: "Choices & consequences",
    },
    {
      id: "order-66-trick",
      label: "Order 66 & Trick",
    },
    {
      id: "ending-postgame",
      label: "Ending & New Game Plus",
    },
    {
      id: "completion",
      label: "Achievements & 100%",
    },
  ];

  const relatedLinks = [
    {
      href: "/star-wars-zero-company/walkthrough",
      label: "Complete Walkthrough & Mission Order",
    },
    {
      href: "/star-wars-zero-company/beginner-guide",
      label: "Beginner Guide",
    },
    {
      href: "/star-wars-zero-company/classes-specializations",
      label: "Classes & Specializations Guide",
    },
    {
      href: "/star-wars-zero-company/difficulty-settings",
      label: "Difficulty Settings, Expert & Beskar Guide",
    },
    {
      href: "/star-wars-zero-company/permadeath-injuries",
      label: "Permadeath & Injuries Guide",
    },
    {
      href: "/star-wars-zero-company/achievements-trophies",
      label: "Achievements & Trophies Guide",
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
    title: "STAR WARS Zero Company Guide: Walkthrough, Choices & Tips",
    description:
      "Choose the right Zero Company route for Cycles, Critical Missions, Gorga's debt, Tel-Rea, squad planning, choices, Order 66, Trick, and completion.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "STAR WARS Zero Company Holotable showing Critical and expiring objectives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR WARS Zero Company Guide: Walkthrough, Choices & Tips",
    description:
      "Start with the right Critical route, then use dedicated guides for the debt, Tel-Rea, classes, achievements, and major campaign roadblocks.",
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
        "STAR WARS Zero Company Guide: Walkthrough, Choices, Classes and First-Run Tips",
      description:
        "A player-focused STAR WARS Zero Company guide hub for deciding what to do next during a campaign. It covers the first-run approach to Cycles, Critical Missions, injuries and roster flexibility, routes players to the complete 14-chapter walkthrough and dedicated guides for the 80,000-Credit Gorga debt, Dark Waters, Tel-Rea recruitment, classes and achievements, and answers broader questions about choices, Order 66, Trick, Captain Rex, the ending, postgame, and New Game Plus.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-28",
      dateModified: "2026-08-28",
      articleSection: "STAR WARS Zero Company Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "STAR WARS Zero Company",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company guide",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company walkthrough",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company beginner guide",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Critical Missions",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Cycles",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company 80,000 Credits",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Tel-Rea",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company classes",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company choices",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Order 66",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Trick",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Captain Rex",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company ending",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company New Game Plus",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company achievements",
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
          title="Choose the Right Route Through Zero Company"
          description="I use the Critical Mission chain as the backbone, protect time and healthy Operators before chasing every opportunity, and jump into a dedicated guide whenever the debt, Tel-Rea, a build choice, or completion goal needs a deeper answer."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <StarWarsZeroCompanyContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}