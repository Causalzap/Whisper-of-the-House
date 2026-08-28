import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BeginnerGuideContent from "@/data/star-wars-zero-company/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/beginner-guide`;

const metadataTitle =
  "STAR WARS Zero Company Beginner Guide: Cycles, Injuries & Tips";

const metadataDescription =
  "Learn how Cycles advance, when Operations do not pass time, how to treat injuries, grow your roster, claim Zone rewards, and fight smarter.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-holotable-objectives-expire.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-zone-reward-influence.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-recruitment-roster-capacity.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-upgrades-one-cycle-build-slot.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-call-for-backup.webp`,
];

const toc = [
  {
    id: "plan-each-cycle",
    label: "Plan each Cycle",
  },
  {
    id: "operations-and-cycles",
    label: "Operations & Cycles",
  },
  {
    id: "injuries-medbay",
    label: "Check injuries before the next Mission",
  },
  {
    id: "influence-rewards",
    label: "Influence rewards",
  },
  {
    id: "backup-operators",
    label: "Backup Operators",
  },
  {
    id: "den-conversations",
    label: "Den conversations",
  },
  {
    id: "explore-before-combat",
    label: "Explore before combat",
  },
  {
    id: "bonds-focus",
    label: "Bonds & Focus Points",
  },
  {
    id: "early-upgrades",
    label: "Early upgrades",
  },
  {
    id: "action-economy",
    label: "Action economy",
  },
  {
    id: "advantage-overwatch",
    label: "Advantage & Overwatch",
  },
  {
    id: "first-run-routine",
    label: "First-run routine",
  },
];

const relatedLinks = [
  {
    href: "/star-wars-zero-company",
    label: "STAR WARS Zero Company Guide Hub",
  },
  {
    href: "/star-wars-zero-company/walkthrough",
    label: "Complete Walkthrough & Mission Order",
  },
  {
    href: "/star-wars-zero-company/classes-specializations",
    label: "Classes & Specializations Guide",
  },
  {
    href: "/star-wars-zero-company/in-debt-to-the-hutts-walkthrough",
    label: "In Debt to the Hutts Walkthrough",
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
    title: "STAR WARS Zero Company Beginner Guide",
    description:
      "Manage Cycles, Operations, injuries, Influence, Recruitment, Den upgrades, Action Points, Advantage, and Overwatch without wasting early progression.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "STAR WARS Zero Company Holotable showing Critical objectives and expiring opportunities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR WARS Zero Company Beginner Guide",
    description:
      "Learn what actually advances a Cycle, how I handle injuries and roster gaps, and which tactical habits save the most trouble on a first run.",
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
          name: "Beginner Guide",
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
        "STAR WARS Zero Company Beginner Guide: Cycles, Injuries, Roster Planning, and Combat Tips",
      description:
        "A player-focused STAR WARS Zero Company beginner guide explaining how I prioritize Critical objectives and expiry timers, why Operations do not advance Cycles while Tactical Missions do, how MedBay treatment and injuries affect roster planning, when I check Zone Influence rewards, why backup Operators matter, when I return to the Den for conversations, how free-roam interactions can provide Advantage or Intel, how I use Bonds and Focus Points without over-managing builds, how I prioritize early Den upgrades, and how Action Points, Call for Backup, shared Advantage, Overwatch, and hit chance shape my tactical decisions.",
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
          name: "STAR WARS Zero Company beginner guide",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company tips",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Cycles",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Operations",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Tactical Missions",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company injuries",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company MedBay",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Influence",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Recruitment",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company roster capacity",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Bonds",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Focus Points",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company upgrades",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Action Points",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Call for Backup",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Advantage",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Overwatch",
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
          title="Start Strong Without Wasting Cycles, Intel, or Operators"
          description="I use Critical status and expiry to choose the next job, treat injuries before they become permanent losses, keep a usable backup roster, and plan every tactical turn around what can still go wrong."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}