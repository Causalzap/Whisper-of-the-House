import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ParamakerGuideContent from "@/data/paralives/paramaker-stats-vibes-personality.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/paralives/paramaker-stats-vibes-personality`;

const imageUrls = [
  `${siteUrl}/images/paralives/paralives-stat-upgrade-screen.webp`,
  `${siteUrl}/images/paralives/paralives-talent-upgrade-screen.webp`,
  `${siteUrl}/images/paralives/paralives-personality-points-wants.webp`,
];

const toc = [
  { id: "paramaker-overview", label: "Paramaker" },
  { id: "stat-points", label: "Stats" },
  { id: "zero-stat-warning", label: "Zero stats" },
  { id: "vibes", label: "Vibes" },
  { id: "talents", label: "Talents" },
  { id: "talent-locks", label: "Talent changes" },
  { id: "social-perks", label: "Social Perks" },
  { id: "personality", label: "Personality" },
  { id: "best-starting-builds", label: "Starting builds" },
  { id: "career-points-note", label: "Career systems" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/paralives", label: "Paralives Skills and Careers Guide" },
  {
    href: "/paralives/best-early-game-skills-talents-careers",
    label: "Best Early Game Skills, Talents and Careers",
  },
  {
    href: "/paralives/level-skills-faster",
    label: "How to Level Skills Faster",
  },
  {
    href: "/paralives/job-performance-not-improving",
    label: "Job Performance Not Improving",
  },
];

export const metadata: Metadata = {
  title: "Paralives Paramaker Guide: Stats, Vibes & Personality",
  description:
    "Choose the best Paralives stats, vibes, talents, social perks and personality options for painting, tech, romance, social play and first saves.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paralives Paramaker Guide: Stats, Vibes and Personality",
    description:
      "A practical Paralives Paramaker guide covering stats, zero-stat mistakes, vibes, romance compatibility, talents, social perks, personality levels and starting builds.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Paralives stat upgrade screen showing Physique Mind Creativity and Charisma.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paralives Paramaker Guide: Stats, Vibes and Personality",
    description:
      "Build a better Para with the right stats, vibe, talent, social perk and personality route.",
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
          name: "Paralives Guide",
          item: `${siteUrl}/paralives`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Paramaker Stats, Vibes and Personality",
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
        "Paralives Paramaker Guide: Stats, Vibes, Talents, Social Perks, Personality Levels and Starting Builds",
      description:
        "A player-focused Paralives Paramaker guide explaining how to choose stats, vibes, talents, social perks and personality options before starting a save. It covers Physique, Mind, Creativity and Charisma, why leaving an important stat empty can hurt a build, how Vibes shape work, moods, romance and daily life, why Serious and Jester can clash in romance, which Talents support painting, programming, cooking, music, fitness or flexible play, how Social Perks affect being alone, cooperation, flirting, friendship and caring for sad Paras, how Personality Levels and wants continue after creation, and which Paramaker setups fit common routes such as Money Painter, Tech Career, Low-Maintenance Para and Social Townie.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      about: [
        { "@type": "VideoGame", name: "Paralives" },
        { "@type": "Thing", name: "Paramaker" },
        { "@type": "Thing", name: "Paralives Stats" },
        { "@type": "Thing", name: "Paralives Vibes" },
        { "@type": "Thing", name: "Paralives Talents" },
        { "@type": "Thing", name: "Social Perks" },
        { "@type": "Thing", name: "Personality Levels" },
        { "@type": "Thing", name: "Vibe Compatibility" },
        { "@type": "Thing", name: "Serious Vibe" },
        { "@type": "Thing", name: "Jester Vibe" },
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
          name: "How many Stat Points do you get in Paralives Paramaker?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You start with a limited pool of Stat Points to divide between Physique, Mind, Creativity and Charisma. Plan them around your route instead of spreading them randomly.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if I leave a stat at zero in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Leaving a stat empty can create a permanent weakness or negative effect. For a normal first save, keep every stat usable unless you are intentionally making a challenge Para.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Talent in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best Talent depends on your route. Art is best for painting, Technology is best for programming, Food is best for cooking, Music is best for instruments, Fitness is best for active play, and Jack-of-All-Trades is best for flexibility.",
          },
        },
        {
          "@type": "Question",
          name: "Can I change my Talent after creating a Para?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not assume you can freely change the starting Talent after creation. Treat it as an important build choice. If you are not sure what to pick, Jack-of-All-Trades is the safer flexible option.",
          },
        },
        {
          "@type": "Question",
          name: "Does Vibe compatibility affect romance in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, some Vibe pairings can make romance harder. A key example is Serious plus Jester, which can create a romance compatibility penalty. The relationship is still possible, but progress can be slower or romance attempts may fail more often.",
          },
        },
        {
          "@type": "Question",
          name: "Which Social Perk should I pick in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pick the Social Perk that matches how your Para spends time with people. Good at Being Alone fits solo workers, cooperation perks fit group play, flirting perks fit romance saves, friendship perks help social townies, and care-focused perks help supportive family or relationship play.",
          },
        },
        {
          "@type": "Question",
          name: "What does Personality Level unlock in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Personality Level can unlock new traits, bonuses or personality-related choices. The exact options can depend on your Para's path, so complete wants that reinforce the route you want.",
          },
        },
        {
          "@type": "Question",
          name: "Is Paramaker the same as Career Upgrade Points?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Paramaker choices shape your Para before work starts. Career Upgrade Points come later through jobs and are used for rank, perks, vacation days and work stability.",
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
          title="Paralives Paramaker Guide"
          description="Choose stats, vibes, talents, social perks and personality options that actually fit the Para you want to build."
          gameTitle="Paralives"
          gameHref="/paralives"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ParamakerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}