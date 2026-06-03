import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestBuildContent from "@/data/fatekeeper/best-build.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/fatekeeper/best-build`;

const imageUrls = [
  `${siteUrl}/images/fatekeeper/fatekeeper-skill-tree-core-stats.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-greater-mana-node.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-azuremash-effect.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-weapon-coating.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-ornate-dagger-stats.webp`,
];

const toc = [
  { id: "best-build", label: "Best build" },
  { id: "core-stats", label: "Core stats" },
  { id: "upgrade-priority", label: "Upgrade priority" },
  { id: "safe-melee-build", label: "Safe melee" },
  { id: "fire-build", label: "Fire build" },
  { id: "alchemy-build", label: "Alchemy build" },
  { id: "shatter-build", label: "Shatter / frost" },
  { id: "telekinesis-build", label: "Telekinesis" },
  { id: "wind-build", label: "Wind build" },
  { id: "dagger-build", label: "Dagger / crit" },
  { id: "which-route-to-pick", label: "Choose a route" },
  { id: "build-mistakes", label: "Build mistakes" },
  { id: "boss-build", label: "Hard fights" },
  { id: "recommended-progression", label: "Progression" },
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
    href: "/fatekeeper/best-weapons",
    label: "Fatekeeper Best Weapons Guide",
  },
  {
    href: "/fatekeeper/best-spells",
    label: "Fatekeeper Best Spells Guide",
  },
  {
    href: "/fatekeeper/boss-guide",
    label: "Fatekeeper Boss Guide",
  },
];

export const metadata: Metadata = {
  title: "Fatekeeper Best Build: Beginner, Fire & Melee Routes",
  description:
    "Choose the best Fatekeeper build for Early Access: safe melee, fire, alchemy, shatter, telekinesis, wind, dagger, Burning Axe, respec tips, and upgrade priority.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Fatekeeper Best Builds Guide: Safe Melee, Fire, Alchemy, Shatter, Wind and Dagger",
    description:
      "Pick a Fatekeeper build route by difficulty, upgrade priority, core stats, fire nodes, alchemy support, Burning Axe, dagger crit, telekinesis, wind, shatter and respec rules.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Fatekeeper skill tree showing Power, Wrath, Fortitude, and Insight core stat nodes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatekeeper Best Build Guide",
    description:
      "Use safe melee first, then branch into fire, alchemy, shatter, telekinesis, wind or dagger with clear upgrade priorities.",
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
          name: "Best Builds Guide",
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
        "Fatekeeper Best Builds Guide: Safe Melee, Fire, Alchemy, Shatter, Telekinesis, Wind and Dagger Routes",
      description:
        "A player-focused Fatekeeper best builds guide for Early Access. The guide compares build route difficulty, explains why safe melee is the best beginner route, and covers core skill tree nodes such as Power, Wrath, Fortitude and Insight. It also explains early upgrade priority, fire and pyromancy nodes like Excessive Flames, Ricochet and MORE!, alchemy support through Horder, Azuremash and weapon coatings, Burning Axe as a fire melee option, dagger and crit routes with Ornate Dagger, wind spell cost problems, shatter and frost route notes, telekinesis utility with Savant and Dark Arts, respec guidance, hard-fight setup and common build mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-03",
      dateModified: "2026-06-03",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Fatekeeper" },
        { "@type": "Thing", name: "Fatekeeper best build" },
        { "@type": "Thing", name: "Fatekeeper beginner build" },
        { "@type": "Thing", name: "Fatekeeper safe melee build" },
        { "@type": "Thing", name: "Fatekeeper fire build" },
        { "@type": "Thing", name: "Fatekeeper pyromancy build" },
        { "@type": "Thing", name: "Fatekeeper alchemy build" },
        { "@type": "Thing", name: "Fatekeeper shatter build" },
        { "@type": "Thing", name: "Fatekeeper frost build" },
        { "@type": "Thing", name: "Fatekeeper telekinesis build" },
        { "@type": "Thing", name: "Fatekeeper wind build" },
        { "@type": "Thing", name: "Fatekeeper dagger build" },
        { "@type": "Thing", name: "Fatekeeper crit build" },
        { "@type": "Thing", name: "Power" },
        { "@type": "Thing", name: "Wrath" },
        { "@type": "Thing", name: "Fortitude" },
        { "@type": "Thing", name: "Insight" },
        { "@type": "Thing", name: "Greater Mana" },
        { "@type": "Thing", name: "Excessive Flames" },
        { "@type": "Thing", name: "Ricochet" },
        { "@type": "Thing", name: "MORE!" },
        { "@type": "Thing", name: "Storm Surge" },
        { "@type": "Thing", name: "Herald of Winter" },
        { "@type": "Thing", name: "Savant" },
        { "@type": "Thing", name: "Dark Arts" },
        { "@type": "Thing", name: "Horder" },
        { "@type": "Thing", name: "Azuremash" },
        { "@type": "Thing", name: "Burning Axe" },
        { "@type": "Thing", name: "Ornate Dagger" },
        { "@type": "Thing", name: "Sanctuary of First Flame" },
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
          name: "What is the best beginner build in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For your first Early Access run, the best beginner build is a safe melee hybrid with Fortitude or health, stamina, Wrath or melee damage, and enough attack speed to avoid getting punished after every swing. Add fire or alchemy support once your basics feel stable. For most players, this is also the easiest route.",
          },
        },
        {
          "@type": "Question",
          name: "Should I take Fortitude, Wrath, Power, or Insight first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Take Fortitude if you are dying too fast, Wrath if your main damage is melee, Power if you are building around spells or elemental damage, and Insight if you use alchemy often.",
          },
        },
        {
          "@type": "Question",
          name: "Is fire good in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Fire is one of the safest early magic routes. Ricochet, MORE!, Excessive Flames and Flame Spout all give fire a clear damage identity. Burning Axe also fits fire and melee hybrid builds.",
          },
        },
        {
          "@type": "Question",
          name: "What build is Burning Axe best for?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Burning Axe is best for a fire and melee hybrid build. Use it if you already like axe timing and want fire damage to support your melee route.",
          },
        },
        {
          "@type": "Question",
          name: "Is wind good in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Wind can be strong, especially with Storm Surge, but it needs mana support because Storm Surge increases wind spell costs. Fire is easier for most beginners.",
          },
        },
        {
          "@type": "Question",
          name: "Is dagger a good beginner build?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Dagger can be strong, especially with crit chance and pierce damage, but it is not the safest beginner route. Use dagger if you can dodge cleanly and stay close without taking constant hits.",
          },
        },
        {
          "@type": "Question",
          name: "Is shatter or frost good in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Shatter and frost are worth watching if you like setup damage and blunt weapons. Herald of Winter is the clearest current frost-facing node in these notes, but because it is marked WIP, safe melee or fire is easier for a first run.",
          },
        },
        {
          "@type": "Question",
          name: "Is telekinesis worth building around?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Telekinesis is always useful as utility. Build around it only if you take nodes like Savant or Dark Arts and use it often in combat.",
          },
        },
        {
          "@type": "Question",
          name: "Is alchemy worth investing in?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you craft and use consumables. Insight, Horder, Azuremash, poison, vials and weapon coatings can all support real builds. If you never craft, spend points elsewhere first.",
          },
        },
        {
          "@type": "Question",
          name: "Can I respec in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Early respecs are free at the Sanctuary of First Flame. Later respecs cost a rare resource found through exploration. Spend carefully until you know where the sanctuary is in your current build.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use WIP nodes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not make WIP or inactive nodes the center of your current build. Treat nodes like Herald of Winter or Flying Dagger as route signals for future updates, then build around working effects right now.",
          },
        },
        {
          "@type": "Question",
          name: "What build should I use for bosses?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use enough Fortitude or health to survive mistakes, enough stamina to dodge after attacking, a reliable damage plan like Wrath melee or fire, and prepared consumables such as healing, mana support, poison or weapon coating.",
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
          title="Which Build Should You Use in Fatekeeper?"
          description="Start with the safest beginner build, then branch into fire, alchemy, shatter, telekinesis, wind or dagger once your damage and survival feel stable."
          gameTitle="Fatekeeper"
          gameHref="/fatekeeper"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BestBuildContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
