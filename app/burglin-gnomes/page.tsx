import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BurglinGnomesGuideContent from "@/data/burglin-gnomes/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/burglin-gnomes`;

const imageUrls = [
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-first-task-list.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-high-gnome-verdict.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-old-man-grab.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-stockpile-materials.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-tornado-extraction.webp`,
];

const toc = [
  { id: "burglin-gnomes-guide-hub", label: "Guide hub" },
  { id: "start-with-your-problem", label: "Pick a guide" },
  { id: "beginner-route", label: "Beginner route" },
  { id: "task-priority", label: "Task priority" },
  { id: "survival-enemies", label: "Survival" },
  { id: "co-op-roles", label: "Co-op roles" },
  { id: "materials-upgrades", label: "Materials" },
  { id: "best-reading-order", label: "Reading order" },
  { id: "tornado-extraction", label: "Tornado escape" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
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
    href: "/burglin-gnomes/co-op-guide",
    label: "Burglin' Gnomes Co-op Guide",
  },
  {
    href: "/burglin-gnomes/materials-upgrades-guide",
    label: "Burglin' Gnomes Materials and Upgrades Guide",
  },
];

export const metadata: Metadata = {
  title: "Burglin' Gnomes Guide: Tasks, Co-op, Materials & Tips",
  description:
    "Use this Burglin' Gnomes guide hub to find beginner tips, task tiers, old man survival, co-op roles, Plasto, Clonk, upgrades, and tornado escape.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Burglin' Gnomes Guide Hub: Beginner Tips, Tasks, Survival, Co-op, Materials and Upgrades",
    description:
      "Choose the right Burglin' Gnomes guide for your problem: beginner route, Gnome Report crown target, LOW/MED/HIGH task tiers, old man survival, gun danger, evil gnomes, Roomba, co-op roles, Plasto, Clonk, crafting costs, upgrades, and tornado extraction.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Burglin' Gnomes task list showing early objectives before a run.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burglin' Gnomes Guide Hub",
    description:
      "Find the right guide for tasks, survival, co-op, Plasto, Clonk, upgrades, and tornado escape.",
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
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      url: pageUrl,
      name: "Burglin' Gnomes Guide Hub",
      headline:
        "Burglin' Gnomes Guide Hub: Beginner Tips, Task Priority, Survival, Co-op, Materials and Upgrades",
      description:
        "A player-focused Burglin' Gnomes guide hub that routes players to the right focused guide based on their current problem. It covers where to start as a beginner, how to use the Gnome Report crown target, how to choose task priority with LOW, MED and HIGH risk tiers, how to survive the old man, old man with gun, evil gnomes, Roomba, bees, floor hazards and bad rescues, how to play solo or with up to 6-player co-op roles, and how to find Plasto, Clonk, Stockpile materials, crafting costs and upgrade priorities.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-11",
      dateModified: "2026-06-11",
      about: [
        { "@type": "VideoGame", name: "Burglin' Gnomes" },
        { "@type": "Thing", name: "Burglin' Gnomes guide" },
        { "@type": "Thing", name: "Burglin' Gnomes beginner guide" },
        { "@type": "Thing", name: "Burglin' Gnomes tasks guide" },
        { "@type": "Thing", name: "Burglin' Gnomes survival guide" },
        { "@type": "Thing", name: "Burglin' Gnomes co-op guide" },
        { "@type": "Thing", name: "Burglin' Gnomes materials guide" },
        { "@type": "Thing", name: "Burglin' Gnomes upgrades guide" },
        { "@type": "Thing", name: "Burglin' Gnomes Gnome Report" },
        { "@type": "Thing", name: "Burglin' Gnomes crown target" },
        { "@type": "Thing", name: "Burglin' Gnomes old man" },
        { "@type": "Thing", name: "Burglin' Gnomes evil gnomes" },
        { "@type": "Thing", name: "Burglin' Gnomes Roomba" },
        { "@type": "Thing", name: "Burglin' Gnomes Plasto" },
        { "@type": "Thing", name: "Burglin' Gnomes Clonk" },
        { "@type": "Thing", name: "Burglin' Gnomes tornado extraction" },
      ],
      hasPart: [
        {
          "@type": "Article",
          name: "Burglin' Gnomes Beginner Guide",
          url: `${siteUrl}/burglin-gnomes/beginner-guide`,
        },
        {
          "@type": "Article",
          name: "Burglin' Gnomes Tasks Guide",
          url: `${siteUrl}/burglin-gnomes/tasks-guide`,
        },
        {
          "@type": "Article",
          name: "Burglin' Gnomes Survival and Enemies Guide",
          url: `${siteUrl}/burglin-gnomes/survival-enemies-guide`,
        },
        {
          "@type": "Article",
          name: "Burglin' Gnomes Co-op Guide",
          url: `${siteUrl}/burglin-gnomes/co-op-guide`,
        },
        {
          "@type": "Article",
          name: "Burglin' Gnomes Materials and Upgrades Guide",
          url: `${siteUrl}/burglin-gnomes/materials-upgrades-guide`,
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guide-list`,
      name: "Burglin' Gnomes guide cluster",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Burglin' Gnomes Beginner Guide",
          url: `${siteUrl}/burglin-gnomes/beginner-guide`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Burglin' Gnomes Tasks Guide",
          url: `${siteUrl}/burglin-gnomes/tasks-guide`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Burglin' Gnomes Survival and Enemies Guide",
          url: `${siteUrl}/burglin-gnomes/survival-enemies-guide`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Burglin' Gnomes Co-op Guide",
          url: `${siteUrl}/burglin-gnomes/co-op-guide`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Burglin' Gnomes Materials and Upgrades Guide",
          url: `${siteUrl}/burglin-gnomes/materials-upgrades-guide`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What guide should I read first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Beginner Guide first if you are new. It covers controls, the Gnome Report crown target, safe entry, rescue basics, upgrades, and tornado extraction.",
          },
        },
        {
          "@type": "Question",
          name: "How many tasks do I need to complete in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Gnome Report crown target as your real pass target. Beginners can often plan around roughly three completed tasks, but do not rely on a fixed number if your current run shows a different target.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if the task list looks too hard?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Tasks Guide. Sort tasks into LOW, MED and HIGH risk, finish safe checkmarks first, and avoid stacking multiple high-risk objectives so you reach the crown target with less risk.",
          },
        },
        {
          "@type": "Question",
          name: "How do I survive the old man in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Drop heavy items, call your room, break line of sight, and avoid crowding the same rescue room. If the old man gets a gun or the run triggers evil gnome pressure, use the Survival and Enemies Guide.",
          },
        },
        {
          "@type": "Question",
          name: "Can I play Burglin' Gnomes solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Solo is useful for learning maps, movement, room names, object handling, and basic danger patterns. Co-op is stronger for rescue, hauling, callouts, and loot staging.",
          },
        },
        {
          "@type": "Question",
          name: "How many players can play Burglin' Gnomes co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A full group can scale up to a 6-player setup. The Co-op Guide covers solo, 2-player, 3-player, 4-player, 5-player, and 6-player role setups.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Plasto in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with plastic-heavy rooms such as bathroom, kids' room, and bedroom. Look for plastic-looking objects and move or throw them outside until the task updates. The full route is in the Materials and Upgrades Guide.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Clonk in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with metal-heavy kitchen routes. Look for cans, toaster, kettle, cookware, tools, and other metal objects, then move them outside. Use Clonk, not Clunk, when writing notes.",
          },
        },
        {
          "@type": "Question",
          name: "What upgrade should I buy first in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy based on your failure point. Movement comes first if you die before extraction. Stealth helps if the house wakes up too early. Rescue tools help if teammates keep getting trapped. Carry capacity becomes stronger after your team already extracts safely.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use this page as a wiki?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. This hub is a route finder. Use it to choose the right focused guide, then read the spoke page that matches your current problem.",
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
          title="Find the Right Burglin' Gnomes Guide for Your Problem"
          description="Start here for beginner routes, task priority, survival, co-op roles, Plasto, Clonk, upgrades, and tornado extraction."
          gameTitle="Burglin' Gnomes"
          gameHref="/burglin-gnomes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BurglinGnomesGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}

