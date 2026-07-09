import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GuideContent from "@/data/granblue-relink-endless-ragnarok/new-characters-unlock-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/granblue-relink-endless-ragnarok/new-characters-unlock-guide`;

const imageUrls = [
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-new-characters-crew-cards.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-beatrix-delta-clock.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-fediel-dark-mobility.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-maglielle-summoner-style.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-crewmate-card-shop.webp`,
];

const toc = [
  { id: "new-characters-unlock-guide", label: "New characters" },
  { id: "unlock-plan", label: "Unlock plan" },
  { id: "beatrix-eustace", label: "Beatrix & Eustace" },
  { id: "fraux-fediel", label: "Fraux & Fediel" },
  { id: "gallanza-maglielle", label: "Gallanza & Maglielle" },
  { id: "first-test-and-build-priority", label: "Test & build priority" },
  { id: "when-to-invest", label: "When to invest" },
  { id: "conflux-catch-up", label: "Conflux catch-up" },
  { id: "knick-knack-shop", label: "Cards & shop checks" },
  { id: "what-to-do-next", label: "What to do next" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/granblue-relink-endless-ragnarok",
    label: "Granblue Relink Endless Ragnarok Guide Hub",
  },
  {
    href: "/granblue-relink-endless-ragnarok/how-to-start",
    label: "How to Start Endless Ragnarok",
  },
  {
    href: "/granblue-relink-endless-ragnarok/conflux-guide",
    label: "Conflux Guide",
  },
  {
    href: "/granblue-relink-endless-ragnarok/best-ai-team-builds",
    label: "Best AI Team Builds",
  },
  {
    href: "/granblue-relink-endless-ragnarok/fatebreaker-chaos-progression",
    label: "Fatebreaker and Chaos Progression",
  },
];

export const metadata: Metadata = {
  title: "Granblue Relink New Characters: Unlock First & Cards",
  description:
    "Unlock Endless Ragnarok characters in Granblue Fantasy: Relink, compare Crewmate Card costs, choose who to unlock first, and decide who to build.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Granblue Relink New Characters: Unlock First & Cards",
    description:
      "Unlock Beatrix, Eustace, Fraux, Fediel, Gallanza and Maglielle in Endless Ragnarok, compare Crewmate Card costs, and choose who to build first.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Granblue Fantasy Relink Endless Ragnarok new characters and Crewmate Card unlocks.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Granblue Relink New Characters: Unlock First & Cards",
    description:
      "Compare Endless Ragnarok new characters, Crewmate Card costs, unlock timing, manual vs AI tests, and who to build first.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "Should I unlock every new character right away?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "No. Unlock the character you want to test first, then save cards and materials until you know who deserves a real build.",
    },
  },
  {
    "@type": "Question",
    name: "Who is the safest first unlock?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Eustace is the safest first test because ranged uptime and mobility are easier to judge without committing to close-range pressure. Beatrix is the first pick if you specifically want melee.",
    },
  },
  {
    "@type": "Question",
    name: "Should I spend 2 normal Crewmate Cards on Fraux or Fediel?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Only spend 2 normal Crewmate Cards on Fraux or Fediel early if you already want their style. If you are not in a hurry, waiting for the story route can save normal cards through their exclusive card path.",
    },
  },
  {
    "@type": "Question",
    name: "What if Gallanza or Maglielle is not available yet?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Keep pushing Endless Ragnarok Chapter Ø and the required Hard-difficulty quest route. Do not spend generic cards blindly when their exclusive Crewmate Card path has not opened yet.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use the new characters as AI immediately?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Test them manually first. A character can be strong by hand but still need AI behavior testing before becoming a reliable party slot.",
    },
  },
  {
    "@type": "Question",
    name: "When should I spend Chaos or late weapon materials?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Spend Chaos or late weapon materials only after the role is clear. Use Conflux and safer quests first, then invest rare materials into the character you already trust.",
    },
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
          name: "Granblue Relink Endless Ragnarok Guide",
          item: `${siteUrl}/granblue-relink-endless-ragnarok`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "New Characters Unlock Guide",
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
        "Granblue Relink Endless Ragnarok New Characters Unlock Guide",
      description:
        "A player-focused Granblue Fantasy Relink Endless Ragnarok new characters guide covering Beatrix, Eustace, Fraux, Fediel, Gallanza, Maglielle, Crewmate Card costs, Chapter Ø unlocks, who to unlock first, manual versus AI testing, Conflux catch-up, shop checks, and when to spend Chaos or late weapon materials.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-09",
      dateModified: "2026-07-09",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Granblue Fantasy: Relink" },
        { "@type": "Thing", name: "Endless Ragnarok" },
        { "@type": "Thing", name: "New characters" },
        { "@type": "Thing", name: "Crewmate Cards" },
        { "@type": "Thing", name: "Beatrix" },
        { "@type": "Thing", name: "Eustace" },
        { "@type": "Thing", name: "Fraux" },
        { "@type": "Thing", name: "Fediel" },
        { "@type": "Thing", name: "Gallanza" },
        { "@type": "Thing", name: "Maglielle" },
        { "@type": "Thing", name: "Chapter Ø" },
        { "@type": "Thing", name: "Conflux" },
        { "@type": "Thing", name: "Chaos materials" }
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
      mainEntity: faqEntities,
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
          title="Granblue Relink New Characters: Unlock First & Cards"
          description="Unlock Beatrix, Eustace, Fraux, Fediel, Gallanza and Maglielle, compare Crewmate Card costs, test manual or AI roles, and decide who deserves Conflux and Chaos investment."
          gameTitle="Granblue Fantasy: Relink"
          gameHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseLabel="Granblue Relink Endless Ragnarok Guide"
          updatedAt="July 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}