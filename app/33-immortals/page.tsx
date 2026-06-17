import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ThirtyThreeImmortalsHubContent from "@/data/33-immortals/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/33-immortals`;

const imageUrls = [
`${siteUrl}/images/33-immortals/33-immortals-guide-hub-33-player-run.webp`,
`${siteUrl}/images/33-immortals/33-immortals-first-10-minutes-question-marks.webp`,
`${siteUrl}/images/33-immortals/33-immortals-weapon-upgrade-unlocked.webp`,
`${siteUrl}/images/33-immortals/33-immortals-relic-drop-new-relic-unlocked.webp`,
`${siteUrl}/images/33-immortals/33-immortals-lucifer-stack-marker.webp`,
];

const toc = [
{ id: "guide-hub", label: "Guide hub" },
{ id: "start-here", label: "Start here" },
{ id: "what-changed-in-1-0", label: "What changed in 1.0" },
{ id: "weapons", label: "Weapons" },
{ id: "relics", label: "Relics" },
{ id: "bosses", label: "Bosses" },
{ id: "achievements", label: "Achievements" },
{ id: "progression-roadmap", label: "Progression roadmap" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/33-immortals/beginner-progression-guide",
label: "33 Immortals Beginner Progression Guide",
},
{
href: "/33-immortals/weapons-unlock-upgrades-guide",
label: "33 Immortals Weapons Unlock and Upgrades Guide",
},
{
href: "/33-immortals/relics-paths-wishing-guide",
label: "33 Immortals Relics, Paths and Wishing Guide",
},
{
href: "/33-immortals/bosses-guide",
label: "33 Immortals Boss Mechanics Guide",
},
{
href: "/33-immortals/achievements-guide",
label: "33 Immortals Achievements Guide",
},
];

export const metadata: Metadata = {
title: "33 Immortals Guide: 1.0 Weapons, Relics, Bosses & Tips",
description:
"Start 33 Immortals 1.0 with beginner routes, best weapon picks, Relic Wishing, boss mechanics, achievements, roadmap, common mistakes and first-run tips.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"33 Immortals Guide: Beginner Routes, Weapons, Relics, Bosses and Achievements",
description:
"Use this 33 Immortals 1.0 guide hub to learn first-run routing, weapon unlocks, Relic Wishing, boss mechanics, achievement cleanup, progression milestones and common mistakes.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "33 Immortals 33-player co-op run with many players fighting together.",
},
],
},
twitter: {
card: "summary_large_image",
title: "33 Immortals Guide: 1.0 Weapons, Relics and Bosses",
description:
"Beginner routes, weapon loops, Relic Wishing, boss mechanics, achievements, progression roadmap and common mistakes.",
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
name: "33 Immortals Guide",
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
"33 Immortals Guide Hub: Beginner Progression, Weapons, Relics, Bosses, Achievements and 1.0 Roadmap",
description:
"A player-focused 33 Immortals 1.0 guide hub for new and returning players. The hub explains what 33 Immortals is, how to start safely, what changed in 1.0, where to learn beginner progression, how to choose weapons, how Relics and Relic Wishing work, why random lobbies wipe at Lucifer, Adam & Eve and Wrath of God, how to route achievements, and what to practice during each run stage from the first five runs to long-term mastery and endgame cleanup.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-17",
dateModified: "2026-06-17",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "33 Immortals" },
{ "@type": "Thing", name: "33 Immortals guide" },
{ "@type": "Thing", name: "33 Immortals 1.0" },
{ "@type": "Thing", name: "33-player co-op roguelike" },
{ "@type": "Thing", name: "33 Immortals beginner guide" },
{ "@type": "Thing", name: "33 Immortals progression" },
{ "@type": "Thing", name: "33 Immortals weapons" },
{ "@type": "Thing", name: "33 Immortals best weapon" },
{ "@type": "Thing", name: "33 Immortals Relics" },
{ "@type": "Thing", name: "33 Immortals Relic Wishing" },
{ "@type": "Thing", name: "33 Immortals bosses" },
{ "@type": "Thing", name: "33 Immortals Lucifer" },
{ "@type": "Thing", name: "33 Immortals Adam and Eve" },
{ "@type": "Thing", name: "33 Immortals Wrath of God" },
{ "@type": "Thing", name: "33 Immortals achievements" },
{ "@type": "Thing", name: "33 Immortals Weapon Mastery" },
{ "@type": "Thing", name: "33 Immortals progression roadmap" },
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
name: "What is 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"33 Immortals is a 33-player co-op action roguelike from Thunder Lotus. Players join raid-style runs, fight through large groups of enemies, cooperate with other players, defeat major bosses and grow stronger between attempts.",
},
},
{
"@type": "Question",
name: "When did 33 Immortals 1.0 release?",
acceptedAnswer: {
"@type": "Answer",
text:
"33 Immortals 1.0 launched in June 2026, with Steam, Epic Games Store and Xbox availability around the 1.0 release window.",
},
},
{
"@type": "Question",
name: "What platforms is 33 Immortals on?",
acceptedAnswer: {
"@type": "Answer",
text:
"33 Immortals is available on Steam, Epic Games Store and Xbox platforms. Players should still check the store page for their own platform before buying or installing.",
},
},
{
"@type": "Question",
name: "What should I do first in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Follow safe early objectives, break jars and bones, spend level-up choices, avoid risky rooms while low, and regroup before Ascension. The beginner progression guide covers first-run routing in detail.",
},
},
{
"@type": "Question",
name: "What is the best weapon in 33 Immortals 1.0?",
acceptedAnswer: {
"@type": "Answer",
text:
"The strongest current signal points to Bow of Hope, Glaive of Temperance and Crossbows of Pride, but the best weapon is the one whose loop the player can execute consistently.",
},
},
{
"@type": "Question",
name: "What weapon should I unlock first in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Most new players should start with Bow of Hope or Crossbows of Pride for safer learning. Sword is better for frontline timing, while Staff or Scepter fits support-focused players.",
},
},
{
"@type": "Question",
name: "How much do weapons cost to unlock in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"As of 1.0, weapons cost 50 Eternal Shards to unlock. Scepter of Charity is also unlocked for 50 Eternal Shards at its Weapon Shrine in Dark Woods.",
},
},
{
"@type": "Question",
name: "How does Weapon Mastery work in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Weapon upgrades have Master Gauges. Each mastered upgrade gives 1% damage, and mastering all 48 Weapon Upgrades gives 48% damage.",
},
},
{
"@type": "Question",
name: "How do Relics work in 33 Immortals 1.0?",
acceptedAnswer: {
"@type": "Answer",
text:
"Relics use Paths and types. Players can reroll choices with Bones before selecting, upgrade rarity, dismantle bad fits, collect Relic Tokens and Wish for Action Relics.",
},
},
{
"@type": "Question",
name: "How does Relic Wishing work in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Relic Wishing lets players target one Action Relic from a specific Path before a run. It costs Eternal Shards, and the same Relic can be Wished multiple times in 1.0.",
},
},
{
"@type": "Question",
name: "Why do random lobbies wipe at bosses in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Most random lobby boss wipes come from missed mechanics: ignored priority targets, wrong pillar order, bad stack movement, missed shields or ignored puzzle objects.",
},
},
{
"@type": "Question",
name: "How do I finish all achievements in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Route achievements in layers: early progression, hidden goals, boss clears, party goals, weapon goals, Daily Quest Chest, Relic Wishing, cosmetics, Ordeals and endgame cleanup.",
},
},
{
"@type": "Question",
name: "Is this 33 Immortals hub a wiki?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. This hub is a practical route page that points players to focused guides explaining what to do during a run, not just database entries or item names.",
},
},
],
},
],
};

export default function Page() {
return (
<> <Header /> <main>
<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/> <GuideArticlePage
       title="33 Immortals Guide Hub for 1.0 Runs, Builds and Bosses"
       description="Start with beginner routes, weapon loops, Relic Wishing, boss mechanics, achievement routing, common mistakes and a run-stage roadmap."
       gameTitle="33 Immortals"
       gameHref="/33-immortals"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 17, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <ThirtyThreeImmortalsHubContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
