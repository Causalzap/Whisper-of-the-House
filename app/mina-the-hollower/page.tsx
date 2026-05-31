import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MinaTheHollowerContent from "@/data/mina-the-hollower/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mina-the-hollower`;

const imageUrls = [
  `${siteUrl}/images/mina-the-hollower/mina-the-hollower-drillhardt-map-purchase.webp`,
  `${siteUrl}/images/mina-the-hollower/mina-the-hollower-bone-stone.webp`,
  `${siteUrl}/images/mina-the-hollower/mina-the-hollower-tenebrous-times-newspaper.webp`,
  `${siteUrl}/images/mina-the-hollower/mina-the-hollower-proto-spark-duke-reward.webp`,
];

const toc = [
  { id: "start-here", label: "Start here" },
  { id: "isle-map", label: "Isle Map" },
  { id: "where-to-go-first", label: "Where to go first" },
  { id: "bones-and-bone-stones", label: "Bones and Bone Stones" },
  { id: "upgrade-priority", label: "Upgrade priority" },
  { id: "starting-weapon", label: "Starting weapon" },
  { id: "early-trinkets", label: "Early trinkets" },
  { id: "tenebrous-times", label: "Tenebrous Times" },
  { id: "which-guide-next", label: "Guide hub" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/mina-the-hollower/where-to-go-first",
    label: "Where to Go First and Dungeon Order",
  },
  {
    href: "/mina-the-hollower/how-to-get-map",
    label: "How to Get the Isle Map",
  },
  {
    href: "/mina-the-hollower/bones-farming",
    label: "Bones Farming Guide",
  },
  {
    href: "/mina-the-hollower/best-starting-weapon",
    label: "Best Starting Weapon",
  },
  {
    href: "/mina-the-hollower/fast-travel",
    label: "Fast Travel, Train Stations and Mirrors",
  },
  {
    href: "/mina-the-hollower/best-early-trinkets",
    label: "Best Early Trinkets",
  },
  {
    href: "/mina-the-hollower/all-trinkets-guide",
    label: "All Trinkets Guide",
  },
];

export const metadata: Metadata = {
  title: "Mina the Hollower Guide & Beginner Walkthrough",
  description:
    "Use this Mina the Hollower beginner guide and walkthrough to find where to go first, get the Isle Map, farm Bones, pick weapons, choose Trinkets, find all 60 Trinkets and unlock fast travel.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Mina the Hollower Guide & Walkthrough for Beginners",
    description:
      "A beginner-friendly Mina the Hollower guide hub covering where to go first, the Isle Map, Bones, weapons, early Trinkets, all 60 Trinkets, fast travel and early route planning.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1176,
        height: 397,
        alt: "Mina the Hollower Isle Map sold by Drillhardt for 500 Bones.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mina the Hollower Guide & Walkthrough",
    description:
      "Use this beginner guide hub for route order, the Isle Map, Bones, weapons, Trinkets, all 60 Trinkets, fast travel and early tips.",
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
          name: "Mina the Hollower Guide",
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
        "Mina the Hollower Guide and Walkthrough Hub: Beginner Tips, Route Order, Isle Map, Bones, Weapons, Trinkets and Fast Travel",
      description:
        "A Mina the Hollower guide and walkthrough hub for early progression. This beginner guide explains what to do after reaching Ossex, how to unlock the Hollower's Guild route, rescue Rhene, dig out Drillhardt, buy the Isle Map, choose the first generator route toward Queensbury Crypt, protect Bones and Bone Stones, decide early upgrade priorities, pick a starting weapon, choose useful early trinkets such as Proto Spark, use the All Trinkets Guide for all 60 Trinkets, builds, checklist and easy-to-miss rewards, read the Tenebrous Times for route hints, and move into deeper walkthrough pages for dungeon order, map location, Bones farming, fast travel, train stations, mirrors and early build choices.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-30",
      dateModified: "2026-05-30",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Mina the Hollower" },
        { "@type": "Thing", name: "Mina the Hollower guide" },
        { "@type": "Thing", name: "Mina the Hollower walkthrough" },
        { "@type": "Thing", name: "Beginner guide" },
        { "@type": "Thing", name: "Beginner tips" },
        { "@type": "Thing", name: "Early game guide" },
        { "@type": "Thing", name: "Ossex" },
        { "@type": "Thing", name: "Hollower's Guild" },
        { "@type": "Thing", name: "Rhene" },
        { "@type": "Thing", name: "Drillhardt" },
        { "@type": "Thing", name: "Isle Map" },
        { "@type": "Thing", name: "Queensbury Crypt" },
        { "@type": "Thing", name: "Eastern Heath" },
        { "@type": "Thing", name: "Bones" },
        { "@type": "Thing", name: "Bone Stones" },
        { "@type": "Thing", name: "Starting weapon" },
        { "@type": "Thing", name: "Nightstar" },
        { "@type": "Thing", name: "Proto Spark" },
        { "@type": "Thing", name: "Trinkets" },
        { "@type": "Thing", name: "Early trinkets" },
        { "@type": "Thing", name: "All Trinkets" },
        { "@type": "Thing", name: "Trinket builds" },
        { "@type": "Thing", name: "Trinket checklist" },
        { "@type": "Thing", name: "Easy-to-miss Trinkets" },
        { "@type": "Thing", name: "Fast travel" },
        { "@type": "Thing", name: "Train stations" },
        { "@type": "Thing", name: "Mirrors" },
        { "@type": "Thing", name: "Tenebrous Times" },
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
          name: "What should I do first in Mina the Hollower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Reach Ossex, enter the Hollower's Guild from the side route, rescue Rhene, dig out Drillhardt and buy the Isle Map. After that, head east toward Eastern Heath and Queensbury Crypt.",
          },
        },
        {
          "@type": "Question",
          name: "Is this a Mina the Hollower beginner guide or walkthrough?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "This page is a beginner guide and walkthrough hub. It gives the early plan and links to deeper walkthrough pages for route order, the Isle Map, Bones farming, starting weapons, trinkets and fast travel.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best first generator route?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Queensbury Crypt is the best first generator route for most players. It is easier to route from Ossex and leads toward Proto Spark.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need the Isle Map early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The Isle Map only costs 500 Bones and makes the early routes much easier to understand.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I get the Isle Map?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy it from Drillhardt in the Hollower's Guild after rescuing Rhene from the Rebel Barracks and digging Drillhardt out inside the Guild.",
          },
        },
        {
          "@type": "Question",
          name: "What should I spend Bones on first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy the Isle Map first, then prioritize Attack, Defense and survival upgrades. Save weapons, sidearms and train funding for later unless you have a specific reason.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best starting weapon?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Nightstar is the safest starting weapon for most beginners because its reach makes early combat more forgiving. Use the full starting weapon guide for a complete comparison.",
          },
        },
        {
          "@type": "Question",
          name: "What early trinket should I get first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Proto Spark is the strongest early safety trinket because it saves Mina from death once. It is tied to the Duke route in Queensbury Crypt.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find all Trinkets in Mina the Hollower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the All Trinkets Guide for all 60 Trinkets, effects, builds, easy-to-miss rewards, region cleanup, acquisition types and a full checklist.",
          },
        },
        {
          "@type": "Question",
          name: "How do I farm Bones early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with safe Bone Stones and short starter loops. For serious farming later, use Elizabeth's Deboning Wand, Stolenoid and Mourner's Mile.",
          },
        },
        {
          "@type": "Question",
          name: "When should I unlock fast travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not rush train funding before the map and core upgrades. Once your basics are stable, start saving toward the shared 10,000-Bone train fund.",
          },
        },
        {
          "@type": "Question",
          name: "What if I went the wrong way?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Back out, spend or protect your Bones, check the Tenebrous Times and use the Isle Map to choose the next route. Going the wrong way does not ruin your save.",
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
          title="Mina the Hollower Beginner Guide"
          description="Start here after reaching Ossex. This guide hub points you to the right walkthroughs for the Isle Map, route order, Bones, weapons, early Trinkets, all 60 Trinkets and fast travel."
          gameTitle="Mina the Hollower"
          gameHref="/mina-the-hollower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MinaTheHollowerContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}