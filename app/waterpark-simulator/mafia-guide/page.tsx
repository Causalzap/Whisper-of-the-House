import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterparkSimulatorMafiaContent from "@/data/waterpark-simulator/mafia-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/waterpark-simulator`;
const pageUrl = `${hubUrl}/mafia-guide`;

const imageUrls = [
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-mafia-first-750-offer.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-mafia-repayment-demand.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-mafia-sabotage-warning.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-mafia-crew-attack.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-mafia-damaged-attractions.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator Mafia Guide: Loan, Refusal & Sabotage",
  description:
    "See what happens after taking Mafia money, the $750 to $7,500 demand, refusal consequences, sabotage attacks, repairs and when the loan is worth it.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Waterpark Simulator Mafia Guide",
    description:
      "Follow the tested Mafia route from the first cash offer through the later repayment demand, refusal, sabotage warning, crew attack and park recovery.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator Mafia trouble warning explaining that crews may damage park attractions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator Mafia Guide",
    description:
      "Should you take the Mafia money? See the tested repayment demand, refusal consequences, sabotage attack and recovery route.",
    images: [imageUrls[2]],
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
          name: "Waterpark Simulator Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mafia Guide",
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
        "Waterpark Simulator Mafia Guide: Loan, Refusal and Sabotage",
      description:
        "A practical Waterpark Simulator Mafia guide covering the first Mafia cash offer, when accepting the money is useful, the later settlement demand, a tested $750 offer followed by a $7,500 repayment demand, refusal consequences, Mafia sabotage, damaged attractions, dropped cash and post-attack repair priorities.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-10",
      dateModified: "2026-08-10",
      about: [
        {
          "@type": "VideoGame",
          name: "Waterpark Simulator",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Mafia",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Mafia loan",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Mafia repayment",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Mafia sabotage",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Mafia attack",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Hard Mode",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Beach Map",
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
          title="Should You Take the Mafia Money in Waterpark Simulator?"
          description="Treat the Mafia offer as borrowed emergency cash, prepare for the later settlement demand, and know what to do if refusing leads to sabotage."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={[
            {
              id: "should-you-accept-mafia-money",
              label: "Should you accept?",
            },
            {
              id: "what-happens-after-accepting",
              label: "After accepting the money",
            },
            {
              id: "mafia-repayment-demand",
              label: "Repayment demand",
            },
            {
              id: "what-happens-if-you-refuse",
              label: "What happens if you refuse",
            },
            {
              id: "mafia-sabotage-attack",
              label: "Mafia sabotage attack",
            },
            {
              id: "mafia-damage-and-repairs",
              label: "Damage and repairs",
            },
            {
              id: "mafia-dropped-money",
              label: "Dropped money",
            },
            {
              id: "mafia-offer-amounts",
              label: "Mafia offer amounts",
            },
            {
              id: "what-is-not-confirmed",
              label: "What is not confirmed",
            },
            {
              id: "final-takeaway",
              label: "My Mafia rule",
            },
          ]}
          relatedLinks={[
            {
              href: "/waterpark-simulator",
              label: "Waterpark Simulator Guide Hub",
            },
            {
              href: "/waterpark-simulator/make-money",
              label: "Hard Mode Money Guide",
            },
            {
              href: "/waterpark-simulator/staff-guide",
              label: "Staff Hiring & Employee Limits",
            },
            {
              href: "/waterpark-simulator/research-points",
              label: "Research Points & Unlock Order",
            },
          ]}
        >
          <WaterparkSimulatorMafiaContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}