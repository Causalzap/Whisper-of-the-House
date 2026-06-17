import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementsGuideContent from "@/data/33-immortals/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/33-immortals/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/33-immortals/33-immortals-achievements-33-list.webp`,
  `${siteUrl}/images/33-immortals/33-immortals-heal-teleport-gate.webp`,
  `${siteUrl}/images/33-immortals/33-immortals-adam-eve-symbol-order.webp`,
  `${siteUrl}/images/33-immortals/33-immortals-weapon-shrine-upgrade-menu.webp`,
  `${siteUrl}/images/33-immortals/33-immortals-relic-drop-new-relic-unlocked.webp`,
  `${siteUrl}/images/33-immortals/33-immortals-major-feats-relic-wish.webp`,
];

const toc = [
  { id: "achievements-guide", label: "Achievements guide" },
  { id: "all-achievements", label: "All achievements" },
  { id: "early-achievements", label: "Early achievements" },
  { id: "hidden-achievements", label: "Hidden achievements" },
  { id: "boss-achievements", label: "Boss achievements" },
  { id: "party-achievement", label: "Party achievement" },
  { id: "weapon-achievements", label: "Weapon achievements" },
  { id: "daily-quest-chest", label: "Daily Quest Chest" },
  { id: "cosmetic-achievements", label: "Cosmetic achievements" },
  { id: "relic-achievements", label: "Relic achievements" },
  { id: "ordeal-achievements", label: "Ordeal achievements" },
  { id: "apotheosis-constellation-route", label: "Apotheosis route" },
  { id: "endgame-cleanup", label: "Endgame cleanup" },
  { id: "achievement-mistakes", label: "Mistakes to avoid" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/33-immortals",
    label: "33 Immortals Guide Hub",
  },
  {
    href: "/33-immortals/beginner-progression-guide",
    label: "33 Immortals Beginner Progression Guide",
  },
  {
    href: "/33-immortals/bosses-guide",
    label: "33 Immortals Boss Mechanics Guide",
  },
  {
    href: "/33-immortals/weapons-unlock-upgrades-guide",
    label: "33 Immortals Weapons Unlock and Upgrades Guide",
  },
  {
    href: "/33-immortals/relics-paths-wishing-guide",
    label: "33 Immortals Relics, Paths and Wishing Guide",
  },
];

export const metadata: Metadata = {
  title: "33 Immortals Achievements Guide: All 33 & Steam Rates",
  description:
    "Track all 33 Immortals achievements with Steam unlock rates, hidden goals, boss clears, Relic Wishing, cosmetics, Ordeals and endgame cleanup.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "33 Immortals Achievements Guide: All 33, Steam Rates and Hidden Goals",
    description:
      "Plan every 33 Immortals achievement with Steam unlock rates, hidden achievements, Lucifer, Adam & Eve, Wrath of God, Relic Wishing, cosmetics, Ordeals, Apotheosis and endgame cleanup.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "33 Immortals achievements list showing all 33 achievements.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "33 Immortals Achievements Guide",
    description:
      "All 33 achievements, Steam rates, hidden goals, boss clears, Relic Wishing, cosmetics and endgame cleanup route.",
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
          name: "33 Immortals Guide",
          item: `${siteUrl}/33-immortals`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements Guide",
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
        "33 Immortals Achievements Guide: All 33 Achievements, Steam Unlock Rates, Hidden Goals, Boss Clears and Endgame Cleanup",
      description:
        "A player-focused 33 Immortals achievements guide covering all 33 achievements with Steam unlock rate snapshots, route priority, hidden achievements, Lucifer, Adam & Eve, Wrath of God, party boss clears, Synergetic Triune weapon rotations, Daily Quest Chest, cosmetic achievements, Relic Tokens, Relic Wishing, Collector, Ordeals, Apotheosis, Beatrice, Bright Stars, Constellations, Structured Poetry, A Rebel's Journey and Zenith of the Starbound. The guide explains which achievements to clear first, which rare goals to save for endgame, and how to avoid wasting runs on the wrong cleanup order.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-17",
      dateModified: "2026-06-17",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "33 Immortals" },
        { "@type": "Thing", name: "33 Immortals achievements" },
        { "@type": "Thing", name: "33 Immortals all achievements" },
        { "@type": "Thing", name: "33 Immortals hidden achievements" },
        { "@type": "Thing", name: "33 Immortals Steam achievements" },
        { "@type": "Thing", name: "33 Immortals achievement unlock rates" },
        { "@type": "Thing", name: "33 Immortals Lucifer achievement" },
        { "@type": "Thing", name: "33 Immortals Adam and Eve achievement" },
        { "@type": "Thing", name: "33 Immortals Wrath of God achievement" },
        { "@type": "Thing", name: "33 Immortals My Own Way" },
        { "@type": "Thing", name: "33 Immortals Prayer Answered" },
        { "@type": "Thing", name: "33 Immortals Relic Wishing" },
        { "@type": "Thing", name: "33 Immortals Collector" },
        { "@type": "Thing", name: "33 Immortals Master Craftsman" },
        { "@type": "Thing", name: "33 Immortals Synergetic Triune" },
        { "@type": "Thing", name: "33 Immortals United We Conquer" },
        { "@type": "Thing", name: "33 Immortals Daily Quest Chest" },
        { "@type": "Thing", name: "33 Immortals Fashionista" },
        { "@type": "Thing", name: "33 Immortals Style Explorer" },
        { "@type": "Thing", name: "33 Immortals Ordeals" },
        { "@type": "Thing", name: "33 Immortals Apostle of Agony" },
        { "@type": "Thing", name: "33 Immortals Apotheosis" },
        { "@type": "Thing", name: "33 Immortals Beatrice" },
        { "@type": "Thing", name: "33 Immortals Constellations" },
        { "@type": "Thing", name: "33 Immortals Bright Stars" },
        { "@type": "Thing", name: "33 Immortals Zenith of the Starbound" },
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
          name: "How many achievements are in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 33 achievements in 33 Immortals. The clean route is to finish common progression achievements first, then boss, weapon, relic, cosmetic, Ordeal, Feat and Constellation achievements later.",
          },
        },
        {
          "@type": "Question",
          name: "Are there hidden achievements in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Important hidden achievements include Hidden Weapon for completing a Secret Chamber, Pulling out the Weeds for defeating Adam & Eve, Prayer Answered for Relic Wishing, My Own Way for defeating Wrath of God, Apotheosis for Beatrice progression, and Zenith of the Starbound for the third Constellation.",
          },
        },
        {
          "@type": "Question",
          name: "What achievement should I do first in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with natural progression achievements such as The Rebellion Begins, Unified Triumph, Rising Star, Incipit, Bone Gatherer and From King to Nothing. These teach the basic run flow before harder cleanup goals.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Bone Gatherer in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use a Bone Shrine to heal, acquire a key and acquire a Teleport Stone. Do not treat the Bone Shrine only as a healing station, because the achievement requires multiple shrine options.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get United We Conquer in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Beat any boss while already in a party. The safest route is to invite a friend or use an LFG group, then clear the easiest boss your group can reliably reach.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Synergetic Triune in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cast Co-op Powers from 3 different weapons. Use a safe rotation such as Bow of Hope, Sword of Justice and Staff of Sloth or Scepter of Charity, and cast each power during real combat.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get The Erudite's Favorite in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Complete a Daily Quest objective, then return to claim the Daily Quest Chest. The achievement needs the chest claim, not only the task completion.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Style Explorer in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Equip a common cape, common halo and common weapon skin. Open every wardrobe slot when you have enough basic cosmetic options.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Fashionista in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Equip an epic halo, epic cape, epic weapon skin and epic familiar. Save this for wardrobe cleanup after you have enough epic cosmetic options from progression, wardrobe, shop or reward sources.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Prayer Answered in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Wish for a relic, then find and equip that relic in the Beyond. Pick a Wish target you can recognize during the run so you do not miss it when it appears.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Master Craftsman in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fully level a weapon's Co-op Power and equip two upgrades. Commit to one main weapon instead of spreading upgrade progress across every weapon.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Apotheosis in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow the Beatrice and Constellation route: complete Feats, claim Bright Stars, fill Constellation progress around Beatrice, and return to Beatrice progression after major star milestones.",
          },
        },
        {
          "@type": "Question",
          name: "What are the hardest achievements in 33 Immortals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The hardest cleanup goals are usually Apostle of Agony, Collector, My Own Way, Apotheosis, Structured Poetry, A Rebel's Journey and Zenith of the Starbound. Save these for endgame cleanup after your boss, relic, weapon and Feat routes are stable.",
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
          title="Finish Every 33 Immortals Achievement in the Right Order"
          description="Use Steam unlock rates to route all 33 achievements, from early progression and boss clears to Relic Wishing, cosmetics, Ordeals, Apotheosis and final cleanup."
          gameTitle="33 Immortals"
          gameHref="/33-immortals"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AchievementsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
