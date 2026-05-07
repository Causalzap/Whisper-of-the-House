import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FareverCodeexContent from "@/data/farever/codeex-leveling-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/farever/codeex-leveling-guide`;

export const metadata: Metadata = {
  title:
    "Farever Codeex and Leveling Guide: Monster Entries, Map Completion & Early XP",
  description:
    "Master Farever Codeex leveling! We cover monster kill milestones, Blob Dylan, mini-bosses, map completion, obelisks, party credit, and early XP.",
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
          name: "Farever Codeex and Leveling Guide",
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
        "Farever Codeex and Leveling Guide: Monster Entries, Map Completion, Obelisks, and Early XP",
      description:
        "This Farever Codeex and leveling guide explains how to read monster counters, when to finish 4-kill and 8-kill milestones, when to push toward 20 kills, how map completion and obelisks help early leveling, and how mini bosses such as Blob Dylan fit into progression.",
      image: [
        `${siteUrl}/images/farever/farever-codeex-monster-counter.webp`,
        `${siteUrl}/images/farever/farever-map-completion-question-marks.webp`,
        `${siteUrl}/images/farever/farever-codeex-mini-boss-entry.webp`,
        `${siteUrl}/images/farever/farever-obelisk-zone-reveal.webp`,
        `${siteUrl}/images/farever/farever-codeex-resource-reward.webp`,
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
          name: "Farever Codeex",
        },
        {
          "@type": "Thing",
          name: "Farever leveling",
        },
        {
          "@type": "Thing",
          name: "Farever early XP",
        },
        {
          "@type": "Thing",
          name: "Farever monster entries",
        },
        {
          "@type": "Thing",
          name: "Farever map completion",
        },
        {
          "@type": "Thing",
          name: "Farever gray question marks",
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
          name: "Farever mini bosses",
        },
        {
          "@type": "Thing",
          name: "Farever Blob Dylan",
        },
        {
          "@type": "Thing",
          name: "Farever crabs",
        },
        {
          "@type": "Thing",
          name: "Farever slimes",
        },
        {
          "@type": "Thing",
          name: "Farever bees",
        },
        {
          "@type": "Thing",
          name: "Farever party leveling",
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
          name: "What is the fastest way to level early in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The fastest early route is to combine map completion, Codeex milestones, chests, mini bosses, and dungeons. Do not just grind one enemy forever.",
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
          name: "Where are monster entries in the Codeex?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open Codeex, then check the Monsters section. This is where you can see kill counters and monster progress.",
          },
        },
        {
          "@type": "Question",
          name: "What does 2/8 mean in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It means you have killed 2 enemies toward an 8-kill monster entry. If that monster is nearby, it is usually worth finishing the entry before leaving.",
          },
        },
        {
          "@type": "Question",
          name: "What happens at 4 kills in Farever Codeex?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Some early Codeex entries give XP around 4 kills. This makes partial entry progress valuable even before the full 8-kill entry is done.",
          },
        },
        {
          "@type": "Question",
          name: "What happens at 8 kills in Farever Codeex?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "8 kills usually completes the main early monster entry. After that, check whether continuing toward 20 is worth the time.",
          },
        },
        {
          "@type": "Question",
          name: "Should I kill every monster 20 times in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Treat 20-kill progress as a reward check, not an automatic grind. Push toward 20 only when the reward, resource, density, or route makes sense.",
          },
        },
        {
          "@type": "Question",
          name: "Do mini bosses count for Codeex in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Some Codeex entries are tied to mini bosses, sparkling creatures, or special enemies instead of normal kill counters.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Blob Dylan in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Blob Dylan is an early named slime-style enemy tied to the At the Island's Tip objective. It is the kind of special target you should tag and then check against Codeex or map progress.",
          },
        },
        {
          "@type": "Question",
          name: "Does party play share Codeex progress in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Party kills can update your Codeex, but you should stay close and tag mini bosses yourself. If you are too far away, you may miss credit or loot.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I feel lost in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open the map, check gray question marks, unlock the nearest obelisk, then open Codeex and check unfinished monster entries.",
          },
        },
        {
          "@type": "Question",
          name: "How do obelisks help leveling in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Obelisks reveal zones, set respawn or teleport points, and unlock automatic travel routes. They reduce backtracking and make map completion easier.",
          },
        },
        {
          "@type": "Question",
          name: "Should I level by grinding mobs or exploring in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do both, but do not only grind. The best route is map objective, Codeex entry, chest or mini boss, obelisk, then next area.",
          },
        },
        {
          "@type": "Question",
          name: "Which Farever guide should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Farever Beginner Guide if you are still learning the first-hour route, or the Farever Weapon Skills Guide if your weapon changed your abilities.",
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
          title="Farever Codeex and Leveling Guide"
          description="Learn how Farever Codeex leveling works, including monster counters, 4-kill and 8-kill milestones, 20-kill rewards, Blob Dylan, map completion, obelisks, mini bosses, party credit, and early XP routing."
          gameTitle="Farever"
          gameHref="/farever"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 7, 2026"
          toc={[
            {
              id: "leveling-loop",
              label: "Leveling loop",
            },
            {
              id: "starter-creatures",
              label: "Starter creatures",
            },
            {
              id: "map-completion",
              label: "Map completion",
            },
            {
              id: "codeex-basics",
              label: "Codeex basics",
            },
            {
              id: "xp-rewards",
              label: "XP and rewards",
            },
            {
              id: "milestones",
              label: "Kill milestones",
            },
            {
              id: "mini-bosses",
              label: "Mini bosses",
            },
            {
              id: "obelisk-route",
              label: "Obelisks",
            },
            {
              id: "early-route",
              label: "Early route",
            },
            {
              id: "when-to-stop-grinding",
              label: "Stop grinding",
            },
            {
              id: "party-credit",
              label: "Party credit",
            },
            {
              id: "mistakes",
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
              href: "/farever/beginner-guide",
              label: "Beginner Guide",
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
          <FareverCodeexContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}