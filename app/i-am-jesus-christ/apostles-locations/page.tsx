import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import IAmJesusChristApostlesLocationsContent from "@/data/i-am-jesus-christ/apostles-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/i-am-jesus-christ/apostles-locations`;

export const metadata: Metadata = {
  title:
    "I Am Jesus Christ 12 Apostles Locations [Recruitment & Missables]",
  description:
    "Find all 12 apostles in I Am Jesus Christ. Get the complete recruitment order, map locations, story triggers, and tips to avoid missing any disciples.",
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
          name: "Apostles Locations",
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
        "I Am Jesus Christ 12 Apostles Locations: Recruitment Order, Triggers, and Missables",
      description:
        "This I Am Jesus Christ apostles guide covers first encounter zones, recruitment triggers, missable routes, best order, and the fastest follower-friendly setup for midgame progression.",
      image: [
        `${siteUrl}/images/i-am-jesus-christ/walkthrough/gather-apostles.webp`,
        `${siteUrl}/images/i-am-jesus-christ/walkthrough/thomas-riddles.webp`,
        `${siteUrl}/images/i-am-jesus-christ/walkthrough/20k-followers-gate.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-07",
      about: [
        { "@type": "VideoGame", name: "I Am Jesus Christ" },
        { "@type": "Thing", name: "Peter" },
        { "@type": "Thing", name: "Andrew" },
        { "@type": "Thing", name: "James" },
        { "@type": "Thing", name: "John" },
        { "@type": "Thing", name: "Philip" },
        { "@type": "Thing", name: "Bartholomew" },
        { "@type": "Thing", name: "Matthew" },
        { "@type": "Thing", name: "Thomas" },
        { "@type": "Thing", name: "Simon the Zealot" },
        { "@type": "Thing", name: "Judas Iscariot" },
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
          title="I Am Jesus Christ 12 Apostles Locations: Recruitment Order, Triggers, and Missables"
          description="Find all 12 apostles in I Am Jesus Christ with this full guide to first encounter zones, recruitment triggers, best order, missable apostles, and the fastest route through follower-heavy midgame progression."
          gameTitle="I Am Jesus Christ"
          gameHref="/i-am-jesus-christ"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 7, 2026"
          toc={[
            {
              id: "quick-apostles-overview",
              label: "Quick apostles overview",
            },
            {
              id: "how-apostle-recruitment-works",
              label: "How apostle recruitment works",
            },
            {
              id: "apostles-and-miracle-scenes",
              label: "Apostles and miracle scenes",
            },
            {
              id: "first-encounter-zones",
              label: "First encounter zones",
            },
            {
              id: "recruitment-triggers",
              label: "Recruitment triggers",
            },
            {
              id: "missable-apostles",
              label: "Most missable apostles",
            },
            {
              id: "best-recruitment-order",
              label: "Best recruitment order",
            },
            {
              id: "fastest-route-to-20000-followers",
              label: "Fastest route to 20,000 followers",
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
              href: "/i-am-jesus-christ/miracles-list",
              label: "I Am Jesus Christ miracles list: categories, uses, and system guide",
            },
            {
              href: "/i-am-jesus-christ/who-should-play",
              label: "Is I Am Jesus Christ worth it for Christians and non-Christians?",
            },
          ]}
        >
          <IAmJesusChristApostlesLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}