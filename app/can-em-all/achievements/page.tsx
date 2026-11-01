
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CanEmAllAchievementsContent from "@/data/can-em-all/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/can-em-all`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Can 'Em All Achievements: All 12 & Hidden Unlocks";

const metadataDescription =
  "Unlock all 12 Can 'Em All achievements, including four hidden tasks, 10 explosive-bullet kills, children fed milestones, and the final ending.";

const articleDescription =
  "Complete all 12 Steam achievements in Can 'Em All. Throw a creature's body or yourself into the transport tube for Not a Can and Special Delivery; use the Grinder for Fresh Meat and Human Meat; kill 10 creatures at once with an explosive bullet; reach 100, 10,000, and 100,000 children fed; then complete the first factory sale, permanent upgrade tree, and ending achievements.";

const imageUrls = [
  `${siteUrl}/images/can-em-all/can-em-all-not-a-can-transport-tube.webp`,
  `${siteUrl}/images/can-em-all/can-em-all-special-delivery-warning-email.webp`,
  `${siteUrl}/images/can-em-all/can-em-all-human-meat-warning-email.webp`,
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
      "Unlock all 12 Can 'Em All achievements, including four hidden transport-tube and Grinder tasks, Collateral Damage, and Freedom at Last.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Player aiming a creature's body at the transport tube using the Vacuum for Not a Can in Can 'Em All",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Find all four hidden achievements, complete the explosive-bullet challenge, and reach every feeding and factory completion milestone.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "all-achievements",
    label: "All 12 Achievements",
  },
  {
    id: "transport-tube-achievements",
    label: "Not a Can & Special Delivery",
  },
  {
    id: "grinder-achievements",
    label: "Fresh Meat & Human Meat",
  },
  {
    id: "collateral-damage",
    label: "Collateral Damage",
  },
  {
    id: "feeding-achievements",
    label: "100–100,000 Children Fed",
  },
  {
    id: "remaining-achievements",
    label: "Prestige & Ending Achievements",
  },
];

const relatedLinks = [
  {
    href: "/can-em-all",
    label: "Can 'Em All: Factory Upgrades & Automation",
  },
  {
    href: "/can-em-all/prestige-ending",
    label: "Can 'Em All Prestige, Permanent Upgrades & Ending",
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
          name: "Can 'Em All",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
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
        "How Do You Unlock All 12 Achievements in Can 'Em All?",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-01",
      dateModified: "2026-11-01",
      about: [
        {
          "@type": "VideoGame",
          name: "Can 'Em All",
        },
        {
          "@type": "Thing",
          name: "Can 'Em All Steam achievements",
        },
        {
          "@type": "Thing",
          name: "Not a Can and Special Delivery hidden achievements",
        },
        {
          "@type": "Thing",
          name: "Fresh Meat and Human Meat hidden achievements",
        },
        {
          "@type": "Thing",
          name: "Collateral Damage explosive bullet achievement",
        },
        {
          "@type": "Thing",
          name: "Children fed achievement milestones",
        },
        {
          "@type": "Thing",
          name: "A Fresh Start and The Perfect Employee achievements",
        },
        {
          "@type": "Thing",
          name: "Freedom at Last ending achievement",
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
          title="How Do You Unlock All 12 Achievements in Can 'Em All?"
          description="Complete all four hidden achievements, land the ten-kill explosion, reach the feeding milestones, and finish the remaining factory objectives."
          gameTitle="Can 'Em All"
          gameHref="/can-em-all"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CanEmAllAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
