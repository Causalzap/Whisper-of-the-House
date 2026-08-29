import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import StarWarsZeroCompanyContent from "@/data/star-wars-zero-company/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/star-wars-zero-company`;

const metadataTitle =
  "STAR WARS Zero Company Guide: First Run, Choices & Builds";

const metadataDescription =
  "Start Zero Company with the right plan for Critical Missions, Cycles, difficulty, injuries, squad builds, choices, major roadblocks and 100% completion.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-holotable-objectives-expire.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-walkthrough-luunata-citadel-briefing.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-walkthrough-order-66-galactic-empire.webp`,
];

const toc = [
  {
    id: "where-to-start",
    label: "First-run campaign rhythm",
  },
  {
    id: "what-kind-of-run",
    label: "Choose your kind of run",
  },
  {
    id: "campaign-shape",
    label: "How the campaign develops",
  },
  {
    id: "when-holotable-is-crowded",
    label: "When the Holo Table is crowded",
  },
  {
    id: "roadblocks",
    label: "Major campaign roadblocks",
  },
  {
    id: "roster-decisions",
    label: "Roster depth & injuries",
  },
  {
    id: "choices",
    label: "How I approach choices",
  },
  {
    id: "after-story",
    label: "After the story & 100%",
  },
];

const relatedLinks = [
  {
    href: "/star-wars-zero-company/walkthrough",
    label: "Complete Walkthrough & 14-Chapter Order",
  },
  {
    href: "/star-wars-zero-company/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/star-wars-zero-company/classes-specializations",
    label: "Best Classes & Specializations",
  },
  {
    href: "/star-wars-zero-company/difficulty-settings",
    label: "Best Difficulty & Beskar Mode",
  },
  {
    href: "/star-wars-zero-company/permadeath-injuries",
    label: "Injuries, Permadeath & Aurelio",
  },
  {
    href: "/star-wars-zero-company/choices-consequences",
    label: "Choices & Consequences Guide",
  },
  {
    href: "/star-wars-zero-company/achievements-trophies",
    label: "53 Achievements & Trophy Roadmap",
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
    title: metadataTitle,
    description:
      "Plan a Zero Company campaign around Critical Missions, Holo Table timers, roster depth and the run you actually want, then jump to the right guide when a specific roadblock appears.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "STAR WARS Zero Company Holo Table showing Critical work and expiring opportunities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "A first-run Zero Company guide for Critical Missions, Cycles, squad planning, choices, major roadblocks, completion and what to do after the story.",
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
        "STAR WARS Zero Company Guide for Your First Campaign",
      description:
        "A player-focused STAR WARS Zero Company guide for planning a first campaign around Critical Missions, Holo Table expiry timers, Cycles, difficulty, roster depth, injuries, squad builds and meaningful choices. It also points players toward dedicated routes for the 14-chapter campaign, Gorga's 80,000-Credit debt, Dark Waters, Tel-Rea recruitment, Permadeath, achievements and other established roadblocks while answering broader questions about Order 66, Trick, the ending, postgame and New Game Plus.",
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
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company guide",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company first run",
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
          name: "STAR WARS Zero Company Holo Table",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company squad",
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
          title="Where I Start in STAR WARS Zero Company"
          description="I build the campaign around Critical Missions and Holo Table timers, return to the Den before spending another Cycle, keep enough roster depth to absorb injuries or story absences, and only optimize the parts of the run that actually need it."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 29, 2026"
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