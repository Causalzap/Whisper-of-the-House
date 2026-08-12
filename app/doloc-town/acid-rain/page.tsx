import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownAcidRainContent from "@/data/doloc-town/acid-rain.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/doloc-town`;
const pageUrl = `${hubUrl}/acid-rain`;

const imageUrls = [
  `${siteUrl}/images/doloc-town/doloc-town-acid-rain-warning.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-end-crops-acid-rain-resistant.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-plastic-mulch-acid-rain-protection.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-weather-station-forecast.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-indoor-crop-protection.webp`,
];

export const metadata: Metadata = {
  title: "Doloc Town Acid Rain: Crop Protection & Weather Guide",
  description:
    "Protect crops from acid rain in Doloc Town with End Crops, Plastic Mulch, Weather Station forecasts, indoor growing, and extreme-weather decisions.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Acid Rain and Crop Protection Guide",
    description:
      "Learn which crops survive acid rain, when to use Plastic Mulch, when to build the Weather Station, and when valuable crops should move indoors.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Kasia warning the player about acid rain threatening crops in Doloc Town",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Acid Rain and Crop Protection Guide",
    description:
      "End Crops, Plastic Mulch, Weather Station forecasts, indoor growing, and practical bad-weather decisions for Doloc Town farms.",
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
          name: "Acid Rain",
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
        "Doloc Town Acid Rain Guide: End Crops, Plastic Mulch, Weather Station, and Indoor Crop Protection",
      description:
        "A practical Doloc Town acid rain and crop-protection guide covering End Crops, two-day Plastic Mulch protection, Weather Station planning, Light Rain and Heavy Rain risk, Early Dry and Harsh Dry periods, indoor growing decisions, exposed electrical equipment, building damage, and when to delay planting valuable vulnerable crops.",
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
          name: "Doloc Town acid rain",
        },
        {
          "@type": "Thing",
          name: "End Crops",
        },
        {
          "@type": "Thing",
          name: "Plastic Mulch",
        },
        {
          "@type": "Thing",
          name: "Weather Station",
        },
        {
          "@type": "Thing",
          name: "Crop protection",
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
    id: "acid-rain-starts",
    label: "When acid rain starts",
  },
  {
    id: "end-crops",
    label: "Acid-rain-resistant End Crops",
  },
  {
    id: "plastic-mulch",
    label: "Plastic Mulch protection",
  },
  {
    id: "weather-station",
    label: "Weather Station and forecast",
  },
  {
    id: "move-indoors",
    label: "When to move crops indoors",
  },
  {
    id: "electric-equipment",
    label: "Electrical equipment in bad weather",
  },
  {
    id: "building-damage",
    label: "Building damage",
  },
  {
    id: "decision-rules",
    label: "Planting decision rules",
  },
  {
    id: "next",
    label: "What to do next",
  },
];

const relatedLinks = [
  {
    href: "/doloc-town",
    label: "Doloc Town Guide Hub",
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
  {
    href: "/doloc-town/crop-genetics",
    label: "Crop Genetics Guide",
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
          title="Doloc Town Acid Rain and Crop Protection Guide"
          description="I separate weather-resistant End Crops from vulnerable crops, use Plastic Mulch only as a two-day buffer, check the forecast before expensive planting, and move long-term production indoors when repeated protection stops making sense."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownAcidRainContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}