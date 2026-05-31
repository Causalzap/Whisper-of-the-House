import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FastTravelContent from "@/data/mina-the-hollower/fast-travel.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mina-the-hollower/fast-travel`;

const imageUrls = [
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-train-donation-box.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-train-funding-september.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-bone-stone.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-train-ticket-selection.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-train-leaves-warning.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-mirror-location-note.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-mirror-fast-travel-point.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-underlab-rest-point.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-tenebrous-times-newspaper.webp`,
];

const toc = [
{ id: "how-to-unlock-fast-travel", label: "Unlock fast travel" },
{ id: "station-locations", label: "Train station locations" },
{ id: "train-stations", label: "How stations work" },
{ id: "how-much-cost", label: "Train cost" },
{ id: "train-ticket", label: "Train tickets" },
{ id: "mirror-locations", label: "Mirror locations" },
{ id: "astral-orrery", label: "Astral Orrery" },
{ id: "poppit-shop-fast-travel", label: "Poppit Shop travel" },
{ id: "when-to-fund", label: "When to fund the train" },
{ id: "travel-planning", label: "Travel planning" },
{ id: "newspaper", label: "Newspapers near stations" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
    {
        href: "/mina-the-hollower/all-trinkets-guide",
        label: "All Trinkets Guide",
      },
{ href: "/mina-the-hollower", label: "Mina the Hollower Beginner Guide" },
{
href: "/mina-the-hollower/how-to-get-map",
label: "How to Get the Map in Mina the Hollower",
},
{
href: "/mina-the-hollower/bones-farming",
label: "How to Farm Bones Fast in Mina the Hollower",
},
{
href: "/mina-the-hollower/where-to-go-first",
label: "Where to Go First in Mina the Hollower",
},
{
href: "/mina-the-hollower/best-starting-weapon",
label: "Best Starting Weapon in Mina the Hollower",
},
{
href: "/mina-the-hollower/best-early-trinkets",
label: "Best Early Trinkets in Mina the Hollower",
},
];

export const metadata: Metadata = {
title: "Mina the Hollower Fast Travel Guide: Train & Mirrors",
description:
"Unlock fast travel in Mina the Hollower: train stations, 10,000-Bone funding, tickets, mirrors, Astral Orrery and Coltrane Peak routes.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Mina the Hollower Fast Travel: Train Stations, Mirrors and Astral Orrery",
description:
"Find train stations, understand the shared 10,000-Bone train fund, use tickets, track mirrors and unlock Astral Orrery progress.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1080,
height: 492,
alt: "Mina the Hollower train station donation box used to fund a replacement train.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Mina the Hollower Fast Travel Guide",
description:
"Learn train station locations, mirror locations, the shared 10,000-Bone train fund and Astral Orrery progress.",
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
name: "Mina the Hollower Guide",
item: `${siteUrl}/mina-the-hollower`,
},
{
"@type": "ListItem",
position: 3,
name: "Fast Travel",
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
"Mina the Hollower Fast Travel Guide: Train Stations, Shared 10,000-Bone Funding, Mirror Locations, Poppit Holes and Astral Orrery",
description:
"A player-focused Mina the Hollower fast travel guide explaining how to unlock train travel, how the shared 10,000-Bone train fund works, where to find all five train stations including Ossex Train Station, Nox's Bayou Train Station, Septemburg Train Station, Bone Beach Train Station and Coltrane Peak Train Station, how to reach Bone Beach Train Station from Sifted Sands by using TNT on the bottom-right route, how train tickets work, why the train can leave after selecting a ticket, how to plan Bone Stone savings for train funding, where key mirrors are found including Queensbury Crypt Mirror, Nox's Bayou Mirror, Septemburg Mirror, Bone Beach Mirror, Coltrane Peak Mirror and Manor Mirror, how mirrors connect to Astral Orrery progress, how the large Ossex mirror fits into the mirror route, how Poppit Shop holes work as a smaller shortcut system, and when players should fund the train instead of spending Bones on upgrades or weapons.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-30",
dateModified: "2026-05-30",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Mina the Hollower" },
{ "@type": "Thing", name: "Fast Travel" },
{ "@type": "Thing", name: "Train Stations" },
{ "@type": "Thing", name: "Ossex Train Station" },
{ "@type": "Thing", name: "Nox's Bayou Train Station" },
{ "@type": "Thing", name: "Septemburg Train Station" },
{ "@type": "Thing", name: "Bone Beach Train Station" },
{ "@type": "Thing", name: "Coltrane Peak Train Station" },
{ "@type": "Thing", name: "Bowery" },
{ "@type": "Thing", name: "Shanty Swamp" },
{ "@type": "Thing", name: "Farm Crossing" },
{ "@type": "Thing", name: "Sandy Station" },
{ "@type": "Thing", name: "Frigid Station" },
{ "@type": "Thing", name: "Sifted Sands" },
{ "@type": "Thing", name: "TNT" },
{ "@type": "Thing", name: "Coltrane Peak" },
{ "@type": "Thing", name: "Bone Stones" },
{ "@type": "Thing", name: "Train tickets" },
{ "@type": "Thing", name: "Mirror locations" },
{ "@type": "Thing", name: "Queensbury Crypt Mirror" },
{ "@type": "Thing", name: "Nox's Bayou Mirror" },
{ "@type": "Thing", name: "Septemburg Mirror" },
{ "@type": "Thing", name: "Bone Beach Mirror" },
{ "@type": "Thing", name: "Coltrane Peak Mirror" },
{ "@type": "Thing", name: "Manor Mirror" },
{ "@type": "Thing", name: "Astral Orrery" },
{ "@type": "Thing", name: "Poppit Shop" },
{ "@type": "Thing", name: "Tenebrous Times" },
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
name: "How do you unlock fast travel in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"Fund the replacement train by donating Bones at train station donation boxes. Once the shared 10,000-Bone goal is reached, train travel opens across the network.",
},
},
{
"@type": "Question",
name: "Is the 10,000-Bone train cost shared?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. The 10,000-Bone train fund is shared across all stations. You do not need to donate 10,000 Bones at every station.",
},
},
{
"@type": "Question",
name: "Where is the first train station?",
acceptedAnswer: {
"@type": "Answer",
text:
"The easiest early station to learn is Ossex Train Station in Bowery. It is north of Bowery, near the Western Hills exit.",
},
},
{
"@type": "Question",
name: "What are all train station locations?",
acceptedAnswer: {
"@type": "Answer",
text:
"The five stations are Ossex Train Station, Nox's Bayou Train Station, Septemburg Train Station, Bone Beach Train Station and Coltrane Peak Train Station.",
},
},
{
"@type": "Question",
name: "How do I reach Bone Beach Train Station?",
acceptedAnswer: {
"@type": "Answer",
text:
"Go to the Sandfalls region near Sifted Sands, head toward the bottom-right route, and use the TNT to open the path to Bone Beach Train Station.",
},
},
{
"@type": "Question",
name: "How do I get to Coltrane Peak?",
acceptedAnswer: {
"@type": "Answer",
text:
"Once the train is funded, Coltrane Peak becomes a train destination through Coltrane Peak Train Station. You can also find it after scaling the mountain north of Eastern Heath.",
},
},
{
"@type": "Question",
name: "What happens after I select a train ticket?",
acceptedAnswer: {
"@type": "Answer",
text:
"Board quickly. If you select a ticket and then linger too long, the train can leave without you.",
},
},
{
"@type": "Question",
name: "Is the train required for progress?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, eventually. The train is not just a convenience unlock; it becomes important for reaching and revisiting key areas.",
},
},
{
"@type": "Question",
name: "Where are the mirror locations?",
acceptedAnswer: {
"@type": "Answer",
text:
"Important mirrors include Queensbury Crypt Mirror in Statue Head Hall, Nox's Bayou Mirror in Moonlit Path, Septemburg Mirror in Farm House / Crow Town, Bone Beach Mirror in Worm's Back, Coltrane Peak Mirror in Icebound Cavern and Manor Mirror in Radiant Manor / Grand Hall.",
},
},
{
"@type": "Question",
name: "What do mirrors do?",
acceptedAnswer: {
"@type": "Answer",
text:
"Mirrors connect to Astral Orrery progress. Enter them, activate their routes or switches, and track which regions you have completed.",
},
},
{
"@type": "Question",
name: "How do I unlock Astral Orrery?",
acceptedAnswer: {
"@type": "Answer",
text:
"Astral Orrery is tied to mirror progress. Find mirrors across major regions, enter them, activate their routes, then use the large Ossex mirror once the path is ready.",
},
},
{
"@type": "Question",
name: "Should I fund the train early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Not before your essentials. Buy the Isle Map and upgrade Attack, Defense and survival first. After that, start donating spare or protected Bones to the train.",
},
},
{
"@type": "Question",
name: "Should I use Bone Stones for train funding?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, Bone Stones are useful for saving toward the train because they protect value better than loose Bones while you move through risky routes.",
},
},
{
"@type": "Question",
name: "What is Poppit Shop fast travel?",
acceptedAnswer: {
"@type": "Answer",
text:
"After finding all three Poppit Shops, Grinnsly's lair gives you holes that send Mina to Western Wilds: Molten Foundry, Southern Outskirts: Commons, and Eastern Heath: Grassland.",
},
},
{
"@type": "Question",
name: "How do I avoid losing Bones while saving for the train?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use Bone Stones, spend before dangerous routes and avoid carrying more loose Bones than you are willing to lose.",
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
       title="How Do You Unlock Fast Travel?"
       description="Restore the train, find every station, track mirrors and stop walking across the island the hard way. This guide explains the shared train fund, tickets, mirror routes and Astral Orrery progress."
       gameTitle="Mina the Hollower"
       gameHref="/mina-the-hollower"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 30, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <FastTravelContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
