import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PredatorMissionContent from "@/data/ghost-recon-wildlands/predator-mission.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ghost-recon-wildlands`;
const pageUrl = `${hubUrl}/predator-mission`;

const metadataTitle =
  "Ghost Recon Wildlands Predator Mission Guide";

const metadataDescription =
  "Start The Jungle Moved in Caimanes, finish all 3 investigations, beat Predator, survive the self-destruct, and unlock the Predator Biomask.";

const imageUrls = [
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-predator-the-jungle-moved-caimanes.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-predator-mission-start.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-predator-investigation-skulls.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-predator-reveal.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-predator-rock-cover.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-predator-confirm-death-run.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-predator-biomask-reward.webp`,
];

const toc = [
  {
    id: "start-predator-mission",
    label: "Start The Jungle Moved",
  },
  {
    id: "investigate-three-areas",
    label: "Investigate all 3 areas",
  },
  {
    id: "thermal-vision",
    label: "Do I need Thermal Vision?",
  },
  {
    id: "kill-unknown-thing",
    label: "Kill the unknown thing",
  },
  {
    id: "how-i-fight-predator",
    label: "How I fight Predator",
  },
  {
    id: "predator-death-explosion",
    label: "Predator self-destruct",
  },
  {
    id: "escape-after-kill",
    label: "Escape after the kill",
  },
  {
    id: "predator-biomask",
    label: "Predator Biomask reward",
  },
];

const relatedLinks = [
  {
    href: "/ghost-recon-wildlands",
    label: "Ghost Recon Wildlands Guide Hub",
  },
  {
    href: "/ghost-recon-wildlands/2026-update",
    label: "Ghost Recon Wildlands 2026 Update",
  },
  {
    href: "/ghost-recon-wildlands/last-rites-walkthrough",
    label: "Last Rites Walkthrough",
  },
  {
    href: "/ghost-recon-wildlands/ghost-parameters",
    label: "Ghost Parameters & Settings Guide",
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
    title: "Ghost Recon Wildlands Predator Mission Guide",
    description:
      "Complete The Jungle Moved in Caimanes, investigate all three areas, fight Predator around hard cover, escape the final explosion, and get the Predator Biomask.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-17",
    modifiedTime: "2026-08-17",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ghost Recon Wildlands map showing The Jungle Moved Predator mission in Caimanes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Recon Wildlands Predator Mission Guide",
    description:
      "Find The Jungle Moved, complete the 3 investigations, beat Predator, survive his self-destruct, and unlock the Predator Biomask.",
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
          name: "Ghost Recon Wildlands Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Predator Mission Guide",
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
        "Ghost Recon Wildlands Predator Mission Guide: The Jungle Moved",
      description:
        "A practical walkthrough for The Jungle Moved Predator mission in Ghost Recon Wildlands. It covers where to start the mission in Caimanes, speaking with the girl, completing all three investigation areas, whether Thermal Vision is required, fighting Predator around hard cover, using short damage windows, why mines are unreliable, surviving the Confirm the Predator's Death self-destruct sequence, avoiding the no-checkpoint replay trap, and unlocking the Predator Biomask.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-17",
      dateModified: "2026-08-17",
      articleSection: "Ghost Recon Wildlands Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Tom Clancy's Ghost Recon Wildlands",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "The Jungle Moved",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands Predator mission",
        },
        {
          "@type": "Thing",
          name: "Caimanes",
        },
        {
          "@type": "Thing",
          name: "Predator investigation areas",
        },
        {
          "@type": "Thing",
          name: "Predator boss fight",
        },
        {
          "@type": "Thing",
          name: "Confirm the Predator's death",
        },
        {
          "@type": "Thing",
          name: "Predator self-destruct",
        },
        {
          "@type": "Thing",
          name: "Predator Biomask",
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
          title="How I Beat The Jungle Moved Predator Mission"
          description="I start The Jungle Moved in Caimanes, finish all three investigation areas, fight Predator from hard cover, then run immediately after confirming the kill so the self-destruct does not erase the entire fight."
          gameTitle="Ghost Recon Wildlands"
          gameHref="/ghost-recon-wildlands"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PredatorMissionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}