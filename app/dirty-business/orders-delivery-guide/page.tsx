import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DirtyBusinessOrdersGuideContent from "@/data/dirty-business/orders-delivery-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dirty-business`;
const pageUrl = `${hubUrl}/orders-delivery-guide`;

const imageUrls = [
  `${siteUrl}/images/dirty-business/dirty-business-order-delivery-elevator.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-delivery-drag-box-to-order.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-complete-selected-orders.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-missing-packs-order-error.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-medium-quality-order-requirement.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-order-penalty-zero.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-collect-payment.webp`,
];

const toc = [
  {
    id: "order-errors",
    label: "Order errors at a glance",
  },
  {
    id: "complete-one-order",
    label: "Complete one Order",
  },
  {
    id: "missing-packs",
    label: "Fix Missing Packs",
  },
  {
    id: "penalties",
    label: "Quality & penalties",
  },
  {
    id: "bug-or-player-error",
    label: "Bug or player error?",
  },
  {
    id: "elevator-and-payment",
    label: "Elevator & payment fixes",
  },
  {
    id: "box-rules",
    label: "Reliable box rule",
  },
  {
    id: "box-organization",
    label: "Box organization",
  },
  {
    id: "coop-orders",
    label: "Co-op Order routine",
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
    label: "Leveling, Reputation & Key Unlocks",
  },
  {
    href: "/dirty-business/workers-not-working",
    label: "Workers Not Working Guide",
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
  title: "Dirty Business Customer Orders Guide: Fix Missing Packs",
  description:
    "Complete customer Orders in Dirty Business, fix Missing Packs, delivery penalties, Elevator Isn't Clear, missing payment, and co-op tablet issues.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Dirty Business Customer Orders Guide",
    description:
      "Assign delivery boxes, fix Missing Packs, isolate penalties, complete selected Orders, collect payment, and recover stuck elevator or co-op states.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        alt: "Dirty Business Delivery screen assigning an elevator box to a customer Order",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirty Business Orders Guide: Missing Packs & Payment",
    description:
      "Fix Missing Packs, penalties, elevator errors, missing payment, and co-op tablet issues in Dirty Business customer Orders.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question:
      "Why does Dirty Business say Missing Packs when the box is on the elevator?",
    answer:
      "The box must also be assigned to the correct customer in Delivery. Then verify the product, strain, quality, and quantity.",
  },
  {
    question: "Which elevator is used for customer Orders?",
    answer:
      "Use the Order Delivery Elevator. The Store Elevator is for items purchased from the Store.",
  },
  {
    question: "Is Mark for Delivery the final step?",
    answer:
      "No. Check the penalty, use Complete Selected Orders, and then collect the payment.",
  },
  {
    question: "Why did the products disappear without adding money?",
    answer:
      "Check Collect Payment before repeating the Order because delivery and payment collection are separate steps.",
  },
  {
    question: "Do delivery penalties reduce Reputation?",
    answer:
      "They did in the compared Murkwood OG batches. The clean result showed 24 Reputation, while the wrong-quality batch showed 18 Reputation and 33.3% Penalties.",
  },
  {
    question: "Can I deliver the wrong quality?",
    answer:
      "Delivery may accept it with a penalty. That can reduce both U-Notes and Reputation, so wait for the correct quality unless the displayed tradeoff is intentional.",
  },
  {
    question: "What does the red X do?",
    answer:
      "It removed an activated Order during the early route. Do not treat it as a send or completion button. Its full cancellation consequences require a separate controlled test.",
  },
  {
    question: "Can one box satisfy multiple customers?",
    answer:
      "For reliable early deliveries, use one identifiable box per active customer and do not depend on split-box behavior for a clean progression batch.",
  },
  {
    question:
      "What should I do when everything matches but Delivery still does not work?",
    answer:
      "Let the host reassign the box, clear the elevator, reopen the tablet, and reload the session before producing another box.",
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
          name: "Customer Orders Guide",
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
        "Dirty Business Customer Orders Guide: Missing Packs, Penalties, Elevators, and Payment",
      description:
        "This Dirty Business customer Orders guide explains the full Order Delivery Elevator workflow from packing and closing a box to assigning it in Delivery, using Mark for Delivery, checking penalties, completing selected Orders, and collecting payment. It also diagnoses Missing Packs, wrong-quality penalties, Deformed Weapons, Elevator Isn't Clear, missing payment, box organization, and co-op tablet or synchronization problems.",
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
          name: "Dirty Business customer Orders",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Missing Packs",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Order Delivery Elevator",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Mark for Delivery",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Complete Selected Orders",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Collect Payment",
        },
        {
          "@type": "Thing",
          name: "Dirty Business delivery penalties",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Elevator Isn't Clear",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Deformed Weapon",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Mixed Orders",
        },
        {
          "@type": "Thing",
          name: "Dirty Business co-op Orders",
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
          title="How I Fix Customer Orders and Missing Packs in Dirty Business"
          description="Follow the complete Order Delivery Elevator workflow, then fix Missing Packs, delivery penalties, Elevator Isn't Clear, missing payment, and co-op tablet problems without rebuilding the same products."
          gameTitle="Dirty Business"
          gameHref="/dirty-business"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DirtyBusinessOrdersGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}