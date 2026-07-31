import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowManyDudesBestBuildsContent from "@/data/how-many-dudes/best-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-many-dudes`;
const pageUrl = `${hubUrl}/best-builds`;

const imageUrls = [
  `${siteUrl}/images/how-many-dudes/how-many-dudes-warlock-chef-time-ranger-mutant-build.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-time-dude-goat-win-stats.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-cyborg-samurai-assassin-franken-general-build.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-cyborg-goat-round-105-win.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-cave-cleric-vampire-ghost-medic-build.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-cave-painting-15-percent-max-hp.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-cave-dude-157k-damage.webp`,
];

export const metadata: Metadata = {
  title: "How Many Dudes Best Builds: 3 Proven Tier 1 Teams",
  description:
    "Use three tested How Many Dudes builds for Warlock, Cyborg, or Cave routes, with recruit order, role checks, Relic priorities, and verified results.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How Many Dudes Best Builds: Warlock, Cyborg and Cave",
    description:
      "Compare three Tier 1-winning five-Type teams, learn their recruit order and role split, and see when to keep scaling, add support, or abandon the draft.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "How Many Dudes Cyborg, Samurai, Assassin, Franken, and General build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Dudes Best Builds",
    description:
      "Choose between tested Warlock, Cyborg, and Cave five-Type teams with recruit orders, role checks, Relic priorities, and verified Tier 1 results.",
    images: [imageUrls[2]],
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
          name: "How Many Dudes Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Builds",
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
        "How Many Dudes Best Builds: Three Proven Five-Type Teams",
      description:
        "This How Many Dudes best builds guide compares three five-Type teams that completed Tier 1: Warlock, Chef, Time, Mutant and Ranger; Cyborg, Samurai, Assassin, Franken and General; and Cave, Cleric, Vampire, Ghost and Medic. It explains the job each Dude Type performs, tested recruitment orders, how to identify a failing frontline, healing engine or damage engine, when to add more support instead of more carry bodies, which Relic categories change each build, and when a promising draft should be abandoned. Verified results include approximately 304k Cyborg damage, 62k Franken healing and 157k Cave damage, presented as successful-run references rather than universal requirements.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-31",
      dateModified: "2026-07-31",
      about: [
        {
          "@type": "VideoGame",
          name: "How Many Dudes?",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes best builds",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Warlock build",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Cyborg build",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Cave build",
        },
        {
          "@type": "Thing",
          name: "Warlock Chef Time Mutant Ranger build",
        },
        {
          "@type": "Thing",
          name: "Cyborg Samurai Assassin Franken General build",
        },
        {
          "@type": "Thing",
          name: "Cave Cleric Vampire Ghost Medic build",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Tier 1 teams",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes recruit order",
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
          title="The Best How Many Dudes Builds I Have Cleared Tier 1 With"
          description="Choose between a stable Warlock team, a high-damage Cyborg team, and a sustain-heavy Cave team, then recruit according to the job your current roster is still missing."
          gameTitle="How Many Dudes?"
          gameHref="/how-many-dudes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 31, 2026"
          toc={[
            {
              id: "build-checkpoints",
              label: "Build readiness checks",
            },
            {
              id: "warlock-chef-build",
              label: "Warlock & Chef build",
            },
            {
              id: "cyborg-build",
              label: "Cyborg build",
            },
            {
              id: "cave-cleric-build",
              label: "Cave & Cleric build",
            },
            {
              id: "which-build-to-use",
              label: "Which build to choose",
            },
          ]}
          relatedLinks={[
            {
              href: "/how-many-dudes",
              label: "How Many Dudes Guide Hub",
            },
            {
              href: "/how-many-dudes/round-100-guide",
              label: "Round 100 Route Guide",
            },
            {
              href: "/how-many-dudes/goat-boss-guide",
              label: "G.O.A.T. Round 105 Boss Guide",
            },
            {
              href: "/how-many-dudes/relic-combinations",
              label: "Relic Combinations & Shop Choices",
            },
            {
              href: "/how-many-dudes/tier-2-progression",
              label: "Tier 2 Progression Guide",
            },
            {
                href: "/how-many-dudes/achievements-guide",
                label: "All 69 Achievements & Checklist",
              },
          ]}
        >
          <HowManyDudesBestBuildsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}