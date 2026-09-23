import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantQuestsContent from "@/data/control-resonant/quests.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/quests`;

const metadataTitle =
  "CONTROL Resonant Quest List: Main Missions & Side Stories";

const metadataDescription =
  "Track CONTROL Resonant main quests, Jesse Faults, Resonant missions and Side Stories, with progression gates and the best order when several quests are active.";

const articleDescription =
  "Follow the three overlapping quest chains in CONTROL Resonant, check the main-story order, track Jesse Faults and Resonants, and see when to complete or postpone Side Stories.";

const toc = [
  {
    id: "main-story",
    label: "Main story quests",
  },
  {
    id: "search-for-jesse",
    label: "Search for Jesse quests",
  },
  {
    id: "resonant-quests",
    label: "Regional Resonant quests",
  },
  {
    id: "side-stories",
    label: "Side Stories & Notes",
  },
  {
    id: "best-order",
    label: "Best quest order",
  },
  {
    id: "enemy-of-my-enemy",
    label: "Enemy of My Enemy",
  },
  {
    id: "underpass-block",
    label: "Underpass progression gate",
  },
  {
    id: "unknown",
    label: "Unknown & Pope's Research",
  },
  {
    id: "side-quest-timing",
    label: "Side Stories to leave for later",
  },
  {
    id: "last-taxi",
    label: "The Last Taxi",
  },
  {
    id: "party-wont-stop",
    label: "The Party Won't Stop",
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
    href: "/control-resonant/last-taxi",
    label: "The Last Taxi",
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
        "CONTROL Resonant Quest List: Main Missions & Side Stories",
      description: articleDescription,
      url: pageUrl,
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
          name: "CONTROL Resonant quests",
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
          name: "Side Stories",
        },
        {
          "@type": "Thing",
          name: "Enemy of My Enemy",
        },
        {
          "@type": "Thing",
          name: "The Last Taxi",
        },
        {
          "@type": "Thing",
          name: "The Party Won't Stop",
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
          title="CONTROL Resonant Quest List: Main Missions, Jesse Faults & Side Stories"
          description="Track the main story, Search for Jesse, regional Resonants and Side Stories, and see which unfinished quest can block the next stage of progression."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
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