
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import VorgothFinalBossContent from "@/data/enshrouded/vorgoth-final-boss.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/enshrouded`;
const pageUrl = `${hubUrl}/vorgoth-final-boss`;

const metadataTitle =
  "Enshrouded Vorgoth Final Boss: Both Phases & Rewards";

const metadataDescription =
  "Defeat Vorgoth in Enshrouded 1.0 with strategies for both phases, Shroud damage immunity, arena organs, healing, and the final boss rewards.";

const articleDescription =
  "Beat Vorgoth's armored form and the Wanderer's Vessel, counter his sword and Shroud attacks, use arena organs for damage, and collect his Legendary rewards.";

const imageUrls = [
  `${siteUrl}/images/enshrouded/enshrouded-lord-vorgoth-boss-fight.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-vorgoth-lunge-dodge.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-vorgoth-greatsword-loot.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "location",
    label: "Vorgoth location & prerequisites",
  },
  {
    id: "damage-type",
    label: "Fix ineffective damage",
  },
  {
    id: "first-form",
    label: "First form: Champion of the Shroud",
  },
  {
    id: "second-form",
    label: "Second form: Wanderer's Vessel",
  },
  {
    id: "positioning",
    label: "Mage, Bow & Melee strategies",
  },
  {
    id: "shroud-danger",
    label: "Survive the final moments",
  },
  {
    id: "rewards",
    label: "Rewards & final quest",
  },
];

const relatedLinks = [
  {
    href: "/enshrouded",
    label: "Enshrouded 1.0 Guide & Walkthrough",
  },
  {
    href: "/enshrouded/achievements",
    label: "All 58 Achievements & 100% Roadmap",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "Vorgoth, Champion of the Shroud, during the Enshrouded 1.0 final boss encounter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "Enshrouded",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Vorgoth Final Boss",
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
      headline: "How to Beat Vorgoth in Enshrouded 1.0",
      description: articleDescription,
      url: pageUrl,
      inLanguage: "en",
      image: imageUrls,
      datePublished: "2026-10-16",
      dateModified: "2026-10-16",
      about: [
        {
          "@type": "VideoGame",
          name: "Enshrouded",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Vorgoth, Champion of the Shroud",
        },
        {
          "@type": "Thing",
          name: "Vorgoth, the Wanderer's Vessel",
        },
        {
          "@type": "Thing",
          name: "Enshrouded Vorgoth final boss fight",
        },
        {
          "@type": "Thing",
          name: "Enshrouded Cinders Of The End",
        },
        {
          "@type": "Thing",
          name: "Shroud Vessel's Greatsword",
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
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}#organization`,
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How to Beat Vorgoth in Enshrouded 1.0"
          description={articleDescription}
          gameTitle="Enshrouded"
          gameHref="/enshrouded"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <VorgothFinalBossContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
