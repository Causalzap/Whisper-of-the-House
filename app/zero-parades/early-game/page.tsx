import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EarlyGameContent from "@/data/zero-parades/early-game.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/zero-parades/early-game`;

const imageUrls = [
  `${siteUrl}/images/zero-parades/zero-parades-pseudopod-safe-house.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-purchase-order-bootleg-bazaar.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-red-disc-stereo.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-half-cipher-trousers.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-rosetta-cipher-cigarettes.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-constance-bootleg-bazaar-lead.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-bootleg-bazaar-entrance.webp`,
];

const toc = [
  { id: "early-game-overview", label: "Overview" },
  { id: "opening-route", label: "Opening Route" },
  { id: "inspect-pseudopod", label: "Pseudopod" },
  { id: "find-purchase-order", label: "Purchase Order" },
  { id: "red-disc", label: "Red Disc" },
  { id: "phone-call", label: "Phone Call" },
  { id: "half-cipher", label: "Half Cipher" },
  { id: "rosetta-cipher", label: "Rosetta Cipher" },
  { id: "opening-clue-checklist", label: "Clue Checklist" },
  { id: "if-you-are-stuck", label: "Troubleshooting" },
  { id: "talk-to-constance", label: "Constance" },
  { id: "go-to-bootleg-bazaar", label: "Reach Bazaar" },
  { id: "what-to-do-in-bootleg-bazaar", label: "Inside Bazaar" },
  { id: "safe-choices", label: "Safe Choices" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/zero-parades", label: "ZERO PARADES Guide" },
  { href: "/zero-parades/best-build", label: "ZERO PARADES Best Build Guide" },
  { href: "/zero-parades/stress-exertion", label: "ZERO PARADES Stress and Exertion Guide" },
  { href: "/zero-parades/conditioning", label: "ZERO PARADES Conditioning Guide" },
  { href: "/zero-parades/disco-elysium-guide", label: "ZERO PARADES Guide for Disco Elysium Players" },
];

export const metadata: Metadata = {
    title: "ZERO PARADES Early Game: Red Disc, Cipher & Bazaar",
    description:
      "Follow Pseudopod clues to the purchase order, red disc, half cipher, Rosetta cipher, Constance, Carmuna, and what to do in Bootleg Bazaar.",
    
      alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "ZERO PARADES Early Game: Pseudopod, Red Disc, Cipher",
    description:
      "Follow the ZERO PARADES opening route from Pseudopod and the safe house to the purchase order, red disc, ciphers, Constance, Carmuna, and Bootleg Bazaar.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Pseudopod sitting incapacitated in the safe house during the opening of ZERO PARADES.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZERO PARADES Early Game: Red Disc, Cipher, Bazaar",
    description:
      "Opening route for Pseudopod, purchase order, red disc, ciphers, Constance, Carmuna, and Bootleg Bazaar.",
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
          name: "ZERO PARADES Guide",
          item: `${siteUrl}/zero-parades`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ZERO PARADES Early Game",
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
        "ZERO PARADES: For Dead Spies Early Game Walkthrough: Pseudopod, Red Disc, Cipher, Constance, Carmuna and Bootleg Bazaar",
      description:
        "A spoiler-light ZERO PARADES: For Dead Spies early game walkthrough covering the opening safe house investigation, Pseudopod, the sock purchase order, red disc, half cipher, Rosetta cipher, Constance, Carmuna, Bootleg Bazaar, what to do first inside the Bazaar, and common early-game troubleshooting for players who cannot find key clues.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-22",
      dateModified: "2026-05-22",
      about: [
        {
          "@type": "VideoGame",
          name: "ZERO PARADES: For Dead Spies",
        },
        { "@type": "Thing", name: "ZERO PARADES early game" },
        { "@type": "Thing", name: "ZERO PARADES walkthrough" },
        { "@type": "Thing", name: "Pseudopod" },
        { "@type": "Thing", name: "purchase order" },
        { "@type": "Thing", name: "red disc" },
        { "@type": "Thing", name: "half cipher" },
        { "@type": "Thing", name: "Rosetta cipher" },
        { "@type": "Thing", name: "Constance" },
        { "@type": "Thing", name: "Carmuna" },
        { "@type": "Thing", name: "Bootleg Bazaar" },
        { "@type": "Thing", name: "Boatman" },
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
          name: "What should I do first in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Inspect Pseudopod and search the safe house before leaving. You want the purchase order, red disc, half cipher, Rosetta cipher, and the Bootleg Bazaar lead.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the purchase order in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The purchase order is inside Pseudopod's jacket. It points toward Carmuna and Bootleg Bazaar.",
          },
        },
        {
          "@type": "Question",
          name: "What do I do with the red disc in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Inspect the stereo, play the red disc, then take it with you. You do not fully solve it in the safe house, but it is an important media-related loose end.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the half cipher in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The half cipher is hidden in the bathroom trousers. Check the small extra pocket to find it.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Rosetta cipher in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Rosetta cipher is hidden in the cigarette pack near the desk. Search the desk area before leaving the safe house.",
          },
        },
        {
          "@type": "Question",
          name: "Should I leave after the phone call in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not immediately. The phone call pushes you to leave, but the safe house still has important clues. Finish the room first.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I go after the safe house in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Talk to Constance downstairs, then follow the Bootleg Bazaar lead toward the old Esilk factory.",
          },
        },
        {
          "@type": "Question",
          name: "Who do I talk to first in Bootleg Bazaar?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Find Carmuna or Manina Carmuna first. The purchase order from Pseudopod's jacket points to her fashion and garment business, so she is your first real Bazaar contact.",
          },
        },
        {
          "@type": "Question",
          name: "Does the red disc matter in Bootleg Bazaar?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The red disc is still important, but it is not the strongest first conversation hook. Start with the purchase order and Carmuna, then keep the red disc in mind as a media or bootleg-related lead.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I go after Carmuna?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow the next lead she gives you. If the route points toward the west docks or a Boatman, go there next.",
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
          title="ZERO PARADES Early Game: Pseudopod, Red Disc, Cipher, and Bazaar"
          description="Find every important safe house clue, follow the purchase order to Bootleg Bazaar, and know who to talk to once you get there."
          gameTitle="ZERO PARADES: For Dead Spies"
          gameHref="/zero-parades"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EarlyGameContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}