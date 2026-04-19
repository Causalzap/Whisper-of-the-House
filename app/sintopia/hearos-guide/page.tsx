import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SintopiaHearosGuideContent from "@/data/sintopia/hearos-guide.mdx";

const pageUrl =
  "https://www.whisperofthehouse.com/sintopia/hearos-guide";
const siteUrl = "https://www.whisperofthehouse.com";
const gameHubUrl = `${siteUrl}/sintopia`;

export const metadata: Metadata = {
  title: "How to Get Hearos in Sintopia",
  description:
    "Learn how to get more Hearos in Sintopia, why you are not earning enough, which upgrades to unlock first, and how Saints, Deviants, and routing affect Hearos income.",
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
        name: "Hearos Guide",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "How to Get Hearos in Sintopia",
    description:
      "Learn how to get more Hearos in Sintopia, why you are not earning enough, which upgrades to unlock first, and how Saints, Deviants, and routing affect Hearos income.",
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
          title="How to Get Hearos in Sintopia"
          description="This guide explains how Hearos work in Sintopia, why you may not be earning enough, which upgrades to unlock first, and how Saints, Deviants, and route efficiency affect your Hearos economy."
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
              id: "how-hearos-work-in-sintopia",
              label: "How Hearos work",
            },
            {
              id: "why-you-are-not-getting-enough-hearos",
              label: "Why you are not getting enough Hearos",
            },
            {
              id: "the-best-first-hearos-upgrades",
              label: "Best first Hearos upgrades",
            },
            {
              id: "souls-dispatcher-is-your-best-first-purchase",
              label: "Why Souls Dispatcher comes first",
            },
            {
              id: "first-class-tickets-is-better-than-it-looks",
              label: "Why First Class Tickets matters",
            },
            {
              id: "waiting-booth-and-attrition-warfare",
              label: "Waiting Booth and Attrition Warfare",
            },
            {
              id: "best-first-5-hearos-spending-order",
              label: "Best first 5 Hearos spending order",
            },
            {
              id: "saints-are-a-hearos-tax",
              label: "Saints are a Hearos tax",
            },
            {
              id: "deviants-hurt-hearos-even-when-you-are-not-farming-them",
              label: "How Deviants reduce Hearos income",
            },
            {
              id: "hellpet-show-and-total-hell-recall",
              label: "Hellpet Show and Total Hell Recall",
            },
            {
              id: "support-unlocks-vs-support-buildings",
              label: "Support unlocks vs support buildings",
            },
            {
              id: "campaign-vs-sandbox-hearos-priorities",
              label: "Campaign vs Sandbox priorities",
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
              href: "/sintopia/overworld-spells-cultists-demon-invasion-guide",
              label: "Sintopia Overworld Guide",
            },
            {
              href: "/sintopia/campaign-progression-hard-mode-guide",
              label: "Sintopia Campaign and Hard Mode Guide",
            },
          ]}
        >
          <SintopiaHearosGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}