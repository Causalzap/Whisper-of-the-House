import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SmugglersDenContent from "@/data/star-wars-zero-company/smugglers-den-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/smugglers-den-walkthrough`;

const metadataTitle =
  "Smuggler's Den Walkthrough & Tel-Rea Recruitment Guide";

const metadataDescription =
  "Find the Vinsar Materials service entrance, survive the later warehouse wave, expose the battle droids, and recruit Tel-Rea after Smuggler's Den.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-smugglers-den-vinsar-materials-briefing.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-smugglers-den-service-entrance.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-smugglers-den-vinsar-materials-warehouse.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-smugglers-den-destroyer-droid.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-smugglers-den-battle-droid-shipment.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-smugglers-den-tel-rea-joins.webp`,
];

const toc = [
  {
    id: "smugglers-den-route",
    label: "Smuggler's Den route",
  },
  {
    id: "find-service-entrance",
    label: "Find the service entrance",
  },
  {
    id: "enter-vinsar-materials",
    label: "Enter Vinsar Materials",
  },
  {
    id: "warehouse-fight",
    label: "Warehouse fight",
  },
  {
    id: "battle-droid-shipment",
    label: "Battle-droid shipment",
  },
  {
    id: "unlock-tel-rea",
    label: "Recruit Tel-Rea",
  },
  {
    id: "after-smugglers-den",
    label: "What changes afterward",
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
    href: "/star-wars-zero-company/dark-waters-walkthrough",
    label: "Dark Waters Walkthrough",
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
    title: "Smuggler's Den Walkthrough & Tel-Rea Recruitment",
    description:
      "Follow the route through Vinsar Materials, survive the later Destroyer Droid wave, uncover the battle-droid shipment, and recruit Tel-Rea.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Vinsar Materials briefing during Smuggler's Den in STAR WARS Zero Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smuggler's Den Walkthrough & Tel-Rea Recruitment",
    description:
      "Find the service entrance, clear Vinsar Materials, expose the battle droids, and recruit Tel-Rea after the Mission.",
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
          name: "Smuggler's Den Walkthrough",
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
        "Smuggler's Den Walkthrough and Tel-Rea Recruitment Guide for STAR WARS Zero Company",
      description:
        "A player-focused STAR WARS Zero Company Smuggler's Den walkthrough covering the Three Tower District, the Vinsar Materials service entrance, the condemned warehouse route, the later Infinite Coil reinforcement wave and Destroyer Droid, the hidden shipment of thousands of battle droids, and the story conversation that finally recruits Tel-Rea into Zero Company.",
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
          name: "STAR WARS Zero Company Smuggler's Den",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Vinsar Materials",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Three Tower District",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company service entrance",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Destroyer Droid",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company battle droid shipment",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Tel-Rea",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company recruit Tel-Rea",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Tel-Rea recruitment",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company One Less Clanker",
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
          title="Clear Vinsar Materials and Recruit Tel-Rea"
          description="I use the service entrance, keep going after the first warehouse wave, expose the hidden battle-droid shipment, then return to the Den for the conversation that finally brings Tel-Rea into Zero Company."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SmugglersDenContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}