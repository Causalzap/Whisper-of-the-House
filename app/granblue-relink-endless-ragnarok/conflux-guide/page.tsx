import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GuideContent from "@/data/granblue-relink-endless-ragnarok/conflux-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/granblue-relink-endless-ragnarok/conflux-guide`;

const imageUrls = [
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-conflux-gate.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-conflux-first-run.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-conflux-aura-selection.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-conflux-cycle-3-weapon-awakening-materials.webp`,
];

const toc = [
  { id: "conflux-guide", label: "Conflux guide" },
  { id: "conflux-routing-rule", label: "Routing rule" },
  { id: "how-to-unlock-conflux", label: "Unlock Conflux" },
  { id: "how-conflux-works", label: "How Conflux works" },
  { id: "portal-types", label: "Portal types" },
  { id: "yellow-objectives", label: "Yellow objectives" },
  { id: "aura-priorities", label: "Aura priorities" },
  { id: "purple-boss-and-gray-exit", label: "Boss & gray exit" },
  { id: "cycle-reward-roadmap", label: "Cycles" },
  { id: "reward-chest-rules", label: "Reward chests" },
  { id: "resonance-points", label: "Resonance points" },
  { id: "when-to-farm-before-chaos", label: "Before Chaos" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/granblue-relink-endless-ragnarok",
    label: "Granblue Relink Endless Ragnarok Guide Hub",
  },
  {
    href: "/granblue-relink-endless-ragnarok/how-to-start",
    label: "How to Start Endless Ragnarok",
  },
  {
    href: "/granblue-relink-endless-ragnarok/fatebreaker-chaos-progression",
    label: "Fatebreaker and Chaos Progression",
  },
  {
    href: "/granblue-relink-endless-ragnarok/best-ai-team-builds",
    label: "Best AI Team Builds",
  },
  {
    href: "/granblue-relink-endless-ragnarok/new-characters-unlock-guide",
    label: "New Characters Unlock Guide",
  },
];

export const metadata: Metadata = {
  title: "Granblue Relink Conflux Guide: Portals & Rewards",
  description:
    "Route Conflux in Endless Ragnarok with Seedhollow unlock steps, portal choices, aura priorities, rewards, Resonance points and gray exit timing.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Granblue Relink Conflux Guide: Portals & Rewards",
    description:
      "Learn how to route Conflux in Granblue Fantasy: Relink Endless Ragnarok, including Seedhollow unlock steps, portals, auras, reward chests, cycles, Resonance points and when to leave.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Granblue Fantasy Relink Endless Ragnarok Conflux gate near the Quest Counter.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Granblue Relink Conflux Guide: Portals & Rewards",
    description:
      "Use this Conflux route for Seedhollow unlocks, portal choices, aura priorities, rewards, cycles and gray exit timing.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "How do I unlock Conflux?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Conflux starts from the Endless Ragnarok route in Seedhollow. Follow the expansion prompt around the Quest Counter path until the mysterious gate or back alley gate and Conflux representative route appears, then enter the first available cycle.",
    },
  },
  {
    "@type": "Question",
    name: "Is Conflux solo only?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Yes. I treat Conflux as a solo progression route for strengthening my own party and AI companions before harder Fatebreaker or Chaos checks.",
    },
  },
  {
    "@type": "Question",
    name: "Do I lose rewards if I leave through the gray exit portal?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The gray exit portal appears after a boss. I use it when the run has paid out enough and the next section is more risk than value.",
    },
  },
  {
    "@type": "Question",
    name: "Should I farm Cycle 1 for a long time?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "No. Cycle 1 is mostly for opening the system and learning the room flow. Once it is stable and the rewards stop solving upgrades, I move to the next layer.",
    },
  },
  {
    "@type": "Question",
    name: "Should I farm Conflux before Chaos quests?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Yes, when the party is unstable. Farm Conflux before Chaos if AI companions are dying, damage feels capped too low, weapons lag behind, or the next quest expects stronger prep.",
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
          name: "Granblue Relink Endless Ragnarok Guide",
          item: `${siteUrl}/granblue-relink-endless-ragnarok`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Conflux Guide",
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
        "Granblue Fantasy Relink Endless Ragnarok Conflux Guide: Portals, Auras, Rewards, and When to Leave",
      description:
        "A player-focused Granblue Fantasy Relink Endless Ragnarok Conflux guide that explains how to unlock Conflux from Seedhollow, choose yellow Dexterity, red Strife, green Limbo and purple boss portals, read aura choices by bottleneck, decide when to leave through the gray exit portal, farm the right cycle, choose reward chests, spend Resonance points, and use Conflux before Fatebreaker or Chaos checks.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-09",
      dateModified: "2026-07-09",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Granblue Fantasy: Relink" },
        { "@type": "Thing", name: "Endless Ragnarok" },
        { "@type": "Thing", name: "Conflux" },
        { "@type": "Thing", name: "Seedhollow" },
        { "@type": "Thing", name: "Conflux portals" },
        { "@type": "Thing", name: "Conflux auras" },
        { "@type": "Thing", name: "Conflux rewards" },
        { "@type": "Thing", name: "Resonance points" },
        { "@type": "Thing", name: "Gray exit portal" },
        { "@type": "Thing", name: "Fatebreaker" },
        { "@type": "Thing", name: "Chaos quests" }
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
          title="Granblue Fantasy Relink Conflux Guide: Portals, Auras, Rewards"
          description="Route Conflux from Seedhollow with clear portal rules, aura priorities, reward chest decisions, cycle farming, Resonance points, and gray exit timing before Chaos."
          gameTitle="Granblue Fantasy: Relink"
          gameHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseLabel="Granblue Fantasy Relink Endless Ragnarok Guide"
          updatedAt="July 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}