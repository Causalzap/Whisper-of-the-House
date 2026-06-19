import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CasualtiesUnknownContent from "@/data/casualties-unknown/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/casualties-unknown`;

const imageUrls = [
  `${siteUrl}/images/casualties-unknown/casualties-unknown-demo-start.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-health-screen.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-glowplant-fruit.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-rope-bio-chem-crafting.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-crafting-menu-foliage-bag.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-dirty-water.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-lockpicking-arc.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-code-crate-duffel-bag.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-resilience-increase.webp`,
];

const toc = [
  {
    id: "casualties-unknown-demo-guide",
    label: "Demo guide",
  },
  {
    id: "best-settings-before-your-first-run",
    label: "Best settings",
  },
  {
    id: "survival-systems-to-watch",
    label: "Survival systems",
  },
  {
    id: "inventory-hands-mouth-and-containers",
    label: "Inventory and containers",
  },
  {
    id: "canteen-glowplant-and-bio-chem-route",
    label: "Canteen route",
  },
  {
    id: "crafting-canvas-and-foliage-bag-route",
    label: "Crafting and bag route",
  },
  {
    id: "early-run-route",
    label: "Early run route",
  },
  {
    id: "movement-water-and-fall-damage",
    label: "Movement and water",
  },
  {
    id: "traps-enemies-and-darkness",
    label: "Traps and enemies",
  },
  {
    id: "lockpicking-guide",
    label: "Lockpicking",
  },
  {
    id: "loot-crates-and-blueprints",
    label: "Loot and blueprints",
  },
  {
    id: "code-crate-tips",
    label: "Code crates",
  },
  {
    id: "depth-progression",
    label: "Depth progression",
  },
  {
    id: "strength-resilience-intelligence-and-stats",
    label: "Stats",
  },
  {
    id: "common-mistakes",
    label: "Common mistakes",
  },
  {
    id: "what-is-limited-in-the-demo",
    label: "Demo limits",
  },
  {
    id: "should-you-wishlist-casualties-unknown",
    label: "Should you wishlist it?",
  },
  {
    id: "what-to-read-next",
    label: "What to read next",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/steam-next-fest",
    label: "Compare More Steam Next Fest Demos",
  },
  {
    href: "/iron-nest",
    label: "Try a Slower Systems Demo After Casualties Unknown",
  },
  {
    href: "/bombanana",
    label: "Try a Chaotic Co-op Demo After Casualties Unknown",
  },
];

export const metadata: Metadata = {
  title: "Casualties Unknown Demo Guide: Canteen & Crafting",
  description:
    "Learn Casualties Unknown demo canteen route, glowplants, bio-chem fluid, crafting, STR/RES/INT, lockpicking, dirty water and survival tips.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Casualties Unknown Demo Guide: Canteen, Glowplants, Crafting, Stats and Survival Tips",
    description:
      "Learn how to survive the Casualties Unknown demo with the canteen route, glowplant fruit, bio-chem fluid, plastic chunks, canvas, foliage bag protection, Ctrl item labels, lockpicking, dirty water, code crates, STR/RES/INT, traps, enemies and common early mistakes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Casualties Unknown demo start showing the character before the descent.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casualties Unknown Demo Guide: Canteen & Crafting",
    description:
      "Learn the Casualties Unknown canteen route, glowplants, bio-chem fluid, crafting, stats, lockpicking, water risks and survival tips.",
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
          name: "Steam Next Fest",
          item: `${siteUrl}/steam-next-fest`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Casualties Unknown Demo Guide",
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
        "Casualties Unknown Demo Guide: Canteen Route, Glowplants, Bio-chem Fluid, Crafting, Stats and Survival Tips",
      description:
        "A player-focused Casualties Unknown demo guide covering the five-layer demo, no mid-run save pressure, early settings, health screen, STR, RES, INT, survival conditions, inventory, hands, mouth slot, canteen route, glowplant fruit, bio-chem fluid, plastic chunks, rope, canvas, foliage bag protection, Ctrl item labels, S-shaped exploration, dirty water, lockpicking, code crates, duffel bag rewards, blueprints, depth progression, traps, enemies, demo limits, common mistakes and Steam Next Fest wishlist advice.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-19",
      dateModified: "2026-06-19",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Casualties Unknown",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown demo guide",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown canteen",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown glowplant fruit",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown bio-chem fluid",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown plastic chunks",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown rope",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown canvas",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown foliage bag",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown lockpicking",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown code crates",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown duffel bag",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown dirty water",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown health screen",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown Strength",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown Resilience",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown Intelligence",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown traps",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown enemies",
        },
        {
          "@type": "Thing",
          name: "survival platformer",
        },
        {
          "@type": "Thing",
          name: "Steam Next Fest demo",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Casualties Unknown is a survival platformer where you descend through dangerous layers while managing movement, crafting, inventory, thirst, temperature, pain, bleeding, infection risk, exhaustion, loot, traps, enemies, and environmental hazards.",
          },
        },
        {
          "@type": "Question",
          name: "How many layers are in the Casualties Unknown demo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The full game is planned around eleven layers, and the demo lets you access five of them. The demo still includes the main survival and crafting systems, so it feels much larger than a short teaser.",
          },
        },
        {
          "@type": "Question",
          name: "Can you save during a Casualties Unknown run?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In the observed demo run, there is no clean mid-run save safety net. Plan enough time before starting because a good descent can last much longer than expected.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do first in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Search sideways before dropping deep, break safe plastic or rubber for plastic chunks, move your emergency light into a known slot, harvest glowplants, keep one glowplant fruit as backup light, work toward a canteen for bio-chem fluid, compress excess foliage into canvas, then make and protect a foliage bag.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the canteen important in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The canteen gives early liquid storage. That matters because bio-chem fluid is useful for further crafting, and crafting fluid without a proper container can waste the material.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a canteen in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The early canteen route uses plastic chunks, rope, and bio-chem fluid. Look for safe plastic or rubber pieces near the start, harvest glowplants for fruit and foliage, make rope, then craft bio-chem fluid when you can store it properly.",
          },
        },
        {
          "@type": "Question",
          name: "What is glowplant fruit for in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Glowplant fruit can help as a light-emitting item and can also feed into the bio-chem fluid route. Keep at least one as backup light before converting all extras into crafting materials.",
          },
        },
        {
          "@type": "Question",
          name: "Is foliage bag still worth making in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The foliage bag is still useful early storage, but it should not be your only priority. Make it after you have started the canteen route, and favorite it with F if available so you do not accidentally rip it.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I make canvas in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Canvas compresses foliage value into a lighter, cleaner material. It helps reduce loose foliage clutter and makes early crafting materials easier to carry.",
          },
        },
        {
          "@type": "Question",
          name: "How do I show nearby item labels in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Hold Ctrl to show nearby item labels. This is especially useful in dark areas, cluttered terrain, or after a fall scatters food, medicine, materials, and gear.",
          },
        },
        {
          "@type": "Question",
          name: "How do I open the crafting menu in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Press C to open crafting. The crafting menu can use some nearby materials, so check the recipe list even if every ingredient is not currently in your hand.",
          },
        },
        {
          "@type": "Question",
          name: "Why is storage so important in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Without containers, you are forced to juggle items between hands, mouth, and the ground. A bag helps with items, while a canteen helps with liquids such as bio-chem fluid.",
          },
        },
        {
          "@type": "Question",
          name: "How do hands and mouth slots work in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your character can hold items in hands and may hold some items in the mouth. This can free a hand, but it also makes item management more physical and easier to mess up near ledges.",
          },
        },
        {
          "@type": "Question",
          name: "How do I check health in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the health screen to check body conditions such as pain, bleeding, infection risk, dirt, exhaustion, and other status problems.",
          },
        },
        {
          "@type": "Question",
          name: "How does lockpicking work in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Lockpicking uses an arc-style minigame. Move carefully, stop when you feel resistance, and adjust slowly. Forcing the lock can break your nail and injure you.",
          },
        },
        {
          "@type": "Question",
          name: "Why did one fall ruin my Casualties Unknown run?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Falls can cause pain, confusion, bleeding, lost items, waterlogging, or separation from your light, canteen, and bag. Casualties Unknown often turns one movement mistake into several survival problems.",
          },
        },
        {
          "@type": "Question",
          name: "Is water safe in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Water can reduce one danger but create wet, chilly, waterlogged, dirty, or recovery problems. Do not treat water as a safe landing or safe drink unless you know what it is.",
          },
        },
        {
          "@type": "Question",
          name: "Are there enemies and traps in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The demo can include traps, turrets, hostile survivors, and environmental hazards. Do not treat the descent as pure platforming.",
          },
        },
        {
          "@type": "Question",
          name: "What do blueprints do in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Blueprints can teach recipes and may increase intelligence when used. Read them when found instead of carrying them forever.",
          },
        },
        {
          "@type": "Question",
          name: "What does resilience do in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Resilience is described as physical endurance and mental fortitude. It helps stamina regeneration and lowers the effects of pain.",
          },
        },
        {
          "@type": "Question",
          name: "What does strength do in Casualties Unknown?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The health/stat screen shows Strength alongside Resilience and Intelligence, but the exact Strength formula is not confirmed from this demo observation. Based on the stat name and survival context, Strength most likely relates to physical handling, carrying pressure, or strength-based actions, but treat that as a testing note rather than a confirmed build rule.",
          },
        },
        {
          "@type": "Question",
          name: "Is Casualties Unknown good for Steam Next Fest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you like hard survival platformers with crafting, physics, body-condition management, enemies, traps, replayable descents, and lots of ways for a run to go wrong.",
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
          title="Survive Casualties Unknown Without Losing the Run Early"
          description="Use this Casualties Unknown demo guide to build the canteen route, manage glowplants, bio-chem fluid, crafting, containers, stats, lockpicking, dirty water, traps, enemies, code crates and early survival mistakes."
          gameTitle="Casualties Unknown"
          gameHref="/casualties-unknown"
          breadcrumbBaseHref="/steam-next-fest"
          breadcrumbBaseLabel="Steam Next Fest"
          updatedAt="June 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CasualtiesUnknownContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
