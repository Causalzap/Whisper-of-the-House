import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarFarWestCanyonSecretContent from "@/data/far-far-west/canyon-secret-medallion-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/far-far-west/canyon-secret-medallion-locations`;

export const metadata: Metadata = {
  title: "Far Far West Canyon Secret Guide: All 4 Medallion Locations",
  description:
    "Find all 4 Canyon medallions in Far Far West, including the Sheriff, Prospector, Bobby Dynamiter, and Johnny Hawkeye medallions, plus the Pigpick Joker and Elder Pickaxe rewards.",
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
          name: "Canyon Secret Medallion Locations",
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
      headline: "Far Far West Canyon Secret Guide: All 4 Medallion Locations",
      description:
        "This Far Far West Canyon secret guide shows where to find all 4 medallions, including the Sheriff Medallion, Prospector Medallion, Bobby Dynamiter Medallion, and Johnny Hawkeye Medallion. It also covers the 10 Hawkeye bullseye targets, Canyon secret door, Pigpick / Pick Pick Joker, Elder Pickaxe, and common fixes.",
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
      dateModified: "2026-04-30",
      about: [
        {
          "@type": "VideoGame",
          name: "Far Far West",
        },
        {
          "@type": "Thing",
          name: "Far Far West Canyon secret",
        },
        {
          "@type": "Thing",
          name: "Far Far West Canyon medallions",
        },
        {
          "@type": "Thing",
          name: "Sheriff Medallion",
        },
        {
          "@type": "Thing",
          name: "Prospector Medallion",
        },
        {
          "@type": "Thing",
          name: "Bobby Dynamiter Medallion",
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
          name: "Pigpick Joker",
        },
        {
          "@type": "Thing",
          name: "Pick Pick Joker",
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
          name: "How many medallions do I need for the Canyon secret in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need four medallions: Sheriff, Prospector, Bobby / Dynamiter, and Johnny Hawkeye.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the first Canyon medallion in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The first medallion is on the sheriff body near the four-slot Canyon secret door.",
          },
        },
        {
          "@type": "Question",
          name: "Where are the Prospector Medallion and shovel in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Prospector Medallion and shovel are both in the under-bridge prospector area. Drop under the bridge, pick up a shovel near the buried mounds, then dig the mounds with small rocks on top until the medallion appears.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Bobby's Medallion in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use lit dynamite to blow through the glowing red or gray rocks in the mine area. Bobby's Medallion is inside after you open the path.",
          },
        },
        {
          "@type": "Question",
          name: "How do I open the Hawkeye safe in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shoot all 10 bullseye targets around the Hawkeye safe area. The safe opens when the counter reaches zero.",
          },
        },
        {
          "@type": "Question",
          name: "What should I check if the Hawkeye safe is stuck at 1?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check target 10 first. In the numbered collage, target 10 is near the tall hanging pipe or wooden support. Then recheck targets 3, 5, and 9.",
          },
        },
        {
          "@type": "Question",
          name: "How do I open the Canyon secret door in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Return to the four-slot door after collecting all four medallions, then insert them into the sockets. The door opens automatically after all four medallions are placed.",
          },
        },
        {
          "@type": "Question",
          name: "What reward do you get from the Canyon secret in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get the Pigpick / Pick Pick Joker, access to the Elder Pickaxe, and extra gold inside the secret cave.",
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
          name: "Is Pigpick / Pick Pick worth using in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It is especially useful with fast-hit weapons because more hits mean more chances to trigger damaging pickaxes.",
          },
        },
        {
          "@type": "Question",
          name: "Can I do the Canyon secret on any difficulty?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Canyon secret can be completed on any difficulty.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do the Canyon secret before the boss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Finish the Canyon secret before killing the boss or starting extraction. The route is long, and the Hawkeye target section is harder under pressure.",
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
          title="Far Far West Canyon Secret Guide: All 4 Medallion Locations"
          description="Find every Canyon medallion in Far Far West, solve the Johnny Hawkeye 10-target puzzle, open the secret cave, and claim the Pigpick Joker and Elder Pickaxe rewards."
          gameTitle="Far Far West"
          gameHref="/far-far-west/secret-missions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 30, 2026"
          toc={[
            {
              id: "how-to-read-the-canyon-map",
              label: "Canyon map",
            },
            {
              id: "all-4-medallions-checklist",
              label: "Medallion checklist",
            },
            {
              id: "canyon-secret-route-summary",
              label: "Route summary",
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
              label: "Prospector Medallion",
            },
            {
              id: "bobby-dynamiter-medallion",
              label: "Bobby Medallion",
            },
            {
              id: "hawkeye-medallion",
              label: "Hawkeye targets",
            },
            {
              id: "inside-the-canyon-secret-cave",
              label: "Secret cave rewards",
            },
            {
              id: "pigpick-joker-reward",
              label: "Pigpick Joker",
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
              label: "Ghost Bell Shard Locations",
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
          ]}
        >
          <FarFarWestCanyonSecretContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}