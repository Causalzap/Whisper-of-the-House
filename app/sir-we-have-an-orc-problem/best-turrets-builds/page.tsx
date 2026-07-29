import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SirWeHaveAnOrcProblemBestTurretsBuildsContent from "@/data/sir-we-have-an-orc-problem/best-turrets-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sir-we-have-an-orc-problem`;
const pageUrl = `${hubUrl}/best-turrets-builds`;

const imageUrls = [
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-rapid-fire-five-shots.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-3-2-clear.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-flamethrower-burn-corridor.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-laser-bounce-hallway.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-tesla-straggler-cleanup.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-knockback-pushes-orcs-forward.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-layered-burn-gunner-tesla-build.webp`,
];

const toc = [
  {
    id: "turret-tier-list",
    label: "Turret tier list",
  },
  {
    id: "why-builds-fail",
    label: "Why builds fail",
  },
  {
    id: "best-beginner-tower",
    label: "Best beginner tower",
  },
  {
    id: "gunner-cannon-flamethrower",
    label: "Gunner vs Cannon vs Flamethrower",
  },
  {
    id: "laser-mortar-tesla",
    label: "Laser, Mortar & Tesla",
  },
  {
    id: "knockback-direction",
    label: "Knockback direction",
  },
  {
    id: "layered-build",
    label: "Best layered build",
  },
  {
    id: "abilities",
    label: "Abilities & tower builds",
  },
  {
    id: "build-controls",
    label: "Build controls",
  },
  {
    id: "map-examples",
    label: "Builds by map",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/sir-we-have-an-orc-problem",
    label: "Sir, We Have an Orc Problem Guide Hub",
  },
  {
    href: "/sir-we-have-an-orc-problem/best-upgrades-farming",
    label: "Best Upgrades & Farming",
  },
  {
    href: "/sir-we-have-an-orc-problem/level-3-2-guide",
    label: "Level 3.2 Guide",
  },
  {
    href: "/sir-we-have-an-orc-problem/level-6-1-6-2-guide",
    label: "Levels 6.1 & 6.2 Guide",
  },
];

export const metadata: Metadata = {
  title: "Sir, We Have an Orc Problem Best Turrets & Tier List",
  description:
    "Rank every turret, build a layered defense, fix bad knockback, compare Gunner, Cannon and Flamethrower, and stop leaks before the final wave.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Sir, We Have an Orc Problem Turret Tier List & Build Fixes",
    description:
      "Choose the right turret for each route, diagnose why a strong layout still leaks, control knockback direction, and assemble a layered late-game defense.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[6],
        width: 1005,
        height: 565,
        alt: "Sir We Have an Orc Problem layered turret build using burn, direct fire and Tesla cleanup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sir, We Have an Orc Problem Best Turrets & Builds",
    description:
      "Use the turret tier list, fix bad firing angles and knockback, and build burn, direct-damage, control and cleanup layers.",
    images: [imageUrls[6]],
  },
};

const faqEntities = [
  {
    question:
      "How many towers can I place in Sir, We Have an Orc Problem?",
    answer:
      "There is no single universal tower cap because each tower type has its own count upgrades. One More Gunners node increased the Gunner limit from 12 to 13 for 8.17K, while a completed More Cannons 3/3 branch showed a total of four Cannons.",
  },
  {
    question:
      "Should I place every available tower before starting the wave?",
    answer:
      "No. Keeping several towers unplaced during the first test lets you identify the real weak route and spend the remaining placements there instead of overbuilding an area that already holds.",
  },
  {
    question:
      "Is Nuke better than Cryo Beam in Sir, We Have an Orc Problem?",
    answer:
      "They solve different failures. Nuke is better when a dense group has already broken through and needs immediate burst damage. Cryo Beam is better when the permanent towers can still kill the group if its movement is stopped long enough. Neither ability fixes a route with no permanent coverage.",
  },
  {
    question:
      "Does a B-tier turret mean I should avoid it?",
    answer:
      "No. Laser, Mortar and Tesla Coil are placed in B tier because their value depends heavily on geometry and placement. Laser can dominate a hallway, Mortar can control a merge point, and Tesla can save a perfect clear by stopping one late straggler.",
  },
  {
    question:
      "Can I clear late stages without using every tower type?",
    answer:
      "Yes. A successful build needs the required jobs covered rather than every tower represented. Those jobs usually include burn or preparation, sustained damage, route-specific control and late cleanup.",
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
          name: "Sir, We Have an Orc Problem Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Turrets and Tier List",
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
        "Sir, We Have an Orc Problem Best Turrets, Tier List and Layered Builds",
      description:
        "This Sir, We Have an Orc Problem turret guide ranks Gunner, Cannon, Flamethrower, Laser, Mortar and Tesla Coil for reliable progression, then explains how each tower fits into a layered defense. It covers narrow Gunner firing arcs, Penetration and Rapid Fire, Cannon Power Shot, early burn placement, Laser wall geometry, Tesla straggler cleanup, Mortar merge-point control and the knockback directions that can push enemies toward the exit. It also provides a failure-diagnosis route for full-map collapses, single-lane leaks, inconsistent layouts and high-damage towers that attack the wrong area, plus active-ability timing and map-specific adjustments for Levels 3.2, 6.1 and 6.2.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-29",
      dateModified: "2026-07-29",
      about: [
        {
          "@type": "VideoGame",
          name: "Sir, We Have an Orc Problem",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem turret tier list",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem best turrets",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem best builds",
        },
        {
          "@type": "Thing",
          name: "Gunner tower",
        },
        {
          "@type": "Thing",
          name: "Cannon tower",
        },
        {
          "@type": "Thing",
          name: "Flamethrower tower",
        },
        {
          "@type": "Thing",
          name: "Laser tower",
        },
        {
          "@type": "Thing",
          name: "Mortar tower",
        },
        {
          "@type": "Thing",
          name: "Tesla Coil tower",
        },
        {
          "@type": "Thing",
          name: "Rapid Fire upgrade",
        },
        {
          "@type": "Thing",
          name: "Power Shot upgrade",
        },
        {
          "@type": "Thing",
          name: "Cannon and Mortar knockback",
        },
        {
          "@type": "Thing",
          name: "Nuke and Cryo Beam",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem Level 3.2 build",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem Level 6.2 build",
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
          title="How I Build Around Each Turret Without Creating New Leaks"
          description="I use Gunners as the reliable core, apply burn before the main kill zone, aim Cannon and Mortar knockback away from the exit, and reserve Tesla Coils and active abilities for the enemies the main line misses."
          gameTitle="Sir, We Have an Orc Problem"
          gameHref="/sir-we-have-an-orc-problem"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SirWeHaveAnOrcProblemBestTurretsBuildsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}