import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DlcBuyingGuideContent from "@/data/the-binding-of-isaac-rebirth/dlc-buying-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-binding-of-isaac-rebirth/dlc-buying-guide`;

const imageUrls = [
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-repentance-new-run.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-dlc-fresh-save-isaac.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-item-description-mod.webp`,
];

const toc = [
  {
    id: "which-dlc-should-you-buy",
    label: "Which DLC?",
  },
  {
    id: "price-anchor",
    label: "Price anchor",
  },
  {
    id: "dlc-order",
    label: "DLC order",
  },
  {
    id: "complete-bundle",
    label: "Complete Bundle",
  },
  {
    id: "buying-scenarios",
    label: "Buying scenarios",
  },
  {
    id: "when-to-wait",
    label: "When to wait",
  },
  {
    id: "repentance",
    label: "Repentance",
  },
  {
    id: "repentance-plus",
    label: "Repentance+",
  },
  {
    id: "complete-the-set",
    label: "Already own DLC?",
  },
  {
    id: "item-descriptions",
    label: "Item descriptions",
  },
  {
    id: "my-route",
    label: "Buying route",
  },
  {
    id: "what-to-read-next",
    label: "Next guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/the-binding-of-isaac-rebirth/",
    label: "The Binding of Isaac: Rebirth Guide Hub",
  },
  {
    href: "/the-binding-of-isaac-rebirth/beginner-guide/",
    label: "Beginner Guide",
  },
  {
    href: "/the-binding-of-isaac-rebirth/unlock-order/",
    label: "Unlock Order Guide",
  },
  {
    href: "/the-binding-of-isaac-rebirth/best-beginner-characters/",
    label: "Best Beginner Characters",
  },
  {
    href: "/the-binding-of-isaac-rebirth/tainted-characters-unlock-guide/",
    label: "Tainted Characters Unlock Guide",
  },
];

export const metadata: Metadata = {
  title: "Binding of Isaac DLC Buying Guide & Complete Bundle",
  description:
    "Choose Rebirth DLC with Complete Bundle price anchors, Afterbirth+, Repentance, Repentance+, sale advice, Steam bundle pricing and when to wait.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Binding of Isaac DLC Buying Guide, Complete Bundle, Repentance and Repentance+",
    description:
      "Choose which The Binding of Isaac: Rebirth DLC to buy with Complete Bundle price anchors, Rebirth, Afterbirth, Afterbirth+, Repentance, Repentance+, Steam complete-the-set pricing, sale advice and when to wait.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt:
          "The Binding of Isaac Repentance new run after installing the DLC.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binding of Isaac DLC Buying Guide & Complete Bundle",
    description:
      "Choose Rebirth, Afterbirth+, Repentance, Repentance+, Complete Bundle, sale pricing and when to wait before buying Isaac DLC.",
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
          name: "The Binding of Isaac: Rebirth Guide",
          item: `${siteUrl}/the-binding-of-isaac-rebirth/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "DLC Buying Guide",
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
        "The Binding of Isaac: Rebirth DLC Buying Guide: Complete Bundle, Rebirth, Afterbirth, Afterbirth+, Repentance, Repentance+, Sale Prices and Steam Bundle Pricing",
      description:
        "A practical The Binding of Isaac: Rebirth DLC buying guide for Steam players deciding between Rebirth, Afterbirth, Afterbirth+, Repentance, Repentance+ and the Complete Bundle. The guide explains the clean DLC order, why the Complete Bundle is usually best during deep sales, how to use price anchors such as the roughly $50.96 individual total and the 2026 Summer Sale's roughly $5.06-$5.09 bundle price, when to buy Rebirth first or wait, how Steam complete-the-set bundle pricing can help players who already own part of the game, why Repentance is the modern full version but also harder and more polarizing, what Repentance+ adds as a free online-focused layer, and when item descriptions or beginner routing matter more than buying another DLC.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-03",
      dateModified: "2026-07-03",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Binding of Isaac: Rebirth",
        },
        {
          "@type": "Thing",
          name: "The Binding of Isaac DLC",
        },
        {
          "@type": "Thing",
          name: "The Binding of Isaac Complete Bundle",
        },
        {
          "@type": "Thing",
          name: "Rebirth",
        },
        {
          "@type": "Thing",
          name: "Afterbirth",
        },
        {
          "@type": "Thing",
          name: "Afterbirth+",
        },
        {
          "@type": "Thing",
          name: "Repentance",
        },
        {
          "@type": "Thing",
          name: "Repentance+",
        },
        {
          "@type": "Thing",
          name: "Steam sale",
        },
        {
          "@type": "Thing",
          name: "Steam complete-the-set bundle",
        },
        {
          "@type": "Thing",
          name: "online co-op",
        },
        {
          "@type": "Thing",
          name: "item descriptions",
        },
        {
          "@type": "Thing",
          name: "Beginner Guide",
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
          name:
            "Should I buy The Binding of Isaac Rebirth or the Complete Bundle?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If the Complete Bundle is deeply discounted, the bundle is usually the cleaner buy. If the bundle is near full price and you are unsure whether you like Isaac, buy Rebirth first or wait for a sale.",
          },
        },
        {
          "@type": "Question",
          name:
            "What price is a good deal for The Binding of Isaac Complete Bundle?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The individual total is about $50.96, while the 2026 Summer Sale dropped the bundle to about $5.06-$5.09. An easy-buy range is under $10 if you expect to play.",
          },
        },
        {
          "@type": "Question",
          name: "Does The Binding of Isaac Complete Bundle include Repentance?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The Complete Bundle includes Rebirth, Afterbirth, Afterbirth+, and Repentance. Repentance+ is the free online update layer after the paid chain.",
          },
        },
        {
          "@type": "Question",
          name: "Can I buy The Binding of Isaac Repentance alone?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Repentance depends on the earlier paid chain. If Steam does not show a clean standalone purchase for your account, use the Complete Bundle or cart page while logged in and check which missing items Steam is charging for.",
          },
        },
        {
          "@type": "Question",
          name: "What if I already own The Binding of Isaac Rebirth?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open the Complete Bundle while logged into Steam and check the cart. Steam complete-the-set bundles can charge only for missing items, but you should verify the final cart before paying.",
          },
        },
        {
          "@type": "Question",
          name: "Is The Binding of Isaac Repentance worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Repentance is worth it if you want the modern full Isaac route. It adds a huge amount of content, but it is also harder and more polarizing than earlier versions.",
          },
        },
        {
          "@type": "Question",
          name: "Should a brand-new player start with Repentance?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Repentance if it came in a cheap bundle, but learn the game in layers. Do not rush alternate paths, Tainted characters or deep unlock routing on the first night.",
          },
        },
        {
          "@type": "Question",
          name: "Is Repentance+ free?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Repentance+ is a free online-focused update layer for players who already have the required paid DLC chain through Repentance.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need Repentance+ for online co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Plan around Repentance+ if online play is the goal, but remember it is the online layer on top of the paid DLC chain, not a standalone replacement for the earlier expansions.",
          },
        },
        {
          "@type": "Question",
          name:
            "Why does The Binding of Isaac still feel confusing after buying all DLC?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "DLC adds more content, not automatic understanding. Use item descriptions for item effects, then use a beginner route for floor, shop, health, boss and unlock decisions.",
          },
        },
        {
          "@type": "Question",
          name: "Should I wait for a sale before buying Isaac DLC?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if the bundle is near full price and you are not sure you like Isaac. Major Steam sales can change the value calculation completely.",
          },
        },
        {
          "@type": "Question",
          name: "Is this Isaac DLC guide a full gameplay guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. This page is for buying decisions. Once the version is solved, switch to beginner routing, unlock order, character choice or Tainted character guides.",
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
          title="Buy the Right Isaac DLC Without Guessing"
          description="Compare Rebirth, Afterbirth, Afterbirth+, Repentance, Repentance+, Complete Bundle pricing, Steam missing-item discounts, sale timing, online co-op and when to wait."
          gameTitle="The Binding of Isaac: Rebirth"
          gameHref="/the-binding-of-isaac-rebirth/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DlcBuyingGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}