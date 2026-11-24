
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import StellarisForceOfWillContent from "@/data/stellaris-willpower/force-of-will.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/stellaris-willpower`;
const pageUrl = `${hubUrl}/force-of-will`;

const metadataTitle =
  "Stellaris Force of Will Guide: Stages, Willpower & Utopia Victory";

const metadataDescription =
  "Unlock Force of Will in Stellaris, earn Willpower, advance all five Ambition stages, use Cultural Envoys, and complete the Utopia victory.";

const articleTitle =
  "How Do You Unlock and Win Force of Will in Stellaris?";

const articleDescription =
  "Meet the Ascension Perk requirements, earn Willpower, progress through five stages, convert foreign Pops, and satisfy the final Utopia conditions.";

const imageUrl =
  `${siteUrl}/images/stellaris-willpower/willpower-force-of-will-victory.webp`;

const toc = [
  { id: "force-of-will-unlock", label: "Unlock Force of Will" },
  { id: "willpower-currency", label: "Earn Willpower Faster" },
  { id: "ambition-stages", label: "All Five Ambition Stages" },
  { id: "absolute-ethic", label: "Absolute Ethic Requirement" },
  { id: "doctrinal-proxy", label: "Doctrinal Proxy Subjects" },
  { id: "ideological-subjugation", label: "Impose Ideological Subjugation" },
  { id: "cultural-envoys", label: "Cultural Envoys & Conversion" },
  { id: "fourth-tenet", label: "Unlock the Fourth Tenet" },
  { id: "fleet-conversion", label: "Convert Enemy Fleets" },
  { id: "fallen-empires", label: "Fallen Empire Opposition" },
  { id: "victory", label: "Utopia Victory Requirements" },
  { id: "best-strategy", label: "Willpower vs Pop Conversion" },
  { id: "troubleshooting", label: "Fix Ambition Progression" },
  { id: "next-step", label: "Choose Your Next Objective" },
];

const relatedLinks = [
    {
      href: "/stellaris-willpower",
      label: "Stellaris Willpower Guide: Origins, Civics & Progression",
    },
    {
      href: "/stellaris-willpower/ideologies",
      label: "Ideologies: Reach, Strength, Momentum & Adoption",
    },
    {
      href: "/stellaris-willpower/tenets",
      label: "All 95 Tenets: Intensities, Effects & Rerolls",
    },
  ];
  
export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: imageUrl,
        alt: "Stellaris Force of Will Utopia stage showing Unification victory requirements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrl],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
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
          name: "Stellaris: Willpower",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Force of Will",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      isPartOf: { "@id": `${siteUrl}/#website` },
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      dateModified: "2026-11-24",
      image: [imageUrl],
      about: {
        "@type": "VideoGame",
        name: "Stellaris: Willpower",
      },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
  ],
};

export default function StellarisForceOfWillPage() {
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Stellaris: Willpower"
          gameHref="/stellaris-willpower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <StellarisForceOfWillContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
