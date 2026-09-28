import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantTheParkContent from "@/data/control-resonant/the-park.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/the-park`;

const metadataTitle =
  "CONTROL Resonant The Park: 4 Mold Locations & Collective";

const metadataDescription =
  "Find all four Mold locations in The Park, open the Mold Gateway, beat the Collective, fix blocked Mold interactions, and choose Spore Burst or Growth.";

const articleDescription =
  "Enter The Park, collect the four required Mold strains from the Gateway, Minimart, Pizzeria and Gym, open the Mold Gateway, defeat the Collective, and choose between Spore Burst and Growth.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-the-park-mold-gateway.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-the-park-entry.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-the-park-final-mold.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-to-enter-the-park",
    label: "How to Reach The Park",
  },
  {
    id: "start-park-resonant",
    label: "Start The Park Resonant",
  },
  {
    id: "mold-locations",
    label: "All 4 Mold Locations",
  },
  {
    id: "open-mold-gateway",
    label: "Open the Mold Gateway",
  },
  {
    id: "collective-boss",
    label: "How to Beat the Collective",
  },
  {
    id: "collective-opening",
    label: "First Tentacles",
  },
  {
    id: "collective-weak-points",
    label: "Collective Weak Points",
  },
  {
    id: "collective-wall-ceiling-phase",
    label: "Wall & Ceiling Phase",
  },
  {
    id: "collective-final-phase",
    label: "Final Phase",
  },
  {
    id: "spore-burst-or-growth",
    label: "Spore Burst or Growth",
  },
  {
    id: "is-park-required",
    label: "Is The Park Required?",
  },
  {
    id: "other-park-objectives",
    label: "Other Park Activities",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/resonants",
    label: "All Resonants",
  },
  {
    href: "/control-resonant/search-for-jesse",
    label: "Search for Jesse",
  },
  {
    href: "/control-resonant/last-taxi",
    label: "The Last Taxi",
  },
  {
    href: "/control-resonant/quests",
    label: "Quest List",
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
          name: "The Park",
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
        "CONTROL Resonant The Park: All 4 Mold Locations & Collective Boss",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
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
          name: "The Park",
        },
        {
          "@type": "Thing",
          name: "The Park Resonant",
        },
        {
          "@type": "Thing",
          name: "The Collective",
        },
        {
          "@type": "Thing",
          name: "Mold Gateway",
        },
        {
          "@type": "Thing",
          name: "Mold Locations",
        },
        {
          "@type": "Thing",
          name: "Minimart Mold",
        },
        {
          "@type": "Thing",
          name: "Pizzeria Mold",
        },
        {
          "@type": "Thing",
          name: "Gym Mold",
        },
        {
          "@type": "Thing",
          name: "Spore Burst",
        },
        {
          "@type": "Thing",
          name: "Growth",
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
          title="CONTROL Resonant The Park – All 4 Mold Locations & Collective Boss"
          description="Find the Gateway, Minimart, Pizzeria and Gym Mold strains, open the sealed route, beat the Collective, and choose Spore Burst or Growth."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantTheParkContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}