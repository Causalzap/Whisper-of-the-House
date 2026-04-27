import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AirshipGuideContent from "@/data/soulmask/airship-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/soulmask/airship-guide`;

export const metadata: Metadata = {
  title:
    "Soulmask Airship Guide: How to Unlock Flight and Reach Falcon-Class Progression",
  description:
    "Need help with Airships in Soulmask: Shifting Sands? This guide covers the starter ship, first flight unlock, Sobec pyramid parts, airship camps, and Falcon-Class progression.",
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
          name: "Airship Guide",
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
        "Soulmask Airship Guide: How to Unlock Flight, Upgrade Your Starter Ship, and Reach Falcon-Class Progression",
      description:
        "This guide explains how Airships work in Soulmask: Shifting Sands, including the starter ship, Sobec pyramid rewards, first flight setup, airship camp progression, and Falcon-Class upgrades.",
      image: [
        `${siteUrl}/images/soulmask/starter-ship-early-setup.webp`,
        `${siteUrl}/images/soulmask/first-flight-upgrade.webp`,
        `${siteUrl}/images/soulmask/falcon-class-body.webp`,
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
          name: "Airships",
        },
        {
          "@type": "Thing",
          name: "Sobec Crocodile",
        },
        {
          "@type": "Thing",
          name: "Falcon-Class Airship",
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
          title="Soulmask Airship Guide: When Ship Progression Becomes Real Flight"
          description="A progression-focused guide to how airships work in Soulmask: Shifting Sands, from the starter ship and first true flight to camp pressure, ship role choices, and the later large-ship phase."
          gameTitle="Soulmask"
          gameHref="/soulmask"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 11, 2026"
          toc={[
            {
              id: "what-airships-mean-in-shifting-sands",
              label: "What airships actually mean in Shifting Sands",
            },
            {
              id: "do-you-start-with-a-useful-ship",
              label: "Do you start with a useful ship?",
            },
            {
              id: "when-the-ship-becomes-a-real-airship",
              label: "When the ship becomes a real airship",
            },
            {
              id: "airship-camps-are-progression-checks",
              label: "Airship camps are progression checks",
            },
            {
              id: "floating-base-vs-travel-ship",
              label: "Floating base or travel ship?",
            },
            {
              id: "where-larger-ship-progression-gets-expensive",
              label: "Where larger-ship progression gets expensive",
            },
            {
              id: "what-still-should-not-be-overclaimed",
              label: "What still should not be overclaimed",
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
              href: "/soulmask/how-to-start-shifting-sands",
              label: "How to Start Shifting Sands",
            },
            {
              href: "/soulmask/cross-map-transfer-guide",
              label: "Cross-Map Transfer Guide",
            },
            {
                href: "/soulmask/tribesmen-guide",
                label: "Tribesmen Guide",
              },
          ]}
        >
          <AirshipGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}


