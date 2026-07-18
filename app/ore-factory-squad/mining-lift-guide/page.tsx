import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OreFactorySquadMiningLiftGuideContent from "@/data/ore-factory-squad/mining-lift-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ore-factory-squad`;
const pageUrl = `${hubUrl}/mining-lift-guide`;

const imageUrls = [
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-mining-lift-head-placement.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-mining-lift-ladder-blocked.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-mining-lift-full-depth-route.webp`,
];

const toc = [
  {
    id: "where-to-buy",
    label: "Where to buy & cost",
  },
  {
    id: "when-worth-building",
    label: "When the Lift is worth it",
  },
  {
    id: "place-lift-head",
    label: "Place the Lift Head",
  },
  {
    id: "add-extensions",
    label: "Add Lift Extensions",
  },
  {
    id: "move-resources",
    label: "Move mining boxes",
  },
  {
    id: "troubleshooting",
    label: "Lift troubleshooting",
  },
  {
    id: "how-deep",
    label: "How deep to extend",
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
    href: "/ore-factory-squad/find-limestone-make-cement/",
    label: "Limestone & Cement Guide",
  },
  {
    href: "/ore-factory-squad/remaining-resources-switch-property/",
    label: "Remaining Resources & Property Guide",
  },
  {
    href: "/ore-factory-squad/dynamite-worth-it/",
    label: "Dynamite Guide",
  },
];

export const metadata: Metadata = {
  title: "Ore Factory Squad Mining Lift Guide: Cargo & Ladder Fixes",
  description:
    "Build and use the Ore Factory Squad Mining Lift, send packed mining boxes to the surface, fix Ladder is blocked, place Extensions, and plan shaft depth.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Ore Factory Squad Mining Lift Guide: Cargo, Extensions & Ladder Fixes",
    description:
      "Place the Lift Head, build Extensions one section at a time, send packed mining boxes upward, fix blocked ladders, and plan a useful shaft depth.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ore Factory Squad Mining Lift Head placed at the edge of a property with its ladder facing a cleared shaft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ore Factory Squad Mining Lift Guide",
    description:
      "Learn Lift Head placement, Extension construction, packed-box transfer, blocked ladder fixes, and deep-shaft planning.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question:
      "Can the Mining Lift carry packed mining boxes in Ore Factory Squad?",
    answer:
      "Yes. Packed mining boxes were sent from the underground route to the surface, and at least three transferred boxes were found near the Lift Head during one mining session. This does not establish a maximum Lift capacity.",
  },
  {
    question: "Do I need to ride the Mining Lift with the cargo?",
    answer:
      "No, not for the tested upward route. The packed mining boxes were sent upward through the Lift interaction, while the player returned separately using the attached ladder. A player-riding cargo platform was not tested.",
  },
  {
    question: "Why is my mining box still beside the Mining Lift ladder?",
    answer:
      "Placing a box beside the structure is not enough. Bring the packed mining box close to the lower transfer point and use the displayed Lift interaction. The tested keyboard layout showed X, but remapped controls may differ.",
  },
  {
    question: "Can the Mining Lift carry product pallets?",
    answer:
      "Product-pallet transfer was not tested. The confirmed workflow uses packed mining boxes. Factory product pallets should continue to be handled with the forklift until Lift support for that payload is verified.",
  },
  {
    question: "Can I move the Mining Lift after placing it?",
    answer:
      "A short Mining Lift setup could be moved during testing. It was not confirmed whether every Extension moves with a completed deep structure or whether dismantling returns the full component cost.",
  },
  {
    question: "Should I keep a backup ramp beside the Mining Lift?",
    answer:
      "Keep a temporary ramp while constructing the shaft. Remove or abandon it only after every Extension has been tested while climbing both downward and back upward.",
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
          name: "Mining Lift Guide",
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
        "Ore Factory Squad Mining Lift Guide: Cargo, Extensions and Ladder Fixes",
      description:
        "This Ore Factory Squad Mining Lift guide explains where the Lift Head and Lift Extensions were available during tested progression, the $25 Head and $10 Extension prices, when a permanent vertical route is worth building, how to orient the attached ladder, how to excavate and test one Extension at a time, how packed mining boxes were sent from an underground Lift position to the surface, why the player still climbed the ladder separately, how to fix Ladder is blocked warnings and tight Extension joints, how to work around electrical obstacles, and how to use Remaining Resources and Detector readings to choose the final shaft depth. It also explains that a packed-box transfer matches the listed Elevator Pitch requirement without claiming an exact achievement trigger moment.",
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
          name: "Ore Factory Squad Mining Lift guide",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Lift Head",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Lift Extension",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Mining Lift cost",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Ladder is blocked",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Mining Lift cargo",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad packed mining box transfer",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Elevator Pitch achievement",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad deep mining route",
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
          title="Ore Factory Squad Mining Lift Guide: Cargo, Extensions & Ladder Fixes"
          description="Place the Lift Head without blocking its ladder, add and test Extensions one section at a time, send packed mining boxes from underground to the surface, repair blocked connections, and stop extending when the useful resource layers are already reachable."
          gameTitle="Ore Factory Squad"
          gameHref="/ore-factory-squad/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OreFactorySquadMiningLiftGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}