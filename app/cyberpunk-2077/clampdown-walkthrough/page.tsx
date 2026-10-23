
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ClampdownContent from "@/data/cyberpunk-2077/clampdown-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/cyberpunk-2077`;
const pageUrl = `${hubUrl}/clampdown-walkthrough`;

const metadataTitle =
  "Cyberpunk 2077 Clampdown Walkthrough & Choices";

const metadataDescription =
  "Break into Night City Prison, find King's Coronation revolver, disable Reaper chips, decide Block C's fate, and escape after Darius.";

const articleDescription =
  "Complete the Clampdown side job from King's meeting through the Night City Prison infiltration, bathroom equipment pickup, Security Cortex, Reaper Chip decisions, Block C crisis, Darius Bale fight, and morgue escape.";

const imageUrls = [
  `${siteUrl}/images/cyberpunk-2077/clampdown-bathroom-king-package.webp`,
  `${siteUrl}/images/cyberpunk-2077/clampdown-reaper-server.webp`,
  `${siteUrl}/images/cyberpunk-2077/clampdown-block-c-reaper-terminal.webp`,
  `${siteUrl}/images/cyberpunk-2077/clampdown-darius-electric-weakness.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "unlock",
    label: "Unlock Clampdown",
  },
  {
    id: "prison-entry",
    label: "Enter Night City Prison",
  },
  {
    id: "king-gear",
    label: "King's gear & Coronation",
  },
  {
    id: "security-cortex",
    label: "Disable Reaper chips",
  },
  {
    id: "armory",
    label: "Escape through the Armory",
  },
  {
    id: "block-c",
    label: "Block C choice",
  },
  {
    id: "darius",
    label: "Defeat Darius Bale",
  },
  {
    id: "morgue",
    label: "Morgue escape",
  },
  {
    id: "completion",
    label: "Rewards & completion",
  },
];

const relatedLinks = [
  {
    href: "/cyberpunk-2077",
    label: "Cyberpunk 2077 Update 2.5",
  },
  {
    href: "/cyberpunk-2077/welcome-to-paradise-walkthrough",
    label: "Welcome to Paradise Walkthrough",
  },
  {
    href: "/cyberpunk-2077/dual-wield",
    label: "Double Trouble & Dual Wielding",
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
          name: "Cyberpunk 2077",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Clampdown Walkthrough",
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
      url: pageUrl,
      headline:
        "Cyberpunk 2077 Clampdown Walkthrough: Choices and King's Gear",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-23",
      dateModified: "2026-10-23",
      about: [
        {
          "@type": "VideoGame",
          name: "Cyberpunk 2077",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Clampdown side job",
        },
        {
          "@type": "Thing",
          name: "Night City Prison",
        },
        {
          "@type": "Thing",
          name: "King's outfit and Coronation revolver",
        },
        {
          "@type": "Thing",
          name: "Reaper Chip deactivation",
        },
        {
          "@type": "Thing",
          name: "Block C prisoner decision",
        },
        {
          "@type": "Thing",
          name: "Darius Bale boss fight",
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
          title="Cyberpunk 2077 Clampdown Walkthrough: Choices & King's Gear"
          description="Enter Night City Prison, recover King's equipment, disable the Reaper chips, decide what happens in Block C, and escape after the Darius Bale encounter."
          gameTitle="Cyberpunk 2077"
          gameHref="/cyberpunk-2077"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ClampdownContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
