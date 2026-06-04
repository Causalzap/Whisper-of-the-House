import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FinalBossTrueEndingContent from "@/data/realm-of-ink/final-boss-true-ending.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/realm-of-ink/final-boss-true-ending`;

const imageUrls = [
  `${siteUrl}/images/realm-of-ink/realm-of-ink-book-spirit-final-boss.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-story-relics-scroll.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-book-spirit-rift.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-book-spirit-after-clear.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-ink-god-fight.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-talisman-ending.webp`,
];

const toc = [
  { id: "spoiler-warning", label: "Spoiler warning" },
  { id: "route-overview", label: "Route overview" },
  { id: "story-relics", label: "Story Relics" },
  { id: "book-spirit-rift", label: "Reach Book Spirit" },
  { id: "book-spirit-guide", label: "Book Spirit guide" },
  { id: "after-book-spirit", label: "After Book Spirit" },
  { id: "ink-god", label: "Ink God tips" },
  { id: "best-builds-for-final-boss", label: "Best boss builds" },
  { id: "talisman-ending", label: "Talisman ending" },
  { id: "achievement-checklist", label: "Achievements" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "recommended-prep", label: "Prep checklist" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/realm-of-ink",
    label: "Realm of Ink Guide Hub",
  },
  {
    href: "/realm-of-ink/beginner-guide",
    label: "Realm of Ink Beginner Guide",
  },
  {
    href: "/realm-of-ink/best-builds",
    label: "Realm of Ink Best Builds Guide",
  },
  {
    href: "/realm-of-ink/oread-guide",
    label: "Realm of Ink Oread Guide",
  },
  {
    href: "/realm-of-ink/ink-gems-curios-guide",
    label: "Realm of Ink Ink Gems and Curios Guide",
  },
  {
    href: "/realm-of-ink/endless-rupture-guide",
    label: "Realm of Ink Endless and Rupture Guide",
  },
];

export const metadata: Metadata = {
  title: "Realm of Ink Final Boss & True Ending Guide",
  description:
    "Beat Realm of Ink Book Spirit and Ink God, unlock true ending progress, handle talisman choices, anchors, falling pages, and boss achievements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Realm of Ink Final Boss and True Ending Guide: Book Spirit, Ink God and Talisman",
    description:
      "Learn how to beat Book Spirit, handle falling pages and ink anchors, fight Ink God, unlock true ending progress, understand talisman choices, and plan Book Spirit achievements.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Realm of Ink Book Spirit final boss encounter with dialogue calling out the Book Spirit.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realm of Ink Final Boss and True Ending Guide",
    description:
      "Beat Book Spirit, handle Ink God, unlock true ending progress, understand talisman choices, and plan boss achievement clears.",
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
          name: "Realm of Ink Guide",
          item: `${siteUrl}/realm-of-ink`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Final Boss and True Ending Guide",
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
        "Realm of Ink Final Boss and True Ending Guide: Book Spirit, Ink God, Talisman Choices, Achievements and Boss Mechanics",
      description:
        "A player-focused Realm of Ink final boss and true ending guide for version 1.0. The guide explains how the Story Relics route leads to Book Spirit, how to handle Book Spirit mechanics such as falling pages and ink anchors, what happens after the first Book Spirit clear, how the true ending route begins opening, how to read talisman and different ending choices, how to fight Ink God with sun and moon punishment tells and wide bullet patterns, which builds work best for Book Spirit and Ink God, how to plan Book Spirit achievement clears by form or difficulty, and how to prepare for Dragon Hair Brush, Dissolution, Rupture, and endgame milestone attempts.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-04",
      dateModified: "2026-06-04",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Realm of Ink" },
        { "@type": "Thing", name: "Realm of Ink final boss" },
        { "@type": "Thing", name: "Realm of Ink true ending" },
        { "@type": "Thing", name: "Realm of Ink Book Spirit" },
        { "@type": "Thing", name: "Realm of Ink Ink God" },
        { "@type": "Thing", name: "Realm of Ink talisman ending" },
        { "@type": "Thing", name: "Realm of Ink Story Relics" },
        { "@type": "Thing", name: "Realm of Ink falling pages" },
        { "@type": "Thing", name: "Realm of Ink ink anchors" },
        { "@type": "Thing", name: "Realm of Ink Book Spirit achievements" },
        { "@type": "Thing", name: "Realm of Ink Dragon Hair Brush" },
        { "@type": "Thing", name: "Realm of Ink Dissolution" },
        { "@type": "Thing", name: "Realm of Ink Rupture" },
        { "@type": "Thing", name: "Realm of Ink Violeta build" },
        { "@type": "Thing", name: "Realm of Ink Oread build" },
        { "@type": "Thing", name: "Realm of Ink Red Crit build" },
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the final boss in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Book Spirit is the major final story boss route, while Ink God is also part of the late endgame boss structure depending on your route and progression.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock the true ending in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Defeat Book Spirit once through the Story Relics route. After the first Book Spirit clear, the true ending route starts opening.",
          },
        },
        {
          "@type": "Question",
          name: "How do I beat Book Spirit in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Watch for falling pages, destroy ink anchors before the arena shrinks too much, and bring a build with real boss damage. Do not treat the fight like a normal room-clear check.",
          },
        },
        {
          "@type": "Question",
          name: "What are ink anchors in the Book Spirit fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ink anchors are side objectives that can make the arena shrink if ignored. Destroy them quickly so you keep enough space to dodge.",
          },
        },
        {
          "@type": "Question",
          name: "Why are pages falling during Book Spirit?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Falling pages are arena hazards. Move first when they appear, then return to damage after the danger zone is clear.",
          },
        },
        {
          "@type": "Question",
          name: "How do I beat Ink God in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Save dash for sun and moon punishment tells and wide bullet patterns. Bring sustained boss damage, one defensive layer, and a build that still works after the first burst window.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Ink God so hard?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ink God punishes builds that only clear rooms well. You need boss damage, movement discipline, and enough defense to survive large punishment patterns.",
          },
        },
        {
          "@type": "Question",
          name: "What build should I use for Book Spirit?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Violeta Primordial Status and Curse and Oread Curse Butterfly and Laser are strong options because they keep pressure active during longer phases. Red Crit can work for earlier clears if your crit route is strong.",
          },
        },
        {
          "@type": "Question",
          name: "What build should I use for Ink God?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use a finished build with boss damage and defense. Violeta status and curse is the safest tested route here, while Oread curse laser can work if Power of Prayer and laser scaling are online.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the talisman option missing in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The talisman option can be tied to ending progress. If it is missing, finish available endings first, then return to check again.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose the talisman in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Choose it when you are ready to see a different ending path. If you are still avoiding spoilers, wait until you are done with your current ending route.",
          },
        },
        {
          "@type": "Question",
          name: "Are there Book Spirit achievements in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Book Spirit is tied to form-specific clears, difficulty clears, and high-end milestone goals depending on platform and version wording.",
          },
        },
        {
          "@type": "Question",
          name: "Can I fight Book Spirit again after the first clear?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Book Spirit can be challenged again after your first clear, which matters for form-specific clears, difficulty achievements, Dragon Hair Brush attempts, and later endgame goals.",
          },
        },
        {
          "@type": "Question",
          name: "How do I beat Book Spirit on Dragon Hair Brush?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bring stronger boss damage and at least one defensive layer. Dragon Hair Brush makes the fight less forgiving, so destroy anchors quickly and avoid falling pages before chasing damage.",
          },
        },
      ],
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
          title="Stuck on Book Spirit or the True Ending?"
          description="Beat Book Spirit by handling falling pages and ink anchors, prepare for Ink God, understand talisman choices, and plan repeat clears for achievements."
          gameTitle="Realm of Ink"
          gameHref="/realm-of-ink"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FinalBossTrueEndingContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
