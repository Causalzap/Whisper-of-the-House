import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RealmOfInkGuideContent from "@/data/realm-of-ink/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/realm-of-ink`;

const imageUrls = [
  `${siteUrl}/images/realm-of-ink/realm-of-ink-ink-gems-momo-guide.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-curios-cursed-variants.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-violeta-rupture-50-build.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-butterfly-lasers.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-book-spirit-final-boss.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-difficulty-rupture-doctor.webp`,
];

const toc = [
  { id: "start-here", label: "Start here" },
  { id: "which-guide", label: "Which guide?" },
  { id: "core-systems", label: "Core systems" },
  { id: "beginner-tips", label: "Beginner tips" },
  { id: "best-builds-overview", label: "Build overview" },
  { id: "ink-gems-curios-overview", label: "Ink Gems and Curios" },
  { id: "oread-overview", label: "Oread overview" },
  { id: "final-boss-ending-overview", label: "Final boss and ending" },
  { id: "endless-rupture-overview", label: "Endless and Rupture" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/realm-of-ink/beginner-guide",
    label: "Realm of Ink Beginner Guide",
  },
  {
    href: "/realm-of-ink/best-builds",
    label: "Realm of Ink Best Builds Guide",
  },
  {
    href: "/realm-of-ink/ink-gems-curios-guide",
    label: "Realm of Ink Ink Gems and Curios Guide",
  },
  {
    href: "/realm-of-ink/oread-guide",
    label: "Realm of Ink Oread Guide",
  },
  {
    href: "/realm-of-ink/final-boss-true-ending",
    label: "Realm of Ink Final Boss and True Ending Guide",
  },
  {
    href: "/realm-of-ink/endless-rupture-guide",
    label: "Realm of Ink Endless and Rupture Guide",
  },
];

export const metadata: Metadata = {
  title: "Realm of Ink Guide: Builds, Ink Gems, Oread & Endgame",
  description:
    "Start here for Realm of Ink beginner tips, best builds, Ink Gems, Curios, Oread, Book Spirit, true ending, Endless, Dragon Hair Brush, and Rupture.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Realm of Ink Guide Hub: Beginner Tips, Builds, Ink Gems, Oread, Endgame and Rupture",
    description:
      "Use this Realm of Ink guide hub to find the right guide for your run: beginner tips, Ink Gems, Curios, best builds, Oread, Book Spirit, true ending, Endless mode, Dragon Hair Brush, and Rupture.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Realm of Ink Ink Gem menu showing Momo Ink and Ink Relic effects.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realm of Ink Guide Hub",
    description:
      "Find Realm of Ink beginner tips, builds, Ink Gems, Curios, Oread, Book Spirit, true ending, Endless, and Rupture guides.",
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
          name: "Realm of Ink Guide",
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
        "Realm of Ink Guide Hub: Beginner Tips, Best Builds, Ink Gems, Curios, Oread, Final Boss, True Ending, Endless and Rupture",
      description:
        "A player-focused Realm of Ink guide hub for version 1.0. The hub helps players choose the right guide for their current problem, including beginner tips, Ink Gems, Momo, Curios and perks terminology, Red Crit, Venom and Ivy DOT, Violeta Primordial Status and Curse, Oread Curse Butterfly and Laser, Book Spirit, Ink God, true ending progress, talisman choices, Endless mode, Archive and Sanctum completed-run builds, Dragon Hair Brush difficulty, Rupture reward milestones, and high difficulty preparation.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-04",
      dateModified: "2026-06-04",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Realm of Ink" },
        { "@type": "Thing", name: "Realm of Ink guide" },
        { "@type": "Thing", name: "Realm of Ink beginner guide" },
        { "@type": "Thing", name: "Realm of Ink best builds" },
        { "@type": "Thing", name: "Realm of Ink Ink Gems" },
        { "@type": "Thing", name: "Realm of Ink Curios" },
        { "@type": "Thing", name: "Realm of Ink perks" },
        { "@type": "Thing", name: "Realm of Ink Momo" },
        { "@type": "Thing", name: "Realm of Ink Red build" },
        { "@type": "Thing", name: "Realm of Ink Violeta build" },
        { "@type": "Thing", name: "Realm of Ink Oread guide" },
        { "@type": "Thing", name: "Realm of Ink how to unlock Oread" },
        { "@type": "Thing", name: "Realm of Ink Book Spirit" },
        { "@type": "Thing", name: "Realm of Ink Ink God" },
        { "@type": "Thing", name: "Realm of Ink true ending" },
        { "@type": "Thing", name: "Realm of Ink Endless mode" },
        { "@type": "Thing", name: "Realm of Ink Dragon Hair Brush" },
        { "@type": "Thing", name: "Realm of Ink Rupture" },
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
          name: "What is Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Realm of Ink is an action roguelite with fast combat, Ink Gems, Momo, Curios, Elixirs, Primordial Ink, multiple forms, high difficulty systems, and endgame routes like Book Spirit, Ink God, Endless, and Rupture.",
          },
        },
        {
          "@type": "Question",
          name: "Is Realm of Ink good for new roguelite players?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but the reward system can feel confusing at first. Start with the Beginner Guide, learn Ink Gems and Curios, then use simple routes like Red Crit before forcing advanced builds.",
          },
        },
        {
          "@type": "Question",
          name: "Which Realm of Ink guide should I read first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Beginner Guide first if you are new. Read Best Builds if your damage falls off. Read Ink Gems and Curios if reward choices confuse you. Read Oread Guide if you want the crossover form. Read Final Boss or Endless and Rupture when you reach endgame.",
          },
        },
        {
          "@type": "Question",
          name: "Are Curios the same as perks in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. In Realm of Ink 1.0, the current in-game term is Curios. Older guides, comments, and discussions may still call them perks.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best builds in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Strong routes include Red Crit, Venom and Ivy DOT, Violeta Primordial Status and Curse, Oread Curse Butterfly and Laser, Momo or Ink Pet builds, and Grace cooldown builds. Use the Best Builds Guide for the full routes.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Oread in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Oread is part of the 1.0 BlazBlue Entropy Effect crossover content. Update the game to 1.0 and check the Fox Inn or hub form unlocks. If she is not available yet, keep progressing the hub unlock system.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock the true ending in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Defeat Book Spirit once through the Story Relics route. After the first Book Spirit clear, the true ending route starts opening.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Endless mode in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Endless mode unlocks after you reach the true ending. After that, use the Archive and Sanctum system with completed-run builds.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next for Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the guide that matches your current problem: Beginner Guide for first runs, Best Builds for damage, Ink Gems and Curios for reward choices, Oread Guide for Oread, Final Boss and True Ending for Book Spirit or Ink God, and Endless and Rupture for endgame.",
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
          title="Start Here for Realm of Ink"
          description="Find the right Realm of Ink guide for your run: beginner tips, builds, Ink Gems, Oread, Book Spirit, true ending, Endless, and Rupture."
          gameTitle="Realm of Ink"
          gameHref="/realm-of-ink"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RealmOfInkGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
