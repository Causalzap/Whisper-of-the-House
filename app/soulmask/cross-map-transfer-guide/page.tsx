import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CrossMapTransferGuideContent from "@/data/soulmask/cross-map-transfer-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/soulmask/cross-map-transfer-guide`;

export const metadata: Metadata = {
  title:
    "Soulmask Cross-Map Transfer Guide: What Carries Over Between Cloud Mist Forest and Shifting Sands",
  description:
    "Need to know what carries over between Cloud Mist Forest and Shifting Sands in Soulmask? This guide explains single-player save inheritance, server transfer, tribe carryover, map-locked ships, and what items can cross maps.",
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
          item: `${siteUrl}/soulmask`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cross-Map Transfer Guide",
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
        "Soulmask Cross-Map Transfer Guide: What Carries Over Between Cloud Mist Forest and Shifting Sands",
      description:
        "This guide explains how Cross-Map transfer works in Soulmask 1.0, including single-player save inheritance, private and official server transfer, what carries over, and which systems are map-locked.",
      image: [
        `${siteUrl}/images/soulmask/save-inheritance-map-select.webp`,
        `${siteUrl}/images/soulmask/sea-stargate-cross-server-portal.webp`,
        `${siteUrl}/images/soulmask/portal-transfer-with-followers.webp`,
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
          name: "Cloud Mist Forest",
        },
        {
          "@type": "Thing",
          name: "Cross-Map Transfer",
        },
        {
          "@type": "Thing",
          name: "Save Inheritance",
        },
        {
          "@type": "Thing",
          name: "Sea Stargate",
        },
        {
          "@type": "Thing",
          name: "Ships",
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
          title="Soulmask Cross-Map Transfer Guide: What Carries Over Between Cloud Mist Forest and Shifting Sands"
          description="Looking for the full Cross-Map rules in Soulmask 1.0? This guide covers single-player save inheritance, server transfer, tribe carryover, map-locked ship systems, and what really carries between Cloud Mist Forest and Shifting Sands."
          gameTitle="Soulmask"
          gameHref="/soulmask"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 11, 2026"
          toc={[
            {
              id: "how-cross-map-transfer-works-in-soulmask",
              label: "How Cross-Map transfer works",
            },
            {
              id: "can-you-use-your-old-save-or-existing-character",
              label: "Old save / existing character",
            },
            {
              id: "single-player-cross-map-rules",
              label: "Single-player rules",
            },
            {
              id: "private-and-official-server-cross-map-rules",
              label: "Private and official server rules",
            },
            {
              id: "what-carries-over-between-cloud-mist-forest-and-shifting-sands",
              label: "What carries over",
            },
            {
              id: "what-is-map-locked",
              label: "What is map-locked",
            },
            {
              id: "can-you-bring-ships-back-to-cloud-mist-forest",
              label: "Can ships be brought back",
            },
            {
              id: "how-to-switch-maps-step-by-step",
              label: "How to switch maps step by step",
            },
            {
              id: "do-you-need-to-start-over-for-shifting-sands",
              label: "Do you need to start over",
            },
            {
              id: "what-carries-over-at-a-glance",
              label: "What carries over at a glance",
            },
            {
              id: "how-to-find-your-answer-fast",
              label: "How to find your answer fast",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/soulmask",
              label: "Shifting Sands Guide Hub",
            },
            {
              href: "/soulmask/tribesmen-guide",
              label: "Tribesmen Guide",
            },
            {
              href: "/soulmask/airship-guide",
              label: "Airship Guide",
            },
            {
              href: "/soulmask/shifting-sands-beginner-guide",
              label: "Shifting Sands Beginner Guide",
            },
          ]}
        >
          <CrossMapTransferGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}