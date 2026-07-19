import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HappysHumbleBurgerCultGuideHubContent from "@/data/happys-humble-burger-cult/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/happys-humble-burger-cult`;

const imageUrls = [
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-first-restaurant-tablet-map.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-recipe-list-over-picture.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-closeout-duty-list.webp`,
];

const toc = [
  {
    id: "what-is-the-game",
    label: "What is the game?",
  },
  {
    id: "guide-route",
    label: "Find the right guide",
  },
  {
    id: "first-shift-guide",
    label: "First Shift Guide",
  },
  {
    id: "orders-kitchen-guide",
    label: "Orders & Kitchen Guide",
  },
  {
    id: "quota-closeout-guide",
    label: "Quota & Closeout Guide",
  },
  {
    id: "common-problems",
    label: "Common problems",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/happys-humble-burger-cult/beginner-guide/",
    label: "First Shift Guide",
  },
  {
    href: "/happys-humble-burger-cult/orders-kitchen-guide/",
    label: "Orders & Kitchen Guide",
  },
  {
    href: "/happys-humble-burger-cult/quota-overtime-closeout-guide/",
    label: "Quota, Overtime & Closeout Guide",
  },
];

export const metadata: Metadata = {
  title:
    "Happy's Humble Burger Cult Guide Hub – First Shift & Closeout",
  description:
    "Start with the right Happy's Humble Burger Cult guide for first shifts, recipes, Weird Sandwiches, quota, Overtime, Closeout Duties, and escape.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title:
      "Happy's Humble Burger Cult Guide Hub: First Shift, Kitchen & Closeout",
    description:
      "Choose the guide that matches your problem: complete the first shift, fix recipes and delivery errors, or finish quota, Closeout, and the elevator escape.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1536,
        height: 1024,
        alt: "Happy's Humble Burger Cult first restaurant Tablet map labeled with the main kitchen, service, patio, and interior areas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Happy's Humble Burger Cult Guide Hub – First Shift & Closeout",
    description:
      "Find the right guide for the first shift, recipes, bags, quota, Overtime, Closeout Duties, and the elevator escape.",
    images: [imageUrls[0]],
  },
};

const guideItems = [
  {
    position: 1,
    name: "Happy's Humble Burger Cult First Shift Guide",
    url: `${pageUrl}/beginner-guide`,
    description:
      "Complete the Tutorial, choose Solo or Co-op, learn the first restaurant route, finish the first order, reach quota, clear Closeout, and escape.",
  },
  {
    position: 2,
    name: "Happy's Humble Burger Cult Orders and Kitchen Guide",
    url: `${pageUrl}/orders-kitchen-guide`,
    description:
      "Follow core sandwich stacks, avoid Weird Sandwiches, find Salmon Nuggets, fix incorrect deliveries, and separate Lobby, Pickup, and Drive-Thru orders.",
  },
  {
    position: 3,
    name: "Happy's Humble Burger Cult Quota, Overtime and Closeout Guide",
    url: `${pageUrl}/quota-overtime-closeout-guide`,
    description:
      "Understand quota, decide whether Overtime is worth it, clock out, complete Closeout Duties, find Restock and Thermostat targets, and unlock the elevator.",
  },
];

const faqEntities = [
  {
    question:
      "Is Solo easier after the July 18 patch in Happy's Humble Burger Cult?",
    answer:
      "A fresh completion streak now begins with one Closeout Duty, and remaining Simulation Stability delays Joy after clock-out. That makes a new Solo clear more manageable, but Toe still does not replace another player during Closeout.",
  },
  {
    question:
      "Is this a complete Happy's Humble Burger Cult Wiki?",
    answer:
      "No. This is a focused problem-solving guide hub for the first shift, kitchen orders, and Closeout. New pages should cover a distinct tested player problem rather than repeat the three existing guides.",
  },
  {
    question:
      "Does Pacifist Mode affect achievements, progression, or rewards?",
    answer:
      "Pacifist Mode is useful for learning stations and routes because it removes enemies and threats. I have not confirmed whether achievements, progression, and rewards behave identically.",
  },
  {
    question:
      "Are the recipes and Closeout details version-safe?",
    answer:
      "They reflect launch-week July 2026 testing and the July 18 balance patch. The individual guides label observed values and unverified boundaries instead of treating every number or route as permanent.",
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
          name: "Happy's Humble Burger Cult Guide Hub",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Happy's Humble Burger Cult Guide Hub",
      headline:
        "Happy's Humble Burger Cult Guide Hub: First Shift, Kitchen and Closeout",
      description:
        "This Happy's Humble Burger Cult guide hub routes players to focused guides for completing the first shift, choosing Solo or Co-op, learning the first restaurant, following verified sandwich stacks, fixing Weird Sandwiches and incorrect deliveries, finding Salmon Nuggets, separating Lobby, Pickup and Drive-Thru orders, understanding quota and Overtime, completing Restock, Thermostat and other Closeout Duties, and reaching the elevator after the Escape objective appears.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-19",
      dateModified: "2026-07-19",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: {
        "@type": "VideoGame",
        name: "Happy's Humble Burger Cult",
        url: pageUrl,
      },
      mainEntity: {
        "@id": `${pageUrl}#guide-list`,
      },
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
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guide-list`,
      name: "Happy's Humble Burger Cult Guides",
      numberOfItems: guideItems.length,
      itemListElement: guideItems.map(
        ({ position, name, url, description }) => ({
          "@type": "ListItem",
          position,
          item: {
            "@type": "Article",
            name,
            url,
            description,
          },
        }),
      ),
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
          title="Happy's Humble Burger Cult Guide Hub"
          description="Choose the exact guide for your current problem: finish the first shift, fix recipes and delivery errors, or complete quota, Closeout, and the elevator escape."
          gameTitle="Happy's Humble Burger Cult"
          gameHref="/happys-humble-burger-cult/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HappysHumbleBurgerCultGuideHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}