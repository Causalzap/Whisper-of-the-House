import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HappysHumbleBurgerCultOrdersKitchenGuideContent from "@/data/happys-humble-burger-cult/orders-kitchen-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/happys-humble-burger-cult`;
const pageUrl = `${hubUrl}/orders-kitchen-guide`;

const imageUrls = [
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-first-lobby-order.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-recipe-list-over-picture.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-weird-sandwich-wrong-bun.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-salmon-nuggets-under-fries.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-bagging-station-first-order.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-order-delivery-incorrect.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-pickup-orders-separate-station.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-second-prep-station.webp`,
];

const toc = [
  {
    id: "order-categories",
    label: "Order categories",
  },
  {
    id: "kitchen-stations",
    label: "Kitchen route",
  },
  {
    id: "core-recipes",
    label: "Core sandwich recipes",
  },
  {
    id: "weird-sandwich",
    label: "Avoid Weird Sandwiches",
  },
  {
    id: "cooking-states",
    label: "Cooking times & ready states",
  },
  {
    id: "sides-and-drinks",
    label: "Sides, baked goods & drinks",
  },
  {
    id: "bagging-errors",
    label: "Bagging & delivery errors",
  },
  {
    id: "order-channels",
    label: "Lobby, Pickup & Drive-Thru",
  },
  {
    id: "kitchen-roles",
    label: "Two-player roles & Toe",
  },
  {
    id: "related-guides",
    label: "Related guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/happys-humble-burger-cult/",
    label: "Happy's Humble Burger Cult Guide Hub",
  },
  {
    href: "/happys-humble-burger-cult/beginner-guide/",
    label: "First Shift Guide",
  },
  {
    href: "/happys-humble-burger-cult/quota-overtime-closeout-guide/",
    label: "Quota, Overtime & Closeout Guide",
  },
];

export const metadata: Metadata = {
  title: "Happy's Humble Burger Cult Orders & Kitchen Guide",
  description:
    "Fix Weird Sandwiches, find Salmon Nuggets, follow core recipes, bag orders correctly, and separate Lobby, Pickup, and Drive-Thru queues.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Happy's Humble Burger Cult Orders Guide: Recipes, Bags & Kitchen Roles",
    description:
      "Follow verified sandwich stacks, find Salmon Nuggets, diagnose incorrect deliveries, split order channels, and organize a two-player kitchen.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Happy's Humble Burger Cult recipe display showing the written ingredient list beside the sandwich picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy's Humble Burger Cult Orders & Kitchen Guide",
    description:
      "Use verified recipe stacks, fix Weird Sandwiches, find Salmon Nuggets, and stop correct food from going into the wrong bag or queue.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question:
      "Can I remove one wrong ingredient from a Weird Sandwich?",
    answer:
      "I did not find a reliable one-layer removal method. Because the wrong bun immediately created a Weird Sandwich in the Tutorial, I rebuild before adding more ingredients rather than risk losing the entire order timer.",
  },
  {
    question:
      "Can I reuse food after an order expires in Happy's Humble Burger Cult?",
    answer:
      "Only when the item exactly matches a new live order and has no customer-specific Complex Order modification. Otherwise, clear it from the active station so it cannot enter the next bag by mistake.",
  },
  {
    question:
      "Does one extra item make the whole order bag incorrect?",
    answer:
      "It can. One Co-op bag was rejected after the team discovered too many items inside. Match the exact requested item count instead of treating extra Fries or a spare drink as harmless.",
  },
  {
    question:
      "Where are Salmon Nuggets in Happy's Humble Burger Cult?",
    answer:
      "Salmon Nuggets are a separate Fried Food supply near or below the Fries storage by the Fryer. Raw fish is a sandwich patty and is not converted into nuggets.",
  },
  {
    question:
      "Can Toe replace a second kitchen player?",
    answer:
      "No. Toe can prepare some drinks, baked goods, or side items, but a player still has to identify the item, prevent duplicates, collect it, place it in the correct bag, and submit the order.",
  },
  {
    question:
      "When should I enable Pickup or Drive-Thru orders?",
    answer:
      "Enable an extra order channel only after the team can clear Lobby orders without expiry and one player can identify that channel's submission point before service begins.",
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
          name: "Happy's Humble Burger Cult Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Orders and Kitchen Guide",
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
        "Happy's Humble Burger Cult Orders and Kitchen Guide: Recipes, Bagging and Delivery Errors",
      description:
        "This Happy's Humble Burger Cult orders and kitchen guide explains how I translate themed menu names into sandwich, fried food, baked good, and drink jobs; move through the kitchen from the recipe display to the Freezer, Grill, assembly station, Bagging Station, and delivery point; follow verified launch-week stacks for Deep Sea Sammy, Vegan Surprise, Dairy Fairy, and Peppery Breast; use the written recipe list to avoid Weird Sandwiches; identify ready and burnt food without inventing fixed cook times; find Salmon Nuggets near the Fries supply; bag one order at a time; diagnose wrong named recipes, incorrect bag contents, wrong delivery channels, and expired orders; separate Lobby, Pickup, and Drive-Thru queues; and divide work between two players and Toe.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-19",
      dateModified: "2026-07-19",
      about: [
        {
          "@type": "VideoGame",
          name: "Happy's Humble Burger Cult",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult orders guide",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult kitchen guide",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult recipes",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Deep Sea Sammy recipe",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Vegan Surprise recipe",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Dairy Fairy recipe",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Peppery Breast recipe",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Weird Sandwich",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Salmon Nuggets",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Bagging Station",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Order Delivery Was Incorrect",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Pickup Orders",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Drive-Thru orders",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Complex Orders",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult two-player kitchen roles",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Toe",
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
          title="Happy's Humble Burger Cult Orders & Kitchen Guide"
          description="Follow the written recipes, fix Weird Sandwiches, find Salmon Nuggets, keep each customer tied to one bag, and stop Lobby, Pickup, and Drive-Thru orders from crossing."
          gameTitle="Happy's Humble Burger Cult"
          gameHref="/happys-humble-burger-cult/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HappysHumbleBurgerCultOrdersKitchenGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}