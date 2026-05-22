import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DiscoElysiumGuideContent from "@/data/zero-parades/disco-elysium-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/zero-parades/disco-elysium-guide`;

const imageUrls = [
  `${siteUrl}/images/zero-parades/zero-parades-disco-skill-comparison.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-journal-whats-wrong-pseudopod.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-stress-meters-hud.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-exertion-third-die.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-conditioning-thoughts-menu.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-gear-skill-bonus.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-six-districts-map.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-journal-unassigned-assignment.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-dramatic-encounter-bazaar.webp`,
];

const toc = [
  { id: "zero-parades-vs-disco-elysium-overview", label: "Overview" },
  { id: "do-you-need-to-play-disco-elysium-first", label: "Play Disco First?" },
  { id: "is-zero-parades-connected-to-disco-elysium-story", label: "Story Connection" },
  { id: "biggest-differences", label: "Biggest Differences" },
  { id: "you-start-more-alone", label: "Pseudopod vs Kim" },
  { id: "fewer-skills", label: "Skills" },
  { id: "stress-replaces-health-and-morale", label: "Stress Meters" },
  { id: "exertion-changes-rolls", label: "Exertion" },
  { id: "conditioning-vs-thought-cabinet", label: "Conditioning" },
  { id: "gear-matters-more-than-you-might-expect", label: "Gear" },
  { id: "exploration-is-broader", label: "Exploration" },
  { id: "journal-and-objectives", label: "Journal" },
  { id: "dramatic-encounters", label: "Dramatic Encounters" },
  { id: "failure-works-differently", label: "Failure" },
  { id: "which-is-better", label: "Which Is Better?" },
  { id: "best-starting-advice", label: "Starting Advice" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/zero-parades", label: "ZERO PARADES Guide" },
  { href: "/zero-parades/best-build", label: "ZERO PARADES Best Build Guide" },
  { href: "/zero-parades/stress-exertion", label: "ZERO PARADES Stress and Exertion Guide" },
  { href: "/zero-parades/conditioning", label: "ZERO PARADES Conditioning Guide" },
  { href: "/zero-parades/early-game", label: "ZERO PARADES Early Game Walkthrough" },
];

export const metadata: Metadata = {
    title: "ZERO PARADES vs Disco Elysium: Story, Skills & Changes",
    description:
      "See if ZERO PARADES is connected to Disco Elysium, what changes in skills, stress, Exertion, Conditioning, gear, companions, and which is better.",
    alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "ZERO PARADES vs Disco Elysium: Player Guide",
    description:
      "Learn whether ZERO PARADES connects to Disco Elysium, what changes in skills, stress, Exertion, Conditioning, gear, exploration, and failure.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "ZERO PARADES skill comparison showing fewer concentrated skills than Disco Elysium.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZERO PARADES vs Disco Elysium: Player Guide",
    description:
      "A player-focused guide for Disco Elysium fans starting ZERO PARADES: story connection, skills, stress, Exertion, Conditioning, gear, and failure.",
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
          name: "ZERO PARADES vs Disco Elysium",
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
        "ZERO PARADES vs Disco Elysium Player Guide: Story Connection, Skills, Stress, Exertion, Conditioning, Gear and Failure",
      description:
        "A player-focused ZERO PARADES: For Dead Spies guide for Disco Elysium fans, explaining whether ZERO PARADES is connected to Disco Elysium's story, whether players need to play Disco Elysium first, how Cascade differs from Harry, why the opening feels more solitary without a Kim-style partner, how the 15-skill system works, how Fatigue, Anxiety, Delirium, Exertion, Conditioning, gear, exploration, Dramatic Encounters, and failure handling differ from Disco Elysium.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-22",
      dateModified: "2026-05-22",
      about: [
        {
          "@type": "VideoGame",
          name: "ZERO PARADES: For Dead Spies",
        },
        {
          "@type": "VideoGame",
          name: "Disco Elysium",
        },
        { "@type": "Thing", name: "ZERO PARADES vs Disco Elysium" },
        { "@type": "Thing", name: "ZERO PARADES connected to Disco Elysium" },
        { "@type": "Thing", name: "ZERO PARADES guide for Disco Elysium players" },
        { "@type": "Thing", name: "ZERO PARADES skills" },
        { "@type": "Thing", name: "Fatigue Anxiety Delirium" },
        { "@type": "Thing", name: "Exertion" },
        { "@type": "Thing", name: "Conditioning" },
        { "@type": "Thing", name: "Thought Cabinet" },
        { "@type": "Thing", name: "Dramatic Encounters" },
        { "@type": "Thing", name: "Pseudopod" },
        { "@type": "Thing", name: "Kim Kitsuragi" },
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
          name: "Is ZERO PARADES connected to Disco Elysium?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. ZERO PARADES is not a direct sequel and does not continue Disco Elysium's story. It has its own protagonist, world, factions, and systems, even though Disco Elysium players will notice familiar design DNA.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to play Disco Elysium first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. You can start with ZERO PARADES. Disco Elysium helps you understand the style, but the story and systems are separate.",
          },
        },
        {
          "@type": "Question",
          name: "Is ZERO PARADES like Disco Elysium?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, in broad RPG structure: lots of reading, dialogue, skill checks, internal commentary, politics, and strange humor. But it plays differently because of stress meters, Exertion, Conditioning, broader exploration, and Dramatic Encounters.",
          },
        },
        {
          "@type": "Question",
          name: "ZERO PARADES vs Disco Elysium: which is better?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Disco Elysium is probably the better fit if you want a tighter detective story, Kim-style companion structure, and a stronger internal skill chorus. ZERO PARADES is better if you want a separate spy RPG with pressure meters, route movement, gear checks, Conditioning, and more structured high-tension sequences.",
          },
        },
        {
          "@type": "Question",
          name: "How many skills does ZERO PARADES have?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "ZERO PARADES has 15 skills grouped into three broad Faculties. Disco Elysium had 24 skills across four categories.",
          },
        },
        {
          "@type": "Question",
          name: "What replaces Health and Morale in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "ZERO PARADES uses Fatigue, Anxiety, and Delirium. These meters track different kinds of pressure and can punish your skills if they get too high.",
          },
        },
        {
          "@type": "Question",
          name: "Is Conditioning the same as the Thought Cabinet?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Conditioning feels related, but it works inside ZERO PARADES' own build and stress systems. Thoughts can raise skill potential, add effects, and include drawbacks or violation rules.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build Cascade like Harry?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Build Cascade for spy work: reading people, understanding clues, managing pressure, and staying flexible during route changes.",
          },
        },
        {
          "@type": "Question",
          name: "Should Disco Elysium fans play ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you want another dense narrative RPG and are open to a different rhythm. Do not expect the exact same companion dynamic, writing feel, or failure system.",
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
          title="Playing ZERO PARADES After Disco Elysium? Read This First"
          description="ZERO PARADES feels familiar, but your old Disco Elysium habits will not always work. Learn what changes before you build Cascade like Harry."
          gameTitle="ZERO PARADES: For Dead Spies"
          gameHref="/zero-parades"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DiscoElysiumGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}