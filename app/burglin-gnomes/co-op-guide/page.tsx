import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CoOpGuideContent from "@/data/burglin-gnomes/co-op-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/burglin-gnomes/co-op-guide`;

const imageUrls = [
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-first-task-list.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-steal-frying-pan-task.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-fridge-rescue.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-cpr-revive.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-microwave-rescue.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-coop-movement-boost.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-tornado-extraction.webp`,
];

const toc = [
  { id: "burglin-gnomes-co-op-guide", label: "Co-op guide" },
  { id: "solo-vs-coop", label: "Solo vs co-op" },
  { id: "best-co-op-roles", label: "Co-op roles" },
  { id: "team-size-setups", label: "Team sizes" },
  { id: "copy-paste-team-plan", label: "Team template" },
  { id: "co-op-callouts", label: "Callouts" },
  { id: "hauler-route", label: "Hauler route" },
  { id: "loot-staging", label: "Loot staging" },
  { id: "rescue-system", label: "Rescue plan" },
  { id: "cpr-chain-rescue", label: "CPR rescue" },
  { id: "microwave-rescue", label: "Trapped rescue" },
  { id: "movement-boosts", label: "Movement tricks" },
  { id: "noise-budget", label: "Distractions" },
  { id: "tornado-extraction", label: "Tornado escape" },
  { id: "full-co-op-route", label: "Co-op route" },
  { id: "co-op-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/burglin-gnomes",
    label: "Burglin' Gnomes Guide Hub",
  },
  {
    href: "/burglin-gnomes/beginner-guide",
    label: "Burglin' Gnomes Beginner Guide",
  },
  {
    href: "/burglin-gnomes/tasks-guide",
    label: "Burglin' Gnomes Tasks Guide",
  },
  {
    href: "/burglin-gnomes/survival-enemies-guide",
    label: "Burglin' Gnomes Survival and Enemies Guide",
  },
  {
    href: "/burglin-gnomes/materials-upgrades-guide",
    label: "Burglin' Gnomes Materials and Upgrades Guide",
  },
];

export const metadata: Metadata = {
  title: "Burglin' Gnomes Co-op Guide: Roles, Rescue & Team Tips",
  description:
  "Plan Burglin' Gnomes co-op roles for solo to 6 players, use callouts, stage loot, rescue friends, avoid wipes, and escape when the tornado appears.",  alternates: {
  canonical: pageUrl,
  },
  openGraph: {
    title:
      "Burglin' Gnomes Co-op Guide: Best Roles, Team Sizes, Rescue, Callouts and Loot Staging",
    description:
      "Learn how to play Burglin' Gnomes solo or with friends, assign scout, hauler, distractor, and anchor roles, plan 2-player through 6-player teams, use short voice callouts, stage loot, rescue tied or downed teammates, and extract when the tornado appears.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Burglin' Gnomes task list used by a co-op team before choosing roles and objectives.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burglin' Gnomes Co-op Guide",
    description:
      "Plan team roles, rescue friends, stage loot, use callouts, and escape cleaner with 2-6 players.",
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
          name: "Burglin' Gnomes Guide",
          item: `${siteUrl}/burglin-gnomes`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Burglin' Gnomes Co-op Guide",
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
        "Burglin' Gnomes Co-op Guide: Best Roles, Team Sizes, Voice Callouts, Rescue Plans, Loot Staging and Extraction",
      description:
        "A player-focused Burglin' Gnomes co-op guide explaining when solo practice is useful, how to split roles across 2-player, 3-player, 4-player, 5-player and 6-player teams, how scout, hauler, distractor and anchor roles work, what each role should say during voice chat, how to use short callouts, how to stage loot near safe exits, how to rescue tied-up, downed or trapped teammates, how to use CPR and chain rescue, how to handle co-op movement tricks, how to separate good distractions from bad distractions, and how to call tornado extraction before a good run becomes a wipe.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-11",
      dateModified: "2026-06-11",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Burglin' Gnomes" },
        { "@type": "Thing", name: "Burglin' Gnomes co-op guide" },
        { "@type": "Thing", name: "Burglin' Gnomes multiplayer" },
        { "@type": "Thing", name: "Burglin' Gnomes solo" },
        { "@type": "Thing", name: "Burglin' Gnomes 2 players" },
        { "@type": "Thing", name: "Burglin' Gnomes 6 players" },
        { "@type": "Thing", name: "Burglin' Gnomes roles" },
        { "@type": "Thing", name: "Burglin' Gnomes scout role" },
        { "@type": "Thing", name: "Burglin' Gnomes hauler role" },
        { "@type": "Thing", name: "Burglin' Gnomes anchor role" },
        { "@type": "Thing", name: "Burglin' Gnomes rescue" },
        { "@type": "Thing", name: "Burglin' Gnomes CPR" },
        { "@type": "Thing", name: "Burglin' Gnomes loot staging" },
        { "@type": "Thing", name: "Burglin' Gnomes voice callouts" },
        { "@type": "Thing", name: "Burglin' Gnomes tornado extraction" },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How many players can play Burglin' Gnomes together?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Steam page says you can enter houses with up to five friends, so a full online co-op group can have six players total.",
          },
        },
        {
          "@type": "Question",
          name: "Is Burglin' Gnomes worth playing solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Solo is useful for learning maps, object handling, room names, task wording, and danger patterns. Co-op is better for rescue, carrying, lookout duty, and chaotic task recovery.",
          },
        },
        {
          "@type": "Question",
          name: "Can we change roles mid-run?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Roles are jobs, not permanent classes. If the scout gets tied up, the anchor may become the rescuer, and a hauler may need to call the route.",
          },
        },
        {
          "@type": "Question",
          name: "What should a 5-player or 6-player team do differently?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Add a second hauler first. In a 6-player group, add a second scout only if voice chat stays clear. Do not add more distractors unless the team already has clean callouts.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if the whole team wipes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If everyone goes down, the run is usually unrecoverable. That is why the anchor role matters: one safer player can stop a bad capture from becoming a full-team wipe.",
          },
        },
        {
          "@type": "Question",
          name: "Who should be the anchor in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Give anchor to the most patient player, not the loudest player. The anchor watches the exit, staged loot, and rescue route instead of chasing every funny object.",
          },
        },
        {
          "@type": "Question",
          name: "Should beginners play distractor?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if they can escape after pulling pressure. A bad distractor brings the old man into the task room and makes the run harder.",
          },
        },
        {
          "@type": "Question",
          name: "How should we handle voice chat with six players?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use short callouts. Say the room, danger, and action, such as old man kitchen, drop loot, or tornado, no new tasks. Long explanations during panic make rescue harder.",
          },
        },
        {
          "@type": "Question",
          name: "What should we do if two people are down at once?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Save the closest recoverable player first, then use that revived player to help chain the next rescue. Do not split into multiple unsafe rescues.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next after the co-op guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Tasks Guide if your team wastes time on the wrong objectives, or the Survival Guide if rescues keep turning into wipes.",
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
          title="Split Roles, Save Friends, and Stop Wiping Together"
          description="Set up scout, hauler, distractor, and anchor roles, use short callouts, stage loot, and rescue teammates before the run collapses."
          gameTitle="Burglin' Gnomes"
          gameHref="/burglin-gnomes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CoOpGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
