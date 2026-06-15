import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import VoidlingBoundBreedingGuideContent from "@/data/voidling-bound/breeding-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/voidling-bound/breeding-guide`;

const imageUrls = [
  `${siteUrl}/images/voidling-bound/voidling-bound-breeding-same-species-parents.webp`,
  `${siteUrl}/images/voidling-bound/voidling-bound-henry-breeding-upgrades.webp`,
  `${siteUrl}/images/voidling-bound/voidling-bound-training-level-20-parents.webp`,
  `${siteUrl}/images/voidling-bound/voidling-bound-offspring-inherited-strength-essence.webp`,
  `${siteUrl}/images/voidling-bound/voidling-bound-breeding-egg-hatch-after-mission.webp`,
  `${siteUrl}/images/voidling-bound/voidling-bound-breeding-failed-inheritance-roll.webp`,
  `${siteUrl}/images/voidling-bound/voidling-bound-max-20-all-stats-result.webp`,
  `${siteUrl}/images/voidling-bound/voidling-bound-nature-tiers-base-notable-exceptional.webp`,
  `${siteUrl}/images/voidling-bound/voidling-bound-nature-lower-tier-inheritance.webp`,
  `${siteUrl}/images/voidling-bound/voidling-bound-monster-parts-yellow-stat-bonus.webp`,
];

const toc = [
  { id: "voidling-bound-breeding-guide", label: "Breeding guide" },
  { id: "how-breeding-works", label: "How breeding works" },
  {
    id: "inheritance-penalty-and-cap",
    label: "Inheritance penalty and cap",
  },
  {
    id: "wrangler-rank-and-henry-upgrades",
    label: "Wrangler Rank and Henry upgrades",
  },
  { id: "prepare-parents", label: "Prepare parents" },
  { id: "how-to-breed-20-stats", label: "20-stat breeding route" },
  { id: "eggs-and-hatching", label: "Eggs and hatching" },
  { id: "failed-inheritance-rolls", label: "Failed inheritance rolls" },
  { id: "max-20-all-stats", label: "20 in every stat" },
  { id: "natures-and-dual-natures", label: "Natures and Dual Natures" },
  { id: "dual-nature-inheritance", label: "Dual Nature inheritance" },
  { id: "subspecies-inheritance", label: "Subspecies inheritance" },
  { id: "golden-egg-variants", label: "Golden Egg variants" },
  {
    id: "monster-parts-and-yellow-stats",
    label: "Monster parts and yellow stats",
  },
  { id: "spliced-breeding", label: "Spliced Breeding" },
  { id: "what-to-keep-before-releasing", label: "What to keep" },
  { id: "common-breeding-mistakes", label: "Common mistakes" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/voidling-bound",
    label: "Voidling Bound Guide Hub",
  },
  {
    href: "/voidling-bound/beginner-guide",
    label: "Voidling Bound Beginner Guide",
  },
  {
    href: "/voidling-bound/evolution-breeding-splicing-guide",
    label: "Evolution, Breeding, and Splicing Guide",
  },
  {
    href: "/voidling-bound/mutagen-research-points-farm",
    label: "Mutagen and Research Points Farm Guide",
  },
  {
    href: "/voidling-bound/golden-egg-locations",
    label: "Golden Egg Locations Guide",
  },
  {
    href: "/voidling-bound/all-collectibles",
    label: "All Collectibles Guide",
  },
];

export const metadata: Metadata = {
  title: "Voidling Bound Breeding Guide: Stats, Dual Natures & Eggs",
  description:
  "Breed stronger Voidlings with Pheromonal Nest, Henry upgrades, 20-stat parents, Dual Natures, subspecies inheritance, egg hatching and Splicing timing.",  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Voidling Bound Breeding Guide: Best Stats, Dual Natures and Inheritance",
    description:
      "Use the Pheromonal Nest to breed stronger Voidlings, understand inheritance percentages, the 80-point cap, Henry upgrades, Dual Natures, subspecies rules, eggs and Splicing timing.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[1],
        width: 1526,
        height: 868,
        alt: "Voidling Bound Henry breeding upgrades for Pheromonal Nest inheritance.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voidling Bound Breeding Guide",
    description:
      "Breed stronger Voidlings with Pheromonal Nest stats, Henry upgrades, Dual Natures, subspecies rules, eggs and Splicing timing.",
    images: [imageUrls[1]],
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
          name: "Voidling Bound Guide",
          item: `${siteUrl}/voidling-bound`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Voidling Bound Breeding Guide",
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
        "Voidling Bound Breeding Guide: Pheromonal Nest, Best Stats, Dual Natures, Subspecies Inheritance and Splicing Timing",
      description:
        "A player-focused Voidling Bound breeding guide explaining how to use the Pheromonal Nest, same-species parents, Hatchery inheritance percentages, Henry upgrades, Wrangler Rank, the inherited base point cap, egg hatching after missions, 20-stat parent routes, Dual Natures, Nature rarity, subspecies inheritance, Golden Egg variants, monster part bonuses, Spliced Breeding, and when to move from Breeding to Splicing.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-15",
      dateModified: "2026-06-15",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Voidling Bound" },
        { "@type": "Thing", name: "Voidling Bound breeding guide" },
        { "@type": "Thing", name: "Pheromonal Nest" },
        { "@type": "Thing", name: "Voidling Bound Pheromonal Nest" },
        { "@type": "Thing", name: "Voidling Bound best stats" },
        { "@type": "Thing", name: "Voidling Bound Natures" },
        { "@type": "Thing", name: "Voidling Bound Dual Natures" },
        { "@type": "Thing", name: "Voidling Bound subspecies breeding" },
        { "@type": "Thing", name: "Voidling Bound Henry upgrades" },
        { "@type": "Thing", name: "Voidling Bound Wrangler Rank" },
        { "@type": "Thing", name: "Voidling Bound Spliced Breeding" },
        { "@type": "Thing", name: "Voidling Bound Golden Egg variants" },
        { "@type": "Thing", name: "Strength" },
        { "@type": "Thing", name: "Essence" },
        { "@type": "Thing", name: "Vitality" },
        { "@type": "Thing", name: "Recuperation" },
        { "@type": "Thing", name: "Agility" },
        { "@type": "Thing", name: "Strong Nature" },
        { "@type": "Thing", name: "Witty Nature" },
        { "@type": "Thing", name: "Healthy Nature" },
        { "@type": "Thing", name: "Tenacious Nature" },
        { "@type": "Thing", name: "Agile Nature" },
        { "@type": "Thing", name: "Ferocious Nature" },
        { "@type": "Thing", name: "Robust Nature" },
        { "@type": "Thing", name: "Enduring Nature" },
        { "@type": "Thing", name: "Athletic Nature" },
        { "@type": "Thing", name: "Lively Nature" },
        { "@type": "Thing", name: "Resourceful Nature" },
        { "@type": "Thing", name: "Elegant Nature" },
        { "@type": "Thing", name: "Rugged Nature" },
        { "@type": "Thing", name: "Spry Nature" },
        { "@type": "Thing", name: "Relentless Nature" },
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
          name: "How do you breed Voidlings in Voidling Bound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Pheromonal Nest, choose two Voidlings from the same species, check the possible offspring stat range, then start breeding. Complete a mission to hatch the egg and inspect the result.",
          },
        },
        {
          "@type": "Question",
          name: "Can you breed different species in Voidling Bound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Breeding is a same-species system. Keep useful duplicates from the species you want to build.",
          },
        },
        {
          "@type": "Question",
          name: "Why are my offspring stats lower than the parents?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Early breeding has reduced inheritance. Henry's Hatchery upgrades improve how much of a parent's attribute value can pass down.",
          },
        },
        {
          "@type": "Question",
          name: "Does 80% mean 80 points in Voidling Bound breeding?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. An upgrade that says 80% means 80% of a parent's attribute value can pass down. The 80-point cap is a separate inherited base point limit before level-up allocation.",
          },
        },
        {
          "@type": "Question",
          name: "What is the 80-point breeding cap?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Breeding can pass up to 80 inherited base attribute points. The remaining 20 points come from leveling the final child, which is how a final build can reach 20 in all five base stats.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get 20 in multiple stats?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Train parent candidates to level 20, max one target stat on each parent, upgrade Henry's Hatchery, then breed parents that cover different stats. Keep children that inherit multiple strong stats and use them as the next parent line.",
          },
        },
        {
          "@type": "Question",
          name: "Is 20 the max base stat?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "20 is the target base value for each attribute. Nature bonuses and monster part bonuses can push displayed values higher, but the breeding route is focused on building the base stat line.",
          },
        },
        {
          "@type": "Question",
          name: "How do eggs hatch in Voidling Bound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After you start breeding, complete a mission. Return to the ship and inspect the egg at the incubation station.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get Dual Natures in Voidling Bound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Breed two same-species Voidlings with different Natures. Dual Nature rarity follows the lower rarity between the parents, so use high-tier parents if you want a high-tier Dual Nature.",
          },
        },
        {
          "@type": "Question",
          name: "What are the Dual Nature combinations in Voidling Bound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Strong plus Witty creates Ferocious, Strong plus Healthy creates Robust, Strong plus Tenacious creates Enduring, Strong plus Agile creates Athletic, Witty plus Healthy creates Lively, Witty plus Tenacious creates Resourceful, Witty plus Agile creates Elegant, Healthy plus Tenacious creates Rugged, Healthy plus Agile creates Spry, and Tenacious plus Agile creates Relentless.",
          },
        },
        {
          "@type": "Question",
          name: "Can Nature rarity and Nature type inherit separately?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Nature planning has two parts: the Nature type you want and the rarity tier you want. A parent with a useful high-tier Nature can still produce a lower-tier outcome if paired with a lower-rarity parent.",
          },
        },
        {
          "@type": "Question",
          name: "How does subspecies inheritance work?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If both parents share the same subspecies, the child keeps that subspecies. If the parents are different subspecies, the child can return to the closest shared evolution point between the two parent lines.",
          },
        },
        {
          "@type": "Question",
          name: "Can Golden Egg variants pass through breeding?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Golden Egg variants can have value for breeding and Splicing, and special variant traits may be worth preserving. Inspect them before releasing or using them as casual parents.",
          },
        },
        {
          "@type": "Question",
          name: "Can spliced Voidlings breed?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Spliced Voidlings normally cannot breed through the standard system. A late Spliced Breeding upgrade can open a specialized path, but the safer rule is to finish breeding before Splicing.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock more Henry upgrades?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Raise Wrangler Rank by discovering and documenting new genes through missions and evolution paths. Higher rank unlocks more Hatchery upgrades from Henry.",
          },
        },
        {
          "@type": "Question",
          name: "Should I breed before Splicing?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes for normal progression. Breed the base stats, Nature, and subspecies line first. Splicing should be the final custom-build step unless you already have the late Spliced Breeding upgrade and know exactly why you are using it.",
          },
        },
        {
          "@type": "Question",
          name: "Is breeding required for the main story?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Perfect breeding is not required for basic story progress, but breeding becomes important if you want stronger parent lines, Dual Natures, better stats, late-game builds, and cleaner Splicing candidates.",
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
          title="Voidling Bound Breeding Guide"
          description="Use the Pheromonal Nest to breed stronger Voidlings, plan inherited stats, create Dual Natures, preserve subspecies, and Splice at the right time."
          gameTitle="Voidling Bound"
          gameHref="/voidling-bound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <VoidlingBoundBreedingGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
