import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DirtyBusinessGuideHubContent from "@/data/dirty-business/index.mdx";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";


const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dirty-business`;

const imageUrls = [
  `${siteUrl}/images/dirty-business/dirty-business-order-penalty-zero.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-level-5-weapon-printing-unlock.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-level-38-aircraft-access.webp`,
];

const toc = [
  {
    id: "guides",
    label: "Dirty Business guides",
  },
  {
    id: "beginner-progression",
    label: "Beginner progression",
  },
  {
    id: "best-production-priorities",
    label: "Production priorities",
  },
  {
    id: "quality-and-deformed-products",
    label: "Quality & Deformed products",
  },
  {
    id: "weapon-printing",
    label: "Weapon Printing",
  },
  {
    id: "acid-disposal",
    label: "Acid Disposal",
  },
  {
    id: "coop",
    label: "Solo & Co-op",
  },
  {
    id: "save-backup-demo-transfer",
    label: "Save & Demo transfer",
  },
  {
    id: "dealer-company-aircraft",
    label: "Dealer, Company & aircraft",
  },
  {
    id: "worker-automation",
    label: "Worker automation",
  },
  {
    id: "lsd",
    label: "LSD production",
  },
  {
    id: "achievements",
    label: "Achievements",
  },
  {
    id: "recommended-order",
    label: "Recommended reading order",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/dirty-business/leveling-reputation-unlocks",
    label: "Leveling, Reputation & Key Unlocks",
  },
  {
    href: "/dirty-business/orders-delivery-guide",
    label: "Customer Orders & Delivery Fixes",
  },
  {
    href: "/dirty-business/workers-not-working",
    label: "Botanist Not Working Guide",
  },
  {
    href: "/dirty-business/how-to-make-lsd",
    label: "How to Make the First LSD Sheet",
  },
  {
    href: "/dirty-business/achievements-guide",
    label: "All 75 Achievements & Checklist",
  },
];

export const metadata: Metadata = {
  title: "Dirty Business Guide Hub: Progression, Co-op & Saves",
  description:
    "Dirty Business guide hub for beginner progression, production priorities, Orders, quality, Co-op, saves, Workers, LSD, distribution, and achievements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Dirty Business Guide Hub: Progression, Co-op & Saves",
    description:
      "Start with the right Dirty Business guide, then use the Hub for production priorities, product quality, Co-op roles, save safety, Weapon Printing, Acid Disposal, and late distribution.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Dirty Business clean customer Order showing zero penalties and Reputation progress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirty Business Guide Hub",
    description:
      "Beginner progression, production priorities, quality, Co-op, saves, Weapons, Acid, Workers, LSD, distribution, and achievements.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Which Dirty Business guide should a beginner read first?",
    answer:
      "Read the Customer Orders guide first when the delivery or payment workflow is unclear. Read the Leveling guide when Orders already work and the next question is progression or purchasing.",
  },
  {
    question: "What is the best production priority in Dirty Business?",
    answer:
      "Clear finished output and restore completely stopped stations first. Add capacity only after the input, processing, output, and distribution queues are understood.",
  },
  {
    question:
      "Why does a correct product still receive a penalty in Dirty Business?",
    answer:
      "The Order can also check strain, quality, condition, and quantity. Wrong-quality Weed or a Deformed Weapon can reduce the result.",
  },
  {
    question: "How should two players divide the work in Dirty Business?",
    answer:
      "Let one player control Orders and Delivery while the other handles production, packing, and box placement. With more players, assign one owner to each major system.",
  },
  {
    question: "Can a Dirty Business Demo save transfer to Early Access?",
    answer:
      "Developer messaging said transfer was intended, but preserve the original Demo data and verify the imported level, cash, rooms, inventory, Workers, and tutorials before deleting or overwriting anything.",
  },
  {
    question: "Where is the Dirty Business save folder?",
    answer:
      "The exact current Early Access path has not been verified for this guide. Confirm which files change when saving before claiming that a manual backup is complete.",
  },
  {
    question: "When should I hire a Dealer or buy a Company?",
    answer:
      "After the base produces repeatable surplus that clean customer Orders no longer consume. Do not add distribution while the original production route is underfunded.",
  },
  {
    question:
      "Does reaching Level 38 immediately give me a usable aircraft?",
    answer:
      "No. Level 38 opens the next access check. The tutorial, aircraft, pilot, cargo, funding, and route still have to be prepared.",
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
          name: "Dirty Business Guide Hub",
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
        "Dirty Business Guide Hub: Beginner Progression, Production Priorities, Co-op, Saves, Quality, and Distribution",
      description:
        "This Dirty Business guide hub connects the Leveling, Customer Orders, Botanist, LSD, and Achievements guides while directly covering beginner progression, production bottlenecks, Weed quality, Deformed Weapons, Weapon Printing, Acid Disposal, Solo and co-op priorities, Demo save transfer, manual backup safety, Dealers, Companies, aircraft access, and recommended reading order.",
      image: imageUrls,
      inLanguage: "en",
      isAccessibleForFree: true,
      datePublished: "2026-07-25",
      dateModified: "2026-07-25",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Dirty Business",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Dirty Business beginner guide",
        },
        {
          "@type": "Thing",
          name: "Dirty Business progression guide",
        },
        {
          "@type": "Thing",
          name: "Dirty Business production priorities",
        },
        {
          "@type": "Thing",
          name: "Dirty Business customer Orders",
        },
        {
          "@type": "Thing",
          name: "Dirty Business quality and Deformed products",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Weapon Printing",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Acid Disposal",
        },
        {
          "@type": "Thing",
          name: "Dirty Business co-op guide",
        },
        {
          "@type": "Thing",
          name: "Dirty Business save backup",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Demo save transfer",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Worker automation",
        },
        {
          "@type": "Thing",
          name: "Dirty Business LSD production",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Dealer",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Company",
        },
        {
          "@type": "Thing",
          name: "Dirty Business aircraft access",
        },
        {
          "@type": "Thing",
          name: "Dirty Business achievements",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guides`,
      name: "Dirty Business Guides",
      itemListElement: relatedLinks.map((link, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: link.label,
        url: `${siteUrl}${link.href}`,
      })),
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
          title="Dirty Business Guide Hub"
          description="Start with the right guide, then use this Hub for beginner progression, production priorities, quality and Deformed products, Co-op roles, save safety, Weapon Printing, Acid Disposal, Workers, LSD, Dealers, Companies, aircraft, and achievements."
          gameTitle="Dirty Business"
          gameHref="/dirty-business"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DirtyBusinessGuideHubContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Dirty Business"
          heading="Looking for another game after Dirty Business?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />

      </main>

      <Footer />
    </>
  );
}