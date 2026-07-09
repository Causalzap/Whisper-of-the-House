import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GuideContent from "@/data/granblue-relink-endless-ragnarok/how-to-start.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/granblue-relink-endless-ragnarok/how-to-start`;

const imageUrls = [
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-mysterious-gate-info.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-seedhollow-portal.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-conflux-gate.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-conflux-first-run.webp`,
];

const toc = [
  { id: "how-to-start-endless-ragnarok", label: "How to start" },
  { id: "requirements", label: "Requirements" },
  { id: "seedhollow-route", label: "Seedhollow route" },
  { id: "dlc-not-showing-up", label: "DLC not showing" },
  { id: "when-conflux-unlocks", label: "Conflux unlock" },
  { id: "recommended-power", label: "Recommended power" },
  { id: "what-to-do-next", label: "What to do next" },
  { id: "buy-now-or-wait", label: "Buy now or wait" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/granblue-relink-endless-ragnarok",
    label: "Granblue Relink Endless Ragnarok Guide Hub",
  },
  {
    href: "/granblue-relink-endless-ragnarok/conflux-guide",
    label: "Conflux Guide",
  },
  {
    href: "/granblue-relink-endless-ragnarok/fatebreaker-chaos-progression",
    label: "Fatebreaker and Chaos Progression",
  },
  {
    href: "/granblue-relink-endless-ragnarok/best-ai-team-builds",
    label: "Best AI Team Builds",
  },
  {
    href: "/granblue-relink-endless-ragnarok/new-characters-unlock-guide",
    label: "New Characters Unlock Guide",
  },
];

export const metadata: Metadata = {
  title: "Granblue Relink Endless Ragnarok: How to Start",
  description:
    "Start Endless Ragnarok from Seedhollow, check requirements, unlock Conflux, fix DLC not showing up, and follow fresh or returning save routes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Granblue Relink Endless Ragnarok: How to Start",
    description:
      "Start Granblue Fantasy: Relink Endless Ragnarok from Seedhollow, check save requirements, unlock Conflux, fix DLC not showing up, and follow the right route for fresh or returning saves.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Granblue Fantasy Relink Endless Ragnarok shimmery gate and mysterious portal information in Seedhollow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Granblue Relink Endless Ragnarok: How to Start",
    description:
      "Use the Seedhollow route, check requirements, unlock Conflux, and fix Endless Ragnarok not showing up.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "How do I start Endless Ragnarok?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "On a returning endgame save, clear The Tale of Bahamut's Rage (Proud), go to Seedhollow, follow the new shimmery gate or mysterious portal side quest, clear the early gate investigations, then speak with the monastery representative near the Quest Counter when Conflux opens.",
    },
  },
  {
    "@type": "Question",
    name: "What are the Endless Ragnarok requirements?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The full story and endgame route requires late base-game progress, including The Tale of Bahamut's Rage (Proud). Fresh and mid-story saves can still see some expansion content gradually, but the full Fatebreaker and Chaos route comes later.",
    },
  },
  {
    "@type": "Question",
    name: "Where do I go in Seedhollow?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Check the active Seedhollow side quest tied to the shimmery gate or mysterious portal. Follow the quest marker or NPC prompt, clear the early gate investigation, then return when the route sends you back. Once Conflux opens, speak with the monastery representative near the Quest Counter.",
    },
  },
  {
    "@type": "Question",
    name: "Why is Endless Ragnarok not showing up?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Check that the Upgrade Kit is installed, the game is updated, the correct save is loaded, and the save has enough progress for the route you are trying to start. Then return to Seedhollow and re-check side quests, gate prompts, or the Quest Counter area.",
    },
  },
  {
    "@type": "Question",
    name: "When does Conflux unlock, and should I farm it right away?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Conflux can start through Seedhollow side quest progression around Chapter 6, and it also appears along the finished-save Endless Ragnarok route. Use early Conflux to learn the mode and collect useful materials, but do not treat the first layer as the whole endgame.",
    },
  },
  {
    "@type": "Question",
    name: "Should new players buy Endless Ragnarok?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "New players can buy it as part of the full package, but the expansion's strongest value is later. If you are still deciding whether you like Relink's endgame loop, waiting is reasonable.",
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
          name: "How to Start",
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
        "Granblue Fantasy Relink Endless Ragnarok How to Start Guide",
      description:
        "A player-focused Granblue Fantasy Relink Endless Ragnarok start guide covering returning endgame saves, fresh and mid-story saves, The Tale of Bahamut's Rage Proud requirement, Seedhollow side quests, shimmery gate and mysterious portal investigation, Conflux unlock timing, DLC not showing up troubleshooting, early recommended power signals, and what to do after the route opens.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-09",
      dateModified: "2026-07-09",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Granblue Fantasy: Relink" },
        { "@type": "Thing", name: "Endless Ragnarok" },
        { "@type": "Thing", name: "How to start Endless Ragnarok" },
        { "@type": "Thing", name: "Seedhollow" },
        { "@type": "Thing", name: "The Tale of Bahamut's Rage" },
        { "@type": "Thing", name: "Conflux" },
        { "@type": "Thing", name: "Shimmery gate" },
        { "@type": "Thing", name: "Mysterious portal" },
        { "@type": "Thing", name: "Fatebreaker" },
        { "@type": "Thing", name: "Chaos-level quests" }
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
          title="Granblue Fantasy Relink Endless Ragnarok: How to Start"
          description="Start the DLC from Seedhollow, check the right save requirements, unlock Conflux, fix missing route problems, and know what fresh or returning saves should do next."
          gameTitle="Granblue Fantasy: Relink"
          gameHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseLabel="Granblue Fantasy Relink Endless Ragnarok Guide"
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