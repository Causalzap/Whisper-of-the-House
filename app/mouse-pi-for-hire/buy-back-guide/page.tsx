import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BuyBackGuideContent from "@/data/mouse-pi-for-hire/buy-back-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mouse-p-i-for-hire/buy-back-guide`;

export const metadata: Metadata = {
    title: "Missed Collectibles Buy-Back Guide | MOUSE: P.I. For Hire",
    description:
      "Missed a collectible in MOUSE: P.I. For Hire? Learn which items you can buy back in shops, what is permanently missable, and how to plan for the endgame.",
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
          name: "MOUSE: P.I. For Hire",
          item: `${siteUrl}/mouse-p-i-for-hire`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Buy-Back Guide",
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
      headline: "MOUSE: P.I. For Hire Buy-Back Guide",
      description:
        "This guide explains which collectible categories can be recovered later through shops in MOUSE: P.I. For Hire, which ones cannot, and how side-job rewards and late-game lockout affect 100% routing.",
      inLanguage: "en",
      dateModified: "2026-04-17",
      about: [
        {
          "@type": "VideoGame",
          name: "MOUSE: P.I. For Hire",
        },
        {
          "@type": "Thing",
          name: "Collectibles",
        },
        {
          "@type": "Thing",
          name: "Buy-Back System",
        },
        {
          "@type": "Thing",
          name: "Secret Figurines",
        },
        {
          "@type": "Thing",
          name: "Schematics",
        },
        {
          "@type": "Thing",
          name: "Baseball Cards",
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
          title="MOUSE: P.I. For Hire Buy-Back Guide"
          description="Need to know which missed collectibles you can actually recover later in MOUSE: P.I. For Hire? This guide explains the shop cleanup rules, the biggest exceptions, and why late-game lockout makes some categories much riskier than they first sound."
          gameTitle="MOUSE: P.I. For Hire"
          gameHref="/mouse-p-i-for-hire"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 17, 2026"
          toc={[
            {
              id: "buy-back-system-at-a-glance",
              label: "Buy-back system at a glance",
            },
            {
              id: "can-you-buy-missed-collectibles-later-in-mouse-pi-for-hire",
              label: "Can you buy missed collectibles later?",
            },
            {
              id: "collectible-categories-and-buy-back-rules",
              label: "Collectible categories and buy-back rules",
            },
            {
              id: "which-collectibles-can-be-bought-back",
              label: "Which collectibles can be bought back",
            },
            {
              id: "which-collectibles-cannot-be-bought-back",
              label: "Which collectibles cannot be bought back",
            },
            {
              id: "where-do-buy-back-items-appear",
              label: "Where buy-back items appear",
            },
            {
              id: "shop-only-cards-versus-buy-back-cards",
              label: "Shop-only cards vs buy-back cards",
            },
            {
              id: "do-side-job-rewards-follow-the-same-rules",
              label: "Do side-job rewards follow the same rules",
            },
            {
              id: "clues-and-locked-containers-still-change-routing",
              label: "Clues and locked containers still change routing",
            },
            {
              id: "how-late-game-lockout-changes-buy-back-planning",
              label: "How late-game lockout changes planning",
            },
            {
              id: "should-you-rely-on-buy-back-for-100-percent-completion",
              label: "Should you rely on buy-back for 100%",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/mouse-pi-for-hire/missables-guide",
              label: "Missables Guide",
            },
            {
              href: "/mouse-pi-for-hire/collectibles-hub",
              label: "Collectibles Hub",
            },
            {
              href: "/mouse-pi-for-hire/missable-side-job-rewards",
              label: "Missable Side Job Rewards",
            },
            {
              href: "/mouse-pi-for-hire",
              label: "MOUSE: P.I. For Hire Guide Hub",
            },
          ]}
        >
          <BuyBackGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}