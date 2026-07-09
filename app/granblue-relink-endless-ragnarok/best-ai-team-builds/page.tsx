import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GuideContent from "@/data/granblue-relink-endless-ragnarok/best-ai-team-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/granblue-relink-endless-ragnarok/best-ai-team-builds`;

const imageUrls = [
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-ai-party-setup.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-damage-cap-training.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-eugen-master-traits-overview.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-backup-character-enlist.webp`,
];

const toc = [
  { id: "best-ai-team-builds", label: "Best AI team" },
  { id: "character-builds", label: "Eugen, Cagliostro & Zeta builds" },
  { id: "cagliostro-ai-controversy", label: "Cagliostro AI issue" },
  { id: "damage-cap-and-sigils", label: "Damage Cap & sigils" },
  { id: "master-traits", label: "Master Traits" },
  { id: "ai-trait-stages", label: "Trait stages" },
  { id: "alternative-ai-picks", label: "Alternative AI picks" },
  { id: "backup-character", label: "Backup Character" },
  { id: "conflux-ai-farming-route", label: "Conflux AI farming" },
  { id: "ai-build-diagnosis", label: "AI build diagnosis" },
  { id: "new-characters-as-ai", label: "New characters as AI" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/granblue-relink-endless-ragnarok",
    label: "Granblue Relink Endless Ragnarok Guide Hub",
  },
  {
    href: "/granblue-relink-endless-ragnarok/conflux-guide",
    label: "Conflux Guide",
  },
  {
    href: "/granblue-relink-endless-ragnarok/fatebreaker-chaos-progression",
    label: "Fatebreaker and Chaos Progression",
  },
  {
    href: "/granblue-relink-endless-ragnarok/new-characters-unlock-guide",
    label: "New Characters Unlock Guide",
  },
  {
    href: "/granblue-relink-endless-ragnarok/how-to-start",
    label: "How to Start Endless Ragnarok",
  },
];

export const metadata: Metadata = {
  title: "Granblue Relink Best AI Team for Conflux & Chaos",
  description:
    "Build a stable Endless Ragnarok AI team for solo Conflux and Chaos with Eugen, Cagliostro, Zeta, Backup Character, sigils and traits.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Granblue Relink Best AI Team for Conflux & Chaos",
    description:
      "Use this Endless Ragnarok AI team guide to build Eugen, Cagliostro and Zeta for solo Conflux, Chaos, Backup Character routes, Damage Cap, sigils and Master Traits.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Granblue Fantasy Relink Endless Ragnarok AI party setup screen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Granblue Relink Best AI Team for Conflux & Chaos",
    description:
      "Build Eugen, Cagliostro and Zeta for solo Conflux and Chaos with Backup Character, sigils, Damage Cap and Master Traits.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "What is the best AI team for Endless Ragnarok?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The first solo AI team I build is manual main, Eugen, Cagliostro, and Zeta. Eugen covers ranged pressure, Cagliostro stabilizes early Chaos, and Zeta gives simple AI damage when her skills are stripped for auto attacks.",
    },
  },
  {
    "@type": "Question",
    name: "What skills should Eugen AI use?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "I build Eugen around his ranged role, especially Detonator, Armor-Piercing Round, and Sumrak value. I do not force grenade-heavy behavior unless the AI is using it cleanly in the fight.",
    },
  },
  {
    "@type": "Question",
    name: "Why does Cagliostro AI feel weak sometimes?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Cagliostro AI does not play her charged Unique Attack and Collapse++ route like a manual player. I use her as a support-safe slot first, then add damage after Chaos clears are stable.",
    },
  },
  {
    "@type": "Question",
    name: "Should Zeta AI use skills?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "For the most consistent setup, I strip Zeta's skills and let her auto attack. That keeps her behavior simple and pairs well with Intense Loops, normal attack value, and Damage Cap.",
    },
  },
  {
    "@type": "Question",
    name: "Should I use Backup Character or farm Conflux?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Use Backup Character when one slot is blocking progress right now. Then farm Conflux to catch up your own AI companion and replace the borrowed slot later.",
    },
  },
];

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
          name: "Granblue Relink Endless Ragnarok Guide",
          item: `${siteUrl}/granblue-relink-endless-ragnarok`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best AI Team Builds",
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
        "Granblue Fantasy Relink Endless Ragnarok Best AI Team for Solo Conflux and Chaos",
      description:
        "A player-focused Granblue Fantasy Relink Endless Ragnarok AI team guide for solo Conflux and Chaos. It explains why I start with Eugen, Cagliostro and Zeta, how I use Backup Character to cover weak slots, how I read Damage Cap and AI sigils, when I use Terminus weapons, Catastrophe, Zosimos, Supplementary Damage V+, Potion Hoarder and Auto Revive, how I choose Master Traits for Eugen, Cagliostro and Zeta, and how I use Conflux to catch up the exact AI companion blocking progress.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-09",
      dateModified: "2026-07-09",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Granblue Fantasy: Relink" },
        { "@type": "Thing", name: "Endless Ragnarok" },
        { "@type": "Thing", name: "Granblue Relink best AI team" },
        { "@type": "Thing", name: "Granblue Relink Conflux AI team" },
        { "@type": "Thing", name: "Granblue Relink Chaos AI build" },
        { "@type": "Thing", name: "Eugen AI build" },
        { "@type": "Thing", name: "Cagliostro AI build" },
        { "@type": "Thing", name: "Zeta AI build" },
        { "@type": "Thing", name: "Backup Character" },
        { "@type": "Thing", name: "Damage Cap" },
        { "@type": "Thing", name: "Master Traits" }
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
      mainEntity: faqEntities,
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
          title="Granblue Fantasy Relink Best AI Team for Solo Conflux and Chaos"
          description="Build one stable AI party first: Eugen for ranged uptime, Cagliostro for support safety, Zeta for simple damage, then use Backup Character and Conflux to fix the weak slot."
          gameTitle="Granblue Fantasy: Relink"
          gameHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseLabel="Granblue Fantasy Relink Endless Ragnarok Guide"
          updatedAt="July 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}