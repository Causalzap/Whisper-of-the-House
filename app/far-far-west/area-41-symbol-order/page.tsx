import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarFarWestArea41Content from "@/data/far-far-west/area-41-symbol-order.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/far-far-west/area-41-symbol-order`;

export const metadata: Metadata = {
  title: "Far Far West Area 41 Symbol Order Guide",
  description:
    "Solve the Area 41 alien symbol puzzle in Far Far West. Learn the correct symbol order, how to rotate the pillars, where to press the button, and how to unlock Anti-Gravity Falls.",
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
          name: "Area 41 Symbol Order",
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
      headline: "Far Far West Area 41 Symbol Order Guide",
      description:
        "This Far Far West Area 41 guide shows the correct alien symbol order: Far West, Desert, Canyon, and Woodlands. It explains the clue words, how to rotate the four symbol pillars, where to press the button, and how to unlock Anti-Gravity Falls.",
      image: [
        `${siteUrl}/images/far-far-west/area-41-symbol-order.webp`,
        `${siteUrl}/images/far-far-west/area-41-monolith-clue.webp`,
        `${siteUrl}/images/far-far-west/area-41-symbol-input.webp`,
        `${siteUrl}/images/far-far-west/area-41-location.webp`,
        `${siteUrl}/images/far-far-west/anti-gravity-falls-reward.webp`,
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
          name: "Area 41 symbol order",
        },
        {
          "@type": "Thing",
          name: "Area 41 puzzle",
        },
        {
          "@type": "Thing",
          name: "Alien symbols",
        },
        {
          "@type": "Thing",
          name: "Anti-Gravity Falls Joker",
        },
        {
          "@type": "Thing",
          name: "Far West symbol",
        },
        {
          "@type": "Thing",
          name: "Desert symbol",
        },
        {
          "@type": "Thing",
          name: "Canyon symbol",
        },
        {
          "@type": "Thing",
          name: "Woodlands symbol",
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
          name: "What is the correct Area 41 symbol order in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The correct Area 41 symbol order is Far West, Desert, Canyon, and Woodlands.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Area 41 clue mean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The clue words are map themes. Frontier means Far West, sand means Desert, cliffs means Canyon, and trees means Woodlands.",
          },
        },
        {
          "@type": "Question",
          name: "Where do the four Area 41 symbols come from?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The four input symbols come from Far West, Desert, Canyon, and Woodlands, in that order. Area 41 itself is the clue and input location, not one of the four clue maps.",
          },
        },
        {
          "@type": "Question",
          name: "How do I enter the Area 41 symbols?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rotate the four symbol pillars until they match Far West, Desert, Canyon, and Woodlands in order, then press the button on the right side of the input area.",
          },
        },
        {
          "@type": "Question",
          name: "Why did the Area 41 puzzle not complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You may have entered the symbols in the wrong order, used the Area 41 symbol as one of the inputs, or forgot to press the button after setting the pillars.",
          },
        },
        {
          "@type": "Question",
          name: "What reward do you get from Area 41?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You unlock the Anti-Gravity Falls Joker after completing the Area 41 symbol puzzle.",
          },
        },
        {
          "@type": "Question",
          name: "What does Anti-Gravity Falls do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Based on current footage, Anti-Gravity Falls can spawn blue anti-gravity balls after an enemy dies. These balls lift you upward.",
          },
        },
        {
          "@type": "Question",
          name: "Is Anti-Gravity Falls worth using?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anti-Gravity Falls is fun, but not a high-priority combat Joker. It is mostly worth unlocking for completion or movement experiments.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do Area 41 before the boss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Like other secret missions, Area 41 is easier to finish before killing the boss or starting extraction.",
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
          title="Far Far West Area 41 Symbol Order Guide"
          description="Solve the Area 41 alien symbol puzzle in Far Far West, rotate the four pillars in the correct order, press the button, and unlock Anti-Gravity Falls."
          gameTitle="Far Far West"
          gameHref="/far-far-west"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 30, 2026"
          toc={[
            {
              id: "area-41-symbol-order",
              label: "Symbol order",
            },
            {
              id: "how-the-area-41-clue-works",
              label: "Clue explanation",
            },
            {
              id: "how-to-enter-the-symbols",
              label: "Enter the symbols",
            },
            {
              id: "area-41-location",
              label: "Code location",
            },
            {
              id: "anti-gravity-falls-reward",
              label: "Anti-Gravity Falls",
            },
            {
              id: "area-41-troubleshooting",
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
                href: "/far-far-west/snowman-parts-locations",
                label: "Snowman Parts Locations",
              },
            {
              href: "/far-far-west/cactus-day-joker-locations",
              label: "Cactus Day Joker Locations",
            },
            {
              href: "/far-far-west/woodlands-mushroom-sequence",
              label: "Woodlands Mushroom Sequence Guide",
            },
          ]}
        >
          <FarFarWestArea41Content />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
