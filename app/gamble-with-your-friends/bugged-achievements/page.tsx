import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BuggedAchievementsContent from "@/data/gamble-with-your-friends/bugged-achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gamble-with-your-friends/bugged-achievements`;

export const metadata: Metadata = {
  title:
    "Gamble With Your Friends: Bugged Achievements to Skip",
  description:
    "Stop wasting time on bugged Gamble With Your Friends achievements. See which Floor 2-4 tasks to skip, challenge rules, and how to fix unlock bugs.",
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
          name: "Bugged Achievements",
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
      headline: "Gamble With Your Friends Bugged Achievements",
      description:
        "This Gamble With Your Friends bugged achievements guide explains which achievements are currently reported bugged, which Floor 2–4 Big Spender, High Roller, and Lucky Streak variants to skip, why Lone Shark challenges must be active, and how to troubleshoot achievements that are not unlocking.",
      image: [
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-bugged-achievements.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-achievement-challenge-active.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-achievement-push-not-win.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-coop-achievement-context.webp`,
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
          name: "Gamble With Your Friends bugged achievements",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends achievements not unlocking",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Big Spender 2",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Big Spender 3",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Big Spender 4",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends High Roller 2",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends High Roller 3",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends High Roller 4",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Lucky Streak 2",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Lucky Streak 3",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Lucky Streak 4",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Lone Shark challenge",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends push refund win confusion",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends co-op achievement issues",
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
          name: "Which achievements are bugged in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The currently reported bugged achievements are Big Spender 2, Big Spender 3, Big Spender 4, High Roller 2, High Roller 3, High Roller 4, Lucky Streak 2, Lucky Streak 3, and Lucky Streak 4.",
          },
        },
        {
          "@type": "Question",
          name: "How many achievements are bugged in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Current launch-window reports point to nine bugged achievements.",
          },
        },
        {
          "@type": "Question",
          name: "Are the Floor 1 achievement versions bugged in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Floor 1 versions — Big Spender, High Roller, and Lucky Streak — are the versions you should complete normally.",
          },
        },
        {
          "@type": "Question",
          name: "Should I skip the Floor 2–4 Big Spender, High Roller, and Lucky Streak achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Skip all nine Floor 2–4 Big Spender, High Roller, and Lucky Streak variants until a patch confirms they work.",
          },
        },
        {
          "@type": "Question",
          name: "Why did my achievement not unlock even though I did the action?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The matching Lone Shark challenge may not have been active, the wrong player may have completed the condition, the result may have been a push or refund, or the attempt may have happened on the wrong floor.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need the Lone Shark challenge active for achievements in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For many game-specific achievements, yes. If the matching challenge is not active first, the action may not count.",
          },
        },
        {
          "@type": "Question",
          name: "Do pushes or refunds count as wins in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do not assume they count. If an achievement says win, treat pushes and refunds as unconfirmed unless the achievement actually unlocks.",
          },
        },
        {
          "@type": "Question",
          name: "Should I test achievements solo or co-op in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If an achievement fails in co-op, retest as host or solo. Co-op adds shared-bank noise, timing changes, and possible actor or host issues.",
          },
        },
        {
          "@type": "Question",
          name: "Are hidden ending achievements bugged in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not automatically. Hidden ending achievements need confirmed routes. A failed guessed route does not prove the achievement is broken.",
          },
        },
        {
          "@type": "Question",
          name: "Can body parts, tickets, or items affect achievement testing in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Selling body parts, buying items, recovering parts, or spending tickets can change the route context. If the unlock fails, record what changed before calling it bugged.",
          },
        },
        {
          "@type": "Question",
          name: "Where should I go for the full Gamble With Your Friends achievement route?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the main Achievements Guide for the full achievement list and normal route.",
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
          title="Gamble With Your Friends Bugged Achievements"
          description="See which achievements are currently reported bugged, which Floor 2–4 Big Spender, High Roller, and Lucky Streak variants to skip, and how to troubleshoot achievements that are not unlocking."
          gameTitle="Gamble With Your Friends"
          gameHref="/gamble-with-your-friends"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 6, 2026"
          toc={[
            {
              id: "bugged-achievements-list",
              label: "Bugged achievements",
            },
            {
              id: "what-to-do-instead",
              label: "What to do instead",
            },
            {
              id: "challenge-active-rule",
              label: "Challenge active rule",
            },
            {
              id: "not-bugged",
              label: "Not always bugged",
            },
            {
              id: "push-refund-results",
              label: "Push / refund confusion",
            },
            {
              id: "host-solo-coop",
              label: "Host / solo / co-op",
            },
            {
              id: "before-reporting",
              label: "Before reporting",
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
              href: "/gamble-with-your-friends/achievements",
              label: "Achievements Guide",
            },
            {
              href: "/gamble-with-your-friends/all-endings-guide",
              label: "All Endings Guide",
            },
            {
              href: "/gamble-with-your-friends/save-scum-guide",
              label: "Save Scum Guide",
            },
            {
              href: "/gamble-with-your-friends/quota-guide",
              label: "Quota Guide",
            },
            {
              href: "/gamble-with-your-friends/tickets-items-body-parts",
              label: "Tickets, Items, and Body Parts Guide",
            },
            {
              href: "/gamble-with-your-friends/best-games",
              label: "Best Games to Play",
            },
          ]}
        >
          <BuggedAchievementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}