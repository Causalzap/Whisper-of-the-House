import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SouthBayLampContent from "@/data/sovereign-tower/south-bay-lamp.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sovereign-tower`;
const pageUrl = `${hubUrl}/south-bay-lamp`;

const metadataTitle =
  "Sovereign Tower South Bay Lamp Guide: Yannis & Ligia";

const metadataDescription =
  "Find the Wish-Granting Lamp, solve Djinn Island and the auction, save Yannis, or recover South Bay through Ligia's political-instability route.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-south-bay-lamp-investigation-options.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-south-bay-lamp-island-expedition.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-south-bay-lamp-stolen.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-south-bay-lamp-auction.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-south-bay-wish-granting-lamp.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-south-bay-yannis-alliance.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-south-bay-political-instabilities.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-ligia-round-table-recruit.webp`,
];

const toc = [
  {
    id: "south-bay-route",
    label: "South Bay Lamp route",
  },
  {
    id: "ligia-request",
    label: "Ligia's request",
  },
  {
    id: "tower-library",
    label: "Tower Library",
  },
  {
    id: "djinn-island",
    label: "Djinn Island",
  },
  {
    id: "lamp-missing",
    label: "Lamp missing from island",
  },
  {
    id: "lamp-auction",
    label: "Lamp auction",
  },
  {
    id: "wish-granting-lamp",
    label: "Wish-Granting Lamp",
  },
  {
    id: "yannis-survives",
    label: "Save Yannis",
  },
  {
    id: "if-yannis-dies",
    label: "If Yannis dies",
  },
  {
    id: "south-bay-alliance",
    label: "South Bay alliance",
  },
  {
    id: "recruit-ligia",
    label: "Recruit Ligia",
  },
  {
    id: "south-bay-stuck",
    label: "South Bay troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/sovereign-tower",
    label: "Sovereign Tower Guide Hub",
  },
  {
    href: "/sovereign-tower/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/sovereign-tower/king-slayer",
    label: "King Slayer Guide",
  },
  {
    href: "/sovereign-tower/gwendan-questline",
    label: "Gwendan Questline Guide",
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
    title: "Sovereign Tower South Bay Lamp Guide",
    description:
      "Follow Ligia's Lamp route through the Tower Library, Djinn Island and the auction, save Yannis for the clean outcome, or stabilize South Bay if he dies.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "South Bay Wish-Granting Lamp investigation options in Sovereign Tower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower South Bay Lamp Guide",
    description:
      "Find the Lamp, save Yannis, recruit Ligia, or recover the South Bay alliance after the bad family outcome.",
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
          name: "Sovereign Tower Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "South Bay Lamp Guide",
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
        "Sovereign Tower South Bay Lamp Guide: Djinn Island, Yannis, Ligia, and the Alliance",
      description:
        "A player-focused Sovereign Tower South Bay guide covering Ligia's Wish-Granting Lamp request, the three-cycle investigation deadline, why I use the Tower Library when Wit fits my roster better than Charisma, the zero-Damage-Risk Library route, the three-duration two-Knight Djinn Island expedition, why the Lamp being stolen is normal progression, how I recover it through the auction, how the clean route saves Yannis and secures South Bay, what happens if Yannis dies, how South Bay political instabilities can still restore the county alliance, and the confirmed route where Ligia later asks to join the Round Table.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-09",
      dateModified: "2026-08-09",
      articleSection: "Sovereign Tower Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Sovereign Tower",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower South Bay",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Wish-Granting Lamp",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Legendary Lamp",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Djinn Island",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Lamp auction",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Yannis",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower save Yannis",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Yannis dies",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Ligia",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower recruit Ligia",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower South Bay political instabilities",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower South Bay alliance",
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
  ],
};

export default function Page() {
  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Find the South Bay Lamp and Recover the Route Even If Yannis Dies"
          description="Follow the Tower Library and Djinn Island clues, recover the Lamp at the auction for the clean Yannis outcome, or stabilize Ligia's rule if South Bay falls into political unrest."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SouthBayLampContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}