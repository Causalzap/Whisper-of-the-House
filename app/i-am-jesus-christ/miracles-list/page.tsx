import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import IAmJesusChristMiraclesListContent from "@/data/i-am-jesus-christ/miracles-list.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/i-am-jesus-christ/miracles-list`;

export const metadata: Metadata = {
  title: "I Am Jesus Christ Game: All Miracles List & Guide",
  description:
    "Master all miracles in the I Am Jesus Christ game! Guide covers Healing, Exorcism, Transformation, Resurrection, and managing your Holy Spirit bar.",
  
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
          name: "I Am Jesus Christ",
          item: `${siteUrl}/i-am-jesus-christ`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Miracles List",
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
        "I Am Jesus Christ Miracles List: Categories, Uses, and How the System Works",
      description:
        "This I Am Jesus Christ miracles guide explains the 4 major miracle categories—Transformation, Healing, Exorcism, and Resurrection—along with Holy Spirit, prayer, Divine Vision, and the most important story miracle scenes.",
      image: [
        `${siteUrl}/images/i-am-jesus-christ/wedding-at-cana.webp`,
        `${siteUrl}/images/i-am-jesus-christ/wilderness-satan.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-07",
      about: [
        {
          "@type": "VideoGame",
          name: "I Am Jesus Christ",
        },
        {
          "@type": "Thing",
          name: "Transformation",
        },
        {
          "@type": "Thing",
          name: "Healing",
        },
        {
          "@type": "Thing",
          name: "Exorcism",
        },
        {
          "@type": "Thing",
          name: "Resurrection",
        },
        {
          "@type": "Thing",
          name: "Holy Spirit",
        },
        {
          "@type": "Thing",
          name: "Divine Vision",
        },
        {
          "@type": "Thing",
          name: "Water into Wine",
        },
        {
          "@type": "Thing",
          name: "Feeding the 5,000",
        },
        {
          "@type": "Thing",
          name: "Walking on Water",
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
          title="I Am Jesus Christ Miracles List: Categories, Uses, and How the System Works"
          description="Learn how miracles actually work in I Am Jesus Christ. This guide covers the 4 major miracle categories—Transformation, Healing, Exorcism, and Resurrection—plus Holy Spirit, prayer, Divine Vision, and the biggest story miracle scenes."
          gameTitle="I Am Jesus Christ"
          gameHref="/i-am-jesus-christ"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 7, 2026"
          toc={[
            {
              id: "confirmed-miracles-list",
              label: "Confirmed miracles list",
            },
            {
              id: "how-the-miracle-system-works",
              label: "How the miracle system works",
            },
            {
              id: "holy-spirit-and-prayer",
              label: "Holy Spirit and prayer",
            },
            {
              id: "divine-vision",
              label: "Divine Vision",
            },
            {
              id: "transformation",
              label: "Transformation",
            },
            {
              id: "healing-miracles",
              label: "Healing miracles",
            },
            {
              id: "exorcism",
              label: "Exorcism",
            },
            {
              id: "resurrection",
              label: "Resurrection",
            },
            {
              id: "feeding-the-5000",
              label: "Feeding the 5,000",
            },
            {
              id: "walking-on-water-and-storm-miracles",
              label: "Walking on Water and storm miracles",
            },
            {
              id: "best-miracles-for-story-progression",
              label: "Best miracle categories for story progression",
            },
            {
              id: "best-miracles-for-followers-and-farming",
              label: "Best miracle categories for followers",
            },
            {
              id: "what-30-plus-miracles-probably-means",
              label: "What 30+ miracles probably means",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/i-am-jesus-christ",
              label: "I Am Jesus Christ Guide Hub",
            },
            {
              href: "/i-am-jesus-christ/walkthrough",
              label: "I Am Jesus Christ full walkthrough: story route and ending guide",
            },
            {
              href: "/i-am-jesus-christ/apostles-locations",
              label: "I Am Jesus Christ 12 apostles locations: full recruitment order and map guide",
            },
            {
              href: "//i-am-jesus-christ/who-should-play",
              label: "Is I Am Jesus Christ worth it for Christians and non-Christians?",
            },
          ]}
        >
          <IAmJesusChristMiraclesListContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}