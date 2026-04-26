import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AirborneEmpireTiltLiftBalanceGuideContent from "@/data/airborne-empire/tilt-lift-balance-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/airborne-empire/tilt-lift-balance-guide`;

export const metadata: Metadata = {
  title:
    "Airborne Empire Tilt, Lift, and Balance Guide: Fix City Stability and Speed",
  description:
    "Use this Airborne Empire tilt, lift, and balance guide to fix unstable city layouts, solve the not enough lift to support weight warning, improve propulsion, and know when to rebuild instead of patching.",
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
          name: "Airborne Empire",
          item: `${siteUrl}/airborne-empire`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tilt, Lift, and Balance Guide",
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
        "Airborne Empire Tilt, Lift, and Balance Guide: Fix City Stability and Speed",
      description:
        "This Airborne Empire tilt, lift, and balance guide explains what tilt means, how lift and propulsion interact with weight, how to fix unstable layouts, what causes the not enough lift to support weight warning, and when rebuilding is better than patching.",
      image: [
        `${siteUrl}/images/airborne-empire/airborne-empire-tilt-lift-balance-hero.webp`,
        `${siteUrl}/images/airborne-empire/airborne-empire-tilt-two-degrees-right.webp`,
        `${siteUrl}/images/airborne-empire/airborne-empire-not-enough-lift.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-20",
      about: [
        {
          "@type": "VideoGame",
          name: "Airborne Empire",
        },
        {
          "@type": "Thing",
          name: "Tilt",
        },
        {
          "@type": "Thing",
          name: "Lift",
        },
        {
          "@type": "Thing",
          name: "Balance",
        },
        {
          "@type": "Thing",
          name: "Propulsion",
        },
        {
          "@type": "Thing",
          name: "City Layout",
        },
        {
          "@type": "Thing",
          name: "Not Enough Lift to Support Weight",
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
          title="Airborne Empire Tilt, Lift, and Balance Guide: Fix City Stability and Speed"
          description="Use this Airborne Empire tilt, lift, and balance guide to fix unstable city layouts, solve the not enough lift to support weight warning, improve propulsion, and know when to rebuild instead of patching."
          gameTitle="Airborne Empire"
          gameHref="/airborne-empire"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 20, 2026"
          toc={[
            {
              id: "quick-answer",
              label: "Quick Answer",
            },
            {
              id: "what-does-tilt-mean-in-airborne-empire",
              label: "What Does Tilt Mean in Airborne Empire?",
            },
            {
              id: "how-lift-works-in-airborne-empire",
              label: "How Lift Works in Airborne Empire",
            },
            {
              id: "how-propulsion-and-balance-work-together",
              label: "How Propulsion and Balance Work Together",
            },
            {
              id: "how-to-fix-tilt-in-airborne-empire",
              label: "How to Fix Tilt in Airborne Empire",
            },
            {
              id: "best-airborne-empire-city-balance-and-layout-tips",
              label: "Best Airborne Empire City Balance and Layout Tips",
            },
            {
              id: "best-way-to-place-lift-buildings-in-airborne-empire",
              label: "Best Way to Place Lift Buildings in Airborne Empire",
            },
            {
              id: "when-to-add-more-propulsion",
              label: "When to Add More Propulsion",
            },
            {
              id: "not-enough-lift-to-support-weight-in-airborne-empire",
              label: "Not Enough Lift to Support Weight in Airborne Empire",
            },
            {
              id: "when-to-rebuild-instead-of-patching",
              label: "When to Rebuild Instead of Patching",
            },
            {
              id: "common-airborne-empire-tilt-mistakes",
              label: "Common Airborne Empire Tilt Mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/airborne-empire/kingsfell-guide",
              label: "Airborne Empire Kingsfell guide",
            },
            {
              href: "/airborne-empire/pirate-queen-guide",
              label: "Airborne Empire Pirate Queen guide",
            },
            {
              href: "/airborne-empire/jet-engine-guide",
              label: "Airborne Empire Jet Engine guide",
            },
            {
              href: "/airborne-empire/guide-hub",
              label: "Airborne Empire guide hub",
            },
          ]}
        >
          <AirborneEmpireTiltLiftBalanceGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}