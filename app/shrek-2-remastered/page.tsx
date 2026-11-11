import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Shrek2RemasteredWalkthroughContent from "@/data/shrek-2-remastered/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/shrek-2-remastered`;

const metadataTitle =
  "Shrek 2 Remastered Walkthrough: All 11 Chapters & Bosses";

const metadataDescription =
  "Complete all 11 Shrek 2 Remastered chapters, solve character puzzles, finish King Harold's six tasks, defeat the bosses, and find Crazy Larry upgrades.";

const articleDescription =
  "Complete Shrek 2 Remastered from Shrek's Swamp through Final Fight. Rescue the dwarves and blind mice, finish King Harold's six Far Far Away tasks, defeat Puss in Boots, escort the goats, help the Three Little Pigs, enter Fairy Godmother's potion factory, escape the prison, cross The Mines, guide Mongo with Gingerbread Man's cookies, and win the final ballroom battle. Find Crazy Larry's shops, learn each character's abilities, and replay chapters from the Storybook.";

const imageUrls = [
  `${siteUrl}/images/shrek-2-remastered/shrek-2-remastered-fiona-slow-time.webp`,
  `${siteUrl}/images/shrek-2-remastered/shrek-2-remastered-donkey-tombstone-bridge.webp`,
  `${siteUrl}/images/shrek-2-remastered/shrek-2-remastered-mongo-cookie-target.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        alt: "Mongo smashing a police wagon after Gingerbread Man places a cookie beside it in Shrek 2 Remastered",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[2]],
  },
};

const toc = [
  { id: "chapter-order", label: "All 11 Chapters" },
  { id: "character-abilities", label: "Character Abilities" },
  { id: "shreks-swamp", label: "1. Shrek's Swamp" },
  { id: "spooky-forest", label: "2. Spooky Forest" },
  { id: "far-far-away", label: "3. Far Far Away" },
  { id: "ogre-killer", label: "4. Ogre Killer" },
  { id: "walking-the-path", label: "5. Walking the Path" },
  { id: "jack-and-jills-farm", label: "6. Jack and Jill's Farm" },
  { id: "fairy-godmothers", label: "7. Fairy Godmother's" },
  { id: "prison-break", label: "8. Prison Break" },
  { id: "the-mines", label: "9. The Mines" },
  { id: "cookie-cookie", label: "10. Cookie Cookie" },
  { id: "final-fight", label: "11. Final Fight" },
  { id: "crazy-larry-upgrades", label: "Crazy Larry Upgrades" },
  { id: "snapshots-and-chapter-select", label: "Replay Chapters" },
  { id: "after-final-fight", label: "After Final Fight" },
];

const relatedLinks = [
  {
    href: "/shrek-2-remastered/achievements",
    label: "Shrek 2 Remastered Achievements: All 45 & Platinum Checklist",
  },
];

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
          name: "Shrek 2 Remastered",
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
      headline: metadataTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-11",
      dateModified: "2026-11-11",
      about: [
        { "@type": "VideoGame", name: "Shrek 2 Remastered" },
        { "@type": "Thing", name: "Shrek 2 Remastered chapter walkthrough" },
        { "@type": "Thing", name: "Character abilities and obstacles" },
        { "@type": "Thing", name: "King Harold's Far Far Away tasks" },
        { "@type": "Thing", name: "Crazy Larry's upgrades" },
        { "@type": "Thing", name: "Fairy Godmother final battle" },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="Shrek 2 Remastered Walkthrough: All 11 Chapters & Bosses"
          description="Follow Shrek from the swamp to the final ballroom battle, solve character puzzles, complete King Harold's tasks, and find Crazy Larry's upgrades."
          gameTitle="Shrek 2 Remastered"
          gameHref="/shrek-2-remastered"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Shrek2RemasteredWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
