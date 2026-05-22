import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestBuildContent from "@/data/zero-parades/best-build.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/zero-parades/best-build`;

const imageUrls = [
  `${siteUrl}/images/zero-parades/zero-parades-skill-setup-screen.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-skill-screen-stress-modifiers.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-dramatic-encounter-bazaar.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-exertion-third-die.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-gear-skill-bonus.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-conditioning-thoughts-menu.webp`,
];

const toc = [
  { id: "best-build-short-answer", label: "Short Answer" },
  { id: "best-starting-preset", label: "Preset or Custom" },
  { id: "best-45-point-builds", label: "45-Point Builds" },
  { id: "why-this-build-works", label: "Why It Works" },
  { id: "faculty-examples", label: "Faculty Examples" },
  { id: "best-skills-to-prioritize", label: "Best Skills" },
  { id: "how-exertion-changes-builds", label: "Exertion" },
  { id: "gear-matters", label: "Gear" },
  { id: "conditioning-for-builds", label: "Conditioning" },
  { id: "specific-conditioning-examples", label: "Thought Examples" },
  { id: "disco-elysium-players", label: "Disco Players" },
  { id: "second-playthrough-builds", label: "Second Run" },
  { id: "common-build-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/zero-parades", label: "ZERO PARADES Guide" },
  { href: "/zero-parades/early-game", label: "ZERO PARADES Early Game Walkthrough" },
  { href: "/zero-parades/stress-exertion", label: "ZERO PARADES Stress and Exertion Guide" },
  { href: "/zero-parades/conditioning", label: "ZERO PARADES Conditioning Guide" },
  { href: "/zero-parades/disco-elysium-guide", label: "ZERO PARADES Guide for Disco Elysium Players" },
];

export const metadata: Metadata = {
  title: "ZERO PARADES Best Build: 45-Point First Playthrough Setup",
  description:
    "Copy the safest 45-point ZERO PARADES build for your first playthrough. Master early Skills, Gear fixes, Exertion risks, and Conditioning choices.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "ZERO PARADES Best Build: 45-Point Setup, Skills, Gear",
    description:
      "Pick the best first-run ZERO PARADES build with copyable 45-point spreads, preset advice, skill priorities, gear examples, Exertion rules, and Conditioning tips.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Starting skill setup screen in ZERO PARADES For Dead Spies.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZERO PARADES Best Build: 45-Point First Run Setup",
    description:
      "Use a safer first-run build with concrete skill points, preset advice, gear fixes, Exertion rules, and Conditioning tips.",
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
          name: "ZERO PARADES Guide",
          item: `${siteUrl}/zero-parades`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ZERO PARADES Best Build",
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
        "ZERO PARADES: For Dead Spies Best Build Guide: 45-Point First Run Setup, Presets, Skills, Gear, Exertion and Conditioning",
      description:
        "A player-focused ZERO PARADES: For Dead Spies best build guide for first playthroughs, covering copyable 45-point skill spreads, preset versus custom setup, Faculty of Action, Faculty of Relation, Faculty of Intellect, beginner-safe Relation and Intellect builds, early skill priorities, gear-based skill fixes, Exertion risk, stress meter impact, Conditioning choices, Thought examples, and build advice for Disco Elysium players.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-22",
      dateModified: "2026-05-22",
      about: [
        {
          "@type": "VideoGame",
          name: "ZERO PARADES: For Dead Spies",
        },
        { "@type": "Thing", name: "ZERO PARADES best build" },
        { "@type": "Thing", name: "ZERO PARADES 45-point build" },
        { "@type": "Thing", name: "ZERO PARADES first playthrough build" },
        { "@type": "Thing", name: "ZERO PARADES beginner build" },
        { "@type": "Thing", name: "ZERO PARADES preset or custom" },
        { "@type": "Thing", name: "Faculty of Action" },
        { "@type": "Thing", name: "Faculty of Relation" },
        { "@type": "Thing", name: "Faculty of Intellect" },
        { "@type": "Thing", name: "Personalism" },
        { "@type": "Thing", name: "Cold Read" },
        { "@type": "Thing", name: "Blueprints" },
        { "@type": "Thing", name: "Poetics" },
        { "@type": "Thing", name: "Coordination" },
        { "@type": "Thing", name: "Exertion" },
        { "@type": "Thing", name: "Conditioning" },
        { "@type": "Thing", name: "Thoughts" },
        { "@type": "Thing", name: "ZERO PARADES gear" },
        { "@type": "Thing", name: "Disco Elysium players" },
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
          name: "What is the best 45-point build in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use a safe first-run spread that leans Relation and Intellect with Action backup: Personalism 5, Cold Read 4, Blueprints 4, Poetics 4, Coordination 3, Instincts 3, Entanglement 3, Grey Matter 3, Records 3, Statehood 3, Nerve 3, with lower backup values in the remaining skills.",
          },
        },
        {
          "@type": "Question",
          name: "Which preset is best for beginners in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pick the preset that leans closest to Relation or social reading. If you prefer clues and strange objects, pick the Intellect-style preset. Use Action first only if you want a more physical playthrough.",
          },
        },
        {
          "@type": "Question",
          name: "Can a bad build ruin my ZERO PARADES run?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Gear, Exertion, Conditioning, extra context, and alternate routes can all help you recover from weak checks. A bad build can make the opening rougher, but it does not automatically ruin the run.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Exertion to fix my build in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Exertion for important checks, not as your default build fix. If gear can raise the relevant skill, try gear first. Exertion improves the roll but adds stress.",
          },
        },
        {
          "@type": "Question",
          name: "What skills should Disco Elysium players pick first in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Disco Elysium players should start with Personalism, Cold Read, Blueprints, Poetics, Records, and Grey Matter. That keeps the reading-heavy RPG feel while adapting to ZERO PARADES' spy-focused systems.",
          },
        },
        {
          "@type": "Question",
          name: "Does my starting build lock me out of content in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not in a simple all-or-nothing way. A low skill can close or weaken some options, but ZERO PARADES often gives other routes, gear fixes, or ways to accept the consequence and keep moving.",
          },
        },
        {
          "@type": "Question",
          name: "Is gear important for ZERO PARADES builds?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Gear can change skill values and help you pass checks without spending stress. Always check clothing and held items before using Exertion on a major roll.",
          },
        },
        {
          "@type": "Question",
          name: "Which Conditioning is best for a Relation build in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Favor Thoughts that raise Personalism, Cold Read, Nerve, Statehood, or other social-route potential without adding a drawback that punishes your normal dialogue or item habits.",
          },
        },
        {
          "@type": "Question",
          name: "Should I min-max on a second ZERO PARADES playthrough?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you already understand the game. First runs are better with flexible builds. Second runs are where extreme Action, strange Intellect, heavy Relation, or drawback-heavy Conditioning becomes more interesting.",
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
          title="ZERO PARADES Best Build: A Safe First-Run Setup You Can Copy"
          description="Pick a 45-point build, choose the right preset, and learn when to use gear, Exertion, and Conditioning instead of restarting."
          gameTitle="ZERO PARADES: For Dead Spies"
          gameHref="/zero-parades"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 22, 2026"
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