import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TearsOfMetalBestBuildsContent from "@/data/tears-of-metal/best-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tears-of-metal`;
const pageUrl = `${hubUrl}/best-builds`;

const imageUrls = [
  `${siteUrl}/images/tears-of-metal/tears-of-metal-wallace-flamberge.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-wallace-ravager-delayed-heat.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-wallace-crusader-vortex-heavy.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-brienne-direct-hit-passive.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-brienne-alchemist-dodge-trail.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-brienne-heavy-combust.webp`,
];

const toc = [
  {
    id: "how-builds-work",
    label: "How early builds work",
  },
  {
    id: "wallace-heavy-explosion",
    label: "Wallace Heavy Explosion",
  },
  {
    id: "brienne-burn-combust",
    label: "Brienne Burn & Combust",
  },
  {
    id: "encounter-fit",
    label: "Best build by encounter",
  },
  {
    id: "solo-co-op",
    label: "Solo & co-op variants",
  },
  {
    id: "repair-a-build",
    label: "How to repair a build",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/tears-of-metal",
    label: "Tears of Metal Guide Hub",
  },
  {
    href: "/tears-of-metal/beginner-guide",
    label: "Beginner Guide & Act 1 Route",
  },
  {
    href: "/tears-of-metal/village-upgrades",
    label: "Village Upgrades & Progression",
  },
  {
    href: "/tears-of-metal/co-op-guide",
    label: "Co-op Host, Loot & Revives",
  },
  {
    href: "/tears-of-metal/boss-guide",
    label: "Gilles & Iseult Boss Guide",
  },
];

export const metadata: Metadata = {
  title: "Best Wallace & Brienne Builds in Tears of Metal",
  description:
    "Build Wallace with Delayed Heat, Vortex, and Heavy explosions, or Brienne with Direct Hits, Burning, and Combust, plus fallback Emblems and co-op roles.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Tears of Metal Early Builds: Wallace Heavy & Brienne Burn",
    description:
      "Follow two tested early-build routes with required Emblems, fallback choices, army setups, solo and co-op roles, and encounter-specific adjustments.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1456,
        height: 816,
        alt: "Tears of Metal Wallace Ravager build showing Heated Strike and Heated Block Delayed Heat effects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tears of Metal Wallace & Brienne Early Builds",
    description:
      "Use Wallace Heavy explosions or Brienne Burn and Combust, then replace missing Emblems without restarting a playable Campaign.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question: "Should I stay with one Emblem Clan in Tears of Metal?",
    answer:
      "Not always. Combine Clans when one supplies the setup and another supplies the payoff. Ravager and Crusader work together because Delayed Heat and the Heavy explosion benefit from Vortex control.",
  },
  {
    question: "Is Wallace Heavy better than Strike in Tears of Metal?",
    answer:
      "Heavy is the payoff, while Strike is the reliable Delayed Heat setup. Use Strike first, then complete Heavy during a confirmed attack opening.",
  },
  {
    question: "Is Flamberge required for the Wallace build?",
    answer:
      "No. Flamberge's 33% tackle-stun chance helps create Heavy openings, but the core Ravager Delayed Heat and Crusader Vortex loop works without it.",
  },
  {
    question: "Does Brienne lose her combo when she Dodges?",
    answer:
      "No. Brienne's passive states that Dodge does not cancel the combo. Receiving damage still resets Direct Hit progress, so Dodge should be used to leave attacks rather than remain inside them.",
  },
  {
    question: "Is Burning enough for bosses in Tears of Metal?",
    answer:
      "Not by itself. Burning and Combust add useful damage, but the five-metre Burning-death burst requires another enemy to die. Against an isolated boss, direct Strike and Heavy damage matter more.",
  },
  {
    question: "What should I take when the core Emblem does not appear?",
    answer:
      "Take the closest effect that gives the same action a useful job. Wallace can use direct Heavy damage, stun, or Block support. Brienne can use direct Strike damage, Trailing Dodge, Resilient, or Heavy damage until the Alchemist loop appears.",
  },
  {
    question: "How do I evaluate a duplicate or upgraded Emblem?",
    answer:
      "Compare the new tooltip with the equipped effect and ask whether it improves the same setup, payoff, control, or safe exit. Take it when the displayed value strengthens the current loop instead of assuming every duplicate creates a separate full-strength stack.",
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
          name: "Tears of Metal Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Wallace and Brienne Builds",
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
        "Tears of Metal Early Builds: Wallace Heavy Explosion and Brienne Burn and Combust",
      description:
        "This Tears of Metal build guide explains two reproducible Early Access routes for William Wallace and Brienne. The Wallace build applies Ravager Delayed Heat with Strike, converts Heavy into an explosive payoff, and uses Crusader Vortex, Spearmen, Archers, Block Stamina, and optional Flamberge tackle stuns to control Captains and bosses. The Brienne build preserves Direct Hits through sideways Dodges, applies Alchemist Burning and Combust through Strike, Trails, and Heavy Finishers, and uses a balanced army, movement, Resilient, and direct damage to maintain the combo. Each build includes required components, fallback Emblems, Artifact and equipment priorities, tested results, encounter matchups, solo and two-player co-op adjustments, and a diagnostic table for repairing incomplete builds.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-24",
      dateModified: "2026-07-24",
      about: [
        {
          "@type": "VideoGame",
          name: "Tears of Metal",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Tears of Metal early builds",
        },
        {
          "@type": "Thing",
          name: "William Wallace build",
        },
        {
          "@type": "Thing",
          name: "Brienne build",
        },
        {
          "@type": "Thing",
          name: "Wallace Heavy Explosion build",
        },
        {
          "@type": "Thing",
          name: "Brienne Burn and Combust build",
        },
        {
          "@type": "Thing",
          name: "Ravager Emblems",
        },
        {
          "@type": "Thing",
          name: "Crusader Emblems",
        },
        {
          "@type": "Thing",
          name: "Alchemist Emblems",
        },
        {
          "@type": "Thing",
          name: "Delayed Heat",
        },
        {
          "@type": "Thing",
          name: "Vortex Heavy",
        },
        {
          "@type": "Thing",
          name: "Burning and Combust",
        },
        {
          "@type": "Thing",
          name: "Flamberge",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal solo builds",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal co-op builds",
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
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          title="Best Early Wallace and Brienne Builds"
          description="Build Wallace around Delayed Heat, Heavy explosions, and Vortex, or use Brienne's Direct Hits, Burning, and Combust. Each route includes missing-piece replacements, army choices, tested results, and solo or co-op adjustments."
          gameTitle="Tears of Metal"
          gameHref="/tears-of-metal"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TearsOfMetalBestBuildsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}