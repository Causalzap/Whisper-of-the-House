import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SwampCampWalkthroughContent from "@/data/gothic-1-remake/swamp-camp-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gothic-1-remake/swamp-camp-walkthrough`;

const imageUrls = [
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-baal-parvez-swamp-escort.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-swamp-camp-entrance.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-fortuno-daily-swampweed.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-joru-guru-advice.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-lester-baal-namib-approval.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-baal-tyon-dreamcaller.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-cor-kalom-laboratory.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-ghorim-harl-swampweed-pressers.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-swampweed-harvest-balor.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-baal-orun-harvest.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-baal-cadar-sleep-scroll.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-melvin-swamp-camp.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-dusty-old-camp-recruitment.webp`,
];

const toc = [
{ id: "swamp-camp-walkthrough", label: "Swamp Camp walkthrough" },
{ id: "route-overview", label: "Route overview" },
{ id: "baal-parvez-escort", label: "Baal Parvez escort" },
{ id: "visitor-benefits", label: "Visitor benefits" },
{ id: "joru-guru-advice", label: "Joru advice" },
{ id: "guru-approvals", label: "Guru approvals" },
{ id: "baal-namib-lester", label: "Baal Namib" },
{ id: "baal-tyon-dreamcaller", label: "Baal Tyon" },
{ id: "cor-kalom-first-check", label: "Cor Kalom first check" },
{ id: "ghorim-harl", label: "Ghorim / Harl" },
{ id: "swampweed-harvest", label: "Swampweed Harvest" },
{ id: "baal-cadar-sleep", label: "Baal Cadar" },
{ id: "baal-tondral-dusty-melvin", label: "Baal Tondral" },
{ id: "cor-kalom-final", label: "Cor Kalom final" },
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
href: "/gothic-1-remake/new-camp-walkthrough",
label: "Gothic 1 Remake New Camp Walkthrough",
},
{
href: "/gothic-1-remake/old-camp-walkthrough",
label: "Gothic 1 Remake Old Camp Walkthrough",
},
{
href: "/gothic-1-remake/skills-trainers",
label: "Gothic 1 Remake Skills and Trainers Guide",
},
{
href: "/gothic-1-remake/early-ore-weapons-armor",
label: "Gothic 1 Remake Early Gear Guide",
},
];

export const metadata: Metadata = {
title: "Gothic 1 Remake Swamp Camp: How to Join",
description:
"Join Swamp Camp in Gothic 1 Remake with 4 Guru approvals, Joru, Dusty, Swampweed Harvest, Sleep scroll, Cor Kalom answers, Level 5, and Novice rewards.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Gothic 1 Remake Swamp Camp Walkthrough: Guru Approvals, Cor Kalom and Novice Route",
description:
"Join the Swamp Camp in Gothic 1 Remake with four Guru approvals, Baal Parvez escort, Fortuno, Joru, Baal Namib, Baal Tyon, Baal Orun, Baal Tondral, Baal Cadar, Dusty and Melvin, Swampweed Harvest, Sleep scroll, Cor Kalom’s final dialogue, Level 5, Novice Armor, XP rewards, and Brotherhood mistakes to avoid.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Gothic 1 Remake Swamp Camp walkthrough using Baal Parvez escort.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Gothic 1 Remake Swamp Camp Walkthrough",
description:
"Join Swamp Camp with 4 Guru approvals, Joru, Dusty, Swampweed Harvest, Sleep scroll, Cor Kalom answers, Level 5, and Novice rewards.",
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
name: "Swamp Camp Walkthrough",
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
"Gothic 1 Remake Swamp Camp Walkthrough: How to Join the Brotherhood, Get 4 Guru Approvals, Pass Cor Kalom and Become a Novice",
description:
"A player-focused Gothic 1 Remake Swamp Camp walkthrough explaining how to join the Brotherhood of the Sleeper, use Baal Parvez for safe camp access, get Fortuno's daily swampweed ration, talk to Joru for Guru approval advice, earn four Guru approvals from Baal Namib, Baal Tyon, Baal Orun, Baal Tondral and Baal Cadar, use Lester for Baal Namib, use Baal Kagan's Dreamcaller reward for Baal Tyon, help Ghorim and Harl, complete Swampweed Harvest by collecting from Balor and Viran, delivering to Cor Kalom and reporting to Baal Orun, save the Sleep scroll for Baal Cadar, complete the Dusty and Melvin New Souls route for Baal Tondral, reach Level 5, choose the safe Cor Kalom final dialogue answer that supports the Sleeper, avoid hostile dialogue options, and claim Novice Armor, XP rewards and Brotherhood faction access.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-08",
dateModified: "2026-06-08",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Gothic 1 Remake" },
{ "@type": "Thing", name: "Gothic 1 Remake Swamp Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake Swamp Camp walkthrough" },
{ "@type": "Thing", name: "Gothic 1 Remake how to join Swamp Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake Brotherhood" },
{ "@type": "Thing", name: "Gothic 1 Remake Guru approvals" },
{ "@type": "Thing", name: "Gothic 1 Remake Baal Parvez" },
{ "@type": "Thing", name: "Gothic 1 Remake Fortuno" },
{ "@type": "Thing", name: "Gothic 1 Remake Joru" },
{ "@type": "Thing", name: "Gothic 1 Remake Lester" },
{ "@type": "Thing", name: "Gothic 1 Remake Baal Namib" },
{ "@type": "Thing", name: "Gothic 1 Remake Baal Tyon" },
{ "@type": "Thing", name: "Gothic 1 Remake Baal Orun" },
{ "@type": "Thing", name: "Gothic 1 Remake Baal Tondral" },
{ "@type": "Thing", name: "Gothic 1 Remake Baal Cadar" },
{ "@type": "Thing", name: "Gothic 1 Remake Cor Kalom" },
{ "@type": "Thing", name: "Gothic 1 Remake Ghorim" },
{ "@type": "Thing", name: "Gothic 1 Remake Harl" },
{ "@type": "Thing", name: "Gothic 1 Remake Balor" },
{ "@type": "Thing", name: "Gothic 1 Remake Viran" },
{ "@type": "Thing", name: "Gothic 1 Remake Swampweed Harvest" },
{ "@type": "Thing", name: "Gothic 1 Remake Sleep scroll" },
{ "@type": "Thing", name: "Gothic 1 Remake Dusty" },
{ "@type": "Thing", name: "Gothic 1 Remake Melvin" },
{ "@type": "Thing", name: "Gothic 1 Remake New Souls for the Brotherhood" },
{ "@type": "Thing", name: "Gothic 1 Remake Novice Armor" },
{ "@type": "Thing", name: "Gothic 1 Remake Level 5" },
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
name: "How do I join Swamp Camp in Gothic 1 Remake?",
acceptedAnswer: {
"@type": "Answer",
text:
"Reach Swamp Camp safely, earn four Guru approvals, reach Level 5, then pass Cor Kalom's final joining check and become a Novice.",
},
},
{
"@type": "Question",
name: "How many Guru approvals do I need?",
acceptedAnswer: {
"@type": "Answer",
text:
"You need four Guru approvals. The main Guru routes are Baal Namib, Baal Tyon, Baal Orun, Baal Tondral, and Baal Cadar.",
},
},
{
"@type": "Question",
name: "What level do I need to join Swamp Camp?",
acceptedAnswer: {
"@type": "Answer",
text:
"You need Level 5 before the final Cor Kalom joining step.",
},
},
{
"@type": "Question",
name: "Why does Cor Kalom say I am not experienced enough?",
acceptedAnswer: {
"@type": "Answer",
text:
"Usually because you are not Level 5 yet. If you already have the approvals, gain more XP and return.",
},
},
{
"@type": "Question",
name: "What Cor Kalom answer should I choose?",
acceptedAnswer: {
"@type": "Answer",
text:
"Choose the answer that supports faith in the Sleeper. Questioning or insulting the belief can turn Cor Kalom hostile and block the route. A vague answer may give you one more chance.",
},
},
{
"@type": "Question",
name: "Who is Joru and why should I talk to him?",
acceptedAnswer: {
"@type": "Answer",
text:
"Joru is an important advice NPC in Swamp Camp. Give him Fortuno's daily swampweed ration and he explains how to impress the Gurus.",
},
},
{
"@type": "Question",
name: "How do I get Baal Namib's approval?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use Lester. Move him away from Namib, ask how to join his master, then return and play along with the conversion scene.",
},
},
{
"@type": "Question",
name: "How do I get Baal Tyon's approval?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the Dreamcaller / Brotherhood-help reward from Baal Kagan's route, then bring it to Baal Tyon.",
},
},
{
"@type": "Question",
name: "How do I complete Swampweed Harvest?",
acceptedAnswer: {
"@type": "Answer",
text:
"After helping Ghorim and Harl, collect the harvest from Balor and Viran, deliver it to Cor Kalom, then report back to Baal Orun.",
},
},
{
"@type": "Question",
name: "How do I get Baal Cadar's approval?",
acceptedAnswer: {
"@type": "Answer",
text:
"Complete Baal Orun's route first, keep the Sleep scroll reward, then use Sleep on a student during Cadar's lesson.",
},
},
{
"@type": "Question",
name: "Is Dusty required for Swamp Camp?",
acceptedAnswer: {
"@type": "Answer",
text:
"Dusty is not the only possible approval path, but he is part of Baal Tondral's New Souls for the Brotherhood route and can count as a real Guru approval.",
},
},
{
"@type": "Question",
name: "What rewards do I get for joining Swamp Camp?",
acceptedAnswer: {
"@type": "Answer",
text:
"The full admission route can total around 3850 XP. Final acceptance as a Novice can give 750 XP and Novice Armor, along with Brotherhood faction access.",
},
},
{
"@type": "Question",
name: "Is Swamp Camp good for magic?",
acceptedAnswer: {
"@type": "Answer",
text:
"Swamp Camp has strong Brotherhood magic flavor and Novice / Templar identity, but it is not the strongest pure mage route compared with Fire Mage or Water Mage direction.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Best Faction Guide if you are still choosing a camp, the New Camp Walkthrough if you are comparing alternatives, or the Early Gear Guide if you need better equipment before committing.",
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
       title="Join the Brotherhood Without Failing Cor Kalom"
       description="Get four Guru approvals, use Joru’s advice, save the Sleep scroll, complete Dusty and Harvest routes, and pass Cor Kalom’s final answer."
       gameTitle="Gothic 1 Remake"
       gameHref="/gothic-1-remake"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 8, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <SwampCampWalkthroughContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
