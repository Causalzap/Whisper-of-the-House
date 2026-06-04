import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestBuildsContent from "@/data/realm-of-ink/best-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/realm-of-ink/best-builds`;

const imageUrls = [
  `${siteUrl}/images/realm-of-ink/realm-of-ink-violeta-rupture-50-build.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-butterfly-lasers.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-power-of-prayer.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-spiraling-light-dance-speed.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-spiraling-light-dance-sigil.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-book-spirit-clear.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-difficulty-rupture-doctor.webp`,
];

const toc = [
  { id: "best-builds", label: "Best builds" },
  { id: "violeta-status-curse", label: "Violeta status / curse" },
  { id: "red-build", label: "Red build" },
  { id: "red-crit-build", label: "Red Crit" },
  { id: "red-dot-build", label: "Red DOT choice" },
  { id: "dot-build", label: "Venom + Ivy DOT" },
  { id: "oread-build", label: "Oread build" },
  { id: "oread-power-of-prayer", label: "Power of Prayer" },
  { id: "oread-butterfly-array-choice", label: "Oread Speed vs Sigil" },
  { id: "momo-pet-build", label: "Momo pet build" },
  { id: "wang-ding-ning-ye", label: "Wang Ding / Ning Ye" },
  { id: "boss-builds", label: "Boss builds" },
  { id: "high-difficulty-builds", label: "High difficulty" },
  { id: "common-mistakes", label: "Build mistakes" },
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
    href: "/realm-of-ink/oread-guide",
    label: "Realm of Ink Oread Guide",
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
  title: "Realm of Ink Best Builds: Violeta, Oread, Red & DOT",
  description:
  "Build stronger Realm of Ink runs with Violeta, Oread, Red Crit, Venom + Ivy DOT, Momo pets, boss setups, Dragon Hair Brush, and Rupture tips.",  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Realm of Ink Best Builds Guide: Violeta, Oread, Red Crit, Venom DOT and Momo Pets",
    description:
      "Build stronger Realm of Ink runs with Violeta Primordial status, Oread curse lasers, Red Crit, Venom + Ivy DOT, Momo pet support, boss builds, and high difficulty advice.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Realm of Ink Violeta Primordial Ink build with Viperous Beauty status and curse scaling.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realm of Ink Best Builds Guide",
    description:
      "Use Violeta status, Oread lasers, Red Crit, Venom + Ivy DOT, and Momo pet builds for bosses, Dragon Hair Brush, and Rupture.",
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
          name: "Best Builds Guide",
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
        "Realm of Ink Best Builds Guide: Violeta, Oread, Red Crit, Venom DOT, Momo Pets, Bosses and Rupture",
      description:
        "A player-focused Realm of Ink best builds guide for version 1.0. The guide explains tested and practical build routes including Violeta Primordial Status and Curse with Viperous Beauty, Oread Curse Butterfly and Laser with Power of Prayer, Red Crit with Tiger Ink, Venom Ink and Ivy Ink DOT scaling, Momo Ink and Ink Pet support builds, and early direction notes for Wang Ding and Ning Ye. It also covers which builds fit bosses like Book Spirit and Ink God, when to use each route for Dragon Hair Brush or Rupture, and how to avoid common build mistakes such as forcing DOT without status scaling or taking pet rewards without enough pet support.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-04",
      dateModified: "2026-06-04",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Realm of Ink" },
        { "@type": "Thing", name: "Realm of Ink best builds" },
        { "@type": "Thing", name: "Realm of Ink build guide" },
        { "@type": "Thing", name: "Realm of Ink Violeta build" },
        { "@type": "Thing", name: "Realm of Ink Oread build" },
        { "@type": "Thing", name: "Realm of Ink Red build" },
        { "@type": "Thing", name: "Realm of Ink Red Crit build" },
        { "@type": "Thing", name: "Realm of Ink DOT build" },
        { "@type": "Thing", name: "Realm of Ink Venom Ink" },
        { "@type": "Thing", name: "Realm of Ink Ivy Ink" },
        { "@type": "Thing", name: "Realm of Ink Tiger Ink" },
        { "@type": "Thing", name: "Realm of Ink Momo Ink" },
        { "@type": "Thing", name: "Realm of Ink Momo pet build" },
        { "@type": "Thing", name: "Realm of Ink Primordial Ink" },
        { "@type": "Thing", name: "Realm of Ink Viperous Beauty" },
        { "@type": "Thing", name: "Realm of Ink Power of Prayer" },
        { "@type": "Thing", name: "Realm of Ink Butterfly Roosting Call" },
        { "@type": "Thing", name: "Realm of Ink Six-Line Secret Art" },
        { "@type": "Thing", name: "Realm of Ink Spiraling Light Dance" },
        { "@type": "Thing", name: "Realm of Ink Butterfly Manipulation Art" },
        { "@type": "Thing", name: "Realm of Ink Croc Drum" },
        { "@type": "Thing", name: "Realm of Ink Tempest Ring" },
        { "@type": "Thing", name: "Realm of Ink Tri-Curse" },
        { "@type": "Thing", name: "Realm of Ink Glacier Claw" },
        { "@type": "Thing", name: "Realm of Ink Book Spirit" },
        { "@type": "Thing", name: "Realm of Ink Ink God" },
        { "@type": "Thing", name: "Realm of Ink Dragon Hair Brush" },
        { "@type": "Thing", name: "Realm of Ink Rupture" },
        { "@type": "Thing", name: "Realm of Ink Wang Ding build" },
        { "@type": "Thing", name: "Realm of Ink Ning Ye build" },
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
          name: "What is the best build in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The strongest tested build here is Violeta Primordial Status and Curse with Viperous Beauty, status effect damage, curse effect, heavy attacks, Ink Relic skill damage, crit, and all damage bonus.",
          },
        },
        {
          "@type": "Question",
          name: "Which Red build is easiest to start with?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Red Crit Build is the easiest starting route. Look for Tiger Ink, crit rate, crit damage, On Target-style support, Croc Drum, Tempest Ring, and fast light attack pressure.",
          },
        },
        {
          "@type": "Question",
          name: "Is Red Crit better than Red DOT?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Red Crit is easier to start with because the goal is direct: crit more often and make crits hit harder. Red DOT can scale well with Venom Ink and Ivy Ink, but it needs enough status application and status effect damage to feel good.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Oread build in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Oread's best route is Curse Butterfly and Laser. Use Butterfly Roosting Call, Six-Line Secret Art, Power of Prayer, Spiraling Light Dance, Butterfly Manipulation Art, curse effect, ability damage, and laser payoff.",
          },
        },
        {
          "@type": "Question",
          name: "Is Venom Ink good in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, Venom Ink is good when your run can apply poison often and support it with status effect damage, status duration, stack limit, or other status pieces like Ivy Ink.",
          },
        },
        {
          "@type": "Question",
          name: "Is Tiger Ink good in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Tiger Ink is good for crit-focused builds, especially on Red or other fast-hit routes that can use crit rate and crit damage consistently.",
          },
        },
        {
          "@type": "Question",
          name: "Can pet builds work at Dragon Hair Brush?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but only with real pet support. Momo Ink, pet damage, extra pets, pet attack speed, and pet inheritance need to stack together. A single pet bonus usually falls off in high difficulty.",
          },
        },
        {
          "@type": "Question",
          name: "Does Wang Ding have a recommended build?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For Wang Ding, look for heavy attack, burst, clone, shockwave, or single-hit payoff support. Do not force him into a Violeta-style status build unless the run clearly gives you those pieces.",
          },
        },
        {
          "@type": "Question",
          name: "Does Ning Ye have a recommended build?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For Ning Ye, start from the first strong route your run gives you: crit, status, skill use, or safer multi-hit pressure. Build around the rewards that appear instead of copying Oread or Violeta directly.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always take Primordial Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Primordial Ink is strongest when it becomes the center of your route. Do not take it if your current two-Ink-Gem setup and Momo form are already carrying the run.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my build lose damage late?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "First check your named pieces. If your Curios reward heavy attacks but your Ink Gems are pushing pets, your build is split. If you have Venom Ink but no status damage, your DOT route is unfinished. If you have Tiger Ink but no crit scaling, the crit route is incomplete.",
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
          title="Which Builds Should You Use in Realm of Ink?"
          description="Use Violeta for Primordial status damage, Oread for curse lasers, Red Crit for a simple starter route, Venom + Ivy for DOT, and Momo Ink when pets are actually scaling."
          gameTitle="Realm of Ink"
          gameHref="/realm-of-ink"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BestBuildsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
