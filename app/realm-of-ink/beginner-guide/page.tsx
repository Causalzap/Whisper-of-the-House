import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/realm-of-ink/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/realm-of-ink/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/realm-of-ink/realm-of-ink-ink-gems-momo-guide.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-curios-cursed-variants.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-primordial-ink-exchange.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-difficulty-rupture-doctor.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-endless-archive-sanctum.webp`,
];

const toc = [
  { id: "what-is-realm-of-ink", label: "What is Realm of Ink?" },
  { id: "combat-basics", label: "Combat basics" },
  { id: "ink-gems", label: "Ink Gems" },
  { id: "momo", label: "Momo" },
  { id: "visibility", label: "Visibility" },
  { id: "curios", label: "Curios / perks" },
  { id: "way-stations", label: "Way Stations" },
  { id: "challenge-rooms", label: "Challenge Rooms" },
  { id: "fox-blood-talents", label: "Fox Blood talents" },
  { id: "primordial-ink", label: "Primordial Ink" },
  { id: "elixirs", label: "Elixirs" },
  { id: "difficulty", label: "Difficulty and Rupture" },
  { id: "endless-mode", label: "Endless mode" },
  { id: "common-mistakes", label: "Beginner mistakes" },
  { id: "what-to-read-next", label: "What to read next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/realm-of-ink",
    label: "Realm of Ink Guide Hub",
  },
  {
    href: "/realm-of-ink/oread-guide",
    label: "Realm of Ink Oread Guide",
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
    href: "/realm-of-ink/final-boss-true-ending",
    label: "Realm of Ink Final Boss and True Ending Guide",
  },
  {
    href: "/realm-of-ink/endless-rupture-guide",
    label: "Realm of Ink Endless and Rupture Guide",
  },
];

export const metadata: Metadata = {
  title: "Realm of Ink Beginner Guide: Ink Gems, Momo & Curios",
  description:
    "Start strong in Realm of Ink with beginner tips for Ink Gems, Momo, Curios, Way Stations, challenge rooms, Fox Blood, Primordial Ink, and Rupture.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Realm of Ink Beginner Guide: Ink Gems, Momo, Curios, Combat Tips and First Runs",
    description:
      "Learn the Realm of Ink systems that matter first: Ink Gems, Momo, Curios, dash heavy attacks, challenge rooms, Way Stations, Fox Blood talents, Primordial Ink, difficulty, Rupture and Endless mode.",
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
    title: "Realm of Ink Beginner Guide",
    description:
      "Learn Ink Gems, Momo, Curios, Way Stations, challenge rooms, Fox Blood talents, Primordial Ink, Rupture and early build mistakes.",
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
          item: `${siteUrl}/realm-of-ink`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
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
        "Realm of Ink Beginner Guide: Ink Gems, Momo, Curios, Combat Tips, Challenge Rooms, Fox Blood Talents and First Runs",
      description:
        "A player-focused Realm of Ink beginner guide for version 1.0. The guide explains the first systems new players should understand, including Ink Gems, Momo and Ink Pet forms, Curios as the new name for perks, dash plus held heavy attack combat tips, Ink Gem visibility and visual clutter, Way Station NPCs, purple challenge room decisions, Fox Blood and early Talent priorities, Primordial Ink, Elixirs, difficulty 7 Dragon Hair Brush, Rupture modifiers, Endless mode through Archive and Sanctum, and common mistakes that cause early builds to fall off.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-04",
      dateModified: "2026-06-04",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Realm of Ink" },
        { "@type": "Thing", name: "Realm of Ink beginner guide" },
        { "@type": "Thing", name: "Realm of Ink tips" },
        { "@type": "Thing", name: "Realm of Ink Ink Gems" },
        { "@type": "Thing", name: "Realm of Ink Momo" },
        { "@type": "Thing", name: "Realm of Ink Ink Pet" },
        { "@type": "Thing", name: "Realm of Ink Curios" },
        { "@type": "Thing", name: "Realm of Ink perks" },
        { "@type": "Thing", name: "Realm of Ink challenge rooms" },
        { "@type": "Thing", name: "Realm of Ink Way Stations" },
        { "@type": "Thing", name: "Realm of Ink Fox Blood" },
        { "@type": "Thing", name: "Realm of Ink Talents" },
        { "@type": "Thing", name: "Realm of Ink Primordial Ink" },
        { "@type": "Thing", name: "Realm of Ink Elixirs" },
        { "@type": "Thing", name: "Realm of Ink Dragon Hair Brush" },
        { "@type": "Thing", name: "Realm of Ink Rupture" },
        { "@type": "Thing", name: "Realm of Ink Endless mode" },
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
          name: "Are Curios the same as perks in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. In Realm of Ink 1.0, perks are called Curios. Older guides, videos, and Steam discussions may still use the word perks.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose Ink Gems first or Curios first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "During a run, Curios are usually harder to undo than Ink Gems. If you already have strong Curios, choose Ink Gems that support those Curios.",
          },
        },
        {
          "@type": "Question",
          name: "How do I lunge forward with heavy attack in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Dash first, then hold heavy attack. This creates a forward lunge-style punish that helps you close distance more safely.",
          },
        },
        {
          "@type": "Question",
          name: "Are purple challenge rooms worth it in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Enter purple challenge rooms when your build is strong and your HP is safe. Skip them when your damage is low, your HP is low, or the reward will not fix your current problem.",
          },
        },
        {
          "@type": "Question",
          name: "Why do my own effects make fights hard to read?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Some Ink Gems, Momo forms, circles, pets, butterflies, lasers, and status effects create visual noise. Adjust Ink Gem transparency if your own effects hide enemy attacks.",
          },
        },
        {
          "@type": "Question",
          name: "Can Momo projectiles hurt me in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your own Momo effects may look dangerous, but they are part of your build. Learn which effects are yours so you do not dodge your own damage.",
          },
        },
        {
          "@type": "Question",
          name: "What should I buy first at Way Stations?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you are injured, buy healing food first. If your HP is safe, buy Curios, Elixirs, or Ink Gem upgrades that support your current build.",
          },
        },
        {
          "@type": "Question",
          name: "What should I spend Fox Blood on first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Prioritize upgrades that improve consistency, such as rerolls, starting options, and survival passives. Save niche upgrades for later.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always take Primordial Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Primordial Ink is strong, but it replaces your normal two-Ink-Gem setup. Take it when it supports your current form and build.",
          },
        },
        {
          "@type": "Question",
          name: "When should I increase difficulty in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Increase difficulty after normal clears feel stable. Dragon Hair Brush and Rupture are more enjoyable when you already understand your build and boss damage.",
          },
        },
        {
          "@type": "Question",
          name: "What is Endless mode in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Endless mode uses a completed run's build through the Archive and Sanctum system. Enter with a strong final build, not one that barely cleared.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my damage fall off in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "First check your Curios. If two or more Curios reward the same attack type, status effect, pet damage, curse effect, or Ink Relic skill use, that is probably your real damage plan. Then check whether your Ink Gems and Elixirs multiply that plan or pull the run in a different direction.",
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
          title="New to Realm of Ink? Start Here"
          description="Learn the systems that actually decide your first clears: Ink Gems, Momo, Curios, Way Stations, challenge rooms, Fox Blood, Primordial Ink, Rupture, and basic combat habits."
          gameTitle="Realm of Ink"
          gameHref="/realm-of-ink"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
