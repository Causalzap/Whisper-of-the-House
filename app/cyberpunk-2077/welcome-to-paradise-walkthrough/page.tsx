
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WelcomeToParadiseContent from "@/data/cyberpunk-2077/welcome-to-paradise-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/cyberpunk-2077`;
const pageUrl = `${hubUrl}/welcome-to-paradise-walkthrough`;

const metadataTitle =
  "Cyberpunk 2077 Welcome to Paradise Walkthrough";

const metadataDescription =
  "Follow nine Night Corp stops, decrypt the Identity Cache, find Haze beneath the Kabuki bridge, and decide whether to give Aera the shard.";

const articleDescription =
  "Complete the Welcome to Paradise side job by finding Haze's hidden shard, following Richard Night's nine-stop tour, decrypting the NC Revitalization Project Identity Cache, investigating the red Caliburn clue, and resolving Aera's final choice.";

const imageUrls = [
  `${siteUrl}/images/cyberpunk-2077/welcome-to-paradise-hidden-shard.webp`,
  `${siteUrl}/images/cyberpunk-2077/welcome-to-paradise-night-corp-approach.webp`,
  `${siteUrl}/images/cyberpunk-2077/welcome-to-paradise-identity-cache-clue.webp`,
  `${siteUrl}/images/cyberpunk-2077/welcome-to-paradise-kabuki-bridge.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "unlock",
    label: "Unlock Welcome to Paradise",
  },
  {
    id: "hidden-shard",
    label: "Find Haze's shard",
  },
  {
    id: "night-corp-tower",
    label: "Night Corp Tower",
  },
  {
    id: "city-tour",
    label: "Tour stops 2–6",
  },
  {
    id: "decrypt",
    label: "Decrypt Identity Cache",
  },
  {
    id: "dam-med-center",
    label: "Dam & Med Center",
  },
  {
    id: "red-caliburn",
    label: "Red Caliburn clue",
  },
  {
    id: "kabuki",
    label: "Find Haze in Kabuki",
  },
  {
    id: "aera-choice",
    label: "Give Aera the shard?",
  },
];

const relatedLinks = [
  {
    href: "/cyberpunk-2077",
    label: "Cyberpunk 2077 Update 2.5",
  },
  {
    href: "/cyberpunk-2077/clampdown-walkthrough",
    label: "Clampdown Walkthrough",
  },
  {
    href: "/cyberpunk-2077/dual-wield",
    label: "Double Trouble & Dual Wielding",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "Cyberpunk 2077",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Welcome to Paradise",
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
      url: pageUrl,
      headline:
        "Cyberpunk 2077 Welcome to Paradise Walkthrough and Final Choices",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-23",
      dateModified: "2026-10-23",
      about: [
        {
          "@type": "VideoGame",
          name: "Cyberpunk 2077",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Welcome to Paradise side job",
        },
        {
          "@type": "Thing",
          name: "Haze and Aera investigation",
        },
        {
          "@type": "Thing",
          name: "Night Corp Tower guided tour",
        },
        {
          "@type": "Thing",
          name: "NC Revitalization Project Identity Cache",
        },
        {
          "@type": "Thing",
          name: "Red Caliburn clue",
        },
        {
          "@type": "Thing",
          name: "Kabuki bridge investigation",
        },
        {
          "@type": "Thing",
          name: "Aera shard decision",
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
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}#organization`,
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Cyberpunk 2077 Welcome to Paradise Walkthrough & Choices"
          description="Find Haze's hidden shard, complete the nine Night Corp tour stops, decrypt the investor's Identity Cache, and decide what to tell Aera after the Kabuki investigation."
          gameTitle="Cyberpunk 2077"
          gameHref="/cyberpunk-2077"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WelcomeToParadiseContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
