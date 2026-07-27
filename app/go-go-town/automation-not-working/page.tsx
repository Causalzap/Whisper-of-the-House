import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GoGoTownAutomationNotWorkingContent from "@/data/go-go-town/automation-not-working.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/go-go-town`;
const pageUrl = `${hubUrl}/automation-not-working`;

const metadataTitle =
  "Go-Go Town Automation Not Working: Workers & Couriers";

const metadataDescription =
  "Fix Go-Go Town automation when workers stand idle, Couriers stop delivering, storage locks block items, processors stall, or Garbirds overwhelm your town.";
const imageUrls = [
  `${siteUrl}/images/go-go-town/go-go-town-courier-road-access.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-worker-no-demand.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-townie-housing-before-job.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-storage-lock-four-items.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-industry-zone-entrance-connection.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-storage-no-space.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-garbage-maintenance-worker.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-garbird-infestation.webp`,
];

const toc = [
  {
    id: "quick-diagnosis",
    label: "Quick diagnosis",
  },
  {
    id: "system-not-unlocked",
    label: "System not unlocked",
  },
  {
    id: "townie-requirements",
    label: "Townie & housing checks",
  },
  {
    id: "workers-standing-still",
    label: "Workers standing still",
  },
  {
    id: "storage-locks",
    label: "Storage locks",
  },
  {
    id: "industry-zone-connection",
    label: "Industry Zone connection",
  },
  {
    id: "courier-unlock",
    label: "Courier unlock",
  },
  {
    id: "courier-not-working",
    label: "Courier not working",
  },
  {
    id: "storage-full",
    label: "No Space & processors",
  },
  {
    id: "garbage-automation",
    label: "Garbage & Maintenance",
  },
  {
    id: "garbirds",
    label: "Garbirds",
  },
  {
    id: "reset-checklist",
    label: "Reset checklist",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/go-go-town",
    label: "Go-Go Town 1.0 Guide Hub",
  },
  {
    href: "/go-go-town/progression-stuck",
    label: "Progression, EGO & Unlock Fixes",
  },
  {
    href: "/go-go-town/agent-peanut-safe-code",
    label: "Agent Peanut, Safe Code & Town Deed",
  },
];

const faqEntities = [
  {
    question: "Why is the Courier Building missing from my Build menu?",
    answer:
      "Treat this as a progression problem rather than a delivery-route problem. Check the current Town Goals, claim any completed bracket reward, and inspect both current and older EGO Tech tiers. Rebuy only helps after the original unlock has been purchased.",
  },
  {
    question: "Why can I invite a Townie but not assign them to a job?",
    answer:
      "Inviting a Townie does not automatically provide housing. Assign the Townie to a tent, house, or apartment with a free slot, then manage the workplace and assign the same Townie separately. Also check that they are not already working somewhere else.",
  },
  {
    question: "Can I operate a shop while I wait for another Townie?",
    answer:
      "Yes. Stand behind the counter and operate the shop manually. This keeps Coins and EGO moving while completing a Townie request or building housing, but the shop still needs the correct recipe and ingredients.",
  },
  {
    question: "Why does a worker stop after collecting resources successfully?",
    answer:
      "The current demand may already be satisfied. Workers collect enough to cover active demand unless a Storage lock creates a continuing stockpile request. Check whether the destination and locked Storage are already full before changing the worker.",
  },
  {
    question: "Why does No Space remain after I empty my backpack?",
    answer:
      "The blocked inventory may belong to Storage, a processor, shop stock, a vehicle, or the Courier destination. Reproduce the warning and identify which object is being used before clearing more items.",
  },
  {
    question: "Does a Garbird mean my Maintenance Worker is broken?",
    answer:
      "Not necessarily. Garbirds appear after garbage builds up and can scatter more trash from bins. Scare the Garbird away, then check whether bin capacity, Garbage Disposal, walking distance, or Maintenance staffing caused the original backlog.",
  },
  {
    question:
      "Why is my EGO full but an automation building is still unavailable?",
    answer:
      "A full EGO meter does not purchase an unlock automatically. Open EGO Tech, find the required node, and buy it. When the node is unavailable, return to Town Rankings and check the active goals and unclaimed rewards.",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Go-Go Town Automation Not Working: Workers, Couriers, Storage & Garbirds",
    description:
      "Follow a symptom-first troubleshooting route for missing unlocks, unassigned Townies, idle workers, Storage locks, Industry Zones, Courier deliveries, processors, garbage and Garbirds.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 592,
        height: 382,
        alt: "Go-Go Town Courier Building placed beside a road with its price and construction requirements visible",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Diagnose idle workers, missing Courier systems, blocked Storage, stopped processors, garbage and Garbirds in Go-Go Town 1.0.",
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
          name: "Go-Go Town Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Automation Not Working",
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
        "Go-Go Town Automation Not Working: Worker, Courier, Storage and Garbage Fixes",
      description:
        "A Go-Go Town 1.0 troubleshooting guide for automation systems that are missing, idle, blocked or too slow. It covers Town Rankings and EGO Tech prerequisites, Townie invitations and housing, worker demand, Storage locks, processor input and output, Mining and Forestry entrance connections, Courier road access and route capacity, No Space warnings, Garbage Disposal, Maintenance workers and Garbird infestations.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-27",
      dateModified: "2026-07-27",
      about: [
        {
          "@type": "VideoGame",
          name: "Go-Go Town!",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Go-Go Town automation not working",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town workers not working",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Townies and housing",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town worker demand",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Storage locks",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Industry Zones",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Courier Building",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Courier road access",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Garbage Disposal",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Maintenance Worker",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Garbirds",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town EGO Tech",
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
          title="Why My Go-Go Town Workers and Couriers Are Not Working"
          description="I use this symptom-first checklist when an unlock is missing, a Townie cannot take a job, workers stand still, Couriers deliver nothing, processors stop, or Garbirds take over the bins."
          gameTitle="Go-Go Town!"
          gameHref="/go-go-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GoGoTownAutomationNotWorkingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}