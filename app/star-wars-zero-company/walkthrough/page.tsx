import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WalkthroughContent from "@/data/star-wars-zero-company/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "STAR WARS Zero Company Walkthrough & Mission Order";

const metadataDescription =
  "Follow all 14 chapters from Serelonus to Fathom, with Critical Mission order, Luunata, Order 66, Trick, Rex, Umbara, and the ending.";

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
    label: "14-chapter order",
  },
  {
    id: "prologue",
    label: "Prologue",
  },
  {
    id: "business-as-usual",
    label: "Business As Usual",
  },
  {
    id: "republic-intelligence",
    label: "Republic Intelligence",
  },
  {
    id: "cortilius",
    label: "Cortilius",
  },
  {
    id: "dark-waters",
    label: "Dark Waters",
  },
  {
    id: "smugglers-den",
    label: "Smuggler's Den",
  },
  {
    id: "jedi-undercover",
    label: "Jedi Undercover",
  },
  {
    id: "casualties-of-war",
    label: "Casualties of War",
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
    id: "viquist",
    label: "Viquist",
  },
  {
    id: "order-66",
    label: "Order 66",
  },
  {
    id: "captain-rex",
    label: "Captain Rex & Trick",
  },
  {
    id: "umbara",
    label: "Umbara",
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
    href: "/star-wars-zero-company/beginner-guide",
    label: "Beginner Guide",
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
    label: "Achievements & Trophies Guide",
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
    title: "STAR WARS Zero Company Walkthrough & Mission Order",
    description:
      "Follow the full 14-chapter campaign through Gorga, Cortilius, Luunata, Order 66, Captain Rex, Umbara, Cineurore, and the final fight with Fathom.",
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
    title: "STAR WARS Zero Company Walkthrough & Mission Order",
    description:
      "Follow the Critical story route across all 14 chapters, including Luunata, Order 66, Trick, Captain Rex, Umbara, and the final Fathom fight.",
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
        "STAR WARS Zero Company Walkthrough & Mission Order: All 14 Chapters",
      description:
        "A player-focused STAR WARS Zero Company walkthrough covering the complete 14-chapter campaign and Critical Mission progression from Serelonus and the Den through Gorga, Republic Intelligence, Cortilius, Dark Waters, Smuggler's Den, Jedi Undercover, Casualties of War, Luunata, Tighten the Noose, the interrupted Viquist assault, Order 66, Trick's inhibitor chip, Captain Rex, Umbara, Back to Business, Cineurore, the multi-stage final Fathom battle, and the epilogue. It focuses on which story milestone comes next while leaving detailed mission routes to their dedicated guides.",
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
          name: "STAR WARS Zero Company 14 chapters",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Critical Missions",
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
          name: "STAR WARS Zero Company Trick",
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
          title="Follow the Critical Route Through All 14 Chapters"
          description="I use the Critical Mission chain as the campaign spine, take optional work only when the timers allow it, and follow the story from Serelonus through Luunata, Order 66, Umbara, Cineurore, and Fathom."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 28, 2026"
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