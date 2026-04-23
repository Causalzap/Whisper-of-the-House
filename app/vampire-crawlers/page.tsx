import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import VampireCrawlersHubContent from "@/data/vampire-crawlers/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/vampire-crawlers`;

export const metadata: Metadata = {
  title: "Vampire Crawlers Guide Hub: Best Beginner, Character Unlock, and Secret Character Guides",
  description:
    "Main Vampire Crawlers guide hub: start here for the best beginner character guide, the full character unlock guide, and the secret characters guide.",
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
          name: "Vampire Crawlers",
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
        "Vampire Crawlers Guide Hub: Best Beginner, Character Unlock, and Secret Character Guides",
      description:
        "This is the main Vampire Crawlers guide hub. Start here for the best beginner character guide, the full character unlock guide, and the launch-window secret characters guide.",
      image: [
        `${siteUrl}/images/vampire-crawlers/vampire-crawlers-cover.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-23",
      about: [
        {
          "@type": "VideoGame",
          name: "Vampire Crawlers",
        },
        {
          "@type": "Thing",
          name: "Character Unlocks",
        },
        {
          "@type": "Thing",
          name: "Best Beginner Characters",
        },
        {
          "@type": "Thing",
          name: "Secret Characters",
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
          title="Vampire Crawlers Guide Hub: Best Beginner, Character Unlock, and Secret Character Guides"
          description="Start here for the main Vampire Crawlers coverage: best characters for beginners, all characters unlock guide, and the launch-window secret characters guide."
          gameTitle="Vampire Crawlers"
          gameHref="/vampire-crawlers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 23, 2026"
          toc={[
            {
              id: "what-this-vampire-crawlers-guide-hub-covers",
              label: "What this hub covers",
            },
            {
              id: "start-here-best-vampire-crawlers-guides",
              label: "Best guides",
            },
            {
              id: "best-reading-order-for-new-players",
              label: "Best reading order",
            },
            {
              id: "what-to-read-if-you-care-about-specific-things",
              label: "What to read for specific goals",
            },
            {
              id: "current-vampire-crawlers-guide-coverage",
              label: "Current guide coverage",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/vampire-crawlers-best-characters-for-beginners",
              label: "Vampire Crawlers Best Characters for Beginners",
            },
            {
              href: "/vampire-crawlers-all-characters-unlock-guide",
              label: "Vampire Crawlers All Characters Unlock Guide",
            },
            {
              href: "/vampire-crawlers-secret-characters-how-to-unlock",
              label: "Vampire Crawlers Secret Characters How to Unlock",
            },
          ]}
        >
          <VampireCrawlersHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}