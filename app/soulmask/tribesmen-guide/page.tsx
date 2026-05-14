import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TribesmenGuideContent from "@/data/soulmask/tribesmen-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/soulmask/tribesmen-guide`;

const pageTitle = "Soulmask Tribesmen Guide: Recruit, Roles & Training";
const pageDescription =
  "Recruit, assign, and train Tribesmen in Soulmask: Shifting Sands. Learn safe Deter recruitment, 120+ proficiency, Training Ground, direct control, worker loops, and idle fixes.";

const articleTitle =
  "Soulmask Tribesmen Guide: Recruitment, Roles, Training Ground, and Worker Fixes";

const articleDescription =
  "This Soulmask: Shifting Sands Tribesmen guide explains safe recruitment, Deter targets, roster caps, profession and proficiency evaluation, 120+ proficiency, Training Ground, direct control, farming loops, production jobs, mood, combat followers, outpost dispatches, and why workers stop working.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Soulmask Tribesmen guide",
    "Soulmask Shifting Sands Tribesmen",
    "Soulmask recruitment",
    "Soulmask Deter",
    "Soulmask Training Ground",
    "Soulmask direct control Tribesman",
    "Soulmask 120 proficiency",
    "Soulmask worker not working",
    "Soulmask farming automation",
    "Soulmask combat followers",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: `${siteUrl}/images/soulmask/first-recruit-work-menu.webp`,
        width: 1600,
        height: 900,
        alt: "First recruited Tribesman and work menu in Soulmask Shifting Sands.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${siteUrl}/images/soulmask/first-recruit-work-menu.webp`],
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
          name: "Tribesmen Guide",
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
      headline: articleTitle,
      description: articleDescription,
      image: [
        `${siteUrl}/images/soulmask/first-recruit-work-menu.webp`,
        `${siteUrl}/images/soulmask/farm-manager-grainery-well.webp`,
        `${siteUrl}/images/soulmask/breeding-farm-chicken-loop.webp`,
        `${siteUrl}/images/soulmask/kiln-and-furnace-worker-positions.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-05-14",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      keywords:
        "Soulmask Tribesmen, Shifting Sands, recruitment, Deter, Training Ground, direct control, proficiency caps, worker automation, farming, combat followers",
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
          name: "Tribesmen",
        },
        {
          "@type": "Thing",
          name: "Recruitment",
        },
        {
          "@type": "Thing",
          name: "Deter",
        },
        {
          "@type": "Thing",
          name: "Training Ground",
        },
        {
          "@type": "Thing",
          name: "Direct Control",
        },
        {
          "@type": "Thing",
          name: "Proficiency Caps",
        },
        {
          "@type": "Thing",
          name: "Worker Automation",
        },
        {
          "@type": "Thing",
          name: "Combat Followers",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
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
          title={articleTitle}
          description="Looking for the full Tribesmen route in Soulmask: Shifting Sands? This guide covers safe recruitment, Deter targets, profession and proficiency evaluation, Training Ground, direct control, worker loops, idle fixes, production scaling, and combat followers."
          gameTitle="Soulmask"
          gameHref="/soulmask"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 14, 2026"
          toc={[
            {
              id: "complete-loop-rule",
              label: "Complete loop rule",
            },
            {
              id: "what-tribesmen-actually-do-in-shifting-sands",
              label: "What Tribesmen do",
            },
            {
              id: "how-to-recruit-tribesmen-safely",
              label: "How to recruit safely",
            },
            {
              id: "shifting-sands-recruitment-risks",
              label: "Recruitment risks",
            },
            {
              id: "how-to-judge-a-good-tribesman",
              label: "Judge a good Tribesman",
            },
            {
              id: "quick-deter-check",
              label: "Worth using Deter?",
            },
            {
              id: "first-jobs-that-actually-remove-friction",
              label: "First useful jobs",
            },
            {
              id: "why-tribesmen-stop-working",
              label: "Why Tribesmen stop working",
            },
            {
              id: "farming-and-gathering-loops",
              label: "Farming and gathering",
            },
            {
              id: "animal-loops-and-specialists",
              label: "Animal loops",
            },
            {
              id: "production-ownership-and-later-base-scaling",
              label: "Production scaling",
            },
            {
              id: "training-ground-priority",
              label: "Training Ground",
            },
            {
              id: "direct-control-tribesman-training",
              label: "Direct control",
            },
            {
              id: "mood-and-happiness",
              label: "Mood and comfort",
            },
            {
              id: "war-party-and-field-use",
              label: "War party",
            },
            {
              id: "outpost-dispatches",
              label: "Outpost dispatches",
            },
            {
              id: "airships-change-reach-not-base-economy",
              label: "Airships and base economy",
            },
            {
              id: "recommended-progression-order",
              label: "Progression order",
            },
            {
              id: "where-strict-optimization-ends",
              label: "Optimization vs playstyle",
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
              href: "/soulmask/shifting-sands-beginner-guide",
              label: "Shifting Sands Beginner Guide",
            },
            {
              href: "/soulmask/airship-guide",
              label: "Airship Guide",
            },
            {
              href: "/soulmask/cross-map-transfer-guide",
              label: "Cross-Map Transfer Guide",
            },
          ]}
        >
          <TribesmenGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}