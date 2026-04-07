import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import IAmJesusChristWalkthroughContent from "@/data/i-am-jesus-christ/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/i-am-jesus-christ/walkthrough`;

export const metadata: Metadata = {
  title: "I Am Jesus Christ Game Walkthrough: Story & Endings",
  description:
    "Stuck in the I Am Jesus Christ game? Our walkthrough covers the Gate Puzzle, Wilderness Satan fight, apostle recruitment, and the Ascension ending.",
  
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
          name: "I Am Jesus Christ",
          item: `${siteUrl}/i-am-jesus-christ`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Walkthrough",
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
        "I Am Jesus Christ Walkthrough: Full Story Guide From John the Baptist to Ascension",
      description:
        "This full I Am Jesus Christ walkthrough covers the Revelation opening, John the Baptist, the Gate Puzzle, the Wilderness Satan fight, Wedding at Cana, apostle recruitment, the 20,000 followers requirement, the Last Supper, Gethsemane, Pilate, Barabbas, crucifixion, resurrection, and ascension.",
      image: [
        `${siteUrl}/images/i-am-jesus-christ/walkthrough/john-gate-puzzle.webp`,
        `${siteUrl}/images/i-am-jesus-christ/walkthrough/wilderness-satan.webp`,
        `${siteUrl}/images/i-am-jesus-christ/walkthrough/crucifixion-ending.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-07",
      about: [
        {
          "@type": "VideoGame",
          name: "I Am Jesus Christ",
        },
        {
          "@type": "Thing",
          name: "John the Baptist",
        },
        {
          "@type": "Thing",
          name: "Wedding at Cana",
        },
        {
          "@type": "Thing",
          name: "Gather Apostles",
        },
        {
          "@type": "Thing",
          name: "The Last Supper",
        },
        {
          "@type": "Thing",
          name: "Crucifixion",
        },
        {
          "@type": "Thing",
          name: "Resurrection",
        },
        {
          "@type": "Thing",
          name: "Ascension",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="I Am Jesus Christ Walkthrough: Full Story Guide From John the Baptist to Ascension"
          description="Stuck in I Am Jesus Christ? This full walkthrough covers John the Baptist, the Gate Puzzle, the Wilderness Satan fight, Wedding at Cana, apostle recruitment, the 20,000 followers gate, the Last Supper, Gethsemane, Pilate, Barabbas, crucifixion, resurrection, and ascension."
          gameTitle="I Am Jesus Christ"
          gameHref="/i-am-jesus-christ"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 7, 2026"
          toc={[
            {
              id: "part-1-the-revelation-and-john-the-baptist",
              label: "The Revelation and John the Baptist",
            },
            {
              id: "part-2-baptism-and-the-wilderness",
              label: "Baptism and the Wilderness",
            },
            {
              id: "part-3-wedding-at-cana-and-the-first-followers",
              label: "Wedding at Cana and the first followers",
            },
            {
              id: "part-4-capernaum-peter-and-the-early-apostles",
              label: "Capernaum, Peter, and the early apostles",
            },
            {
              id: "part-5-gathering-the-flock-and-the-20k-followers-gate",
              label: "Gathering the Flock and the 20K followers gate",
            },
            {
              id: "part-6-midgame-story-miracles-before-the-ending-run",
              label: "Midgame story miracles",
            },
            {
              id: "part-7-jerusalem-entry-the-temple-and-bethany",
              label: "Jerusalem, the Temple, and Bethany",
            },
            {
              id: "part-8-the-last-supper-and-gethsemane",
              label: "The Last Supper and Gethsemane",
            },
            {
              id: "part-9-pilate-barabbas-crucifixion-and-resurrection",
              label: "Pilate, Barabbas, crucifixion, resurrection, and ascension",
            },
            {
              id: "story-walkthrough-summary",
              label: "Story walkthrough summary",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/i-am-jesus-christ/",
              label: "I Am Jesus Christ Guide Hub",
            },
            {
              href: "/i-am-jesus-christ/miracles-list/",
              label: "I Am Jesus Christ all 30+ miracles list: unlock conditions and uses",
            },
            {
              href: "/i-am-jesus-christ/apostles-locations/",
              label: "I Am Jesus Christ 12 apostles locations: full recruitment order and map guide",
            },
            {
              href: "/i-am-jesus-christ/worth-it-who-should-play/",
              label: "Is I Am Jesus Christ worth it for Christians and non-Christians?",
            },
          ]}
        >
          <IAmJesusChristWalkthroughContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}