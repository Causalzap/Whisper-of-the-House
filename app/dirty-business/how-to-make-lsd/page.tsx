import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DirtyBusinessLsdGuideContent from "@/data/dirty-business/how-to-make-lsd.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dirty-business`;
const pageUrl = `${hubUrl}/how-to-make-lsd`;

const imageUrls = [
  `${siteUrl}/images/dirty-business/dirty-business-lsd-synthesising-store.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-lsd-slug-tank-overview.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-lsd-final-dispense.webp`,
];

const toc = [
  {
    id: "unlock-cost-equipment",
    label: "Unlock, cost & equipment",
  },
  {
    id: "first-batch",
    label: "Make the first LSD Sheet",
  },
  {
    id: "production-bottleneck",
    label: "Production bottleneck",
  },
  {
    id: "order-value-profit",
    label: "Order value & profit",
  },
  {
    id: "slug-and-tank-upgrades",
    label: "Slug & Tank upgrades",
  },
  {
    id: "starter-layout",
    label: "Starter room layout",
  },
  {
    id: "common-problems",
    label: "Problems & fixes",
  },
  {
    id: "when-to-expand",
    label: "When to expand",
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
    label: "Leveling, Reputation & Unlocks",
  },
  {
    href: "/dirty-business/orders-delivery-guide",
    label: "Orders, Boxes & Delivery Fixes",
  },
  {
    href: "/dirty-business/workers-not-working",
    label: "Workers Not Working Guide",
  },
  {
    href: "/dirty-business/achievements-guide",
    label: "All 75 Achievements",
  },
];

export const metadata: Metadata = {
  title: "Dirty Business LSD Guide: How to Make the First Sheet",
  description:
    "Make your first Dirty Business LSD Sheet with the Level 30 setup, five-Extract Distiller step, Too Hot fix, room layout, costs, and order checks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Dirty Business LSD Guide: First Sheet Production Route",
    description:
      "Set up the Slug Tank, collect five Extract, fix a Too Hot Distiller, finish the LSD Sheet, and identify whether Tanks or processing are blocking output.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Dirty Business LSD Synthesising Store with Basic Slug, Slug Tank, Slug Food, and later upgrades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirty Business LSD Guide: Slug Extract & Distiller",
    description:
      "Follow the Level 30 route from Basic Slug and Slug Food to five Extract, Distiller temperature, Blotting Paper, and the finished LSD Sheet.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "What level does LSD unlock?",
    answer:
      "LSD Synthesising unlocks at Reputation Level 30.",
  },
  {
    question: "What equipment do I need for the first LSD Sheet?",
    answer:
      "The route begins with Basic Slug, a Slug Tank, and Slug Food, then continues through a Distiller, Blotting Paper, and the final dispensing station.",
  },
  {
    question: "How many slugs fit in a standard Tank?",
    answer:
      "A standard Slug Tank supports up to three slugs.",
  },
  {
    question: "How many Slug Extract does the Distiller need?",
    answer:
      "The first tutorial cycle requires five Slug Extract.",
  },
  {
    question: "How much does one LSD Sheet sell for?",
    answer:
      "The first customer offer shown after production was 3,400 U-Notes for one LSD Sheet. That should not be treated as a guaranteed value for every order.",
  },
  {
    question: "Is LSD profitable?",
    answer:
      "The available numbers are not enough for a complete net-profit calculation. The visible 17,700 subtotal excludes processing equipment and repeat inputs.",
  },
  {
    question: "Is the Large Slug Tank worth 22,000?",
    answer:
      "It raises capacity from three to six slugs. Buy it when the Distiller is waiting for extract, not when extract is already queued for processing.",
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
          name: "LSD Guide",
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
        "Dirty Business LSD Guide: Level 30 Setup, Slug Extract, Distiller, and First Sheet",
      description:
        "This Dirty Business LSD guide covers the complete Level 30 first-sheet production route. It explains the visible 17,700 U-Note subtotal for Basic Slug, Slug Tank, and Slug Food; the standard Tank's three-slug capacity; manual Slug Extract collection; the five-Extract Distiller requirement; the Too Hot temperature fix; Blotting Paper and final dispensing; and the first customer offer of 3,400 U-Notes for one LSD Sheet. It also compares the three-slot and six-slot Tanks, provides a compact room layout, diagnoses common machine and tutorial blockers, and explains when to add Slug capacity instead of processing capacity.",
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
          name: "Dirty Business LSD guide",
        },
        {
          "@type": "Thing",
          name: "Dirty Business LSD Synthesising",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Level 30 LSD unlock",
        },
        {
          "@type": "Thing",
          name: "Basic Slug",
        },
        {
          "@type": "Thing",
          name: "Slug Tank",
        },
        {
          "@type": "Thing",
          name: "Slug Food",
        },
        {
          "@type": "Thing",
          name: "Slug Extract",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Distiller",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Distiller Too Hot",
        },
        {
          "@type": "Thing",
          name: "Blotting Paper",
        },
        {
          "@type": "Thing",
          name: "Dirty Business LSD Sheet",
        },
        {
          "@type": "Thing",
          name: "Large Slug Tank",
        },
        {
          "@type": "Thing",
          name: "Amped Slug",
        },
        {
          "@type": "Thing",
          name: "Super Slug",
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
          title="How I Make the First LSD Sheet in Dirty Business"
          description="Follow the Level 30 route through the Slug Tank, five-Extract Distiller load, Too Hot fix, Blotting Paper, and final dispensing step—and use the production queue to decide what to expand next."
          gameTitle="Dirty Business"
          gameHref="/dirty-business"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DirtyBusinessLsdGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}