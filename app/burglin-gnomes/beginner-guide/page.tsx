import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/burglin-gnomes/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/burglin-gnomes/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-first-task-list.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-window-entry.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-fridge-rescue.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-cpr-revive.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-tornado-extraction.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-high-gnome-verdict.webp`,
];

const toc = [
  { id: "burglin-gnomes-beginner-guide", label: "Beginner guide" },
  { id: "minimum-tasks", label: "Crown target" },
  { id: "controls", label: "Controls" },
  { id: "best-starting-map-difficulty", label: "Map and difficulty" },
  { id: "first-heist-checklist", label: "First heist" },
  { id: "copy-paste-checklist", label: "Squad checklist" },
  { id: "entry-route", label: "Window entry" },
  { id: "task-priority", label: "Task priority" },
  { id: "noise-system", label: "Noise" },
  { id: "old-man-rescue", label: "Rescue and CPR" },
  { id: "danger-table", label: "Common dangers" },
  { id: "weapon-safety", label: "Weapon safety" },
  { id: "co-op-roles", label: "Co-op roles" },
  { id: "upgrade-priority", label: "Upgrades" },
  { id: "tornado-extraction", label: "Tornado escape" },
  { id: "gnome-report", label: "Gnome Report" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/burglin-gnomes",
    label: "Burglin' Gnomes Guide Hub",
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
    href: "/burglin-gnomes/co-op-guide",
    label: "Burglin' Gnomes Co-op Guide",
  },
  {
    href: "/burglin-gnomes/materials-upgrades-guide",
    label: "Burglin' Gnomes Materials and Upgrades Guide",
  },
];

export const metadata: Metadata = {
  title: "Burglin' Gnomes Beginner Guide: Controls, Tasks & Tips",
  description:
    "Learn Burglin' Gnomes controls, task targets, safe window entry, noise, rescue, upgrades, and when to leave before your first runs fall apart.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Burglin' Gnomes Beginner Guide: Controls, High-Gnome Tasks, Rescue and First Clear Tips",
    description:
      "Learn how to start your first Burglin' Gnomes runs, read the task list, use the Gnome Report crown target, enter through windows, manage noise, rescue teammates, pick early upgrades, and escape when the tornado appears.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Burglin' Gnomes task list with objectives like stealing from the kids room, flushing an item, breaking items, tasing a rat, and stealing a pot.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burglin' Gnomes Beginner Guide",
    description:
      "Learn controls, task targets, safe entry, rescue, upgrades, and tornado escape timing for your first clean runs.",
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
          name: "Burglin' Gnomes Beginner Guide",
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
        "Burglin' Gnomes Beginner Guide: Controls, High-Gnome Tasks, Safe Entry, Rescue, Upgrades and First Clear Tips",
      description:
        "A player-focused Burglin' Gnomes beginner guide explaining how to start your first runs, use the Gnome Report crown target instead of guessing task requirements, learn basic controls, choose an easier starting setup, enter through windows, prioritize safe High-Gnome tasks, manage noise, rescue tied-up or downed teammates, avoid old man snowballs, use co-op roles, pick early upgrades, leave when the tornado warning appears, and review the Gnome Report after each run.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-11",
      dateModified: "2026-06-11",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Burglin' Gnomes" },
        { "@type": "Thing", name: "Burglin' Gnomes beginner guide" },
        { "@type": "Thing", name: "Burglin' Gnomes controls" },
        { "@type": "Thing", name: "Burglin' Gnomes tasks" },
        { "@type": "Thing", name: "Burglin' Gnomes High-Gnome tasks" },
        { "@type": "Thing", name: "Burglin' Gnomes Gnome Report" },
        { "@type": "Thing", name: "Burglin' Gnomes crown target" },
        { "@type": "Thing", name: "Burglin' Gnomes first clear" },
        { "@type": "Thing", name: "Burglin' Gnomes window entry" },
        { "@type": "Thing", name: "Burglin' Gnomes noise" },
        { "@type": "Thing", name: "Burglin' Gnomes old man" },
        { "@type": "Thing", name: "Burglin' Gnomes fridge rescue" },
        { "@type": "Thing", name: "Burglin' Gnomes CPR" },
        { "@type": "Thing", name: "Burglin' Gnomes co-op roles" },
        { "@type": "Thing", name: "Burglin' Gnomes upgrades" },
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
          name: "How many tasks do I need to complete in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Steam says you must complete enough High-Gnome tasks, but it does not give a fixed number. Use the Gnome Report crown marker as your real target. In the example used here, that target is around 3 completed tasks.",
          },
        },
        {
          "@type": "Question",
          name: "Can I extract before reaching the crown target?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can try to leave, but you should not plan around it. If the Gnome Report target is not met, the run may fail even if you reached extraction.",
          },
        },
        {
          "@type": "Question",
          name: "Should I keep playing after reaching the crown target?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if the next task is close, safe, and does not risk a wipe. After the crown target is reached, extraction becomes more important than greed.",
          },
        },
        {
          "@type": "Question",
          name: "What if my Gnome Report shows a different target?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow your current in-game UI. The beginner route on this page plans around the crown target shown in the example, but updates, maps, or task rolls can change how a run is judged.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best first map or difficulty in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the smallest or easiest setup available, such as Cottage on Easy if your build offers it. Learn safe routes before moving into larger maps.",
          },
        },
        {
          "@type": "Question",
          name: "What Burglin' Gnomes controls should I remember first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Remember Tab for the task list, E for interact or untie, and Q to drop held items. These three controls fix many beginner mistakes.",
          },
        },
        {
          "@type": "Question",
          name: "Is sprinting bad in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sprinting is useful for escape, but bad for scouting. It burns stamina and creates more noise, so use it when you actually need speed.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know which room a task item belongs to?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the task wording first. If it says kids room, dining room, kitchen, bathroom, or hallway, confirm the room before carrying objects outside. If the task does not update, stop testing random items and finish a safer objective.",
          },
        },
        {
          "@type": "Question",
          name: "Can I play Burglin' Gnomes solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can attempt runs solo, but the game is much easier with friends because rescue, lookout, carrying, and distraction can be split between players.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next after the beginner guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Tasks Guide for objective routes, the Survival Guide for enemy handling, and the Co-op Guide for team roles.",
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
          title="Survive Your First Heist Without Getting Fired"
          description="Learn the controls, task target, safe window entry, rescue rules, upgrades, and when to stop being greedy."
          gameTitle="Burglin' Gnomes"
          gameHref="/burglin-gnomes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
