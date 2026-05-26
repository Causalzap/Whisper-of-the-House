import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SkillLevelingContent from "@/data/paralives/level-skills-faster.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/paralives/level-skills-faster`;

const imageUrls = [
  `${siteUrl}/images/paralives/paralives-skills-panel-knowledge-skills.webp`,
  `${siteUrl}/images/paralives/paralives-knowledge-skill-food-cooking.webp`,
  `${siteUrl}/images/paralives/paralives-storyteller-skill-buff.webp`,
  `${siteUrl}/images/paralives/paralives-talent-upgrade-screen.webp`,
];

const toc = [
  { id: "version-note", label: "EA note" },
  { id: "fastest-methods", label: "Fastest methods" },
  { id: "route-table", label: "Skill routes" },
  { id: "stats-affect-skill-speed", label: "Stats" },
  { id: "knowledge-skills", label: "Knowledge Skills" },
  { id: "minimum-viable-routes", label: "Minimum routes" },
  { id: "town-events", label: "Town Events" },
  { id: "story-cards-and-buffs", label: "Buffs" },
  { id: "together-cards", label: "Together Cards" },
  { id: "daily-schedule", label: "Daily schedule" },
  { id: "multi-para-households", label: "Households" },
  { id: "life-stages", label: "Life stages" },
  { id: "talents", label: "Talents" },
  { id: "mistakes", label: "Mistakes" },
  { id: "simple-routine", label: "Routine" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/paralives", label: "Paralives Skills and Careers Guide" },
  {
    href: "/paralives/job-performance-not-improving",
    label: "Job Performance Not Improving",
  },
  {
    href: "/paralives/paramaker-stats-vibes-personality",
    label: "Paramaker Stats, Vibes and Personality",
  },
  {
    href: "/paralives/best-early-game-skills-talents-careers",
    label: "Best Early Game Skills, Talents and Careers",
  },
];

export const metadata: Metadata = {
  title: "Paralives Skill Leveling: How to Level Skills Faster",
  description:
    "Level skills faster in Paralives with stats, Knowledge Skills, direct practice, Town Events, Together Cards, talents and better daily routines.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "How to Level Skills Faster in Paralives",
    description:
      "A practical Paralives skill leveling guide covering stats, Knowledge Skills, direct practice, books, computer research, Town Events, Together Cards, talents and household roles.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Paralives skills panel showing Music, Guitar, Piano and Triangle skills.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Level Skills Faster in Paralives",
    description:
      "Stop leveling randomly. Match stats, Knowledge Skills, practice methods, Town Events and talents to your Paralives route.",
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
          name: "Paralives Guide",
          item: `${siteUrl}/paralives`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Level Skills Faster",
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
        "How to Level Skills Faster in Paralives: Stats, Knowledge Skills, Practice Methods, Town Events, Together Cards, Talents and Daily Routines",
      description:
        "A practical Paralives skill leveling guide for players who want faster progress without grinding randomly. It explains why direct practice is usually the best base method, when to use computer research or books, how stats such as Creativity, Mind, Physique and Charisma support different skill routes, how Knowledge Skills act as parent skills, when to switch from setup into direct practice, how Town Events and Story Cards create temporary training windows, how Dark Blue Together Cards can add skill XP during social play, how to split skills across multi-Para households, how life stage affects training priorities, and how to choose focused talents versus flexible talents.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      about: [
        { "@type": "VideoGame", name: "Paralives" },
        { "@type": "Thing", name: "Paralives Skills" },
        { "@type": "Thing", name: "Knowledge Skills" },
        { "@type": "Thing", name: "Skill Leveling" },
        { "@type": "Thing", name: "Paralives Stats" },
        { "@type": "Thing", name: "Town Events" },
        { "@type": "Thing", name: "Together Cards" },
        { "@type": "Thing", name: "Paralives Talents" },
        { "@type": "Thing", name: "Life Stages" },
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
          name: "Should I max a Knowledge Skill before practicing the real skill in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Build enough foundation to make the route feel better, then switch into direct practice. Sitting in books forever is usually over-preparation.",
          },
        },
        {
          "@type": "Question",
          name: "What should a multi-Para household train first in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Split roles. Give one Para the money route, one Para household support such as Cooking or Repair, and one Para social or career support. This is usually better than making everyone train the same skill.",
          },
        },
        {
          "@type": "Question",
          name: "Are Town Events worth interrupting my routine for in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if the event boosts a skill you already need. No, if it pulls you away from your actual route.",
          },
        },
        {
          "@type": "Question",
          name: "Should I train Repair early in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but usually not as your main route. Repair is a good support skill because broken appliances can waste time, hurt routines, and make workdays worse. In a multi-Para household, it is often worth giving one Para Repair as a support role.",
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
          title="How to Level Skills Faster in Paralives"
          description="Skills feel slow when you train randomly. Match your stat, Knowledge Skill, talent, and daily routine to the route you actually want."
          gameTitle="Paralives"
          gameHref="/paralives"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SkillLevelingContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}