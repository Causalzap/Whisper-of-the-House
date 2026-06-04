import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import OreadGuideContent from "@/data/realm-of-ink/oread-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/realm-of-ink/oread-guide`;

const imageUrls = [
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-butterfly-lasers.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-butterfly-roosting-call.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-six-line-secret-art.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-demon-puppet-summon.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-primordial-upgrades.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-spiraling-light-dance-speed.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-spiraling-light-dance-sigil.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-book-spirit-clear.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-talisman-ending.webp`,
];

const toc = [
  { id: "who-is-oread", label: "Who is Oread?" },
  { id: "best-oread-build", label: "Best Oread build" },
  { id: "butterfly-roosting-call", label: "Butterfly Roosting Call" },
  { id: "six-line-secret-art", label: "Six-Line Secret Art" },
  { id: "demon-puppet-summon", label: "Demon Puppet Summon" },
  { id: "primordial-ink", label: "Oread Primordial Ink" },
  { id: "spiraling-light-dance", label: "Speed or Sigil?" },
  { id: "best-curios", label: "Curios and stats" },
  { id: "how-to-play", label: "Rooms and bosses" },
  { id: "high-difficulty", label: "High difficulty" },
  { id: "ending-note", label: "Talisman ending note" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "recommended-progression", label: "Progression" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/realm-of-ink",
    label: "Realm of Ink Guide Hub",
  },
  {
    href: "/realm-of-ink/beginner-guide",
    label: "Realm of Ink Beginner Guide",
  },
  {
    href: "/realm-of-ink/best-builds",
    label: "Realm of Ink Best Builds Guide",
  },
  {
    href: "/realm-of-ink/ink-gems-curios-guide",
    label: "Realm of Ink Ink Gems and Curios Guide",
  },
  {
    href: "/realm-of-ink/final-boss-true-ending",
    label: "Realm of Ink Final Boss and True Ending Guide",
  },
  {
    href: "/realm-of-ink/endless-rupture-guide",
    label: "Realm of Ink Endless and Rupture Guide",
  },
];

export const metadata: Metadata = {
  title: "Realm of Ink Oread Guide: Unlock, Build & Butterfly Lasers",
  description:
    "Unlock Oread in Realm of Ink and build curse butterflies, Power of Prayer lasers, Spiraling Light Dance, Primordial Ink, boss damage, and high difficulty routes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Realm of Ink Oread Guide: Unlock, Curse Butterfly Build, Power of Prayer and Lasers",
    description:
      "Learn how to unlock Oread, build around Butterfly Roosting Call, Six-Line Secret Art, Power of Prayer, Spiraling Light Dance Speed or Sigil, Primordial Ink, boss damage, and high difficulty clears.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Realm of Ink Oread using butterfly lasers and curse effects during combat.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realm of Ink Oread Guide",
    description:
      "Unlock Oread and build curse butterflies, Power of Prayer lasers, Primordial Ink, Speed or Sigil, boss damage, and high difficulty routes.",
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
          name: "Realm of Ink Guide",
          item: `${siteUrl}/realm-of-ink`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Oread Guide",
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
        "Realm of Ink Oread Guide: How to Unlock Oread, Curse Butterfly Build, Power of Prayer, Spiraling Light Dance and High Difficulty Tips",
      description:
        "A player-focused Realm of Ink Oread guide for version 1.0. The guide explains how to unlock Oread through the Fox Inn and hub form unlock system, why Oread works best as a curse butterfly and laser build, how Butterfly Roosting Call, Six-Line Secret Art, Demon Puppet Summon, Power of Prayer, Spiraling Light Dance Speed and Sigil, Oread Primordial Ink, curse effect, ability damage, Ink Relic skill damage, heavy attack lasers, arrays, crit, status effects and defensive layers fit together, how to play Oread in normal rooms and boss fights, how to prepare for Book Spirit and high difficulty, and which common Oread mistakes cause damage to fall off.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-04",
      dateModified: "2026-06-04",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Realm of Ink" },
        { "@type": "Thing", name: "Realm of Ink Oread" },
        { "@type": "Thing", name: "Realm of Ink Oread guide" },
        { "@type": "Thing", name: "Realm of Ink how to unlock Oread" },
        { "@type": "Thing", name: "Realm of Ink Oread build" },
        { "@type": "Thing", name: "Realm of Ink Oread curse build" },
        { "@type": "Thing", name: "Realm of Ink Oread butterfly build" },
        { "@type": "Thing", name: "Realm of Ink Oread laser build" },
        { "@type": "Thing", name: "Realm of Ink Butterfly Roosting Call" },
        { "@type": "Thing", name: "Realm of Ink Six-Line Secret Art" },
        { "@type": "Thing", name: "Realm of Ink Demon Puppet Summon" },
        { "@type": "Thing", name: "Realm of Ink Power of Prayer" },
        { "@type": "Thing", name: "Realm of Ink Spiraling Light Dance" },
        { "@type": "Thing", name: "Realm of Ink Spiraling Light Dance Speed" },
        { "@type": "Thing", name: "Realm of Ink Spiraling Light Dance Sigil" },
        { "@type": "Thing", name: "Realm of Ink Primordial Ink" },
        { "@type": "Thing", name: "Realm of Ink Oread Primordial Ink" },
        { "@type": "Thing", name: "Realm of Ink curse effect" },
        { "@type": "Thing", name: "Realm of Ink ability damage" },
        { "@type": "Thing", name: "Realm of Ink Ink Relic skill damage" },
        { "@type": "Thing", name: "Realm of Ink Book Spirit" },
        { "@type": "Thing", name: "Realm of Ink Dragon Hair Brush" },
        { "@type": "Thing", name: "Realm of Ink Rupture" },
        { "@type": "Thing", name: "Realm of Ink talisman ending" },
        { "@type": "Thing", name: "BlazBlue Entropy Effect" },
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
          name: "How do I unlock Oread in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Oread is part of the 1.0 BlazBlue Entropy Effect crossover content. Update the game to version 1.0 and check the Fox Inn or hub form unlocks. If she is not available yet, keep progressing the hub unlock system.",
          },
        },
        {
          "@type": "Question",
          name: "Is Oread good in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Oread is good when you build around curses, butterflies, lasers, arrays, and ability upgrades. She can feel weak if you do not add enough damage payoff behind the curse setup.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Oread build?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best Oread build is a curse butterfly and laser build. Use Butterfly Roosting Call, curse effects, ability damage, Ink Relic skill damage, laser upgrades, and enough defense to survive high-pressure bosses.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Butterfly Roosting Call?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, it is one of the cleanest early choices for Oread. It creates more butterfly hits, and those small butterflies gain damage when curses are stacked.",
          },
        },
        {
          "@type": "Question",
          name: "Is Six-Line Secret Art good?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you can curse enemies consistently. It increases Curse Effects and gives more ability damage based on cursed targets in the room.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Demon Puppet Summon?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Demon Puppet Summon if you want a pet route. It can be strong, but it pushes the build toward Ink Pet support instead of the cleaner butterfly laser plan.",
          },
        },
        {
          "@type": "Question",
          name: "Should I pick Spiraling Light Dance Speed or Sigil?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pick Speed when your build wants faster light attacks, more butterfly frequency, and repeated curse application. Pick Sigil when your Curios reward arrays, zones, or standing in triggered effects.",
          },
        },
        {
          "@type": "Question",
          name: "Should I take Primordial Ink on Oread?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Take Primordial Ink when your Oread build already has curse, ability, butterfly, laser, or array support. Do not take it randomly if your two-Ink setup is already carrying your run.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my Oread damage feel low?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your damage usually feels low because you have curse setup but not enough payoff. Add ability damage, Ink Relic skill damage, heavy attack laser scaling, crit, status effects, or Curios that multiply your main damage source.",
          },
        },
        {
          "@type": "Question",
          name: "Is Oread good for bosses?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but boss fights require real scaling. Use curses early, save bursts for safe windows, and do not ignore defense. Book Spirit and other late bosses can punish low-damage Oread builds.",
          },
        },
        {
          "@type": "Question",
          name: "Can I replay Oread runs for achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Oread can be used for repeat clears and form-related achievement goals, including Book Spirit clears if that achievement is available in your version or platform. For achievement runs, use a safer Oread build with real boss damage and at least one defensive layer.",
          },
        },
        {
          "@type": "Question",
          name: "Is Oread good on high difficulty?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but she needs more support on high difficulty. Bring damage scaling, defensive layers, food when hurt, and upgrades that keep her butterflies and lasers relevant.",
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
          title="Want to Build Oread Without Losing Damage?"
          description="Unlock Oread, build around curse butterflies and Power of Prayer lasers, choose Speed or Sigil, then bring enough payoff and defense for bosses."
          gameTitle="Realm of Ink"
          gameHref="/realm-of-ink"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OreadGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
