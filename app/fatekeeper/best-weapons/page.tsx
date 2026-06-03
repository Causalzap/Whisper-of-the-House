import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestWeaponsContent from "@/data/fatekeeper/best-weapons.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/fatekeeper/best-weapons`;

const imageUrls = [
  `${siteUrl}/images/fatekeeper/fatekeeper-blade-vs-axe-stats.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-switch-weapon.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-ornate-dagger-stats.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-skull-club-pickup.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-burning-axe-pickup.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-weapon-coating.webp`,
];

const toc = [
  { id: "best-early-weapon", label: "Best early weapon" },
  { id: "blade-vs-axe", label: "Blade vs Axe" },
  { id: "early-weapons-list", label: "Early weapons" },
  { id: "weapon-stats", label: "Weapon stats" },
  { id: "weapon-switching", label: "Weapon switching" },
  { id: "dagger", label: "Ornate Dagger" },
  { id: "blunt-weapons", label: "Blunt weapons" },
  { id: "burning-axe", label: "Burning Axe" },
  { id: "weapon-coating", label: "Weapon coating" },
  { id: "which-weapon-to-choose", label: "Choose a weapon" },
  { id: "weapons-for-bosses", label: "Boss weapons" },
  { id: "common-mistakes", label: "Weapon mistakes" },
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
    href: "/fatekeeper/best-build",
    label: "Fatekeeper Best Builds Guide",
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
  title: "Fatekeeper Best Weapons: Blade, Axe, Dagger & More",
  description:
    "Compare Fatekeeper weapons: Blade vs Axe, Ornate Dagger, Skull Club, Burning Axe stats, weapon coatings, boss weapons, and when to switch routes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Fatekeeper Best Weapons Guide: Blade vs Axe, Dagger, Club, Burning Axe and Coatings",
    description:
      "Choose the best Fatekeeper weapon for your build with Blade of the Sentinel vs Axe of the Sentinel, Ornate Dagger, Skull Club, Burning Axe, coatings and boss weapon advice.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Fatekeeper Blade of the Sentinel and Axe of the Sentinel starting weapon stat comparison.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatekeeper Best Weapons Guide",
    description:
      "Pick the right Fatekeeper weapon: Blade, Axe, Ornate Dagger, Skull Club, Burning Axe, coatings, and boss-safe choices.",
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
          name: "Best Weapons Guide",
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
        "Fatekeeper Best Weapons Guide: Blade of the Sentinel, Axe of the Sentinel, Ornate Dagger, Skull Club, Burning Axe and Weapon Coatings",
      description:
        "A player-focused Fatekeeper best weapons guide for Early Access. The guide compares Blade of the Sentinel and Axe of the Sentinel, explains early weapon stats such as attack cost, dash cost, slash damage, crit chance, pierce damage, fire damage and weapon coatings, and helps players choose when to use Ornate Dagger, Skull Club, Burning Axe or alchemy-supported weapons. It includes Burning Axe stats with 5 attack costs, 5 dash costs, 10 slash damage and 15 fire damage, plus advice for boss-safe weapons, fire melee hybrid builds, blunt and shatter routes, dagger crit routes and common weapon mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-03",
      dateModified: "2026-06-03",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Fatekeeper" },
        { "@type": "Thing", name: "Fatekeeper best weapons" },
        { "@type": "Thing", name: "Fatekeeper weapon guide" },
        { "@type": "Thing", name: "Blade of the Sentinel" },
        { "@type": "Thing", name: "Axe of the Sentinel" },
        { "@type": "Thing", name: "Ornate Dagger" },
        { "@type": "Thing", name: "Skull Club" },
        { "@type": "Thing", name: "Burning Axe" },
        { "@type": "Thing", name: "Fatekeeper dagger build" },
        { "@type": "Thing", name: "Fatekeeper crit build" },
        { "@type": "Thing", name: "Fatekeeper blunt weapons" },
        { "@type": "Thing", name: "Fatekeeper club" },
        { "@type": "Thing", name: "Fatekeeper mace" },
        { "@type": "Thing", name: "Fatekeeper hammer" },
        { "@type": "Thing", name: "Fatekeeper fire weapon" },
        { "@type": "Thing", name: "Fatekeeper weapon coating" },
        { "@type": "Thing", name: "Fatekeeper poison" },
        { "@type": "Thing", name: "Fatekeeper alchemy" },
        { "@type": "Thing", name: "Fatekeeper boss weapons" },
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
          name: "What is the best early weapon in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Blade of the Sentinel is the stronger listed starting weapon with 30 slash damage. Use Axe of the Sentinel if the one-handed feel is easier while learning.",
          },
        },
        {
          "@type": "Question",
          name: "Is Ornate Dagger good in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you want a dagger and crit route and can dodge cleanly. Its crit chance and pierce damage make it the clearest early dagger option, but it is not the safest weapon if you are still trading hits.",
          },
        },
        {
          "@type": "Question",
          name: "Is Burning Axe good in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you want a fire or hybrid melee route. Burning Axe is a rare one-handed axe with 5 attack costs, 5 dash costs, 10 slash damage and 15 fire damage, making it useful for players who already like axe timing or elemental pressure.",
          },
        },
        {
          "@type": "Question",
          name: "Are clubs good in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Clubs are useful if you like blunt weapon timing or want to test shatter-style routes. They are less beginner-friendly if you are still struggling with slow attacks.",
          },
        },
        {
          "@type": "Question",
          name: "Do maces and hammers matter in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Maces and hammers belong with blunt weapon routes and are worth watching for shatter or heavy melee builds, even if your first tested blunt weapon is a club.",
          },
        },
        {
          "@type": "Question",
          name: "Do weapon coatings matter in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Weapon coatings let alchemy support melee builds through poison, vials or other effects. They are especially useful before bosses or longer fights.",
          },
        },
        {
          "@type": "Question",
          name: "What weapon should I use for bosses in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use a weapon that lets you attack once or twice and still recover safely. Pair it with fire, poison, weapon coating, healing or mana support instead of trying to win with greedy melee strings.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always use rare weapons in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. A rare weapon is not automatically better if it does not fit your build or timing. Use rare weapons when their damage type, speed or effect supports your route.",
          },
        },
        {
          "@type": "Question",
          name: "What weapon should I pair with a fire build in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Burning Axe is the clearest early fire weapon option. You can also pair fire spells with a safe melee weapon if the axe timing does not feel comfortable.",
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
          title="Which Weapon Should You Use in Fatekeeper?"
          description="Compare the early weapons that actually matter: Blade vs Axe, Ornate Dagger, Skull Club, Burning Axe, coatings, and boss-safe choices."
          gameTitle="Fatekeeper"
          gameHref="/fatekeeper"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BestWeaponsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}