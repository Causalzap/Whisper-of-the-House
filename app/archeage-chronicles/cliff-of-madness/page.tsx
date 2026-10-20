
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CliffOfMadnessContent from "@/data/archeage-chronicles/cliff-of-madness.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/archeage-chronicles`;
const pageUrl = `${hubUrl}/cliff-of-madness`;

const metadataTitle =
  "How to Complete Cliff of Madness in ArcheAge Chronicles";

const metadataDescription =
  "Complete Cliff of Madness by finishing Missing Husband, finding the underwater Prison Key, firing the cannon, and defeating Mad Anchor Krogal.";

const articleDescription =
  "Enter Cliff of Madness after Missing Husband, find the Prison Key underwater, breach the gate with the cannon, and beat Mad Anchor Krogal.";

const imageUrls = [
  `${siteUrl}/images/archeage-chronicles/cliff-of-madness-missing-husband-requirement.webp`,
  `${siteUrl}/images/archeage-chronicles/cliff-of-madness-prison-key-underwater.webp`,
  `${siteUrl}/images/archeage-chronicles/cliff-of-madness-cannon-gate.webp`,
  `${siteUrl}/images/archeage-chronicles/cliff-of-madness-mad-anchor-kro.webp`,
];

const toc = [
  {
    id: "unlock-cliff-of-madness",
    label: "Missing Husband Requirement",
  },
  {
    id: "prison-rescue",
    label: "Prison Key & Rescue",
  },
  {
    id: "cannon-gate",
    label: "Cannon & Fortress Gate",
  },
  {
    id: "mad-anchor-kro",
    label: "Mad Anchor Krogal",
  },
  {
    id: "after-mad-anchor",
    label: "After Krogal",
  },
  {
    id: "treasure-map",
    label: "Treasure Map & Chest",
  },
];

const relatedLinks = [
  {
    href: "/archeage-chronicles",
    label: "Demo Walkthrough",
  },
  {
    href: "/archeage-chronicles/throne-of-hinnon",
    label: "Throne of Hinnon: Key & Helkum",
  },
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
    images: imageUrls.map((url) => ({
      url,
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

export default function ArcheAgeChroniclesCliffOfMadnessPage() {
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
            name: "ArcheAge Chronicles",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Cliff of Madness",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "How Do You Complete Cliff of Madness in ArcheAge Chronicles?",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-20",
        dateModified: "2026-10-20",
        author: {
          "@type": "Organization",
          name: "Whisper of the House",
          url: siteUrl,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How Do You Complete Cliff of Madness in ArcheAge Chronicles?"
          description={articleDescription}
          gameTitle="ArcheAge Chronicles"
          gameHref="/archeage-chronicles"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CliffOfMadnessContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
