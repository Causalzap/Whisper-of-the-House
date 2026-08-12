import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownFishBreedingContent from "@/data/doloc-town/fish-breeding.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/doloc-town`;
const pageUrl = `${hubUrl}/fish-breeding`;

const imageUrls = [
  `${siteUrl}/images/doloc-town/doloc-town-fish-breeding-fish-tank-tech.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-fish-breeding-old-fishing-rod.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-fish-breeding-salmon-festival.webp`,
];

export const metadata: Metadata = {
  title: "Doloc Town Fish Breeding: Variants, Roe & Tank Guide",
  description:
    "Breed fish variants in Doloc Town with Fish Tanks, roe, fry, parent ratios, Salmon Fest, Large Fish Tanks and the fastest Abundant Collection route.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Fish Breeding and Variant Guide",
    description:
      "Learn how Fish Tanks, roe, fry and parent ratios work, then breed small-tank and large-tank variants efficiently without wasting rare fish.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Doloc Town Life technology tree showing the Fish Tank unlock",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Fish Breeding and Variant Guide",
    description:
      "Fish Tanks, roe, fry, breeding ratios, Salmon Fest, Large Fish Tanks and a practical Abundant Collection route.",
    images: [imageUrls[0]],
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
          name: "Doloc Town Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fish Breeding",
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
        "Doloc Town Fish Breeding Guide: Fish Tanks, Roe, Parent Ratios, Rare Variants, and Abundant Collection",
      description:
        "A practical Doloc Town fish breeding guide covering the Fish Tank and Fish Incubator, probabilistic breeding, Blackback Sardine, small-tank parent ratios, Salmon Fest, Large Fish Tank recipes, Koi and Shiny Golden Fish chains, Feed Machine, Oxygenation Pump, Ecological Fish Tank, roe troubleshooting, and a fast route to Abundant Collection.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-12",
      dateModified: "2026-08-12",
      about: [
        {
          "@type": "VideoGame",
          name: "Doloc Town",
        },
        {
          "@type": "Thing",
          name: "Doloc Town fish breeding",
        },
        {
          "@type": "Thing",
          name: "Fish Tank",
        },
        {
          "@type": "Thing",
          name: "Fish Roe",
        },
        {
          "@type": "Thing",
          name: "Large Fish Tank",
        },
        {
          "@type": "Thing",
          name: "Abundant Collection",
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

const toc = [
  {
    id: "unlock-fish-tank",
    label: "Unlock Fish Tank and Incubator",
  },
  {
    id: "how-breeding-works",
    label: "How fish breeding works",
  },
  {
    id: "blackback-sardine",
    label: "Blackback Sardine",
  },
  {
    id: "small-tank-variants",
    label: "Small-tank variants",
  },
  {
    id: "which-small-variants-first",
    label: "Which variants to breed first",
  },
  {
    id: "salmon",
    label: "Humpback Salmon and Salmon Fest",
  },
  {
    id: "large-fish-tank",
    label: "Large Fish Tank variants",
  },
  {
    id: "koi-and-shiny-golden-fish",
    label: "Koi and Shiny Golden Fish",
  },
  {
    id: "feed-and-speed",
    label: "Feed and breeding speed",
  },
  {
    id: "ecological-fish-tank",
    label: "Ecological Fish Tank",
  },
  {
    id: "roe-troubleshooting",
    label: "Roe and tank troubleshooting",
  },
  {
    id: "abundant-collection-route",
    label: "Abundant Collection route",
  },
];

const relatedLinks = [
  {
    href: "/doloc-town",
    label: "Doloc Town Guide Hub",
  },
  {
    href: "/doloc-town/achievements",
    label: "Doloc Town Achievements Guide",
  },
  {
    href: "/doloc-town/animals",
    label: "Animals and Livestock Guide",
  },
  {
    href: "/doloc-town/best-crops",
    label: "Best Crops and Profit Calculator",
  },
  {
    href: "/doloc-town/farming-automation",
    label: "Farming Automation Guide",
  },
  {
    href: "/doloc-town/walkthrough",
    label: "Doloc Town Walkthrough",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Doloc Town Fish Breeding and Variant Guide"
          description="I treat every Fish Tank as a breeding recipe: lock in the correct parent ratio, incubate the roe, preserve seasonal parents, clear the six-slot variants first, and only build a Large Fish Tank when the recipe actually needs more space."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownFishBreedingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}