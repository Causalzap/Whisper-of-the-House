import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MissableSideJobRewardsContent from "@/data/mouse-pi-for-hire/missable-side-job-rewards.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mouse-pi-for-hire/missable-side-job-rewards`;

export const metadata: Metadata = {
  title: "MOUSE: P.I. For Hire Missable Side Job Rewards Guide",
  description:
    "Learn which side job rewards are missable in MOUSE: P.I. For Hire, when the P.I. Office cleanup loop ends, and which rewards matter most for 100% completion before Jack Squat.",
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
          name: "Missable Side Job Rewards Guide",
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
      headline: "MOUSE: P.I. For Hire Missable Side Job Rewards Guide",
      description:
        "This guide explains which side job rewards are missable in MOUSE: P.I. For Hire, when the P.I. Office cleanup loop ends, and why Baseball Card, Prize Token, and Schematic rewards should be finished before Jack Squat.",
      inLanguage: "en",
      dateModified: "2026-04-17",
      about: [
        {
          "@type": "VideoGame",
          name: "MOUSE: P.I. For Hire",
        },
        {
          "@type": "Thing",
          name: "Side Jobs",
        },
        {
          "@type": "Thing",
          name: "Missable Rewards",
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
          name: "Schematics",
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
          title="MOUSE: P.I. For Hire Missable Side Job Rewards Guide"
          description="Need to know which side job rewards you can permanently lose in MOUSE: P.I. For Hire? This guide explains when side jobs lock out, which rewards matter most for 100% completion, and why Jack Squat is the real danger point."
          gameTitle="MOUSE: P.I. For Hire"
          gameHref="/mouse-p-i-for-hire"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 17, 2026"
          toc={[
            {
              id: "side-job-rewards-at-a-glance",
              label: "Side job rewards at a glance",
            },
            {
              id: "what-makes-side-job-rewards-missable",
              label: "What makes side job rewards missable",
            },
            {
              id: "how-side-jobs-start",
              label: "How side jobs start",
            },
            {
              id: "when-side-job-rewards-become-permanently-missable",
              label: "When side job rewards become permanently missable",
            },
            {
              id: "which-side-job-rewards-matter-most-for-100-percent",
              label: "Which side job rewards matter most for 100%",
            },
            {
              id: "known-side-job-rewards-at-launch",
              label: "Known side job rewards at launch",
            },
            {
              id: "known-bug-behind-the-nuts",
              label: "Known bug: Behind the Nuts",
            },
            {
              id: "what-you-should-finish-before-jack-squat",
              label: "What you should finish before Jack Squat",
            },
            {
              id: "best-save-strategy-for-side-job-cleanup",
              label: "Best save strategy for side-job cleanup",
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
              href: "/mouse-pi-for-hire/buy-back-guide",
              label: "Can You Buy Missed Collectibles Later?",
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
          <MissableSideJobRewardsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}