import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HappysHumbleBurgerCultBeginnerGuideContent from "@/data/happys-humble-burger-cult/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/happys-humble-burger-cult`;
const pageUrl = `${hubUrl}/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-solo-coop-mode-select.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-first-restaurant-tablet-map.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-freezer-grill-layout.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-first-shift-modifier-choice.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-first-lobby-order.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-bagging-station-first-order.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-first-shift-completed.webp`,
];

const toc = [
  {
    id: "tutorial-and-controls",
    label: "Tutorial & controls",
  },
  {
    id: "solo-or-coop",
    label: "Solo or Co-op",
  },
  {
    id: "station-route",
    label: "First restaurant route",
  },
  {
    id: "contract-and-modifier",
    label: "Contract & modifier",
  },
  {
    id: "first-order",
    label: "First order walkthrough",
  },
  {
    id: "wrong-order",
    label: "Avoid wrong orders",
  },
  {
    id: "simulation-stability",
    label: "Simulation Stability",
  },
  {
    id: "after-quota",
    label: "Quota, Closeout & escape",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
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
    href: "/happys-humble-burger-cult/quota-overtime-closeout-guide/",
    label: "Quota, Overtime & Closeout Guide",
  },
  {
    href: "/happys-humble-burger-cult/orders-kitchen-guide/",
    label: "Orders & Kitchen Guide",
  },
];

export const metadata: Metadata = {
  title:
    "Happy's Humble Burger Cult First Shift Guide – Solo & Co-op",
  description:
    "Complete your first shift in Happy's Humble Burger Cult: choose Solo or Co-op, finish the first order, hit quota, clear Closeout, and escape.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Happy's Humble Burger Cult First Shift Guide: First Order to Elevator",
    description:
      "Follow the full first-clear route from mode and modifier selection through the first three-item order, quota, Closeout Duty, and elevator escape.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1536,
        height: 1024,
        alt: "Happy's Humble Burger Cult first restaurant Tablet map labeled with the main service and kitchen areas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Happy's Humble Burger Cult First Shift Guide – Solo & Co-op",
    description:
      "Learn the first restaurant route, role split, order workflow, Stability decisions, and what to do after quota.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question:
      "Why did my Closeout have more than one duty after the balance patch?",
    answer:
      "Closeout Duty count scales with consecutive completed shifts. A fresh completion streak starts at one duty, then the workload increases as the crew keeps completing shifts, even when returning to the same restaurant.",
  },
  {
    question:
      "Can I use Pacifist Mode to learn the first restaurant?",
    answer:
      "Yes. Pacifist Mode removes enemies and threats, making it useful for learning station positions and the kitchen route. I have not confirmed whether the current build treats achievements, progression, and rewards identically in that mode.",
  },
  {
    question:
      "Can another player cancel the customer I am serving?",
    answer:
      "Yes. A Co-op customer disappeared when a teammate attacked them during order entry. Keep punches, shoves, spit, and thrown food away from the register until the order has entered the kitchen queue.",
  },
  {
    question:
      "Can I change the default controls in Happy's Humble Burger Cult?",
    answer:
      "Yes. Input rebinding was added in a launch hotfix. The controls listed in this guide are the default PC inputs I learned with rather than mandatory key bindings.",
  },
  {
    question:
      "Why did the order disappear before I finished cooking?",
    answer:
      "The customer may have timed out, or another player may have interrupted the customer at the register. Confirm that the order entered the kitchen queue before continuing to cook food for it.",
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
          name: "First Shift Guide",
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
        "Happy's Humble Burger Cult First Shift Guide: Solo, Co-op and First Clear",
      description:
        "This Happy's Humble Burger Cult first shift guide explains how I completed the Tutorial, chose between Solo and Co-op, divided jobs for one to four players, learned the first restaurant route, found the Freezer and Grill, selected a low-risk contract and modifier, completed a three-item lobby order, used the Bagging Station, avoided Weird Sandwiches, preserved Simulation Stability after the July 18 balance patch, reached quota, declined Overtime, completed the active Closeout Duty, and returned to the elevator for a Round Complete result.",
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
          name: "Happy's Humble Burger Cult first shift guide",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult beginner guide",
        },
        {
          "@type": "Thing",
          name: "How to complete the first shift",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Solo mode",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Co-op roles",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult first restaurant map",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Freezer and Grill",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult first order",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Bagging Station",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Simulation Stability",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult quota",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Closeout Duty",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult elevator locked",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Toe",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult July 18 balance patch",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Pacifist Mode",
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
          title="Happy's Humble Burger Cult First Shift Guide: How I Cleared My First Shift"
          description="Follow my safest first-clear route from Tutorial and mode selection to the first three-item order, quota, one Closeout Duty, and the elevator—without wasting Stability on Overtime."
          gameTitle="Happy's Humble Burger Cult"
          gameHref="/happys-humble-burger-cult/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HappysHumbleBurgerCultBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}