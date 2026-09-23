import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantContent from "@/data/control-resonant/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/control-resonant`;

const metadataTitle =
  "CONTROL Resonant Guide: Walkthrough, Quests, Map & Bosses";

const metadataDescription =
  "Find your next CONTROL Resonant objective with the main walkthrough, quest order, map zones, Jesse Faults, Resonants, bosses, and side stories.";

const articleDescription =
  "Find where to go next in CONTROL Resonant, follow the main story, understand overlapping quests, unlock Jesse's traversal abilities, track Resonants, and navigate Manhattan.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-zone-overview-watchtower.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "where-to-go-next",
    label: "Where to go next",
  },
  {
    id: "early-manhattan",
    label: "Early Manhattan routes",
  },
  {
    id: "evacuation-zone",
    label: "Evacuation Procedures",
  },
  {
    id: "cfd-plan",
    label: "Power Lines & Sinkhole",
  },
  {
    id: "required-resonants",
    label: "Required Resonants",
  },
  {
    id: "west-incursion",
    label: "West Incursion & Shift",
  },
  {
    id: "search-for-jesse",
    label: "Search for Jesse",
  },
  {
    id: "underpass",
    label: "Underpass objectives",
  },
  {
    id: "hedron",
    label: "Hedron progression",
  },
  {
    id: "unknown",
    label: "Unknown",
  },
  {
    id: "park",
    label: "The Park",
  },
  {
    id: "map",
    label: "Map & zones",
  },
  {
    id: "side-stories",
    label: "Side Stories",
  },
  {
    id: "lost-right-now",
    label: "When the route is unclear",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
  },
  {
    href: "/control-resonant/quests",
    label: "Quest List",
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
    href: "/control-resonant/map",
    label: "Map & All Zones",
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
        "CONTROL Resonant Guide: Walkthrough, Quests, Map & Bosses",
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
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant walkthrough",
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant quests",
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant map",
        },
        {
          "@type": "Thing",
          name: "Search for Jesse",
        },
        {
          "@type": "Thing",
          name: "Resonants",
        },
        {
          "@type": "Thing",
          name: "Manhattan",
        },
        {
          "@type": "Thing",
          name: "Central",
        },
        {
          "@type": "Thing",
          name: "West Incursion Zone",
        },
        {
          "@type": "Thing",
          name: "Underpass",
        },
        {
          "@type": "Thing",
          name: "Unknown",
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
          title="CONTROL Resonant Guide: What to Do Next, Quests, Map & Bosses"
          description="Find the right route for your current objective, follow the main story, track Jesse's Faults and Resonants, and navigate Manhattan without wasting time on the wrong mission."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}