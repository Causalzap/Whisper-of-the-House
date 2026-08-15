import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GroveshireWolfContent from "@/data/sovereign-tower/groveshire-wolf.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sovereign-tower`;
const pageUrl = `${hubUrl}/groveshire-wolf`;

const metadataTitle =
  "Sovereign Tower Wolf Guide: Curse, Rufus & Good Boy";

const metadataDescription =
  "Recruit the Groveshire Wolf, unlock Good Boy, reveal his human curse, choose whether to cure him, and learn how Sir Rufus changes afterward.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-wolf-joins-round-table.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-groveshire-black-forest-clue.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-groveshire-beast-is-a-wolf.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-groveshire-wolf-alliance.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-wolf-human-curse-reveal.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-rufus-returns-round-table.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-rufus-wolf-habits.webp`,
];

const toc = [
  {
    id: "groveshire-wolf-route",
    label: "Groveshire Wolf route",
  },
  {
    id: "black-forest",
    label: "Black Forest",
  },
  {
    id: "beast-is-wolf",
    label: "Beast is a Wolf",
  },
  {
    id: "send-angelica",
    label: "Use Angelica",
  },
  {
    id: "groveshire-alliance",
    label: "Groveshire alliance",
  },
  {
    id: "recruit-wolf",
    label: "Recruit the Wolf",
  },
  {
    id: "good-boy",
    label: "Good Boy achievement",
  },
  {
    id: "wolf-stats",
    label: "Wolf stats",
  },
  {
    id: "wolf-mount",
    label: "Wolf mount bonus",
  },
  {
    id: "wolf-affinity",
    label: "Wolf affinity",
  },
  {
    id: "wolf-curse",
    label: "Wolf curse reveal",
  },
  {
    id: "break-curse",
    label: "Break the curse?",
  },
  {
    id: "rufus-returns",
    label: "Sir Rufus",
  },
  {
    id: "rufus-wolf-habits",
    label: "Rufus Wolf Habits",
  },
  {
    id: "wolf-route-stuck",
    label: "Wolf route troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/sovereign-tower",
    label: "Sovereign Tower Guide Hub",
  },
  {
    href: "/sovereign-tower/act-1-best-route",
    label: "Act 1 Best Route",
  },
  {
    href: "/sovereign-tower/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/sovereign-tower/king-slayer",
    label: "King Slayer Guide",
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
    title: "Sovereign Tower Wolf & Rufus Guide",
    description:
      "Follow the Groveshire beast route, recruit the Wolf, unlock Good Boy, reveal his human curse, and continue the tested cure route into Sir Rufus.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "The Groveshire Wolf asking to join the Round Table in Sovereign Tower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower Wolf & Rufus Guide",
    description:
      "Recruit the Wolf, unlock Good Boy, discover his curse, and see what changes when he returns as Sir Rufus.",
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
          name: "Groveshire Wolf Guide",
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
        "Sovereign Tower Wolf Guide: Groveshire Route, Good Boy, Curse, and Sir Rufus",
      description:
        "A player-focused Sovereign Tower Groveshire Wolf guide covering how I follow the beast investigation to the Black Forest, use Angelica for the humane Wolf outcome, secure the Groveshire alliance, recruit the Wolf and unlock Good Boy, use his Wit, Agility, unusual affinity mechanic and built-in -2 cycle-duration mount, discover through Belelladana that he is a human trapped under a curse, choose the tested cure route, wait for him to return as Sir Rufus, rebuild his changed Knight stats, and use Wolf Habits to reduce his quest duration by one cycle while still equipping a normal mount.",
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
          name: "Sovereign Tower Groveshire",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Wolf",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Beast of Groveshire",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower recruit Wolf",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Good Boy",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Wolf curse",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower break Wolf curse",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Belelladana Wolf",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Rufus",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Sir Rufus",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Wolf Habits",
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
          title="Recruit the Groveshire Wolf, Then Decide Whether to Break His Curse"
          description="Use Angelica for the humane Wolf route, unlock Good Boy, learn why the Wolf is unusual, then follow the tested cure path that reveals his identity as Sir Rufus."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GroveshireWolfContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}