import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterparkSimulatorCustomSlidesContent from "@/data/waterpark-simulator/custom-slides-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/waterpark-simulator`;
const pageUrl = `${hubUrl}/custom-slides-guide`;

const imageUrls = [
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-custom-slide-editor.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-custom-slide-research-branch.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-custom-slides-unlocked.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-custom-slide-uphill-test.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-custom-slide-park-route-plan.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-custom-slide-across-street-test.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator Custom Slides Guide: Build & Fix Routes",
  description:
    "Unlock Custom Slides, plan routes, control height and landings, fix overshoots, and build long slides without wasting cash in Waterpark Simulator.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Waterpark Simulator Custom Slides Guide",
    description:
      "Learn when to unlock Custom Slides, how to plan a working route, test height and landings, fix overshoots, and avoid wasting money on bad segments.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator Custom Slide editor showing route distance and placement controls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator Custom Slides Guide",
    description:
      "Build and troubleshoot Custom Slides with tested route, height, landing and cost decisions.",
    images: [imageUrls[0]],
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
          name: "Waterpark Simulator Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Custom Slides Guide",
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
        "Waterpark Simulator Custom Slides Guide: How to Build and Fix Routes",
      description:
        "A practical Waterpark Simulator Custom Slides guide covering the Research unlock, editor planning, route distance, uphill sections, landing choice, long-slide testing, overshoot fixes, construction cost, Advanced Custom Slides and the Slide Architect handoff.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-10",
      dateModified: "2026-08-10",
      about: [
        {
          "@type": "VideoGame",
          name: "Waterpark Simulator",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Custom Slides",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Custom Slide editor",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Custom Slide routes",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Custom Slide landing",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Advanced Custom Slides",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Slide Architect",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Hard Mode",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Beach Map",
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
          title="How I Build Custom Slides Without Wasting Money"
          description="Unlock the editor, choose the landing first, test a short route, fix height and overshoot problems, then extend the slide only after the basic design works."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={[
            {
              id: "how-to-unlock-custom-slides",
              label: "How to unlock Custom Slides",
            },
            {
              id: "when-to-build-custom-slides",
              label: "When to build one",
            },
            {
              id: "start-with-a-short-route",
              label: "Build the first route",
            },
            {
              id: "can-custom-slides-go-up",
              label: "Can slides go uphill?",
            },
            {
              id: "long-custom-slide",
              label: "Build around the park",
            },
            {
              id: "across-the-street",
              label: "Across-the-street test",
            },
            {
              id: "fix-overshoot",
              label: "Fix an overshoot",
            },
            {
              id: "choose-the-landing-first",
              label: "Choose the landing first",
            },
            {
              id: "custom-slide-cost",
              label: "Control segment cost",
            },
            {
              id: "advanced-custom-slides",
              label: "Advanced Custom Slides",
            },
            {
              id: "slide-architect",
              label: "Slide Architect",
            },
            {
              id: "custom-slide-not-working",
              label: "Troubleshooting",
            },
            {
              id: "final-takeaway",
              label: "My build rule",
            },
          ]}
          relatedLinks={[
            {
              href: "/waterpark-simulator",
              label: "Waterpark Simulator Guide Hub",
            },
            {
              href: "/waterpark-simulator/research-points",
              label: "Research Points & Unlock Order",
            },
            {
              href: "/waterpark-simulator/5-star-diamond-prestige-guide",
              label: "5-Star & Diamond Prestige Guide",
            },
            {
              href: "/waterpark-simulator/make-money",
              label: "Hard Mode Money Guide",
            },
            {
              href: "/waterpark-simulator/achievements-guide",
              label: "All 71 Achievements",
            },
          ]}
        >
          <WaterparkSimulatorCustomSlidesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}