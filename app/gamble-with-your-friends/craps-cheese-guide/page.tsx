import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CrapsCheeseGuideContent from "@/data/gamble-with-your-friends/craps-cheese-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gamble-with-your-friends/craps-cheese-guide`;

export const metadata: Metadata = {
  title: "Gamble With Your Friends Street Craps Cheese Guide",
  description:
    "Learn how to play Street Craps in Gamble With Your Friends with dice control tips, one-die adjustments, Taser + Golden Chip, Drink + Insurance, and recovery routes.",
  alternates: {
    canonical: pageUrl,
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
          name: "Gamble With Your Friends Guide",
          item: `${siteUrl}/gamble-with-your-friends`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Street Craps Cheese Guide",
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
        "Gamble With Your Friends Street Craps Cheese Guide",
      description:
        "This Gamble With Your Friends Street Craps guide explains how to assign a roller and caller, read the target, use one-die control, size bets, and pair Craps with items like Taser, Golden Chip, Drink, Insurance, Time Machine, and Quota Gun.",
      image: [
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-craps-first-table.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-craps-target-number.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-craps-one-die-control.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-craps-600k-max-bet.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-drink-insurance-craps.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-craps-recovery-hit.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-02",
      dateModified: "2026-05-02",
      about: [
        {
          "@type": "VideoGame",
          name: "Gamble With Your Friends",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Street Craps",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Craps cheese",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends dice control",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends one die control",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Taser",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Golden Chip",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Drink",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Insurance",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Time Machine",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Quota Gun",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Street Craps good in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Street Craps is one of the best games if your team can read the target, control the dice, and stop after the planned win.",
          },
        },
        {
          "@type": "Question",
          name: "Is Street Craps good for beginners in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not as a first serious table. Beginners should practice with small bets first, then increase bet size once one player can call the target clearly.",
          },
        },
        {
          "@type": "Question",
          name: "How do you cheese Street Craps in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Assign one caller, read the target, use small controlled adjustments, and move one die at a time when possible. Do not let everyone crowd the table.",
          },
        },
        {
          "@type": "Question",
          name: "Does the Street Craps dice cheese always work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Treat it as a physics-based control tactic, not a guaranteed result. Test with minimum bets first and scale up only when your team can see that small adjustments are helping.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest Street Craps mistake in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The biggest mistake is throwing before reading the target. The caller should read first, then the roller should move the dice.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Taser and Golden Chip on Craps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but only after your team understands the table. Use Taser first to increase maximum bet, then Golden Chip for the free all-in.",
          },
        },
        {
          "@type": "Question",
          name: "Is Drink good with Craps in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drink is good if the roller can still control the table while drunk. It is bad if the player becomes too chaotic to aim.",
          },
        },
        {
          "@type": "Question",
          name: "Is Insurance good with Craps in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Insurance is useful when you want to take a risky Craps push but reduce the downside of a failed bet.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Time Machine on Craps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Time Machine only after a meaningful failed Craps play. Do not waste it on small practice bets.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after a bad Craps throw?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stop, read the table again, check whether one die is still useful, and recover with controlled movement instead of throwing faster.",
          },
        },
        {
          "@type": "Question",
          name: "When should I leave the Craps table?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leave after the planned payout, after the item window ends, or when the team starts panic throwing without reading the table.",
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
          title="Gamble With Your Friends Street Craps Cheese Guide"
          description="Follow this Gamble With Your Friends Street Craps guide to learn how to read the target, control dice, use one-die adjustments, size bets, and pair Craps with Taser, Golden Chip, Drink, and Insurance."
          gameTitle="Gamble With Your Friends"
          gameHref="/gamble-with-your-friends"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 2, 2026"
          toc={[
            {
              id: "source-note",
              label: "Source note",
            },
            {
              id: "why-craps-is-good",
              label: "Why Craps is good",
            },
            {
              id: "roles",
              label: "Craps roles",
            },
            {
              id: "basic-flow",
              label: "Basic flow",
            },
            {
              id: "cheese-strategy",
              label: "Dice cheese strategy",
            },
            {
              id: "one-die-at-a-time",
              label: "One die at a time",
            },
            {
              id: "bet-sizing",
              label: "Bet sizing",
            },
            {
              id: "taser-golden-chip-craps",
              label: "Taser + Golden Chip",
            },
            {
              id: "drink-insurance-craps",
              label: "Drink + Insurance",
            },
            {
              id: "time-machine-craps",
              label: "Time Machine",
            },
            {
              id: "quota-gun-after-craps",
              label: "Quota Gun fallback",
            },
            {
              id: "recovery-craps",
              label: "Craps recovery",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "recommended-craps-route",
              label: "Recommended route",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/gamble-with-your-friends",
              label: "Gamble With Your Friends Guide Hub",
            },
            {
              href: "/gamble-with-your-friends/best-item-combos",
              label: "Best Item Combos and Strategies",
            },
            {
              href: "/gamble-with-your-friends/best-games",
              label: "Best Games to Play",
            },
            {
              href: "/gamble-with-your-friends/tickets-items-body-parts",
              label: "Tickets, Items, and Body Parts Guide",
            },
            {
              href: "/gamble-with-your-friends/beginner-guide",
              label: "Beginner Guide",
            },
            {
              href: "/gamble-with-your-friends/achievements",
              label: "Achievements Guide",
            },
          ]}
        >
          <CrapsCheeseGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}