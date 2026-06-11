import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SurvivalEnemiesGuideContent from "@/data/burglin-gnomes/survival-enemies-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/burglin-gnomes/survival-enemies-guide`;

const imageUrls = [
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-old-man-grab.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-evil-gnome-danger.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-fridge-rescue.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-cpr-revive.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-roach-danger.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-floor-hazard-knife-fork.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-landmine-danger.webp`,
  `${siteUrl}/images/burglin-gnomes/burglin-gnomes-tornado-extraction.webp`,
];

const toc = [
  { id: "burglin-gnomes-survival-enemies-guide", label: "Survival guide" },
  { id: "danger-quick-reference", label: "Danger quick ref" },
  { id: "copy-paste-survival-card", label: "Survival card" },
  { id: "old-man", label: "Old man" },
  { id: "old-man-gun", label: "Old man gun" },
  { id: "evil-gnomes", label: "Evil gnomes" },
  { id: "fridge-rescue", label: "Fridge rescue" },
  { id: "cpr-revive", label: "CPR revive" },
  { id: "rats-roaches-roomba", label: "Rats & Roomba" },
  { id: "bees-outdoor-danger", label: "Bees" },
  { id: "floor-fall-dismemberment", label: "Floor hazards" },
  { id: "dangerous-tools", label: "Tools & traps" },
  { id: "bad-rooms", label: "Bad rooms" },
  { id: "tornado-extraction", label: "Tornado escape" },
  { id: "survival-route", label: "Survival route" },
  { id: "survival-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/burglin-gnomes",
    label: "Burglin' Gnomes Guide Hub",
  },
  {
    href: "/burglin-gnomes/beginner-guide",
    label: "Burglin' Gnomes Beginner Guide",
  },
  {
    href: "/burglin-gnomes/tasks-guide",
    label: "Burglin' Gnomes Tasks Guide",
  },
  {
    href: "/burglin-gnomes/co-op-guide",
    label: "Burglin' Gnomes Co-op Guide",
  },
  {
    href: "/burglin-gnomes/materials-upgrades-guide",
    label: "Burglin' Gnomes Materials and Upgrades Guide",
  },
];

export const metadata: Metadata = {
  title: "Burglin' Gnomes Survival Guide: Enemies, Guns & Rescue",
  description:
    "Survive Burglin' Gnomes enemies, old man gun routes, evil gnomes, Roomba, floor hazards, fridge rescue, CPR, tools, and tornado escapes before wipes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Burglin' Gnomes Survival Guide: Old Man, Guns, Evil Gnomes, Roomba, Rescue and Floor Hazards",
    description:
      "Learn how to survive Burglin' Gnomes enemies and hazards, including the old man, old man with gun, evil gnomes, rats, roaches, Roomba, bees, floor hazards, fall damage, fridge rescue, CPR, dangerous tools, bad rooms, and tornado extraction.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Burglin' Gnomes old man grabbing a gnome near a fridge route.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burglin' Gnomes Survival Guide",
    description:
      "Handle the old man, guns, evil gnomes, Roomba, floor hazards, rescue, CPR, tools, and tornado escape.",
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
          name: "Burglin' Gnomes Guide",
          item: `${siteUrl}/burglin-gnomes`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Burglin' Gnomes Survival and Enemies Guide",
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
        "Burglin' Gnomes Survival and Enemies Guide: Old Man, Gun Routes, Evil Gnomes, Roomba, Rescue, CPR, Tools and Floor Hazards",
      description:
        "A player-focused Burglin' Gnomes survival guide explaining how to handle the old man, what to do if the old man gets a gun, how to prepare for evil gnome pressure, how to avoid rats, roaches, Roomba, bees, sharp floor hazards, fall damage and dismemberment, how to rescue tied or downed teammates, how to use CPR safely, how to treat dangerous tools like knives, tasers, guns, traps, explosives and chainsaws, how to avoid bad rooms, when to skip rescues during tornado extraction, and how to stop a chaotic run from becoming a full-team wipe.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-11",
      dateModified: "2026-06-11",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Burglin' Gnomes" },
        { "@type": "Thing", name: "Burglin' Gnomes survival guide" },
        { "@type": "Thing", name: "Burglin' Gnomes enemies" },
        { "@type": "Thing", name: "Burglin' Gnomes old man" },
        { "@type": "Thing", name: "Burglin' Gnomes old man gun" },
        { "@type": "Thing", name: "Burglin' Gnomes gun" },
        { "@type": "Thing", name: "Burglin' Gnomes evil gnome" },
        { "@type": "Thing", name: "Burglin' Gnomes rats" },
        { "@type": "Thing", name: "Burglin' Gnomes roaches" },
        { "@type": "Thing", name: "Burglin' Gnomes Roomba" },
        { "@type": "Thing", name: "Burglin' Gnomes bees" },
        { "@type": "Thing", name: "Burglin' Gnomes fridge rescue" },
        { "@type": "Thing", name: "Burglin' Gnomes CPR" },
        { "@type": "Thing", name: "Burglin' Gnomes floor hazards" },
        { "@type": "Thing", name: "Burglin' Gnomes fall damage" },
        { "@type": "Thing", name: "Burglin' Gnomes dismemberment" },
        { "@type": "Thing", name: "Burglin' Gnomes dangerous tools" },
        { "@type": "Thing", name: "Burglin' Gnomes landmine" },
        { "@type": "Thing", name: "Burglin' Gnomes tornado extraction" },
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
          name: "What is the most dangerous enemy in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The old man is usually the main survival check because he can grab, carry, tie up, trap, and block routes. He becomes even more dangerous if he gets a gun.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if the old man gets the gun?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not rush him directly. Use a stun option first, such as a taser, then steal the gun back when he is disabled or safely interrupted.",
          },
        },
        {
          "@type": "Question",
          name: "What triggers evil gnomes in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Evil gnome pressure can begin after the old man is killed. Do not kill him casually; finish key tasks first, close unused routes, regroup, and prepare to extract.",
          },
        },
        {
          "@type": "Question",
          name: "How do I rescue someone from the fridge?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Send one rescuer with empty hands while another player watches the old man's route. Untie the teammate, then leave the room immediately.",
          },
        },
        {
          "@type": "Question",
          name: "When should I skip a rescue in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Skip a rescue if the tornado is active, the teammate is far away, the route is blocked, or saving them would likely turn one lost player into a full-team wipe.",
          },
        },
        {
          "@type": "Question",
          name: "Are rats and roaches worth fighting?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if the task requires it or they block the route. Do not chase them into worse rooms, and do not fight while carrying heavy loot.",
          },
        },
        {
          "@type": "Question",
          name: "Is Roomba dangerous in Burglin' Gnomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Treat Roomba like a moving floor hazard. Watch its path, avoid dragging heavy items across it blindly, and do not sprint into it while looking backward.",
          },
        },
        {
          "@type": "Question",
          name: "Why did I die without fighting anything?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You may have hit floor clutter, sharp objects, soap, fall damage, traps, or awkward item physics. Look down before sprinting through kitchens, bathrooms, and carry routes.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use guns, knives, or explosives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use them only for a clear job. Dangerous tools become a liability during climbing, rescue, crowded rooms, or tornado extraction.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next after the survival guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Tasks Guide if you need better objective priority, or the Co-op Guide if rescues keep turning into team wipes.",
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
          title="Stop Dying to the Old Man, Guns, Traps, and Bad Rescues"
          description="Handle the old man, gun routes, evil gnomes, Roomba, floor hazards, CPR, rescue calls, tools, bad rooms, and tornado escape."
          gameTitle="Burglin' Gnomes"
          gameHref="/burglin-gnomes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SurvivalEnemiesGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
