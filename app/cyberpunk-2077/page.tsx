
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Cyberpunk2077Content from "@/data/cyberpunk-2077/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/cyberpunk-2077`;

const metadataTitle =
  "Cyberpunk 2077 Update 2.5 Guide: Quests, Mods & Tarot";

const metadataDescription =
  "Start Clampdown and Welcome to Paradise, unlock Double Trouble, collect new Minor Arcana, find Glamdocs, and use mods safely in Update 2.5.";

const articleDescription =
  "Explore Cyberpunk 2077 Update 2.5 with the unlock requirements for two new side jobs, dual-wielding access, Minor Arcana progression, Glamdoc customization, and cross-platform mod precautions.";

const toc = [
  {
    id: "starting",
    label: "Where to start",
  },
  {
    id: "clampdown",
    label: "Clampdown unlock",
  },
  {
    id: "paradise",
    label: "Welcome to Paradise",
  },
  {
    id: "dual-wield",
    label: "Double Trouble",
  },
  {
    id: "minor-arcana",
    label: "12 Minor Arcana",
  },
  {
    id: "glamdocs",
    label: "Glamdocs",
  },
  {
    id: "clothing",
    label: "New clothing",
  },
  {
    id: "mods",
    label: "Cross-platform mods",
  },
  {
    id: "other-changes",
    label: "Other changes",
  },
  {
    id: "availability",
    label: "Platforms & saves",
  },
];

const relatedLinks = [
    {
      href: "/cyberpunk-2077/clampdown-walkthrough",
      label: "Clampdown Walkthrough",
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
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
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
        "Cyberpunk 2077 Update 2.5: New Quests, Dual Wielding, Tarot and Mods",
      description: articleDescription,
      inLanguage: "en",
      datePublished: "2026-10-23",
      dateModified: "2026-10-23",
      about: [
        {
          "@type": "VideoGame",
          name: "Cyberpunk 2077",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Cyberpunk 2077 Update 2.5",
        },
        {
          "@type": "Thing",
          name: "Clampdown and Welcome to Paradise",
        },
        {
          "@type": "Thing",
          name: "Double Trouble dual wielding",
        },
        {
          "@type": "Thing",
          name: "Minor Arcana Tarot Cards",
        },
        {
          "@type": "Thing",
          name: "Glamdocs and cyberware appearance",
        },
        {
          "@type": "Thing",
          name: "Cross-platform mod support",
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
          title="Cyberpunk 2077 Update 2.5 Guide: New Quests & Features"
          description="Check which new jobs and features your current V can access, from King's prison rescue and Night Corp's investigation to dual wielding, Tarot Cards, Glamdocs, and mods."
          gameTitle="Cyberpunk 2077"
          gameHref="/cyberpunk-2077"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Cyberpunk2077Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
