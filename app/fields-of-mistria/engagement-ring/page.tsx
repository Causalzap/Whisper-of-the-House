import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FieldsOfMistriaEngagementRingContent from "@/data/fields-of-mistria/engagement-ring.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/fields-of-mistria`;
const pageUrl = `${hubUrl}/engagement-ring`;

const imageUrls = [
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-engagement-ring-recipe-unlock.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-engagement-ring-recipe-scroll.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-engagement-ring-crafting-recipe.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-engagement-ring-blacksmithing-station.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-engagement-ring-use-at-10-hearts.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-engagement-ring-proposal-choice.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-engagement-proposal-repeat-scene.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-engagement-other-dates-best-friend-setting.webp`,
];

export const metadata: Metadata = {
  title: "Fields of Mistria Engagement Ring: Recipe & Proposal Guide",
  description:
    "Unlock the Engagement Ring at 10 Hearts, craft it with 1 Dragon-Forged Core, 2 Diamonds, 4 Gold Ingots and 4 Mistril Ingots, then propose.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Fields of Mistria Engagement Ring & Proposal Guide",
    description:
      "Get the Engagement Ring recipe from Elsie, craft it at a Blacksmithing station, use it at 10 Hearts, and choose whether to propose or postpone.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 719,
        height: 413,
        alt: "Elsie giving the Engagement Ring Recipe in Fields of Mistria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fields of Mistria Engagement Ring & Proposal Guide",
    description:
      "Unlock the recipe at 10 Hearts, craft the Engagement Ring, start the proposal discussion, and postpone it if you are not ready to commit.",
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
          name: "Fields of Mistria Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Engagement Ring Guide",
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
        "Fields of Mistria Engagement Ring Guide: Recipe, Crafting and Proposal",
      description:
        "A complete Fields of Mistria Engagement Ring guide covering the 10-Heart dating requirement, Elsie's recipe event, the exact recipe of 1 Dragon-Forged Core, 2 Diamonds, 4 Gold Ingots and 4 Mistril Ingots, Blacksmithing crafting, proposal discussions, postponing the decision, and relationship settings to check before confirming an engagement.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-15",
      dateModified: "2026-08-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Fields of Mistria",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Engagement Ring",
        },
        {
          "@type": "Thing",
          name: "Engagement Ring Recipe",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria proposal",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria 10 Hearts",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Blacksmithing",
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

const toc = [
  {
    id: "unlock-engagement-ring-recipe",
    label: "Unlock the ring recipe",
  },
  {
    id: "engagement-ring-recipe",
    label: "Recipe and materials",
  },
  {
    id: "where-to-craft-engagement-ring",
    label: "Where to craft the ring",
  },
  {
    id: "how-to-use-engagement-ring",
    label: "Use the ring at 10 Hearts",
  },
  {
    id: "postpone-engagement-proposal",
    label: "Postpone the proposal",
  },
  {
    id: "before-confirming-engagement",
    label: "Before confirming engagement",
  },
  {
    id: "engagement-ring-not-working",
    label: "Engagement Ring fixes",
  },
  {
    id: "engagement-ring-route",
    label: "10 Hearts to proposal route",
  },
];

const relatedLinks = [
  {
    href: "/fields-of-mistria",
    label: "Fields of Mistria Guide Hub",
  },
  {
    href: "/fields-of-mistria/marriage-guide",
    label: "Fields of Mistria Marriage Guide",
  },
  {
    href: "/fields-of-mistria/how-to-unlock-mines",
    label: "How to Unlock the Mines",
  },
  {
    href: "/fields-of-mistria/achievements-guide",
    label: "Fields of Mistria Achievements Guide",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="How I Get and Use the Engagement Ring in Fields of Mistria"
          description="I reach 10 Hearts with someone I am dating, get the recipe from Elsie, craft the ring at Blacksmithing, then choose whether to propose or wait."
          gameTitle="Fields of Mistria"
          gameHref="/fields-of-mistria"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FieldsOfMistriaEngagementRingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}