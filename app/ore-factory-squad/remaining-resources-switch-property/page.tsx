import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OreFactorySquadRemainingResourcesSwitchPropertyContent from "@/data/ore-factory-squad/remaining-resources-switch-property.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ore-factory-squad`;
const pageUrl = `${hubUrl}/remaining-resources-switch-property`;

const heroImageUrl = `${siteUrl}/images/ore-factory-squad/ore-factory-squad-remove-first-property-warning.webp`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-property-remaining-resources.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-greenpark-lot-nearly-cleared.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-level-four-unlocks.webp`,
];

const toc = [
  {
    id: "cannot-buy-property",
    label: "Why I can’t buy another property",
  },
  {
    id: "read-remaining-resources",
    label: "Read Remaining Resources",
  },
  {
    id: "leave-greenpark",
    label: "When to leave Greenpark",
  },
  {
    id: "before-remove-property",
    label: "What to recover first",
  },
  {
    id: "which-property-next",
    label: "Westmont vs Forest",
  },
  {
    id: "switch-and-test",
    label: "Switch and test the property",
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
    href: "/ore-factory-squad/find-limestone-make-cement/",
    label: "Limestone & Cement Guide",
  },
  {
    href: "/ore-factory-squad/smelt-copper-iron-ingots/",
    label: "Copper & Iron Smelting Guide",
  },
  {
    href: "/ore-factory-squad/complete-contracts-pallet-packer/",
    label: "Contracts & Pallet Packer Guide",
  },
];

export const metadata: Metadata = {
  title:
    "Ore Factory Squad Property Guide: Greenpark, Westmont & Forest",
  description:
    "Check Remaining Resources, fix Remove your first property first, decide when to leave Greenpark, and compare Westmont with Forest for Copper and Iron.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Ore Factory Squad Property Guide: Greenpark, Westmont & Forest",
    description:
      "Read Remaining Resources, recover Greenpark safely, fix property purchase errors, and choose Westmont or Forest for the resources your factory needs.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "Ore Factory Squad Properties app showing Remove your first property first before buying another property",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ore Factory Squad Property & Remaining Resources Guide",
    description:
      "Learn when to leave Greenpark, what to recover, how to fix property purchase errors, and whether Westmont or Forest is the better next site.",
    images: [heroImageUrl],
  },
};

const faqEntities = [
  {
    question: "Does Remove Property cost money in Ore Factory Squad?",
    answer:
      "I did not see a separate removal charge during my tested property switch. The meaningful costs were the replacement listing, the processing license, and the machines required for the new resource chain.",
  },
  {
    question:
      "Does 26% Copper and Iron mean 26 guaranteed ores in Ore Factory Squad?",
    answer:
      "No. The Woodland Lot preview displayed a 26% metal-resource value beside Copper and Iron, but the interface did not make it clear whether that number applied separately or to a grouped preview value. I use it only to compare listings, not as a guaranteed ore count, drop chance, fixed coordinate, or universal Forest total.",
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
          name: "Remaining Resources and Property Guide",
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
        "Ore Factory Squad Property Guide: Remaining Resources, Greenpark, Westmont and Forest",
      description:
        "This Ore Factory Squad property guide explains why the game displays Remove your first property first, how to read Surface, Mid, and Deep values in Remaining Resources, when an empty Greenpark Surface is still worth mining, when Copper and Iron justify switching properties, what to recover before using Remove Property, how Westmont differs from a Forest property, why Woodland Lot refers to the specific Forest listing tested in this save, how to interpret the ambiguous 26% metal-resource preview without treating it as a guaranteed ore count, and how to test one new-property load before investing in a permanent Mining Lift.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-18",
      dateModified: "2026-07-18",
      articleSection: "Ore Factory Squad Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Ore Factory Squad",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Remaining Resources",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad property switching",
        },
        {
          "@type": "Thing",
          name: "Remove your first property first",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Greenpark Lot",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Westmont Property",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Forest property",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Woodland Lot",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Copper and Iron property",
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
          title="Ore Factory Squad Property Guide: When to Leave Greenpark"
          description="Read Remaining Resources, recover the old dig site, fix Remove your first property first, compare Westmont with Forest, and test the replacement before building a permanent Mining Lift."
          gameTitle="Ore Factory Squad"
          gameHref="/ore-factory-squad/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OreFactorySquadRemainingResourcesSwitchPropertyContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}