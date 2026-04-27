import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FractureFieldGuideContent from "@/data/fracture-field/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/fracture-field`;

export const metadata: Metadata = {
  title: "Fracture Field Complete Walkthrough & Guide 2026",
  description:
    "Complete Fracture Field walkthrough covering early upgrades, World Fracture, Reality Shatter, Drone Hub automation, layer walls, achievements, known bugs, save fixes, and 100% completion.",
  alternates: {
    canonical: pageUrl,
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
          name: "Fracture Field Guide",
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
        "Fracture Field Complete Walkthrough & Guide 2026: Best Upgrades, Prestige, Progression and Fixes",
      description:
        "This Fracture Field complete walkthrough and guide explains what to do first, the best early upgrades, when to World Fracture, how Drone Hub automation works, what Reality Shatter does, how to break through layer walls such as Iron, Gold, and Obsidian, how to approach 100% completion, and how to handle known bugs such as corrupted saves, black pillars, low FPS, Drone Hub reset issues, and Obsidian scaling problems.",
      image: [
        `${siteUrl}/images/fracture-field/fracture-field-walkthrough-guide.webp`,
        `${siteUrl}/images/fracture-field/first-world-fracture.webp`,
        `${siteUrl}/images/fracture-field/reality-shatter-guide.webp`,
        `${siteUrl}/images/fracture-field/obsidian-wall-progression.webp`,
        `${siteUrl}/images/fracture-field/fracture-field-achievements.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-27",
      about: [
        {
          "@type": "VideoGame",
          name: "Fracture Field",
        },
        {
          "@type": "Thing",
          name: "Fracture Field walkthrough",
        },
        {
          "@type": "Thing",
          name: "Fracture Field guide",
        },
        {
          "@type": "Thing",
          name: "Fracture Field complete walkthrough",
        },
        {
          "@type": "Thing",
          name: "World Fracture",
        },
        {
          "@type": "Thing",
          name: "Reality Shatter",
        },
        {
          "@type": "Thing",
          name: "Drone Hub",
        },
        {
          "@type": "Thing",
          name: "Core Fragments",
        },
        {
          "@type": "Thing",
          name: "Reality Shards",
        },
        {
          "@type": "Thing",
          name: "Layer progression",
        },
        {
          "@type": "Thing",
          name: "Iron wall",
        },
        {
          "@type": "Thing",
          name: "Gold wall",
        },
        {
          "@type": "Thing",
          name: "Obsidian wall",
        },
        {
          "@type": "Thing",
          name: "Fracture Field achievements",
        },
        {
          "@type": "Thing",
          name: "100% completion",
        },
        {
          "@type": "Thing",
          name: "Fracture Field known bugs and fixes",
        },
        {
          "@type": "Thing",
          name: "Fracture Field corrupted save fix",
        },
        {
          "@type": "Thing",
          name: "Fracture Field save backup",
        },
        {
          "@type": "Thing",
          name: "Fracture Field black pillars fix",
        },
        {
          "@type": "Thing",
          name: "Fracture Field low FPS fix",
        },
        {
          "@type": "Thing",
          name: "Fracture Field Obsidian health scaling bug",
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
          name: "Is this a complete Fracture Field walkthrough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This is a complete Fracture Field walkthrough and guide for the main progression route, covering early upgrades, World Fracture, Drone Hub automation, Reality Shatter, late-game progression, known fixes, and 100% completion goals.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do first in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start by improving basic damage, Stone income, and Stone capacity. Then unlock Clay, Sandstone, and Quartz when the previous layer is stable.",
          },
        },
        {
          "@type": "Question",
          name: "When should I do my first World Fracture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do your first World Fracture when your current layer progress slows and your pending Core Fragments can buy useful permanent upgrades. Do not wait forever for a perfect first reset.",
          },
        },
        {
          "@type": "Question",
          name: "What is Reality Shatter in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reality Shatter is a deeper prestige reset that gives Reality Shards. It is powerful, but you should wait until you can afford useful upgrades before using it.",
          },
        },
        {
          "@type": "Question",
          name: "Are drones worth it in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but drones are much better after you have more drone slots, better uptime, priority control, and reset upgrades. Early drones can feel weak because the system has not scaled yet.",
          },
        },
        {
          "@type": "Question",
          name: "Why am I stuck at Iron?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Iron is usually a damage and hardness wall. Buy more Fracture, Pierce, layer upgrades, and reset upgrades instead of forcing a slow run forever.",
          },
        },
        {
          "@type": "Question",
          name: "Does Fracture Field have a 100% walkthrough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A full 100% route should cover capacity achievements, drone achievements, bomb achievements, World Fracture goals, Reality Shatter goals, max hit speed, and late-game layer-transition achievements.",
          },
        },
        {
          "@type": "Question",
          name: "How do I fix a Fracture Field corrupted save?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Update Fracture Field to the latest version, restart the game, and check whether the save loads normally. If you are experimenting with resets or long idle sessions, back up your save before major prestige decisions.",
          },
        },
        {
          "@type": "Question",
          name: "How do I back up my Fracture Field save file?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Back up your save before major resets, especially before Reality Shatter or long idle sessions. The exact save location can vary by operating system and Steam setup, so check the game's local files, Steam userdata folder, or any in-game export or save option if available.",
          },
        },
        {
          "@type": "Question",
          name: "Why is currency not zero after prestige in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If currency remains after a prestige reset, update to the latest version first. This was one of the early reset-related issues players searched for, and the safest fix is to confirm you are not playing an outdated build.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Drone Hub not resetting correctly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check your current version and whether you have any persistence or retention behavior active. Drone Hub behavior can change after patches or Reality Shatter upgrades, so compare the reset result against your current upgrade tree before assuming the save is broken.",
          },
        },
        {
          "@type": "Question",
          name: "How do I fix black pillars or widescreen display issues in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Try changing resolution, toggling fullscreen or windowed mode, and updating to the latest build. If the issue remains, use a standard 16:9 resolution as a temporary workaround.",
          },
        },
        {
          "@type": "Question",
          name: "How do I fix low FPS or performance issues in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disable floating damage numbers or reduce visual clutter if the screen is full of drones, rocks, and currency text. Late-game runs can create heavy visual spam, so reducing display effects can make the game easier to read and smoother to run.",
          },
        },
        {
          "@type": "Question",
          name: "Was the Obsidian health scaling bug fixed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Update to the latest version before judging Obsidian progression. Obsidian is also a real late-game wall, so if the layer feels impossible, compare your version, Reality Shatter upgrades, Pierce, hardness reduction, and rock scaling before assuming it is only a bug.",
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
          title="Fracture Field Complete Walkthrough & Guide 2026: Best Upgrades, Prestige and Progression"
          description="Follow this Fracture Field walkthrough from your first Stone upgrades to World Fracture, Drone Hub automation, Reality Shatter, layer progression, known bug fixes, and 100% completion tips."
          gameTitle="Fracture Field"
          gameHref="/fracture-field"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 27, 2026"
          toc={[
            {
              id: "fracture-field-walkthrough-route",
              label: "Walkthrough route",
            },
            {
              id: "what-to-do-first",
              label: "What to do first",
            },
            {
              id: "best-early-upgrades",
              label: "Best early upgrades",
            },
            {
              id: "when-to-unlock-new-layers",
              label: "Unlocking layers",
            },
            {
              id: "first-world-fracture",
              label: "First World Fracture",
            },
            {
              id: "world-fracture-vs-reality-shatter",
              label: "World Fracture vs Reality Shatter",
            },
            {
              id: "drone-hub-basics",
              label: "Drone Hub basics",
            },
            {
              id: "progression-walls",
              label: "Progression walls",
            },
            {
              id: "achievement-and-100-percent-route",
              label: "Achievements and 100%",
            },
            {
              id: "known-bugs-and-fixes",
              label: "Known bugs and fixes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/fracture-field/beginner-walkthrough",
              label: "Fracture Field Beginner Walkthrough",
            },
            {
              href: "/fracture-field/prestige-guide",
              label: "Fracture Field Prestige Guide",
            },
            {
              href: "/fracture-field/progression-guide",
              label: "Fracture Field Progression Guide",
            },
            {
              href: "/fracture-field/achievements-guide",
              label: "Fracture Field Achievements Guide",
            },
          ]}
        >
          <FractureFieldGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}