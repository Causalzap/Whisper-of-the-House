import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BossGuideContent from "@/data/fatekeeper/boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/fatekeeper/boss-guide`;

const imageUrls = [
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-entrance.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-save-before-boss.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-opening.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-range.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-adds.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-block-timing.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-phase-two.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-stomp.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-fire-best.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-clean-sequence.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-final-fight-victory.webp`,
];

const toc = [
  { id: "prepare-before-fight", label: "Prepare before fight" },
  { id: "opening-phase", label: "Opening phase" },
  { id: "boss-attacks", label: "Boss attacks" },
  { id: "adds", label: "Clear adds" },
  { id: "block-timing", label: "Block timing" },
  { id: "phase-two", label: "Phase two" },
  { id: "best-damage", label: "Best damage" },
  { id: "clean-kill-loop", label: "Clean kill loop" },
  { id: "common-mistakes", label: "Boss mistakes" },
  { id: "recommended-build", label: "Recommended build" },
  { id: "victory", label: "After victory" },
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
    href: "/fatekeeper/best-spells",
    label: "Fatekeeper Best Spells Guide",
  },
];

export const metadata: Metadata = {
  title: "Fatekeeper Boss Guide: Final EA Fight, Adds & Stomp",
  description:
    "Beat Fatekeeper's final Early Access fight: prepare before the arena, clear adds, block the opener, use fire, dodge stomp, and avoid phase two greed.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Fatekeeper Boss Guide: Final Early Access Fight, Adds, Stomp and Phase Two",
    description:
      "Learn how to beat Fatekeeper's final Early Access fight with preparation, fire damage, adds control, block timing, stomp avoidance, phase two resets and safe punish windows.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Fatekeeper final Early Access fight arena with corrupted roots in the center.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatekeeper Boss Guide: Final EA Fight",
    description:
      "Clear adds, block the opener, use fire or short melee windows, jump for stomp, and reset safely in phase two.",
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
          name: "Boss Guide",
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
        "Fatekeeper Boss Guide: Final Early Access Fight, Adds, Stomp, Fire Damage and Phase Two",
      description:
        "A player-focused Fatekeeper boss guide for the final Early Access fight. The guide explains how to prepare before the arena, why players should save and craft first, how to handle the opening hit, long-range attacks, adds, block timing, phase two pressure and stomp attacks. It also covers why fire is the safest magic damage option, when to use short melee punish windows, how to avoid greedy phase two deaths, what to do after victory, and why Sacred Roots should not be treated as the confirmed boss name.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-03",
      dateModified: "2026-06-03",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Fatekeeper" },
        { "@type": "Thing", name: "Fatekeeper boss guide" },
        { "@type": "Thing", name: "Fatekeeper final boss" },
        { "@type": "Thing", name: "Fatekeeper final Early Access fight" },
        { "@type": "Thing", name: "Fatekeeper corrupted roots fight" },
        { "@type": "Thing", name: "Fatekeeper Sacred Roots" },
        { "@type": "Thing", name: "Fatekeeper phase two" },
        { "@type": "Thing", name: "Fatekeeper stomp" },
        { "@type": "Thing", name: "Fatekeeper adds" },
        { "@type": "Thing", name: "Fatekeeper block timing" },
        { "@type": "Thing", name: "Fatekeeper fire damage" },
        { "@type": "Thing", name: "Fatekeeper melee punish" },
        { "@type": "Thing", name: "Fatekeeper alchemy prep" },
        { "@type": "Thing", name: "Fatekeeper boss build" },
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
          name: "Is Sacred Roots the boss name in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not confirmed. The phrase appears in dialogue as By the sacred roots, so this guide does not treat Sacred Roots as the official boss name. It calls the fight the corrupted roots fight or final Early Access fight.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best way to beat the final Early Access fight in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Prepare before entering, clear adds, use fire if your build supports it, block the opener if dodging feels unreliable, jump or move early for stomp, and punish only in short windows.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use fire, ice, wind, or telekinesis for the final fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fire is the safest damage option for most players. Ice, wind and telekinesis can help if your build supports them, but they are less reliable as the main answer here.",
          },
        },
        {
          "@type": "Question",
          name: "Can I block the boss in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Blocking can be better than trying to last-second dodge every opening hit. Just do not drain all your stamina by holding block forever.",
          },
        },
        {
          "@type": "Question",
          name: "How do I avoid the stomp in the final fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Move or jump early when the stomp starts. Do not stand close and assume it will miss because you are beside the boss.",
          },
        },
        {
          "@type": "Question",
          name: "Should I kill the adds in the final fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Clear adds when they crowd you or interrupt your healing. Ignoring them makes the boss feel much harder.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I keep dying in phase two?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually because of greed, low stamina, bad healing timing, or stomp damage. Slow down, punish briefly, then reset.",
          },
        },
        {
          "@type": "Question",
          name: "What build should I use for the fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use health, stamina, and fire or reliable melee. If your setup feels too fragile, use a safer build route before trying to brute-force the fight.",
          },
        },
        {
          "@type": "Question",
          name: "Is this fight too hard for a first run?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It can feel rough if you enter underprepared or try to force greedy melee. The fight becomes much more manageable once you save, craft, manage adds, and stop overcommitting in phase two.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after beating the fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the arena before leaving. Look for route changes, rewards, dialogue, or any new path that opens after the boss dies.",
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
          title="How Do You Beat Fatekeeper's Final EA Fight?"
          description="Prepare before the arena, clear adds, block the opener, use fire or short melee punishes, jump for stomp, and reset safely in phase two."
          gameTitle="Fatekeeper"
          gameHref="/fatekeeper"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BossGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}