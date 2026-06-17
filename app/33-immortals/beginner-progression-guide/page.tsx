import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerProgressionGuideContent from "@/data/33-immortals/beginner-progression-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/33-immortals/beginner-progression-guide`;

const imageUrls = [
`${siteUrl}/images/33-immortals/33-immortals-first-10-minutes-question-marks.webp`,
`${siteUrl}/images/33-immortals/33-immortals-level-up-purple-stat-choice.webp`,
`${siteUrl}/images/33-immortals/33-immortals-torture-chamber-gate.webp`,
`${siteUrl}/images/33-immortals/33-immortals-secret-chamber-limited-players.webp`,
`${siteUrl}/images/33-immortals/33-immortals-ascension-regroup-chamber-shortage.webp`,
];

const toc = [
{ id: "beginner-progression-guide", label: "Beginner progression guide" },
{ id: "first-10-minutes", label: "First 10 minutes" },
{ id: "level-up-stat-choice", label: "Level-up choices" },
{ id: "beginner-perks", label: "Beginner Perks" },
{ id: "bones-shrines-and-teleport", label: "Bones, Shrines and teleport" },
{ id: "torture-chambers", label: "Torture Chambers" },
{ id: "unique-elites", label: "Unique Elites" },
{ id: "secret-chambers", label: "Secret Chambers" },
{ id: "ascension-starts", label: "Ascension timing" },
{ id: "random-lobby-communication", label: "Random lobby communication" },
{ id: "failed-run-diagnosis", label: "Failed run diagnosis" },
{ id: "first-run-checklist", label: "First run checklist" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "what-to-upgrade-first", label: "What to upgrade first" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/33-immortals",
label: "33 Immortals Guide Hub",
},
{
href: "/33-immortals/bosses-guide",
label: "33 Immortals Boss Mechanics Guide",
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
href: "/33-immortals/achievements-guide",
label: "33 Immortals Achievements Guide",
},
];

export const metadata: Metadata = {
title: "33 Immortals Beginner Guide: First Runs & Progression",
description:
"Learn 33 Immortals first-run progression: Dust, bones, Shrines, beginner Perks, Unique Elites, Chambers, Secret Chambers and Ascension timing.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "33 Immortals Beginner Guide: First Runs, Perks and Progression",
description:
"A practical 33 Immortals beginner guide for first runs, Dust, bones, Shrines, Teleport Stones, beginner Perks, Unique Elites, Torture Chambers, Secret Chambers, Ascension timing and random lobby communication.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "33 Immortals early run route with question marks, chests and bones.",
},
],
},
twitter: {
card: "summary_large_image",
title: "33 Immortals Beginner Guide",
description:
"Learn first-run progression, Dust, bones, Shrines, Perks, Unique Elites, Chambers, Secret Chambers and Ascension timing.",
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
item: `${siteUrl}/33-immortals`,
},
{
"@type": "ListItem",
position: 3,
name: "Beginner Progression Guide",
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
"33 Immortals Beginner Progression Guide: First Runs, Dust, Shrines, Perks, Chambers and Ascension Timing",
description:
"A player-focused 33 Immortals beginner progression guide explaining what to do in the first 10 minutes, how to use Dust and purple level-up choices, when to spend bones, how to use Bone Shrines, keys and Teleport Stones, which beginner Perks to equip first, how to handle Unique Elites, when Secret Chambers are worth the risk, how to enter Torture Chambers prepared, when to stop farming for Ascension, how to read random lobby pings and emotes, and how to diagnose failed runs before the boss.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-17",
dateModified: "2026-06-17",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "33 Immortals" },
{ "@type": "Thing", name: "33 Immortals beginner guide" },
{ "@type": "Thing", name: "33 Immortals first runs" },
{ "@type": "Thing", name: "33 Immortals progression" },
{ "@type": "Thing", name: "33 Immortals Dust" },
{ "@type": "Thing", name: "33 Immortals bones" },
{ "@type": "Thing", name: "33 Immortals Bone Shrine" },
{ "@type": "Thing", name: "33 Immortals Shrines" },
{ "@type": "Thing", name: "33 Immortals Teleport Stone" },
{ "@type": "Thing", name: "33 Immortals beginner Perks" },
{ "@type": "Thing", name: "33 Immortals Revive Perk" },
{ "@type": "Thing", name: "33 Immortals Unique Elites" },
{ "@type": "Thing", name: "33 Immortals Torture Chambers" },
{ "@type": "Thing", name: "33 Immortals Secret Chambers" },
{ "@type": "Thing", name: "33 Immortals Legendary Relic" },
{ "@type": "Thing", name: "33 Immortals Ascension" },
{ "@type": "Thing", name: "33 Immortals random lobby" },
{ "@type": "Thing", name: "33 Immortals emotes" },
{ "@type": "Thing", name: "33 Immortals pings" },
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
name: "What should I do first in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start by moving toward question marks, chests, jars, bones and useful reward fights. The first 10 minutes should build power instead of chasing every enemy across empty space.",
},
},
{
"@type": "Question",
name: "Should I save my purple level-up for later in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Spend your purple level-up when a useful stat choice appears. Holding unspent power makes the next Chamber, elite fight or Ascension route harder than it needs to be.",
},
},
{
"@type": "Question",
name: "What Perk should beginners use first in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"A revive-focused or survival Perk is the safest early pick, especially in random lobbies. It helps prevent deaths from snowballing before the boss route.",
},
},
{
"@type": "Question",
name: "Should I fight Unique Elites alone in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Unique Elites are dangerous early and should be treated as group targets. Back off, ping or wait for more players instead of turning an optional elite into a solo death.",
},
},
{
"@type": "Question",
name: "Are Secret Chambers worth entering in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, when your group is healthy, upgraded and ready. A successful Secret Chamber can reward surviving players with a Legendary Relic, but entering underprepared can damage the whole run.",
},
},
{
"@type": "Question",
name: "When should I use Shrines in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use shrine value before dangerous rooms, Ascension or boss routes. Healing, keys, teleport access and temporary shrine effects are strongest before the fight goes bad.",
},
},
{
"@type": "Question",
name: "What should I do when Ascension begins in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Stop farming, check the map, regroup and use teleport access if walking would make you late. Try to keep enough bones for one emergency heal, key, teleport or shrine decision when possible.",
},
},
{
"@type": "Question",
name: "How do I play better in random lobbies in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Watch emotes, pings, shrine stops, map movement and group behavior. Follow coordinated players or rotate to underfilled objectives instead of playing silently alone.",
},
},
{
"@type": "Question",
name: "Why do my 33 Immortals runs fall apart before the boss?",
acceptedAnswer: {
"@type": "Answer",
text:
"Common causes are chasing empty fights, entering Chambers low, trying to solo Unique Elites, using shrines too late, farming after Ascension starts or reaching the boss with no emergency resources left.",
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
       title="Survive Your First 33 Immortals Runs Without Wasting Resources"
       description="Learn where to go first, when to spend Dust, how to use Shrines and Perks, when to avoid Unique Elites, and how to reach Ascension with a stable run."
       gameTitle="33 Immortals"
       gameHref="/33-immortals"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 17, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <BeginnerProgressionGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
