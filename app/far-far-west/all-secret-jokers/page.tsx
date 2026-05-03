import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarFarWestAllSecretJokersContent from "@/data/far-far-west/all-secret-jokers.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/far-far-west/all-secret-jokers`;

export const metadata: Metadata = {
  title: "Far Far West All Secret Jokers & Rewards Guide",
  description:
    "Compare all Far Far West secret Jokers and rewards, including Bellshot, Pick Pick / Pigpick, Cactus Day, Shroom Grave, Anti-Gravity Falls, and the Far Far North skin. See trigger rates, effects, best unlock order, and reward value.",
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
          name: "All Secret Jokers & Rewards",
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
      headline: "Far Far West All Secret Jokers & Rewards Guide",
      description:
        "This Far Far West guide compares every secret Joker and secret reward, including trigger rates, effects, best uses, difficulty, Canyon cave value, and the best secret rewards to unlock first.",
      image: [
        `${siteUrl}/images/far-far-west/all-secret-jokers-overview.webp`,
        `${siteUrl}/images/far-far-west/bellshot-secret-joker-reward.webp`,
        `${siteUrl}/images/far-far-west/pick-pick-pigpick-joker-reward.webp`,
        `${siteUrl}/images/far-far-west/cactus-day-secret-joker-reward.webp`,
        `${siteUrl}/images/far-far-west/shroom-grave-joker-reward.webp`,
        `${siteUrl}/images/far-far-west/caribo-skin-reward.webp`,
        `${siteUrl}/images/far-far-west/anti-gravity-falls-joker-reward.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-03",
      dateModified: "2026-05-03",
      about: [
        {
          "@type": "VideoGame",
          name: "Far Far West",
        },
        {
          "@type": "Thing",
          name: "Far Far West secret Jokers",
        },
        {
          "@type": "Thing",
          name: "Far Far West secret rewards",
        },
        {
          "@type": "Thing",
          name: "Bellshot Joker",
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
          name: "Cactus Day Joker",
        },
        {
          "@type": "Thing",
          name: "Shroom Grave Joker",
        },
        {
          "@type": "Thing",
          name: "Anti-Gravity Falls Joker",
        },
        {
          "@type": "Thing",
          name: "Far Far North skin",
        },
        {
          "@type": "Thing",
          name: "Elder Pickaxe",
        },
        {
          "@type": "Thing",
          name: "Canyon secret cave",
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
          name: "How many secret rewards are in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are six secret mission rewards in Far Far West: five weapon Jokers and one Far Far North skin reward.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best secret Joker in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bellshot is the best first secret Joker for most players because it can spawn a healing bell, and shooting that bell heals 20 HP.",
          },
        },
        {
          "@type": "Question",
          name: "What secret Joker should I unlock first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlock Bellshot first, then Pick Pick / Pigpick, then Cactus Day if you want the most practical early rewards.",
          },
        },
        {
          "@type": "Question",
          name: "Which secret Joker is best for survival?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bellshot is the best survival reward because it gives cleaner healing value than Shroom Grave. Bellshot heals 20 HP when you shoot the spawned bell.",
          },
        },
        {
          "@type": "Question",
          name: "Which secret Joker is best for bosses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pick Pick / Pigpick is usually the best boss-focused secret Joker because its on-hit pickaxe effect works well with fast-hit weapons and long fights.",
          },
        },
        {
          "@type": "Question",
          name: "Which secret Joker is best for AoE clear?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cactus Day is the best AoE-focused secret Joker because cactus mines can help clear grouped enemies after kills.",
          },
        },
        {
          "@type": "Question",
          name: "Is Shroom Grave better than Bellshot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually no. Shroom Grave has a higher trigger chance at 10%, but it heals only 10 HP and adds a vision or buzz drawback. Bellshot has a lower 5% trigger chance, but it heals 20 HP and is more practical.",
          },
        },
        {
          "@type": "Question",
          name: "Does Canyon give rewards besides Pick Pick / Pigpick?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Canyon secret cave also contains multiple Elder Pickaxes and multiple gold veins, making it one of the best secrets to repeat when you need gold.",
          },
        },
        {
          "@type": "Question",
          name: "Does Far Far North give a Joker?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Far Far North gives a skin reward instead of a weapon Joker.",
          },
        },
        {
          "@type": "Question",
          name: "Is Anti-Gravity Falls worth unlocking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes for completion and fun, but it is not a high-priority combat Joker.",
          },
        },
        {
          "@type": "Question",
          name: "Do secret missions need to be completed before extraction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plan to finish each secret mission before killing the boss or starting extraction. Some secrets require multiple steps in the same map, and exploration becomes much harder once the run moves toward extraction.",
          },
        },
        {
          "@type": "Question",
          name: "Are secret Joker effects final?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Far Far West is still in Early Access, so reward effects, trigger rates, slot costs, and upgrade costs can change. Always check the current in-game tooltip before building around exact numbers.",
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
          title="Far Far West All Secret Jokers & Rewards Guide"
          description="Compare every Far Far West secret Joker and secret reward, including trigger rates, effects, best uses, Canyon cave value, and the best unlock order."
          gameTitle="Far Far West"
          gameHref="/far-far-west/secret-missions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 3, 2026"
          toc={[
            {
              id: "all-secret-jokers-table",
              label: "All rewards",
            },
            {
              id: "best-secret-jokers",
              label: "Best unlocks",
            },
            {
              id: "bellshot-joker",
              label: "Bellshot",
            },
            {
              id: "pick-pick-pigpick-joker",
              label: "Pick Pick",
            },
            {
              id: "cactus-day-joker",
              label: "Cactus Day",
            },
            {
              id: "shroom-grave-joker",
              label: "Shroom Grave",
            },
            {
              id: "far-far-north-skin",
              label: "Far Far North",
            },
            {
              id: "anti-gravity-falls-joker",
              label: "Anti-Gravity",
            },
            {
              id: "related-guides",
              label: "Full guides",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/far-far-west/secret-missions",
              label: "All Secret Missions Guide",
            },
            {
              href: "/far-far-west/ghost-bell-shard-locations",
              label: "Bellshot: Bell Locations & Bell Order Guide",
            },
            {
              href: "/far-far-west/canyon-secret-medallion-locations",
              label: "Pick Pick / Pigpick: Canyon Medallions Guide",
            },
            {
              href: "/far-far-west/cactus-day-joker-locations",
              label: "Cactus Day Joker Locations Guide",
            },
            {
              href: "/far-far-west/woodlands-mushroom-sequence",
              label: "Shroom Grave: Woodlands Mushroom Sequence Guide",
            },
            {
              href: "/far-far-west/snowman-parts-locations",
              label: "Far Far North Snowman Parts Locations Guide",
            },
            {
              href: "/far-far-west/area-41-symbol-order",
              label: "Anti-Gravity Falls: Area 41 Symbol Order Guide",
            },
          ]}
        >
          <FarFarWestAllSecretJokersContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}