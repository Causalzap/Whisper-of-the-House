import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import UpgradesExplainedContent from "@/data/deep-rock-galactic/upgrades-explained.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deep-rock-galactic/upgrades-explained`;

const imageUrls = [
  `${siteUrl}/images/deep-rock-galactic/rogue-core-expenite-deposit.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-bio-booster-choice.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-weapon-selection.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-weapon-upgrade-rolls.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-workbench.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-workbench-stats-example.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-biobooster.webp`,
];

const toc = [
  { id: "upgrades-overview", label: "Overview" },
  { id: "how-expenite-upgrades-work", label: "Expenite" },
  { id: "upgrade-choice-screen", label: "Upgrade Choice" },
  { id: "weapon-stats", label: "Weapon Stats" },
  { id: "focus-one-weapon", label: "Focus One Weapon" },
  { id: "choose-upgrades-by-problem", label: "Pick by Problem" },
  { id: "upgrade-timing", label: "Upgrade Timing" },
  { id: "specific-upgrade-rolls", label: "Upgrade Rolls" },
  { id: "upgrade-synergy", label: "Synergy" },
  { id: "workbenches", label: "Workbenches" },
  { id: "workbench-stat-examples", label: "Workbench Examples" },
  { id: "bio-boosters", label: "Bio Boosters" },
  { id: "environmental-hazards", label: "Environment" },
  { id: "solo-upgrade-priority", label: "Solo Upgrades" },
  { id: "coop-upgrade-priority", label: "Co-op Upgrades" },
  { id: "when-to-skip-upgrades", label: "Skip Rewards" },
  { id: "common-upgrade-mistakes", label: "Mistakes" },
  { id: "simple-upgrade-rules", label: "Quick Rules" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/deep-rock-galactic", label: "Deep Rock Galactic: Rogue Core Guide" },
  { href: "/deep-rock-galactic/beginner-guide", label: "Rogue Core Beginner Guide" },
  { href: "/deep-rock-galactic/best-class", label: "Rogue Core Best Class" },
  { href: "/deep-rock-galactic/solo-guide", label: "Rogue Core Solo Guide" },
  { href: "/deep-rock-galactic/cooper-guide", label: "Rogue Core Cooper Guide" },
  { href: "/deep-rock-galactic/rogue-core-vs-drg", label: "Rogue Core vs Deep Rock Galactic" },
];

export const metadata: Metadata = {
  title: "Rogue Core Upgrades Explained: Expenite, Weapons, Builds",
  description:
    "Learn Rogue Core upgrades: Expenite costs, R.E.P.D. choices, weapon focus, Workbenches, Bio Boosters, co-op picks, synergy, and timing.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Rogue Core Upgrades Explained: Expenite, Weapons, Builds",
    description:
      "Understand Rogue Core upgrade choices, Expenite costs, R.E.P.D. events, weapon focus, Workbenches, Bio Boosters, upgrade synergy, co-op pick order, and when to skip rewards.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Depositing Expenite into the processor drone in Deep Rock Galactic Rogue Core.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rogue Core Upgrades Explained: Expenite, Weapons, Builds",
    description:
      "Use Expenite, R.E.P.D. upgrades, weapon rolls, Workbenches, Bio Boosters, and synergy better in Rogue Core.",
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
          name: "Deep Rock Galactic: Rogue Core Guide",
          item: `${siteUrl}/deep-rock-galactic`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rogue Core Upgrades Explained",
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
        "Deep Rock Galactic: Rogue Core Upgrades Explained: Expenite Costs, R.E.P.D. Upgrade Choices, Weapon Focus, Workbenches, Bio Boosters, Synergy and Co-op Pick Order",
      description:
        "A player-focused Rogue Core upgrade guide explaining how Expenite upgrades work, how much Expenite standard upgrades cost, when upgrade choice events pause the action, how to read weapon stats, when to focus one weapon instead of spreading upgrades, how to choose upgrades by the problem they solve, how early, mid and late run upgrade timing changes priorities, how upgrade synergy works, when Workbenches are worth the toolbox time, how Bio Boosters fit into builds, how environmental hazards connect to upgrade choices, how solo players should think about upgrade gaps, how 4-player co-op upgrade pick order works, and which common upgrade mistakes to avoid.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-21",
      dateModified: "2026-05-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Deep Rock Galactic: Rogue Core",
        },
        { "@type": "Thing", name: "Rogue Core upgrades" },
        { "@type": "Thing", name: "Rogue Core Expenite" },
        { "@type": "Thing", name: "R.E.P.D." },
        { "@type": "Thing", name: "Rogue Core upgrade costs" },
        { "@type": "Thing", name: "Rogue Core weapon upgrades" },
        { "@type": "Thing", name: "Rogue Core Workbench" },
        { "@type": "Thing", name: "Rogue Core Bio Booster" },
        { "@type": "Thing", name: "Rogue Core upgrade synergy" },
        { "@type": "Thing", name: "Rogue Core co-op upgrades" },
        { "@type": "Thing", name: "Rogue Core solo upgrades" },
        { "@type": "Thing", name: "Weakpoint Damage" },
        { "@type": "Thing", name: "Ammo Boost" },
        { "@type": "Thing", name: "Vital Impact" },
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
          name: "How do upgrades work in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mine Expenite, call the R.E.P.D. or processor drone, deposit the Expenite, fill the upgrade bar, gather near the drone, and choose a permanent upgrade for the current run.",
          },
        },
        {
          "@type": "Question",
          name: "How much Expenite do upgrades cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The first standard upgrade costs 120 Expenite. Early upgrade thresholds then increase by 10 each time until 230, after which costs scale harder.",
          },
        },
        {
          "@type": "Question",
          name: "Does the game pause during upgrade selection?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. When the upgrade threshold is reached and players gather near the R.E.P.D., the upgrade choice pauses the action so you can read the options.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always pick the rarest upgrade?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Rarity matters, but build fit matters more. A lower-rarity upgrade that supports your weapon, class ability, or survival problem can be better than a rare upgrade that does not fit.",
          },
        },
        {
          "@type": "Question",
          name: "Should I upgrade one weapon or spread upgrades?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually focus one reliable weapon first. A strong upgraded weapon is often better than two weak weapons, unless your second weapon clearly solves a missing problem like armor, range, crowds, or ammo pressure.",
          },
        },
        {
          "@type": "Question",
          name: "When should I deposit Expenite?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Deposit often, especially when the team is close to filling the upgrade bar. Holding Expenite too long delays power and can make the next wave harder than it needs to be.",
          },
        },
        {
          "@type": "Question",
          name: "Are Workbenches worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually, yes, but only when the team has time and space. A Workbench can give ability upgrades, weapon upgrades, or a new weapon, but chasing the toolbox during heavy pressure can cost the run.",
          },
        },
        {
          "@type": "Question",
          name: "Should I take a new weapon or upgrade my current one?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upgrade your current weapon if it is already working. Take a new weapon if your current setup has a clear weakness, such as poor range, bad crowd control, weak armor handling, or ammo problems.",
          },
        },
        {
          "@type": "Question",
          name: "Are Bio Boosters better than normal upgrades?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bio Boosters can be stronger and more personal than normal Expenite upgrades, but they require a hack and time. They are usually worth checking when the room is safe.",
          },
        },
        {
          "@type": "Question",
          name: "If I only remember one upgrade rule, what is it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pick the upgrade that makes your next floor safer or faster. That usually means fixing your current bottleneck: damage, ammo, armor, movement, crowd control, weakpoint triggers, or ability uptime.",
          },
        },
        {
          "@type": "Question",
          name: "How do co-op upgrade choices work?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In a 4-player squad, players can see multiple upgrade options and choose in a random order. Most picks are exclusive, so a build-defining option may disappear if another player takes it first. Health Reward is a special shared-style option that can be available to everyone.",
          },
        },
        {
          "@type": "Question",
          name: "Is Ammo Boost worth taking?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if your run keeps running out of ammo. A simple ammo upgrade can be better than a flashy weapon when ammo pressure is the real reason the run is falling apart.",
          },
        },
        {
          "@type": "Question",
          name: "Is weakpoint damage good?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Weakpoint damage is good when you can actually hit weak points or your team can mark targets. If you are panic-firing into armor or crowds, take a more reliable upgrade first.",
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
          title="Rogue Core Upgrades Explained: How to Pick Better Builds"
          description="Learn how Expenite costs, R.E.P.D. upgrade choices, weapon focus, Workbenches, Bio Boosters, synergy, and co-op pick order affect every Rogue Core run."
          gameTitle="Deep Rock Galactic: Rogue Core"
          gameHref="/deep-rock-galactic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <UpgradesExplainedContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}