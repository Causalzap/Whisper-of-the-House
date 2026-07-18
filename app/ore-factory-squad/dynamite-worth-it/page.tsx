import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OreFactorySquadDynamiteGuideContent from "@/data/ore-factory-squad/dynamite-worth-it.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ore-factory-squad`;
const pageUrl = `${hubUrl}/dynamite-worth-it`;

const imageUrls = [
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-dynamite-unlock.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-dynamite-cost-reduced-yield.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-dynamite-two-limestone-result.webp`,
];

const toc = [
  {
    id: "is-dynamite-worth-it",
    label: "Is Dynamite worth it?",
  },
  {
    id: "cost",
    label: "Unlock & per-use cost",
  },
  {
    id: "how-to-use",
    label: "How to use Dynamite",
  },
  {
    id: "secret-caves",
    label: "Secret Caves",
  },
  {
    id: "reduced-yield",
    label: "Reduced resource yield",
  },
  {
    id: "tool-comparison",
    label: "Tool comparison",
  },
  {
    id: "one-stick-routine",
    label: "One-stick routine",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
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
    href: "/ore-factory-squad/find-limestone-make-cement/",
    label: "Limestone & Cement Guide",
  },
];

export const metadata: Metadata = {
  title: "Ore Factory Squad Dynamite Guide: Caves, Cost & Yield",
  description:
    "Learn when Dynamite is worth buying, how it opens Secret Caves, what each throw costs, and how to avoid wasting cash and reduced resource yield.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Ore Factory Squad Dynamite Guide: Secret Caves, Cost & Reduced Yield",
    description:
      "Use Dynamite to open cave routes without wasting money. See its $600 unlock, $50-per-throw cost, reduced-yield warning, cave rules, and one-stick workflow.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Ore Factory Squad Dynamite showing its 50 dollar cost and reduced resource yield warning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ore Factory Squad Dynamite Guide: Caves, Cost & Yield",
    description:
      "See when Dynamite is worth using, how Secret Caves work, why explosions reduce yield, and how to control the $50 cost of every throw.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question: "Can Dynamite hurt the player in Ore Factory Squad?",
    answer:
      "Yes. A close explosion caused a visible hit reaction during testing. Move away immediately after throwing and keep a clear retreat route. The exact damage and minimum safe distance were not measured.",
  },
  {
    question:
      "What should I do if one Dynamite stick does not open the cave wall?",
    answer:
      "Clear ordinary soil around the suspected barrier, check whether the blast struck the center, and confirm that the wall may belong to a Secret Cave rather than normal terrain. Spend another $50 only after those checks.",
  },
  {
    question: "Why is my Secret Cave empty in Ore Factory Squad?",
    answer:
      "Update to v1.0.1 or later. The launch version had an issue that could prevent resources from appearing inside procedurally generated Forest and Quarry Secret Caves. The fix does not guarantee identical loot in every cave.",
  },
  {
    question:
      "Does opening a Secret Cave unlock the Open Sesame achievement?",
    answer:
      "Yes. Blasting through a cave entrance with Dynamite and discovering the cave unlocks the Open Sesame achievement. Secret Cave locations are procedurally generated rather than tied to one fixed coordinate.",
  },
  {
    question: "Can Dynamite collapse an entire property?",
    answer:
      "Not reliably. Connected or suspended terrain can remain after explosions, especially around boundaries, pipes, and anchored geometry. Dynamite is better for creating a local opening than causing a property-wide collapse.",
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
          name: "Dynamite Guide",
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
        "Ore Factory Squad Dynamite Guide: Secret Caves, Cost and Reduced Yield",
      description:
        "This Ore Factory Squad Dynamite guide explains whether the Level 4 upgrade is worth its $600 unlock cost, why every throw costs another $50, how repeated explosions can consume a machine budget, when Dynamite should be used as an access tool, how Forest Secret Cave entrances use breakable walls, how Quarry caves differ from confirmed Forest behavior, why v1.0.1 matters for empty caves, how reduced resource yield affects mining decisions, and why the safest route is Detector positioning, one Dynamite stick, then precise Pickaxe recovery.",
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
          name: "Ore Factory Squad Dynamite guide",
        },
        {
          "@type": "Thing",
          name: "Is Dynamite worth it in Ore Factory Squad",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Dynamite cost",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Secret Caves",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Forest cave",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Quarry cave",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad breakable cave wall",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Open Sesame achievement",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad reduced resource yield",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Dynamite versus Jackhammer",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad cave empty",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Dynamite player damage",
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
          title="Ore Factory Squad Dynamite Guide: Secret Caves, Cost & Reduced Yield"
          description="See when the $600 Dynamite unlock is worth buying, why every throw costs another $50, how explosions reduce resource yield, and how to use one stick to open cave routes without wasting a machine budget."
          gameTitle="Ore Factory Squad"
          gameHref="/ore-factory-squad/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OreFactorySquadDynamiteGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}