import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GothicOneRemakeHubContent from "@/data/gothic-1-remake/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gothic-1-remake`;

const imageUrls = [
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-diego-first-meeting.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-old-sword-starting-route.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-drax-free-short-bow.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-three-camps-diego-dialogue.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-ian-old-mine-list.webp`,
];

const toc = [
{ id: "gothic-1-remake-guide", label: "Guide hub" },
{ id: "which-guide-to-read", label: "Which guide to read" },
{ id: "best-first-route", label: "Best first route" },
{ id: "early-gear", label: "Early gear" },
{ id: "best-faction", label: "Best faction" },
{ id: "old-camp-route", label: "Old Camp route" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "next-guides", label: "Next guides" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/gothic-1-remake/beginner-guide",
label: "Gothic 1 Remake Beginner Guide",
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
title: "Gothic 1 Remake Guide: Beginner Tips, Gear & Factions",
description:
"Follow Gothic 1 Remake guides for the first route, Old Sword, Drax’s bow, Digger’s Dress, best faction, Old Camp, and Diego’s List choices.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Gothic 1 Remake Guide Hub: Beginner Route, Early Gear, Factions and Diego’s List",
description:
"Use this Gothic 1 Remake guide hub to find the best first route, early weapons and armor, Old Camp, New Camp, Swamp Camp, Diego’s List, Gomez dialogue, and faction decisions.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Gothic 1 Remake guide hub starting with Diego and the first route.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Gothic 1 Remake Guide Hub",
description:
"Beginner route, Old Sword, Drax’s bow, early gear, factions, Old Camp, and Diego’s List explained.",
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
"Gothic 1 Remake Guide Hub: Beginner Route, Perfect Start, Early Gear, Best Faction, Old Camp and Diego's List",
description:
"A player-focused Gothic 1 Remake guide hub that helps new players choose the right next guide and avoid early mistakes. It explains the best first route from Diego, where to find the Old Sword before the Old Camp, how Drax's hunting knife leads to a free short bow, why Digger's Dress is a key early armor decision, how to compare Old Camp, New Camp and Swamp Camp by armor, magic, economy, trainers and story consequences, how Old Camp admission works with Shadow support, Diego's Test of Faith, Raven and Gomez, and why Diego's List should often be shown to Lares first for the 1,750 XP route instead of giving it straight to Diego for 750 XP.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-07",
dateModified: "2026-06-07",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Gothic 1 Remake" },
{ "@type": "Thing", name: "Gothic 1 Remake guide" },
{ "@type": "Thing", name: "Gothic 1 Remake beginner guide" },
{ "@type": "Thing", name: "Gothic 1 Remake perfect start" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Sword" },
{ "@type": "Thing", name: "Gothic 1 Remake Drax hunting knife" },
{ "@type": "Thing", name: "Gothic 1 Remake free bow" },
{ "@type": "Thing", name: "Gothic 1 Remake Digger's Dress" },
{ "@type": "Thing", name: "Gothic 1 Remake Rider's Bow" },
{ "@type": "Thing", name: "Gothic 1 Remake best faction" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake New Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake Swamp Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake Diego's List" },
{ "@type": "Thing", name: "Gothic 1 Remake Lares" },
{ "@type": "Thing", name: "Gothic 1 Remake Gomez" },
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
name: "What should I do first in Gothic 1 Remake?",
acceptedAnswer: {
"@type": "Answer",
text:
"Talk to Diego, get the Old Sword before the Old Camp, return Drax's hunting knife for the free short bow, and use Old Camp as a hub before choosing a faction.",
},
},
{
"@type": "Question",
name: "Where is the first sword?",
acceptedAnswer: {
"@type": "Answer",
text:
"After the abandoned mine area, follow the road left and uphill to the bridge. Cross the bridge, then check the dead tree with the hanging corpse on the right side of the path. The Old Sword is at its base.",
},
},
{
"@type": "Question",
name: "What is the best early armor?",
acceptedAnswer: {
"@type": "Answer",
text:
"Digger's Dress is the best early armor target. Get it free from Swiney at the Free Mine south of New Camp if you can, instead of buying it from Fisk for 313 ore.",
},
},
{
"@type": "Question",
name: "Which faction should I join first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Old Camp is safest for a first playthrough, New Camp is better for freedom and later payoff, and Swamp Camp is best for Brotherhood and Templar flavor. Visit all three before committing.",
},
},
{
"@type": "Question",
name: "Should I kill Mordrag?",
acceptedAnswer: {
"@type": "Answer",
text:
"No, not on a flexible first route. Keep Mordrag alive, let him escort you to New Camp, and keep his ring for Lares.",
},
},
{
"@type": "Question",
name: "Should I give Diego's List to Diego or Lares?",
acceptedAnswer: {
"@type": "Answer",
text:
"Give it to Lares first if you want the better reward. Diego-only gives 750 XP, while Lares first and then Diego gives 1,750 XP total.",
},
},
{
"@type": "Question",
name: "What is Diego's countersign for Ian?",
acceptedAnswer: {
"@type": "Answer",
text:
"Tell Ian: “The crawlers look mighty hungry.” Diego gives this phrase when he sends you to the Old Mine.",
},
},
{
"@type": "Question",
name: "What Gomez answers should I avoid?",
acceptedAnswer: {
"@type": "Answer",
text:
"Do not say you serve Y'Berion or answer “To Y'Berion,” and do not threaten Gomez with violence. Either choice can kill you immediately.",
},
},
{
"@type": "Question",
name: "Is Rider's Bow worth getting early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, if you plan to use Dexterity. Rider's Bow is hidden in an underwater cave near the New Camp route and requires 14 Dexterity.",
},
},
{
"@type": "Question",
name: "What guide should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read Perfect Start for the exact opening route, Early Gear Guide for items and ore, or Best Faction Guide before joining a camp.",
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
       title="Gothic 1 Remake Guide Hub"
       description="Start with Diego, grab the Old Sword, get Drax’s free bow, compare early gear and factions, then decide what to do with Diego’s List."
       gameTitle="Gothic 1 Remake"
       gameHref="/gothic-1-remake"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 7, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <GothicOneRemakeHubContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
