import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantQuestsContent from "@/data/control-resonant/quests.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/quests`;

const metadataTitle =
  "CONTROL Resonant Quest List: Main Story & Side Stories";

const metadataDescription =
  "See the CONTROL Resonant quest list, main story order, Jesse Faults, Resonant missions, Side Stories, and what to check when progression stops.";

const articleDescription =
  "Track CONTROL Resonant's main story, Search for Jesse Faults, regional Resonant quests and Side Stories, with the quest order and progression requirements that can hold up the next mission.";

const toc = [
  {
    id: "main-story",
    label: "Main Story Quest Order",
  },
  {
    id: "search-for-jesse",
    label: "Search for Jesse",
  },
  {
    id: "resonant-quests",
    label: "Regional Resonant Quests",
  },
  {
    id: "side-stories",
    label: "Side Stories & Notes",
  },
  {
    id: "best-order",
    label: "Which Quest to Do Next",
  },
  {
    id: "story-stops",
    label: "When Story Progression Stops",
  },
  {
    id: "side-quest-timing",
    label: "Quests to Leave Until Later",
  },
  {
    id: "after-ending",
    label: "After The Beginning",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
  },
  {
    href: "/control-resonant/search-for-jesse",
    label: "Search for Jesse",
  },
  {
    href: "/control-resonant/resonants",
    label: "All Resonants",
  },
  {
    href: "/control-resonant/underpass",
    label: "Underpass Guide",
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
  },
  twitter: {
    card: "summary_large_image",
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
          name: "CONTROL Resonant",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Quest List",
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
        "CONTROL Resonant Quest List: Main Story, Jesse Faults & Side Stories",
      description: articleDescription,
      url: pageUrl,
      inLanguage: "en",
      datePublished: "2026-09-23",
      dateModified: "2026-09-28",
      about: [
        {
          "@type": "VideoGame",
          name: "CONTROL Resonant",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant Quests",
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant Quest List",
        },
        {
          "@type": "Thing",
          name: "Contain the Crisis",
        },
        {
          "@type": "Thing",
          name: "Search for Jesse",
        },
        {
          "@type": "Thing",
          name: "Defeating Resonants",
        },
        {
          "@type": "Thing",
          name: "Jesse Faults",
        },
        {
          "@type": "Thing",
          name: "Resonant Quests",
        },
        {
          "@type": "Thing",
          name: "Side Stories",
        },
        {
          "@type": "Thing",
          name: "Enemy of My Enemy",
        },
        {
          "@type": "Thing",
          name: "The Beginning",
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
          title="CONTROL Resonant Quest List – Main Story, Jesse Faults & Side Stories"
          description="Follow the main story order, Search for Jesse Faults, regional Resonant quests and Side Stories, and check the requirements that can hold up your next mission."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantQuestsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}