import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SoulEchoesAwakenedEpicItemsContent from "@/data/grim-dawn-fangs-of-asterkarn/soul-echoes-awaken-epic-items.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/grim-dawn-fangs-of-asterkarn`;
const pageUrl = `${hubUrl}/soul-echoes-awaken-epic-items`;

const metadataTitle =
  "Grim Dawn Ascension Altar: Soul Echoes, Fragments & Ashes";

const metadataDescription =
  "Find the Ascension Altar and Jornn, turn Soul Echoes into Soul Fragments, farm Ashes of Awakening, and Awaken Epic items in the correct order.";

const imageUrls = [
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-altar-of-ascension-quest-complete.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-soul-echo-recipe-200k.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-awakened-epic-before-after.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-soul-echo-elder-noltukari-location.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-soul-echo-elder-noltukari-dialogue.webp`,
];

const toc = [
  {
    id: "ascension-altar",
    label: "Ascension Altar",
  },
  {
    id: "jornn-runekeeper",
    label: "Jornn the Runekeeper",
  },
  {
    id: "soul-materials",
    label: "Soul Echoes & Fragments",
  },
  {
    id: "item-ascension",
    label: "Item Ascension",
  },
  {
    id: "awaken-epic",
    label: "Awaken Epic items",
  },
  {
    id: "elderveil",
    label: "Elderveil & Runed Orb",
  },
  {
    id: "stuck",
    label: "Stuck fixes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/grim-dawn-fangs-of-asterkarn",
    label: "Fangs of Asterkarn Guide Hub",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/ritual-of-cleansing-walkthrough",
    label: "Ritual of Cleansing Walkthrough",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/the-asterkarn-incident-walkthrough",
    label: "The Asterkarn Incident Walkthrough",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/wereraven-leveling-build",
    label: "Wereraven Leveling Build",
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
    images: [
      {
        url: imageUrls[0],
        alt: "Grim Dawn Altar of Ascension objective completed in Kurnhold",
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

const faqEntities = [
  {
    question: "Are Soul Echoes and Soul Fragments the same material?",
    answer:
      "No. Soul Echoes are farming drops, while Soul Fragments are processed materials used by Ascension and Alteration services. Use the current Runed Orb conversion recipe in Elderveil to turn Echoes into Fragments.",
  },
  {
    question: "Should I Awaken an Epic before Ascending it?",
    answer:
      "Yes. Awakening consumes the original Epic and creates a new Legendary item. Awaken the unascended Epic first, then take the finished Legendary to Jornn for its Ascended Affix.",
  },
  {
    question: "Can another character Ascend the same item?",
    answer:
      "Yes, but the character performing the Ascension affects the available mastery-modifier pool. Use the mastery combination you want the finished item to support.",
  },
  {
    question: "Can the Inventor reroll only one part of an item?",
    answer:
      "Yes. Alteration can target the item seed, prefix, suffix, or Ascended Affix separately. Check the displayed material and Iron Bit cost before confirming the selected reroll.",
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
          name: "Fangs of Asterkarn Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ascension Altar and Soul Echoes Guide",
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
        "Grim Dawn Ascension Altar Guide: Soul Echoes, Soul Fragments, Ashes of Awakening, and Awakened Epic Items",
      description:
        "A practical Grim Dawn: Fangs of Asterkarn guide to unlocking the Ascension Altar and Jornn the Runekeeper, farming Soul Echoes and Ashes of Awakening, processing Soul Echoes into Soul Fragments, adding Ascended Affixes, finding Elderveil and the Runed Orb, Awakening supported Epic items, and avoiding the mistake of Ascending an Epic before Awakening it.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-26",
      dateModified: "2026-08-04",
      about: [
        {
          "@type": "VideoGame",
          name: "Grim Dawn: Fangs of Asterkarn",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Altar of Ascension",
        },
        {
          "@type": "Thing",
          name: "Ascendant Mode",
        },
        {
          "@type": "Thing",
          name: "Jornn the Runekeeper",
        },
        {
          "@type": "Thing",
          name: "Soul Echoes",
        },
        {
          "@type": "Thing",
          name: "Soul Fragments",
        },
        {
          "@type": "Thing",
          name: "Ashes of Awakening",
        },
        {
          "@type": "Thing",
          name: "Item Ascension",
        },
        {
          "@type": "Thing",
          name: "Ascended Affixes",
        },
        {
          "@type": "Thing",
          name: "Epic Awakening",
        },
        {
          "@type": "Thing",
          name: "Awakened Epic Items",
        },
        {
          "@type": "Thing",
          name: "Elderveil",
        },
        {
          "@type": "Thing",
          name: "Elder Noltukari",
        },
        {
          "@type": "Thing",
          name: "Runed Orb",
        },
        {
          "@type": "Thing",
          name: "Guardian's Sorrow",
        },
        {
          "@type": "Thing",
          name: "Inventor Alteration",
        },
        {
          "@type": "Thing",
          name: "Lokharr's Visage",
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
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          title="Grim Dawn Ascension Altar, Soul Echoes and Awakened Items"
          description="Follow the route I use to unlock the Altar and Jornn, process Soul Echoes into Soul Fragments, farm Ashes of Awakening, and Awaken Epic items before adding an Ascended Affix."
          gameTitle="Grim Dawn: Fangs of Asterkarn"
          gameHref="/grim-dawn-fangs-of-asterkarn"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SoulEchoesAwakenedEpicItemsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}