
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CrackEndingsContent from "@/data/crack/endings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/crack`;
const pageUrl = `${hubUrl}/endings`;

const metadataTitle =
  "CRACK Endings: How to Get Both Endings & Secret Exit";

const metadataDescription =
  "Get both CRACK endings: deliver the chicken to Hatch Corp or find the boarded KEEP OUT door, dig to the hidden exit, and set the specimen free.";

const articleDescription =
  "Find both CRACK endings after releasing the chicken from the containment sack. Complete the company's normal delivery through the Holding Chamber, or open the boarded KEEP OUT entrance in the Break Room, excavate the concealed passage, and bring the living specimen to the chicken-marked exit. Understand the two outcomes and the conditions for reaching them.";

const imageUrls = [
  `${siteUrl}/images/crack/crack-ending-holding-chamber.webp`,
  `${siteUrl}/images/crack/crack-ending-do-not-enter-door.webp`,
  `${siteUrl}/images/crack/crack-ending-free-range.webp`,
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
    description:
      "Reach Ending 1/2 or Ending 2/2 in CRACK, including the Holding Chamber, boarded KEEP OUT door, and hidden chicken exit.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        alt: "CRACK boarded KEEP OUT door leading to the secret specimen escape route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Find the secret passage, carry the chicken to the correct exit, and unlock both CRACK endings.",
    images: [imageUrls[1]],
  },
};

const toc = [
  {
    id: "ending-choices",
    label: "Where the Endings Split",
  },
  {
    id: "ending-one",
    label: "Ending 1/2: Deliver the Specimen",
  },
  {
    id: "secret-passage",
    label: "Secret Passage Location",
  },
  {
    id: "ending-two",
    label: "Ending 2/2: Free the Specimen",
  },
  {
    id: "both-endings",
    label: "Can You Get Both Endings?",
  },
];

const relatedLinks = [
  {
    href: "/crack/walkthrough",
    label: "CRACK Walkthrough: Containment Plating & Specimen",
  },
  {
    href: "/crack/redacted-door-code",
    label: "CRACK Redacted Door: UV Flashlight & Code",
  },
  {
    href: "/crack/achievements",
    label: "CRACK: All 40 Achievements & 100% Checklist",
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
          name: "CRACK",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Endings",
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
        "CRACK Endings: How to Get Both Endings and Find the Secret Exit",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-27",
      dateModified: "2026-10-27",
      about: [
        {
          "@type": "VideoGame",
          name: "CRACK",
        },
        {
          "@type": "Thing",
          name: "CRACK Ending 1/2",
        },
        {
          "@type": "Thing",
          name: "CRACK Ending 2/2",
        },
        {
          "@type": "Thing",
          name: "Holding Chamber and specimen delivery",
        },
        {
          "@type": "Thing",
          name: "Do Not Enter room and KEEP OUT door",
        },
        {
          "@type": "Thing",
          name: "Hidden passage and chicken-marked escape exit",
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
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="CRACK Endings: How to Get Both Endings and Find the Secret Exit"
          description="Deliver the chicken to Hatch Corp or uncover the secret passage and help it escape through the hidden door."
          gameTitle="CRACK"
          gameHref="/crack"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CrackEndingsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
