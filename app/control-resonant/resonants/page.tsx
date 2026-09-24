import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantResonantsContent from "@/data/control-resonant/resonants.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/resonants`;

const metadataTitle =
  "CONTROL Resonant Bosses: All 6 Resonants, Locations & Rewards";

const metadataDescription =
  "Find all 6 Resonant bosses, their locations, access requirements, ability rewards, progression order, and when each boss is worth fighting.";

const articleDescription =
  "Track all six Resonant bosses across Manhattan, see where each one appears, what unlocks its route, which Combat Ability it rewards, and which Resonants matter for story progression.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-dancer-theater-stage.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-physicist-defeated.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-co-director-defeated.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-co-director-unknown-resonant-completed.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "all-resonants",
    label: "All 6 Resonant bosses",
  },
  {
    id: "how-many-bosses",
    label: "How many Resonants?",
  },
  {
    id: "which-resonant-first",
    label: "Which Resonant first?",
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
    id: "resonant-cycle",
    label: "When to wait",
  },
  {
    id: "evacuation-zone",
    label: "Evacuation Zone Resonant?",
  },
  {
    id: "resonant-progression",
    label: "Progression checks",
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
          name: "Bosses & Resonants",
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
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-23",
      dateModified: "2026-09-24",
      about: [
        {
          "@type": "VideoGame",
          name: "CONTROL Resonant",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Resonant Bosses",
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
          name: "Hedron",
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
          title="CONTROL Resonant Bosses: All 6 Resonants, Locations & Rewards"
          description="Find all six Resonant bosses, see where each one appears, what unlocks its route, which Combat Ability it rewards, and which bosses matter for story progression."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 24, 2026"
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