import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TasksGuideContent from "@/data/burglin-gnomes/tasks-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/burglin-gnomes/tasks-guide`;

const imageUrls = [
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-first-task-list.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-window-entry.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-break-tv-task.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-flush-item-task.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-steal-frying-pan-task.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-jonathan-hut-task.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-stockpile-materials.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-shed-key-firework-task.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-tornado-extraction.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-high-gnome-verdict.webp`,
];

const toc = [
  { id: "burglin-gnomes-tasks-guide", label: "Tasks guide" },
  { id: "task-tier-framework", label: "Task tiers" },
  { id: "copy-paste-task-template", label: "Task template" },
  { id: "execution-order", label: "Execution order" },
  { id: "common-tasks", label: "Common tasks" },
  { id: "task-combinations", label: "Task combos" },
  { id: "task-conflicts", label: "Task conflicts" },
  { id: "safe-entry-for-tasks", label: "Safe entry" },
  { id: "break-tv-task", label: "Break TV" },
  { id: "flush-item-task", label: "Flush item" },
  { id: "carry-objectives", label: "Carry tasks" },
  { id: "jonathan-task", label: "Jonathan" },
  { id: "enemy-tasks", label: "Enemy tasks" },
  { id: "material-tasks", label: "Material tasks" },
  { id: "locked-area-shed-key-firework", label: "Shed key" },
  { id: "task-route-templates", label: "Route templates" },
  { id: "tornado-extraction", label: "Tornado cutoff" },
  { id: "gnome-report", label: "Gnome Report" },
  { id: "task-mistakes", label: "Mistakes" },
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
  title: "Burglin' Gnomes Tasks Guide: Priority Tiers & Routes",
  description:
    "Plan Burglin' Gnomes tasks by LOW/MED/HIGH tiers, route Break TV, flush, Jonathan, materials, shed key, avoid bad combos, and escape before tornado wipes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Burglin' Gnomes Tasks Guide: LOW/MED/HIGH Priority, Routes, Materials and Gnome Report Tips",
    description:
      "Sort Burglin' Gnomes tasks into LOW, MED and HIGH tiers, use a copy-paste task template, route Break TV, flush item, frying pan, Jonathan, rat, roach, material and shed key tasks, combine objectives safely, and use the Gnome Report to fix your next run.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Burglin' Gnomes task list with objectives like steal from the kids room, flush an item, tase a rat, break items, and steal a pot.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burglin' Gnomes Tasks Guide",
    description:
      "Use LOW/MED/HIGH task tiers, route specific objectives, avoid task conflicts, and stop bad task choices before they wipe the run.",
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
          name: "Burglin' Gnomes Tasks Guide",
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
        "Burglin' Gnomes Tasks Guide: LOW/MED/HIGH Priority Tiers, Objective Routes, Task Conflicts and Gnome Report Review",
      description:
        "A player-focused Burglin' Gnomes tasks guide explaining how to sort objectives into LOW, MED and HIGH tiers, choose the best task execution order, use a copy-paste task priority template, route common objectives like Break TV, flush item, frying pan, pot, metal can, Jonathan, rat and roach tasks, handle material tasks with Stockpile verification, complete shed key and firework routes, combine tasks that share the same room or exit, avoid task conflicts that ruin runs, stop new objectives when the tornado warning appears, and use the Gnome Report to improve the next route.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-11",
      dateModified: "2026-06-11",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Burglin' Gnomes" },
        { "@type": "Thing", name: "Burglin' Gnomes tasks guide" },
        { "@type": "Thing", name: "Burglin' Gnomes task priority" },
        { "@type": "Thing", name: "Burglin' Gnomes LOW MED HIGH tasks" },
        { "@type": "Thing", name: "Burglin' Gnomes Break TV task" },
        { "@type": "Thing", name: "Burglin' Gnomes flush item task" },
        { "@type": "Thing", name: "Burglin' Gnomes frying pan task" },
        { "@type": "Thing", name: "Burglin' Gnomes pot task" },
        { "@type": "Thing", name: "Burglin' Gnomes metal can task" },
        { "@type": "Thing", name: "Burglin' Gnomes Jonathan task" },
        { "@type": "Thing", name: "Burglin' Gnomes rat task" },
        { "@type": "Thing", name: "Burglin' Gnomes roach task" },
        { "@type": "Thing", name: "Burglin' Gnomes material tasks" },
        { "@type": "Thing", name: "Burglin' Gnomes Plasto" },
        { "@type": "Thing", name: "Burglin' Gnomes Clonk" },
        { "@type": "Thing", name: "Burglin' Gnomes Fraggles" },
        { "@type": "Thing", name: "Burglin' Gnomes Grabble" },
        { "@type": "Thing", name: "Burglin' Gnomes Scrapling" },
        { "@type": "Thing", name: "Burglin' Gnomes Marble" },
        { "@type": "Thing", name: "Burglin' Gnomes shed key" },
        { "@type": "Thing", name: "Burglin' Gnomes firework task" },
        { "@type": "Thing", name: "Burglin' Gnomes task routes" },
        { "@type": "Thing", name: "Burglin' Gnomes Gnome Report" },
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
          name: "What task should I do first in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with a LOW task: open a window, break a small item, flush a small item, or steal from a nearby confirmed room.",
          },
        },
        {
          "@type": "Question",
          name: "Are all Burglin' Gnomes tasks required?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The task list can contain more objectives than you safely complete in one run. Prioritize the safest checkmarks first and use the Gnome Report to judge the result.",
          },
        },
        {
          "@type": "Question",
          name: "What are LOW tasks in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "LOW tasks are fast objectives with low movement and low tool requirements, such as opening a window, breaking a small nearby object, flushing a small item, or stealing from a nearby room.",
          },
        },
        {
          "@type": "Question",
          name: "What are HIGH tasks in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "HIGH tasks require tools, combat, locked areas, outdoor routes, or uncertain material testing. Rat, roach, shed key, firework, and unclear material tasks usually belong here.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do rat or roach tasks early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if you already have the correct tool and safe space. If easier tasks are available, finish those first.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if a room-specific steal will count?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the task wording. If it says kids room, kitchen, dining room, bathroom, or hallway, confirm the room before carrying the object out.",
          },
        },
        {
          "@type": "Question",
          name: "How should I handle material tasks in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use confirmed Stockpile names, test likely object types only when they are near your route, and verify through task or Stockpile feedback. Do not overcommit to unconfirmed material routes.",
          },
        },
        {
          "@type": "Question",
          name: "When should I skip a task?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Skip or delay a task when it needs a missing tool, a locked route, an unsafe outdoor path, a far carry item, or long material testing while the tornado warning is close.",
          },
        },
        {
          "@type": "Question",
          name: "What if my task list has no obvious LOW tasks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Create a LOW route first. Open a window, secure an exit, confirm the closest room, and choose the task with the fewest tool, enemy, or outdoor requirements. If every task looks risky, start with the one closest to your entry route.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next after the Burglin' Gnomes Tasks Guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Co-op Guide if your team needs better role splitting, or the Survival Guide if enemies and rescues keep ruining your task routes.",
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
          title="Pick the Right Tasks Before the House Falls Apart"
          description="Sort tasks into LOW, MED, and HIGH risk, route specific objectives, avoid bad combinations, and use the Gnome Report to fix your next run."
          gameTitle="Burglin' Gnomes"
          gameHref="/burglin-gnomes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TasksGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
