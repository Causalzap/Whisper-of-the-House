import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MaterialsUpgradesGuideContent from "@/data/burglin-gnomes/materials-upgrades-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/burglin-gnomes/materials-upgrades-guide`;

const imageUrls = [
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-stockpile-materials.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-plasto-plastic-item.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-potion-station.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-world-danger-meter.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-house-upgrade.webp`,
];

const toc = [
  { id: "burglin-gnomes-materials-upgrades-guide", label: "Materials guide" },
  { id: "material-name-reference", label: "Material names" },
  { id: "copy-paste-material-template", label: "Material card" },
  { id: "plasto-route", label: "Plasto route" },
  { id: "clonk-route", label: "Clonk route" },
  { id: "uncertain-materials", label: "Other materials" },
  { id: "crafting-costs", label: "Crafting costs" },
  { id: "upgrade-priority", label: "Upgrade priority" },
  { id: "spend-by-problem", label: "Spend by problem" },
  { id: "equipment-and-upgrades", label: "Equipment" },
  { id: "potion-station-repackager", label: "Potion Station" },
  { id: "world-danger-meter", label: "Danger meter" },
  { id: "house-upgrades", label: "House upgrades" },
  { id: "recommended-upgrade-route", label: "Upgrade route" },
  { id: "material-upgrade-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/burglin-gnomes",
    label: "Burglin' Gnomes Guide Hub",
  },
  {
    href: "/burglin-gnomes/beginner-guide",
    label: "Burglin' Gnomes Beginner Guide",
  },
  {
    href: "/burglin-gnomes/tasks-guide",
    label: "Burglin' Gnomes Tasks Guide",
  },
  {
    href: "/burglin-gnomes/survival-enemies-guide",
    label: "Burglin' Gnomes Survival and Enemies Guide",
  },
  {
    href: "/burglin-gnomes/co-op-guide",
    label: "Burglin' Gnomes Co-op Guide",
  },
];

export const metadata: Metadata = {
  title: "Burglin' Gnomes Materials & Upgrades Guide: Plasto, Clonk",
  description:
    "Find Plasto and Clonk, verify Stockpile materials, check crafting costs, and spend upgrades on movement, stealth, rescue, carry, and gear in Burglin' Gnomes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Burglin' Gnomes Materials and Upgrades Guide: Plasto, Clonk, Stockpile Names and Best Upgrade Order",
    description:
      "Learn how to find Plasto and Clonk, verify Stockpile materials, avoid wrong names like Clunk or Scraggle, check exact crafting costs, plan material runs, and choose upgrades for movement, stealth, rescue, carry capacity, Potion Station, Repackager, World danger meter, house upgrades, and advanced gear.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Burglin' Gnomes Stockpile menu showing Fraggles, Grabble, Clonk, Plasto, Scrapling, and Marble.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burglin' Gnomes Materials & Upgrades Guide",
    description:
      "Find Plasto and Clonk, check crafting costs, and spend materials on the upgrades that fix your failed runs.",
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
          name: "Burglin' Gnomes Guide",
          item: `${siteUrl}/burglin-gnomes`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Burglin' Gnomes Materials and Upgrades Guide",
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
        "Burglin' Gnomes Materials and Upgrades Guide: Plasto, Clonk, Stockpile Materials, Crafting Costs and Best Upgrade Priority",
      description:
        "A player-focused Burglin' Gnomes materials and upgrades guide explaining how to find Plasto in plastic-heavy rooms, how to gather Clonk from metal items, how to verify Stockpile material names like Fraggles, Grabble, Clonk, Plasto, Scrapling and Marble, why Clonk is not Clunk and Scrapling is not Scraggle, how to move material items outside for gather tasks, how to check exact crafting costs before farming, how to spend materials based on your failure point, and how to prioritize movement, stealth, rescue tools, carry capacity, crafting utility, Potion Station, Repackager, World danger meter, house upgrades and special gear.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-11",
      dateModified: "2026-06-11",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Burglin' Gnomes" },
        { "@type": "Thing", name: "Burglin' Gnomes materials guide" },
        { "@type": "Thing", name: "Burglin' Gnomes upgrades guide" },
        { "@type": "Thing", name: "Burglin' Gnomes Plasto" },
        { "@type": "Thing", name: "Burglin' Gnomes Clonk" },
        { "@type": "Thing", name: "Burglin' Gnomes Fraggles" },
        { "@type": "Thing", name: "Burglin' Gnomes Grabble" },
        { "@type": "Thing", name: "Burglin' Gnomes Scrapling" },
        { "@type": "Thing", name: "Burglin' Gnomes Marble" },
        { "@type": "Thing", name: "Burglin' Gnomes Stockpile" },
        { "@type": "Thing", name: "Burglin' Gnomes crafting costs" },
        { "@type": "Thing", name: "Burglin' Gnomes best upgrades" },
        { "@type": "Thing", name: "Burglin' Gnomes movement upgrade" },
        { "@type": "Thing", name: "Burglin' Gnomes stealth upgrade" },
        { "@type": "Thing", name: "Burglin' Gnomes carry capacity" },
        { "@type": "Thing", name: "Burglin' Gnomes rescue tools" },
        { "@type": "Thing", name: "Burglin' Gnomes Potion Station" },
        { "@type": "Thing", name: "Burglin' Gnomes Repackager" },
        { "@type": "Thing", name: "Burglin' Gnomes Grappling Hook" },
        { "@type": "Thing", name: "Burglin' Gnomes Glider" },
        { "@type": "Thing", name: "Burglin' Gnomes World danger meter" },
        { "@type": "Thing", name: "Burglin' Gnomes house upgrades" },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I get Plasto in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start in the bathroom, kids' room, or bedroom. Look for plastic toys, toothpaste, cream tubs, nail polish, DVD covers, sink items, cabinet items, and objects under beds or on tables. Move or throw the items outside until the task updates.",
          },
        },
        {
          "@type": "Question",
          name: "How do I gather Clonk in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Look for metal items, especially in the kitchen. Cans, toaster, kettle, cookware, tools, and other metal objects are good first tests. Open an exit route, reach the counter safely, and move the metal items outside to count them.",
          },
        },
        {
          "@type": "Question",
          name: "Is Plasto always in the same room?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Bathroom, kids' room, and bedroom are strong first places to search, but follow your current task list and item feedback.",
          },
        },
        {
          "@type": "Question",
          name: "Is Clonk the same as Clunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The Stockpile menu shows Clonk, not Clunk. Use Clonk in your notes so material routes match the in-game menu.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scrapling the same as Scraggle?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Use Scrapling. If your notes say Scraggle, update them to avoid confusion.",
          },
        },
        {
          "@type": "Question",
          name: "Should I buy carry capacity first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy carry capacity early only if you already extract consistently but leave loot or materials behind. If you die before extraction, movement, stealth, or rescue upgrades usually matter more.",
          },
        },
        {
          "@type": "Question",
          name: "Why do some guides say movement and carry first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "That advice is fine for stable teams. For beginners, movement fixes failed extractions first, and carry capacity moves up once the team already leaves safely.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know exact crafting costs?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open the crafting menu and check the item or upgrade directly. Do not rely on memory because costs can vary by item, level, or update.",
          },
        },
        {
          "@type": "Question",
          name: "Should I craft combat gear early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Early offensive gear often costs materials that could have improved movement, stealth, rescue, or carrying. Craft combat gear after the team can already extract safely.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next after the materials guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Tasks Guide if you need better material task routing, or the Co-op Guide if your team needs better hauling and role splitting.",
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
          title="Find the Right Materials Before You Waste Them"
          description="Route Plasto and Clonk, verify Stockpile names, check crafting costs, and spend materials on upgrades that fix your failed runs."
          gameTitle="Burglin' Gnomes"
          gameHref="/burglin-gnomes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MaterialsUpgradesGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
