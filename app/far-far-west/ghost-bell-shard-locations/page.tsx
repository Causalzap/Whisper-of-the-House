import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarFarWestGhostBellContent from "@/data/far-far-west/ghost-bell-shard-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/far-far-west/ghost-bell-shard-locations`;

export const metadata: Metadata = {
  title: "Far Far West Ghost Bell Shard Locations & Bellshot Guide",
  description:
    "Find all 3 Ghost Bell Shards in Far Far West, complete the bell order mini-games, return to the Great Bell, and unlock the Bellshot weapon Joker.",
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
          name: "Ghost Bell Shard Locations",
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
      headline: "Far Far West Ghost Bell Shard Locations: How to Unlock Bellshot",
      description:
        "This Far Far West Ghost Bell guide shows where to find all 3 Ghost Bell Shards, how the bell order mini-games work, where to ring the Great Bell, and how to unlock the Bellshot weapon Joker.",
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
      dateModified: "2026-04-30",
      about: [
        {
          "@type": "VideoGame",
          name: "Far Far West",
        },
        {
          "@type": "Thing",
          name: "Far Far West Ghost Bells",
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
          name: "Great Bell",
        },
        {
          "@type": "Thing",
          name: "Far West secret",
        },
        {
          "@type": "Thing",
          name: "Bell order mini-game",
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
          name: "How many Ghost Bell Shards do I need in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need three Ghost Bell Shards to complete the Far West Ghost Bell secret and unlock Bellshot.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the Ghost Bell secret take in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Once your route map is marked, the Ghost Bell route usually takes about 5-8 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the first Ghost Bell Shard in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The first Ghost Bell Shard comes from the church-side floor bell. Do not confuse it with the Great Bell on the church tower.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the second Ghost Bell Shard in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The second Ghost Bell Shard is at the northwest zipline cliff. From the church anchor, follow the marked northwest route and take the zipline path up the cliff face.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the third Ghost Bell Shard in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The third Ghost Bell Shard is on the northern beach near the top edge of the Far West map. From the church, ride north toward Marker 3.",
          },
        },
        {
          "@type": "Question",
          name: "How many bells appear in the Ghost Bell mini-game?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The exact order is shown by the floor bell during your current attempt. Watch the full sequence, count the spawned bells, then shoot them in that same order.",
          },
        },
        {
          "@type": "Question",
          name: "Can I retry the Ghost Bell mini-game?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you fail the bell order, interact with the floor bell again to replay the sequence.",
          },
        },
        {
          "@type": "Question",
          name: "Why did Bellshot not unlock after I collected three shards?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You probably forgot to return to the Great Bell. After collecting all three shards, go back to the church and ring the Great Bell on top of the tower.",
          },
        },
        {
          "@type": "Question",
          name: "What does Bellshot do in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Based on current testing, Bellshot has a chance on weak spot hits to summon a healing ghost bell. Shoot the ghost bell to recover health.",
          },
        },
        {
          "@type": "Question",
          name: "Is Bellshot worth unlocking in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bellshot is one of the best early secret rewards because healing is useful in solo runs, co-op support, and general progression.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do Ghost Bells before the boss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Complete the Ghost Bell route before killing the boss or starting extraction. It is much easier to travel between the church, zipline cliff, and northern beach before the run becomes chaotic.",
          },
        },
        {
          "@type": "Question",
          name: "Can I repeat the Ghost Bell secret?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. After unlocking Bellshot, you can still complete the Ghost Bell route again during Far West runs.",
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
          title="Far Far West Ghost Bell Shard Locations: How to Unlock Bellshot"
          description="Find all three Ghost Bell Shards in Far Far West, complete the bell order mini-games, return to the Great Bell, and unlock Bellshot."
          gameTitle="Far Far West"
          gameHref="/far-far-west"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 30, 2026"
          toc={[
            {
              id: "all-3-ghost-bell-shards-checklist",
              label: "Shard checklist",
            },
            {
              id: "ghost-bell-route-summary",
              label: "Route summary",
            },
            {
              id: "how-the-bell-mini-game-works",
              label: "Bell mini-game",
            },
            {
              id: "bell-shard-1-church",
              label: "Bell Shard 1",
            },
            {
              id: "bell-shard-2-zipline",
              label: "Bell Shard 2",
            },
            {
              id: "bell-shard-3-beach",
              label: "Bell Shard 3",
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
              label: "Canyon Secret: All 4 Medallion Locations",
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
          <FarFarWestGhostBellContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}