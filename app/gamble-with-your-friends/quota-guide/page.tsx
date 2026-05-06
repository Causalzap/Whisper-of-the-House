import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import QuotaGuideContent from "@/data/gamble-with-your-friends/quota-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gamble-with-your-friends/quota-guide`;

export const metadata: Metadata = {
  title: "Gamble With Your Friends Quota Guide: Hit Every Daily Quota",
  description:
    "Learn how to hit daily quota in Gamble With Your Friends with gap-based decisions, over-quota risk rules, floor pressure, co-op roles, and recovery day strategy.",
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
          name: "Quota Guide",
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
      headline: "Gamble With Your Friends Quota Guide",
      description:
        "This Gamble With Your Friends quota guide explains how to hit daily quota, when to switch from safe play to emergency pushes, why going far over quota can be risky, how quota pressure changes by floor, and how to manage the shared bank in co-op.",
      image: [
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-quota-guide.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-leave-after-quota.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-shared-bank-chaos.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-missed-quota.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-06",
      dateModified: "2026-05-06",
      about: [
        {
          "@type": "VideoGame",
          name: "Gamble With Your Friends",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends quota",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends daily quota",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends shared bank",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends co-op strategy",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends over quota",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends quota scaling",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends emergency quota push",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends floor pressure",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends recovery day",
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
          name: "What is quota in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quota is the amount of money your team must bring back before the casino day ends. It is the main survival target for each workday.",
          },
        },
        {
          "@type": "Question",
          name: "Does quota scale every day in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Quota gets harder as the run continues. Player reports also suggest that finishing far above quota can make the next day feel much harsher.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a confirmed quota formula in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not yet. Treat any exact multiplier as unconfirmed unless you have controlled test data. The practical rule is to avoid unnecessary over-quota gambling.",
          },
        },
        {
          "@type": "Question",
          name: "Is going over quota bad in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A little extra money can be useful. Going far over quota for no reason is dangerous because it may increase next-day pressure and also gives the team more chances to lose the bank.",
          },
        },
        {
          "@type": "Question",
          name: "When should I switch to emergency games in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A useful rule is: if you are still missing more than 30% of quota with around 60 seconds left, choose one emergency route. If the gap is small, keep playing controlled bets.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do once quota is reached in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leave by default. Keep gambling only if the team has a specific plan for achievements, money milestones, floor progression, or item-supported late-game routing.",
          },
        },
        {
          "@type": "Question",
          name: "What is the safest game for quota in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blackjack is one of the safest options if one player understands the table. Familiar low-risk games are better than theoretically strong games nobody knows how to play.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best emergency quota game in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Slots, single-number Roulette, or one item-supported big bet can work as emergency options. They are not normal quota routes.",
          },
        },
        {
          "@type": "Question",
          name: "How do I stop teammates from wasting money in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Assign a caller, ban silent all-ins, and make the leave decision before the day starts. The shared bank needs rules.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use tickets to recover quota in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if the run needs help. Tickets and items should create survival value during serious quota attempts.",
          },
        },
        {
          "@type": "Question",
          name: "Should I sell body parts for tickets in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only as an emergency or punishment route. If body parts are part of the plan, something already went wrong.",
          },
        },
        {
          "@type": "Question",
          name: "Should I chase achievements while doing quota in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only if the achievement fits the day. If quota is unsafe, stop achievement hunting and survive first.",
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
          title="Gamble With Your Friends Quota Guide"
          description="Learn how to survive daily quota, switch between safe play and emergency pushes, avoid over-quota traps, manage floor pressure, and stop the shared bank from disappearing."
          gameTitle="Gamble With Your Friends"
          gameHref="/gamble-with-your-friends"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 6, 2026"
          toc={[
            {
              id: "quota-day-plan",
              label: "Quota day plan",
            },
            {
              id: "when-to-switch",
              label: "When to switch",
            },
            {
              id: "best-games-by-quota-gap",
              label: "Games by quota gap",
            },
            {
              id: "over-quota-penalty",
              label: "Over-quota risk",
            },
            {
              id: "time-after-quota",
              label: "Time after quota",
            },
            {
              id: "when-to-stop",
              label: "When to stop",
            },
            {
              id: "floor-pressure",
              label: "Floor pressure",
            },
            {
              id: "shared-bank-roles",
              label: "Shared bank roles",
            },
            {
              id: "tickets-items-and-recovery",
              label: "Tickets and recovery",
            },
            {
              id: "quota-mistakes",
              label: "Quota mistakes",
            },
            {
              id: "recovery-day-plan",
              label: "Recovery day plan",
            },
            {
              id: "quota-vs-achievements",
              label: "Quota vs achievements",
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
              href: "/gamble-with-your-friends/beginner-guide",
              label: "Beginner Guide",
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
              href: "/gamble-with-your-friends/best-item-combos",
              label: "Best Item Combos and Strategies",
            },
            {
              href: "/gamble-with-your-friends/save-scum-guide",
              label: "Save Scum Guide",
            },
            {
              href: "/gamble-with-your-friends/achievements",
              label: "Achievements Guide",
            },
          ]}
        >
          <QuotaGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}