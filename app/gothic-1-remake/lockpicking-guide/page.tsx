import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LockpickingGuideContent from "@/data/gothic-1-remake/lockpicking-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gothic-1-remake/lockpicking-guide`;

const imageUrls = [
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-lockpicking-slider-puzzle.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-lockpicking-chest-save.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-mordrag-lockpicks-trader.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-fisk-lockpicks-trader.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-fingers-location-old-camp.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-fingers-chest-task.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-abandoned-mine-lockpicks-chest.webp`,
];

const toc = [
{ id: "lockpicking-guide", label: "Lockpicking guide" },
{ id: "how-lockpicking-works", label: "How it works" },
{ id: "how-to-lockpick", label: "How to lockpick" },
{ id: "lockpicking-training-levels", label: "Training levels" },
{ id: "where-to-buy-lockpicks", label: "Buy lockpicks" },
{ id: "fingers-location", label: "Fingers location" },
{ id: "fingers-chest", label: "Fingers' chest" },
{ id: "chests-worth-opening", label: "Early chests" },
{ id: "is-lockpicking-worth-it", label: "Is it worth it?" },
{ id: "lockpicking-vs-pickpocketing", label: "Lockpicking vs pickpocketing" },
{ id: "stealing-owned-chests", label: "Owned chests" },
{ id: "lockpicking-and-old-camp", label: "Old Camp support" },
{ id: "early-lockpicking-checklist", label: "Checklist" },
{ id: "mistakes", label: "Mistakes" },
{ id: "next-step", label: "Next step" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/gothic-1-remake",
label: "Gothic 1 Remake Guide Hub",
},
{
href: "/gothic-1-remake/skills-trainers",
label: "Gothic 1 Remake Skills and Trainers Guide",
},
{
href: "/gothic-1-remake/early-ore-weapons-armor",
label: "Gothic 1 Remake Early Gear Guide",
},
{
href: "/gothic-1-remake/old-camp-walkthrough",
label: "Gothic 1 Remake Old Camp Walkthrough",
},
{
href: "/gothic-1-remake/beginner-guide",
label: "Gothic 1 Remake Beginner Guide",
},
{
href: "/gothic-1-remake/perfect-start",
label: "Gothic 1 Remake Perfect Start Route",
},
];

export const metadata: Metadata = {
title: "Gothic 1 Remake Lockpicking Guide: Fingers & Picks",
description:
"Learn Gothic 1 Remake lockpicking: slider puzzle, broken picks, Fingers training, Trained/Master costs, where to buy lockpicks, owned chests, and Sneak risks.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Gothic 1 Remake Lockpicking Guide: Slider Puzzle, Fingers, Training and Lockpicks",
description:
"Learn how lockpicking works in Gothic 1 Remake, including the slider puzzle, bronze pins, broken lockpick rules, Trained and Master costs, Mordrag’s cheap lockpicks, Fingers’ chest task, owned chest risks, and whether lockpicking is worth your first LP.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Gothic 1 Remake lockpicking slider puzzle with bronze pins and plates.",
},
],
},
twitter: {
    card: "summary_large_image",
    title: "Gothic 1 Remake Lockpicking Guide",
    description:
      "Slider puzzle, broken lockpicks, Fingers training, Trained/Master costs, where to buy picks, owned chests, and Sneak risks explained.",
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
name: "Lockpicking Guide",
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
"Gothic 1 Remake Lockpicking Guide: How the Slider Puzzle Works, Where to Buy Lockpicks, Fingers Training, Trained and Master Costs",
description:
"A player-focused Gothic 1 Remake lockpicking guide explaining how the slider puzzle works, how to align bronze pins with the fourth hole, why linked plates make locks difficult, why untrained lockpicks break after 2 failed slider moves and reset the lock, how Trained lockpicking costs 10 LP and 100 ore, how Master lockpicking costs 20 LP and 200 ore, where to buy lockpicks from Mordrag, Fisk and Dexter, why Mordrag's 13 ore lockpicks are the cheapest early source, where to find Fingers in the Old Camp, how Fingers' nearby chest helps Old Camp admission, which early chests are worth opening, how real-time NPC interruption works, when Cavalorn's Sneak training helps, and whether lockpicking is worth your first Learning Points.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-08",
dateModified: "2026-06-08",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Gothic 1 Remake" },
{ "@type": "Thing", name: "Gothic 1 Remake lockpicking" },
{ "@type": "Thing", name: "Gothic 1 Remake lockpicking guide" },
{ "@type": "Thing", name: "Gothic 1 Remake how to lockpick" },
{ "@type": "Thing", name: "Gothic 1 Remake slider puzzle" },
{ "@type": "Thing", name: "Gothic 1 Remake lockpicks" },
{ "@type": "Thing", name: "Gothic 1 Remake Fingers" },
{ "@type": "Thing", name: "Gothic 1 Remake Mordrag" },
{ "@type": "Thing", name: "Gothic 1 Remake Fisk" },
{ "@type": "Thing", name: "Gothic 1 Remake Dexter" },
{ "@type": "Thing", name: "Gothic 1 Remake Cavalorn" },
{ "@type": "Thing", name: "Gothic 1 Remake Sneak" },
{ "@type": "Thing", name: "Gothic 1 Remake Learning Points" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake chest" },
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
name: "How does lockpicking work in Gothic 1 Remake?",
acceptedAnswer: {
"@type": "Answer",
text:
"Each lock uses sliding plates with 7 holes. Move the bronze pins into the fourth hole, the center position. A correct pin rises instead of dropping. The challenge is that moving one plate can move other plates too.",
},
},
{
"@type": "Question",
name: "Why do my lockpicks break so fast?",
acceptedAnswer: {
"@type": "Answer",
text:
"Before training, a lockpick breaks after 2 failed slider moves and the lock fully resets. This is why manual saving before chests is so important early.",
},
},
{
"@type": "Question",
name: "What does Trained lockpicking do?",
acceptedAnswer: {
"@type": "Answer",
text:
"Trained lockpicking costs 10 LP and 100 ore. It lets you make up to 4 failed slider moves before the lockpick breaks, and a broken pick does not reset your lock progress.",
},
},
{
"@type": "Question",
name: "What does Master lockpicking do?",
acceptedAnswer: {
"@type": "Answer",
text:
"Master lockpicking costs 20 LP and 200 ore. When a lockpick breaks, one slider connection is removed, making the remaining puzzle simpler.",
},
},
{
"@type": "Question",
name: "Where should I buy lockpicks first?",
acceptedAnswer: {
  "@type": "Answer",
  text:
    "Check Mordrag first while he is still in the Old Camp, before you send him away for Thorus. After that, use Fisk or Dexter as backup lockpick sources.",
},
},
{
"@type": "Question",
name: "Where is Fingers?",
acceptedAnswer: {
"@type": "Answer",
text:
"Fingers is in the Old Camp outer ring. From the castle gate, head left toward the arena side and castle wall.",
},
},
{
"@type": "Question",
name: "Is lockpicking worth my first 10 LP?",
acceptedAnswer: {
"@type": "Answer",
text:
"Only if you have a chest route or are using Fingers for Old Camp support. If you are still struggling in combat, one-handed training, Strength, or Dexterity may matter more.",
},
},
{
"@type": "Question",
name: "Can guards interrupt lockpicking?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Lockpicking happens in real time, so guards and NPCs can catch you during the puzzle and attack or interrupt you.",
},
},
{
"@type": "Question",
name: "What is Cavalorn's Sneak training for?",
acceptedAnswer: {
"@type": "Answer",
text:
"Sneak can help you approach owned chests without being noticed as easily. It does not remove theft consequences, but it supports a safer thief route.",
},
},
{
"@type": "Question",
name: "Should I learn pickpocketing with lockpicking?",
acceptedAnswer: {
"@type": "Answer",
text:
"Not automatically. Lockpicking is usually the safer first thief skill because it targets chests. Pickpocketing targets people and carries higher risk around important NPCs.",
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
       title="Pick Locks Without Wasting Lockpicks"
       description="Learn the slider puzzle, broken lockpick rules, Fingers training, Mordrag’s cheap lockpicks, and when lockpicking is worth your LP."
       gameTitle="Gothic 1 Remake"
       gameHref="/gothic-1-remake"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 8, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <LockpickingGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
