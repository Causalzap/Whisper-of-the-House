import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarFarWestCanyonSecretContent from "@/data/far-far-west/canyon-secret-medallion-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/far-far-west/canyon-secret-medallion-locations`;

export const metadata: Metadata = {
  title: "Far Far West Canyon Medallions: All 4 Locations & Pick Pick Joker",
  description:
    "Find all 4 Canyon medallions in Far Far West, including the Sheriff, Sweaty / Prospector, Bobby Dynamiter, and Johnny Hawkeye medallions. Includes shovel, dynamite, 10 targets, secret door, and Pick Pick / Pigpick Joker reward.",
  alternates: {
    canonical: pageUrl,
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
          name: "Far Far West Guide",
          item: `${siteUrl}/far-far-west/secret-missions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Canyon Medallions",
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
        "Far Far West Canyon Medallions: All 4 Locations, Shovel, Dynamite & Hawkeye Targets",
      description:
        "This Far Far West Canyon guide shows where to find all 4 medallions, how to get the Sheriff, Sweaty / Prospector, Bobby Dynamiter, and Johnny Hawkeye medallions, how to use the shovel and dynamite, how to shoot all 10 Hawkeye targets, and how to unlock Pick Pick / Pigpick Joker.",
      image: [
        `${siteUrl}/images/far-far-west/canyon-secret-map-overview.webp`,
        `${siteUrl}/images/far-far-west/canyon-secret-medallion-door.webp`,
        `${siteUrl}/images/far-far-west/canyon-sheriff-medallion.webp`,
        `${siteUrl}/images/far-far-west/canyon-prospector-dig-spot.webp`,
        `${siteUrl}/images/far-far-west/canyon-dynamite-mine.webp`,
        `${siteUrl}/images/far-far-west/canyon-hawkeye-targets-map.webp`,
        `${siteUrl}/images/far-far-west/canyon-secret-door-open.webp`,
        `${siteUrl}/images/far-far-west/canyon-elder-pickaxe-reward.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-04-30",
      dateModified: "2026-05-03",
      about: [
        {
          "@type": "VideoGame",
          name: "Far Far West",
        },
        {
          "@type": "Thing",
          name: "Far Far West Canyon medallions",
        },
        {
          "@type": "Thing",
          name: "Canyon secret door",
        },
        {
          "@type": "Thing",
          name: "Sheriff Medallion",
        },
        {
          "@type": "Thing",
          name: "Sweaty / Prospector Medallion",
        },
        {
          "@type": "Thing",
          name: "Sweaty the Gold Prospector",
        },
        {
          "@type": "Thing",
          name: "Canyon shovel",
        },
        {
          "@type": "Thing",
          name: "Bobby Dynamiter Medallion",
        },
        {
          "@type": "Thing",
          name: "Canyon dynamite",
        },
        {
          "@type": "Thing",
          name: "Glowing rocks",
        },
        {
          "@type": "Thing",
          name: "Johnny Hawkeye Medallion",
        },
        {
          "@type": "Thing",
          name: "Hawkeye 10 targets",
        },
        {
          "@type": "Thing",
          name: "Hawkeye safe",
        },
        {
          "@type": "Thing",
          name: "Pick Pick Joker",
        },
        {
          "@type": "Thing",
          name: "Pigpick Joker",
        },
        {
          "@type": "Thing",
          name: "Elder Pickaxe",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "Where are all Canyon medallions in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are four Canyon medallions: the Sheriff Medallion near the secret door, the Sweaty / Prospector Medallion under the bridge, Bobby's Medallion inside the dynamite mine, and Johnny Hawkeye's Medallion from the 10-target safe puzzle.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Sheriff Medallion in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Sheriff Medallion is on the sheriff body near the four-slot Canyon secret door and the wanted note.",
          },
        },
        {
          "@type": "Question",
          name: "Where are the shovel and Prospector Medallion in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The shovel and Prospector Medallion are both in the under-bridge prospector area. Pick up the shovel first, then dig the mounds with small rocks on top until the medallion appears.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the Prospector Medallion not appearing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You may be digging without the shovel, digging the wrong mound, or stopping after getting bones. Pick up the shovel first, then keep digging the nearby mounds until the medallion appears.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Bobby's Medallion in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use lit dynamite to blow through the glowing red or gray rocks in the mine area. Bobby's Medallion is inside the opened mine path.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the dynamite not breaking the rocks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Make sure the dynamite is lit before throwing it, and throw it directly at the glowing rock wall. If the path is not fully open, repeat the dynamite step.",
          },
        },
        {
          "@type": "Question",
          name: "How do I open the Johnny Hawkeye safe in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shoot all 10 bullseye targets around the Hawkeye safe area. The safe counter starts at 10 and reaches 0 after every target has been shot.",
          },
        },
        {
          "@type": "Question",
          name: "What should I check if the Hawkeye safe is stuck at 1?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check target 10 first, especially the high target near the hanging pipe or tall wooden support. Then recheck targets 3, 5, and 9.",
          },
        },
        {
          "@type": "Question",
          name: "How do I open the Canyon secret door in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Collect all four medallions, return to the four-slot Canyon secret door, and insert each medallion into the sockets. The door opens automatically after all four are placed.",
          },
        },
        {
          "@type": "Question",
          name: "What reward do you get from the Canyon secret in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get the Pick Pick / Pigpick Joker, access to the Elder Pickaxe, and extra gold inside the Canyon secret cave.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Elder Pickaxe in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Elder Pickaxe is inside the opened Canyon secret cave. After the door opens, enter the reward area and search the cave before leaving.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do the Canyon secret before the boss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Finish the Canyon secret before killing the boss or starting extraction because the route is long and the Johnny Hawkeye target puzzle is harder under pressure.",
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
          title="Far Far West Canyon Medallions: All 4 Locations, Shovel, Dynamite & Hawkeye Targets"
          description="Find every Canyon medallion in Far Far West, solve the shovel, dynamite, and Johnny Hawkeye target puzzles, open the secret door, and unlock Pick Pick / Pigpick Joker."
          gameTitle="Far Far West"
          gameHref="/far-far-west/secret-missions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 3, 2026"
          toc={[
            {
              id: "how-to-read-the-canyon-map",
              label: "Canyon map",
            },
            {
              id: "all-4-medallions-checklist",
              label: "All medallions",
            },
            {
              id: "canyon-secret-route-summary",
              label: "Quick route",
            },
            {
              id: "canyon-secret-door-location",
              label: "Secret door",
            },
            {
              id: "sheriff-medallion",
              label: "Sheriff Medallion",
            },
            {
              id: "prospector-medallion",
              label: "Shovel / Prospector",
            },
            {
              id: "bobby-dynamiter-medallion",
              label: "Dynamite / Bobby",
            },
            {
              id: "hawkeye-medallion",
              label: "Hawkeye 10 targets",
            },
            {
              id: "inside-the-canyon-secret-cave",
              label: "Secret cave",
            },
            {
              id: "pigpick-joker-reward",
              label: "Pick Pick reward",
            },
            {
              id: "elder-pickaxe-reward",
              label: "Elder Pickaxe",
            },
            {
              id: "canyon-secret-troubleshooting",
              label: "Troubleshooting",
            },
            {
              id: "related-guides",
              label: "Related guides",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/far-far-west/secret-missions",
              label: "All Secret Missions & Secret Jokers Guide",
            },
            {
              href: "/far-far-west/ghost-bell-shard-locations",
              label: "Bell Locations & Bell Order Guide",
            },
            {
              href: "/far-far-west/cactus-day-joker-locations",
              label: "Cactus Day Joker Locations",
            },
            {
              href: "/far-far-west/snowman-parts-locations",
              label: "Snowman Parts Locations",
            },
            {
              href: "/far-far-west/woodlands-mushroom-sequence",
              label: "Woodlands Mushroom Sequence Guide",
            },
            {
              href: "/far-far-west/area-41-symbol-order",
              label: "Area 41 Symbol Order Guide",
            },
            {
              href: "/far-far-west/all-secret-jokers",
              label: "All Secret Jokers & Rewards Guide",
            },
          ]}
        >
          <FarFarWestCanyonSecretContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}