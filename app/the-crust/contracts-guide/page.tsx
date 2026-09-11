import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustContractsGuideContent from "@/data/the-crust/contracts-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-crust/contracts-guide`;

const metadataTitle =
  "The Crust Contracts Guide – Market, Shipping & Destinations";

const metadataDescription =
  "Use contracts and the Online Market in The Crust, configure shipments correctly, avoid wrong destinations, and decide when a contract is worth taking.";

const articleDescription =
  "A complete The Crust Version 1.0 contracts and market guide covering the Landing Platform, Online Market, buying and selling resources, Active Contracts, Send Resources, capsule configuration, landing destinations, failed deliveries, and when contracts are worth prioritizing.";

const heroImage =
  `${siteUrl}/images/the-crust/the-crust-contract-send-resources.webp`;

const toc = [
  {
    id: "how-contracts-work",
    label: "How contracts work",
  },
  {
    id: "unlock-trading",
    label: "Unlock trading",
  },
  {
    id: "online-market",
    label: "Use the Online Market",
  },
  {
    id: "market-vs-contract",
    label: "Market vs contract",
  },
  {
    id: "contract-not-completing",
    label: "Contract not completing",
  },
  {
    id: "when-to-accept",
    label: "When to accept contracts",
  },
  {
    id: "buy-resources",
    label: "When to buy resources",
  },
  {
    id: "contract-rhythm",
    label: "Contract priority rhythm",
  },
];

const relatedLinks = [
  {
    href: "/the-crust/beginners-guide",
    label: "The Crust Beginner Guide",
  },
  {
    href: "/the-crust/hope-2-choice",
    label: "Hope-2 Choice Guide",
  },
  {
    href: "/the-crust/cargo-terminal",
    label: "Cargo Terminal & Rover LPS Guide",
  },
  {
    href: "/the-crust/achievements",
    label: "The Crust Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Contract logistics screen for sending resources in The Crust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadataTitle,
    description: articleDescription,
    image: [heroImage],
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    dateModified: "2026-09-11",
    author: {
      "@type": "Organization",
      name: "Whisper of the House",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Whisper of the House",
      url: siteUrl,
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
  },
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
        name: "The Crust",
        item: `${siteUrl}/the-crust`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contracts Guide",
        item: pageUrl,
      },
    ],
  },
];

export default function Page() {
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
          title="The Crust Contracts Guide – Market, Shipping & Destinations"
          description="Unlock trading, use the Online Market without starving your factory, configure contract shipments correctly, and fix the common wrong-destination problem before producing another batch."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/the-crust"
          breadcrumbBaseLabel="The Crust"
          updatedAt="September 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheCrustContractsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}