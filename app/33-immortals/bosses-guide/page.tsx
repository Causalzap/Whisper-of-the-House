import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BossesGuideContent from "@/data/33-immortals/bosses-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/33-immortals/bosses-guide`;

const imageUrls = [
`${siteUrl}/images/33-immortals/33-immortals-lucifer-stack-marker.webp`,
`${siteUrl}/images/33-immortals/33-immortals-lucifer-blue-enemies-priority.webp`,
`${siteUrl}/images/33-immortals/33-immortals-adam-and-eve-boss.webp`,
`${siteUrl}/images/33-immortals/33-immortals-adam-eve-symbol-order.webp`,
`${siteUrl}/images/33-immortals/33-immortals-wrath-of-god-shield-callout.webp`,
`${siteUrl}/images/33-immortals/33-immortals-wrath-of-god-memory-pattern.webp`,
];

const toc = [
{ id: "bosses-guide", label: "Bosses guide" },
{ id: "before-boss", label: "Before any boss" },
{ id: "co-strike", label: "Co-Strike focus" },
{ id: "lucifer", label: "Lucifer boss guide" },
{ id: "lucifer-wipe-diagnosis", label: "Lucifer wipe diagnosis" },
{ id: "adam-and-eve", label: "Adam & Eve boss guide" },
{ id: "adam-eve-wipe-diagnosis", label: "Adam & Eve wipe diagnosis" },
{ id: "wrath-of-god", label: "Wrath of God boss guide" },
{ id: "wrath-wipe-diagnosis", label: "Wrath wipe diagnosis" },
{ id: "random-lobby-boss-rules", label: "Random lobby boss rules" },
{ id: "boss-wipe-patterns", label: "Boss wipe patterns" },
{ id: "boss-achievements", label: "Boss achievements" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/33-immortals",
label: "33 Immortals Guide Hub",
},
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
href: "/33-immortals/achievements-guide",
label: "33 Immortals Achievements Guide",
},
];

export const metadata: Metadata = {
title: "33 Immortals Bosses Guide: Lucifer, Adam & Eve, Wrath",
description:
"Beat 33 Immortals bosses with Lucifer phases, Adam & Eve pillars, Wrath of God shields, Co-Strike targets, random lobby rules and wipe fixes.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"33 Immortals Bosses Guide: Lucifer, Adam & Eve and Wrath of God",
description:
"Learn Lucifer phases, Adam & Eve six pillars, Wrath of God shields, cast bar puzzle targets, Co-Strike focus, random lobby boss rules and common wipe fixes.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "33 Immortals Lucifer stack marker during a boss fight.",
},
],
},
twitter: {
card: "summary_large_image",
title: "33 Immortals Bosses Guide",
description:
"Lucifer phases, Adam & Eve pillars, Wrath of God mechanics, Co-Strike targets and wipe fixes.",
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
name: "Bosses Guide",
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
"33 Immortals Bosses Guide: Lucifer Phases, Adam & Eve Pillars, Wrath of God Mechanics and Wipe Fixes",
description:
"A player-focused 33 Immortals bosses guide covering Lucifer, Adam & Eve and Wrath of God in 1.0. The guide explains Lucifer phases including Frozen Hate, Eternal Sorrow and Last Betrayal, phase push decisions, blue enemy priority, Co-Strike target swaps, Adam & Eve six pillars and symbol order, Wrath of God shield timing, sun, moon and fire calls, cast bar puzzle targets, memory patterns, random lobby boss rules, common wipe patterns and boss-related achievements.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-17",
dateModified: "2026-06-17",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "33 Immortals" },
{ "@type": "Thing", name: "33 Immortals bosses" },
{ "@type": "Thing", name: "33 Immortals boss guide" },
{ "@type": "Thing", name: "33 Immortals Lucifer" },
{ "@type": "Thing", name: "33 Immortals Lucifer phases" },
{ "@type": "Thing", name: "33 Immortals Frozen Hate" },
{ "@type": "Thing", name: "33 Immortals Eternal Sorrow" },
{ "@type": "Thing", name: "33 Immortals Last Betrayal" },
{ "@type": "Thing", name: "33 Immortals Lucifer stack marker" },
{ "@type": "Thing", name: "33 Immortals Lucifer phase push" },
{ "@type": "Thing", name: "33 Immortals Adam and Eve" },
{ "@type": "Thing", name: "33 Immortals Adam & Eve pillars" },
{ "@type": "Thing", name: "33 Immortals symbol order" },
{ "@type": "Thing", name: "33 Immortals Wrath of God" },
{ "@type": "Thing", name: "33 Immortals Wrath of God shield" },
{ "@type": "Thing", name: "33 Immortals cast bar puzzle crystals" },
{ "@type": "Thing", name: "33 Immortals memory pattern" },
{ "@type": "Thing", name: "33 Immortals Co-Strike" },
{ "@type": "Thing", name: "33 Immortals random lobby boss rules" },
{ "@type": "Thing", name: "33 Immortals boss achievements" },
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
name: "How many major bosses are in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"The main 1.0 boss route covers Lucifer, Adam & Eve and Wrath of God.",
},
},
{
"@type": "Question",
name: "How do I beat Lucifer in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Learn Lucifer's three phases: Frozen Hate, Eternal Sorrow and Last Betrayal. Handle safe lanes and shackles, destroy Eternal Sorrow crystal tears, stack during Last Betrayal, and only push a phase if the group clearly has enough damage.",
},
},
{
"@type": "Question",
name: "What are Lucifer's phases in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Lucifer's key phases are Frozen Hate, Eternal Sorrow and Last Betrayal. Frozen Hate uses lane and shackle pressure, Eternal Sorrow uses crystal tears, and Last Betrayal uses stack marker pressure.",
},
},
{
"@type": "Question",
name: "What is the Lucifer phase push trick in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"If Lucifer is very close to the next health threshold and the group has enough damage, pushing the phase can cancel the current mechanic. If the damage is uncertain, solve the mechanic first.",
},
},
{
"@type": "Question",
name: "How do I beat Adam & Eve in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Spread for the six pillars, read the edge order indicators, hit the correct symbols, dash through waves, and clear mobs without losing the order check.",
},
},
{
"@type": "Question",
name: "What are the Adam & Eve pillars in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Adam & Eve can spawn six pillars in symbol pairs such as hands, birds and fish. The group needs to cover the arena and follow the correct order instead of hitting random pillars.",
},
},
{
"@type": "Question",
name: "How do I beat Wrath of God in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Respect shield timing, follow sun, moon and fire calls, learn memory patterns, and destroy puzzle crystals or required objects before the cast bar finishes.",
},
},
{
"@type": "Question",
name: "Why does Wrath of God wipe the whole arena?",
acceptedAnswer: {
"@type": "Answer",
text:
"A common cause is ignoring cast bar puzzle objects. When Wrath begins a dangerous cast, destroy the required crystals or targets before the cast completes.",
},
},
{
"@type": "Question",
name: "Is boss damage more important than mechanics in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Boss damage matters during safe windows, but mechanics, priority adds, pillars, tears, shields and puzzle objects come first.",
},
},
{
"@type": "Question",
name: "How should random lobbies handle boss fights in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Follow the group during stack and movement mechanics, focus the correct priority target together, and use pings or emotes only when they help the group make a better decision.",
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
       title="Beat 33 Immortals Bosses by Solving Mechanics First"
       description="Learn Lucifer phases, Adam & Eve pillar order, Wrath of God shields, Co-Strike targets and random lobby wipe fixes before chasing boss damage."
       gameTitle="33 Immortals"
       gameHref="/33-immortals"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 17, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <BossesGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
