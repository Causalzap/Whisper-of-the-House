import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoonlightPeaksContent from "@/data/moonlight-peaks/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moonlight-peaks`;

const imageUrls = [
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-map-character-locations.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-chester-town-hall-shipping-bin.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-a-bridge-too-far-cursed-misty-shores.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-howling-hammer-well-barn-mill-costs.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-barn-cost-four-animals.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-feature-unlocks-death-soul-blobs.webp`,
];

const toc = [
  { id: "moonlight-peaks-guide-hub", label: "Guide hub" },
  { id: "which-guide-should-you-read", label: "Which guide" },
  { id: "progress-map", label: "Progress map" },
  { id: "first-week-route", label: "First week" },
  {
    id: "misty-shores-copper-and-fishing",
    label: "Misty Shores",
  },
  {
    id: "tools-resources-and-howling-hammer",
    label: "Tools and resources",
  },
  { id: "barn-animals-and-luna", label: "Barn and animals" },
  { id: "feature-unlocks", label: "Feature unlocks" },
  {
    id: "what-not-to-over-optimize",
    label: "Do not over-optimize",
  },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/moonlight-peaks/beginner-guide",
    label: "Moonlight Peaks Beginner Guide",
  },
  {
    href: "/moonlight-peaks/misty-shores-mines-copper-guide",
    label: "Misty Shores, Mines and Copper Guide",
  },
  {
    href: "/moonlight-peaks/early-resources-tool-upgrades-guide",
    label: "Early Resources and Tool Upgrades Guide",
  },
  {
    href: "/moonlight-peaks/barn-animals-guide",
    label: "Barn and Animals Guide",
  },
  {
    href: "/moonlight-peaks/feature-unlocks-guide",
    label: "Feature Unlocks Guide",
  },
];

export const metadata: Metadata = {
  title: "Moonlight Peaks Guide: Beginner, Misty Shores & Tools",
  description:
    "Use this Moonlight Peaks guide hub for beginner route, Misty Shores, copper, tool upgrades, barn animals, magic, bug net, Soul Blobs and unlocks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Moonlight Peaks Guide: Beginner Route, Misty Shores, Tools, Barn and Unlocks",
    description:
      "Find the right Moonlight Peaks guide for your current bottleneck: first week, Misty Shores, copper, tool upgrades, barn animals, magic, Death, bug net, Soul Blobs and more.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Moonlight Peaks map showing character locations, shop icons, building numbers and town navigation.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonlight Peaks Guide",
    description:
      "Use the Moonlight Peaks guide hub to pick the right route for beginner steps, Misty Shores, copper, tools, barn animals and feature unlocks.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "What should I do first in Moonlight Peaks?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Plant the first Blood Grapes, register at Town Hall, learn Chester selling, and start meeting residents. Use the Beginner Guide for the full first-week route.",
    },
  },
  {
    "@type": "Question",
    name: "Why is Misty Shores still blocked?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Misty Shores is tied to Orlock's Wine Scheme and A Bridge Too Far. If the bridge is still cursed, follow the character route before looking for copper.",
    },
  },
  {
    "@type": "Question",
    name: "Where is Cave of Echoes?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Cave of Echoes is on the lower-left side of Misty Shores. It becomes important when Copper Ore and Copper Bars enter the route.",
    },
  },
  {
    "@type": "Question",
    name: "Which tool should I upgrade first?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The pickaxe is usually first because better mining supports Copper, Iron, and Gold Bar upgrades. Use the Tool Upgrades Guide for the full cost table.",
    },
  },
  {
    "@type": "Question",
    name: "When is Howling Hammer open?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Howling Hammer is open Monday to Friday from 6:00 p.m. to midnight.",
    },
  },
  {
    "@type": "Question",
    name: "How much does the barn cost?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The barn costs 4,000 gold, uses 10x6 space, takes 1 Night to build, and holds 4 animals.",
    },
  },
  {
    "@type": "Question",
    name: "What animals should I know early?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Cheeken, Piggoat, Draculamb, and Cowcula are the key early animal names. Luna's available animals rotate after the barn is built.",
    },
  },
  {
    "@type": "Question",
    name: "Why do I not have magic yet?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The broken wand and spells are story-gated. Follow the magic route through later story progress instead of assuming spells are ready on night one.",
    },
  },
  {
    "@type": "Question",
    name: "Why do I not have the bug net yet?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The bug net comes through Death after enough route progress. Bugs can appear before the net is unlocked.",
    },
  },
  {
    "@type": "Question",
    name: "How do I unlock longer nights?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Longer nights come from the Death and Soul Blob reward path. After the clock reward, check Night Duration in settings.",
    },
  },
  {
    "@type": "Question",
    name: "Should I chase Nokturna cards immediately?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "No. Nokturna matters later, but the first week should focus on Town Hall, Chester, Misty Shores, tools, animals, and feature unlocks.",
    },
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
          name: "Moonlight Peaks Guide",
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
        "Moonlight Peaks Guide: Beginner Route, Misty Shores, Copper, Tools, Barn Animals and Feature Unlocks",
      description:
        "A player-focused Moonlight Peaks guide hub for choosing the right next route: first-week Blood Grapes, Town Hall, Chester selling, Misty Shores, A Bridge Too Far, Cave of Echoes, Copper Ore, Copper Bars, Howling Hammer, tool upgrades, barn animals, Luna's rotation, magic unlocks, Death, bug net, Soul Blobs, Vampsters, Nokturna, and early-system bottlenecks.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-08",
      dateModified: "2026-07-08",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Moonlight Peaks" },
        { "@type": "Thing", name: "Moonlight Peaks guide" },
        { "@type": "Thing", name: "Moonlight Peaks beginner guide" },
        { "@type": "Thing", name: "Moonlight Peaks Blood Grapes" },
        { "@type": "Thing", name: "Moonlight Peaks Town Hall" },
        { "@type": "Thing", name: "Moonlight Peaks Chester" },
        { "@type": "Thing", name: "Moonlight Peaks Misty Shores" },
        { "@type": "Thing", name: "A Bridge Too Far" },
        { "@type": "Thing", name: "Cave of Echoes" },
        { "@type": "Thing", name: "Moonlight Peaks Copper Ore" },
        { "@type": "Thing", name: "Moonlight Peaks Copper Bars" },
        { "@type": "Thing", name: "Moonlight Peaks tool upgrades" },
        { "@type": "Thing", name: "Howling Hammer" },
        { "@type": "Thing", name: "Moonlight Peaks barn" },
        { "@type": "Thing", name: "Moonlight Peaks animals" },
        { "@type": "Thing", name: "Cheeken" },
        { "@type": "Thing", name: "Piggoat" },
        { "@type": "Thing", name: "Draculamb" },
        { "@type": "Thing", name: "Cowcula" },
        { "@type": "Thing", name: "Moonlight Peaks magic" },
        { "@type": "Thing", name: "Moonlight Peaks broken wand" },
        { "@type": "Thing", name: "Aquaflux" },
        { "@type": "Thing", name: "Moonlight Peaks bug net" },
        { "@type": "Thing", name: "Moonlight Peaks Soul Blobs" },
        { "@type": "Thing", name: "Moonlight Peaks Vampsters" },
        { "@type": "Thing", name: "Moonlight Peaks Nokturna" },
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
      mainEntity: faqEntities,
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
          title="Find the Right Moonlight Peaks Guide for Your Next Bottleneck"
          description="Use this hub to pick the right Moonlight Peaks route for the first week, Misty Shores, copper, tool upgrades, barn animals, magic, Death, bug net, Soul Blobs and missing systems."
          gameTitle="Moonlight Peaks"
          gameHref="/moonlight-peaks"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MoonlightPeaksContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
