import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GenessaContent from "@/data/mortal-shell-2/how-to-unlock-genessa.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/how-to-unlock-genessa`;

const metadataTitle =
  "Mortal Shell 2 Genessa Unlock Guide: Sester's Censer Route";

const metadataDescription =
  "Unlock Genessa in Mortal Shell 2 by reaching Revenant Graves, getting Sester's Censer, beating its encounter, and returning to Marrow Keep.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-revenant-graves-sensor.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-outskirts-of-mammon-teleporter.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-bridge-gap.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-lower-teleport-gate.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-revenant-graves-wall.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-sensor-boss.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-genessa-sensor-dialogue.webp`,
];

const toc = [
  {
    id: "where-is-genessa",
    label: "Where is Genessa?",
  },
  {
    id: "how-to-unlock-genessa",
    label: "How to unlock Genessa",
  },
  {
    id: "why-genessa-doesnt-unlock",
    label: "Why Genessa does not unlock",
  },
  {
    id: "open-outskirts-of-mammon",
    label: "Open Outskirts of Mammon",
  },
  {
    id: "outskirts-of-mammon-route",
    label: "Cross the Outskirts",
  },
  {
    id: "genessa-bridge-gap",
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
    id: "sesters-censer-location",
    label: "Sester's Censer location",
  },
  {
    id: "sesters-censer-encounter",
    label: "Beat the Censer encounter",
  },
  {
    id: "return-to-genessa",
    label: "Return to Genessa",
  },
  {
    id: "genessa-not-unlocking",
    label: "Genessa still not unlocking?",
  },
  {
    id: "where-to-upgrade-genessa",
    label: "Where to upgrade Genessa",
  },
  {
    id: "worth-unlocking-genessa-early",
    label: "Worth unlocking early?",
  },
  {
    id: "genessa-bond",
    label: "Genessa Bond progression",
  },
  {
    id: "genessa-route",
    label: "Genessa route recap",
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
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Best Weapons & Tier List",
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
      "Take the hidden bridge drop from the Outskirts of Mammon, reach Revenant Graves, recover Sester's Censer, and return to Genessa at Marrow Keep.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-22",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Sester's Censer at Revenant Graves on the Genessa unlock route in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Find Genessa, reach Revenant Graves, get Sester's Censer, beat its encounter, and return to Marrow Keep to unlock her.",
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
          name: "Genessa Unlock Guide",
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
        "Mortal Shell 2 Genessa Unlock Guide: Sester's Censer Route",
      description:
        "A complete Mortal Shell 2 Genessa unlock guide covering her location at Marrow Keep, the Outskirts of Mammon bridge drop, lower teleport, Revenant Graves, Sester's Censer location and encounter, the return to Genessa, and her post-unlock progression.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-22",
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
          name: "How to unlock Genessa",
        },
        {
          "@type": "Thing",
          name: "Genessa location",
        },
        {
          "@type": "Thing",
          name: "Sester's Censer",
        },
        {
          "@type": "Thing",
          name: "Sester's Censer location",
        },
        {
          "@type": "Thing",
          name: "Revenant Graves",
        },
        {
          "@type": "Thing",
          name: "Outskirts of Mammon",
        },
        {
          "@type": "Thing",
          name: "Marrow Keep",
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
          title="Mortal Shell 2 Genessa Unlock Guide: Sester's Censer Route"
          description="I start from Marrow Keep, take the easy-to-miss bridge drop in the Outskirts of Mammon, reach Revenant Graves, beat the Sester's Censer encounter, and bring it back to unlock Genessa."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 22, 2026"
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