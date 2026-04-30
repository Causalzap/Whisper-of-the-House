import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarFarWestSnowmanPartsContent from "@/data/far-far-west/snowman-parts-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/far-far-west/snowman-parts-locations`;

export const metadata: Metadata = {
  title: "Far Far West Snowman Parts Locations Guide",
  description:
    "Find the Snowman Cave, Head, Chest, and Body in Far Far North, return every part to the cave, and unlock the Caribou / Carriable skin in Far Far West.",
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
          name: "Snowman Parts Locations",
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
      headline: "Far Far West Snowman Parts Locations Guide",
      description:
        "This Far Far West Snowman Parts guide shows where to find the Snowman Cave, Head, Chest, and Body in Far Far North, how to return the parts safely, and how to unlock the Caribou / Carriable skin.",
      image: [
        `${siteUrl}/images/far-far-west/far-far-north-snowman-parts-map.webp`,
        `${siteUrl}/images/far-far-west/snowman-cave-location.webp`,
        `${siteUrl}/images/far-far-west/snowman-head-location.webp`,
        `${siteUrl}/images/far-far-west/snowman-chest-location.webp`,
        `${siteUrl}/images/far-far-west/snowman-body-location.webp`,
        `${siteUrl}/images/far-far-west/snowman-return-route.webp`,
        `${siteUrl}/images/far-far-west/snowman-skin-reward.webp`,
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
          name: "Far Far North",
        },
        {
          "@type": "Thing",
          name: "Snowman Parts",
        },
        {
          "@type": "Thing",
          name: "Snowman Cave",
        },
        {
          "@type": "Thing",
          name: "Caribou skin",
        },
        {
          "@type": "Thing",
          name: "Carriable skin",
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
          name: "What map is the Snowman Parts secret on?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Snowman Parts secret is on the Far Far North map.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Snowman Cave?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Snowman Cave is the orange cave icon on the west side of the map, near but separate from the red boss marker.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Head?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Head is the upper-right marker in the northern area of the map.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Chest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Chest is the right-side marker below the Head, east of the Start / Anchor marker.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Body?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Body is the lower-middle marker southwest of the Start / Anchor marker.",
          },
        },
        {
          "@type": "Question",
          name: "Are the question mark markers required?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The question mark markers are unknown or optional points. They are not required for the core Snowman Parts route.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the Snowman Parts secret take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With a marked map, expect about 8-12 minutes. It can take longer if the Body gets stuck.",
          },
        },
        {
          "@type": "Question",
          name: "Which snowman part is hardest to move?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Body is the hardest because it can get stuck on rocks, trees, slopes, and rough terrain.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if the Body gets stuck?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stop pushing it into the obstacle. Reposition and nudge it from the open side. If it is fully wedged and will not move, a fresh run may be the only reliable fix.",
          },
        },
        {
          "@type": "Question",
          name: "What reward do you get from Snowman Parts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You unlock the Caribou / Carriable skin.",
          },
        },
        {
          "@type": "Question",
          name: "Is Snowman Parts a weapon Joker secret?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Snowman Parts gives a cosmetic skin, not a weapon Joker.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Snowman Parts secret worth doing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes for completion and cosmetics. No if you only care about combat upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do Snowman Parts before the boss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Finish it before killing the boss or starting extraction because moving the parts is much harder under pressure.",
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
          title="Far Far West Snowman Parts Locations Guide"
          description="Find the Snowman Cave, Head, Chest, and Body in Far Far North, return each part safely, and unlock the Caribou / Carriable skin."
          gameTitle="Far Far West"
          gameHref="/far-far-west/secret-missions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 30, 2026"
          toc={[
            {
              id: "how-to-read-the-snowman-map",
              label: "Map markers",
            },
            {
              id: "snowman-parts-checklist",
              label: "Parts checklist",
            },
            {
              id: "snowman-route-summary",
              label: "Route summary",
            },
            {
              id: "snowman-cave-location",
              label: "Snowman Cave",
            },
            {
              id: "snowman-head-and-chest",
              label: "Head and Chest",
            },
            {
              id: "snowman-body-location",
              label: "Body location",
            },
            {
              id: "best-return-route",
              label: "Return route",
            },
            {
              id: "snowman-skin-reward",
              label: "Skin reward",
            },
            {
              id: "snowman-troubleshooting",
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
              href: "/far-far-west/canyon-secret-medallion-locations",
              label: "Canyon Secret: All 4 Medallion Locations",
            },
            {
              href: "/far-far-west/cactus-day-joker-locations",
              label: "Cactus Day Joker Locations",
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
          <FarFarWestSnowmanPartsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}