import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementsGuideContent from "@/data/the-adventures-of-elliot/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-adventures-of-elliot/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-44-trophies-list.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-rewards-katzenmeister.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-self-destruct-resistance-magicite.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-fay-revival.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-great-bow-guardian-boss.webp`,
];

const toc = [
  { id: "achievements-guide", label: "Achievements guide" },
  { id: "known-trophy-targets", label: "Known trophy targets" },
  { id: "ending-trophies", label: "Ending trophies" },
  { id: "weapon-and-bomb-kill-trophies", label: "Weapon and Bomb kills" },
  { id: "smooth-fighting-bonus-drops", label: "Smooth Fighting" },
  { id: "pots-barrels-grass-and-manuscripts", label: "Pots, grass, manuscripts" },
  { id: "cats-and-katzenmeister", label: "Cats and Katzenmeister" },
  { id: "shards-shrine-and-vitality", label: "Shards and vitality" },
  { id: "magicite-trophies", label: "Magicite trophies" },
  { id: "faie-revival-and-fighting-fairy", label: "Faie and Fighting Fairy" },
  { id: "trials-and-special-enemies", label: "Trials and special enemies" },
  { id: "trophy-tracking-checklist", label: "Tracking checklist" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "what-to-read-next", label: "What to read next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/the-adventures-of-elliot",
    label: "The Adventures of Elliot Guide Hub",
  },
  {
    href: "/the-adventures-of-elliot/beginner-guide",
    label: "The Adventures of Elliot Beginner Guide",
  },
  {
    href: "/the-adventures-of-elliot/walkthrough",
    label: "The Adventures of Elliot Walkthrough",
  },
  {
    href: "/the-adventures-of-elliot/manuscript-locations",
    label: "The Adventures of Elliot Manuscript Locations",
    },
  {
    href: "/the-adventures-of-elliot/cat-locations",
    label: "The Adventures of Elliot Cat Locations",
  },
  {
    href: "/the-adventures-of-elliot/shards-of-life-locations",
    label: "The Adventures of Elliot Shards of Life Locations",
  },
];

export const metadata: Metadata = {
  title: "The Adventures of Elliot 44 Trophies & Achievements Guide",
  description:
    "Track The Adventures of Elliot trophies with 3 endings, 7 weapon types, Bomb kills, cats, Shards, vitality level 10, manuscripts, bonus drops and Faie kills.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Adventures of Elliot Achievements Guide: 44 Trophies, Endings, Cats and Weapon Kills",
    description:
      "Plan all 44 trophies in The Adventures of Elliot with named endings, weapon and Bomb kill targets, Smooth Fighting bonus drops, pots and barrels, grass cutting, manuscripts, cats, Shards of Life, Shrine of Life, vitality level 10, Magicite, Faie kills, trials and special enemies.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "The Adventures of Elliot trophy list showing 44 trophies.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Adventures of Elliot 44 Trophies Guide",
    description:
      "Track endings, weapon kills, Bombs, cats, Shards, vitality, manuscripts, bonus drops, grass, pots and Faie kills.",
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
          name: "The Adventures of Elliot Guide",
          item: `${siteUrl}/the-adventures-of-elliot`,
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
        "The Adventures of Elliot Achievements Guide: 44 Trophies, Ending Names, Weapon Kills, Cats, Shards of Life, Manuscripts and Completion Tracking",
      description:
        "A player-focused achievements guide for The Adventures of Elliot: The Millennium Tales covering the 44-trophy roadmap, three named ending trophies, Sword, Spear, Hammer, Chain-and-Sickle, Bow and Boomerang 200-kill targets, Bomb 100-kill target, Smooth Fighting bonus drop chains, Good for Throwing and for Breaking, Master Mower, History's Tapestry manuscripts, cat reward thresholds, Shards of Life, Shrine of Life, vitality level 10, Fighting Fairy, Magicite tracking, trials, special enemies, and common completion mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-18",
      dateModified: "2026-06-18",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Adventures of Elliot: The Millennium Tales",
        },
        { "@type": "Thing", name: "The Adventures of Elliot achievements" },
        { "@type": "Thing", name: "The Adventures of Elliot trophy guide" },
        { "@type": "Thing", name: "The Adventures of Elliot 44 trophies" },
        { "@type": "Thing", name: "The Adventures of Elliot ending trophies" },
        { "@type": "Thing", name: "At the Thousand-Year Journey's End" },
        { "@type": "Thing", name: "The Peace in Which We Walk" },
        { "@type": "Thing", name: "As Long as Any Hope Remains" },
        { "@type": "Thing", name: "The Adventures of Elliot weapon kills" },
        { "@type": "Thing", name: "The Adventures of Elliot Sword kills" },
        { "@type": "Thing", name: "The Adventures of Elliot Spear kills" },
        { "@type": "Thing", name: "The Adventures of Elliot Hammer kills" },
        { "@type": "Thing", name: "The Adventures of Elliot Chain-and-Sickle kills" },
        { "@type": "Thing", name: "The Adventures of Elliot Bow kills" },
        { "@type": "Thing", name: "The Adventures of Elliot Boomerang kills" },
        { "@type": "Thing", name: "The Adventures of Elliot Bomb kills" },
        { "@type": "Thing", name: "Smooth Fighting bonus drops" },
        { "@type": "Thing", name: "Good for Throwing and for Breaking" },
        { "@type": "Thing", name: "Master Mower" },
        { "@type": "Thing", name: "History's Tapestry manuscripts" },
        { "@type": "Thing", name: "The Adventures of Elliot cats" },
        { "@type": "Thing", name: "The Adventures of Elliot Katzenmeister" },
        { "@type": "Thing", name: "The Adventures of Elliot Shards of Life" },
        { "@type": "Thing", name: "The Adventures of Elliot Shrine of Life" },
        { "@type": "Thing", name: "The Adventures of Elliot vitality level 10" },
        { "@type": "Thing", name: "The Adventures of Elliot Magicite" },
        { "@type": "Thing", name: "The Adventures of Elliot Magicite Fragments" },
        { "@type": "Thing", name: "The Adventures of Elliot Fighting Fairy" },
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
          name: "How many trophies are in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 44 trophies in The Adventures of Elliot: The Millennium Tales.",
          },
        },
        {
          "@type": "Question",
          name: "What are the three ending trophy names in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The three named ending trophies are At the Thousand-Year Journey's End, The Peace in Which We Walk, and As Long as Any Hope Remains. Exact triggers are not confirmed here yet.",
          },
        },
        {
          "@type": "Question",
          name: "How many kills do weapon trophies need in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sword, Spear, Hammer, Chain-and-Sickle, Bow, and Boomerang each need 200 kills. Bombs need 100 kills.",
          },
        },
        {
          "@type": "Question",
          name: "What is Smooth Fighting in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Smooth Fighting requires chaining 30 bonus drops. Treat it as a clean-combat trophy and build good habits early.",
          },
        },
        {
          "@type": "Question",
          name: "How many pots or barrels do I need to break?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Good for Throwing and for Breaking requires breaking 200 pots or barrels.",
          },
        },
        {
          "@type": "Question",
          name: "How many times do I need to cut grass?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Master Mower requires cutting grass 300 times.",
          },
        },
        {
          "@type": "Question",
          name: "What is History's Tapestry?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "History's Tapestry is the manuscript collection trophy. Track manuscripts separately from ordinary chests.",
          },
        },
        {
          "@type": "Question",
          name: "What vitality level do I need in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Great Radiance of Life requires vitality level 10.",
          },
        },
        {
          "@type": "Question",
          name: "How do Shards of Life and Shrine of Life work?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Every 4 Shards of Life unlocks 1 Shrine of Life upgrade. Since vitality level 10 is required, Shard tracking matters for completion.",
          },
        },
        {
          "@type": "Question",
          name: "How many kills does Fighting Fairy need?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fighting Fairy requires 30 kills with Faie attacks.",
          },
        },
        {
          "@type": "Question",
          name: "Are cats tied to trophies or completion?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Cats are a major completion track with reward thresholds at 5, 10, 20, 35, and 50 cats.",
          },
        },
        {
          "@type": "Question",
          name: "What are the cat rewards in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The confirmed cat rewards are Cat Needle at 5 cats, Bomb Pouch at 10 cats, Quiver at 20 cats, Golden Egg at 35 cats, and Medal of the Katzenmeister at 50 cats.",
          },
        },
        {
          "@type": "Question",
          name: "Should I farm all weapon kills at the end?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Rotate weapons during normal exploration so Sword, Spear, Hammer, Chain-and-Sickle, Bow, Boomerang, and Bomb progress build naturally.",
          },
        },
        {
          "@type": "Question",
          name: "Should I make a final Magicite build early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Track Magicite names, costs, and effects, but do not force a final build before you understand more weapons and enemy types.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next after this achievements guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Cat Locations guide for cats, the Shards of Life Locations guide for health upgrades, or return to the Guide Hub for all guides.",
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
          title="Plan The Adventures of Elliot 44 Trophies Without Late Grinding"
          description="Track endings, weapon kills, Bombs, cats, Shards, manuscripts, Magicite, action trophies and Faie kills while you play instead of saving every grind for cleanup."
          gameTitle="The Adventures of Elliot"
          gameHref="/the-adventures-of-elliot"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 18, 2026"
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
