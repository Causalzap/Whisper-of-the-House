import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ShiftingSandsBeginnerGuideContent from "@/data/soulmask/shifting-sands-beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/soulmask/shifting-sands-beginner-guide`;

export const metadata: Metadata = {
  title:
    "Soulmask Shifting Sands Beginner Guide: What to Do in Your First 2 Hours",
  description:
    "New to Soulmask: Shifting Sands? This beginner guide covers the best first 2 hours, including Celestial Wings, the starter ship, first recruits, early ore priorities, Sobec timing, and your first bonfire base.",
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
          name: "Shifting Sands Beginner Guide",
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
        "Soulmask Shifting Sands Beginner Guide: What to Do in Your First 2 Hours",
      description:
        "This guide explains the best beginner route for Soulmask: Shifting Sands, including your first mobility unlock, starter ship setup, first recruit, scout route, ore priorities, early Sobec attempts, and when to build a real bonfire base.",
      image: [
        `${siteUrl}/images/soulmask/shifting-sands/beginner/celestial-wings-and-starter-ship.webp`,
        `${siteUrl}/images/soulmask/shifting-sands/beginner/first-recruit-and-scout-route.webp`,
        `${siteUrl}/images/soulmask/shifting-sands/beginner/bonfire-base-transition.webp`,
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
          name: "Celestial Wings",
        },
        {
          "@type": "Thing",
          name: "Starter Ship",
        },
        {
          "@type": "Thing",
          name: "Sobec Crocodile",
        },
        {
          "@type": "Thing",
          name: "Bonfire Base",
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
          title="Soulmask Shifting Sands Beginner Guide: What to Do in Your First 2 Hours"
          description="Looking for the best beginner route in Soulmask: Shifting Sands? This guide covers your first 2 hours, including Celestial Wings, the starter ship, first recruits, ore priorities, early Sobec timing, and when to place your first real bonfire base."
          gameTitle="Soulmask"
          gameHref="/soulmask"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 11, 2026"
          toc={[
            {
              id: "is-shifting-sands-good-for-new-players",
              label: "Is Shifting Sands good for new players",
            },
            {
              id: "what-you-should-do-in-the-first-20-minutes",
              label: "What to do in the first 20 minutes",
            },
            {
              id: "what-you-should-do-before-the-first-hour-ends",
              label: "What to do before the first hour ends",
            },
            {
              id: "what-to-prioritize-in-your-first-real-resource-loop",
              label: "What to prioritize in your first resource loop",
            },
            {
              id: "when-you-should-try-sobec",
              label: "When you should try Sobec",
            },
            {
              id: "when-to-stop-using-the-ship-as-your-main-base",
              label: "When to stop using the ship as your main base",
            },
            {
              id: "what-your-beginner-base-should-actually-do",
              label: "What your beginner base should actually do",
            },
            {
              id: "first-2-hours-checklist",
              label: "First 2 hours checklist",
            },
            {
              id: "common-early-mistakes",
              label: "Common early mistakes",
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
              href: "/soulmask/airship-guide/",
              label: "Airship Guide",
            },
            {
                href: "/soulmask/cross-map-transfer-guide/",
                label: "Cross-Map Transfer Guide",
              },
            {
              href: "/soulmask/tribesmen-guide/",
              label: "Tribesmen Guide",
            },
          ]}
        >
          <ShiftingSandsBeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}