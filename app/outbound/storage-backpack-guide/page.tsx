import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import StorageBackpackGuideContent from "@/data/outbound/storage-backpack-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/outbound/storage-backpack-guide`;

export const metadata: Metadata = {
  title: "Outbound Storage Guide: Backpack, Van & Deposit Panel",
  description:
    "Master Outbound storage: Find the van deposit panel, unlock backpack upgrades, use the dog pouch, and avoid overencumbered movement with Gear Research!",
  alternates: {
    canonical: pageUrl,
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
          name: "Outbound Guide",
          item: `${siteUrl}/outbound`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Storage and Backpack Guide",
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
        "Outbound Storage Guide: Backpack, Van & Deposit Panel",
      description:
        "Master Outbound storage: Find the van deposit panel, unlock backpack upgrades, use the dog pouch, and avoid overencumbered movement with Gear Research!",
      image: [
        `${siteUrl}/images/outbound/outbound-storage-backpack-20-slots.webp`,
        `${siteUrl}/images/outbound/outbound-van-storage-power-unit.webp`,
        `${siteUrl}/images/outbound/outbound-blueprints-lock-download-vouchers.webp`,
        `${siteUrl}/images/outbound/outbound-storage-overencumbered-too-heavy.webp`,
        `${siteUrl}/images/outbound/outbound-storage-backpack-upgrade-40.webp`,
        `${siteUrl}/images/outbound/outbound-blueprints-gear-research-station.webp`,
        `${siteUrl}/images/outbound/outbound-storage-dog-pouch-items.webp`
      ],
      inLanguage: "en",
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      about: [
        {
          "@type": "VideoGame",
          name: "Outbound",
        },
        {
          "@type": "Thing",
          name: "Storage",
        },
        {
          "@type": "Thing",
          name: "Backpack Upgrade",
        },
        {
          "@type": "Thing",
          name: "Van Storage",
        },
        {
          "@type": "Thing",
          name: "Deposit Materials",
        },
        {
          "@type": "Thing",
          name: "Sewing Table",
        },
        {
          "@type": "Thing",
          name: "Gear Research Station",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is the storage panel in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The storage panel is near the driver-side rear wheel of the van. It blends into the vehicle, so walk close to the rear wheel area, look down, and scan until the Deposit materials prompt appears.",
          },
        },
        {
          "@type": "Question",
          name: "How do I deposit materials in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Interact with the deposit panel near the van’s driver-side rear wheel. This sends carried materials from your backpack into van storage.",
          },
        },
        {
          "@type": "Question",
          name: "How do I take items back out of van storage in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Look at the small screen above the storage panel until the Storage info prompt appears. Open it, scroll the storage list if needed, and move items back into your backpack.",
          },
        },
        {
          "@type": "Question",
          name: "Can workstations use materials from van storage in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Van workstations can pull materials directly from storage, so you do not need to carry every crafting material in your backpack while crafting at the van.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I use a Signal Tower item from storage in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "World interactions usually need the item in your backpack. Take the item out through Storage info, then lock it before leaving the van.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I sprint in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You are probably over your backpack slot limit. Return to the van, deposit materials, and leave again with fewer items.",
          },
        },
        {
          "@type": "Question",
          name: "How do I increase backpack space in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Sewing Table and gear-related upgrades. The Sewing Table supports backpack and clothing crafting, while Gear Research helps unlock backpack, stamina, and health upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "What materials should I watch for backpack and clothing upgrades in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Watch for Fiber, Thread, Rough Stuffing, and other sewing or clothing materials. Larger Fiber bushes may require the Sickle.",
          },
        },
        {
          "@type": "Question",
          name: "Can I expand van storage in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. As the van build grows, you can add more storage modules, larger containers, external racks, and upper-deck storage layouts.",
          },
        },
        {
          "@type": "Question",
          name: "Can the dog carry items in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. After you unlock a dog companion, the pouch can carry extra items, and dog commands can help reduce return trips to the van.",
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
          title="Outbound Storage Guide: Backpack, Van Storage, Deposit Panel and Dog Pouch"
          description="Learn how to find the van deposit panel, retrieve items from Storage info, craft from van storage, lock vouchers, upgrade your backpack through Sewing Table and Gear Research, and use the dog pouch to reduce return trips."
          gameTitle="Outbound"
          gameHref="/outbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 12, 2026"
          toc={[
            {
              id: "how-storage-works",
              label: "How storage works",
            },
            {
              id: "storage-panel-location",
              label: "Storage panel",
            },
            {
              id: "retrieve-items",
              label: "Retrieve items",
            },
            {
              id: "crafting-from-storage",
              label: "Craft from storage",
            },
            {
              id: "lock-items",
              label: "Lock items",
            },
            {
              id: "overencumbered",
              label: "Overencumbered",
            },
            {
              id: "what-to-carry",
              label: "Carry vs store",
            },
            {
              id: "player-upgrades",
              label: "Backpack upgrades",
            },
            {
              id: "expand-van-storage",
              label: "Expand storage",
            },
            {
              id: "dog-pouch",
              label: "Dog pouch",
            },
            {
              id: "best-storage-routes",
              label: "Trip planning",
            },
            {
              id: "upgrade-priority",
              label: "Habits & upgrades",
            },
            {
              id: "resource-farming-routine",
              label: "Farming routine",
            },
            {
              id: "storage-and-progression",
              label: "Progression tips",
            },
            {
              id: "common-problems",
              label: "Common problems",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/outbound",
              label: "Outbound Beginner Guide",
            },
            {
              href: "/outbound/early-resources",
              label: "Outbound Early Resource Guide",
            },
            {
              href: "/outbound/blueprints-workstations-upgrades",
              label: "Outbound Blueprints and Workstations Guide",
            },
            {
              href: "/outbound/energy-guide",
              label: "Outbound Energy Guide",
            },
            {
              href: "/outbound/leave-first-biome",
              label: "How to Leave the First Biome in Outbound",
            },
          ]}
        >
          <StorageBackpackGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}