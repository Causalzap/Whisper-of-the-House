import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GenessaContent from "@/data/mortal-shell-2/how-to-unlock-genessa.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/how-to-unlock-genessa`;

const metadataTitle =
  "Mortal Shell 2 Genessa Guide: How to Unlock Her";

const metadataDescription =
  "Follow the Genessa unlock route through Outskirts of Mammon and Revenant Graves, get Sester's Censer, beat the encounter, and return to Marrow Keep.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-outskirts-of-mammon-teleporter.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-bridge-gap.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-lower-teleport-gate.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-revenant-graves-wall.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-revenant-graves-sensor.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-sensor-boss.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-sensor-dialogue.webp`,
];

const toc = [
  {
    id: "why-genessa-doesnt-unlock",
    label: "Why Genessa does not unlock",
  },
  {
    id: "open-outskirts-of-mammon",
    label: "Open Outskirts of Mammon",
  },
  {
    id: "cross-battlefield",
    label: "Cross the battlefield",
  },
  {
    id: "bridge-gap",
    label: "Drop beside the bridge",
  },
  {
    id: "lower-teleport",
    label: "Take the lower teleport",
  },
  {
    id: "revenant-graves",
    label: "Reach Revenant Graves",
  },
  {
    id: "sesters-censer",
    label: "Find Sester's Censer",
  },
  {
    id: "censer-encounter",
    label: "Beat the Censer encounter",
  },
  {
    id: "return-to-marrow-keep",
    label: "Return to Genessa",
  },
  {
    id: "where-to-upgrade-genessa",
    label: "Where to upgrade Genessa",
  },
  {
    id: "genessa-current-build-warning",
    label: "Current build warning",
  },
  {
    id: "worth-unlocking-early",
    label: "Is Genessa worth rushing?",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/ova-gloom-siphon",
    label: "Ova & Gloom Siphon Guide",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations",
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
    title: "Mortal Shell 2 Genessa: Sester's Censer Unlock Route",
    description:
      "Take the bridge drop from Outskirts of Mammon, reach Revenant Graves, recover Sester's Censer, and bring it back to Genessa at Marrow Keep.",
    siteName: "Whisper of the House",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[0],
        alt: "Outskirts of Mammon teleporter on the route to unlock Genessa in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Genessa: How to Unlock Her",
    description:
      "The full route to Sester's Censer through Outskirts of Mammon and Revenant Graves, plus the final return to Genessa at Marrow Keep.",
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Unlock Genessa",
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
        "Mortal Shell 2 Genessa Guide: How to Unlock Genessa with Sester's Censer",
      description:
        "A practical Mortal Shell 2 Genessa unlock guide covering the route from Marrow Keep through the Outskirts of Mammon, the hidden bridge drop and lower teleport, Revenant Graves, Sester's Censer and its encounter, the return to Genessa, where to upgrade her afterward, and the current-build Bond progression precaution.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-08-18",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Genessa",
        },
        {
          "@type": "Thing",
          name: "Sester's Censer",
        },
        {
          "@type": "Thing",
          name: "Revenant Graves",
        },
        {
          "@type": "Thing",
          name: "Outskirts of Mammon",
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
          title="How I Unlock Genessa in Mortal Shell 2"
          description="I open the Outskirts of Mammon route, take the easy-to-miss bridge drop to Revenant Graves, recover Sester's Censer, and bring it back to Genessa."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GenessaContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}