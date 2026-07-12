import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ForestEscapeLastTrainAchievementsGuideContent from "@/data/forest-escape-last-train/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/forest-escape-last-train/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-map-boss-door-keys.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-revive-teammate.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-golem-mythbuster.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-shop-respawn-token.webp`,
];

const toc = [
  {
    id: "achievement-overview",
    label: "Achievement overview",
  },
  {
    id: "achievement-roadmap",
    label: "Three-pass roadmap",
  },
  {
    id: "all-achievements",
    label: "All 41 achievements",
  },
  {
    id: "trippy-grid-warden-keys",
    label: "Trippy Grid & Warden keys",
  },
  {
    id: "warden-newspapers",
    label: "Warden newspapers",
  },
  {
    id: "ring-eight-locations",
    label: "Ring: eight locations",
  },
  {
    id: "revive-achievements",
    label: "Revive achievements",
  },
  {
    id: "specific-combat-achievements",
    label: "Combat achievements",
  },
  {
    id: "resource-shop-achievements",
    label: "Resources & shop",
  },
  {
    id: "cleanup-order",
    label: "Cleanup order",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/forest-escape-last-train",
    label: "Forest Escape Last Train Guide Hub",
  },
  {
    href: "/forest-escape-last-train/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/forest-escape-last-train/warden-boss-guide",
    label: "Warden Boss Guide",
  },
  {
    href: "/forest-escape-last-train/locations-puzzle-guide",
    label: "Locations & Puzzle Guide",
  },
];

export const metadata: Metadata = {
  title: "Forest Escape Last Train Achievements Guide: All 41",
  description:
    "Complete all 41 achievements with Steam rarity rates, Trippy Grid keys, revive routes, Ring planning, Mythbuster, and exact gold and ammo costs.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Forest Escape Last Train Achievements Guide: All 41",
    description:
      "Plan all 41 achievements with verified puzzle routes, Steam rarity rates, Warden-key tracking, co-op revives, combat tips, and resource calculations.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Forest Escape Last Train objective page with Warden keys and newspapers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forest Escape Last Train Achievements Guide: All 41",
    description:
      "Plan all 41 achievements with verified routes, Steam rarity rates, revive tips, Warden keys, Ring planning, and exact shop costs.",
    images: [imageUrls[0]],
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
          name: "Forest Escape Last Train Guide",
          item: `${siteUrl}/forest-escape-last-train`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements Guide",
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
        "Forest Escape: Last Train Achievements Guide and 100% Checklist",
      description:
        "This Forest Escape: Last Train achievements guide covers all 41 achievements with a three-pass completion roadmap, a dated Steam rarity snapshot, Trippy Grid blue, green, red, and yellow key solutions, confirmed Warden-key rewards, newspaper tracking, Ring location planning, controlled co-op revive routes, Mythbuster and Home Run combat strategies, Monster Hunter route coverage, Rock and Coal farming, Shopaholic purchases, and the exact 340-gold ammunition calculation for I Fear No One.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-11",
      dateModified: "2026-07-11",
      about: [
        {
          "@type": "VideoGame",
          name: "Forest Escape: Last Train",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train achievements",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train 100% checklist",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Warden keys",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Trippy Grid keys",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Ring achievement",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Monster Hunter achievement",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Mythbuster achievement",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Steam achievement rates",
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
          name: "How many achievements are in Forest Escape Last Train?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Forest Escape: Last Train has 41 achievements in the Early Access launch list.",
          },
        },
        {
          "@type": "Question",
          name: "Are the Steam completion rates in this guide live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Steam global completion rates in this guide were captured on July 10, 2026 and will change as more players progress.",
          },
        },
        {
          "@type": "Question",
          name: "Can Forest Escape Last Train be completed 100% solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Long Live the King requires reviving the lobby host, while To Hell and Back and Cat tale also require another player for manual teammate revives.",
          },
        },
        {
          "@type": "Question",
          name: "Are the four Trippy Grid keys Warden keys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The blue, green, red, and yellow keys are local Trippy Grid puzzle keys. Completing the maze then awards one of the six global Warden keys.",
          },
        },
        {
          "@type": "Question",
          name: "How many locations are in Forest Escape Last Train?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The official game description lists 13 unique locations and mini-games. Ten of them currently have clearly named location-completion achievements.",
          },
        },
        {
          "@type": "Question",
          name: "Do the three starting points change the achievement route?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They change which branches and locations appear first, but the achievement requirements remain the same. Track completed location names instead of following one fixed railway sequence.",
          },
        },
        {
          "@type": "Question",
          name: "How much gold is required for I Fear No One?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each ammunition pack costs 20 gold and contains six rounds. Buying 17 packs provides 102 rounds and costs 340 gold.",
          },
        },
        {
          "@type": "Question",
          name: "Can We Rich and I Fear No One be completed in the same run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Reach 500 gold first and wait for We Rich to unlock, then spend 340 gold on ammunition. Separate runs are usually easier because one achievement rewards saving while the other requires spending.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Mythbuster in Forest Escape Last Train?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kill a golem and make sure the finishing hit comes from the pickaxe. Keep the fight close to the train and stop using other weapons when the golem is nearly defeated.",
          },
        },
        {
          "@type": "Question",
          name: "What is the safest route for the Ring achievement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Complete any eight named locations in one run and keep a written checklist. Do not count houses, shops, treehouses, mining stops, or ordinary railway chests.",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Forest Escape: Last Train Achievements Guide"
          description="Plan all 41 achievements with Steam rarity rates, a three-pass cleanup route, confirmed Trippy Grid keys, safe revive farming, and exact shop costs."
          gameTitle="Forest Escape: Last Train"
          gameHref="/forest-escape-last-train"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ForestEscapeLastTrainAchievementsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}