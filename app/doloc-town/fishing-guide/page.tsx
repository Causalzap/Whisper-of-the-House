import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownFishingGuideContent from "@/data/doloc-town/fishing-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/doloc-town`;
const pageUrl = `${hubUrl}/fishing-guide`;

const imageUrls = [
  `${siteUrl}/images/doloc-town/doloc-town-fish-breeding-old-fishing-rod.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-fishing-controls-cast-and-lift.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-fishing-rod-shop.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-fishing-rng-sardine-kelp.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-fish-breeding-salmon-festival.webp`,
];

export const metadata: Metadata = {
  title: "Doloc Town Fishing Guide: Rods, Controls & Rare Fish",
  description:
    "Catch fish in Doloc Town with the free Old Fishing Rod, meter controls, rod upgrades, weather clues, Salmon Fest, rare fish and troubleshooting.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Fishing Guide",
    description:
      "Learn fishing controls, when to upgrade rods, how weather and water conditions affect targets, and how to troubleshoot difficult or random catches.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1000,
        height: 500,
        alt: "Doloc Town fishing tutorial showing cast distance, lift timing, meter controls, and extra-reward windows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Fishing Guide",
    description:
      "Old Fishing Rod, fishing meter controls, rod upgrades, RNG, weather clues, Salmon Fest, rare fish and catch troubleshooting.",
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
          name: "Doloc Town Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fishing Guide",
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
        "Doloc Town Fishing Guide: Fishing Rods, Meter Controls, Weather Conditions, Salmon Fest, and Rare Fish",
      description:
        "A practical Doloc Town fishing guide covering Light Man's free Old Fishing Rod, cast distance, lift timing, hold-and-release Fishing Meter control, yellow bonus windows, rod upgrade prices, fishing RNG, weather and water-type clues, Salmon Fest, rare fish priorities, keep-or-sell decisions, and catch troubleshooting.",
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
          name: "Doloc Town fishing",
        },
        {
          "@type": "Thing",
          name: "Fishing Rod",
        },
        {
          "@type": "Thing",
          name: "Fishing Meter",
        },
        {
          "@type": "Thing",
          name: "Salmon Fest",
        },
        {
          "@type": "Thing",
          name: "Rare fish",
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
  { id: "get-fishing-rod", label: "Get the Old Fishing Rod" },
  { id: "fishing-controls", label: "Fishing controls" },
  { id: "rod-upgrades", label: "Fishing rod upgrades" },
  { id: "fishing-rng", label: "Fishing RNG" },
  { id: "condition-fish", label: "Weather and water conditions" },
  { id: "salmon-fest", label: "Salmon Fest" },
  { id: "special-fish-priority", label: "Rare fish priority" },
  { id: "keep-or-sell", label: "Keep or sell the catch" },
  { id: "fishing-troubleshooting", label: "Fishing troubleshooting" },
  { id: "when-to-stop", label: "When to stop fishing" },
];

const relatedLinks = [
  { href: "/doloc-town", label: "Doloc Town Guide Hub" },
  { href: "/doloc-town/fish-breeding", label: "Fish Breeding Guide" },
  { href: "/doloc-town/money-guide", label: "Doloc Town Money Guide" },
  { href: "/doloc-town/achievements", label: "Doloc Town Achievements Guide" },
  { href: "/doloc-town/walkthrough", label: "Doloc Town Walkthrough" },
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
          title="Doloc Town Fishing Guide"
          description="I take Light Man's free Old Fishing Rod, learn cast distance and hold-and-release meter control, upgrade only when the target justifies it, and check weather or water conditions before blaming RNG."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownFishingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}