import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RaidDefenseGuideContent from "@/data/romestead/raid-defense-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/romestead/raid-defense-guide`;

const imageUrls = [
  `${siteUrl}/images/romestead/romestead-blacksmith-torch-defense.webp`,
  `${siteUrl}/images/romestead/romestead-night-raid-torches-roads.webp`,
  `${siteUrl}/images/romestead/romestead-natural-barrier-chokepoint.webp`,
  `${siteUrl}/images/romestead/romestead-town-raid-warning.webp`,
  `${siteUrl}/images/romestead/romestead-town-report-after-raid.webp`,
  `${siteUrl}/images/romestead/romestead-town-defense-value.webp`,
];

const toc = [
  { id: "when-raids-start", label: "When raids start" },
  { id: "fallen-targets", label: "Fallen targets" },
  { id: "light-torches", label: "Torches first" },
  { id: "compact-layout", label: "Compact layout" },
  { id: "natural-barriers", label: "Natural barriers" },
  { id: "walls-traps", label: "Walls and traps" },
  { id: "raid-prep-checklist", label: "Raid checklist" },
  { id: "during-raid", label: "During a raid" },
  { id: "citizens-loyalty", label: "Citizens and loyalty" },
  { id: "defense-value", label: "Defense Value" },
  { id: "raid-scaling", label: "Raid scaling" },
  { id: "after-raid", label: "After a raid" },
  { id: "coop-defense", label: "Co-op defense" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/romestead", label: "Romestead Guide" },
  {
    href: "/romestead/first-day-base-building",
    label: "First Day Build Order and Base Building Guide",
  },
  {
    href: "/romestead/base-layout-guide",
    label: "Town Layout and Base Setup Guide",
  },
  {
    href: "/romestead/farmstead-workers-food-logistics",
    label: "Farmstead, Workers, Food and Logistics Guide",
  },
  {
    href: "/romestead/gods-offerings-boss-progression",
    label: "Gods, Offerings, Sacrifice and Altar Rewards Guide",
  },
  {
    href: "/romestead/dungeon-traps-death-recovery",
    label: "Dungeon, Traps and Death Recovery Guide",
  },
];

export const metadata: Metadata = {
  title: "Romestead Night Raids: Blacksmith Defense, Torches & Defense Value",
  description:
    "Defend against Romestead night raids by protecting the Blacksmith and Farmstead, placing torches before walls, checking Defense Value, reading Town Reports and scaling your defenses.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Romestead Night Raids: Blacksmith Defense, Torches and Defense Value",
    description:
      "Protect Blacksmith and Farmstead, place torches before walls, check Defense Value, read Town Reports, and scale your defenses as raids get harder.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Romestead Blacksmith protected with torches and early raid defenses.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Romestead Night Raids: Blacksmith Defense, Torches and Defense Value",
    description:
      "Learn what the Fallen target, why torches come before walls, how to protect Blacksmith and Farmstead, and how to use Defense Value and Town Reports after raids.",
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
          name: "Romestead Guide",
          item: `${siteUrl}/romestead`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Night Raid Defense",
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
        "Romestead Night Raids: Blacksmith Defense, Torches, Fallen Targets and Defense Value",
      description:
        "A player-focused Romestead night raid defense guide explaining what the Fallen target, why Blacksmith and Farmstead need protection, why torches should come before full walls, how compact layout and natural barriers reduce raid pressure, how to use Defense Value at the Workbench, how to read Town Reports after raids, how citizens can be affected by injuries and loyalty loss, how raids scale as the town grows, and how Mars-style automated defenses such as Scorpios can support later raid defense.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-06",
      dateModified: "2026-06-06",
      about: [
        { "@type": "VideoGame", name: "Romestead" },
        { "@type": "Thing", name: "Romestead Night Raids" },
        { "@type": "Thing", name: "Raid Defense" },
        { "@type": "Thing", name: "The Fallen" },
        { "@type": "Thing", name: "Blacksmith Defense" },
        { "@type": "Thing", name: "Farmstead Defense" },
        { "@type": "Thing", name: "Torches" },
        { "@type": "Thing", name: "Defense Value" },
        { "@type": "Thing", name: "Town Report" },
        { "@type": "Thing", name: "Citizen Loyalty" },
        { "@type": "Thing", name: "Walls" },
        { "@type": "Thing", name: "Traps" },
        { "@type": "Thing", name: "Natural Barriers" },
        { "@type": "Thing", name: "Mars" },
        { "@type": "Thing", name: "Scorpios" },
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
          name: "What do the Fallen target in Romestead raids?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Fallen pressure production buildings. Protect the Blacksmith first, then Farmstead, Food Storage, housing, and the citizen core around them.",
          },
        },
        {
          "@type": "Question",
          name: "Do torches help against the Fallen?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Light helps deter the Fallen, so torches should go around Blacksmith, Farmstead, entrances, roads, and choke points before you spend everything on a full wall.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build torches or walls first in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build torches first around key buildings, then use walls to fill the dark approach gaps. Walls are still useful, but they work best after you know what you are protecting.",
          },
        },
        {
          "@type": "Question",
          name: "How do I defend against raids in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Protect Blacksmith and Farmstead, keep your town compact, light the main routes, build walls on direct approach paths, check Defense Value, and fight near your prepared defenses.",
          },
        },
        {
          "@type": "Question",
          name: "What is Defense Value in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Defense Value is a town defense signal you can check at the Workbench. Use it to confirm whether your torches, walls, traps, and defensive structures are actually improving the settlement.",
          },
        },
        {
          "@type": "Question",
          name: "Why did my citizens lose loyalty after a raid?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A bad raid can affect citizen status, injuries, or loyalty. Read the Town Report after the attack and fix the weak point before the next night.",
          },
        },
        {
          "@type": "Question",
          name: "Do raids get harder later in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. As your town grows, you need wider torch coverage, stronger walls on real approach routes, and eventually better defensive tools or god progression support.",
          },
        },
        {
          "@type": "Question",
          name: "What does Mars do for raid defense in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mars progression can lead toward automated defense tools such as Scorpios. If raids are your main bottleneck, check the Mars route instead of only adding more manual walls.",
          },
        },
        {
          "@type": "Question",
          name: "What should I check after a raid in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Clear remaining enemies, read the Town Report, check citizen injuries and loyalty, repair broken defenses, restock Food Storage, and improve the route where enemies reached your town.",
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
          title="Romestead Night Raids: Blacksmith Defense, Torches and Defense Value"
          description="Protect Blacksmith and Farmstead, place torches before walls, check Defense Value, read Town Reports, and scale your defenses as raids get harder."
          gameTitle="Romestead"
          gameHref="/romestead"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RaidDefenseGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}