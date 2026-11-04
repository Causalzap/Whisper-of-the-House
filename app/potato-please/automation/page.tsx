import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PotatoPleaseAutomationContent from "@/data/potato-please/automation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/potato-please`;
const pageUrl = `${hubUrl}/automation`;

const metadataTitle = "Potato Please Automation Guide: Best Upgrades & Machines";
const metadataDescription =
  "Unlock the Auto Peel Machine, Sack Gantry, Cableway, Claw Crane, Autopilot, and Potato Vacuum, with upgrade costs and fixes for stalled production.";

const articleTitle = "How Do You Unlock and Upgrade Automation in Potato Please?";
const articleDescription =
  "Compare knife and machine upgrades, operate the Sack Gantry and Cableway, unlock the Claw Crane and Autopilot, and fix processing bottlenecks in Potato Please.";

const imageFilenames = [
  "potato-please-sack-cableway-loading.webp",
  "potato-please-claw-crane-autopilot.webp",
  "potato-please-potato-vacuum.webp",
];
const imageUrls = imageFilenames.map(
  (file) => `${siteUrl}/images/potato-please/${file}`,
);

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Sack Cableway loading area for transporting potato sacks in Potato Please",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "best-upgrade-order", label: "Best Upgrade Order" },
  { id: "knife-skills", label: "Knives & Journal Skills" },
  { id: "kitchen-table", label: "Kitchen Table & Crank Machine" },
  { id: "auto-peel-machine", label: "Auto Peel Machine & Overclock" },
  { id: "sack-gantry", label: "Sack Gantry" },
  { id: "sack-cableway", label: "Sack Cableway" },
  { id: "claw-crane", label: "Claw Crane & Autopilot" },
  { id: "potato-vacuum", label: "Potato Vacuum" },
  { id: "automation-problems", label: "Automation Not Working?" },
  { id: "late-game-upgrades", label: "Late-Game Upgrades" },
];

const relatedLinks = [
  { href: "/potato-please", label: "Progression: First Shift, Storm & Final Quota" },
  { href: "/potato-please/endings", label: "All Endings: Golden Key & Train Destinations" },
  { href: "/potato-please/achievements", label: "All 20 Achievements & Checklist" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Potato Please", item: hubUrl },
        { "@type": "ListItem", position: 3, name: "Unlock and Upgrade Automation", item: pageUrl },
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
      datePublished: "2026-11-04",
      dateModified: "2026-11-04",
      about: [
        { "@type": "VideoGame", name: "Potato Please" },
        { "@type": "Thing", name: "Knife and Journal skill upgrades" },
        { "@type": "Thing", name: "Crank and automated peeling machines" },
        { "@type": "Thing", name: "Sack transport and Cableway" },
        { "@type": "Thing", name: "Claw Crane and Crane Autopilot" },
        { "@type": "Thing", name: "Potato Vacuum and production bottlenecks" },
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
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
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
          title={articleTitle}
          description="Choose your next knife or machine upgrade, set up sack transport, use Crane Autopilot and the Potato Vacuum, and get stalled production moving again."
          gameTitle="Potato Please"
          gameHref="/potato-please"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PotatoPleaseAutomationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
