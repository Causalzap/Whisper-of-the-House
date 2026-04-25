import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ShopMoneyGuideContent from "@/data/holovillage-our-cozy-days/shop-money-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/holovillage-our-cozy-days`;
const pageUrl = `${gameUrl}/shop-money-guide`;

export const metadata: Metadata = {
  title:
    "holoVillage Shop and Money Guide: Restaurant, Smitty & Selling",
  description:
    "Learn how to make money in holoVillage: Our Cozy Days, including Restaurant vs Smitty, selling items, store setup, sales clerks, bonus profit, cooking, and early money loops.",
  alternates: {
    canonical: pageUrl,
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
          name: "holoVillage: Our Cozy Days",
          item: gameUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "holoVillage Shop and Money Guide",
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
        "holoVillage Shop and Money Guide: Restaurant, Smitty, Selling Items, and Villager Shifts Explained",
      description:
        "This holoVillage: Our Cozy Days shop and money guide explains how early money works, when stores unlock, whether to choose Restaurant or Smitty first, how store setup works, how cooked dishes and equipment sales work, and what to sell or keep early.",
      image: [
        `${siteUrl}/images/holovillage-our-cozy-days/shop-money-guide.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-24",
      about: [
        {
          "@type": "VideoGame",
          name: "holoVillage: Our Cozy Days",
        },
        {
          "@type": "Thing",
          name: "Money Making",
        },
        {
          "@type": "Thing",
          name: "Restaurant",
        },
        {
          "@type": "Thing",
          name: "Smitty",
        },
        {
          "@type": "Thing",
          name: "Selling Items",
        },
        {
          "@type": "Thing",
          name: "Sales Clerk",
        },
        {
          "@type": "Thing",
          name: "Cooking",
        },
        {
          "@type": "Thing",
          name: "Shopkeeping",
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
          title="holoVillage Shop and Money Guide: Restaurant, Smitty, Selling Items, and Villager Shifts Explained"
          description="Learn how to make money in holoVillage: Our Cozy Days, including Restaurant vs Smitty, store setup, sales clerks, bonus profit, cooking, equipment sales, and what to sell or keep early."
          gameTitle="holoVillage: Our Cozy Days"
          gameHref="/holovillage-our-cozy-days"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 24, 2026"
          toc={[
            {
              id: "shop-and-money-system-at-a-glance",
              label: "Shop and money at a glance",
            },
            {
              id: "how-money-works-in-holovillage",
              label: "How money works",
            },
            {
              id: "when-you-unlock-stores",
              label: "When stores unlock",
            },
            {
              id: "restaurant-or-smitty-which-should-you-choose-first",
              label: "Restaurant or Smitty first?",
            },
            {
              id: "how-to-open-a-store",
              label: "How to open a store",
            },
            {
              id: "how-store-sales-and-bonus-profit-work",
              label: "Store sales and bonus profit",
            },
            {
              id: "how-the-restaurant-works",
              label: "How the Restaurant works",
            },
            {
              id: "cooking-tips-for-early-money",
              label: "Cooking tips",
            },
            {
              id: "how-the-smitty-works",
              label: "How the Smitty works",
            },
            {
              id: "should-you-sell-or-keep-enhanced-gear",
              label: "Sell or keep enhanced gear?",
            },
            {
              id: "best-early-money-loops",
              label: "Best early money loops",
            },
            {
              id: "what-to-sell-and-what-to-keep",
              label: "What to sell and keep",
            },
            {
              id: "how-villagers-help-your-economy",
              label: "Villagers and economy",
            },
            {
              id: "early-store-build-order",
              label: "Early store build order",
            },
            {
              id: "common-money-mistakes",
              label: "Common money mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/holovillage-our-cozy-days",
              label: "holoVillage: Our Cozy Days Guide Hub",
            },
            {
              href: "/holovillage-our-cozy-days/fishing-guide",
              label: "holoVillage Fishing Guide",
            },
            {
              href: "/holovillage-our-cozy-days/how-to-invite-villagers",
              label: "How to Invite Villagers in holoVillage",
            },
            {
              href: "/holovillage-our-cozy-days/beginner-guide",
              label: "holoVillage Beginner Guide",
            },
            {
              href: "/holovillage-our-cozy-days/early-combat-guide",
              label: "holoVillage Early Combat Guide",
            },
          ]}
        >
          <ShopMoneyGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
