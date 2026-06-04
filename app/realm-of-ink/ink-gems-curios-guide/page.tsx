import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import InkGemsCuriosGuideContent from "@/data/realm-of-ink/ink-gems-curios-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/realm-of-ink/ink-gems-curios-guide`;

const imageUrls = [
  `${siteUrl}/images/realm-of-ink/realm-of-ink-ink-gems-momo-guide.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-momo-ink-fire-pet-build.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-curios-archive-list.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-curios-cursed-variants.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-primordial-ink-archive-entry.webp`,
];

const toc = [
  { id: "ink-gems-curios", label: "Ink Gems and Curios" },
  { id: "how-ink-gems-work", label: "How Ink Gems work" },
  { id: "specific-ink-gems", label: "Specific Ink Gems" },
  { id: "burning-ink", label: "Burning Ink" },
  { id: "venom-ivy-ink", label: "Venom and Ivy Ink" },
  { id: "tiger-ink", label: "Tiger Ink" },
  { id: "grace-ink", label: "Grace Ink" },
  { id: "momo-ink", label: "Momo Ink elements" },
  { id: "curios", label: "Curios / perks" },
  { id: "named-curios", label: "Named Curios" },
  { id: "cursed-curios", label: "Cursed Curios" },
  { id: "primordial-ink", label: "Primordial Ink" },
  { id: "elixirs", label: "Elixirs" },
  { id: "build-matching", label: "Match rewards to builds" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "recommended-reward-checklist", label: "Reward checklist" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/realm-of-ink",
    label: "Realm of Ink Guide Hub",
  },
  {
    href: "/realm-of-ink/beginner-guide",
    label: "Realm of Ink Beginner Guide",
  },
  {
    href: "/realm-of-ink/best-builds",
    label: "Realm of Ink Best Builds Guide",
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
  title: "Realm of Ink Ink Gems & Curios Guide: Momo, Burning, DOT",
  description:
    "Learn Realm of Ink Ink Gems, Curios, Burning Ink, Venom + Ivy, Tiger Ink, Grace Ink, Momo Ink elements, named Curios, and reward choices.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Realm of Ink Ink Gems and Curios Guide: Burning Ink, Momo Ink, Venom, Tiger and Named Curios",
    description:
      "Learn how Ink Gems and Curios work in Realm of Ink, including Burning Ink active timing, Venom and Ivy DOT routes, Tiger crit builds, Grace cooldown routes, Momo Ink elements, named Curios, Primordial Ink, and reward decisions.",
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
    title: "Realm of Ink Ink Gems and Curios Guide",
    description:
      "Learn Burning Ink timing, Venom + Ivy DOT, Tiger crit, Grace cooldown, Momo Ink elements, Curios, and reward choices.",
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
          name: "Ink Gems and Curios Guide",
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
        "Realm of Ink Ink Gems and Curios Guide: Burning Ink, Venom Ink, Ivy Ink, Tiger Ink, Grace Ink, Momo Ink Elements and Named Curios",
      description:
        "A player-focused Realm of Ink Ink Gems and Curios guide for version 1.0. The guide explains how Ink Gems work, how element, rarity, passive bonuses, active skills and Momo interactions affect a run, how Curios replace the older perks terminology, how to use Burning Ink differently in short fights and long boss fights, when Venom Ink and Ivy Ink need status scaling, when Tiger Ink needs crit support, when Grace Ink works with cooldown and skill routes, how the five Momo Ink element types fit pet builds, which named Curios such as Croc Drum, Tempest Ring, Tri-Curse, Glacier Claw, Pellet Drum, Nexus Collar, Psychic Pendant and Quickening Charm support each route, how Primordial Ink changes a two-gem setup, and how to choose rewards without breaking your build.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-04",
      dateModified: "2026-06-04",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Realm of Ink" },
        { "@type": "Thing", name: "Realm of Ink Ink Gems" },
        { "@type": "Thing", name: "Realm of Ink Curios" },
        { "@type": "Thing", name: "Realm of Ink perks" },
        { "@type": "Thing", name: "Realm of Ink Burning Ink" },
        { "@type": "Thing", name: "Realm of Ink Venom Ink" },
        { "@type": "Thing", name: "Realm of Ink Ivy Ink" },
        { "@type": "Thing", name: "Realm of Ink Tiger Ink" },
        { "@type": "Thing", name: "Realm of Ink Grace Ink" },
        { "@type": "Thing", name: "Realm of Ink Flash Ink" },
        { "@type": "Thing", name: "Realm of Ink Momo Ink" },
        { "@type": "Thing", name: "Realm of Ink Momo" },
        { "@type": "Thing", name: "Realm of Ink Ink Pet" },
        { "@type": "Thing", name: "Realm of Ink Croc Drum" },
        { "@type": "Thing", name: "Realm of Ink Tempest Ring" },
        { "@type": "Thing", name: "Realm of Ink Tri-Curse" },
        { "@type": "Thing", name: "Realm of Ink Glacier Claw" },
        { "@type": "Thing", name: "Realm of Ink Pellet Drum" },
        { "@type": "Thing", name: "Realm of Ink Nexus Collar" },
        { "@type": "Thing", name: "Realm of Ink Psychic Pendant" },
        { "@type": "Thing", name: "Realm of Ink Quickening Charm" },
        { "@type": "Thing", name: "Realm of Ink Primordial Ink" },
        { "@type": "Thing", name: "Realm of Ink Elixirs" },
        { "@type": "Thing", name: "Realm of Ink DOT build" },
        { "@type": "Thing", name: "Realm of Ink crit build" },
        { "@type": "Thing", name: "Realm of Ink pet build" },
        { "@type": "Thing", name: "Realm of Ink cooldown build" },
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
          name: "What are Ink Gems in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ink Gems are run upgrades that give passive bonuses and active skills. Their element and rarity also affect Momo's form and progression.",
          },
        },
        {
          "@type": "Question",
          name: "What are Curios in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Curios are the 1.0 name for perks. They add stats, effects, build triggers, boss drops, and sometimes cursed tradeoffs.",
          },
        },
        {
          "@type": "Question",
          name: "Are Curios the same as perks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Older discussions may call them perks, but in Realm of Ink 1.0 they are called Curios.",
          },
        },
        {
          "@type": "Question",
          name: "How should I use Burning Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Burning Ink's active skill often in short fights to convert Burning stacks into burst damage. In long fights, be more careful because overusing the active can waste passive Burning buildup that would have kept scaling.",
          },
        },
        {
          "@type": "Question",
          name: "Is Venom Ink good in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but Venom Ink needs status support. Pair it with Ivy Ink, status effect damage, status duration, status stack limit, Tri-Curse, Glacier Claw, or repeated hits.",
          },
        },
        {
          "@type": "Question",
          name: "Is Tiger Ink good in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Tiger Ink is good for crit builds when you have crit rate, crit damage, fast attacks, Croc Drum, Tempest Ring, or other crit support. Do not take it without a crit plan.",
          },
        },
        {
          "@type": "Question",
          name: "How should I use Grace Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Grace Ink when your run has cooldown, skill trigger, or Ink Relic support. It works better with Flash Ink, Psychic Pendant, Quickening Charm, cooldown reduction, or repeated skill-use effects.",
          },
        },
        {
          "@type": "Question",
          name: "How many Momo Ink types are there?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are five Momo Ink element types: Wood, Metal, Water, Fire, and Earth. Each points toward a different pet-style route, so do not treat all Momo Ink as the same pickup.",
          },
        },
        {
          "@type": "Question",
          name: "Is Momo Ink good in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Momo Ink is good if you want a pet route. It gives Ink Pet support, but you should pair it with Curios and Elixirs that also improve pet damage, extra pets, pet attack speed, or pet inheritance.",
          },
        },
        {
          "@type": "Question",
          name: "What Curios should I look for?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Look for Curios that match your route. Croc Drum and Tempest Ring fit crit builds, Tri-Curse and Glacier Claw fit DOT or curse routes, Nexus Collar fits pet builds, and Psychic Pendant or Quickening Charm can support cooldown and skill routes.",
          },
        },
        {
          "@type": "Question",
          name: "Should I pick the highest-rarity Ink Gem?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Pick the Ink Gem that supports your build. A lower-rarity gem that fits your plan can be better than a higher-rarity gem that breaks your setup.",
          },
        },
        {
          "@type": "Question",
          name: "How do Ink Gems affect Momo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your equipped Ink Gem elements affect Momo's form, and Ink Gem rarity affects Momo's progression and strength.",
          },
        },
        {
          "@type": "Question",
          name: "What is Primordial Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Primordial Ink is a form-exclusive Ink route that requires a Primordial Ink Curio and two rare-or-better Ink Gems. It replaces your normal two-gem setup.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always take Primordial Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Take Primordial Ink only when it supports your current character and build. It can be wrong if your two Ink Gems and Momo form are already carrying the run.",
          },
        },
        {
          "@type": "Question",
          name: "Are cursed Curios worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cursed Curios are worth it when the upside fits your build and the downside is manageable. Do not take them if you are already struggling to survive.",
          },
        },
        {
          "@type": "Question",
          name: "What should I upgrade first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upgrade the Ink Gem that your build will keep using. Do not spend shards on a temporary gem unless it solves an immediate problem.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my build feel weak?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your Ink Gems, Curios, and Elixirs probably do not support the same route. Start with the named pieces you already have, then choose rewards that multiply them instead of pulling the run in a different direction.",
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
          title="Which Ink Gems and Curios Should You Pick?"
          description="Learn when to use Burning Ink, Venom + Ivy, Tiger Ink, Grace Ink, Momo Ink, named Curios, Primordial Ink, and reward choices without breaking your build."
          gameTitle="Realm of Ink"
          gameHref="/realm-of-ink"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <InkGemsCuriosGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
