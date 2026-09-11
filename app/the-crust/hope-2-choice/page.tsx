import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustHope2ChoiceContent from "@/data/the-crust/hope-2-choice.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-crust/hope-2-choice`;

const metadataTitle =
  "The Crust Hope-2 Choice Guide – Rescue or FASM?";

const metadataDescription =
  "Choose between the Hope-2 rescue route and FASM in The Crust, with the Living Quarters, funding, production, and Rover consequences explained.";

const articleDescription =
  "A The Crust Version 1.0 Hope-2 choice guide explaining the tradeoff between accepting CRUST's rescue proposal and preserving the FASM contract, including Living Quarters, delayed industrial development, the upfront payment, Rover Scout progression, and what to prepare before committing to the rescue route.";

const heroImage =
  `${siteUrl}/images/the-crust/the-crust-hope-2-choice.webp`;

const toc = [
  {
    id: "hope-2-or-fasm",
    label: "Hope-2 or FASM?",
  },
  {
    id: "accepting-crust",
    label: "What accepting CRUST changes",
  },
  {
    id: "fasm-tradeoff",
    label: "What you give up",
  },
  {
    id: "before-choosing",
    label: "What to prepare first",
  },
  {
    id: "after-accepting",
    label: "What happens after accepting",
  },
  {
    id: "route-commitment",
    label: "Treat it as a route commitment",
  },
];

const relatedLinks = [
  {
    href: "/the-crust/living-quarters",
    label: "Living Quarters Guide",
  },
  {
    href: "/the-crust/cargo-terminal",
    label: "Cargo Terminal & Rover LPS Guide",
  },
  {
    href: "/the-crust/beginners-guide",
    label: "The Crust Beginner Guide",
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
        alt: "Hope-2 rescue choice between CRUST and the FASM contract in The Crust",
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
        name: "Hope-2 Choice",
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
          title="The Crust Hope-2 Choice Guide – Rescue or FASM?"
          description="Decide whether to join the Hope-2 rescue route or preserve the FASM opportunity, and see how the choice changes Living Quarters, funding, industrial priorities, and Rover progression."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/the-crust"
          breadcrumbBaseLabel="The Crust"
          updatedAt="September 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheCrustHope2ChoiceContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}