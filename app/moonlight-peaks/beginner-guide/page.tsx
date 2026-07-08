import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/moonlight-peaks/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moonlight-peaks/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-blood-grapes-first-planting.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-map-character-locations.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-chester-town-hall-shipping-bin.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-5am-clock-warning.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-early-well-howling-hammer.webp`,
];

const toc = [
  {
    id: "moonlight-peaks-beginner-guide",
    label: "Beginner guide",
  },
  {
    id: "first-night-route",
    label: "First night route",
  },
  {
    id: "planting-blood-grapes",
    label: "Blood Grapes",
  },
  {
    id: "go-to-town",
    label: "Go to town",
  },
  {
    id: "town-hall-and-chester",
    label: "Town Hall and Chester",
  },
  {
    id: "stamina-mana-and-sleep",
    label: "Stamina and sleep",
  },
  {
    id: "save-system",
    label: "Save system",
  },
  {
    id: "aquaflux-magic-and-hellkitten",
    label: "Aquaflux and Hellkitten",
  },
  {
    id: "early-money",
    label: "Early money",
  },
  {
    id: "what-to-buy-first",
    label: "What to buy first",
  },
  {
    id: "storage-and-crafting",
    label: "Storage",
  },
  {
    id: "relationships-and-gifts",
    label: "Gifts",
  },
  {
    id: "nokturna",
    label: "Nokturna",
  },
  {
    id: "beginner-mistakes",
    label: "Mistakes",
  },
  {
    id: "when-to-move-to-other-guides",
    label: "Next guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/moonlight-peaks",
    label: "Moonlight Peaks Guide Hub",
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
  title: "Moonlight Peaks Beginner Guide: First Week Route",
  description:
    "Start Moonlight Peaks with Blood Grapes, Town Hall, Chester selling, sleep saving, Aquaflux, Hellkitten form, early money and first buys.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Moonlight Peaks Beginner Guide: First Week Route",
    description:
      "Follow the Moonlight Peaks first-week route with Blood Grapes, Town Hall, Chester selling, 5 AM warning, sleep saving, Aquaflux, Hellkitten form, early money and beginner mistakes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Moonlight Peaks first Blood Grapes planting route with shovel, seeds and watering can.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonlight Peaks Beginner Guide",
    description:
      "Use this Moonlight Peaks beginner guide for Blood Grapes, Town Hall, Chester, sleep saving, Aquaflux, Hellkitten form and early money.",
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
        "Wake Orlock, accept the Blood Grape task, plant and water the first crops, then go into town and register at Town Hall. Do not spend the whole first night clearing the farm.",
    },
  },
  {
    "@type": "Question",
    name: "Should I clear the whole farm early?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "No. Clear enough space for the first crop patch and the walking paths you actually use. Save full cleanup for later when better tools and clearer farm plans make it more efficient.",
    },
  },
  {
    "@type": "Question",
    name: "How do I sell items?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Use Chester after the Town Hall route sends him to your plot. He works as the shipping bin, and you can remove items before sleeping if you change your mind.",
    },
  },
  {
    "@type": "Question",
    name: "What time do I need to sleep?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "When the 5:00 a.m. warning hits, start heading home. 6:00 a.m. is the pass-out point.",
    },
  },
  {
    "@type": "Question",
    name: "Does Moonlight Peaks autosave?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The safe habit is to sleep before quitting, because the game saves when you sleep.",
    },
  },
  {
    "@type": "Question",
    name: "What happens when stamina runs out?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "You do not instantly pass out from stamina loss. You simply cannot keep doing stamina-based actions. Use the remaining time for walking, talking, map checks, foraging, or selling.",
    },
  },
  {
    "@type": "Question",
    name: "When do I unlock Aquaflux?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Aquaflux comes later through the magic progression around Luna, the Dinner Party route, and the wand repair path. Do not expect full spell use on night one.",
    },
  },
  {
    "@type": "Question",
    name: "How does spell casting work?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Spell casting uses the wand and a circular input pattern. If you forget the pattern, check your magic book instead of guessing during a busy night.",
    },
  },
  {
    "@type": "Question",
    name: "What does Hellkitten form do?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Hellkitten form is a later shapeshift that helps movement and farm prep. Once unlocked, it can move faster and prepare dirt with lower energy cost than normal tool work.",
    },
  },
  {
    "@type": "Question",
    name: "Should I buy the well first?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Often yes. The well costs 1,500 gold and helps watering, but use the Early Resources and Tool Upgrades Guide for the full purchase timing.",
    },
  },
  {
    "@type": "Question",
    name: "Should I buy the barn in the first week?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Usually not as an impulse buy. The barn costs 4,000 gold and starts the animal loop, so use the Barn and Animals Guide before committing.",
    },
  },
  {
    "@type": "Question",
    name: "When should I buy the inventory upgrade?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Remember the number: 2,000 gold for +10 slots. Buy timing depends on how soon you are doing long mine, fishing, forage, or dig-spot routes.",
    },
  },
  {
    "@type": "Question",
    name: "Why do I see bugs but have no bug net?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "That is normal. The bug net unlocks later through character progression. Keep meeting residents, checking map sparkles, and progressing town events.",
    },
  },
  {
    "@type": "Question",
    name: "Should I worry about Nokturna immediately?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "No. Nokturna matters later, but I do not route the first week around the card game while basic money, tools, town progress, and feature unlocks are still open.",
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
          item: `${siteUrl}/moonlight-peaks`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
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
        "Moonlight Peaks Beginner Guide: First Week Route, Blood Grapes, Town Hall, Chester, Aquaflux and Hellkitten Form",
      description:
        "A player-focused Moonlight Peaks beginner guide for the first week route, Blood Grapes, Orlock, Victor, Town Hall, Chester selling, stamina, mana, sleep saving, 5:00 a.m. warning, 6:00 a.m. pass-out timing, Aquaflux, Hellkitten form, early money, safe selling, first purchase reminders, storage, gifts, Nokturna awareness, and common beginner mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-08",
      dateModified: "2026-07-08",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Moonlight Peaks" },
        { "@type": "Thing", name: "Moonlight Peaks beginner guide" },
        { "@type": "Thing", name: "Moonlight Peaks first week" },
        { "@type": "Thing", name: "Moonlight Peaks Blood Grapes" },
        { "@type": "Thing", name: "Moonlight Peaks Orlock" },
        { "@type": "Thing", name: "Moonlight Peaks Victor" },
        { "@type": "Thing", name: "Moonlight Peaks Town Hall" },
        { "@type": "Thing", name: "Moonlight Peaks Chester" },
        { "@type": "Thing", name: "Moonlight Peaks stamina" },
        { "@type": "Thing", name: "Moonlight Peaks mana" },
        { "@type": "Thing", name: "Moonlight Peaks sleep save" },
        { "@type": "Thing", name: "Moonlight Peaks 5 AM warning" },
        { "@type": "Thing", name: "Moonlight Peaks Aquaflux" },
        { "@type": "Thing", name: "Moonlight Peaks Hellkitten form" },
        { "@type": "Thing", name: "Moonlight Peaks early money" },
        { "@type": "Thing", name: "Moonlight Peaks well" },
        { "@type": "Thing", name: "Moonlight Peaks inventory upgrade" },
        { "@type": "Thing", name: "Moonlight Peaks barn" },
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
          title="Moonlight Peaks Beginner Guide"
          description="Start the first week with Blood Grapes, Town Hall, Chester selling, stamina and sleep rules, Aquaflux awareness, Hellkitten form, early money and safe first purchases."
          gameTitle="Moonlight Peaks"
          gameHref="/moonlight-peaks"
          breadcrumbBaseHref="/moonlight-peaks"
          breadcrumbBaseLabel="Moonlight Peaks Guide"
          updatedAt="July 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}