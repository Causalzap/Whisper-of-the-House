import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantCoDirectorContent from "@/data/control-resonant/co-director.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/co-director`;

const metadataTitle =
  "CONTROL Resonant Co-Director Guide: Command & Boss Fight";

const metadataDescription =
  "Reach the Co-Director in Unknown, survive the rising Command meter, handle its beam, spinning ring and controlled Rangers, and unlock Command.";

const articleDescription =
  "Reach The Unknown Resonant, prepare for the Co-Director's rising Command meter, survive its beam, spinning ring, bombs, controlled Rangers and rocket bursts, then unlock Command.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-co-director-defeated.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-to-start",
    label: "How to reach The Unknown Resonant",
  },
  {
    id: "field-office-route",
    label: "Patterned Field Office route",
  },
  {
    id: "before-fight",
    label: "Before the Co-Director fight",
  },
  {
    id: "command-meter",
    label: "Command meter",
  },
  {
    id: "beam",
    label: "Beam attack",
  },
  {
    id: "spinning-ring",
    label: "Spinning ring",
  },
  {
    id: "bombs",
    label: "Bomb attacks",
  },
  {
    id: "ground-slam",
    label: "Ground slam",
  },
  {
    id: "controlled-rangers",
    label: "Controlled Rangers",
  },
  {
    id: "rocket-bursts",
    label: "Three-rocket bursts",
  },
  {
    id: "damage-check",
    label: "When Command reaches 80–100%",
  },
  {
    id: "reward",
    label: "Command & other rewards",
  },
  {
    id: "honorable-discharge",
    label: "Honorable Discharge",
  },
  {
    id: "stuck",
    label: "Co-Director stuck fixes",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/hedron-link",
    label: "Hedron Link",
  },
  {
    href: "/control-resonant/resonants",
    label: "All Resonants",
  },
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: imageUrls,
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
          name: "CONTROL Resonant",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Co-Director",
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
        "CONTROL Resonant Co-Director Guide: Command & Boss Fight",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-23",
      dateModified: "2026-09-23",
      about: [
        {
          "@type": "VideoGame",
          name: "CONTROL Resonant",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "The Co-Director",
        },
        {
          "@type": "Thing",
          name: "The Unknown Resonant",
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant Unknown",
        },
        {
          "@type": "Thing",
          name: "Pope's Research",
        },
        {
          "@type": "Thing",
          name: "Command meter",
        },
        {
          "@type": "Thing",
          name: "Command Combat Ability",
        },
        {
          "@type": "Thing",
          name: "Co-Director spinning ring",
        },
        {
          "@type": "Thing",
          name: "Controlled Rangers",
        },
        {
          "@type": "Thing",
          name: "Untapped 1996 Commemorative Coin",
        },
        {
          "@type": "Thing",
          name: "Honorable Discharge",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
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
          title="CONTROL Resonant Co-Director Guide: Command & Boss Fight"
          description="Reach the Co-Director in Unknown, beat the rising Command timer, survive its beam, spinning ring, bombs and controlled Rangers, then unlock Command."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantCoDirectorContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}