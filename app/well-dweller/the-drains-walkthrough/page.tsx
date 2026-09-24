import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheDrainsWalkthroughContent from "@/data/well-dweller/the-drains-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/well-dweller`;
const pageUrl = `${hubUrl}/the-drains-walkthrough`;

const metadataTitle =
  "Well Dweller The Drains Walkthrough: Wind Ride & Lady";

const metadataDescription =
  "Get Wind Ride, repair the elevator with 3 parts, beat Lady of the Drains, and collect the Golden Feather in Well Dweller.";

const imageUrls = [
  `${siteUrl}/images/well-dweller/well-dweller-drains-broken-elevator.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-lady-of-the-drains-lightning.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-lady-of-the-drains-defeated.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-golden-feather-lady-of-the-drains.webp`,
];

const toc = [
  {
    id: "enter-the-drains",
    label: "Enter The Drains",
  },
  {
    id: "wind-ride",
    label: "Unlock Wind Ride",
  },
  {
    id: "willow",
    label: "Follow Willow",
  },
  {
    id: "elevator-part-1",
    label: "Elevator Part 1",
  },
  {
    id: "broken-elevator",
    label: "Find the Broken Elevator",
  },
  {
    id: "elevator-parts",
    label: "Elevator Parts 2 and 3",
  },
  {
    id: "return-to-elevator",
    label: "Repair the Elevator",
  },
  {
    id: "lady-of-the-drains",
    label: "Beat Lady of the Drains",
  },
  {
    id: "lady-of-the-drains-failures",
    label: "Common Boss Mistakes",
  },
  {
    id: "golden-feather",
    label: "Collect the Golden Feather",
  },
  {
    id: "after-the-boss",
    label: "What to Do Next",
  },
];

const relatedLinks = [
  {
    href: "/well-dweller",
    label: "Well Dweller Guide",
  },
  {
    href: "/well-dweller/elevator-parts-locations",
    label: "All 3 Elevator Part Locations",
  },
  {
    href: "/well-dweller/golden-feathers-locations",
    label: "All 7 Golden Feather Locations",
  },
  {
    href: "/well-dweller/walkthrough",
    label: "Well Dweller Walkthrough",
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
    title: "Well Dweller The Drains Walkthrough",
    description:
      "Unlock Wind Ride, collect the three Elevator Parts, repair the lift, defeat Lady of the Drains, and take the Golden Feather.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Lady of the Drains opening her face before the lightning attack in Well Dweller",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Dweller The Drains Walkthrough",
    description:
      "Get Wind Ride, repair the elevator, defeat Lady of the Drains, and collect the Golden Feather.",
    images: [imageUrls[1]],
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
          name: "Well Dweller Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "The Drains Walkthrough",
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
        "Well Dweller The Drains Walkthrough: Wind Ride, Elevator Parts, Lady of the Drains, and Golden Feather",
      description:
        "A Well Dweller walkthrough for The Drains covering Wind Ride, Willow and the frog memorials, the three Elevator Parts, the repaired elevator, Lady of the Drains, the Golden Feather reward, and what to do after the boss.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-24",
      dateModified: "2026-09-24",
      articleSection: "Well Dweller Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Well Dweller",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "The Drains",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Wind Ride",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Elevator Parts",
        },
        {
          "@type": "Thing",
          name: "Lady of the Drains",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Golden Feather",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Well Dweller The Drains Walkthrough"
          description="Unlock Wind Ride, repair the elevator with all three parts, beat Lady of the Drains, and collect the Golden Feather."
          gameTitle="Well Dweller"
          gameHref="/well-dweller"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheDrainsWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}