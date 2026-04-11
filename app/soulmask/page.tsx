import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ShiftingSandsGuideHubContent from "@/data/soulmask/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/soulmask`;

export const metadata: Metadata = {
  title:
    "Soulmask Shifting Sands Guide Hub: Best Guides for New and Returning Players",
  description:
    "Looking for the best Soulmask: Shifting Sands guides? This hub covers the Beginner Guide, Cross-Map Transfer rules, Airship progression, and Tribesmen roles and assignments.",
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
          name: "Soulmask",
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
        "Soulmask Shifting Sands Guide Hub: Best Guides for New and Returning Players",
      description:
        "This hub collects the most useful Soulmask: Shifting Sands guides, including the Beginner Guide, Cross-Map Transfer Guide, Airship Guide, and Tribesmen Guide.",
      image: [
        `${siteUrl}/images/soulmask/shifting-sands/beginner/celestial-wings-and-starter-ship.webp`,
        `${siteUrl}/images/soulmask/shifting-sands/airship/first-flight-upgrade.webp`,
        `${siteUrl}/images/soulmask/shifting-sands/tribesmen/farm-manager-grainery-well.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-11",
      about: [
        {
          "@type": "VideoGame",
          name: "Soulmask",
        },
        {
          "@type": "Thing",
          name: "Shifting Sands",
        },
        {
          "@type": "Thing",
          name: "Beginner Guide",
        },
        {
          "@type": "Thing",
          name: "Cross-Map Transfer",
        },
        {
          "@type": "Thing",
          name: "Airships",
        },
        {
          "@type": "Thing",
          name: "Tribesmen",
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
          title="Soulmask Shifting Sands Guide Hub: Best Guides for New and Returning Players"
          description="Looking for the best Soulmask: Shifting Sands guides? This hub points you to the Beginner Guide, Cross-Map Transfer Guide, Airship Guide, and Tribesmen Guide."
          gameTitle="Soulmask"
          gameHref="/soulmask"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 11, 2026"
          toc={[
            {
              id: "what-is-shifting-sands",
              label: "What Shifting Sands is",
            },
            {
              id: "who-should-start-here",
              label: "Who should start here",
            },
            {
              id: "best-soulmask-shifting-sands-guides",
              label: "Best Shifting Sands guides",
            },
            {
              id: "best-reading-order",
              label: "Best reading order",
            },
            {
              id: "what-we-know-for-sure",
              label: "What we know for sure",
            },
            {
              id: "all-core-guides-at-a-glance",
              label: "All core guides at a glance",
            },
            {
              id: "quick-start-faq",
              label: "Quick Start FAQ",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/soulmask/shifting-sands-beginner-guide/",
              label: "Shifting Sands Beginner Guide",
            },
            {
              href: "/soulmask/cross-map-transfer-guide/",
              label: "Cross-Map Transfer Guide",
            },
            {
              href: "/soulmask/airship-guide/",
              label: "Airship Guide",
            },
            {
              href: "/soulmask/tribesmen-guide/",
              label: "Tribesmen Guide",
            },
          ]}
        >
          <ShiftingSandsGuideHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}