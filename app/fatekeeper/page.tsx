import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FatekeeperContent from "@/data/fatekeeper/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/fatekeeper`;

const imageUrls = [
  `${siteUrl}/images/fatekeeper/fatekeeper-haven-start.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-portal-training.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-combat-kick-guard-break.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-telekinesis-pull.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-skill-tree-overview.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-alchemy-table.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-ancient-hallways.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-ornate-copper-key-door.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-entrance.webp`,
];

const toc = [
  { id: "start-here", label: "Start here" },
  { id: "first-hour-route", label: "First hour route" },
  { id: "core-mechanics", label: "Core mechanics" },
  { id: "build-routes", label: "Build routes" },
  { id: "weapons", label: "Weapons" },
  { id: "spells-and-alchemy", label: "Spells and alchemy" },
  { id: "exploration", label: "Exploration" },
  { id: "bosses", label: "Bosses" },
  { id: "recommended-guide-order", label: "Guide order" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/fatekeeper/beginner-guide",
    label: "Fatekeeper Beginner Guide",
  },
  {
    href: "/fatekeeper/best-build",
    label: "Fatekeeper Best Builds Guide",
  },
  {
    href: "/fatekeeper/best-weapons",
    label: "Fatekeeper Best Weapons Guide",
  },
  {
    href: "/fatekeeper/best-spells",
    label: "Fatekeeper Best Spells Guide",
  },
  {
    href: "/fatekeeper/boss-guide",
    label: "Fatekeeper Boss Guide",
  },
];

export const metadata: Metadata = {
  title: "Fatekeeper Guide: Beginner Tips, Builds, Weapons & Boss",
  description:
    "Start Fatekeeper with the right guide: first-hour route, builds, weapons, spells, alchemy, Life Leech, Burning Axe, exploration, and final EA boss tips.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Fatekeeper Guide Hub: Beginner Tips, Builds, Weapons, Spells, Alchemy and Bosses",
    description:
      "Use this Fatekeeper guide hub to choose the right route for beginner tips, safe builds, weapons, spells, alchemy, exploration, hard fights and the final Early Access boss.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Fatekeeper opening path toward Haven with the player HUD visible.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatekeeper Guide Hub",
    description:
      "Find the right Fatekeeper guide for your first hour, builds, weapons, spells, alchemy, exploration and boss fights.",
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
          name: "Fatekeeper Guide",
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
        "Fatekeeper Guide Hub: Beginner Route, Builds, Weapons, Spells, Alchemy, Exploration and Boss Fights",
      description:
        "A player-focused Fatekeeper guide hub for Early Access. This hub helps players choose the right guide for the first hour route through Haven, portal training, alchemy prep and Ancient Hallways; safe build routes such as melee, fire, alchemy, shatter, telekinesis, wind and dagger; early weapons including Blade of the Sentinel, Axe of the Sentinel, Ornate Dagger and Burning Axe; spell and alchemy routes including fire, telekinesis, Power, Greater Mana, wind, Life Leech, Kutracite fire support and Guards Vermillion sustain; exploration notes for Ornate Copper Key, Ring of Life, side paths and NPC rescue; and boss guidance for the final Early Access corrupted roots fight.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-03",
      dateModified: "2026-06-03",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Fatekeeper" },
        { "@type": "Thing", name: "Fatekeeper guide" },
        { "@type": "Thing", name: "Fatekeeper beginner guide" },
        { "@type": "Thing", name: "Fatekeeper first hour" },
        { "@type": "Thing", name: "Fatekeeper Haven" },
        { "@type": "Thing", name: "Fatekeeper portal training" },
        { "@type": "Thing", name: "Fatekeeper Ancient Hallways" },
        { "@type": "Thing", name: "Fatekeeper builds" },
        { "@type": "Thing", name: "Fatekeeper safe melee build" },
        { "@type": "Thing", name: "Fatekeeper fire build" },
        { "@type": "Thing", name: "Fatekeeper alchemy build" },
        { "@type": "Thing", name: "Fatekeeper shatter build" },
        { "@type": "Thing", name: "Fatekeeper telekinesis" },
        { "@type": "Thing", name: "Fatekeeper wind build" },
        { "@type": "Thing", name: "Fatekeeper dagger build" },
        { "@type": "Thing", name: "Blade of the Sentinel" },
        { "@type": "Thing", name: "Axe of the Sentinel" },
        { "@type": "Thing", name: "Ornate Dagger" },
        { "@type": "Thing", name: "Burning Axe" },
        { "@type": "Thing", name: "Fatekeeper weapons" },
        { "@type": "Thing", name: "Fatekeeper spells" },
        { "@type": "Thing", name: "Power" },
        { "@type": "Thing", name: "Greater Mana" },
        { "@type": "Thing", name: "Kutracite" },
        { "@type": "Thing", name: "Guards Vermillion" },
        { "@type": "Thing", name: "Life Leech" },
        { "@type": "Thing", name: "Fatekeeper alchemy" },
        { "@type": "Thing", name: "Ornate Copper Key" },
        { "@type": "Thing", name: "Ring of Life" },
        { "@type": "Thing", name: "NPC rescue" },
        { "@type": "Thing", name: "Fatekeeper boss guide" },
        { "@type": "Thing", name: "Fatekeeper final Early Access fight" },
        { "@type": "Thing", name: "Fatekeeper corrupted roots fight" },
        { "@type": "Thing", name: "Fatekeeper Sacred Roots" },
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
          name: "What should I do first in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use this route: explore Haven, finish portal training, craft at the alchemy table, then enter Ancient Hallways prepared. Check your weapons and skill tree before spending several points.",
          },
        },
        {
          "@type": "Question",
          name: "Which Fatekeeper guide should I read first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you are still early, read the Beginner Guide first. If you already understand the basics, move to Best Builds, then Best Weapons, Best Spells, and Boss Guide.",
          },
        },
        {
          "@type": "Question",
          name: "What is the safest beginner build in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Safe melee is the easiest first route for most players. Use enough health, stamina, and recovery to survive mistakes, then add fire or alchemy once your basics feel stable.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Blade of the Sentinel or Axe of the Sentinel?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Blade of the Sentinel is the stronger listed starting weapon with 30 slash damage. Use Axe of the Sentinel if the one-handed feel is easier while learning.",
          },
        },
        {
          "@type": "Question",
          name: "Is Burning Axe good in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you want a fire and melee hybrid route. Burning Axe is a rare one-handed axe with 10 slash damage and 15 fire damage, so its value comes from fire support rather than pure slash damage.",
          },
        },
        {
          "@type": "Question",
          name: "Is telekinesis worth using in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Telekinesis is useful early because it can pull enemies, create openings, control space, and interact with specific objects. It is not just a damage spell.",
          },
        },
        {
          "@type": "Question",
          name: "Is alchemy important in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Alchemy gives you potions, vials, poison-style effects, mana support, fire support, Life Leech sustain, and weapon coatings. Prepare before hard rooms instead of waiting until you are already out of healing.",
          },
        },
        {
          "@type": "Question",
          name: "Is Life Leech a spell route in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Life Leech is currently confirmed through alchemy sustain, especially Guards Vermillion. It is not confirmed as a complete standalone spell-tree route yet.",
          },
        },
        {
          "@type": "Question",
          name: "Are there hidden paths and locked doors in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. You will see side paths, locked doors, key requirements, chests, shortcuts, and NPC rescue opportunities. Track locked doors and return when you find the matching key or route.",
          },
        },
        {
          "@type": "Question",
          name: "Is Sacred Roots the official boss name in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not confirmed. Sacred Roots appears in dialogue, but this hub does not treat it as the official boss name. The boss guide calls the fight the corrupted roots fight or final Early Access fight until the official name is clear.",
          },
        },
        {
          "@type": "Question",
          name: "Which guide should I read if a boss keeps killing me?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Boss Guide. It covers preparation, adds, block timing, stomp, phase two, fire damage, short melee punish windows, and common mistakes.",
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
          title="Where Should You Start in Fatekeeper?"
          description="Use this hub to pick the right Fatekeeper guide for your first hour, build, weapon, spell, alchemy route, exploration problem, or boss wall."
          gameTitle="Fatekeeper"
          gameHref="/fatekeeper"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FatekeeperContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
