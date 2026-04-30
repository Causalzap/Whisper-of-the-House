import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarFarWestWoodlandsMushroomContent from "@/data/far-far-west/woodlands-mushroom-sequence.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/far-far-west/woodlands-mushroom-sequence`;

export const metadata: Metadata = {
  title: "Far Far West Woodlands Mushroom Sequence Guide",
  description:
    "Complete the Woodlands mushroom sequence in Far Far West. Follow all 7 mushrooms in order, return to the stone marker, and unlock the Shroom Grave Joker.",
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
          name: "Woodlands Mushroom Sequence",
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
      headline: "Far Far West Woodlands Mushroom Sequence Guide",
      description:
        "This Far Far West Woodlands guide shows the correct mushroom sequence route: Large Tree, Sequence Start, Mushrooms 1-7, Return to Stone, and the Shroom Grave Joker reward.",
      image: [
        `${siteUrl}/images/far-far-west/woodlands-mushroom-sequence-map.webp`,
        `${siteUrl}/images/far-far-west/woodlands-sequence-start.webp`,
        `${siteUrl}/images/far-far-west/woodlands-mushrooms-1-3.webp`,
        `${siteUrl}/images/far-far-west/woodlands-mushrooms-4-5.webp`,
        `${siteUrl}/images/far-far-west/woodlands-mushrooms-6-7.webp`,
        `${siteUrl}/images/far-far-west/woodlands-return-to-stone.webp`,
        `${siteUrl}/images/far-far-west/shroom-grave-joker-reward.webp`,
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
          name: "Woodlands mushroom sequence",
        },
        {
          "@type": "Thing",
          name: "Shroom Grave Joker",
        },
        {
          "@type": "Thing",
          name: "Woodlands secret",
        },
        {
          "@type": "Thing",
          name: "Return to Stone",
        },
        {
          "@type": "Thing",
          name: "Far Far West mushrooms",
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
          name: "How many mushrooms are required for the Woodlands secret in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Woodlands secret requires 7 mushrooms, touched in the numbered order shown on the map.",
          },
        },
        {
          "@type": "Question",
          name: "What is the correct Woodlands mushroom order?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The correct order is Mushroom 1, 2, 3, 4, 5, 6, and 7, then return to the stone marker.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I start the Woodlands mushroom sequence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start at the Large Tree, then go to the orange Sequence Start marker before touching Mushroom 1.",
          },
        },
        {
          "@type": "Question",
          name: "What do I do after Mushroom 7?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Return to the red Return to Stone marker. The secret does not end at Mushroom 7.",
          },
        },
        {
          "@type": "Question",
          name: "Are the question mark markers required for the Woodlands mushroom sequence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Treat the question marks as unknown or optional. They are not required for the main Shroom Grave route.",
          },
        },
        {
          "@type": "Question",
          name: "Why did the Woodlands secret not complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You probably skipped the Sequence Start, touched a mushroom out of order, or forgot to return to the red stone marker after Mushroom 7.",
          },
        },
        {
          "@type": "Question",
          name: "What reward do you get from the Woodlands mushroom secret?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You unlock the Shroom Grave Joker.",
          },
        },
        {
          "@type": "Question",
          name: "What does Shroom Grave do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shroom Grave is associated with healing mushrooms, making it a sustain-focused reward.",
          },
        },
        {
          "@type": "Question",
          name: "Is Shroom Grave worth unlocking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, especially if you want more sustain. It is less direct than Pigpick for damage, but useful for staying alive.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do the Woodlands secret before the boss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Complete the mushroom route before killing the boss or starting extraction so you can follow the full map route without late-run pressure.",
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
          title="Far Far West Woodlands Mushroom Sequence Guide"
          description="Follow the full Woodlands mushroom route in Far Far West: start at the Large Tree, touch all 7 mushrooms in order, return to the stone marker, and unlock Shroom Grave."
          gameTitle="Far Far West"
          gameHref="/far-far-west"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 30, 2026"
          toc={[
            {
              id: "woodlands-map-legend",
              label: "Map legend",
            },
            {
              id: "woodlands-mushroom-sequence",
              label: "Mushroom sequence",
            },
            {
              id: "woodlands-route-summary",
              label: "Route summary",
            },
            {
              id: "sequence-start",
              label: "Sequence Start",
            },
            {
              id: "mushrooms-1-to-3",
              label: "Mushrooms 1-3",
            },
            {
              id: "mushrooms-4-to-5",
              label: "Mushrooms 4-5",
            },
            {
              id: "mushrooms-6-to-7",
              label: "Mushrooms 6-7",
            },
            {
              id: "return-to-stone",
              label: "Return to Stone",
            },
            {
              id: "unknown-optional-markers",
              label: "Optional markers",
            },
            {
              id: "shroom-grave-reward",
              label: "Shroom Grave",
            },
            {
              id: "woodlands-troubleshooting",
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
              href: "/far-far-west/ghost-bell-shard-locations",
              label: "Ghost Bell Shard Locations",
            },
            {
              href: "/far-far-west/cactus-day-joker-locations",
              label: "Cactus Day Joker Locations",
            },
            {
              href: "/far-far-west/area-41-symbol-order",
              label: "Area 41 Symbol Order Guide",
            },
            {
                href: "/far-far-west/snowman-parts-locations",
                label: "Snowman Parts Locations",
              },
          ]}
        >
          <FarFarWestWoodlandsMushroomContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}