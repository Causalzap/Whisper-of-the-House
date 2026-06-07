import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PerfectStartContent from "@/data/gothic-1-remake/perfect-start.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gothic-1-remake/perfect-start`;

const imageUrls = [
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-diego-first-meeting.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-old-sword-starting-route.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-drax-hunting-knife.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-drax-free-short-bow.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-old-camp-entrance.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-free-bed-old-camp.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-mordrag-new-camp-escort.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-hidden-riders-bow-cave.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-riders-bow-stats.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-lares-new-camp.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-baal-parvez-swamp-escort.webp`,
];

const toc = [
{ id: "perfect-start", label: "Perfect start" },
{ id: "start-to-old-camp", label: "Start to Old Camp" },
{ id: "drax-free-bow", label: "Drax free bow" },
{ id: "old-camp-first-visit", label: "First Old Camp visit" },
{ id: "old-camp-items", label: "Old Camp items" },
{ id: "mordrag-to-new-camp", label: "Mordrag to New Camp" },
{ id: "riders-bow", label: "Rider's Bow" },
{ id: "new-camp-first-visit", label: "First New Camp visit" },
{ id: "optional-swamp-camp", label: "Optional Swamp Camp" },
{ id: "when-to-stop", label: "When to stop" },
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
href: "/gothic-1-remake/early-ore-weapons-armor",
label: "Gothic 1 Remake Early Gear Guide",
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
title: "Gothic 1 Remake Perfect Start Route: Best First Steps",
description:
"Follow the best Gothic 1 Remake first route: Old Sword, Drax’s free bow, Old Camp bed, Mordrag escort, Rider’s Bow, and Lares access.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Gothic 1 Remake Perfect Start Route: Old Sword, Drax, Mordrag and Lares",
description:
"Follow a step-by-step Gothic 1 Remake perfect start route from Diego to the Old Camp, then New Camp, with Old Sword, Drax’s free bow, Old Camp safe bed, Mordrag escort, Rider’s Bow, Lares access, and no early faction lock-in.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Gothic 1 Remake perfect start route beginning with Diego.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Gothic 1 Remake Perfect Start Route",
description:
"Old Sword, Drax’s bow, Old Camp bed, Mordrag escort, Rider’s Bow, Lares, and faction timing.",
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
name: "Perfect Start Route",
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
"Gothic 1 Remake Perfect Start Route: Old Sword, Drax's Free Bow, Old Camp Safe Bed, Mordrag Escort, Rider's Bow and Lares",
description:
"A player-focused Gothic 1 Remake perfect start route explaining the exact first route from Diego to the Old Camp and New Camp, including where to get the Old Sword near the bridge and hanging corpse, how to find Drax near the hunter camp and return his hunting knife for a free short bow, what to do during the first Old Camp visit, where to find the free safe bed near the upper arena area with the red awning, when to check the southern wall Shortsword, why Mordrag should be kept alive and used as an escort to New Camp, where to look for the Rider's Bow hidden underwater cave on the New Camp route, how 14 Dexterity affects Rider's Bow, how Mordrag's ring helps with Lares, when to inspect Swamp Camp with Baal Parvez, and when the perfect start is complete before committing to any faction.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-07",
dateModified: "2026-06-07",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Gothic 1 Remake" },
{ "@type": "Thing", name: "Gothic 1 Remake perfect start" },
{ "@type": "Thing", name: "Gothic 1 Remake opening route" },
{ "@type": "Thing", name: "Gothic 1 Remake what to do first" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Sword" },
{ "@type": "Thing", name: "Gothic 1 Remake Drax hunting knife" },
{ "@type": "Thing", name: "Gothic 1 Remake free bow" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake free bed" },
{ "@type": "Thing", name: "Gothic 1 Remake Mordrag" },
{ "@type": "Thing", name: "Gothic 1 Remake New Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake Rider's Bow" },
{ "@type": "Thing", name: "Gothic 1 Remake Lares" },
{ "@type": "Thing", name: "Gothic 1 Remake Baal Parvez" },
{ "@type": "Thing", name: "Gothic 1 Remake faction choice" },
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
name: "What is the best first route in Gothic 1 Remake?",
acceptedAnswer: {
"@type": "Answer",
text:
"Talk to Diego, grab the Old Sword before the Old Camp, return Drax's hunting knife for the free short bow, use Old Camp as a hub, keep Mordrag alive, and let him guide you to New Camp before choosing a faction.",
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
name: "Where is Drax?",
acceptedAnswer: {
"@type": "Answer",
text:
"Drax is near the hunter camp off the road before the Old Camp. His hunting knife is nearby, and returning it gives you a free short bow.",
},
},
{
"@type": "Question",
name: "Where is the free bed in Old Camp?",
acceptedAnswer: {
"@type": "Answer",
text:
"The free safe bed is near the upper arena area. Look for the building with the red awning above the arena side.",
},
},
{
"@type": "Question",
name: "Is the Shortsword worth getting?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes if you can safely climb the southern Old Camp wall area. It is a useful extra named weapon, but do not risk your route just to force it.",
},
},
{
"@type": "Question",
name: "Should I kill Mordrag for Thorus?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. A perfect start keeps Mordrag alive, uses him as an escort to New Camp, and keeps his ring for Lares.",
},
},
{
"@type": "Question",
name: "Where is Rider's Bow?",
acceptedAnswer: {
"@type": "Answer",
text:
"Rider's Bow is in a hidden underwater cave near the route toward New Camp. When the path opens toward the large water or lake area, leave the road, move to the waterline, and search for the cave entrance.",
},
},
{
"@type": "Question",
name: "How much Dexterity does Rider's Bow need?",
acceptedAnswer: {
"@type": "Answer",
text:
"Rider's Bow requires 14 Dexterity. If you cannot use it yet, keep it for later instead of selling it.",
},
},
{
"@type": "Question",
name: "Should I join Old Camp during the perfect start route?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Use Old Camp as a hub, but delay the final commitment until you have visited New Camp and considered Swamp Camp.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Best Faction Guide if you are choosing a camp, the Old Camp Walkthrough if you are helping Diego and Thorus, or the Diego's List guide before handing Ian's list to anyone.",
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
       title="The Best First Route Before You Choose a Camp"
       description="Get the Old Sword, Drax’s free bow, Old Camp safe bed, Mordrag’s New Camp escort, Rider’s Bow, and Lares access without locking into a faction."
       gameTitle="Gothic 1 Remake"
       gameHref="/gothic-1-remake"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 7, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <PerfectStartContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
