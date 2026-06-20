import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ShardsOfLifeContent from "@/data/the-adventures-of-elliot/shards-of-life-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-adventures-of-elliot/shards-of-life-locations`;

const imageUrls = [
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-shard-of-life-key-item.webp`,
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-chamber-of-light-shard-chest.webp`,
];

const toc = [
{ id: "shards-of-life-locations", label: "Shards of Life locations" },
{ id: "how-shards-of-life-work", label: "How Shards work" },
{ id: "use-the-map-first", label: "Use the map first" },
{ id: "best-shard-cleanup-route", label: "Best cleanup route" },
{ id: "shard-location-tags", label: "Shard tags" },
{ id: "shard-count-by-age", label: "Shard count by age" },
{
id: "age-of-safekeeping-shard-locations",
label: "Age of Safekeeping",
},
{
id: "age-of-reconstruction-shard-locations",
label: "Age of Reconstruction",
},
{ id: "age-of-magic-shard-locations", label: "Age of Magic" },
{ id: "age-of-budding-shard-locations", label: "Age of Budding" },
{
id: "shards-shrines-and-secret-routes",
label: "Shards, Shrines and shortcuts",
},
{ id: "easiest-shards-to-miss", label: "Easiest Shards to miss" },
{ id: "missing-shard-of-life", label: "Missing one Shard" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "what-to-read-next", label: "What to read next" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/the-adventures-of-elliot",
label: "The Adventures of Elliot Guide Hub",
},
{
href: "/the-adventures-of-elliot/walkthrough",
label: "The Adventures of Elliot Walkthrough",
},
{
href: "/the-adventures-of-elliot/cat-locations",
label: "The Adventures of Elliot Cat Locations",
},
{
href: "/the-adventures-of-elliot/manuscript-locations",
label: "The Adventures of Elliot Manuscript Locations",
},
{
    href: "/the-adventures-of-elliot/beginner-guide",
    label: "The Adventures of Elliot Beginner Guide",
    },
{
href: "/the-adventures-of-elliot/achievements-guide",
label: "The Adventures of Elliot Achievements Guide",
},
];

const faqEntities = [
{
"@type": "Question",
name: "How many Shards of Life are in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"There are 60 Shards of Life in The Adventures of Elliot: The Millennium Tales.",
},
},
{
"@type": "Question",
name: "Are Shards of Life missable in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Shards of Life are not permanently missable. If a route is blocked, continue progressing, then return later with the required ability, spell, shortcut, trail access, or age state.",
},
},
{
"@type": "Question",
name: "Does the map show Shards of Life in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"The map can show unopened chests and Shrine of Life locations. Use the map first, then use the guide when the marker is visible but the route is unclear.",
},
},
{
"@type": "Question",
name: "How many Shards of Life are in each age?",
acceptedAnswer: {
"@type": "Answer",
text:
"There are 16 Shards in the Age of Safekeeping, 18 in the Age of Reconstruction, 13 in the Age of Magic, and 13 in the Age of Budding.",
},
},
{
"@type": "Question",
name: "How many Shards of Life do I need for one HP upgrade?",
acceptedAnswer: {
"@type": "Answer",
text:
"You need 4 Shards of Life for one max HP increase.",
},
},
{
"@type": "Question",
name: "How many HP upgrades do all Shards of Life give?",
acceptedAnswer: {
"@type": "Answer",
text:
"All 60 Shards of Life give 15 max HP upgrades.",
},
},
{
"@type": "Question",
name: "Are Shards of Life and Shrines of Life the same thing?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Shards of Life are HP fragments. Shrines of Life are challenge locations that can reward Shards.",
},
},
{
"@type": "Question",
name: "Do 4 Shards of Life unlock a Shrine of Life?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Four Shards of Life give a max HP increase. A Shrine of Life is a separate map location, not something unlocked by collecting 4 Shards.",
},
},
{
"@type": "Question",
name: "Why does my map say Hucarea instead of Fields of Flon?",
acceptedAnswer: {
"@type": "Answer",
text:
"Eastern Fields of Flon and Western Fields of Flon may appear as Eastern Hucarea and Western Hucarea before the area renaming. Use the east or west position to match the route.",
},
},
{
"@type": "Question",
name: "What should I check first if I am missing one Shard of Life?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check map markers first, then Shrines of Life, Secret Shortcuts, Monster Trails, dive routes, Water Ruins, Dragonpillar, Mount Phoenix, and ruins sublevels.",
},
},
{
"@type": "Question",
name: "Why can I see a Shard chest but not reach it?",
acceptedAnswer: {
"@type": "Answer",
text:
"The chest may require bombs, dive, swimming, Heavy Hammer, spear, Vacuum, Warp, Ignite, a key, a Secret Shortcut, a Monster Trail, or a different age.",
},
},
{
"@type": "Question",
name: "Which age has the most Shards of Life?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Age of Reconstruction has the most Shards of Life, with 18 total.",
},
},
{
"@type": "Question",
name: "Are Shards of Life worth collecting early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Since every 4 Shards increase max HP, collecting reachable Shards early makes combat, hazards, Shrines, and bosses easier.",
},
},
{
"@type": "Question",
name: "Is this Shards of Life checklist in story order?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. It is organized by age for cleanup. Use it to verify which Shards you collected in each age, then check requirements for any missing route.",
},
},
];

export const metadata: Metadata = {
title: "The Adventures of Elliot Shards of Life Locations: All 60",
description:
"Find all 60 Shards of Life in The Adventures of Elliot, HP upgrades, map markers, Shrines, Secret Shortcuts, Monster Trails and missing Shards.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"The Adventures of Elliot Shards of Life Locations: All 60, HP Upgrades and Missing Shards",
description:
"Find every Shard of Life in The Adventures of Elliot with all 60 locations by age, HP upgrade rules, non-missable cleanup, map markers, Shrines of Life, Secret Shortcuts, Monster Trails, dive routes, spell gates, and Hucarea / Fields of Flon naming notes.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Shard of Life key item in The Adventures of Elliot.",
},
],
},
twitter: {
card: "summary_large_image",
title: "The Adventures of Elliot Shards of Life Locations: All 60",
description:
"Find all 60 Shards, HP upgrades, map markers, Shrines, Secret Shortcuts, Monster Trails and missing Shard fixes.",
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
name: "The Adventures of Elliot Guide",
item: `${siteUrl}/the-adventures-of-elliot`,
},
{
"@type": "ListItem",
position: 3,
name: "Shards of Life Locations",
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
"The Adventures of Elliot Shards of Life Locations: All 60, HP Upgrades, Map Markers, Shrines and Missing Shards",
description:
"A player-focused The Adventures of Elliot Shards of Life locations guide covering all 60 Shards by age, 16 Shards in the Age of Safekeeping, 18 in the Age of Reconstruction, 13 in the Age of Magic, 13 in the Age of Budding, 4-Shard max HP upgrades, 15 total HP upgrades, non-missable Shard cleanup, in-game map chest and Shrine markers, Shrine of Life rewards, Secret Shortcuts, Monster Trails, dive routes, bomb routes, Vacuum, Warp, Ignite, ruins sublevels, Hucarea and Fields of Flon naming differences, and missing-Shard troubleshooting.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-18",
dateModified: "2026-06-20",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "The Adventures of Elliot: The Millennium Tales",
},
{
"@type": "Thing",
name: "The Adventures of Elliot Shards of Life locations",
},
{
"@type": "Thing",
name: "The Adventures of Elliot all 60 Shards of Life",
},
{ "@type": "Thing", name: "Shard of Life" },
{ "@type": "Thing", name: "Shrine of Life" },
{ "@type": "Thing", name: "The Adventures of Elliot max HP upgrade" },
{ "@type": "Thing", name: "4 Shards of Life" },
{ "@type": "Thing", name: "15 HP upgrades" },
{ "@type": "Thing", name: "The Adventures of Elliot missing Shard of Life" },
{ "@type": "Thing", name: "The Adventures of Elliot map markers" },
{ "@type": "Thing", name: "unopened chests" },
{ "@type": "Thing", name: "Secret Shortcuts" },
{ "@type": "Thing", name: "Monster Trails" },
{ "@type": "Thing", name: "Age of Safekeeping" },
{ "@type": "Thing", name: "Age of Reconstruction" },
{ "@type": "Thing", name: "Age of Magic" },
{ "@type": "Thing", name: "Age of Budding" },
{ "@type": "Thing", name: "Eastern Fields of Flon" },
{ "@type": "Thing", name: "Western Fields of Flon" },
{ "@type": "Thing", name: "Eastern Hucarea" },
{ "@type": "Thing", name: "Western Hucarea" },
{ "@type": "Thing", name: "Water Ruins" },
{ "@type": "Thing", name: "Dragonpillar" },
{ "@type": "Thing", name: "Mount Phoenix" },
{ "@type": "Thing", name: "Geared Ruins" },
{ "@type": "Thing", name: "Rainbow Lotus" },
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
mainEntity: faqEntities,
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
       title="The Adventures of Elliot Shards of Life Locations: All 60"
       description="Find every Shard of Life with all 60 locations by age, HP upgrade rules, map marker cleanup, Shrines, Secret Shortcuts, Monster Trails and missing-Shard fixes."
       gameTitle="The Adventures of Elliot"
       gameHref="/the-adventures-of-elliot"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 20, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <ShardsOfLifeContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
