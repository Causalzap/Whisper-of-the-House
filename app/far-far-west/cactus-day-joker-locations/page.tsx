import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarFarWestCactusDayContent from "@/data/far-far-west/cactus-day-joker-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/far-far-west/cactus-day-joker-locations`;

export const metadata: Metadata = {
  title: "Far Far West Cactus Day Joker Locations Guide",
  description:
    "Find every child cactus and parent cactus in Far Far West, complete the Desert Cactus Day secret, and unlock the Cactus Day Joker.",
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
          name: "Cactus Day Joker Locations",
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
      headline: "Far Far West Cactus Day Joker Locations: How to Unlock Cactus Day Joker",
      description:
        "This Far Far West Cactus Day guide shows where to find all 6 child cactuses and 6 parent cactuses, complete the Desert Cactus Day secret, and unlock the Cactus Day Joker.",
      image: [
        `${siteUrl}/images/far-far-west/cactus-day-locations-map.webp`,
        `${siteUrl}/images/far-far-west/cactus-day-child-cactus.webp`,
        `${siteUrl}/images/far-far-west/cactus-day-joker-reward.webp`,
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
          name: "Cactus Day",
        },
        {
          "@type": "Thing",
          name: "Cactus Joker",
        },
        {
          "@type": "Thing",
          name: "Desert Secret",
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
          name: "How many Cactuses are in Cactus Day?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 12 cactuses involved: six child cactuses and six parent cactuses.",
          },
        },
        {
          "@type": "Question",
          name: "What do the X markers mean on the Cactus Day map?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "X markers show child cactus locations. Pick up the child cactus from the X marker and carry it to the matching parent.",
          },
        },
        {
          "@type": "Question",
          name: "What do the circle markers mean on the Cactus Day map?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Circle markers show parent cactus locations. Each parent should match one child with the same color or label.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know which child cactus belongs to which parent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the matching colors or letters on the annotated map. Child A goes to Parent A, Child B goes to Parent B, and so on.",
          },
        },
        {
          "@type": "Question",
          name: "What reward do I get from Cactus Day?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You unlock the Cactus Day Joker after completing the Desert Cactus Day secret.",
          },
        },
        {
          "@type": "Question",
          name: "Can I solve Cactus Day from dialogue hints?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but it is slower. The marked map is much faster and less confusing.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Cactus Day take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With a marked map, expect about 10-14 minutes. It can take much longer if you solve it only from dialogue hints or deliver children to the wrong parents.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use my horse while carrying a child cactus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. While carrying a child cactus, you cannot use your horse normally, so plan the route before picking it up.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Cactus Day Joker do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cactus Day has a chance on kill to spawn cactus mines near where the enemy died. It is useful for AoE clear.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do Cactus Day before the boss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Finish Cactus Day before killing the boss or starting extraction, because the route requires carrying multiple child cactuses across the Desert map.",
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
          title="Far Far West Cactus Day Joker Locations Guide"
          description="Find every child cactus and parent cactus in Far Far West, complete the Desert Cactus Day secret, and unlock the Cactus Day Joker."
          gameTitle="Far Far West"
          gameHref="/far-far-west/secret-missions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 30, 2026"
          toc={[
            {
              id: "cactus-day-map-markers",
              label: "Map Markers",
            },
            {
              id: "all-cactus-pairings",
              label: "All Cactus Pairings",
            },
            {
              id: "cactus-day-route-summary",
              label: "Route Summary",
            },
            {
              id: "how-cactus-day-works",
              label: "How Cactus Day Works",
            },
            {
              id: "cactus-day-joker-reward",
              label: "Cactus Day Joker Reward",
            },
            {
              id: "cactus-day-troubleshooting",
              label: "Troubleshooting",
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
              href: "/far-far-west/ghost-bell-shard-locations",
              label: "Ghost Bell Shard Locations",
            },
            {
              href: "/far-far-west/woodlands-mushroom-sequence",
              label: "Woodlands Mushroom Sequence Guide",
            },
            {
                href: "/far-far-west/snowman-parts-locations",
                label: "Snowman Parts Locations",
              },
            {
              href: "/far-far-west/area-41-symbol-order",
              label: "Area 41 Symbol Order Guide",
            },
          ]}
        >
          <FarFarWestCactusDayContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}