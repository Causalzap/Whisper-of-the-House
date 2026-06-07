import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/gothic-1-remake/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gothic-1-remake/beginner-guide`;

const imageUrls = [
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-diego-first-meeting.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-valley-old-camp-view.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-old-sword-starting-route.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-early-scavenger-fight.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-graham-map.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-drax-hunting-knife.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-free-bed-old-camp.webp`,
];

const toc = [
{ id: "beginner-guide", label: "Beginner guide" },
{ id: "first-15-minutes", label: "First 15 minutes" },
{ id: "follow-diego-and-escorts", label: "Diego and escorts" },
{ id: "get-first-weapon", label: "First weapon" },
{ id: "which-enemies-to-fight", label: "Early enemies" },
{ id: "first-learning-points", label: "Learning Points" },
{ id: "get-map-early", label: "Get a map" },
{ id: "drax-hunting-knife", label: "Drax's knife" },
{ id: "time-of-day", label: "Time of day" },
{ id: "do-not-join-camp-too-fast", label: "Faction timing" },
{ id: "beginner-mistakes", label: "Beginner mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/gothic-1-remake",
label: "Gothic 1 Remake Guide Hub",
},
{
href: "/gothic-1-remake/perfect-start",
label: "Gothic 1 Remake Perfect Start",
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
title: "Gothic 1 Remake Beginner Guide: What to Do First",
description:
"Survive Gothic 1 Remake’s first hours with Diego, the first sword location, escort XP, Learning Points, maps, early enemies, and faction timing.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Gothic 1 Remake Beginner Guide: First Sword, Diego, LP, Maps and Faction Timing",
description:
"Learn what to do first in Gothic 1 Remake, including where to find the first sword, why Diego and escort routes matter, how to spend early Learning Points, when to get a map, which enemies to avoid, and when to delay your faction choice.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Following Diego to the Old Camp in Gothic 1 Remake — what to do first.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Gothic 1 Remake Beginner Guide",
description:
"First sword location, Diego escort XP, early enemies, LP choices, maps, Drax's knife, and faction timing for new players.",
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
name: "Beginner Guide",
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
"Gothic 1 Remake Beginner Guide: What to Do First, First Sword Location, Diego Escort XP, Learning Points and Faction Timing",
description:
"A player-focused Gothic 1 Remake beginner guide explaining what to do first after entering the Colony, how to follow Diego safely, where to find the first sword near the bridge and hanging corpse, why NPC escort routes still give useful XP, which early enemies to fight or avoid, how each level gives 10 Learning Points, when to train Strength, Dexterity, one-handed combat, lockpicking or hunting, why getting a map from Graham matters, where Drax and his hunting knife fit into the early route, how time of day affects NPC locations, what happens when stealing or attacking NPCs early, and why players should delay the final Old Camp, New Camp, or Swamp Camp faction choice.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-07",
dateModified: "2026-06-07",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Gothic 1 Remake" },
{ "@type": "Thing", name: "Gothic 1 Remake beginner guide" },
{ "@type": "Thing", name: "Gothic 1 Remake what to do first" },
{ "@type": "Thing", name: "Gothic 1 Remake first sword" },
{ "@type": "Thing", name: "Gothic 1 Remake Diego" },
{ "@type": "Thing", name: "Gothic 1 Remake escort XP" },
{ "@type": "Thing", name: "Gothic 1 Remake Learning Points" },
{ "@type": "Thing", name: "Gothic 1 Remake early enemies" },
{ "@type": "Thing", name: "Gothic 1 Remake map" },
{ "@type": "Thing", name: "Gothic 1 Remake Drax hunting knife" },
{ "@type": "Thing", name: "Gothic 1 Remake time of day" },
{ "@type": "Thing", name: "Gothic 1 Remake faction choice" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake New Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake Swamp Camp" },
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
name: "Can I steal from NPCs early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, but it is risky. If someone sees you steal, open a chest that is not yours, or enter a restricted place, they may warn you, attack you, knock you down, or take back stolen items. In the Old Camp, guards and stronger NPCs can punish you long before you are strong enough to fight back. Save before testing theft.",
},
},
{
"@type": "Question",
name: "Can I pickpocket early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Pickpocketing is tied to training and opportunity. Do not build around it before you understand trainers, ore cost, and how much risk you are willing to take. If you fail around important NPCs, you can damage the route more than the stolen item is worth.",
},
},
{
"@type": "Question",
name: "What happens if I attack a guard or NPC?",
acceptedAnswer: {
"@type": "Answer",
text:
"You can get knocked down, robbed, killed, or locked out of useful interactions. Some NPCs are important enough that attacking them can damage your route. Save first if you are testing anything aggressive.",
},
},
{
"@type": "Question",
name: "Does sleeping change NPC locations?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Sleeping advances time, and many NPCs follow routines. If a trader, teacher, or quest NPC is missing, try checking during the day or near their usual work area.",
},
},
{
"@type": "Question",
name: "Why is an NPC not where the quest implied?",
acceptedAnswer: {
"@type": "Answer",
text:
"They may have moved because of time, weather, work, sleep, or routine behavior. Look nearby first, then try another time of day before assuming the quest is stuck.",
},
},
{
"@type": "Question",
name: "Do I still get XP if Diego or another escort kills enemies?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, escort routes can still reward you while the guide handles enemies. That is why Diego, Mordrag, and Baal Parvez are so valuable early.",
},
},
{
"@type": "Question",
name: "Should I spend my first 10 LP right away?",
acceptedAnswer: {
"@type": "Answer",
text:
"Usually no. Meet trainers first. Your first 10 LP can go into attributes, one-handed training, lockpicking, hunting, or be saved until your build is clearer.",
},
},
{
"@type": "Question",
name: "Should I fight wolves early?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Even a single wolf can be too much for a fresh character. Come back after better gear, more health, and training.",
},
},
{
"@type": "Question",
name: "When should I choose a faction?",
acceptedAnswer: {
"@type": "Answer",
text:
"Choose after you have visited more than one camp, reached Level 5, completed useful prerequisite tasks, and made a manual save before the final join step.",
},
},
{
"@type": "Question",
name: "Is Old Camp the best beginner faction?",
acceptedAnswer: {
"@type": "Answer",
text:
"Old Camp is the easiest first-playthrough route to understand, but it is not automatically best for every build. New Camp and Swamp Camp are worth visiting before you commit.",
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
       title="What Should You Do First in Gothic 1 Remake?"
       description="Start with Diego, grab the first sword near the bridge, use escort XP, spend your first 10 LP carefully, and delay your faction choice until you understand the camps."
       gameTitle="Gothic 1 Remake"
       gameHref="/gothic-1-remake"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 7, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <BeginnerGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
