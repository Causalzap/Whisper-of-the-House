import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import OldMineDiegosListContent from "@/data/gothic-1-remake/old-mine-diegos-list.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gothic-1-remake/old-mine-diegos-list`;

const imageUrls = [
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-diego-test-start.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-graham-old-mine-map.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-old-mine-entrance.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-ian-old-mine-list.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-lares-supply-list.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-diego-list-return.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-old-mine-storage-loot.webp`,
];

const toc = [
{ id: "diegos-list-guide", label: "Diego's List guide" },
{ id: "start-diegos-test", label: "Start Diego's test" },
{ id: "get-old-mine-map", label: "Old Mine map" },
{ id: "reach-old-mine", label: "Reach Old Mine" },
{ id: "old-mine-safety", label: "Old Mine safety" },
{ id: "find-ian", label: "Find Ian" },
{ id: "what-the-list-does", label: "What the list does" },
{ id: "lares-first", label: "Lares or Diego" },
{ id: "something-the-matter", label: "Something the Matter?" },
{ id: "give-list-to-diego", label: "Return to Diego" },
{ id: "old-mine-extra-loot", label: "Old Mine extras" },
{ id: "mistakes", label: "Mistakes" },
{ id: "summary", label: "Route summary" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/gothic-1-remake",
label: "Gothic 1 Remake Guide Hub",
},
{
href: "/gothic-1-remake/old-camp-walkthrough",
label: "Gothic 1 Remake Old Camp Walkthrough",
},
{
href: "/gothic-1-remake/best-faction",
label: "Gothic 1 Remake Best Faction Guide",
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
href: "/gothic-1-remake/early-ore-weapons-armor",
label: "Gothic 1 Remake Early Gear Guide",
},
];

export const metadata: Metadata = {
title: "Gothic 1 Remake Diego’s List: Lares or Diego?",
description:
"Get Diego’s List from Ian, use the Old Mine countersign, compare 750 XP vs 1,750 XP, and decide whether to give it to Lares first.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Gothic 1 Remake Diego’s List Guide: Old Mine, Ian, Lares or Diego?",
description:
"Find Ian in the Old Mine, use Diego’s countersign, compare the Diego-only 750 XP route with the Lares-first 1,750 XP route, and understand Something the Matter?",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Gothic 1 Remake Diego Test of Faith start for Ian's supply list.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Gothic 1 Remake Diego’s List Guide",
description:
"Old Mine route, Ian countersign, Lares-first 1,750 XP path, and Something the Matter explained.",
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
name: "Diego's List Guide",
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
"Gothic 1 Remake Diego's List Guide: Old Mine Route, Ian's Countersign, Lares or Diego, 750 XP vs 1,750 XP and Something the Matter",
description:
"A player-focused Gothic 1 Remake Diego's List guide explaining how to start Diego's Test of Faith, reach the Old Mine, find Ian after Ulbert and Alberto, use the countersign 'The crawlers look mighty hungry,' get Ian's supply list, decide whether to give Diego's List to Diego or Lares, compare the 750 XP Diego-only route with the 1,750 XP Lares-first route, understand how Lares tampers with the list, how the Something the Matter? quest connects to the falsified list, why Diego still accepts it, and how the list helps set up the later New Camp convoy ambush.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-07",
dateModified: "2026-06-07",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Gothic 1 Remake" },
{ "@type": "Thing", name: "Gothic 1 Remake Diego's List" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Mine" },
{ "@type": "Thing", name: "Gothic 1 Remake Ian" },
{ "@type": "Thing", name: "Gothic 1 Remake Ian countersign" },
{ "@type": "Thing", name: "Gothic 1 Remake Test of Faith" },
{ "@type": "Thing", name: "Gothic 1 Remake Lares" },
{ "@type": "Thing", name: "Gothic 1 Remake Diego" },
{ "@type": "Thing", name: "Gothic 1 Remake Something the Matter" },
{ "@type": "Thing", name: "Gothic 1 Remake supply list" },
{ "@type": "Thing", name: "Gothic 1 Remake falsified list" },
{ "@type": "Thing", name: "Gothic 1 Remake convoy ambush" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake New Camp" },
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
name: "Should I give Diego's List to Diego or Lares?",
acceptedAnswer: {
"@type": "Answer",
text:
"Give it to Lares first if you want the best reward. Directly giving it to Diego gives 750 XP. Showing it to Lares first, then returning the falsified list to Diego, gives 1,750 XP total.",
},
},
{
"@type": "Question",
name: "What is Diego's countersign for Ian?",
acceptedAnswer: {
"@type": "Answer",
text:
"Tell Ian: “The crawlers look mighty hungry.” Diego gives you this phrase when he sends you to the Old Mine.",
},
},
{
"@type": "Question",
name: "Where is Ian in the Old Mine?",
acceptedAnswer: {
"@type": "Answer",
text:
"Go deeper through the main mine route. After Ulbert, keep going until you see Ian talking with Alberto. Ian gives you the supply list after you use Diego's countersign.",
},
},
{
"@type": "Question",
name: "What is Something the Matter?",
acceptedAnswer: {
"@type": "Answer",
text:
"Something the Matter? is the New Camp route that starts when Lares tampers with Ian's supply list. You then bring the falsified list to Diego, which helps set up the later New Camp convoy ambush.",
},
},
{
"@type": "Question",
name: "Does Diego accept the falsified list?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Diego may notice something is wrong, but he still accepts the list and your Old Camp progress continues.",
},
},
{
"@type": "Question",
name: "Can I still join Old Camp if I show the list to Lares first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Showing the list to Lares first does not stop you from returning to Diego and continuing the Old Camp route.",
},
},
{
"@type": "Question",
name: "Is the Old Mine dangerous?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, especially if you wander into deeper or crawler-heavy areas. Stay focused on Ian and the list if you are still weak.",
},
},
{
"@type": "Question",
name: "Do I need Graham's Old Mine map?",
acceptedAnswer: {
"@type": "Answer",
text:
"No, but it helps if you do not know the route. For a first run, the map can save time, healing, and wrong turns.",
},
},
{
"@type": "Question",
name: "Does giving the list to Diego lock me into Old Camp?",
acceptedAnswer: {
"@type": "Answer",
text:
"Not by itself. The bigger lock-in is the final faction join step, but you should still save before major turn-ins.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Old Camp Walkthrough if you want to join Gomez's people, or the Best Faction Guide if you are still choosing between camps.",
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
       title="Should You Give Diego’s List to Lares First?"
       description="Get Ian’s supply list from the Old Mine, use Diego’s countersign, compare 750 XP vs 1,750 XP, and understand Lares’s falsified list plan."
       gameTitle="Gothic 1 Remake"
       gameHref="/gothic-1-remake"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 7, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <OldMineDiegosListContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
