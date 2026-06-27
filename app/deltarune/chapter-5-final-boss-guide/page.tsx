import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DeltaruneChapter5FinalBossGuideContent from "@/data/deltarune/chapter-5-final-boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deltarune/chapter-5-final-boss-guide`;

const imageUrls = [
`${siteUrl}/images/deltarune/deltarune-chapter-5-flowery-final-boss-start.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-flowery-knife-cutting.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-seal-first-fountain.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-second-fountain.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-chapter-6-ending.webp`,
];

export const metadata: Metadata = {
title: "DELTARUNE Chapter 5 Flowery Final Boss Guide",
description:
"Beat Flowery with Posey/PoseyZ timing, Blow Away, Orange dash, Knife Cutting, Justice trial, 50% Mercy, TP planning and fountain ending.",
alternates: {
canonical: pageUrl,
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
name: "DELTARUNE Guide",
item: `${siteUrl}/deltarune`,
},
{
"@type": "ListItem",
position: 3,
name: "Chapter 5 Flowery Final Boss Guide",
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
"DELTARUNE Chapter 5 Flowery Final Boss Guide: Posey, Blow Away, Orange Dash, Knife Cutting, Justice Trial, and 50% Mercy",
description:
"This DELTARUNE Chapter 5 Flowery final boss guide explains the normal-route fight order, Posey and PoseyZ timing, Blow Away Mercy progress, Orange dash charge timing, Knife Cutting, TP management before Justice, the route break around 50% Mercy, the first and second fountain ending beats, and how to keep the normal clear file separate from Secret Boss and Weird Route saves.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-27",
dateModified: "2026-06-27",
about: [
{
"@type": "VideoGame",
name: "DELTARUNE",
},
{
"@type": "Thing",
name: "DELTARUNE Chapter 5",
},
{
"@type": "Thing",
name: "Flowery Final Boss",
},
{
"@type": "Thing",
name: "Posey",
},
{
"@type": "Thing",
name: "PoseyZ",
},
{
"@type": "Thing",
name: "Blow Away",
},
{
"@type": "Thing",
name: "Orange Dash",
},
{
"@type": "Thing",
name: "Knife Cutting",
},
{
"@type": "Thing",
name: "Justice Trial",
},
{
"@type": "Thing",
name: "Mercy",
},
{
"@type": "Thing",
name: "TP Management",
},
{
"@type": "Thing",
name: "Dark Fountain",
},
{
"@type": "Thing",
name: "Chapter 6 Ending",
},
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
},
{
"@type": "FAQPage",
"@id": `${pageUrl}#faq`,
mainEntity: [
{
"@type": "Question",
name: "Is Flowery the Chapter 5 final boss?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. Flowery is the normal-route final boss or final route boss for DELTARUNE Chapter 5. Pink / Miumu is the separate Chapter 5 secret boss.",
},
},
{
"@type": "Question",
name: "Can I beat Flowery by attacking?",
acceptedAnswer: {
"@type": "Answer",
text: "The reliable approach is to push Mercy with ACTs such as Posey, PoseyZ, and Blow Away instead of treating the fight as a damage race.",
},
},
{
"@type": "Question",
name: "What appears first in the Flowery fight?",
acceptedAnswer: {
"@type": "Answer",
text: "The fight starts with the Mercy and ACT loop, then introduces Posey / PoseyZ timing, Blow Away, Orange dash pressure, Knife Cutting, and later the Justice trial section.",
},
},
{
"@type": "Question",
name: "How much Mercy does Posey give?",
acceptedAnswer: {
"@type": "Answer",
text: "Posey / PoseyZ can show about 10% Mercy, but the actual gain depends on timing. Bad timing can make the gain much lower.",
},
},
{
"@type": "Question",
name: "What does Blow Away do?",
acceptedAnswer: {
"@type": "Answer",
text: "Blow Away is a mash-based Mercy action. It gives smaller progress, around 5% in this route, but it is easier to execute than Posey timing.",
},
},
{
"@type": "Question",
name: "What Mercy number should I aim for?",
acceptedAnswer: {
"@type": "Answer",
text: "Aim to push toward about 50% Mercy. That is where the fight starts moving toward the next major route break.",
},
},
{
"@type": "Question",
name: "Why do I keep dying during Orange attacks?",
acceptedAnswer: {
"@type": "Answer",
text: "You are probably dashing too early. Hold to charge, wait for the attack to commit, then release the dash through the real danger.",
},
},
{
"@type": "Question",
name: "What should I do before the Justice section?",
acceptedAnswer: {
"@type": "Answer",
text: "Keep TP ready and keep the party alive. If you enter Justice with no TP and weak HP, the section becomes much harder.",
},
},
{
"@type": "Question",
name: "Does Chapter 5 end after sealing the first fountain?",
acceptedAnswer: {
"@type": "Answer",
text: "No. The first fountain seal is not the final ending. Be ready for the second fountain and the final route scenes.",
},
},
{
"@type": "Question",
name: "Should I do Pink / Miumu before Flowery?",
acceptedAnswer: {
"@type": "Answer",
text: "Only if you are stocked and using a normal or cleanup file. If you just want the clean first ending, beat Flowery first and come back later.",
},
},
{
"@type": "Question",
name: "Should I do Weird Route before Flowery?",
acceptedAnswer: {
"@type": "Answer",
text: "It is better to keep Weird Route on a separate file after a normal clear because it leads toward Noelle's lake scene and Side B.",
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
/>
<GuideArticlePage
title="DELTARUNE Chapter 5 Flowery Final Boss Guide"
description="Beat Flowery with Posey / PoseyZ timing, Blow Away, Orange dash, Knife Cutting, Justice trial prep, TP management, and the 50% Mercy route break."
gameTitle="DELTARUNE"
gameHref="/deltarune"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 27, 2026"
toc={[
{
id: "what-this-page-covers",
label: "What this guide covers",
},
{
id: "phase-order",
label: "Phase order",
},
{
id: "before-fight",
label: "Before Flowery",
},
{
id: "win-condition",
label: "Win condition",
},
{
id: "posey-poseyz",
label: "Posey / PoseyZ",
},
{
id: "blow-away",
label: "Blow Away",
},
{
id: "orange-dash",
label: "Orange dash",
},
{
id: "knife-cutting",
label: "Knife Cutting",
},
{
id: "tp-management",
label: "TP management",
},
{
id: "justice-trial",
label: "Justice trial",
},
{
id: "around-50-mercy",
label: "50% Mercy",
},
{
id: "decision-cheat-sheet",
label: "Decision table",
},
{
id: "route-break",
label: "Route break",
},
{
id: "after-flowery",
label: "After Flowery",
},
{
id: "chapter-6-ending",
label: "Chapter 6 ending",
},
{
id: "normal-vs-secret-vs-weird",
label: "Routes",
},
{
id: "common-mistakes",
label: "Common mistakes",
},
{
id: "faq",
label: "FAQ",
},
]}
relatedLinks={[
{
href: "/deltarune",
label: "DELTARUNE Guide Hub",
},
{
href: "/deltarune/chapter-5-secret-boss-pink-coins",
label: "Pink Coins and Mystery Key Guide",
},
{
href: "/deltarune/chapter-5-secret-boss-guide",
label: "Pink / Miumu Secret Boss Guide",
},
{
href: "/deltarune/chapter-5-weird-route",
label: "Chapter 5 Weird Route Guide",
},
{
href: "/deltarune/chapter-5-foxes-secret-egg",
label: "Foxes and Secret Egg Checklist",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <DeltaruneChapter5FinalBossGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
