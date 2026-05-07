import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FareverContent from "@/data/farever/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/farever`;

export const metadata: Metadata = {
  title:
    "Farever Guide Hub: Beginner Tips, Codeex, Mounts, Weapons, Fast Travel & Dungeons",
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
        "Farever Guide Hub: Beginner Tips, Codeex, Mounts, Weapons, Fast Travel, Dungeons, and FAQ",
      description:
        "This Farever guide hub helps new players understand what to do first, how Codeex leveling works, which class to start with, how weapon skills and Arsenal work, how to get a mount, how to use obelisks, how to manage inventory and potions, and how to handle first dungeon orbs, disconnects, and FPS drops.",
      image: [
        `${siteUrl}/images/farever/farever-class-selection.webp`,
        `${siteUrl}/images/farever/farever-codeex-monster-counter.webp`,
        `${siteUrl}/images/farever/farever-obelisk-fast-travel.webp`,
        `${siteUrl}/images/farever/farever-weapon-skill-upgrade.webp`,
        `${siteUrl}/images/farever/farever-free-mount-shop.webp`,
        `${siteUrl}/images/farever/farever-spark-recycler.webp`,
        `${siteUrl}/images/farever/farever-first-dungeon-orbs.webp`,
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
          name: "Farever guide",
        },
        {
          "@type": "Thing",
          name: "Farever beginner guide",
        },
        {
          "@type": "Thing",
          name: "Farever Codeex",
        },
        {
          "@type": "Thing",
          name: "Farever leveling",
        },
        {
          "@type": "Thing",
          name: "Farever map completion",
        },
        {
          "@type": "Thing",
          name: "Farever obelisk",
        },
        {
          "@type": "Thing",
          name: "Farever fast travel",
        },
        {
          "@type": "Thing",
          name: "Farever classes",
        },
        {
          "@type": "Thing",
          name: "Farever best class",
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
          name: "Farever Rogue",
        },
        {
          "@type": "Thing",
          name: "Farever Cleric",
        },
        {
          "@type": "Thing",
          name: "Farever weapon skills",
        },
        {
          "@type": "Thing",
          name: "Farever Arsenal",
        },
        {
          "@type": "Thing",
          name: "Farever runes",
        },
        {
          "@type": "Thing",
          name: "Farever mount",
        },
        {
          "@type": "Thing",
          name: "Farever inventory",
        },
        {
          "@type": "Thing",
          name: "Farever salvage",
        },
        {
          "@type": "Thing",
          name: "Farever Spark Recycler",
        },
        {
          "@type": "Thing",
          name: "Farever Alchemist",
        },
        {
          "@type": "Thing",
          name: "Farever healing potions",
        },
        {
          "@type": "Thing",
          name: "Farever first dungeon",
        },
        {
          "@type": "Thing",
          name: "Farever first dungeon orbs",
        },
        {
          "@type": "Thing",
          name: "Farever disconnecting",
        },
        {
          "@type": "Thing",
          name: "Farever FPS drops",
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
              "Claim your free mount if available, equip it from Collections, check map completion, fill nearby Codeex entries, unlock obelisks, upgrade weapon skills, and avoid discarding old gear before you reach the recycler.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best beginner class in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cleric/Priest is the safest early solo pick because it has self-healing. Rogue is better if you like fast movement, dodging, Shadow Step-style mobility, and control. Warrior is better if you want a direct melee route with heavier damage pressure. Mage is better if you want ranged magic and scepter-based skill swaps.",
          },
        },
        {
          "@type": "Question",
          name: "How many classes are in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Farever currently starts with four classes: Warrior, Rogue, Mage, and Cleric/Priest.",
          },
        },
        {
          "@type": "Question",
          name: "What is the level cap in Farever Early Access?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The current Early Access cap is level 20.",
          },
        },
        {
          "@type": "Question",
          name: "How do you level in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use map completion, Codeex milestones, nearby activities, chests, bosses, and dungeons. Codeex entries can reward early milestones such as 4 kills and 8 kills, while some counters continue toward 20.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Codeex in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Codeex tracks discoveries and monster entries. If a monster shows a counter like 2/8, finish that entry before leaving the area unless you have a better route.",
          },
        },
        {
          "@type": "Question",
          name: "Does Farever have a normal quest log?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not in the usual MMO way. You should read NPC text, open the map, follow gray question marks, unlock obelisks, and use Codeex and map completion to guide your route.",
          },
        },
        {
          "@type": "Question",
          name: "How do weapon skills work in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Weapons can provide active skills, and switching weapons can change your kit. One-handed weapons may give fewer skills, while larger weapons can give a bigger active/passive package. Because Farever has 25+ weapons and 100+ skills, weapon testing matters before final build rankings.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Arsenal slot in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Arsenal slot lets you equip an extra weapon and use one of its skills as an additional tool. Hold Control and left-click the Arsenal weapon if you want to choose a different skill from it.",
          },
        },
        {
          "@type": "Question",
          name: "How do runes work in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Runes unlock extra bonuses for class skills. Right-click the rune in your inventory first, then choose the unlocked bonus on the relevant skill screen.",
          },
        },
        {
          "@type": "Question",
          name: "Should I upgrade low-level weapons in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not spend too many materials on low-level weapon enhancement unless the weapon effect is worth keeping. Early weapon skill upgrades are usually more important than tiny stat gains on a weapon you may replace soon.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get a mount in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open the shop, claim the free reward if available, then equip the mount from Collections. If your mount key does nothing, the mount may not be equipped yet.",
          },
        },
        {
          "@type": "Question",
          name: "Can you use a mount in dungeons in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The first dungeon disables mount use. Use gliding, jumping, grapple points, and dungeon movement tools instead.",
          },
        },
        {
          "@type": "Question",
          name: "How many orbs are in the first dungeon in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The first dungeon has 5 orbs. If you leave with fewer, check side paths, vertical routes, grapple points, or early platforms.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get more inventory space in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy small pouches from the guild merchant and place them into your inventory bag slots. Each small pouch adds 6 slots. Use the bank for materials, runes, manuals, recipes, and gear you do not need immediately.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do with old gear in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not discard old gear once you can reach the village hub. Use the Spark Recycler to turn junk gear into useful crafting or upgrade materials.",
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
              "Alchemist is the safest early recommendation because it lets you craft minor healing potions. It is especially useful for Rogue, Mage, or any weapon setup without reliable self-healing.",
          },
        },
        {
          "@type": "Question",
          name: "How do you fast travel in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Unlock obelisks in each area. Obelisks reveal the zone, set respawn points, and let you travel automatically to other unlocked obelisks.",
          },
        },
        {
          "@type": "Question",
          name: "Can you swim in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There is no normal swimming. You walk underwater, watch the blue breath bar, and take damage if it runs out. You can still double jump underwater.",
          },
        },
        {
          "@type": "Question",
          name: "Is Farever free to play?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Farever is buy-to-play.",
          },
        },
        {
          "@type": "Question",
          name: "Is Farever pay to win?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Right now, the shop items you run into are cosmetics such as mounts, pets, gliders, and appearance items. There is no buy-power item in the early route.",
          },
        },
        {
          "@type": "Question",
          name: "Does Farever have PvP?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "PvP is planned later, but the current early flow is mainly PvE-focused.",
          },
        },
        {
          "@type": "Question",
          name: "Can you play Farever solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can handle much of the early game solo, but Farever is still online. You will see other players and can group for content.",
          },
        },
        {
          "@type": "Question",
          name: "How do you play with friends in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Steam friend invites or invite nearby players through the party menu. Randomly meeting in the same instance may be unreliable.",
          },
        },
        {
          "@type": "Question",
          name: "Does Farever have guilds?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A full guild system is not available yet. Friend list, guilds, auction house, and player trading are planned later.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Farever keep disconnecting?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check region status, restart after patches, update through Steam, and avoid starting dungeons during unstable windows. If all regions are down, there is no local fix.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Farever stuttering or dropping FPS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open-world areas with more nearby players may run worse than dungeons or quiet areas. Test fullscreen vs borderless, disable overlays, cap FPS externally, and update after performance patches.",
          },
        },
        {
          "@type": "Question",
          name: "Which Farever guide should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the Beginner Guide, then read the Codeex and Leveling Guide, Classes Guide, and Weapon Skills Guide.",
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
          title="Farever Guide Hub"
          description="Start here for Farever beginner tips, Codeex leveling, class choice, weapon skills, mounts, inventory, salvage, potions, fast travel, first dungeon orbs, disconnect fixes, FPS stutter tips, and Early Access systems."
          gameTitle="Farever"
          gameHref="/farever"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 7, 2026"
          toc={[
            {
              id: "start-here",
              label: "Start here",
            },
            {
              id: "common-first-run-mistakes",
              label: "First-run mistakes",
            },
            {
              id: "guide-index",
              label: "Guide index",
            },
            {
              id: "key-early-game-facts",
              label: "Early-game facts",
            },
            {
              id: "codeex-leveling",
              label: "Codeex and leveling",
            },
            {
              id: "map-completion",
              label: "Map completion",
            },
            {
              id: "classes",
              label: "Classes",
            },
            {
              id: "weapon-skills",
              label: "Weapon skills",
            },
            {
              id: "mounts-glider",
              label: "Mounts and glider",
            },
            {
              id: "inventory-salvage",
              label: "Inventory and potions",
            },
            {
              id: "dungeons",
              label: "First dungeon",
            },
            {
              id: "underwater-exploration",
              label: "Underwater exploration",
            },
            {
              id: "multiplayer",
              label: "Multiplayer",
            },
            {
              id: "disconnecting",
              label: "Disconnecting",
            },
            {
              id: "fps-stutter",
              label: "FPS and stutter",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/farever/beginner-guide",
              label: "Beginner Guide",
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
          <FareverContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}