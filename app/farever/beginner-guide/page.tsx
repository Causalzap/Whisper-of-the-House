import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FareverBeginnerContent from "@/data/farever/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/farever/beginner-guide`;

export const metadata: Metadata = {
  title:
    "Farever Beginner Guide: What to Do First, Mounts, Codeex, Weapons & Map",
  description:
    "The complete Farever beginner hub! Master Codeex, weapons, mounts, & fast travel. Plus: first dungeon orbs, salvage tips, and easy FPS/disconnect fixes.",
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
          name: "Farever Guide Hub",
          item: `${siteUrl}/farever`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Farever Beginner Guide",
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
        "Farever Beginner Guide: What to Do First, Early Mistakes, Mounts, Codeex, Weapons, and Map Completion",
      description:
        "This Farever beginner guide explains the first-hour route, beginner class choice, free mount setup, controls and combat basics, map completion, Codeex leveling, weapon skill upgrades, inventory and salvage, obelisks, underwater exploration, and first dungeon preparation.",
      image: [
        `${siteUrl}/images/farever/farever-class-selection.webp`,
        `${siteUrl}/images/farever/farever-free-mount-shop.webp`,
        `${siteUrl}/images/farever/farever-map-completion-question-marks.webp`,
        `${siteUrl}/images/farever/farever-codeex-monster-counter.webp`,
        `${siteUrl}/images/farever/farever-weapon-skill-upgrade.webp`,
        `${siteUrl}/images/farever/farever-spark-recycler.webp`,
        `${siteUrl}/images/farever/farever-obelisk-fast-travel.webp`,
        `${siteUrl}/images/farever/farever-underwater-blue-bar.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-07",
      dateModified: "2026-05-07",
      about: [
        {
          "@type": "VideoGame",
          name: "Farever",
        },
        {
          "@type": "Thing",
          name: "Farever beginner guide",
        },
        {
          "@type": "Thing",
          name: "Farever what to do first",
        },
        {
          "@type": "Thing",
          name: "Farever best beginner class",
        },
        {
          "@type": "Thing",
          name: "Farever Cleric",
        },
        {
          "@type": "Thing",
          name: "Farever Rogue",
        },
        {
          "@type": "Thing",
          name: "Farever Warrior",
        },
        {
          "@type": "Thing",
          name: "Farever Mage",
        },
        {
          "@type": "Thing",
          name: "Farever controls",
        },
        {
          "@type": "Thing",
          name: "Farever combat",
        },
        {
          "@type": "Thing",
          name: "Farever mount",
        },
        {
          "@type": "Thing",
          name: "Farever Codeex",
        },
        {
          "@type": "Thing",
          name: "Farever map completion",
        },
        {
          "@type": "Thing",
          name: "Farever weapon skills",
        },
        {
          "@type": "Thing",
          name: "Farever inventory",
        },
        {
          "@type": "Thing",
          name: "Farever Spark Recycler",
        },
        {
          "@type": "Thing",
          name: "Farever obelisk",
        },
        {
          "@type": "Thing",
          name: "Farever underwater exploration",
        },
        {
          "@type": "Thing",
          name: "Farever first dungeon",
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
          name: "What should I do first in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Claim your free mount, equip it from Collections, check your controls, open the map, follow gray question marks, unlock obelisks, check Codeex with L, and upgrade weapon skills when the green plus appears.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best beginner class in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cleric/Priest is the safest beginner pick because it has self-healing. Rogue is better for mobility, Warrior is the direct melee pick, and Mage is better if you want ranged magic and scepter-based skill swaps.",
          },
        },
        {
          "@type": "Question",
          name: "How do I equip my mount in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Claim the free mount from the shop, then equip it from Collections with Y. If the mount key does nothing, the mount is probably not equipped yet.",
          },
        },
        {
          "@type": "Question",
          name: "What key opens the Codeex in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Press L to open the Codeex by default.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if there is no quest log in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read NPC text, open the map, follow gray question marks, unlock obelisks, and use Codeex and map completion to guide your route.",
          },
        },
        {
          "@type": "Question",
          name: "How do I level early in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use map completion, Codeex milestones, chests, mini bosses, and dungeons. Do not just grind one enemy forever.",
          },
        },
        {
          "@type": "Question",
          name: "Should I kill every monster 20 times in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Treat 20-kill progress as a reward check. Push toward 20 only when the reward, resource, or route makes sense.",
          },
        },
        {
          "@type": "Question",
          name: "How do weapon skills work in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Weapons provide active skills, and switching weapons can change your skill bar. Upgrade weapon skills when the green plus appears.",
          },
        },
        {
          "@type": "Question",
          name: "Should I upgrade low-level weapons in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not spend too many materials on low-level weapon enhancement unless the weapon effect is worth keeping. Early skill upgrades are usually more important.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do with old gear in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Keep old gear until you reach the Spark Recycler, then recycle it into useful materials instead of discarding it.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get more inventory space in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy small pouches from the guild merchant and place them into your bag slots. Each small pouch adds 6 inventory slots.",
          },
        },
        {
          "@type": "Question",
          name: "What are lost packages for in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Right-click lost packages to turn them into completed packages, then hand them to the guild merchant for 100 gold.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best first profession in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Alchemist is the most practical first profession because it lets you craft minor healing potions, which helps classes or weapon setups without self-healing.",
          },
        },
        {
          "@type": "Question",
          name: "How do obelisks work in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Obelisks reveal zones, set respawn points, and unlock automatic travel routes. Interact with every obelisk when you reach a new area.",
          },
        },
        {
          "@type": "Question",
          name: "Can you swim in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not normally. You walk underwater, manage a blue breath bar, and start losing HP if the bar runs out. You can still double jump underwater.",
          },
        },
        {
          "@type": "Question",
          name: "Can I play Farever solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, much of the early game can be handled solo, especially with a safe class, potions, or self-healing setup. Farever is still online, so you will see other players and can group for content.",
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
          title="Farever Beginner Guide"
          description="Learn what to do first in Farever, including class choice, controls, mount setup, Codeex, map completion, weapon skills, inventory, obelisks, underwater exploration, and first dungeon prep."
          gameTitle="Farever"
          gameHref="/farever"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 7, 2026"
          toc={[
            {
              id: "first-hour-route",
              label: "First-hour route",
            },
            {
              id: "class-choice",
              label: "Class choice",
            },
            {
              id: "controls-combat",
              label: "Controls and combat",
            },
            {
              id: "free-mount",
              label: "Free mount",
            },
            {
              id: "map-codeex",
              label: "Map and Codeex",
            },
            {
              id: "weapon-skills",
              label: "Weapon skills",
            },
            {
              id: "inventory-salvage",
              label: "Inventory and salvage",
            },
            {
              id: "obelisks-fast-travel",
              label: "Obelisks",
            },
            {
              id: "underwater-exploration",
              label: "Underwater",
            },
            {
              id: "first-dungeon-prep",
              label: "First dungeon prep",
            },
            {
              id: "what-to-read-next",
              label: "Read next",
            },
            {
              id: "common-mistakes",
              label: "Mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/farever",
              label: "Farever Guide Hub",
            },
            {
              href: "/farever/codeex-leveling-guide",
              label: "Codeex and Leveling Guide",
            },
            {
              href: "/farever/classes-guide",
              label: "Classes Guide",
            },
            {
              href: "/farever/weapon-skills-guide",
              label: "Weapon Skills Guide",
            },
            {
              href: "/farever/mount-guide",
              label: "Mount Guide",
            },
            {
              href: "/farever/first-dungeon-guide",
              label: "First Dungeon Guide",
            },
          ]}
        >
          <FareverBeginnerContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}