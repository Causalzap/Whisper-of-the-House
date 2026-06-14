import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RomanceGuideContent from "@/data/tales-of-seikyu/romance-gifts-marriage-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/tales-of-seikyu/romance-gifts-marriage-guide`;

const imageUrls = [
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-affinity-card-glow.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-mushashi-birthday-gift.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-can-hug-interaction.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-kincho-date-event.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-mika-hot-springs-heart-event.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-yuki-permanent-relationship-decision.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-wedding-attire-ama-shop.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-leon-miss-ama-fishing-rod.webp`,
];

const toc = [
  {
    id: "romance-gifts-marriage-guide",
    label: "Romance guide",
  },
  {
    id: "loved-gifts",
    label: "Loved gifts",
  },
  {
    id: "birthday-gifts",
    label: "Birthday calendar",
  },
  {
    id: "characters-routes",
    label: "Characters and routes",
  },
  {
    id: "new-1-0-romance-options",
    label: "New 1.0 romance",
  },
  {
    id: "interactions",
    label: "Hug, kiss, sleepover",
  },
  {
    id: "heart-events-dates",
    label: "Heart events and dates",
  },
  {
    id: "mika-hot-springs",
    label: "Mika route",
  },
  {
    id: "yuki-route",
    label: "Yuki-Onna route",
  },
  {
    id: "how-to-get-married",
    label: "How to get married",
  },
  {
    id: "leon-miss-ama-route",
    label: "Leon and Miss Ama",
  },
  {
    id: "social-achievements",
    label: "Social achievements",
  },
  {
    id: "mistakes",
    label: "Mistakes",
  },
  {
    id: "related-guides",
    label: "Related guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/tales-of-seikyu",
    label: "Tales of Seikyu Guide Hub",
  },
  {
    href: "/tales-of-seikyu/request-board-guide",
    label: "Tales of Seikyu Request Board Guide",
  },
  {
    href: "/tales-of-seikyu/achievements-guide",
    label: "Tales of Seikyu Achievements Guide",
  },
  {
    href: "/tales-of-seikyu/beginner-guide",
    label: "Tales of Seikyu Beginner Guide",
  },
  {
    href: "/tales-of-seikyu/yokai-forms-guide",
    label: "Tales of Seikyu Yokai Forms Guide",
  },
  {
    href: "/tales-of-seikyu/fox-ruins-guide",
    label: "Tales of Seikyu Fox Ruins Guide",
  },
];

export const metadata: Metadata = {
  title: "Tales of Seikyu Romance, Gifts & Marriage Guide",
  description:
    "Use Tales of Seikyu romance guide for loved gifts, birthdays, heart events, hug, kiss, sleepover, special ring, proposal, marriage, and spouse life.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Tales of Seikyu Romance, Gifts and Marriage Guide: Loved Gifts, Birthdays, Heart Events and Special Ring",
    description:
      "Plan Tales of Seikyu romance with loved gifts, birthday calendar entries, character route focus, heart events, hug, kiss, sleepover, special ring crafting, proposal, wedding ceremony, spouse life, and social achievements.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Tales of Seikyu character affinity card with heart progress.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tales of Seikyu Romance, Gifts & Marriage Guide",
    description:
      "Find loved gifts, birthdays, heart events, romance routes, hug, kiss, sleepover, special ring, proposal, wedding, and spouse life.",
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
          name: "Tales of Seikyu Guide",
          item: `${siteUrl}/tales-of-seikyu`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tales of Seikyu Romance, Gifts, and Marriage Guide",
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
        "Tales of Seikyu Romance, Gifts and Marriage Guide: Loved Gifts, Birthdays, Heart Events, Special Ring, Proposal and Spouse Life",
      description:
        "A player-focused Tales of Seikyu romance guide for the 1.0 release covering loved gifts, backup gifts, birthday calendar entries, character route focus, new 1.0 romance options, heart events, date events, hug, kiss, sleepover, Yuki-Onna choices, Mika hot springs events, special ring crafting, proposal, wedding ceremony, spouse life at the farmhouse, BFF, Head Over Paws, Happily Ever After, and Yokai-About-Town routing.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-14",
      dateModified: "2026-06-14",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Tales of Seikyu",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu romance",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu loved gifts",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu birthday calendar",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu heart events",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu marriage",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu special ring",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu proposal",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu wedding",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu hug",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu kiss",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu sleepover",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Yuki-Onna",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Alin",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Uwabami",
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the fastest way to raise romance in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use loved gifts, birthdays, daily talk, requests from the character, and heart events. Loved birthday gifts are the strongest simple boost.",
          },
        },
        {
          "@type": "Question",
          name: "Does Tales of Seikyu have marriage in 1.0?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The 1.0 marriage route includes late relationship progress, crafting a special ring, proposing, holding a ceremony, and living with your spouse at the farmhouse.",
          },
        },
        {
          "@type": "Question",
          name: "When can I get married in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Marriage becomes available after deep relationship progress, around the late-heart or tenth-heart-event range. Keep clearing heart events until the proposal route opens.",
          },
        },
        {
          "@type": "Question",
          name: "How do I propose in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Progress the character route, reach late heart events, craft the special ring when the route opens it, then use the proposal route.",
          },
        },
        {
          "@type": "Question",
          name: "What materials do I need for the special ring in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the exact recipe in the crafting menu after your save unlocks the proposal step. Do not spend rare crafting materials before the ring recipe appears in your save.",
          },
        },
        {
          "@type": "Question",
          name: "Can my spouse live with me in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. After marriage, your spouse moves into the farmhouse.",
          },
        },
        {
          "@type": "Question",
          name: "Can I hug, kiss, or invite someone for a sleepover in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. As relationships deepen, Tales of Seikyu supports hug, kiss, and sleepover interactions. Treat them as bond-progress milestones rather than early friendship options.",
          },
        },
        {
          "@type": "Question",
          name: "Are loved gifts better than liked gifts in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Loved gifts give stronger relationship progress, especially on birthdays. Liked gifts are still useful when loved gifts are expensive or unavailable.",
          },
        },
        {
          "@type": "Question",
          name: "What does Musashi love in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Musashi loves Matcha, Strong Tea, White Crystal, Yaki Onigiri, and Chazuki White Ceramic Tea Set.",
          },
        },
        {
          "@type": "Question",
          name: "What does Nyotengu love in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nyotengu loves Sakura Wine.",
          },
        },
        {
          "@type": "Question",
          name: "What does Leon love in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Leon loves Elsa’s Beef Curry with Rice, Lun’s Beef Stew, and Red-Braised Chicken with Rice.",
          },
        },
        {
          "@type": "Question",
          name: "What does Anna love in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anna loves White Crystal.",
          },
        },
        {
          "@type": "Question",
          name: "What birthdays should I watch early in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Musashi is Spring Day 6, Kon is Spring Day 12, Hephaestus is Spring Day 17, and Seabert is Spring Day 25. Check the birthday table before spending rare loved gifts.",
          },
        },
        {
          "@type": "Question",
          name: "Should I romance one character or befriend everyone in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do both in different layers. Focus one character for marriage, but keep raising wider friendship if you want BFF and Yokai-About-Town.",
          },
        },
        {
          "@type": "Question",
          name: "Are Alin, Uwabami, and Yuki-Onna romanceable in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, they are 1.0 romance additions. Follow their story and heart event routes before spending rare gifts.",
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
          title="Plan Romance, Loved Gifts, Birthdays, and Marriage"
          description="Use this Tales of Seikyu romance route to choose loved gifts, track birthdays, clear heart events, unlock closer interactions, craft the special ring, propose, and get married."
          gameTitle="Tales of Seikyu"
          gameHref="/tales-of-seikyu"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RomanceGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
