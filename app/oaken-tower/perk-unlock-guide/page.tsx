import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PerkUnlockGuideContent from "@/data/oaken-tower/perk-unlock-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/oaken-tower/perk-unlock-guide`;

const imageUrls = [
  `${siteUrl}/images/oaken-tower/oaken-tower-pack-perk-selection.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-poison-start.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-merge-perk-warning.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-perk-bug-candy.webp`,
];

const toc = [
  { id: "known-unlocks", label: "Known unlocks" },
  { id: "unconfirmed-unlocks", label: "Needs confirmation" },
  { id: "best-unlocks", label: "Best unlocks" },
  { id: "perk-use-cases", label: "Use cases" },
  { id: "gambit", label: "Gambit" },
  { id: "essential-oils", label: "Essential Oils" },
  { id: "merge-perk", label: "Merge perk" },
  { id: "not-unlocking", label: "Not unlocking" },
  { id: "perk-pool", label: "Perk pool" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "quick-checklist", label: "Checklist" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/oaken-tower", label: "Oaken Tower Guide" },
    { href: "/oaken-tower/10-wins-guide", label: "10-Win Guide" },
    { href: "/oaken-tower/level-vs-reroll", label: "Level vs Reroll" },
    { href: "/oaken-tower/3-star-items", label: "3-Star Items" },
    { href: "/oaken-tower/poison-build", label: "Best Poison Build" },
    { href: "/oaken-tower/burn-build", label: "Best Burn Build" },
    { href: "/oaken-tower/frosty-build", label: "Best Frosty Build" },
    { href: "/oaken-tower/bleed-build", label: "Best Bleed Build" },
  
];

export const metadata: Metadata = {
    title: "Oaken Tower Perk Unlock Guide: Conditions & Bug Fixes",
    description: "Keep failing your Gambit unlock? Discover the exact conditions to unlock perks in Oaken Tower, the best perks to get first, and why your attempts keep failing.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Oaken Tower Perk Unlock Guide",
    description:
      "A player-first Oaken Tower perk unlock guide covering known unlock conditions, perks that still need confirmation, failed unlocks, perk use cases and perk pool setup.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Oaken Tower pack and perk selection screen before starting a run.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oaken Tower Perk Unlock Guide",
    description:
      "Find known Oaken Tower perk unlock conditions, avoid failed unlock attempts, and build a better selected perk pool.",
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
          name: "Oaken Tower Guide",
          item: `${siteUrl}/oaken-tower`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Perk Unlock Guide",
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
        "Oaken Tower Perk Unlock Guide: Known Conditions, Failed Unlock Fixes, Gambit, Essential Oils, Merge Perk and Perk Pool Setup",
      description:
        "A practical Oaken Tower perk unlock guide focused on known unlock conditions and failed unlock troubleshooting. It explains the known routes for Gambit, Essential Oils, Merge Perk and Random Perks, separates unconfirmed perk conditions from verified information, covers why strict unlocks fail, how potions or encounter rewards may affect attempts, how to avoid mixing unlock runs with serious 10-win runs, and how to build a balanced selected perk pool after unlocking new perks.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-16",
      dateModified: "2026-05-16",
      about: [
        { "@type": "VideoGame", name: "Oaken Tower" },
        { "@type": "Thing", name: "Perk Unlocks" },
        { "@type": "Thing", name: "Gambit" },
        { "@type": "Thing", name: "Essential Oils" },
        { "@type": "Thing", name: "Merge Perk" },
        { "@type": "Thing", name: "Random Perks" },
        { "@type": "Thing", name: "Toxic" },
        { "@type": "Thing", name: "Oaken Tower Perks" },
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
          name: "How do perks work in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You select a pool of perks before the run, and one of those selected perks is chosen when the run starts. That means you should build a balanced perk pool, not just pick four greedy options.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Gambit in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The known condition is to earn 10 trophies while only ever buying Epic items. Keep the run clean and be careful with potions or encounter rewards that might count against the condition.",
          },
        },
        {
          "@type": "Question",
          name: "Why did Gambit not unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually because the condition was stricter than expected. Check whether you bought a lower-rarity item, took a potion, accepted an encounter reward, or otherwise broke the requirement.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Essential Oils in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use an Essence to give an item a new tag 3 times. Keep the run stable and use Essence on items that actually stay on your board.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Merge Perk in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The known condition is to earn the 10th Trophy with a 3-star item 3 times. Do this when a 3-star carry path appears naturally instead of forcing it from nothing.",
          },
        },
        {
          "@type": "Question",
          name: "What perks should I unlock first in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Prioritize perks that help real runs, such as Toxic for Poison direction, Flash Sale or shop-value perks for economy, Healing Touch for survival, and Strike for multicast carry setups. Verify any exact unlock condition in-game before planning a dedicated attempt.",
          },
        },
        {
          "@type": "Question",
          name: "Should I chase perk unlocks while trying to climb?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Unlock runs and serious win runs have different goals. If the unlock condition forces awkward choices, do it separately from serious 10-win or ranked attempts.",
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
          title="Oaken Tower Perk Unlock Guide"
          description="Use this when you need actual unlock conditions, failed-unlock checks, and a cleaner perk pool instead of vague perk advice."
          gameTitle="Oaken Tower"
          gameHref="/oaken-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PerkUnlockGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}