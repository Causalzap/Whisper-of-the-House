import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DuskmoorAnomalyCommissionsContent from "@/data/neverness-to-everness/duskmoor-anomaly-commissions.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl =
  `${siteUrl}/neverness-to-everness/duskmoor-anomaly-commissions`;

const imageUrls = [
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-fawn-alone-night-route.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-fawn-alone-vehicle-finish.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-lantern-parade-pole.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-twin-blooms-giant-flower.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-sunken-door-boat.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-sunken-door-mirror-wraith.webp`,
];

const toc = [
  {
    id: "fawn-alone",
    label: "Fawn Alone",
  },
  {
    id: "lantern-parade",
    label: "Lantern Parade",
  },
  {
    id: "twin-blooms",
    label: "Twin Blooms",
  },
  {
    id: "finale-da-capo",
    label: "Finale: Da Capo",
  },
  {
    id: "sunken-door",
    label: "Sunken Door",
  },
  {
    id: "storybook-skirmish",
    label: "Storybook Skirmish",
  },
  {
    id: "all-six-rewards",
    label: "Commission rewards",
  },
  {
    id: "after-all-six",
    label: "After all six",
  },
];

const relatedLinks: {
  href: string;
  label: string;
}[] = [
  {
    href: "/neverness-to-everness/duskmoor-100-percent-guide",
    label: "Duskmoor 100% Exploration Guide",
  },
];

export const metadata: Metadata = {
  title: "NTE Duskmoor Anomaly Commissions Guide: All 6 & Rewards",
  description:
    "Clear all 6 Duskmoor Anomaly Commissions in NTE 1.3 with trigger fixes, Twin Blooms resets, Mirror Wraith tips, rewards, and Annulith totals.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "NTE Duskmoor Anomaly Commissions Guide: All 6 & Rewards",
    description:
      "Solve Fawn Alone, Lantern Parade, Twin Blooms, Finale: Da Capo, Sunken Door, and Storybook Skirmish with rewards and stuck fixes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Night route used to start the Fawn Alone Anomaly Commission in Duskmoor.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NTE Duskmoor Anomaly Commissions Guide: All 6 & Rewards",
    description:
      "Complete all six Duskmoor commissions with trigger fixes, spawn resets, Mirror Wraith strategy, and Annulith rewards.",
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
          name: "Neverness to Everness",
          item: `${siteUrl}/neverness-to-everness`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Duskmoor Anomaly Commissions",
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
        "NTE Duskmoor Anomaly Commissions Guide: All 6 & Rewards",
      description:
        "A complete Neverness to Everness Duskmoor Anomaly Commission guide covering Fawn Alone, Lantern Parade, Twin Blooms, Finale: Da Capo, Sunken Door, and Storybook Skirmish, including the 8 PM vehicle trigger, Divergent Flower reset, Scarlet Phantom containment, Mirror Wraith fight, commission rewards, and total Annulith available from the set.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-02",
      dateModified: "2026-09-02",
      articleSection: "Neverness to Everness Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Neverness to Everness",
        },
        {
          "@type": "Thing",
          name: "Duskmoor Anomaly Commissions",
        },
        {
          "@type": "Thing",
          name: "Fawn Alone",
        },
        {
          "@type": "Thing",
          name: "Lantern Parade",
        },
        {
          "@type": "Thing",
          name: "Twin Blooms",
        },
        {
          "@type": "Thing",
          name: "Divergent Flower",
        },
        {
          "@type": "Thing",
          name: "Finale: Da Capo",
        },
        {
          "@type": "Thing",
          name: "Scarlet Phantom",
        },
        {
          "@type": "Thing",
          name: "Sunken Door",
        },
        {
          "@type": "Thing",
          name: "Mirror Wraith",
        },
        {
          "@type": "Thing",
          name: "Storybook Skirmish",
        },
        {
          "@type": "Thing",
          name: "Saddy Teddy",
        },
        {
          "@type": "Thing",
          name: "Tin Soldiers",
        },
        {
          "@type": "Thing",
          name: "Annulith",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="All 6 Duskmoor Anomaly Commissions and Their Rewards"
          description="Fix the triggers and fights that stop Duskmoor commissions from clearing, from Fawn Alone and Twin Blooms to Sunken Door and the Mirror Wraith."
          gameTitle="Neverness to Everness"
          gameHref="/neverness-to-everness"
          updatedAt="September 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DuskmoorAnomalyCommissionsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}