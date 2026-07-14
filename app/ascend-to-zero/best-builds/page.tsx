import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AscendToZeroBestBuildsContent from "@/data/ascend-to-zero/best-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ascend-to-zero`;
const pageUrl = `${hubUrl}/best-builds`;

const imageUrls = [
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-avatar-skill-comparison.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-avatar-tech-chip-upgrade.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-blossom-blade-build.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-golden-gunslinger-build.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-scarlet-pirate-build.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-terrae-motus-level-20000.webp`,
];

const toc = [
  {
    id: "avatar-tier-list",
    label: "Avatar tier list",
  },
  {
    id: "build-overview",
    label: "Best builds overview",
  },
  {
    id: "diagnose-build",
    label: "Diagnose build failures",
  },
  {
    id: "weapon-tags",
    label: "Weapon tags",
  },
  {
    id: "chrono-child-build",
    label: "Chrono Child build",
  },
  {
    id: "blossom-blade-build",
    label: "Blossom Blade build",
  },
  {
    id: "golden-gunslinger-build",
    label: "Golden Gunslinger build",
  },
  {
    id: "scarlet-pirate-build",
    label: "Scarlet Pirate build",
  },
  {
    id: "terrae-motus-build-check",
    label: "Terrae Motus build check",
  },
  {
    id: "time-stealing-enemies",
    label: "Time-Stealing enemies",
  },
  {
    id: "difficulty-scope",
    label: "Difficulty differences",
  },
  {
    id: "when-to-return",
    label: "Continue or rebuild",
  },
  {
    id: "common-mistakes",
    label: "Common build mistakes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/ascend-to-zero",
    label: "Ascend to ZERO Guide Hub",
  },
  {
    href: "/ascend-to-zero/how-to-unlock-stage-2-desert",
    label: "Stage 2 & Desert Unlock Guide",
  },
  {
    href: "/ascend-to-zero/achievements-guide",
    label: "All 58 Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Ascend to ZERO Best Builds & Avatar Tier List",
  description:
  "Choose the best Ascend to ZERO build with a verified Avatar tier list, Tech Chip priorities, weapon tags, Terrae Motus checks, and run fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Ascend to ZERO Best Builds & Avatar Tier List",
    description:
      "Compare verified Chrono Child, Blossom Blade, Golden Gunslinger, and Scarlet Pirate builds, then fix the exact problem ending your runs.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ascend to ZERO Avatar Skill comparison for Chrono Child, Blossom Blade, and Golden Gunslinger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascend to ZERO Best Builds & Avatar Tier List",
    description:
      "Choose an Avatar, match the correct weapon tags, fix weak runs, and prepare a reliable build for Terrae Motus and the early Desert.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "What is the best Avatar for a first clear?",
    answer:
      "Chrono Child is the safest verified first-clear Avatar because its release damage, slower-Time options, shields, and Limited Time recovery all support the same combat loop.",
  },
  {
    question: "What is the current Ascend to ZERO Avatar Tier List?",
    answer:
      "For verified Institute and early Desert progression, Chrono Child is S Tier, Blossom Blade and Golden Gunslinger are A Tier, and Scarlet Pirate is B Tier. Windborne Spearmaster and Frost Moon Hacker are not ranked without complete Build data.",
  },
  {
    question: "Why are only four Avatars ranked?",
    answer:
      "A reliable Tier List needs verified Avatar Skills, passive bonuses, weapon interactions, Tech Chips, and complete boss runs. The remaining two Avatars do not yet have enough confirmed material for responsible Build recommendations.",
  },
  {
    question: "Which Avatar is best for melee?",
    answer:
      "Blossom Blade is the strongest verified melee specialist when equipped with Swords, nearby-enemy damage, Bleed, Avatar Skill damage, and enough sustain to remain close to enemies.",
  },
  {
    question: "Which Avatar is best for ranged damage?",
    answer:
      "Golden Gunslinger is the most consistent verified ranged option when equipped with Gun-tagged weapons, projectile scaling, Pierce, and reliable reload support.",
  },
  {
    question: "How do I check whether a weapon matches my Avatar?",
    answer:
      "Read the exact weapon and attack tags shown in the inventory or Supply Shop. Gun and Cannon are separate categories even though both can be ranged projectile weapons.",
  },
  {
    question: "How do I know reload is lowering my damage?",
    answer:
      "Watch one complete attack cycle. If the weapon deals strong damage while firing but remains inactive for most of the fight, prioritize Quick Reload, Reload Speed, magazine support, stamina, or Dash availability before adding more Attack Speed.",
  },
  {
    question: "What is the safest Chrono Child Tech Chip?",
    answer:
      "Time Shield is the safest verified progression choice because it slows Time Flow by 15% and increases Damage Reduction by 5%.",
  },
  {
    question: "What is the best Build for Terrae Motus?",
    answer:
      "Use one coherent Avatar and weapon package, direct boss damage, reliable Limited Time recovery, and enough survival for one mistake. Final Institute elite kill speed matters more than matching Level 20,000 exactly.",
  },
  {
    question: "How should I deal with Time-Stealing enemies?",
    answer:
      "Stop clearing common enemies, activate Time Stop to reach the marked target, and commit direct single-target burst before it removes more Limited Time.",
  },
  {
    question: "Are these final endgame Builds?",
    answer:
      "No. These recommendations cover the Institute, Terrae Motus, and early Desert progression. Stage 4, Zero difficulty, and Multidimension Mode may require different final priorities.",
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
          name: "Ascend to ZERO Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Builds and Avatar Tier List",
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
        "Ascend to ZERO Best Builds and Verified Avatar Tier List",
      description:
        "This Ascend to ZERO builds guide ranks the four Avatars supported by verified launch-version skill panels and complete progression runs. It explains the safest Chrono Child Time-Slow Build, Blossom Blade Sword and Bleed setup, Golden Gunslinger projectile and reload route, Scarlet Pirate Cannon and Bombard Build, weapon-tag matching, Tech Chip priorities, end-of-run damage diagnosis, Time-Stealing enemy targeting, Terrae Motus readiness checks, difficulty limitations, and the exact signals that show when a player should continue a run or return to the Underground Bunker.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-14",
      dateModified: "2026-07-14",
      about: [
        {
          "@type": "VideoGame",
          name: "Ascend to ZERO",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO best builds",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Avatar tier list",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Chrono Child build",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Blossom Blade build",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Golden Gunslinger build",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Scarlet Pirate build",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Tech Chips",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO weapon tags",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Terrae Motus build",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Time-Stealing enemies",
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
          title="Ascend to ZERO Best Builds and Avatar Tier List"
          description="Choose the right Avatar, match its weapon tags, and fix the exact weakness ending your runs. These verified builds cover Chrono Child, Blossom Blade, Golden Gunslinger, Scarlet Pirate, Terrae Motus, and the early Desert."
          gameTitle="Ascend to ZERO"
          gameHref="/ascend-to-zero"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AscendToZeroBestBuildsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}