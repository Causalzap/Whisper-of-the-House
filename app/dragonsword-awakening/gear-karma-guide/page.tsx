import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DragonSwordAwakeningGearKarmaGuideContent from "@/data/dragonsword-awakening/gear-karma-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dragonsword-awakening`;
const pageUrl = `${hubUrl}/gear-karma-guide`;

const metadataTitle =
  "DragonSword Awakening Gear & Karma: Sets & Reforging";
const metadataDescription =
  "Build smarter with tested 3+2 gear sets, main stats, Forging Mold steps, 50,000 Gold reforge rules, Karma farming, dismantling and upgrade priorities.";

const imageUrls = [
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-azure-gale-top-set-effect.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-reforge-50000-gold-cost.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-charlotte-level-70-stats.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-world-boss-basic-karma-drop.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-exclusive-karma-dismantle-exchange.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-regional-boss-rewards.webp`,
];

const toc = [
  {
    id: "upgrade-path",
    label: "Gear & Karma upgrade path",
  },
  {
    id: "gear-set-tiers",
    label: "Gear set tiers & 3+2 builds",
  },
  {
    id: "main-stats-forging-molds",
    label: "Main stats & Forging Molds",
  },
  {
    id: "reforging",
    label: "Reforging & stop rules",
  },
  {
    id: "verify-build",
    label: "Verify the finished build",
  },
  {
    id: "karma-comparison",
    label: "Basic vs Exclusive Karma",
  },
  {
    id: "basic-karma",
    label: "Choose & farm Basic Karma",
  },
  {
    id: "exclusive-karma",
    label: "Exclusive Karma & dismantling",
  },
  {
    id: "tested-build-directions",
    label: "Tested character builds",
  },
  {
    id: "resource-route",
    label: "Gold, Molds & Karma sources",
  },
  {
    id: "medal-exchange",
    label: "Mission Medal Exchange",
  },
  {
    id: "mistakes",
    label: "Gear & Karma mistakes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/dragonsword-awakening",
    label: "DragonSword Awakening Guide Hub",
  },
  {
    href: "/dragonsword-awakening/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/dragonsword-awakening/best-team-comps",
    label: "Best Team Comps",
  },
  {
    href: "/dragonsword-awakening/walkthrough",
    label: "Chapter 1–8 Walkthrough",
  },
  {
    href: "/dragonsword-awakening/ending-final-boss",
    label: "Ursula Final Boss & Ending",
  },
];

const faqEntities = [
  {
    question: "Is a five-piece set always better than a 3+2 setup?",
    answer:
      "No. Read the listed tiers. Azure Gale shows effects at two and three pieces, so the fourth and fifth pieces do not unlock another tier on that panel. A useful second two-piece bonus can provide more value.",
  },
  {
    question: "What does the Azure Gale set do?",
    answer:
      "Two pieces give Airborne Additional Damage plus 15 percent. Three pieces give Attack Power plus 10 percent for 8 seconds after an Active Skill.",
  },
  {
    question: "How much does the Azure Gale Top cost to craft?",
    answer:
      "The visible example costs 5,000 Gold and shows three material requirements with counts of 2, 3, and 3. Check the current Blacksmith panel before spending in case a later patch changes the recipe.",
  },
  {
    question: "Is a Forging Mold consumed?",
    answer:
      "Yes. The tooltip used for this guide states that the Forging Mold is destroyed after use. Reserve it for a main-stat craft expected to stay in the build.",
  },
  {
    question: "When is a 50,000 Gold reforge worth it?",
    answer:
      "Use that reforge only when the equipment is a long-term core piece and the missing line materially changes the build. Stop when the piece already has its main condition plus two useful offensive lines.",
  },
  {
    question:
      "Should I upgrade Basic Karma or wait for Exclusive Karma?",
    answer:
      "Upgrade the matching Basic Karma when it belongs to the core hero and the Exclusive option is not immediately obtainable. Keep the investment lower when it is only a short-term bridge.",
  },
  {
    question:
      "Can I target a specific Basic Karma from a World Boss?",
    answer:
      "You can choose a boss whose displayed reward pool contains the condition you want, but the actual reward is random.",
  },
  {
    question: "Should I dismantle an unwanted Exclusive Karma?",
    answer:
      "Check whether it is equipped or needed for ascension, then inspect the return preview. Dismantling is useful when the recovered value advances an Exclusive Karma for a hero you actually use.",
  },
  {
    question:
      "Does the Regional Mission reset use local or server time?",
    answer:
      "The shown English panel says Resets daily at 9:00 AM without identifying the time zone. Use the in-game countdown or observe one reset before setting a fixed schedule.",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "DragonSword Awakening Gear & Karma Guide: Sets, Stats and Reforging",
    description:
      "Build a tested 3+2 gear setup, apply the correct main stat, protect Forging Molds, control reforge costs, farm Basic Karma and plan Exclusive Karma upgrades.",
    siteName: "Whisper of the House",
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "DragonSword Awakening",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Gear and Karma Guide",
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
        "DragonSword Awakening Gear and Karma Guide: Best Sets, Main Stats and Reforging",
      description:
        "A hands-on DragonSword Awakening gear and Karma guide covering 3+2 set construction, Azure Gale effects, selected main stats, Forging Mold use, reforge stop rules, Charlotte and Reina build directions, Basic Karma farming, Exclusive Karma exchange, dismantling and material priorities.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-23",
      dateModified: "2026-07-23",
      about: [
        {
          "@type": "VideoGame",
          name: "DragonSword: Awakening",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening gear guide",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Karma guide",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening best gear sets",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening 3+2 gear setup",
        },
        {
          "@type": "Thing",
          name: "Azure Gale set",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening main stats",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Forging Mold",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening reforging",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Basic Karma",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Exclusive Karma",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening World Boss Karma",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Karma dismantling",
        },
        {
          "@type": "Thing",
          name: "Charlotte build",
        },
        {
          "@type": "Thing",
          name: "Reina build",
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
          title="DragonSword Awakening Gear & Karma Guide: Best Sets, Main Stats and Reforging"
          description="Build a tested 3+2 gear setup, apply the intended main stat, protect Forging Molds, control expensive reforges, and plan Basic and Exclusive Karma upgrades."
          gameTitle="DragonSword Awakening"
          gameHref="/dragonsword-awakening"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DragonSwordAwakeningGearKarmaGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}