import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GodsOfferingsBossProgressionContent from "@/data/romestead/gods-offerings-boss-progression.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/romestead/gods-offerings-boss-progression`;

const imageUrls = [
  `${siteUrl}/images/romestead/romestead-gods-world-tier-one.webp`,
  `${siteUrl}/images/romestead/romestead-gods-offerings-guardian-eye.webp`,
  `${siteUrl}/images/romestead/romestead-farmstead-offer-40-wheat.webp`,
  `${siteUrl}/images/romestead/romestead-gods-moonstring-well-unlock.webp`,
  `${siteUrl}/images/romestead/romestead-favor-lignator-axe-power.webp`,
];

const toc = [
  { id: "gods-list", label: "Gods list" },
  { id: "offerings-sacrifices-favor", label: "Altar terms" },
  { id: "altar-ui", label: "Altar UI" },
  { id: "early-objectives", label: "Early objectives" },
  { id: "guardian-eye", label: "Guardian's Eye" },
  { id: "farmstead-wheat", label: "40 wheat" },
  { id: "moonstring-well", label: "Moonstring" },
  { id: "favor", label: "Favor" },
  { id: "bosses-and-gods", label: "Bosses and gods" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/romestead", label: "Romestead Guide" },
  {
    href: "/romestead/first-day-base-building",
    label: "First Day and Base Building Guide",
  },
  {
    href: "/romestead/giant-owl-guardian-of-minerva",
    label: "Giant Owl Boss Guide",
  },
  {
    href: "/romestead/farmstead-workers-food-logistics",
    label: "Farmstead, Workers, Food and Logistics Guide",
  },
  {
    href: "/romestead/dungeon-traps-death-recovery",
    label: "Dungeon Traps and Death Recovery Guide",
  },
];

export const metadata: Metadata = {
  title: "Romestead Gods Guide: Offerings, Favor & Altar Progression",
  description:
    "Learn Romestead gods, offerings, sacrifices, favor, altar rewards, Guardian’s Eye, 40 wheat Farmstead unlock and Moonstring Well route.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Romestead Gods Guide: Offerings, Favor and Altar Progression",
    description:
      "A practical Romestead gods guide covering altar objectives, offerings, sacrifices, favor, Guardian’s Eye, Farmstead, Moonstring and Well unlocks.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Romestead World Tier Progression tutorial explaining god quests, buildings, buffs and threats.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romestead Gods Guide: Offerings, Favor and Altar Progression",
    description:
      "Use the Altar correctly, claim god rewards, save key offerings, spend favor wisely, and unlock Farmstead and Well.",
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
          name: "Romestead Guide",
          item: `${siteUrl}/romestead`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Gods, Offerings and Boss Progression",
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
        "Romestead Gods Guide: Offerings, Sacrifices, Favor, Altar Rewards and Early Progression",
      description:
        "A player-focused Romestead gods guide explaining how early gods and god clues such as Minerva, Mars, Mercury and Vulcan fit into progression; how offerings, sacrifices, favor and quest items differ; how to use the Altar UI without missing claim rewards; how Guardian's Eye, Honoring the Soil, 40 wheat, Farmstead, The Moonstring and Well connect to early progression; how favor choices such as Lignator, Cuniculator, Construction Plan, Power Napper and Far Reach solve practical bottlenecks; and how bosses, dungeon artifacts and altar objectives connect to new buildings, world tier changes and Workbench unlocks.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-27",
      dateModified: "2026-05-27",
      about: [
        { "@type": "VideoGame", name: "Romestead" },
        { "@type": "Thing", name: "Romestead Gods" },
        { "@type": "Thing", name: "Romestead Altar" },
        { "@type": "Thing", name: "Offerings" },
        { "@type": "Thing", name: "Sacrifices" },
        { "@type": "Thing", name: "Favor" },
        { "@type": "Thing", name: "Minerva" },
        { "@type": "Thing", name: "Mars" },
        { "@type": "Thing", name: "Mercury" },
        { "@type": "Thing", name: "Vulcan" },
        { "@type": "Thing", name: "Guardian's Eye" },
        { "@type": "Thing", name: "Honoring the Soil" },
        { "@type": "Thing", name: "The Moonstring" },
        { "@type": "Thing", name: "Farmstead" },
        { "@type": "Thing", name: "Well Unlock" },
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
          name: "How do I restore gods in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Altar. Read the god objective, offer the required item or resource, claim the reward, then check the Workbench for new construction options.",
          },
        },
        {
          "@type": "Question",
          name: "Which gods appear early in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Early routes show or reference gods and god clues such as Minerva, Mars, Mercury and Vulcan. Minerva is tied to the first major Guardian's Eye route.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between offerings and sacrifices in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Offerings are usually specific items or resources given to a god objective. Sacrifices are broader or more costly altar commitments. In both cases, read the altar text before spending rare items.",
          },
        },
        {
          "@type": "Question",
          name: "What does favor do in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Favor unlocks god-related buffs or bonuses. Pick favor based on your current bottleneck, such as wood, mining, building, healing, movement, defense, trade, food or production.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Guardian's Eye do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Offer the Guardian's Eye at the altar after beating the Giant Owl. It pushes Minerva progression and unlocks major early construction progress after you claim the reward.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Farmstead in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Complete Honoring the Soil by offering 40 wheat. This unlocks Farmstead and starts the farming automation route.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Well in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow The Moonstring objective. It points you toward a dungeon artifact and unlocks Well, which matters for Farmstead watering.",
          },
        },
        {
          "@type": "Question",
          name: "Why did I complete an offering but nothing changed?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You may not have claimed the reward, or you may not have checked the Workbench afterward. Some altar rewards show up as new construction options.",
          },
        },
        {
          "@type": "Question",
          name: "Should I offer bones and monster loot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the altar first. Bones and monster loot can matter for gods like Mars or other objectives, but you should not dump valuable stacks blindly.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a best god to focus first in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Early on, focus on the god route that solves your current bottleneck. Minerva pushes the first boss unlock route, Farmstead needs wheat, Moonstring unlocks Well, Mars helps defense and combat pressure, and Mercury points toward speed, trade and economy-style bonuses.",
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
          title="Romestead Gods Guide: Use the Altar Without Wasting Rare Items"
          description="Learn what to offer, when to claim rewards, how favor works, and why Guardian’s Eye, 40 wheat and Moonstring matter."
          gameTitle="Romestead"
          gameHref="/romestead"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GodsOfferingsBossProgressionContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}