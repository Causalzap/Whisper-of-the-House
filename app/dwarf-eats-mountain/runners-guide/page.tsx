import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RunnersGuideContent from "@/data/dwarf-eats-mountain/runners-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dwarf-eats-mountain/runners-guide`;

const imageUrls = [
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-great-m-runners.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-runner-stoutly-march.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-runner-carrying-capacity.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-runner-dodgy-profession.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-runner-prospectors-nose.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-calamity-ore-reclaim.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-prestige-looming-motivation.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-mithril-upgrades-chain-mail.webp`,
];

const toc = [
  { id: "why-gold-is-not-collected", label: "Gold not collected" },
  { id: "runner-upgrade-priority", label: "Upgrade priority" },
  { id: "stoutly-march", label: "Stoutly March" },
  { id: "carrying-capacity", label: "Carry capacity" },
  { id: "dodge-and-stuns", label: "Dodge & stuns" },
  { id: "prospectors-nose", label: "Gem chance" },
  { id: "manual-pushing", label: "Manual pushing" },
  { id: "ore-reclaim", label: "Ore reclaim" },
  { id: "looming-motivation", label: "Looming Motivation" },
  { id: "how-many-runners", label: "How many runners" },
  { id: "damage-vs-runners", label: "Damage or runners" },
  { id: "mithril-runner-upgrades", label: "Mithril upgrades" },
  { id: "commit-to-runner-build", label: "Commit to runners" },
  { id: "demo-flamer-warning", label: "Damage warning" },
  { id: "recommended-fix-order", label: "Fix order" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/dwarf-eats-mountain", label: "Dwarf Eats Mountain Guide" },
  { href: "/dwarf-eats-mountain/build-order", label: "Beginner Build Order" },
  {
    href: "/dwarf-eats-mountain/prestige-ascension-guide",
    label: "Prestige and Ascension Guide",
  },
  {
    href: "/dwarf-eats-mountain/artifacts-mithril-guide",
    label: "Artifacts and Mithril Guide",
  },
  { href: "/dwarf-eats-mountain/best-builds", label: "Best Builds Guide" },
  { href: "/dwarf-eats-mountain/endgame-guide", label: "Endgame Guide" },
];

export const metadata: Metadata = {
  title: "Gold Not Collecting? Dwarf Eats Mountain Runner Guide",
  description:
    "Why is gold not being collected? Fix your Dwarf Eats Mountain runners with the best speed, carry, dodge, Looming Motivation & Mithril upgrades!",
  
  
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dwarf Eats Mountain Runners Guide: Fix Gold Collection",
    description:
      "A practical runner guide for gold piles, slow runners, stunned runners, ore reclaim, carrying capacity, and collection bottlenecks.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Dwarf Eats Mountain Great Maw and runners collecting ore during the opening setup.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarf Eats Mountain Runners Guide: Fix Gold Collection",
    description:
      "Learn when to buy speed, carry, dodge, Mithril runner upgrades, and how to stop ore reclaim before adding more damage.",
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
          name: "Dwarf Eats Mountain Guide",
          item: `${siteUrl}/dwarf-eats-mountain`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Runners Guide",
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
        "Dwarf Eats Mountain Runners Guide: Gold Collection, Carrying Capacity, Ore Reclaim, and Runner Upgrades",
      description:
        "A player-focused Dwarf Eats Mountain runners guide that explains why gold, gems, Mithril, and ore can sit on the ground, how runner speed, carrying capacity, dodge, slap recovery, Looming Motivation, Mithril Chainmail, and Magnetic Gloves affect collection, when to buy more runners instead of damage, how to stop mountain ore reclaim, and when to commit to a runner economy build instead of staying balanced.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-19",
      dateModified: "2026-05-19",
      about: [
        {
          "@type": "VideoGame",
          name: "Dwarf Eats Mountain",
        },
        { "@type": "Thing", name: "Runners" },
        { "@type": "Thing", name: "Gold Collection" },
        { "@type": "Thing", name: "Ore Reclaim" },
        { "@type": "Thing", name: "Stoutly March" },
        { "@type": "Thing", name: "Carrying Capacity" },
        { "@type": "Thing", name: "Dodgy Profession" },
        { "@type": "Thing", name: "Prospector's Massive Nose" },
        { "@type": "Thing", name: "Looming Motivation" },
        { "@type": "Thing", name: "Mithril Chainmail" },
        { "@type": "Thing", name: "Magnetic Gloves" },
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
          name: "Why is my gold not being collected in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your runners are usually too slow, overloaded, stunned, or outpaced by your damage. Buy Stoutly March, Carrying Capacity, Dodgy Profession, or more runners before adding more damage.",
          },
        },
        {
          "@type": "Question",
          name: "How many runners do I need in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There is no fixed number. If gold and rare drops sit on the ground, you need more collection. If runners are idle and the field is clean, you can usually buy damage instead.",
          },
        },
        {
          "@type": "Question",
          name: "Is Stoutly March or Carrying Capacity better?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Speed fixes travel time. Carry fixes pile size. Most early runs need both.",
          },
        },
        {
          "@type": "Question",
          name: "When should I buy Dodgy Profession?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy Dodgy Profession when falling rocks, monsters, goblins, calamities, or explosions keep stunning runners before they can deliver.",
          },
        },
        {
          "@type": "Question",
          name: "Is Prospector's Massive Nose worth it early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Prospector's Massive Nose is good after basic collection is stable. Do not buy it before speed and carry if gold is already piling up.",
          },
        },
        {
          "@type": "Question",
          name: "What does Looming Motivation do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Looming Motivation helps when there are over 350 uncollected ores and the mountain starts reclaiming them. It gives runners temporary carrying capacity when they return to stash.",
          },
        },
        {
          "@type": "Question",
          name: "How do I stop the mountain from reclaiming ore?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Stop adding damage, push valuable drops manually, upgrade runner speed and carrying capacity, wake stunned runners, and use Prestige or Mithril upgrades that improve collection.",
          },
        },
        {
          "@type": "Question",
          name: "Are Mithril runner upgrades worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Mithril Chainmail helps with stun and danger, while Magnetic Gloves help runners gather ore faster. Both are strong once basic runner upgrades are no longer enough.",
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
          title="Dwarf Eats Mountain Runners Guide: Why Gold Piles Up and How to Fix It"
          description="A practical collection guide for players whose gold, gems, Mithril, or ore are stuck on the ground instead of reaching the Great Maw."
          gameTitle="Dwarf Eats Mountain"
          gameHref="/dwarf-eats-mountain"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RunnersGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}