import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarFarWestGhostBellContent from "@/data/far-far-west/ghost-bell-shard-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/far-far-west/ghost-bell-shard-locations`;

export const metadata: Metadata = {
  title: "Far Far West Bell Locations & Bell Order: Bellshot Guide",
  description:
    "Find all 3 bell locations in Far Far West, solve each bell order puzzle, return to the Great Bell, and unlock the Bellshot / Bell Shot Joker.",
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
          name: "Bell Locations & Bell Order",
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
      headline: "Far Far West Bell Locations & Bell Order: How to Unlock Bellshot",
      description:
        "This Far Far West bell guide shows all 3 bell locations, how to solve each bell order puzzle, where to ring the Great Bell, and how to unlock Bellshot / Bell Shot Joker.",
      image: [
        `${siteUrl}/images/far-far-west/ghost-bell-route-map.webp`,
        `${siteUrl}/images/far-far-west/ghost-bell-shard-1-church.webp`,
        `${siteUrl}/images/far-far-west/ghost-bell-shard-2-zipline.webp`,
        `${siteUrl}/images/far-far-west/ghost-bell-shard-3-beach.webp`,
        `${siteUrl}/images/far-far-west/great-bell-return.webp`,
        `${siteUrl}/images/far-far-west/bellshot-reward.webp`,
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
          name: "Far Far West bell locations",
        },
        {
          "@type": "Thing",
          name: "Far Far West bell order",
        },
        {
          "@type": "Thing",
          name: "Bell order puzzle",
        },
        {
          "@type": "Thing",
          name: "Ghost Bell Shards",
        },
        {
          "@type": "Thing",
          name: "Bellshot",
        },
        {
          "@type": "Thing",
          name: "Bell Shot Joker",
        },
        {
          "@type": "Thing",
          name: "Great Bell",
        },
        {
          "@type": "Thing",
          name: "Far West secret",
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
          name: "Where are all bell locations in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are three bell locations on the Far West map: the church-side floor bell, the northwest zipline cliff bell, and the northern beach bell. Complete the bell order puzzle at each one, then return to the Great Bell.",
          },
        },
        {
          "@type": "Question",
          name: "What is the bell order in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The bell order is shown by the ghost bells during each puzzle attempt. Watch the full sequence first, then shoot the bells in the same order they appeared.",
          },
        },
        {
          "@type": "Question",
          name: "How do you unlock Bellshot in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Complete all three bell order puzzles, collect the three Ghost Bell Shards, then return to the Great Bell on the church tower to unlock Bellshot.",
          },
        },
        {
          "@type": "Question",
          name: "Why did Bellshot not unlock after collecting three shards?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After collecting all three Ghost Bell Shards, you still need to return to the church tower and ring the Great Bell. Bellshot unlocks after this final step.",
          },
        },
        {
          "@type": "Question",
          name: "Can you retry the bell order puzzle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you fail the bell order puzzle, interact with the floor bell again, watch the sequence, and shoot the bells in the same order.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the first bell location in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The first bell location is the church-side floor bell. Do not confuse it with the Great Bell on the church tower.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the second bell location in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The second bell location is at the northwest zipline cliff. From the church anchor, follow the marked northwest route and take the zipline path up the cliff face.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the third bell location in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The third bell location is on the northern beach near the top edge of the Far West map. From the church, ride north toward Marker 3.",
          },
        },
        {
          "@type": "Question",
          name: "Is Bellshot the same as Bell Shot Joker?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Players may search for it as Bellshot, Bell Shot, or Bell Shot Joker. This guide covers the secret bell route that unlocks that reward.",
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
          title="Far Far West Bell Locations & Bell Order: How to Unlock Bellshot"
          description="Find all 3 bell locations in Far Far West, solve each bell order puzzle, return to the Great Bell, and unlock the Bellshot / Bell Shot Joker."
          gameTitle="Far Far West"
          gameHref="/far-far-west/secret-missions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 3, 2026"
          toc={[
            {
              id: "all-3-ghost-bell-shards-checklist",
              label: "All bell locations",
            },
            {
              id: "ghost-bell-route-summary",
              label: "Quick route",
            },
            {
              id: "how-the-bell-mini-game-works",
              label: "Bell order puzzle",
            },
            {
              id: "bell-shard-1-church",
              label: "Bell Location 1",
            },
            {
              id: "bell-shard-2-zipline",
              label: "Bell Location 2",
            },
            {
              id: "bell-shard-3-beach",
              label: "Bell Location 3",
            },
            {
              id: "return-to-the-great-bell",
              label: "Great Bell",
            },
            {
              id: "bellshot-reward",
              label: "Bellshot reward",
            },
            {
              id: "ghost-bell-troubleshooting",
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
              href: "/far-far-west/canyon-secret-medallion-locations",
              label: "Canyon Medallion Locations & Pick Pick Joker",
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
          <FarFarWestGhostBellContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}