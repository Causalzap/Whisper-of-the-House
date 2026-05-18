import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BiomodsGuideContent from "@/data/subnautica-2/biomods-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/biomods-guide`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-bioscanner-fragment-scan.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-biomods-first-biolab.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-bioscanner-wreck-entrance-73.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-bioscanner-repair-door.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-biomods-pathfinder-trail.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-biomods-sea-skimmer-ground-speed.webp`,
];

const toc = [
  { id: "how-biomods-work", label: "How Biomods work" },
  { id: "starter-biomods", label: "Starter Biomods" },
  { id: "how-to-get-bioscanner", label: "Get the Bioscanner" },
  { id: "bioscanner-route", label: "Bioscanner route" },
  { id: "craft-bioscanner", label: "Craft the Bioscanner" },
  { id: "all-active-biomods", label: "Active Biomods" },
  { id: "all-passive-biomods", label: "Passive Biomods" },
  { id: "best-biomods-by-situation", label: "Best combos" },
  { id: "unlock-order", label: "Unlock order" },
  { id: "common-problems", label: "Troubleshooting" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/subnautica-2", label: "Subnautica 2 Guide" },
  { href: "/subnautica-2/what-to-do-first", label: "What to Do First" },
  { href: "/subnautica-2/early-resources", label: "Early Resources" },
  { href: "/subnautica-2/navigation-guide", label: "Navigation Guide" },
  { href: "/subnautica-2/collector-leviathan", label: "Collector Leviathan" },
  { href: "/subnautica-2/tadpole-submarine", label: "Tadpole Submarine" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Biomods Guide: Best Biomods & Bioscanner",
  description:
    "Unlock every Subnautica 2 Biomod, get the Bioscanner, find active and passive Biomod scan targets, and choose the best Biomod combos for each route.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Biomods Guide: Best Biomods & Bioscanner",
    description:
      "A player-first Subnautica 2 Biomods guide covering the Bioscanner route, all active and passive Biomods, unlock requirements, locations, and best combos.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 Bioscanner fragment scan inside the wreck beyond the Alien Ruins route.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Biomods Guide: Best Biomods & Bioscanner",
    description:
      "Get the Bioscanner, rescan Biomod targets, and pick the best active and passive Biomods for exploration, caves, predators, and resource farming.",
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
          name: "Biomods Guide",
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
        "Subnautica 2 Biomods Guide: Best Biomods, Bioscanner Route, Active Biomods and Passive Biomods",
      description:
        "A complete Subnautica 2 Biomods guide explaining how Biomods work, how to get the Bioscanner, where to find the Bioscanner wreck beyond the Alien Ruins, how to craft the Bioscanner at the Modification Station, which creatures and plants unlock active and passive Biomods, which Biomods are best for caves, predators, food, water, and resource farming, and why normal Scanner entries must be rescanned with the Bioscanner.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-18",
      dateModified: "2026-05-18",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Biomods" },
        { "@type": "Thing", name: "Bioscanner" },
        { "@type": "Thing", name: "Active Biomods" },
        { "@type": "Thing", name: "Passive Biomods" },
        { "@type": "Thing", name: "Sea Skimmer" },
        { "@type": "Thing", name: "Pathfinder" },
        { "@type": "Thing", name: "Sonic Echo" },
        { "@type": "Thing", name: "Modification Station" },
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
          name: "What is the best Biomod in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most players, Sea Skimmer is the best passive Biomod because faster seafloor travel improves almost every early route. For active Biomods, Pathfinder is best if you get lost and Dash is best if you want simple mobility.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock more Biomods in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Get the Bioscanner upgrade first, then scan the required creature or plant with the Bioscanner equipped. Normal Scanner records are not enough for most later Biomods.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I get the Bioscanner in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scan the Bioscanner fragment inside the wreck beyond the Alien Ruins route, roughly 1,800m east of the Lifepod or starting area in total. Bring a Repair Tool, a normal Scanner, and a safe oxygen or vehicle route. After scanning it, craft the upgrade at a Modification Station.",
          },
        },
        {
          "@type": "Question",
          name: "What materials does the Bioscanner need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Bioscanner is crafted at a Modification Station with 1 Scanner, 2 Enamelled Glass, and 3 Conduit Crystal. Enamelled Glass uses Glass plus Creature Enamel, and Creature Enamel is gathered from clump-like deposits around the Alien Ruins biome rather than from random starter-zone fish.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to rescan creatures after getting the Bioscanner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you scanned a creature with the normal Scanner before you had the Bioscanner, scan it again with the upgraded Scanner. Earlier normal scans do not retroactively unlock Biomods.",
          },
        },
        {
          "@type": "Question",
          name: "Which Biomod should I use for caves?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Pathfinder as your active Biomod. For the passive slot, choose Sea Skimmer if movement speed is the problem or Oxygen Control if you stop often to scan and read the cave.",
          },
        },
        {
          "@type": "Question",
          name: "Which Biomod helps against predators?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Electric Discharge when a predator is already close, Chum Cloud when you want to distract one before contact, Camouflage when you can stop moving early, or Threat Sense if surprise attacks are the problem.",
          },
        },
        {
          "@type": "Question",
          name: "Is Sonic Echo worth unlocking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but not as your first risky scan. Sonic Echo is excellent for highlighting resources, but the Collector Leviathan scan is dangerous. Wait until you have a vehicle, oxygen plan, and escape route.",
          },
        },
        {
          "@type": "Question",
          name: "Are food and water Biomods worth using?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes for long trips. Water Secretion is the easiest convenience pick, Water Retention stretches water items, Dermal Garden creates emergency food, and Slow Metabolism slows hunger loss without adding inventory clutter.",
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
          title="Subnautica 2 Biomods Guide: Best Biomods, Bioscanner Route, and Unlocks"
          description="Get the Bioscanner, unlock every active and passive Biomod, and choose the right Biomod setup for caves, predators, resource farming, food, water, and long exploration routes."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BiomodsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
