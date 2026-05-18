import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SonicResonatorContent from "@/data/subnautica-2/sonic-resonator-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/sonic-resonator-guide`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-sonic-resonator-crafting-recipe.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-sonic-resonator-fragment-nnw-cave.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-sonic-resonator-fragment-spider-dome.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-sonic-resonator-large-deposit.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-feedback-resonator-green-pool-fragment.webp`,
];

const toc = [
  { id: "why-sonic-resonator-matters", label: "Why it matters" },
  { id: "best-fragment-route", label: "Best fragment route" },
  { id: "old-habitat-fragments", label: "Old Habitat" },
  { id: "alternate-fragment-locations", label: "Alternate fragments" },
  { id: "crafting-recipe", label: "Crafting recipe" },
  { id: "how-to-use-sonic-resonator", label: "How to use it" },
  { id: "what-can-sonic-resonator-mine", label: "What to mine first" },
  { id: "bloom-biofilm-and-adaptations", label: "Bloom & adaptations" },
  { id: "feedback-resonator", label: "Feedback Resonator" },
  { id: "feedback-fragment-locations", label: "Feedback fragments" },
  { id: "feedback-resonator-recipe", label: "Feedback recipe" },
  { id: "recommended-progression-order", label: "Progression order" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/subnautica-2", label: "Subnautica 2 Guide" },
  { href: "/subnautica-2/what-to-do-first", label: "What to Do First" },
  { href: "/subnautica-2/early-resources", label: "Early Resources" },
  {
    href: "/subnautica-2/fully-functional-fabricator",
    label: "Fully Functional Fabricator Fix",
  },
  { href: "/subnautica-2/biomods-guide", label: "Biomods Guide" },
  { href: "/subnautica-2/tadpole-submarine", label: "Tadpole Submarine" },
  { href: "/subnautica-2/navigation-guide", label: "Navigation Guide" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Sonic Resonator Guide: Fragments & Recipe",
  description:
    "Find Sonic Resonator fragments in Subnautica 2, craft the tool, mine large deposits, clear Bloom Biofilm, and upgrade it into the Feedback Resonator.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Sonic Resonator Guide: Fragments & Recipe",
    description:
      "A player-first guide to Sonic Resonator fragments, Old Habitat unlock route, crafting materials, mining priorities, Bloom blockers, and the Feedback Resonator upgrade.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 Sonic Resonator crafting recipe showing Basic Battery, Titanium Ingots, Lead, and Wiring Kit.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Sonic Resonator Guide: Fragments & Recipe",
    description:
      "Scan Sonic Resonator fragments, craft the tool at your base, mine the right deposits first, and plan the Feedback Resonator upgrade route.",
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
          name: "Sonic Resonator Guide",
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
        "Subnautica 2 Sonic Resonator Guide: Fragment Locations, Recipe, Mining Targets, and Feedback Resonator Upgrade",
      description:
        "A complete Subnautica 2 Sonic Resonator guide explaining where to scan Sonic Resonator fragments, why Old Habitat is the fastest route, how to craft the Sonic Resonator at a player-built base Fabricator, which materials block the recipe, how to use the tool on large deposits and Bloom Biofilm, what to mine first, and how to progress into the Feedback Resonator upgrade with Cicada Wreck, Metal Farms, Creature Enamel, Conduit Crystal, Celestine, and Strontium.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-18",
      dateModified: "2026-05-18",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Sonic Resonator" },
        { "@type": "Thing", name: "Feedback Resonator" },
        { "@type": "Thing", name: "Old Habitat" },
        { "@type": "Thing", name: "Bloom Biofilm" },
        { "@type": "Thing", name: "Large Mineral Deposits" },
        { "@type": "Thing", name: "Cicada Wreck" },
        { "@type": "Thing", name: "Metal Farms" },
        { "@type": "Thing", name: "Creature Enamel" },
        { "@type": "Thing", name: "Strontium" },
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
          name: "How many Sonic Resonator fragments do I need in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need two Sonic Resonator fragments. The fastest route is Old Habitat, where both fragments can be scanned in one trip.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the best Sonic Resonator fragment location?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Old Habitat is the best Sonic Resonator fragment location because it has two fragments inside and sits roughly 370 to 420 meters north or north-northwest of the Lifepod. The north-northwest cave and southwest Spider Dome fragments are useful backups.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Sonic Resonator recipe in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In the current Early Access build, the Sonic Resonator recipe is 1 Basic Battery, 2 Titanium Ingots, 2 Lead, and 1 Wiring Kit.",
          },
        },
        {
          "@type": "Question",
          name: "Why can I not craft the Sonic Resonator after scanning it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check that you have the required materials and that you are crafting at a Fabricator in a player-built base rather than the basic Lifepod Fabricator. You may also need your Processor chain online for Titanium Ingots.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Sonic Resonator do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Sonic Resonator breaks large ore deposits, clears Bloom Biofilm and certain infected blockers, and becomes the base item for the Feedback Resonator upgrade.",
          },
        },
        {
          "@type": "Question",
          name: "What should I mine first with the Sonic Resonator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mine the resource that solves your current blocker. Prioritize Titanium for base expansion, Lead for tool chains, Copper, Silver, and Quartz for electronics and glass, then save Creature Enamel and Celestine for the Feedback Resonator phase.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I get Strontium for the Feedback Resonator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Farm Celestine in the Alien Ruins biome, then process Celestine into Strontium with your Processor.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Sonic Resonator a weapon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not really. It can sometimes disrupt smaller threats, but its main purpose is mining and clearing breakable progression blockers. Use movement, flares, and your vehicle as your main survival tools.",
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
          title="Subnautica 2 Sonic Resonator Guide: Fragments, Recipe, Mining, and Feedback Upgrade"
          description="Scan the Sonic Resonator fragments, craft the tool at your base, use it on the right deposits first, clear Bloom blockers, and plan the Feedback Resonator upgrade route."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SonicResonatorContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
