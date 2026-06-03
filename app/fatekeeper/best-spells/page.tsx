import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestSpellsContent from "@/data/fatekeeper/best-spells.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/fatekeeper/best-spells`;

const imageUrls = [
  `${siteUrl}/images/fatekeeper/fatekeeper-telekinesis-pull.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-spell-tree-fire-ricochet.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-kutracite-fire-damage.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-telekinesis-search-mode.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-greater-mana-node.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-guards-vermillion-life-leech.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-fire-best.webp`,
];

const toc = [
  { id: "best-spells", label: "Best spells" },
  { id: "fire-spells", label: "Fire / pyromancy" },
  { id: "telekinesis", label: "Telekinesis" },
  { id: "mana", label: "Mana and spell costs" },
  { id: "wind", label: "Wind spells" },
  { id: "shatter-frost", label: "Shatter / frost" },
  { id: "life-leech", label: "Life Leech" },
  { id: "best-spells-for-bosses", label: "Boss spells" },
  { id: "common-mistakes", label: "Spell mistakes" },
  { id: "recommended-spell-progression", label: "Progression" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/fatekeeper",
    label: "Fatekeeper Guide Hub",
  },
  {
    href: "/fatekeeper/beginner-guide",
    label: "Fatekeeper Beginner Guide",
  },
  {
    href: "/fatekeeper/best-build",
    label: "Fatekeeper Best Builds Guide",
  },
  {
    href: "/fatekeeper/best-weapons",
    label: "Fatekeeper Best Weapons Guide",
  },
  {
    href: "/fatekeeper/boss-guide",
    label: "Fatekeeper Boss Guide",
  },
];

export const metadata: Metadata = {
  title: "Fatekeeper Best Spells: Fire, Telekinesis & Life Leech",
  description:
    "Find the best Fatekeeper spells: fire upgrades, telekinesis uses, Power vs Greater Mana, wind costs, shatter, Life Leech, Kutracite, and boss spell picks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Fatekeeper Best Spells Guide: Fire, Telekinesis, Wind, Shatter and Life Leech",
    description:
      "Choose the best Fatekeeper magic route with fire upgrades, telekinesis utility, mana nodes, wind costs, shatter notes, Life Leech alchemy, Kutracite and boss spell advice.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Fatekeeper telekinesis spell pulling an enemy during early combat training.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatekeeper Best Spells Guide",
    description:
      "Use fire for damage, telekinesis for control, Power and Greater Mana for spell support, and Life Leech through alchemy sustain.",
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
          name: "Fatekeeper Guide",
          item: `${siteUrl}/fatekeeper`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Spells Guide",
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
        "Fatekeeper Best Spells Guide: Fire, Telekinesis, Wind, Shatter, Life Leech and Mana Nodes",
      description:
        "A player-focused Fatekeeper best spells guide for Early Access. The guide explains when to use fire and pyromancy for reliable damage, how telekinesis works as a control and search-mode utility spell, how Power and Greater Mana support spell builds, why wind needs mana support, how shatter and frost should be treated as planned routes, and how Life Leech is currently confirmed through alchemy sustain from Guards Vermillion. It also covers Kutracite fire alchemy support, Burning Axe as a fire melee option, boss spell recommendations, common spell mistakes, and recommended spell progression.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-03",
      dateModified: "2026-06-03",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Fatekeeper" },
        { "@type": "Thing", name: "Fatekeeper best spells" },
        { "@type": "Thing", name: "Fatekeeper spell guide" },
        { "@type": "Thing", name: "Fatekeeper magic routes" },
        { "@type": "Thing", name: "Fatekeeper fire spells" },
        { "@type": "Thing", name: "Fatekeeper pyromancy" },
        { "@type": "Thing", name: "Fatekeeper telekinesis" },
        { "@type": "Thing", name: "Fatekeeper wind spells" },
        { "@type": "Thing", name: "Fatekeeper shatter" },
        { "@type": "Thing", name: "Fatekeeper frost" },
        { "@type": "Thing", name: "Fatekeeper life leech" },
        { "@type": "Thing", name: "Fatekeeper alchemy" },
        { "@type": "Thing", name: "Power" },
        { "@type": "Thing", name: "Greater Mana" },
        { "@type": "Thing", name: "Excessive Flames" },
        { "@type": "Thing", name: "Flame Spout" },
        { "@type": "Thing", name: "Ricochet" },
        { "@type": "Thing", name: "MORE!" },
        { "@type": "Thing", name: "Lord of the Skies" },
        { "@type": "Thing", name: "Storm Surge" },
        { "@type": "Thing", name: "Herald of Winter" },
        { "@type": "Thing", name: "Savant" },
        { "@type": "Thing", name: "Dark Arts" },
        { "@type": "Thing", name: "Kutracite" },
        { "@type": "Thing", name: "Guards Vermillion" },
        { "@type": "Thing", name: "Burning Axe" },
        { "@type": "Thing", name: "Potion" },
        { "@type": "Thing", name: "Vial" },
        { "@type": "Thing", name: "Hand Bomb" },
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
          name: "What is the best spell in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fire is the safest damage spell route for most players. It has clear upgrades like plus 20 percent fire spell power, Excessive Flames, Ricochet, Flame Spout, and MORE! plus 2 projectiles. Kutracite can also support fire through alchemy.",
          },
        },
        {
          "@type": "Question",
          name: "Is telekinesis good in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Telekinesis is one of the best early tools because it can pull enemies, control space, and interact with objects. It is useful even if you are not a full magic build.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build around telekinesis?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build around telekinesis only if you use it often. Savant reduces telekinesis spell costs by 50 percent, and Dark Arts adds arcane damage to lifted enemies, but those nodes are best when telekinesis is part of your normal loop.",
          },
        },
        {
          "@type": "Question",
          name: "Is Greater Mana worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if spell costs are stopping your build from working. Greater Mana gives plus 15 Mana and helps fire, wind, telekinesis, and other spell-heavy routes feel smoother.",
          },
        },
        {
          "@type": "Question",
          name: "Should I take Power or Greater Mana first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Take Power if you want both plus 5 Mana and plus 3 percent elemental damage. Take Greater Mana if your main problem is simply running out of mana, because Greater Mana gives plus 15 Mana.",
          },
        },
        {
          "@type": "Question",
          name: "Is wind good in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Wind can be good, but it is more expensive to support. Storm Surge gives plus 50 percent spell power with wind spells but also adds plus 25 percent wind spell costs, so you need mana support first.",
          },
        },
        {
          "@type": "Question",
          name: "Is fire better than wind?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For most beginners and hard fights, fire is easier to recommend because its damage plan is clearer. Wind can work, but it needs more support.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kutracite help fire builds?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Kutracite gives plus 6 percent Fire Damage for 15 seconds and plus 5 Fire damage, making it useful alchemy support for fire builds.",
          },
        },
        {
          "@type": "Question",
          name: "Does Burning Axe work with a fire build?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Burning Axe is a strong fire and melee hybrid option if you like axe timing and want fire damage to support your weapon route. See the Best Weapons Guide for details.",
          },
        },
        {
          "@type": "Question",
          name: "Is shatter or frost good in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Shatter and frost are good when you build around them. They make more sense with control, setup windows, and blunt weapon routes than as random side investments.",
          },
        },
        {
          "@type": "Question",
          name: "Is Life Leech worth using?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, as alchemy sustain. Guards Vermillion gives plus 5 percent Life Leech and plus 10 percent increased Stance for 15 seconds, so Life Leech can support longer fights. It is not confirmed as a full standalone spell-tree route yet, so use it as support for melee, fire, or alchemy builds.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Potion, Vial, and Hand Bomb?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Potion results affect your body, Vial results can be applied to your weapon, and Hand Bomb results become throwable bombs. Choose the container based on whether you want a self-buff, a weapon effect, or a thrown alchemy tool.",
          },
        },
        {
          "@type": "Question",
          name: "What spell should I use for bosses?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use fire as your main spell damage route if your build supports it. Keep telekinesis for control, bring mana support if casting often, and use alchemy support such as Kutracite or Guards Vermillion when it fits your setup.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use WIP spell nodes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not build your whole setup around WIP nodes. Treat them as future route hints, and rely on working effects like fire upgrades, Greater Mana, Savant, Dark Arts, Kutracite, and Guards Vermillion for the current version.",
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
          title="Which Spells Should You Use in Fatekeeper?"
          description="Use fire for reliable damage, telekinesis for control, Power and Greater Mana for spell support, and Life Leech as alchemy sustain."
          gameTitle="Fatekeeper"
          gameHref="/fatekeeper"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BestSpellsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}