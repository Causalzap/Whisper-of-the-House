import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WhatToDoFirstContent from "@/data/subnautica-2/what-to-do-first.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/what-to-do-first`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-lifepod-fabricator.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-lifepod-cave-copper-acidic-raion.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-welcome-center-exterior.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-welcome-center-biolab-biomods.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-digestion-adaptation-plant.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-silver-cave-green-flowers.webp`,
];

const toc = [
  { id: "early-access-note", label: "EA note" },
  { id: "first-30-seconds", label: "First 30 seconds" },
  { id: "first-two-hours-route", label: "2-hour route" },
  { id: "why-this-order", label: "Why this order" },
  { id: "survival-multitool", label: "Multitool" },
  { id: "scanner-battery", label: "Scanner" },
  { id: "water-food", label: "Water & food" },
  { id: "fins-air-bladder", label: "Fins & Air Bladder" },
  { id: "welcome-center", label: "Welcome Center" },
  { id: "biolab-power", label: "Biolab power" },
  { id: "anita-digestion", label: "Anita & Digestion" },
  { id: "silver-air-tank", label: "Silver & Air Tank" },
  { id: "first-death", label: "First death" },
  { id: "what-not-to-do", label: "Mistakes" },
  { id: "after-two-hours", label: "Next steps" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/subnautica-2", label: "Subnautica 2 Guide" },
  { href: "/subnautica-2/early-resources", label: "Early Resources" },
  {
    href: "/subnautica-2/fully-functional-fabricator",
    label: "Fully Functional Fabricator Fix",
  },
  { href: "/subnautica-2/navigation-guide", label: "Navigation Guide" },
  { href: "/subnautica-2/digestion-adaptation", label: "Digestion Adaptation" },
  { href: "/subnautica-2/tadpole-submarine", label: "Tadpole Submarine" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 What to Do First: First 2 Hours Guide",
  description:
    "Follow a safe Subnautica 2 first 2 hours route: Multitool, Scanner, Fins, Welcome Center, Digestion, Silver and your first base path.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 What to Do First: First 2 Hours Guide",
    description:
      "A player-first opening route for Subnautica 2: what to click first, what to craft first, where to go, and how to recover after your first death.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 Lifepod Fabricator showing first tools and early crafting route.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 What to Do First: First 2 Hours Guide",
    description:
      "Start Subnautica 2 with the right early route: tools, Scanner, Welcome Center, Digestion, Silver, oxygen and base prep.",
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
          name: "Subnautica 2 Guide",
          item: `${siteUrl}/subnautica-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What to Do First",
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
        "Subnautica 2 What to Do First: First Two Hours Route for Tools, Welcome Center, Digestion, Silver and Base Progression",
      description:
        "A Subnautica 2 Early Access opening progression guide for new players that explains the first 30 seconds, the first two hours, what to craft first, how to use the Lifepod as a route anchor, how to reach the Welcome Center, where the Habitat Builder fragments fit into progression, how to power the Biolab, when Anita's Digestion signal matters, when to go for Silver, and what to do after the first death.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-14",
      dateModified: "2026-05-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Beginner Guide" },
        { "@type": "Thing", name: "First Two Hours" },
        { "@type": "Thing", name: "Welcome Center" },
        { "@type": "Thing", name: "Habitat Builder" },
        { "@type": "Thing", name: "Digestion Adaptation" },
        { "@type": "Thing", name: "Standard Air Tank" },
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
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I skip the Welcome Center and build a base anyway?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not realistically for a smooth early route. The Welcome Center gives key scans, including Habitat Builder progress, and it introduces the Biolab and early survival upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "Anita’s signal is not showing. What should I do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the NOA in your Lifepod, keep scanning early objects, and open the Signals tab to make sure the marker is not hidden. If it has not appeared yet, finish your basic tool loop first.",
          },
        },
        {
          "@type": "Question",
          name: "I found only one Habitat Builder fragment. Where is the second one?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The first fragment is near the front-right exterior of the Welcome Center. The second is lower, beneath the main Welcome Center area, so check underneath before leaving.",
          },
        },
        {
          "@type": "Question",
          name: "Can I go for Silver before Fins or Air Bladder?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can, but new players should not. Fins reduce wasted oxygen, and Air Bladder gives a recovery option if the cave route takes longer than expected.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I die and lose my items?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Respawn at the Lifepod, turn on the death marker in Signals if needed, return with empty inventory and oxygen backup, open the death container, recover the items, and leave instead of continuing deeper.",
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Subnautica 2 What to Do First: A Safe First Two Hours Route"
          description="Start with the right tools, avoid the early traps, reach the Welcome Center, unlock Digestion, get Silver, and prepare for your first real base."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WhatToDoFirstContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
