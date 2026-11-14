
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SlotboundJesterContent from "@/data/slotbound/jester.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/slotbound`;
const pageUrl = `${hubUrl}/jester`;

const metadataTitle =
  "Slotbound Jester Guide: How to Unlock, Summon & Awaken";

const metadataDescription =
  "Summon Jester with three Jester Hats, Joker Seed, Wildcard, and Nudge. Compare Trickster, Illusionist, Ferret Tamer, Ringmaster, and Awakening.";

const articleTitle =
  "How Do You Unlock, Summon, and Awaken Jester in Slotbound?";

const articleDescription =
  "Make Jester Hat symbols appear, complete a three-hat winning line, use Joker Seed and Wildcard, choose between Illusionist and Ringmaster, and obtain two Jesters for Jester Troupe.";

const imageUrls = [
  `${siteUrl}/images/slotbound/slotbound-joker-seed-core.webp`,
  `${siteUrl}/images/slotbound/slotbound-black-note-core.webp`,
  `${siteUrl}/images/slotbound/slotbound-wild-card-core.webp`,
  `${siteUrl}/images/slotbound/slotbound-jester-hats-diagonal-line.webp`,
  `${siteUrl}/images/slotbound/slotbound-jester-two-faced-card.webp`,
  `${siteUrl}/images/slotbound/slotbound-jester-promotion-choices.webp`,
  `${siteUrl}/images/slotbound/slotbound-ringmaster-ferret-express.webp`,
  `${siteUrl}/images/slotbound/slotbound-ringmaster-first-awakening.webp`,
];

const socialImage =
  `${siteUrl}/images/slotbound/slotbound-jester-promotion-choices.webp`;

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
        url: socialImage,
        alt: "Slotbound Jester Class Promotion showing Trickster and Ferret Tamer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [socialImage],
  },
};

const toc = [
  { id: "unlock-jester", label: "Unlock Jester" },
  { id: "jester-cores", label: "Jester Hat Cores" },
  {
    id: "summon-jester",
    label: "Three Hats & Nudge",
  },
  {
    id: "jester-evolutions",
    label: "Jester Class Evolutions",
  },
  {
    id: "jester-awakening",
    label: "Jester Awakening",
  },
  {
    id: "two-jesters",
    label: "Two Jesters & Jester Troupe",
  },
];

const relatedLinks = [
  {
    href: "/slotbound",
    label: "Beginner Guide: Unlocks & First Steps",
  },
  {
    href: "/slotbound/cores",
    label: "Cores: Joker Seed, Wildcard & More",
  },
  {
    href: "/slotbound/builds",
    label: "Hard Mode Builds & Unit Evolutions",
  },
  {
    href: "/slotbound/achievements",
    label: "Jester Troupe & All 64 Achievements",
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
          name: "Slotbound",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Jester",
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
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-14",
      dateModified: "2026-11-14",
      about: [
        { "@type": "VideoGame", name: "Slotbound" },
        { "@type": "Thing", name: "Jester unit" },
        { "@type": "Thing", name: "Jester Hat winning lines" },
        { "@type": "Thing", name: "Joker Seed and Wildcard" },
        { "@type": "Thing", name: "Black Note and Torn Note" },
        { "@type": "Thing", name: "Two Faced Card" },
        { "@type": "Thing", name: "Trickster and Illusionist" },
        { "@type": "Thing", name: "Ferret Tamer and Ringmaster" },
        { "@type": "Thing", name: "Mass Charm and Ferret Express" },
        { "@type": "Thing", name: "Jester Awakening" },
        { "@type": "Thing", name: "Jester Troupe" },
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
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Slotbound"
          gameHref="/slotbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SlotboundJesterContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
