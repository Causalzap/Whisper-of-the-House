import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DeltaruneChapter5SecretBossGuideContent from "@/data/deltarune/chapter-5-secret-boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deltarune/chapter-5-secret-boss-guide`;

const imageUrls = [
`${siteUrl}/images/deltarune/deltarune-chapter-5-pink-secret-boss-intro.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-pink-purple-soul.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-pink-mega-flirt.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-pink-body-ghost-split.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-pink-die-maze.webp`,
];

export const metadata: Metadata = {
title: "DELTARUNE Chapter 5 Pink/Miumu Secret Boss DOKI Guide",
description:
"Beat Pink/Miumu with phase order, 15/15/20 DOKI, MegaFlirt, GigaFlirt 80 TP, LovelyBoy Max TP, Purple Soul hearts, date answers, DIE maze and CAT gear.",
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
name: "Chapter 5 Pink/Miumu Secret Boss Guide",
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
"DELTARUNE Chapter 5 Pink/Miumu Secret Boss Guide: DOKI, MegaFlirt, GigaFlirt, LovelyBoy, Date Answers, and DIE Maze",
description:
"This DELTARUNE Chapter 5 Pink/Miumu secret boss guide explains how to unlock the fight with the Mystery Key and Pink Door, how the 15 / 15 / 20 DOKI phase targets work, when to use Flirt, MegaFlirt, MegaFlirtX, GigaFlirt, and LovelyBoy, how to rebuild the 80 TP requirement after Max TP reduction, how to survive Purple Soul attacks and collect pink hearts, which CAT-defense equipment helps, how to answer the dating sim sections, and how to clear the final DIE maze.",
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
name: "Pink Secret Boss",
},
{
"@type": "Thing",
name: "Miumu Secret Boss",
},
{
"@type": "Thing",
name: "DOKI Meter",
},
{
"@type": "Thing",
name: "Flirt",
},
{
"@type": "Thing",
name: "MegaFlirt",
},
{
"@type": "Thing",
name: "MegaFlirtX",
},
{
"@type": "Thing",
name: "GigaFlirt",
},
{
"@type": "Thing",
name: "LovelyBoy",
},
{
"@type": "Thing",
name: "Purple Soul",
},
{
"@type": "Thing",
name: "Pink Hearts",
},
{
"@type": "Thing",
name: "Dating Sim Answers",
},
{
"@type": "Thing",
name: "DIE Maze",
},
{
"@type": "Thing",
name: "Mystery Key",
},
{
"@type": "Thing",
name: "Pink Door",
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
name: "Who is the Chapter 5 secret boss in DELTARUNE?",
acceptedAnswer: {
"@type": "Answer",
text: "The Chapter 5 secret boss is Pink / Miumu, found behind the Mystery Key and Pink Door.",
},
},
{
"@type": "Question",
name: "How do I unlock Pink in DELTARUNE Chapter 5?",
acceptedAnswer: {
"@type": "Answer",
text: "Collect enough Pink Coins, buy the Mystery Key from the Cliffs shop, then use it on the Pink Door near the late castle route.",
},
},
{
"@type": "Question",
name: "Can I beat Pink by attacking?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Attacks do not meaningfully solve the fight. Fill the DOKI meter with ACTs and clear the dating sim sections.",
},
},
{
"@type": "Question",
name: "How much DOKI do I need for Pink?",
acceptedAnswer: {
"@type": "Answer",
text: "Phase 1 needs 15 DOKI, Phase 2 needs 15 DOKI, and Phase 3 needs 20 DOKI.",
},
},
{
"@type": "Question",
name: "How much DOKI does Flirt give?",
acceptedAnswer: {
"@type": "Answer",
text: "Regular Flirt gives +1 DOKI and costs 8 TP. If party members are down, regular Flirt can gain more DOKI, but that is risky.",
},
},
{
"@type": "Question",
name: "How much DOKI does MegaFlirt give?",
acceptedAnswer: {
"@type": "Answer",
text: "MegaFlirt gives +5 DOKI and costs 60 TP.",
},
},
{
"@type": "Question",
name: "How much DOKI does MegaFlirtX give?",
acceptedAnswer: {
"@type": "Answer",
text: "MegaFlirtX gives +5 DOKI with lower TP cost than regular MegaFlirt when available.",
},
},
{
"@type": "Question",
name: "How much DOKI does GigaFlirt give?",
acceptedAnswer: {
"@type": "Answer",
text: "GigaFlirt gives +10 DOKI and needs 80 TP available. Because Pink can reduce Max TP, you may need LovelyBoy and safe pink hearts before you can use it.",
},
},
{
"@type": "Question",
name: "How do I get enough TP for GigaFlirt?",
acceptedAnswer: {
"@type": "Answer",
text: "Use LovelyBoy to raise Max TP, collect safe pink hearts during attacks, and avoid wasting TP before the phase where GigaFlirt matters.",
},
},
{
"@type": "Question",
name: "What equipment should I use against Pink?",
acceptedAnswer: {
"@type": "Answer",
text: "Use defensive equipment that helps against Pink's CAT-style damage. Check Mannequin, FrayedBowtie, Dealmaker, and TrueTie.",
},
},
{
"@type": "Question",
name: "What are the first Pink dating sim answers?",
acceptedAnswer: {
"@type": "Answer",
text: "For the first date, use Yes, Yes, then No.",
},
},
{
"@type": "Question",
name: "What is the body and ghost split?",
acceptedAnswer: {
"@type": "Answer",
text: "During the second dating sim section, Pink's body and ghost split into conflicting prompt styles. Read the paired cues and choose the matching answer instead of guessing.",
},
},
{
"@type": "Question",
name: "What do I do in the DIE maze?",
acceptedAnswer: {
"@type": "Answer",
text: "Move slowly, use safe spots, avoid red DIE bullets, and reach the hearts to unlock the final response route.",
},
},
{
"@type": "Question",
name: "Should I use Share Food against Pink?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes, but only when you can spare the item. Share Food can add DOKI, but giving away your best healing item can make Phase 3 or the final maze much harder.",
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
title="DELTARUNE Chapter 5 Pink/Miumu Secret Boss Guide"
description="Beat Pink / Miumu with 15 / 15 / 20 DOKI targets, MegaFlirt, GigaFlirt 80 TP planning, LovelyBoy Max TP recovery, Purple Soul hearts, dating sim answers, and the final DIE maze."
gameTitle="DELTARUNE"
gameHref="/deltarune"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 27, 2026"
toc={[
{
id: "what-this-guide-covers",
label: "What this guide covers",
},
{
id: "unlock-check",
label: "Unlock check",
},
{
id: "core-numbers",
label: "Core numbers",
},
{
id: "phase-order",
label: "Phase order",
},
{
id: "equipment",
label: "Best equipment",
},
{
id: "purple-soul",
label: "Purple Soul",
},
{
id: "doki-acts",
label: "DOKI ACTs",
},
{
id: "lovelyboy-gigaflirt",
label: "LovelyBoy & GigaFlirt",
},
{
id: "dating-sim-one",
label: "Date 1 answers",
},
{
id: "dating-sim-two",
label: "Date 2 split",
},
{
id: "phase-three",
label: "Phase 3",
},
{
id: "die-maze",
label: "DIE maze",
},
{
id: "share-food",
label: "Share Food",
},
{
id: "downed-party-flirt",
label: "Downed Flirt bonus",
},
{
id: "when-to-heal",
label: "When to heal",
},
{
id: "common-mistakes",
label: "Common mistakes",
},
{
id: "rewards",
label: "Rewards",
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
href: "/deltarune/chapter-5-final-boss-guide",
label: "Flowery Final Boss Guide",
},
{
href: "/deltarune/chapter-5-foxes-secret-egg",
label: "Foxes and Secret Egg Checklist",
},
{
href: "/deltarune/chapter-5-weird-route",
label: "Chapter 5 Weird Route Guide",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <DeltaruneChapter5SecretBossGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
