import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantResonantsContent from "@/data/control-resonant/resonants.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/resonants`;

const metadataTitle =
  "CONTROL Resonant Resonants Guide: All 6 Bosses & Rewards";

const metadataDescription =
  "Find all six Resonants, see their locations and ability rewards, learn which bosses are required for story progression, and understand Resonant Cycles.";

const articleDescription =
  "Track all six Resonants across Manhattan, see where each regional boss appears, compare their Combat Ability rewards, and check which Resonants are required before the story can progress.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-physicist-defeated.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "all-resonants",
    label: "All 6 Resonants",
  },
  {
    id: "artist",
    label: "Artist",
  },
  {
    id: "deserter",
    label: "Deserter",
  },
  {
    id: "dancer",
    label: "Dancer",
  },
  {
    id: "collective",
    label: "Collective",
  },
  {
    id: "physicist",
    label: "Physicist",
  },
  {
    id: "co-director",
    label: "Co-Director",
  },
  {
    id: "evacuation-zone",
    label: "Evacuation Zone Resonant?",
  },
  {
    id: "which-resonant-first",
    label: "Which Resonant first?",
  },
  {
    id: "resonant-cycle",
    label: "Resonant Cycles",
  },
  {
    id: "ability-choice",
    label: "Resonant ability choices",
  },
  {
    id: "all-six",
    label: "Do you need all 6?",
  },
  {
    id: "resonant-progression-checks",
    label: "Progression & reward checks",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/quests",
    label: "Main Missions & Side Stories",
  },
  {
    href: "/control-resonant/patterned-factory",
    label: "Deserter & Patterned Factory",
  },
  {
    href: "/control-resonant/dancer",
    label: "Dancer Boss Guide",
  },
  {
    href: "/control-resonant/the-park",
    label: "The Park & Collective",
  },
  {
    href: "/control-resonant/physicist",
    label: "Physicist & Astral Keys",
  },
  {
    href: "/control-resonant/co-director",
    label: "Co-Director Boss Guide",
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
          name: "All Resonants",
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
        "CONTROL Resonant Resonants Guide: All 6 Bosses & Rewards",
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
          name: "Resonants",
        },
        {
          "@type": "Thing",
          name: "The Artist",
        },
        {
          "@type": "Thing",
          name: "Deserter",
        },
        {
          "@type": "Thing",
          name: "Dancer",
        },
        {
          "@type": "Thing",
          name: "Collective",
        },
        {
          "@type": "Thing",
          name: "Physicist",
        },
        {
          "@type": "Thing",
          name: "Co-Director",
        },
        {
          "@type": "Thing",
          name: "Resonant Cycle",
        },
        {
          "@type": "Thing",
          name: "Combat Abilities",
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
          title="CONTROL Resonant Resonants Guide: All 6 Locations & Ability Rewards"
          description="Find the Artist, Deserter, Dancer, Collective, Physicist and Co-Director, see what each Resonant rewards, and know which bosses are required for story progression."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantResonantsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}