
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheLastCaretakerWalkthroughContent from "@/data/the-last-caretaker/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-last-caretaker`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "The Last Caretaker Walkthrough: Exodus & North Bastion";

const metadataDescription =
  "Restore Beacon 49 and Lazarus, retrieve a Human Seed, reach Exodus, then activate Project Crossing's Transfer Gate and survive North Bastion in Update 6.";

const articleDescription =
  "Follow the journey from Beacon 49 through Lazarus, Prometheus, Human growth and Exodus. Then return to Lazarus, activate the Transfer Gate, restore heat at North Bastion and search for the laboratory.";

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-beacon-49-lazarus-objective.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-lazarus-hall-of-humanity-power-restored.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-seed-vault-prometheus-arrival.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-human-seed-upkeep-warning.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-first-human-exodus-objective.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-exodus-rocket-facility.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-project-crossing-continuity-token.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-transfer-gate-north-bastion.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-north-bastion-boiler-heating.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-north-bastion-laboratory-objective.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    type: "article",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Beacon 49 revealing the Lazarus Complex objective in The Last Caretaker.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "starting-dock-beacon-49",
    label: "Starting Dock & Beacon 49",
  },
  {
    id: "lazarus-complex",
    label: "Restore Lazarus",
  },
  {
    id: "seed-vault-prometheus",
    label: "Seed Vault Prometheus",
  },
  {
    id: "human-seed-lazarus",
    label: "Human Seed Upkeep",
  },
  {
    id: "grow-first-human",
    label: "Grow Your First Human",
  },
  {
    id: "exodus",
    label: "Reach Exodus Station",
  },
  {
    id: "later-progression",
    label: "Later Expeditions",
  },
  {
    id: "project-crossing",
    label: "Start Project Crossing",
  },
  {
    id: "transfer-gate-power",
    label: "Activate the Transfer Gate",
  },
  {
    id: "north-bastion-arrival",
    label: "North Bastion: Restore Heat",
  },
  {
    id: "north-bastion-laboratory",
    label: "Find the Laboratory",
  },
  {
    id: "progression-rule",
    label: "Where to Go Next",
  },
];

const relatedLinks = [
  {
    href: "/the-last-caretaker/",
    label: "The Last Caretaker Guides",
  },
  {
    href: "/the-last-caretaker/power-fuel-wall-outlets/",
    label: "Power, Fuel & Wall Outlets",
  },
  {
    href: "/the-last-caretaker/exodus-launch-guide/",
    label: "Exodus Launch Guide",
  },
  {
    href: "/the-last-caretaker/human-growth-professions-guide/",
    label: "Human Growth & Professions",
  },
  {
    href: "/the-last-caretaker/project-eden-guide/",
    label: "Project Eden",
  },
  {
    href: "/the-last-caretaker/new-horizons-guide/",
    label: "New Horizons",
  },
  {
    href: "/the-last-caretaker/oil-whale-guide/",
    label: "Oil Whale",
  },
  {
    href: "/the-last-caretaker/research-outpost-theta-9-guide/",
    label: "Research Outpost Theta 9",
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
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "The Last Caretaker Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Walkthrough",
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
      headline: metadataTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-07",
      dateModified: "2026-10-11",
      about: [
        {
          "@type": "VideoGame",
          name: "The Last Caretaker",
        },
        {
          "@type": "Thing",
          name: "The Last Caretaker Walkthrough",
        },
        {
          "@type": "Thing",
          name: "The Last Caretaker Progression",
        },
        {
          "@type": "Thing",
          name: "Beacon 49",
        },
        {
          "@type": "Thing",
          name: "Lazarus Complex",
        },
        {
          "@type": "Thing",
          name: "Hall of Humanity",
        },
        {
          "@type": "Thing",
          name: "Seed Vault Prometheus",
        },
        {
          "@type": "Thing",
          name: "Human Seed",
        },
        {
          "@type": "Thing",
          name: "Human Growth",
        },
        {
          "@type": "Thing",
          name: "Exodus Station",
        },
        {
          "@type": "Thing",
          name: "Project Crossing",
        },
        {
          "@type": "Thing",
          name: "Continuity Token",
        },
        {
          "@type": "Thing",
          name: "Transfer Gate",
        },
        {
          "@type": "Thing",
          name: "North Bastion",
        },
        {
          "@type": "Thing",
          name: "Bring Back the Heat",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: `${siteUrl}/`,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: `${siteUrl}/`,
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
          title={metadataTitle}
          description={articleDescription}
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheLastCaretakerWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
