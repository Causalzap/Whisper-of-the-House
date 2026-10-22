
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WeWereHereTomorrowContent from "@/data/we-were-here-tomorrow/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/we-were-here-tomorrow`;

const metadataTitle =
  "We Were Here Tomorrow Guide: Progression & Co-op Tips";


const metadataDescription =
  "Follow We Were Here Tomorrow from Wellness Check to Rift Zero, including R&D, Xenobotany, time loops, co-op tips, and optional achievements.";

const articleDescription =
  "Find your next objective in We Were Here Tomorrow, from Norček's opening laboratories and Gravitonics to R&D Headquarters, Temporal Research Centre, Xenobotany, time rewind, and Rift Zero. Includes co-op setup, prototype tools, and optional achievement conditions.";

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
      "Navigate We Were Here Tomorrow's co-op progression, identify your next laboratory objective, understand the prototype tools, and prepare for later research areas.",
    siteName: "Whisper of the House",
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description:
      "Find your next objective, solve co-op communication problems, understand the Hook Gun and Goop Gun, and track optional achievements.",
  },
};

const toc = [
  {
    id: "where-to-go-next",
    label: "Where to Go Next",
  },
  {
    id: "coop-setup",
    label: "Two-Player Co-op Setup",
  },
  {
    id: "walkie-talkie",
    label: "Walkie-Talkie Problems",
  },
  {
    id: "prototype-tools",
    label: "Hook Gun vs. Goop Gun",
  },
  {
    id: "achievements",
    label: "Achievements to Watch For",
  },
  {
    id: "after-gravity",
    label: "What Comes After Gravitonics?",
  },
];

const relatedLinks = [
  {
    href: "/we-were-here-tomorrow/walkthrough",
    label: "We Were Here Tomorrow Walkthrough & Puzzle Solutions",
  },
  {
    href: "/we-were-here-tomorrow/achievements",
    label: "We Were Here Tomorrow: All 37 Achievements & Checklist",
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
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "We Were Here Tomorrow Guide",
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
        "We Were Here Tomorrow Guide: Progression, Co-op Communication, Prototype Tools, Achievements, and Rift Zero",
      description: articleDescription,
      inLanguage: "en",
      datePublished: "2026-10-21",
      dateModified: "2026-10-21",
      about: [
        {
          "@type": "VideoGame",
          name: "We Were Here Tomorrow",
        },
        {
          "@type": "Thing",
          name: "We Were Here Tomorrow progression",
        },
        {
          "@type": "Thing",
          name: "Norček Industries",
        },
        {
          "@type": "Thing",
          name: "Two-player cooperative puzzles",
        },
        {
          "@type": "Thing",
          name: "Walkie-talkie communication",
        },
        {
          "@type": "Thing",
          name: "Hook Gun and Goop Gun",
        },
        {
          "@type": "Thing",
          name: "We Were Here Tomorrow achievements",
        },
        {
          "@type": "Thing",
          name: "Gravitonics",
        },
        {
          "@type": "Thing",
          name: "Temporal Research Centre",
        },
        {
          "@type": "Thing",
          name: "Rift Zero",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="We Were Here Tomorrow Guide: Where to Go Next"
          description="Identify your current research area, find the next objective, coordinate both Explorers, and understand which optional challenges matter."
          gameTitle="We Were Here Tomorrow"
          gameHref="/we-were-here-tomorrow"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WeWereHereTomorrowContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
