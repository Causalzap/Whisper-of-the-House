import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import NewCampWalkthroughContent from "@/data/gothic-1-remake/new-camp-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gothic-1-remake/new-camp-walkthrough`;

const imageUrls = [
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-mordrag-new-camp-escort.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-new-camp-entrance-mordrag-ring.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-lares-new-camp.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-baal-kagan-scrolls.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-roscoe-charm-lares-access.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-herb-merchant-baal-isidro.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-lefty-water-farmers.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-lefty-fight-rice-fields.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-jeremiah-rice-lord-horatio.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-the-raid-wedge.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-shrike-hut-gorn.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-diggers-dress-swiney.webp`,
];

const toc = [
{ id: "new-camp-walkthrough", label: "New Camp walkthrough" },
{ id: "lares-task-pool", label: "Lares task pool" },
{ id: "route-overview", label: "Route overview" },
{ id: "mordrag-ring", label: "Mordrag's Ring" },
{ id: "bridge-toll", label: "Bridge toll" },
{ id: "mordrag-old-room", label: "Mordrag's room" },
{ id: "meet-lares", label: "Meet Lares" },
{ id: "get-diegos-list-first", label: "Diego's List" },
{ id: "charm-roscoe", label: "Charm Roscoe" },
{ id: "herb-merchant", label: "Herb Merchant" },
{ id: "rice-lord-lefty", label: "Rice Lord / Lefty" },
{ id: "the-raid", label: "The Raid" },
{ id: "shrike-hut-gorn", label: "Shrike's hut" },
{ id: "free-mine-swiney", label: "Free Mine" },
{ id: "new-camp-training", label: "Trainers" },
{ id: "final-join", label: "Final join" },
{ id: "rewards", label: "Rewards" },
{ id: "mistakes", label: "Mistakes" },
{ id: "anti-mistake-checklist", label: "Checklist" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/gothic-1-remake",
label: "Gothic 1 Remake Guide Hub",
},
{
href: "/gothic-1-remake/best-faction",
label: "Gothic 1 Remake Best Faction Guide",
},
{
href: "/gothic-1-remake/old-mine-diegos-list",
label: "Gothic 1 Remake Diego's List Guide",
},
{
href: "/gothic-1-remake/perfect-start",
label: "Gothic 1 Remake Perfect Start Route",
},
{
href: "/gothic-1-remake/early-ore-weapons-armor",
label: "Gothic 1 Remake Early Gear Guide",
},
{
href: "/gothic-1-remake/swamp-camp-walkthrough",
label: "Gothic 1 Remake Swamp Camp Walkthrough",
},
];

export const metadata: Metadata = {
title: "Gothic 1 Remake New Camp: How to Join Lares",
description:
"How to join New Camp in Gothic 1 Remake: 3 Lares tasks, Mordrag’s Ring, Diego’s List, Herb Merchant, The Raid, Level 5, and 10 ore toll.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Gothic 1 Remake New Camp Walkthrough: Lares, Mordrag, Herb Merchant and The Raid",
description:
"Complete the Gothic 1 Remake New Camp route with Mordrag’s Ring, Diego’s List, Lares’s 3 out of 5 task pool, Herb Merchant, Silas, Baal Isidro, swampweed buyers, Rice Lord, Lefty, The Raid, Wedge, Level 5, and the final join step.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Gothic 1 Remake New Camp walkthrough using Mordrag escort.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Gothic 1 Remake New Camp Walkthrough",
description:
"Join New Camp with Mordrag’s Ring, Diego’s List, Herb Merchant, The Raid, Rice Lord, Level 5, and Lares explained.",
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
name: "Gothic 1 Remake Guide",
item: `${siteUrl}/gothic-1-remake`,
},
{
"@type": "ListItem",
position: 3,
name: "New Camp Walkthrough",
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
"Gothic 1 Remake New Camp Walkthrough: How to Join Lares, Complete 3 out of 5 Tasks, Use Mordrag's Ring, Diego's List, Herb Merchant and The Raid",
description:
"A player-focused Gothic 1 Remake New Camp walkthrough explaining how to join Lares's New Camp route, reach Level 5, complete at least 3 major Lares tasks, keep Mordrag alive, use Mordrag's Ring, avoid killing Mordrag for Thorus, handle the 10 ore bridge toll on the road back to Old Camp, use Mordrag's old room after he leaves, show Diego's List to Lares before Diego, use Charm on Roscoe, complete Herb Merchant with Silas rice schnapps, Baal Isidro's swampweed shipment and New Camp buyers such as Sharky, Cronos, Malon, Silas, mercenaries and bandits, handle Rice Lord and Lefty, use Jeremiah and Horatio correctly, complete The Raid with Wedge on the road between Old Mine and Old Camp, visit Free Mine for Swiney's Digger's Dress, and return to Lares for the final New Camp join step.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-08",
dateModified: "2026-06-08",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Gothic 1 Remake" },
{ "@type": "Thing", name: "Gothic 1 Remake New Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake New Camp walkthrough" },
{ "@type": "Thing", name: "Gothic 1 Remake how to join New Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake Lares" },
{ "@type": "Thing", name: "Gothic 1 Remake Mordrag" },
{ "@type": "Thing", name: "Gothic 1 Remake Mordrag's Ring" },
{ "@type": "Thing", name: "Gothic 1 Remake Diego's List" },
{ "@type": "Thing", name: "Gothic 1 Remake Roscoe" },
{ "@type": "Thing", name: "Gothic 1 Remake Charm Roscoe" },
{ "@type": "Thing", name: "Gothic 1 Remake Herb Merchant" },
{ "@type": "Thing", name: "Gothic 1 Remake Baal Isidro" },
{ "@type": "Thing", name: "Gothic 1 Remake Silas" },
{ "@type": "Thing", name: "Gothic 1 Remake Sharky" },
{ "@type": "Thing", name: "Gothic 1 Remake Cronos" },
{ "@type": "Thing", name: "Gothic 1 Remake Rice Lord" },
{ "@type": "Thing", name: "Gothic 1 Remake Lefty" },
{ "@type": "Thing", name: "Gothic 1 Remake Horatio" },
{ "@type": "Thing", name: "Gothic 1 Remake The Raid" },
{ "@type": "Thing", name: "Gothic 1 Remake Wedge" },
{ "@type": "Thing", name: "Gothic 1 Remake Free Mine" },
{ "@type": "Thing", name: "Gothic 1 Remake Swiney" },
{ "@type": "Thing", name: "Gothic 1 Remake Digger's Dress" },
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
name: "How do I join the New Camp in Gothic 1 Remake?",
acceptedAnswer: {
"@type": "Answer",
text:
"Reach Level 5 and complete at least three major Lares tasks. The clean route is usually Mordrag's Ring, Diego's List, and Herb Merchant, with Rice Lord / Lefty and The Raid as extra task options.",
},
},
{
"@type": "Question",
name: "Do I need to complete every New Camp task?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. You need enough proof for Lares, commonly at least three major joining tasks plus Level 5. You do not need to finish every optional route before checking with him.",
},
},
{
"@type": "Question",
name: "Should I kill Mordrag for Thorus?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. If you want New Camp, Mordrag is far more valuable alive. He escorts you to New Camp, gives you the ring Lares needs, and leaves his old Old Camp room usable.",
},
},
{
"@type": "Question",
name: "What does Mordrag's Ring do?",
acceptedAnswer: {
"@type": "Answer",
text:
"Mordrag's Ring proves he sent you and helps you reach Lares. It is one of the key New Camp joining items.",
},
},
{
"@type": "Question",
name: "What happens on the way back to Old Camp?",
acceptedAnswer: {
"@type": "Answer",
text:
"Two guards at the bridge can stop you and ask for 10 ore. You can pay, run, or fight, but save first so the encounter does not surprise you.",
},
},
{
"@type": "Question",
name: "Should I give Diego's List to Lares?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, if you want the stronger flexible route. Show it to Lares before Diego so Lares can use it for New Camp progress.",
},
},
{
"@type": "Question",
name: "How do I Charm Roscoe?",
acceptedAnswer: {
"@type": "Answer",
text:
"Complete Baal Kagan's cigarette task, choose scrolls as the reward, make sure you have a Charm scroll, then cast it on Roscoe before entering Lares's shack.",
},
},
{
"@type": "Question",
name: "How do I complete Herb Merchant?",
acceptedAnswer: {
"@type": "Answer",
text:
"Accept the quest from Lares, buy rice schnapps from Silas if Baal Isidro needs convincing, get Isidro's swampweed shipment, sell it through New Camp buyers until you have 400 ore, then return the money to Lares.",
},
},
{
"@type": "Question",
name: "Who buys the Herb Merchant swampweed?",
acceptedAnswer: {
"@type": "Answer",
text:
"Possible buyers include Sharky, Cronos, Malon, Silas, and individual mercenaries or bandits. You can split sales as long as you return 400 ore to Lares.",
},
},
{
"@type": "Question",
name: "What is The Raid?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Raid is a Lares task that sends you to Wedge and the raiders on the road between Old Mine and Old Camp. You help distract the guards and trigger the ambush.",
},
},
{
"@type": "Question",
name: "What level do I need to join New Camp?",
acceptedAnswer: {
"@type": "Answer",
text:
"Reach Level 5 before the final New Camp joining step.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Best Faction Guide if you are still choosing a camp, the Diego's List Guide before handing in Ian's list, or the Early Gear Guide if you need Digger's Dress, Rider's Bow, or more ore.",
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
       title="Join the New Camp Without Wasting Lares’s Tasks"
       description="Use Mordrag’s Ring, Diego’s List, Herb Merchant, The Raid, Rice Lord tasks, and Level 5 to join Lares’s New Camp route."
       gameTitle="Gothic 1 Remake"
       gameHref="/gothic-1-remake"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 8, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <NewCampWalkthroughContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
