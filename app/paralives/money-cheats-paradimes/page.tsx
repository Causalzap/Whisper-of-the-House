import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ParalivesMoneyCheatsContent from "@/data/paralives/money-cheats-paradimes.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/paralives/money-cheats-paradimes`;

const imageUrls = [
  `${siteUrl}/images/paralives/paralives-open-cheat-commands-shift-ctrl-c.webp`,
  `${siteUrl}/images/paralives/paralives-payday-money-cheat.webp`,
  `${siteUrl}/images/paralives/paralives-makeitrain-money-cheat.webp`,
  `${siteUrl}/images/paralives/paralives-jackpot-money-cheat.webp`,
  `${siteUrl}/images/paralives/paralives-setmoney-100000-cheat.webp`,
];

const toc = [
  { id: "best-money-cheat", label: "Best cheat" },
  { id: "open-cheat-panel", label: "Open panel" },
  { id: "save-before-cheats", label: "Save first" },
  { id: "payday", label: "Payday" },
  { id: "piggybank", label: "Piggybank" },
  { id: "makeitrain", label: "Makeitrain" },
  { id: "jackpot", label: "Jackpot" },
  { id: "printmoney-vs-setmoney", label: "Printmoney vs setmoney" },
  { id: "lottery", label: "Lottery" },
  { id: "clearbills", label: "Clearbills" },
  { id: "best-cheat-for-building", label: "Building" },
  { id: "best-cheat-for-normal-play", label: "Normal play" },
  { id: "help-command", label: "Help command" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/paralives",
    label: "Paralives Guide Hub",
  },
  {
    href: "/paralives/best-mods-steam-workshop-install-guide",
    label: "Best Mods and Steam Workshop Install Guide",
  },
  {
    href: "/paralives/best-early-game-skills-talents-careers",
    label: "Best Early Game Skills, Talents and Careers",
  },
  {
    href: "/paralives/job-performance-not-improving",
    label: "Job Performance Not Improving",
  },
  {
    href: "/paralives/level-skills-faster",
    label: "How to Level Skills Faster",
  },
];

export const metadata: Metadata = {
  title: "Paralives Money Cheats: Payday, Jackpot & Setmoney",
  description:
    "Use Paralives money cheats safely: payday, piggybank, makeitrain, jackpot, printmoney, setmoney, lottery, clearbills and cheat console shortcuts.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paralives Money Cheats: Payday, Jackpot & Setmoney",
    description:
      "A practical Paralives money cheats guide for Ctrl+F1, payday, piggybank, makeitrain, jackpot, printmoney, setmoney, lottery and clearbills.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Paralives Cheat Commands panel opened on the right side of the screen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paralives Money Cheats: Payday, Jackpot & Setmoney",
    description:
      "Open the cheat console and choose the right Paralives money cheat for bills, building, exact funds or normal play.",
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
          name: "Paralives Guide",
          item: `${siteUrl}/paralives`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Paralives Money Cheats",
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
        "Paralives Money Cheats Guide: Payday, Piggybank, Makeitrain, Jackpot, Printmoney, Setmoney, Lottery and Clearbills",
      description:
        "A player-focused Paralives money cheats guide that explains how to open the Cheat Commands panel, when to use payday, piggybank, makeitrain, jackpot, printmoney, setmoney, lottery and clearbills, and how to avoid ruining a normal save with too much money.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-06",
      dateModified: "2026-07-06",
      about: [
        { "@type": "VideoGame", name: "Paralives" },
        { "@type": "Thing", name: "Paralives Money Cheats" },
        { "@type": "Thing", name: "Paralives Cheat Commands" },
        { "@type": "Thing", name: "Paralives Payday" },
        { "@type": "Thing", name: "Paralives Piggybank" },
        { "@type": "Thing", name: "Paralives Makeitrain" },
        { "@type": "Thing", name: "Paralives Jackpot" },
        { "@type": "Thing", name: "Paralives Printmoney" },
        { "@type": "Thing", name: "Paralives Setmoney" },
        { "@type": "Thing", name: "Paralives Lottery" },
        { "@type": "Thing", name: "Paralives Clearbills" },
        { "@type": "Thing", name: "Paradimes" },
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
          name: "How do I open money cheats in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "On Windows, use Ctrl + F1 or Ctrl + Shift + C. On Mac, try Command + Fn or Globe + F1 to open the Cheat Commands panel.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to enable cheats first in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Open the Cheat Commands panel, type the command, and press Enter.",
          },
        },
        {
          "@type": "Question",
          name: "Are Paralives cheat commands case-sensitive?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Paralives cheat commands work in upper or lower case, but lowercase is easier to read and less likely to cause typing mistakes.",
          },
        },
        {
          "@type": "Question",
          name: "Are Paralives money cheats achievement-safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Paralives.io lists Paralives cheats as achievement-safe. It is still smart to make a manual save before large money changes in case the new budget makes the household less fun to play.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Paralives money cheat?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For small fixes, use payday or piggybank. For exact extra money, use printmoney. For exact final funds, use setmoney. For fast building money, use jackpot.",
          },
        },
        {
          "@type": "Question",
          name: "How much money does payday give in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Payday gives the selected Para's salary. In the guide test save, it added +₱200.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between printmoney and setmoney in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Printmoney adds the amount you type to your current funds. Setmoney changes the household balance to the amount you type.",
          },
        },
        {
          "@type": "Question",
          name: "What does lottery do in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Lottery gives a random money result, so it is best for casual saves where you do not need an exact amount.",
          },
        },
        {
          "@type": "Question",
          name: "How do I see all cheat commands in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Type help in the Cheat Commands panel to see the full command list.",
          },
        },
        {
          "@type": "Question",
          name: "Should I save before using Paralives money cheats?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Make a manual save before large money changes so you can reload if the new budget makes the save less fun.",
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
          title="Paralives Money Cheats and Paradimes Guide"
          description="Use Paralives money cheats safely: payday, piggybank, makeitrain, jackpot, printmoney, setmoney, lottery, clearbills and cheat console shortcuts."
          gameTitle="Paralives"
          gameHref="/paralives"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ParalivesMoneyCheatsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}