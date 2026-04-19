import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SintopiaSaintsGuideContent from "@/data/sintopia/saints-guide.mdx";

const pageUrl =
  "https://www.whisperofthehouse.com/sintopia/saints-guide";
const siteUrl = "https://www.whisperofthehouse.com";
const gameHubUrl = `${siteUrl}/sintopia`;

export const metadata: Metadata = {
  title:
    "Sintopia Saints Guide: How to Deal With Saints, Holy Patience, Waiting Lines and Attrition Warfare",
  description:
    "Learn how Saints work in Sintopia, how Holy Patience breaks, when to route Saints out, when to break sainthood on purpose, and why Waiting Lines, Waiting Booths, Attrition Warfare, and Time Dilatator matter.",
  alternates: {
    canonical: pageUrl,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
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
        name: "Sintopia",
        item: gameHubUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Saints Guide",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline:
      "Sintopia Saints Guide: How to Deal With Saints, Holy Patience, Waiting Lines and Attrition Warfare",
    description:
      "Learn how Saints work in Sintopia, how Holy Patience breaks, when to route Saints out, when to break sainthood on purpose, and why Waiting Lines, Waiting Booths, Attrition Warfare, and Time Dilatator matter.",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: "en",
    datePublished: "2026-04-19",
    dateModified: "2026-04-19",
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Whisper of the House",
      url: siteUrl,
    },
    about: {
      "@type": "VideoGame",
      name: "Sintopia",
    },
    author: {
      "@type": "Organization",
      name: "Whisper of the House",
    },
    publisher: {
      "@type": "Organization",
      name: "Whisper of the House",
    },
  },
];

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
          title="Sintopia Saints Guide"
          description="This guide explains how Saints work in Sintopia, why Holy Patience matters, when to route Saints out, when to break sainthood on purpose, and how Waiting Lines, Waiting Booths, Attrition Warfare, and Time Dilatator fit into Saint handling."
          gameTitle="Sintopia"
          gameHref="/sintopia"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 19, 2026"
          toc={[
            {
              id: "quick-answer",
              label: "Quick answer",
            },
            {
              id: "what-saints-do-in-sintopia",
              label: "What Saints do",
            },
            {
              id: "why-saints-are-bad-for-your-hell-economy",
              label: "Why Saints are bad for your Hell economy",
            },
            {
              id: "how-holy-patience-works",
              label: "How Holy Patience works",
            },
            {
              id: "best-ways-to-deal-with-saints",
              label: "Best ways to deal with Saints",
            },
            {
              id: "waiting-lines-are-the-foundation-of-saint-handling",
              label: "Why Waiting Lines matter",
            },
            {
              id: "waiting-booth-makes-saint-lines-practical",
              label: "Why Waiting Booth matters",
            },
            {
              id: "when-to-route-saints-out-immediately",
              label: "When to route Saints out immediately",
            },
            {
              id: "when-to-break-sainthood-on-purpose",
              label: "When to break sainthood on purpose",
            },
            {
              id: "is-attrition-warfare-worth-it",
              label: "Is Attrition Warfare worth it",
            },
            {
              id: "saints-vs-hearos-what-actually-matters",
              label: "Saints vs Hearos",
            },
            {
              id: "best-saint-handling-in-campaign-vs-sandbox",
              label: "Campaign vs Sandbox",
            },
            {
              id: "how-this-fits-with-your-other-guides",
              label: "How this fits with your other guides",
            },
            {
              id: "faq",
              label: "FAQ",
            },
            {
              id: "final-verdict",
              label: "Final verdict",
            },
          ]}
          relatedLinks={[
            {
              href: "/sintopia",
              label: "Sintopia Guide Hub",
            },
            {
              href: "/sintopia/best-hell-layout-guide",
              label: "Sintopia Best Hell Layout Guide",
            },
            {
              href: "/sintopia/hearos-guide",
              label: "How to Get Hearos in Sintopia",
            },
            {
              href: "/sintopia/overworld-guide",
              label: "Sintopia Overworld Guide",
            },
          ]}
        >
          <SintopiaSaintsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}