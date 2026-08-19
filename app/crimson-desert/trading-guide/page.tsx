import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TradingGuideContent from "@/data/crimson-desert/trading-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/crimson-desert`;
const pageUrl = `${hubUrl}/trading-guide`;

const metadataTitle =
  "Crimson Desert Trading Guide: Routes, Prices & Wagons";

const metadataDescription =
  "Plan profitable Crimson Desert trades with current prices, buyer-first routes, Packaged Goods, Royal Trading Posts, wagon risk, and real sale examples.";

const imageUrls = [
  `${siteUrl}/images/crimson-desert/crimson-desert-packaged-trade-goods-tutorial.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-royal-trading-post-cheese.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-buy-150-packaged-cheese.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-packaged-salt-price-spread.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-84450-packaged-salt-sale.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-wagon-off-trade-route-risk.webp`,
];

const toc = [
  {
    id: "how-trading-works",
    label: "How Trading Works",
  },
  {
    id: "check-buyer-first",
    label: "Find the Buyer First",
  },
  {
    id: "buying-cheese",
    label: "150 Packaged Cheese",
  },
  {
    id: "build-one-route",
    label: "Build One Route",
  },
  {
    id: "when-i-take-a-detour",
    label: "When to Take a Detour",
  },
  {
    id: "salt-example",
    label: "Packaged Salt Example",
  },
  {
    id: "buy-sell-confusion",
    label: "Buy vs Sell",
  },
  {
    id: "when-i-stop-buying",
    label: "When I Stop Buying",
  },
  {
    id: "wagon-route-risk",
    label: "Wagon Route Risk",
  },
  {
    id: "discover-trading-posts",
    label: "Discover Trading Posts",
  },
  {
    id: "trading-and-progression",
    label: "When Trading Is Worth It",
  },
  {
    id: "my-trading-loop",
    label: "My Trading Loop",
  },
];

const relatedLinks = [
  {
    href: "/crimson-desert",
    label: "Crimson Desert Guide Hub",
  },
  {
    href: "/crimson-desert/farming-ranching-guide",
    label: "Farming & Ranching Guide",
  },
  {
    href: "/crimson-desert/hunting-guide",
    label: "Hunting Guide",
  },
  {
    href: "/crimson-desert/side-quests-guide",
    label: "Side Quests Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Crimson Desert Trading Guide: Routes, Prices & Wagons",
    description:
      "See how I compare buyers, build multi-stop trade routes, manage Packaged Goods, avoid bad wagon detours, and decide when a trade is worth taking.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: imageUrls[4],
        width: 1600,
        height: 900,
        alt: "Selling 150 Packaged Salt for 84450 Silver in Crimson Desert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crimson Desert Trading Guide",
    description:
      "Buyer-first trade routes, Packaged Goods, current price checks, Royal Trading Posts, wagon risk, and real Crimson Desert sale examples.",
    images: [imageUrls[4]],
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
          name: "Crimson Desert Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Trading Guide",
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
        "Crimson Desert Trading Guide: Trade Routes, Prices, Packaged Goods and Wagons",
      description:
        "A practical Crimson Desert trading guide covering Packaged Trade Goods, buyer-first route planning, Royal Trading Posts, current buy and sell prices, Packaged Cheese and Packaged Salt examples, multi-stop wagon routes, when higher margins are not worth the detour, Buy versus Sell confusion, when to stop loading more cargo, wagon route risk, discovering Trading Posts, and when another trading run is worth the time.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-19",
      dateModified: "2026-08-19",
      articleSection: "Crimson Desert Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Crimson Desert",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Crimson Desert trading",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert trade routes",
        },
        {
          "@type": "Thing",
          name: "Packaged Trade Goods",
        },
        {
          "@type": "Thing",
          name: "Royal Trading Post",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert Trading Posts",
        },
        {
          "@type": "Thing",
          name: "Packaged Cheese",
        },
        {
          "@type": "Thing",
          name: "Packaged Salt",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert wagon trading",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert trade prices",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Plan Profitable Trading Routes in Crimson Desert"
          description="I find the buyer before I load the wagon, compare the current spread with the actual detour, and stop adding cargo once the route is already worth running."
          gameTitle="Crimson Desert"
          gameHref="/crimson-desert"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TradingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}