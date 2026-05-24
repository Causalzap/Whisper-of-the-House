import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BaneBossContent from "@/data/lego-batman/bane-boss.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/bane-boss`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-bane-boss-start.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-bane-reinforcements.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-bane-booster-phase.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-bane-damage-window.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-bane-wide-open.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-bane-defeated.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-batgirl-bomb-timer.webp`,
];

const toc = [
  { id: "bane-boss-fight-overview", label: "Overview" },
  { id: "bane-phase-summary", label: "Phases" },
  {
    id: "opening-pressure-and-league-reinforcements",
    label: "Reinforcements",
  },
  { id: "booster-phase", label: "Booster Phase" },
  { id: "how-to-use-the-damage-window", label: "Damage Window" },
  { id: "final-opening-and-bane-defeated", label: "Finish Bane" },
  { id: "best-character-and-role-use", label: "Characters" },
  { id: "what-happens-after-bane", label: "After Bane" },
  { id: "health-bar-and-difficulty-notes", label: "Difficulty" },
  { id: "if-you-are-stuck", label: "Stuck?" },
  { id: "full-bane-route", label: "Fast Route" },
  { id: "related-lego-batman-guides", label: "Related" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/lego-batman", label: "LEGO Batman Guide" },
  { href: "/lego-batman/red-bricks", label: "Red Bricks Guide" },
  { href: "/lego-batman/poison-ivy-boss", label: "Poison Ivy Boss Guide" },
  { href: "/lego-batman/firefly-boss", label: "Firefly Boss Guide" },
  { href: "/lego-batman/batgirl-unlock", label: "Batgirl Unlock Guide" },
  { href: "/lego-batman/escaped-zoo-animals", label: "Escaped Zoo Animals Guide" },

  { href: "/lego-batman/carmine-falcone", label: "Carmine Falcone Walkthrough" },
];

export const metadata: Metadata = {
  title: "Bane Boss Guide: Booster Phase & Damage Windows",
  description:
    "Beat Bane in LEGO Batman Legacy: clear reinforcements, survive the booster phase, punish exposed windows, and handle Batgirl’s bomb follow-up.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Bane Boss Guide: Booster Phase, Reinforcements, and Bomb Follow-Up",
    description:
      "Learn when to clear League reinforcements, how to read Bane’s booster phase, when to punish him, and what happens after the fight.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Bane starting his late-game boss fight in LEGO Batman Legacy.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bane Boss Guide: Booster Phase & Damage Windows",
    description:
      "Clear adds, survive Bane’s booster phase, punish exposed windows, and continue into Batgirl’s bomb objective.",
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
          name: "LEGO Batman Guide",
          item: `${siteUrl}/lego-batman`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bane Boss Guide",
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
        "LEGO Batman Legacy Bane Boss Guide: League Reinforcements, Booster Phase, Damage Windows, Final Opening and Batgirl Bomb Objective",
      description:
        "A player-focused LEGO Batman Legacy Bane boss guide explaining the fight through reliable in-game cues instead of guessed health percentages. Covers the opening pressure, League reinforcement wave before the booster phase, Bane’s booster transition, how to read exposed-state damage windows, how to finish Bane when he drops, best character and role use, why the continuous boss health bar should not be treated as exact phase thresholds, and the Batgirl bomb shutdown objective that begins immediately after Bane is defeated.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-20",
      dateModified: "2026-05-20",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "Bane" },
        { "@type": "Thing", name: "Bane boss fight" },
        { "@type": "Thing", name: "League reinforcements" },
        { "@type": "Thing", name: "Booster phase" },
        { "@type": "Thing", name: "Damage window" },
        { "@type": "Thing", name: "Boss health bar" },
        { "@type": "Thing", name: "Batgirl bomb objective" },
        { "@type": "Thing", name: "LEGO Batman boss guide" },
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
          name: "How do you beat Bane in LEGO Batman Legacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Clear the nearby League enemies, survive the booster phase, and attack when Bane is actually exposed.",
          },
        },
        {
          "@type": "Question",
          name: "When can you damage Bane?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Damage Bane when he drops, becomes clearly open, or the game calls out that he is vulnerable.",
          },
        },
        {
          "@type": "Question",
          name: "Does the reinforcement wave happen before the booster phase?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. In the confirmed route, Bane calls League reinforcements before he starts the booster phase.",
          },
        },
        {
          "@type": "Question",
          name: "What does the booster phase do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The booster phase is a pressure transition. Play safely through it and wait for Bane to expose himself afterward.",
          },
        },
        {
          "@type": "Question",
          name: "What should you do when Bane calls reinforcements?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Clear the closest League enemies first. They are there to interrupt your spacing and make Bane harder to read.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a specific character you should use against Bane?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Batman or the nearest active character for the boss punish. Use your partner to keep the arena clear.",
          },
        },
        {
          "@type": "Question",
          name: "Do gadgets skip the Bane fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No confirmed gadget skip is shown in this route. Use tools for add control, but beat Bane through the exposed-state openings.",
          },
        },
        {
          "@type": "Question",
          name: "Does Bane have exact health phases?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The fight is easier to read through cues than percentages. The boss bar is continuous, so watch for reinforcements, booster, and exposed-state moments instead of relying on guessed health thresholds.",
          },
        },
        {
          "@type": "Question",
          name: "Is Bane harder on Dark Knight difficulty?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The strategy is the same, but mistakes are less forgiving. Clear adds sooner and do not attack while Bane is active.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after Bane is defeated?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The story moves straight into the bomb objective. Batgirl needs time to shut it down while the team keeps the threat contained.",
          },
        },
        {
          "@type": "Question",
          name: "Should you farm before fighting Bane?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Bane is mainly a timing and arena-control fight, not a farming check.",
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
          title="Bane Boss Guide: How to Survive the Booster Phase and Beat Him"
          description="Clear the League reinforcements, read Bane’s booster phase, punish him only when he is exposed, and stay ready for Batgirl’s bomb objective after the fight."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BaneBossContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}