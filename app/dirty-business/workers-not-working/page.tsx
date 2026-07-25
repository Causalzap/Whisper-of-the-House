import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DirtyBusinessWorkersGuideContent from "@/data/dirty-business/workers-not-working.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dirty-business`;
const pageUrl = `${hubUrl}/workers-not-working`;

const imageUrls = [
  `${siteUrl}/images/dirty-business/dirty-business-level-15-worker-assignments.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-botanist-daily-fee-balance.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-worker-task-assignment.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-worker-no-plastic-bags.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-worker-waiting-for-plant.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-worker-tutorial-seed-pack-stuck.webp`,
];

const toc = [
  {
    id: "worker-statuses",
    label: "Botanist statuses",
  },
  {
    id: "unlock-and-hire",
    label: "Unlock & hire",
  },
  {
    id: "assign-task",
    label: "Assign the task",
  },
  {
    id: "supplies-and-equipment",
    label: "Supplies & equipment",
  },
  {
    id: "follow-status-chain",
    label: "Follow the status chain",
  },
  {
    id: "idle-reasons",
    label: "Idle reasons",
  },
  {
    id: "no-available-equipment",
    label: "No available equipment",
  },
  {
    id: "do-not-take-over",
    label: "Do not take over",
  },
  {
    id: "product-rack",
    label: "Product Rack output",
  },
  {
    id: "tutorial-not-progressing",
    label: "Tutorial stuck",
  },
  {
    id: "when-worker-is-worth-it",
    label: "Is the Botanist worth it?",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/dirty-business",
    label: "Dirty Business Guide Hub",
  },
  {
    href: "/dirty-business/leveling-reputation-unlocks",
    label: "Leveling, Reputation & Worker Unlocks",
  },
  {
    href: "/dirty-business/orders-delivery-guide",
    label: "Customer Orders & Delivery Fixes",
  },
  {
    href: "/dirty-business/how-to-make-lsd",
    label: "How to Make the First LSD Sheet",
  },
  {
    href: "/dirty-business/achievements-guide",
    label: "All 75 Achievements",
  },
];

export const metadata: Metadata = {
  title: "Dirty Business Botanist Not Working: Fix Idle Workers",
  description:
    "Fix a Dirty Business Botanist that is idle or not working. Check tasks, Worker balance, Supply Racks, matching inputs, equipment, and Product Rack output.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Dirty Business Botanist Not Working Guide",
    description:
      "Fix the Level 15 Botanist by reading Current Status, matching the task and strain, supplying Seeds, Soil, Watering Cans and Plastic Packs, and clearing equipment or output blockers.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        alt: "Dirty Business Botanist status showing no Plastic Pack on the Worker Supply Rack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirty Business Botanist Not Working",
    description:
      "Fix idle Botanists, task mismatches, empty Supply Racks, unavailable Pots, missing Plastic Packs, full Product Racks, and a stuck Worker tutorial.",
    images: [imageUrls[3]],
  },
};

const faqEntities = [
  {
    question: "Does Pack Up only make the Botanist bag finished Weed?",
    answer:
      "No in the working Level 15 route. With the correct strain, supplies, and equipment available, the Botanist also planted and waited through the growing stage before packing the output.",
  },
  {
    question: "Is Waiting For The Plant To Grow an error?",
    answer:
      "No. It is a valid waiting state. Check that the crop has light, water, and visible growth progress, then leave the Botanist alone.",
  },
  {
    question: "Why is the task queue 5/5 while the Botanist is idle?",
    answer:
      "The queue only shows assigned tasks. It does not confirm matching Seeds, Soil, Watering Cans, Plastic Packs, usable equipment, or Product Rack space.",
  },
  {
    question: "Should I fire a Botanist who is not moving?",
    answer:
      "Check the existing Worker first. The first tutorial hire was free, while the repeat hire displayed 12,000 U-Notes.",
  },
  {
    question: "Can I manually help the Botanist?",
    answer:
      "Avoid taking over the exact Pot or station the Worker is trying to use. Handle restocking, Orders, Weapons, and output collection instead.",
  },
  {
    question: "How much money should I add to the first Botanist?",
    answer:
      "The first Botanical Intern charged 300 U-Notes per day. A balance of 1,500 covered five daily fees, but that is a practical test balance rather than a required minimum.",
  },
  {
    question:
      "Does this guide cover Gunsmiths, Chemists, and Counterfeiters?",
    answer:
      "No. This guide focuses on the Level 15 Botanist and first Worker setup. Other Worker roles have different inputs, equipment, and normal waiting states.",
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
          name: "Dirty Business Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Botanist Not Working",
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
        "Dirty Business Botanist Not Working: Tasks, Supply Racks, Idle Status, and Product Rack Fixes",
      description:
        "This Dirty Business Botanist guide covers the Level 15 first Worker setup and diagnoses why a Botanist is idle or not working. It explains Worker balance, task and strain matching, Seeds, Soil, Watering Cans, Plastic Packs, Pots, Lights, packing equipment, Product Rack space, Waiting For The Plant To Grow, No Plastic Pack On Supply Racks, unavailable equipment, player interference, and a Worker tutorial that does not progress.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-25",
      dateModified: "2026-07-25",
      about: [
        {
          "@type": "VideoGame",
          name: "Dirty Business",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Dirty Business Botanist not working",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Worker idle",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Worker Assignments",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Botanical Intern",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Worker Supply Rack",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Worker Product Rack",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Pack Up Mermaid Lagoon",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Waiting For The Plant To Grow",
        },
        {
          "@type": "Thing",
          name: "Dirty Business No Plastic Pack On Supply Racks",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Worker tutorial stuck",
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
          title="How I Fix a Botanist That Is Not Working in Dirty Business"
          description="Use the Worker's Current Status to fix task and strain mismatches, empty Supply Racks, unavailable equipment, normal growth waits, blocked Product Racks, and a Level 15 tutorial that will not progress."
          gameTitle="Dirty Business"
          gameHref="/dirty-business"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DirtyBusinessWorkersGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}