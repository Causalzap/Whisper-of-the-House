import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantPartyWontStopContent from "@/data/control-resonant/party-wont-stop.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/party-wont-stop`;

const metadataTitle =
  "CONTROL Resonant Party Won't Stop: Karaoke Answers";

const metadataDescription =
  "Enter the West Incursion party apartment, use all nine karaoke answers in order, save every partygoer, and unlock Be What You Want to Be.";

const articleDescription =
  "Reach the rooftop party apartment in West Incursion, complete all nine timed karaoke choices, keep every partygoer alive, and collect the Side Story rewards.";

const toc = [
  {
    id: "where-to-start",
    label: "Where to start",
  },
  {
    id: "how-to-enter",
    label: "How to enter the apartment",
  },
  {
    id: "karaoke-solution",
    label: "Karaoke answers",
  },
  {
    id: "wrong-answer",
    label: "What a wrong answer does",
  },
  {
    id: "save-everyone",
    label: "How to save everyone",
  },
  {
    id: "rewards",
    label: "Rewards",
  },
  {
    id: "party-failures",
    label: "Doors, missed answers & trophy failures",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/west-incursion-zone",
    label: "West Incursion Zone",
  },
  {
    href: "/control-resonant/search-for-jesse",
    label: "Search for Jesse",
  },
  {
    href: "/control-resonant/quests",
    label: "Main Missions & Side Stories",
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
          name: "The Party Won't Stop",
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
        "CONTROL Resonant Party Won't Stop: Karaoke Answers",
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
          name: "The Party Won't Stop",
        },
        {
          "@type": "Thing",
          name: "Singing Reported?",
        },
        {
          "@type": "Thing",
          name: "Altered karaoke machine",
        },
        {
          "@type": "Thing",
          name: "Be What You Want to Be",
        },
        {
          "@type": "Thing",
          name: "Varsity Jacket",
        },
        {
          "@type": "Thing",
          name: "Untapped Bar Blade",
        },
        {
          "@type": "Thing",
          name: "West Incursion Zone",
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
          title="CONTROL Resonant Party Won't Stop: All Karaoke Answers"
          description="Reach the rooftop party apartment, enter all nine karaoke answers correctly, save every partygoer, and unlock Be What You Want to Be."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantPartyWontStopContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}