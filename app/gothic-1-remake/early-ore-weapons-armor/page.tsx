import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EarlyGearContent from "@/data/gothic-1-remake/early-ore-weapons-armor.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gothic-1-remake/early-ore-weapons-armor`;

const imageUrls = [
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-old-sword-starting-route.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-drax-hunting-knife.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-drax-free-short-bow.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-hidden-riders-bow-cave.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-riders-bow-stats.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-diggers-dress-swiney.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-drax-hunting-skills.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-mining-ore-nuggets.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-fisk-trader-gear.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-whistlers-sword-fisk.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-graham-map.webp`,
];

const toc = [
{ id: "early-gear-guide", label: "Early gear guide" },
{ id: "best-early-weapons", label: "Best early weapons" },
{ id: "old-sword-location", label: "Old Sword location" },
{ id: "free-short-bow", label: "Free short bow" },
{ id: "riders-bow", label: "Rider's Bow" },
{ id: "digger-dress", label: "Digger's Dress" },
{ id: "how-to-get-ore-early", label: "Early ore" },
{ id: "hunting-income", label: "Hunting income" },
{ id: "blacksmithing-income", label: "Blacksmithing income" },
{ id: "mining-and-free-mine", label: "Mining and Free Mine" },
{ id: "what-to-buy-first", label: "What to buy first" },
{ id: "whistlers-sword", label: "Whistler's Sword" },
{ id: "map-before-expensive-gear", label: "Map before gear" },
{ id: "new-camp-weapon-route", label: "New Camp rewards" },
{ id: "early-gear-mistakes", label: "Gear mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/gothic-1-remake",
label: "Gothic 1 Remake Guide Hub",
},
{
href: "/gothic-1-remake/beginner-guide",
label: "Gothic 1 Remake Beginner Guide",
},
{
href: "/gothic-1-remake/perfect-start",
label: "Gothic 1 Remake Perfect Start",
},
{
href: "/gothic-1-remake/best-faction",
label: "Gothic 1 Remake Best Faction Guide",
},
{
href: "/gothic-1-remake/old-camp-walkthrough",
label: "Gothic 1 Remake Old Camp Walkthrough",
},
{
href: "/gothic-1-remake/old-mine-diegos-list",
label: "Gothic 1 Remake Diego's List Guide",
},
];

export const metadata: Metadata = {
title: "Gothic 1 Remake Early Gear: Weapons, Ore & Armor",
description:
"Find Gothic 1 Remake early weapons, Digger’s Dress, Rider’s Bow, ore sources, lockpick prices, Whistler’s Sword, and what to buy first.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Gothic 1 Remake Early Gear Guide: Weapons, Ore, Armor and What to Buy First",
description:
"Get the best early gear in Gothic 1 Remake, including the Old Sword, Drax’s free bow, Rider’s Bow, Digger’s Dress, Fisk prices, ore income, blacksmithing, mining, and Whistler’s Sword choices.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Gothic 1 Remake Old Sword location near the bridge before the Old Camp.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Gothic 1 Remake Early Gear Guide",
description:
"Old Sword, Digger’s Dress, Rider’s Bow, ore sources, Fisk prices, and early gear choices explained.",
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
name: "Early Gear Guide",
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
"Gothic 1 Remake Early Gear Guide: Old Sword, Digger's Dress, Rider's Bow, Ore, Armor and Early Weapons",
description:
"A player-focused Gothic 1 Remake early gear guide explaining where to find the Old Sword before the Old Camp, how to return Drax's hunting knife for a free short bow, where to find Rider's Bow in the hidden underwater cave on the route toward New Camp, how to get Digger's Dress free from Swiney at the Free Mine instead of buying it from Fisk for 313 ore, how much lockpicks cost, whether to return Whistler's Sword, how to make early ore through hunting, blacksmithing, mining, New Camp errands and careful looting, and what players should buy first before wasting ore on expensive trader gear.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-07",
dateModified: "2026-06-07",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Gothic 1 Remake" },
{ "@type": "Thing", name: "Gothic 1 Remake early gear" },
{ "@type": "Thing", name: "Gothic 1 Remake early weapons" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Sword" },
{ "@type": "Thing", name: "Gothic 1 Remake Drax hunting knife" },
{ "@type": "Thing", name: "Gothic 1 Remake free bow" },
{ "@type": "Thing", name: "Gothic 1 Remake Rider's Bow" },
{ "@type": "Thing", name: "Gothic 1 Remake Digger's Dress" },
{ "@type": "Thing", name: "Gothic 1 Remake Swiney" },
{ "@type": "Thing", name: "Gothic 1 Remake Free Mine" },
{ "@type": "Thing", name: "Gothic 1 Remake Fisk" },
{ "@type": "Thing", name: "Gothic 1 Remake lockpicks" },
{ "@type": "Thing", name: "Gothic 1 Remake Whistler's Sword" },
{ "@type": "Thing", name: "Gothic 1 Remake blacksmithing" },
{ "@type": "Thing", name: "Gothic 1 Remake mining" },
{ "@type": "Thing", name: "Gothic 1 Remake ore" },
{ "@type": "Thing", name: "Gothic 1 Remake armor" },
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
name: "What is the best early armor in Gothic 1 Remake?",
acceptedAnswer: {
"@type": "Answer",
text:
"Digger's Dress is the best early armor target. Get it free from Swiney at the Free Mine south of the New Camp if you can, instead of buying it from Fisk for 313 ore.",
},
},
{
"@type": "Question",
name: "Where is the Old Sword?",
acceptedAnswer: {
"@type": "Answer",
text:
"After the abandoned mine area, follow the road left and uphill to the bridge. Cross the bridge, then check the dead tree with the hanging corpse on the right side of the path. The Old Sword is on the ground at its base.",
},
},
{
"@type": "Question",
name: "How do I get a free bow early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Find Drax near the hunter camp off the early road before the Old Camp. Pick up his hunting knife nearby and return it to him for a free short bow.",
},
},
{
"@type": "Question",
name: "Where is Rider's Bow?",
acceptedAnswer: {
"@type": "Answer",
text:
"Rider's Bow is hidden in an underwater cave near the route toward the New Camp. Watch for the water area, leave the main road, dive through the hidden opening, and loot the cave.",
},
},
{
"@type": "Question",
name: "How much do lockpicks cost?",
acceptedAnswer: {
"@type": "Answer",
text:
"Fisk sells lockpicks for 13 ore each. Buy a few if you plan to open chests, but do not spend your whole early budget on them.",
},
},
{
"@type": "Question",
name: "Should I buy Digger's Dress from Fisk?",
acceptedAnswer: {
"@type": "Answer",
text:
"Only if you cannot safely reach the Free Mine yet and urgently need the armor. The better value route is getting it free from Swiney.",
},
},
{
"@type": "Question",
name: "Should I return Whistler's Sword?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes if you want clean Old Camp progress. Returning it gives you experience and Whistler's support. Keeping it is a greedier route and can hurt the clean Old Camp path.",
},
},
{
"@type": "Question",
name: "Is blacksmithing worth it early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, if you want stable income. Simple crafted weapons can be sold for ore, and crafting can be safer than fighting enemies you are not ready for.",
},
},
{
"@type": "Question",
name: "Is mining good for early ore?",
acceptedAnswer: {
"@type": "Answer",
text:
"Mining helps, especially around the Free Mine route, but it is slower than good quests, crafting, and route rewards. Use it as extra income.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Perfect Start guide for the opening route, the Best Faction Guide before choosing a camp, or the Old Camp Walkthrough if you are working with Diego and Thorus.",
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
       title="Get the Best Early Gear Without Wasting Ore"
       description="Find the Old Sword, free short bow, Rider’s Bow, Digger’s Dress, early ore sources, Fisk prices, and the gear choices that matter most."
       gameTitle="Gothic 1 Remake"
       gameHref="/gothic-1-remake"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 7, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <EarlyGearContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
