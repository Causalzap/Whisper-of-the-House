import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OreFactorySquadLimestoneCementContent from "@/data/ore-factory-squad/find-limestone-make-cement.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ore-factory-squad`;
const pageUrl = `${hubUrl}/find-limestone-make-cement`;

const imageUrls = [
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-limestone-detector-reading.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-cement-recipe-forming-press.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-cement-output-pallet.webp`,
];

const toc = [
  {
    id: "remaining-resources",
    label: "Check Remaining Resources",
  },
  {
    id: "detector",
    label: "Follow the Detector",
  },
  {
    id: "limestone-vs-sandstone",
    label: "Limestone vs Sandstone",
  },
  {
    id: "transport-limestone",
    label: "Transport Limestone",
  },
  {
    id: "cement-recipe",
    label: "Cement recipe",
  },
  {
    id: "forming-press",
    label: "Use the Forming Press",
  },
  {
    id: "cement-troubleshooting",
    label: "Cement troubleshooting",
  },
  {
    id: "keep-or-convert",
    label: "Keep or convert Blocks",
  },
  {
    id: "related-guides",
    label: "Related guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/ore-factory-squad/",
    label: "Ore Factory Squad Guide Hub",
  },
  {
    href: "/ore-factory-squad/beginner-guide/",
    label: "Beginner Guide",
  },
  {
    href: "/ore-factory-squad/mining-lift-guide/",
    label: "Mining Lift Guide",
  },
  {
    href: "/ore-factory-squad/remaining-resources-switch-property/",
    label: "Remaining Resources & Property Guide",
  },
  {
    href: "/ore-factory-squad/complete-contracts-pallet-packer/",
    label: "Contracts & Pallet Packer Guide",
  },
];

export const metadata: Metadata = {
  title: "How to Find Limestone and Make Cement | Ore Factory Squad",
  description:
    "Find Limestone with Remaining Resources and the Detector, make Cement with the 2:1 recipe, fix Forming Press issues, and plan exact Block totals.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Ore Factory Squad Limestone Guide: Detector, Cement Recipe & Fixes",
    description:
      "Track Limestone through Surface, Mid, and Deep layers, follow changing Detector readings, make Cement, and fix Forming Press or storage problems.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Ore Factory Squad Forming Press showing the Cement recipe using two Limestone Blocks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ore Factory Squad Limestone Guide: Find It & Make Cement",
    description:
      "Use Remaining Resources and Detector distances to find Limestone, then make Cement with the tested 2:1 Forming Press recipe.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question: "Why do 61 Limestone Blocks only make 30 Cement?",
    answer:
      "The recipe consumes two complete Limestone Blocks for each Cement. Sixty Blocks produce 30 Cement, while the final odd Block remains unused until another Block is added.",
  },
  {
    question: "Does Cement production continue after dark?",
    answer:
      "Yes. An active Forming Press continued processing after nightfall in this test. This confirms production during the nighttime period, but does not prove that an unfinished queue always survives End Day, a save reload, or every later update.",
  },
  {
    question:
      "Why does my Cement not appear in contracts or Stock Sell?",
    answer:
      "Raw Limestone enters internal Factory Storage through the Sorting Station. Finished Cement remains on a physical product pallet and must be placed inside the marked storage area before the warehouse stock system can count it for contracts and Stock Sell.",
  },
  {
    question:
      "What does a Remaining Resources range such as 0–2 mean?",
    answer:
      "It is an estimate for that property layer, not a guaranteed exact quantity or coordinate. Use the range to decide whether another Detector search is reasonable, not as proof that two easy deposits remain.",
  },
  {
    question: "Should I buy the Detector or Forming Press first?",
    answer:
      "Buy the Detector first when the bottleneck is locating a specific Limestone deposit below the surface. Prioritize the Forming Press when Limestone Blocks are already stored and Cement is preventing a contract from being completed.",
  },
];

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
          name: "Ore Factory Squad Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Limestone and Cement Guide",
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
        "How to Find Limestone and Make Cement in Ore Factory Squad",
      description:
        "This Ore Factory Squad Limestone and Cement guide explains how to check Surface, Mid, and Deep Layer estimates through Remaining Resources, follow three-dimensional Detector distances, transport mined Limestone through the Mining Lift and Sorting Station, distinguish Limestone from Sandstone, produce Limestone Blocks in the Stone Crusher, feed the physical product pallet into the Forming Press, use the tested two-to-one Cement recipe, troubleshoot missing inputs and blocked outputs, and reserve Blocks needed by active contracts.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-18",
      dateModified: "2026-07-18",
      about: [
        {
          "@type": "VideoGame",
          name: "Ore Factory Squad",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Limestone location",
        },
        {
          "@type": "Thing",
          name: "How to find Limestone in Ore Factory Squad",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Limestone Detector",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Remaining Resources",
        },
        {
          "@type": "Thing",
          name: "Limestone versus Sandstone",
        },
        {
          "@type": "Thing",
          name: "How to make Cement in Ore Factory Squad",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Cement recipe",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Forming Press",
        },
        {
          "@type": "Thing",
          name: "Forming Press not making Cement",
        },
        {
          "@type": "Thing",
          name: "Limestone Block to Cement ratio",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          title="How to Find Limestone and Make Cement in Ore Factory Squad"
          description="Check whether Limestone remains in the Surface, Mid, or Deep Layer, follow changing Detector distances, transport the ore to the factory, make Cement with the tested 2:1 recipe, and fix Stone Crusher or Forming Press problems."
          gameTitle="Ore Factory Squad"
          gameHref="/ore-factory-squad/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OreFactorySquadLimestoneCementContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}