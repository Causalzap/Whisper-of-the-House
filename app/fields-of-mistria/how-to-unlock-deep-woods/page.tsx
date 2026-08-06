import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FieldsOfMistriaDeepWoodsGuideContent from "@/data/fields-of-mistria/how-to-unlock-deep-woods.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/fields-of-mistria`;
const pageUrl = `${hubUrl}/how-to-unlock-deep-woods`;

const metadataTitle =
  "Fields of Mistria Deep Woods Guide: How to Unlock It";

const metadataDescription =
  "Complete the Fire Seal, unlock Dragon's Breath, clear the Eastern Road barrier, find Caldarus, activate the shrine teleport, and explore Deep Woods.";

const imageUrls = [
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-caldarus-deep-woods.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-deep-woods-quest.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-deep-woods-eastern-road-route.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-deep-woods-fire-barrier.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-deep-woods-first-forage.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-deep-woods-grave-marker-route.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-caldarus-final-seal-recovery.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-deep-woods-forage-set.webp`,
];

const toc = [
  {
    id: "complete-fire-seal",
    label: "Complete the Fire Seal",
  },
  {
    id: "unlock-dragons-breath",
    label: "Unlock Dragon's Breath",
  },
  {
    id: "prepare-deep-woods-trip",
    label: "Prepare for the trip",
  },
  {
    id: "eastern-road-route",
    label: "Eastern Road route",
  },
  {
    id: "burn-fire-barrier",
    label: "Burn the entrance barrier",
  },
  {
    id: "first-deep-woods-entry",
    label: "First Deep Woods visit",
  },
  {
    id: "follow-lower-right-route",
    label: "Follow the lower-right route",
  },
  {
    id: "grave-marker-route",
    label: "Grave-marker landmark",
  },
  {
    id: "meet-caldarus",
    label: "Meet Caldarus",
  },
  {
    id: "remaining-seals",
    label: "Continue the seals",
  },
  {
    id: "deep-woods-teleport",
    label: "Unlock the teleport",
  },
  {
    id: "deep-woods-resources",
    label: "Deep Woods resources",
  },
  {
    id: "deep-woods-forage-set",
    label: "Deep Woods Forage Set",
  },
  {
    id: "when-to-stop",
    label: "When to leave",
  },
  {
    id: "deep-woods-problems",
    label: "Deep Woods fixes",
  },
];

const relatedLinks = [
  {
    href: "/fields-of-mistria",
    label: "Fields of Mistria Guide Hub",
  },
  {
    href: "/fields-of-mistria/how-to-unlock-mines",
    label: "How to Unlock the Mines",
  },
  {
    href: "/fields-of-mistria/water-seal-guide",
    label: "Water Seal Guide",
  },
  {
    href: "/fields-of-mistria/saturday-market-plaza",
    label: "Saturday Market Plaza Guide",
  },
  {
    href: "/fields-of-mistria/bell-tower-guide",
    label: "Bell Tower Guide",
  },
  {
    href: "/fields-of-mistria/marriage-guide",
    label: "Marriage Guide",
  },
  {
    href: "/fields-of-mistria/achievements-guide",
    label: "Achievements Guide",
  },
];

const faqEntities = [
  {
    question:
      "How do I unlock the Deep Woods in Fields of Mistria?",
    answer:
      "Complete the Fire Seal storyline, use Dragon's Breath during the escape, travel to the northern Eastern Road entrance, burn the magical barrier, and complete the conversation with Caldarus at his Deep Woods temple.",
  },
  {
    question:
      "Do I need a certain Town Rank to unlock the Deep Woods?",
    answer:
      "The direct prerequisite is the Fire Seal storyline and Dragon's Breath. Reaching another Town Rank or upgrading the Axe does not replace that requirement.",
  },
  {
    question:
      "Where is the Deep Woods entrance?",
    answer:
      "Travel east of town to the Eastern Road and take the northern path toward the blocked forest entrance.",
  },
  {
    question:
      "How do I remove the Deep Woods barrier?",
    answer:
      "Select Dragon's Breath in the Magic menu, face the magical overgrowth at the entrance, and cast the spell with enough Mana available.",
  },
  {
    question:
      "Where do I find Caldarus inside the Deep Woods?",
    answer:
      "Follow the open path deeper into the woods and continue toward the lower-right side. Use the grave-marker tree as a landmark, then follow the open route down and right to the temple.",
  },
  {
    question:
      "Do I need to cut down the grave-marker tree?",
    answer:
      "No. The grave-marker tree is only a route landmark. Do not cut it, burn it, or search it for an offering.",
  },
  {
    question:
      "Can I leave before finding Caldarus and return later?",
    answer:
      "Yes. The entrance remains open after Dragon's Breath removes the barrier, so you can return later with more food, energy, Mana, and inventory space.",
  },
  {
    question:
      "How do I unlock the Deep Woods teleport?",
    answer:
      "Reach Caldarus at his temple and complete the conversation. The Caldarus shrine then gains a Deep Woods teleport destination.",
  },
  {
    question:
      "What achievement unlocks with the Deep Woods?",
    answer:
      "Completing the Deep Woods unlock awards The Found Woods achievement.",
  },
  {
    question:
      "Where can I farm Hardwood in Fields of Mistria?",
    answer:
      "After the Deep Woods are open, cut the large trees and stumps during dedicated resource trips. The shrine teleport makes repeated Hardwood runs faster.",
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
    title:
      "How to Unlock the Deep Woods in Fields of Mistria",
    description:
      "Complete the Fire Seal, use Dragon's Breath on the Eastern Road barrier, follow the grave-marker route, find Caldarus, and unlock the Deep Woods teleport.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Caldarus at his temple in the Fields of Mistria Deep Woods",
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
          name: "Fields of Mistria Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Unlock the Deep Woods",
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
        "How to Unlock the Deep Woods in Fields of Mistria",
      description:
        "A complete Fields of Mistria Deep Woods unlock guide covering the Fire Seal prerequisite, Dragon's Breath escape sequence, Eastern Road entrance, magical fire barrier, first forage items, lower-right forest route, grave-marker landmark, Caldarus temple meeting, The Found Woods achievement, shrine teleport, Hardwood farming and Deep Woods Forage Set.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-06",
      dateModified: "2026-08-06",
      about: [
        {
          "@type": "VideoGame",
          name: "Fields of Mistria",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Deep Woods",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Fire Seal",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Dragon's Breath",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Eastern Road",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Caldarus temple",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Deep Woods teleport",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Hardwood",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Deep Woods Forage Set",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria The Found Woods achievement",
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
          title="How to Unlock the Deep Woods in Fields of Mistria"
          description="Complete the Fire Seal, use Dragon's Breath to clear the Eastern Road entrance, follow the forest landmarks to Caldarus, and unlock the permanent Deep Woods teleport."
          gameTitle="Fields of Mistria"
          gameHref="/fields-of-mistria"
          breadcrumbBaseHref="/fields-of-mistria"
          breadcrumbBaseLabel="Fields of Mistria Guide"
          updatedAt="August 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FieldsOfMistriaDeepWoodsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}