import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HappysHumbleBurgerCultQuotaOvertimeCloseoutGuideContent from "@/data/happys-humble-burger-cult/quota-overtime-closeout-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/happys-humble-burger-cult`;
const pageUrl = `${hubUrl}/quota-overtime-closeout-guide`;

const imageUrls = [
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-quota-met-clock-out-prompt.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-overtime-order-timer.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-closeout-duty-list.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-closeout-target-map.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-closeout-grease-highlight.webp`,
  `${siteUrl}/images/happys-humble-burger-cult/happys-humble-burger-cult-escape-elevator-prompt.webp`,
];

const toc = [
  {
    id: "quota-vs-shift",
    label: "Quota vs completed shift",
  },
  {
    id: "overtime",
    label: "Is Overtime worth it?",
  },
  {
    id: "clock-out",
    label: "How to clock out",
  },
  {
    id: "duty-count",
    label: "Why duty count changes",
  },
  {
    id: "duty-summary",
    label: "Closeout Duty summary",
  },
  {
    id: "solo-closeout",
    label: "Solo Closeout route",
  },
  {
    id: "two-player-closeout",
    label: "Two-player Closeout split",
  },
  {
    id: "restock",
    label: "Restock locations",
  },
  {
    id: "thermostats",
    label: "Thermostat locations",
  },
  {
    id: "other-duties",
    label: "Other Closeout Duties",
  },
  {
    id: "escape-and-payout",
    label: "Escape, death & payout",
  },
  {
    id: "troubleshooting",
    label: "Closeout troubleshooting",
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
    href: "/happys-humble-burger-cult/orders-kitchen-guide/",
    label: "Orders & Kitchen Guide",
  },
];

export const metadata: Metadata = {
  title: "Happy's Humble Burger Cult Quota & Closeout Guide",
  description:
    "Learn what quota means, when Overtime is worth it, how Closeout Duties scale, where key targets are, and how to unlock the elevator.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Happy's Humble Burger Cult Quota Guide: Overtime, Closeout & Escape",
    description:
      "Follow the full route from quota and Overtime to clock-out, Closeout Duties, Solo and Co-op task splits, and the elevator escape.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1600,
        height: 900,
        alt: "Happy's Humble Burger Cult Closeout Duty List showing grease, rat traps, restocking, and thermostat tasks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy's Humble Burger Cult Quota & Closeout Guide",
    description:
      "Understand quota, skip risky Overtime, complete every Closeout Duty, and wait for the elevator escape objective.",
    images: [imageUrls[2]],
  },
};

const faqEntities = [
  {
    question:
      "Is Overtime required after meeting quota in Happy's Humble Burger Cult?",
    answer:
      "No. Overtime is optional bonus work, while Closeout is mandatory. You can decline Overtime, clock out at the shift lever, complete the active duties, and escape.",
  },
  {
    question:
      "Why did this shift give me more Closeout Duties?",
    answer:
      "The July 18 balance patch made a fresh completion streak start with one duty, then increase the workload after consecutive completed shifts. Duty count and duty type are separate variables.",
  },
  {
    question:
      "Does Toe complete Closeout Duties?",
    answer:
      "I do not plan around Toe during Closeout. Toe helped with secondary food items during service, but I did not see him reliably handle traps, restocking, grease, thermostats, or the final escape.",
  },
  {
    question:
      "Does every player have to escape for the shift to count?",
    answer:
      "A group can reach a completion result when only part of the team survives, but payouts can differ. In one tested result, the survivor had 88 dollars while dead teammates reported zero.",
  },
  {
    question:
      "Can I complete Closeout Duties before clocking out?",
    answer:
      "I do not rely on it. Some target highlights, counters, or interactions only become clear after the shift lever starts the Closeout phase.",
  },
  {
    question:
      "Why is a Thermostat marker beside me but the unit is missing?",
    answer:
      "The marker can point to the opposite side of the wall or a different vertical route. Walk around the structure and check above or below before returning to the same room.",
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
          name: "Quota, Overtime and Closeout Guide",
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
        "Happy's Humble Burger Cult Quota, Overtime and Closeout Guide",
      description:
        "This Happy's Humble Burger Cult quota and Closeout guide explains why reaching quota does not complete a shift, when I take or skip Overtime, how I return to the shift lever and clock out, why Closeout Duty count increases after consecutive completed shifts, what Restock the Kitchen, Dispose of Grease, Reset Rat Traps, Calibrate Thermostats, Turn Off Appliances, Extinguish Fires, and Take Out Trash require, how I route Solo and two-player Closeout runs, where I search for the final restock box and hidden thermostat, how remaining Simulation Stability delays Joy after the July 18 balance patch, and when the Escape or Get to the Elevator objective proves the shift is ready to end.",
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
          name: "Happy's Humble Burger Cult quota",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult completed shift",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Overtime",
        },
        {
          "@type": "Thing",
          name: "Is Overtime worth it",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult clock out",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Closeout Duties",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Closeout Duty count",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Solo Closeout",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Restock the Kitchen",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult thermostat locations",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult rat traps",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult dispose of grease",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult take out trash",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult roof fire",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Simulation Stability",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult Joy timer",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult elevator locked",
        },
        {
          "@type": "Thing",
          name: "Happy's Humble Burger Cult July 18 balance patch",
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
          title="Happy's Humble Burger Cult Quota, Overtime & Closeout Guide"
          description="Reach quota, decide whether Overtime is worth the risk, clock out correctly, clear every duty, and wait for the Escape objective before returning to the elevator."
          gameTitle="Happy's Humble Burger Cult"
          gameHref="/happys-humble-burger-cult/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HappysHumbleBurgerCultQuotaOvertimeCloseoutGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}