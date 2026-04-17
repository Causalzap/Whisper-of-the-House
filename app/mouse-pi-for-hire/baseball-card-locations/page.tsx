import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BaseballCardLocationsContent from "@/data/mouse-pi-for-hire/baseball-card-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pathname = "/mouse-pi-for-hire/baseball-card-locations";
const pageUrl = `${siteUrl}${pathname}`;

const pageTitle = "MOUSE: P.I. For Hire Baseball Cards Guide";
const pageDescription =
  "A practical MOUSE: P.I. For Hire guide to Baseball Cards, including the minigame, shop recovery, Prize Tokens, and the X1 D-Mousifier route.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
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
          item: `${siteUrl}/mouse-pi-for-hire`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Baseball Cards Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: pageTitle,
      description: pageDescription,
      inLanguage: "en",
      datePublished: "2026-04-17",
      dateModified: "2026-04-17",
      about: [
        {
          "@type": "VideoGame",
          name: "MOUSE: P.I. For Hire",
        },
        {
          "@type": "Thing",
          name: "Baseball Cards",
        },
        {
          "@type": "Thing",
          name: "Prize Tokens",
        },
        {
          "@type": "Thing",
          name: "Spike-D’s Token Prize D-Spenser",
        },
        {
          "@type": "Thing",
          name: "X1 D-Mousifier",
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
          title={pageTitle}
          description="Need a cleaner Baseball Cards route in MOUSE: P.I. For Hire? This guide covers the minigame, risky card sources, Prize Tokens, and the X1 D-Mousifier path."
          gameTitle="MOUSE: P.I. For Hire"
          gameHref="/mouse-pi-for-hire"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 17, 2026"
          toc={[
            {
              id: "how-baseball-cards-work",
              label: "How Baseball Cards work",
            },
            {
              id: "how-to-get-more-baseball-cards",
              label: "How to get more Baseball Cards",
            },
            {
              id: "how-to-win-more-baseball-card-matches",
              label: "How to win more Baseball Card matches",
            },
            {
              id: "prize-tokens-and-the-prize-d-spenser",
              label: "Prize Tokens and the Prize D-Spenser",
            },
            {
              id: "baseball-cards-for-100-percent-completion",
              label: "Baseball Cards for 100% completion",
            },
            {
              id: "baseball-cards-at-a-glance",
              label: "Baseball Cards at a glance",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/mouse-pi-for-hire/buy-back-guide",
              label: "Buy-Back Guide",
            },
            {
              href: "/mouse-pi-for-hire/missables-guide",
              label: "Missables Guide",
            },
            {
              href: "/mouse-pi-for-hire/collectibles-hub",
              label: "Collectibles & 100% Completion Hub",
            },
            {
              href: "/mouse-pi-for-hire",
              label: "MOUSE: P.I. For Hire Guide Hub",
            },
          ]}
        >
          <BaseballCardLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}