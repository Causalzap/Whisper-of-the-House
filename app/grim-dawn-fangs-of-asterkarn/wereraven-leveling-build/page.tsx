import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WereravenLevelingBuildContent from "@/data/grim-dawn-fangs-of-asterkarn/wereraven-leveling-build.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/grim-dawn-fangs-of-asterkarn`;
const pageUrl = `${hubUrl}/wereraven-leveling-build`;

const imageUrls = [
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-wereraven-mastery-bar-unlock.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-wereraven-early-skill-order.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-wereraven-tsunami-glacial-talon.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-wereraven-behemoth-giants-blood.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-wereraven-ectoplasm-energy-fix.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-wereraven-aether-soul-component.webp`,
];

const toc = [
  {
    id: "skill-order",
    label: "Wereraven skill order",
  },
  {
    id: "rotation",
    label: "Leveling rotation",
  },
  {
    id: "devotions",
    label: "Devotion route",
  },
  {
    id: "energy",
    label: "Fix Energy problems",
  },
  {
    id: "gear",
    label: "Gear priorities",
  },
  {
    id: "attributes",
    label: "Attribute points",
  },
  {
    id: "occultist",
    label: "When to select Occultist",
  },
  {
    id: "stuck",
    label: "Leveling problems",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/grim-dawn-fangs-of-asterkarn",
    label: "Fangs of Asterkarn Guide Hub",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/the-asterkarn-incident-walkthrough",
    label: "The Asterkarn Incident Walkthrough",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/ritual-of-cleansing-walkthrough",
    label: "Ritual of Cleansing Walkthrough",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/soul-echoes-awaken-epic-items",
    label: "Soul Echoes & Awakened Epic Items",
  },
];

export const metadata: Metadata = {
  title: "Grim Dawn Wereraven Leveling Build: Skills & Devotions",
  description:
    "Level a Cold and Frostburn Wereraven with the right skill order, devotions, gear, Energy fixes, attributes, and Occultist timing.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Grim Dawn Wereraven Leveling Build Guide",
    description:
      "Unlock Wereraven, level Ice Talons and Cold Snap, follow the Tsunami-to-Blizzard devotion route, and fix Energy and defense problems.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Grim Dawn Berserker mastery tree showing the Wereraven unlock requirement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grim Dawn Wereraven Leveling Build",
    description:
      "Follow a Cold and Frostburn Wereraven skill order with Ice Talons, Cold Snap, Tsunami, Blizzard, Behemoth, and practical gear priorities.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Can Wereraven trigger weapon-pool skills?",
    answer:
      "No. Wereraven has its own basic attack and cannot trigger weapon-pool skills. Do not spend leveling points on WPS nodes expecting them to activate while transformed.",
  },
  {
    question: "Should I use weapon DPS to compare Wereraven upgrades?",
    answer:
      "Not by itself. This route values global Cold and Frostburn bonuses, casting speed, Offensive Ability, Energy Regeneration, skill ranks, and defenses more than displayed weapon DPS.",
  },
  {
    question: "Is Tsunami or Blizzard better while leveling?",
    answer:
      "Tsunami is the more reliable early devotion proc. Blizzard becomes stronger after the build has enough Offensive Ability to land critical hits consistently.",
  },
  {
    question: "Why choose Occultist without leveling Summon Familiar?",
    answer:
      "Occultist preserves the planned Blood of Dreeg, Aspect of the Guardian, and later Familiar hybrid without forcing the early leveling points away from the core Wereraven package.",
  },
  {
    question: "Should I use Winds of Asterkarn?",
    answer:
      "Winds of Asterkarn is optional. Use it when Energy sustain is stable and the encounter allows safe channeling. Ice Talons remains the more mobile core skill.",
  },
  {
    question: "Can I turn Veteran off after starting?",
    answer:
      "Yes. Veteran can be toggled. Switch to Normal when slower kills or repeated deaths remove the value of the additional experience bonus.",
  },
  {
    question: "When should I take Behemoth?",
    answer:
      "Take Behemoth when normal clearing remains comfortable but repeated hits force immediate potions, retreats, or deaths. Fix exposed resistances first.",
  },
  {
    question: "When does the Wereraven and Familiar hybrid begin?",
    answer:
      "The full hybrid begins after the required endgame equipment and Familiar investment are available. Until then, level as a self-cast Cold and Frostburn Wereraven.",
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
          name: "Fangs of Asterkarn Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Wereraven Leveling Build",
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
        "Grim Dawn Wereraven Leveling Build: Cold and Frostburn Skills, Devotions, Gear, Energy, and Occultist",
      description:
        "This Grim Dawn: Fangs of Asterkarn Wereraven leveling guide explains how to unlock the transformation through the Berserker mastery bar, level Ice Talons and Cold Snap, maintain Rallying Cry, follow a Tsunami, Viper, Blizzard, and Behemoth devotion route, solve Energy problems with Ectoplasm and equipment, compare weapons without relying on sheet DPS, prioritize resistances and Defensive Ability, allocate attributes, select Occultist without weakening the early build, and diagnose common Wereraven leveling problems.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-26",
      dateModified: "2026-07-26",
      about: [
        {
          "@type": "VideoGame",
          name: "Grim Dawn: Fangs of Asterkarn",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Wereraven",
        },
        {
          "@type": "Thing",
          name: "Berserker Mastery",
        },
        {
          "@type": "Thing",
          name: "Occultist Mastery",
        },
        {
          "@type": "Thing",
          name: "Ice Talons",
        },
        {
          "@type": "Thing",
          name: "Cold Snap",
        },
        {
          "@type": "Thing",
          name: "Rallying Cry",
        },
        {
          "@type": "Thing",
          name: "Winds of Asterkarn",
        },
        {
          "@type": "Thing",
          name: "Tsunami",
        },
        {
          "@type": "Thing",
          name: "Viper",
        },
        {
          "@type": "Thing",
          name: "Blizzard",
        },
        {
          "@type": "Thing",
          name: "Behemoth",
        },
        {
          "@type": "Thing",
          name: "Giant's Blood",
        },
        {
          "@type": "Thing",
          name: "Ectoplasm",
        },
        {
          "@type": "Thing",
          name: "Aether Soul",
        },
        {
          "@type": "Thing",
          name: "Blood of Dreeg",
        },
        {
          "@type": "Thing",
          name: "Aspect of the Guardian",
        },
        {
          "@type": "Thing",
          name: "Summon Familiar",
        },
        {
          "@type": "Thing",
          name: "Cold Damage",
        },
        {
          "@type": "Thing",
          name: "Frostburn Damage",
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
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Level a Cold and Frostburn Wereraven"
          description="Follow the skill, devotion, gear, and attribute priorities I use to unlock Wereraven early, sustain Ice Talons, clear close-range packs with Cold Snap, keep Rallying Cry active, and prepare for the later Occultist and Familiar transition."
          gameTitle="Grim Dawn: Fangs of Asterkarn"
          gameHref="/grim-dawn-fangs-of-asterkarn"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WereravenLevelingBuildContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}