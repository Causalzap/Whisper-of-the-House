import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SkillsTrainersContent from "@/data/gothic-1-remake/skills-trainers.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gothic-1-remake/skills-trainers`;

const imageUrls = [
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-learning-points-level-up.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-diego-strength-dexterity-trainer.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-scatty-one-handed-training.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-fingers-lockpicking-trainer.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-huno-blacksmithing-trainer.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-drax-hunting-skills.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-wolf-archery-training.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-torrez-rune-magic.webp`,
];

const toc = [
{ id: "skills-trainers-guide", label: "Skills guide" },
{ id: "best-first-lp-by-build", label: "First LP by build" },
{ id: "trainer-overview", label: "Trainer overview" },
{ id: "diego-strength-dexterity", label: "Diego" },
{ id: "one-handed-arena-trainer", label: "One-handed training" },
{ id: "fingers-lockpicking", label: "Fingers" },
{ id: "huno-blacksmithing", label: "Huno" },
{ id: "drax-hunting-skills", label: "Drax" },
{ id: "bow-trainers-cavalorn-wolf", label: "Cavalorn / Wolf" },
{ id: "theron-climbing", label: "Theron" },
{ id: "magic-trainers", label: "Magic trainers" },
{ id: "skill-effects-table", label: "Skill effects" },
{ id: "common-mistakes", label: "Mistakes" },
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
href: "/gothic-1-remake/lockpicking-guide",
label: "Gothic 1 Remake Lockpicking Guide",
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
href: "/gothic-1-remake/swamp-camp-walkthrough",
label: "Gothic 1 Remake Swamp Camp Walkthrough",
},
];

export const metadata: Metadata = {
title: "Gothic 1 Remake Skills & Trainers: First LP Guide",
description:
"Plan Gothic 1 Remake skills with no respec, first LP, trainer costs, Diego, one-handed, Fingers, Huno, Drax, Cavalorn, Theron, and magic routes.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Gothic 1 Remake Skills and Trainers Guide: First LP, Costs, No Respec and Builds",
description:
"Plan your Gothic 1 Remake Learning Points with no respec, first LP priorities, trainer costs, Diego, one-handed training, Fingers, Huno, Drax, Cavalorn, Wolf, Theron, Torrez, Cronos, Baal Cadar, Strength, Dexterity, hunting, blacksmithing, climbing, and magic routes.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Gothic 1 Remake Learning Points after leveling up.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Gothic 1 Remake Skills & Trainers Guide",
description:
"First LP, no respec, trainer costs, Diego, one-handed, Fingers, Huno, Drax, Cavalorn, Theron, and magic routes explained.",
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
name: "Skills and Trainers Guide",
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
"Gothic 1 Remake Skills and Trainers Guide: Learning Points, No Respec, First LP Spending, Trainer Costs, Strength, Dexterity, One-Handed, Lockpicking, Hunting, Blacksmithing, Climbing and Magic",
description:
"A player-focused Gothic 1 Remake skills and trainers guide explaining how Learning Points work, why there is no respec, how to avoid wasting your first LP, which trainers solve which early problems, how to choose between one-handed training and Strength, when Diego's Strength and Dexterity training matters, where the Old Camp arena weapon trainer fits compared with Scatty and Dog confusion, how Fingers supports lockpicking and Old Camp admission, why Huno's blacksmithing can be a safer ore route, when Drax's hunting skills pay off, how Cavalorn and Wolf support bow routes, why Theron's climbing training matters for Swamp Camp utility, and how Torrez, Cronos and Baal Cadar connect to Fire Mage, Water Mage and Brotherhood magic routes.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-08",
dateModified: "2026-06-08",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Gothic 1 Remake" },
{ "@type": "Thing", name: "Gothic 1 Remake skills" },
{ "@type": "Thing", name: "Gothic 1 Remake trainers" },
{ "@type": "Thing", name: "Gothic 1 Remake Learning Points" },
{ "@type": "Thing", name: "Gothic 1 Remake first LP" },
{ "@type": "Thing", name: "Gothic 1 Remake no respec" },
{ "@type": "Thing", name: "Gothic 1 Remake Strength" },
{ "@type": "Thing", name: "Gothic 1 Remake Dexterity" },
{ "@type": "Thing", name: "Gothic 1 Remake one-handed training" },
{ "@type": "Thing", name: "Gothic 1 Remake Diego" },
{ "@type": "Thing", name: "Gothic 1 Remake Scatty" },
{ "@type": "Thing", name: "Gothic 1 Remake Dog" },
{ "@type": "Thing", name: "Gothic 1 Remake Fingers" },
{ "@type": "Thing", name: "Gothic 1 Remake Huno" },
{ "@type": "Thing", name: "Gothic 1 Remake Drax" },
{ "@type": "Thing", name: "Gothic 1 Remake Cavalorn" },
{ "@type": "Thing", name: "Gothic 1 Remake Wolf" },
{ "@type": "Thing", name: "Gothic 1 Remake Theron" },
{ "@type": "Thing", name: "Gothic 1 Remake Torrez" },
{ "@type": "Thing", name: "Gothic 1 Remake Cronos" },
{ "@type": "Thing", name: "Gothic 1 Remake Baal Cadar" },
{ "@type": "Thing", name: "Gothic 1 Remake lockpicking" },
{ "@type": "Thing", name: "Gothic 1 Remake hunting" },
{ "@type": "Thing", name: "Gothic 1 Remake blacksmithing" },
{ "@type": "Thing", name: "Gothic 1 Remake climbing" },
{ "@type": "Thing", name: "Gothic 1 Remake magic" },
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
name: "Is there respec in Gothic 1 Remake?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. There is no respec, so every LP you spend is permanent for that run. Save before major training choices and avoid spreading LP across too many systems.",
},
},
{
"@type": "Question",
name: "How many Learning Points do I get per level?",
acceptedAnswer: {
"@type": "Answer",
text:
"Each level gives 10 Learning Points. You spend them through trainers, often with an additional ore cost or route requirement.",
},
},
{
"@type": "Question",
name: "What should I spend my first 10 LP on?",
acceptedAnswer: {
"@type": "Answer",
text:
"Spend your first 10 LP on the trainer that solves your current problem. For melee, consider one-handed training. For weapon requirements, use Diego. For chests, use Fingers. For crafting income, use Huno.",
},
},
{
"@type": "Question",
name: "Who teaches one-handed weapons?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check the Old Camp arena area. Scatty is the arena figure, but if he does not offer one-handed training, check the nearby arena-side trainer or east-side hut.",
},
},
{
"@type": "Question",
name: "Is Strength or one-handed training better first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Strength is better if you need a weapon requirement. One-handed training is better if your problem is clumsy melee control.",
},
},
{
"@type": "Question",
name: "Who teaches blacksmithing?",
acceptedAnswer: {
"@type": "Answer",
text:
"Huno in the Old Camp smith area is the key early blacksmithing trainer. Blacksmithing can cost around 10 LP plus 50 ore.",
},
},
{
"@type": "Question",
name: "Who teaches bow skills early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Cavalorn is the early bow trainer near the Old Camp side of the world. Wolf becomes important later in New Camp.",
},
},
{
"@type": "Question",
name: "Is lockpicking worth learning early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes if you have a chest route or want Fingers' Old Camp support. Trained lockpicking costs 10 LP plus 100 ore, while Master costs 20 LP plus 200 ore.",
},
},
{
"@type": "Question",
name: "When should I learn hunting skills?",
acceptedAnswer: {
"@type": "Answer",
text:
"Learn hunting only after you can kill the animals that drop the materials. Buying teeth, claws, fur, or skin skills too early wastes LP.",
},
},
{
"@type": "Question",
name: "Who teaches climbing?",
acceptedAnswer: {
"@type": "Answer",
text:
"Theron in Swamp Camp can teach climbing. Expect a 5 LP cost and a possible requirement involving 6 Northern Dark herbs for Fortuno.",
},
},
{
"@type": "Question",
name: "Who teaches mana or magic?",
acceptedAnswer: {
"@type": "Answer",
text:
"Torrez helps with Old Camp / Fire Mage direction, Cronos supports New Camp / Water Mage direction, and Baal Cadar supports Swamp Camp / Brotherhood magic.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Lockpicking Guide for Fingers and chest mechanics, the Early Gear Guide for gear and ore, or the Best Faction Guide before committing to a camp.",
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
       title="Spend Learning Points Without Ruining Your Build"
       description="Plan your first LP around real trainers, no respec, ore costs, one-handed combat, lockpicking, hunting, crafting, climbing, and magic routes."
       gameTitle="Gothic 1 Remake"
       gameHref="/gothic-1-remake"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 8, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <SkillsTrainersContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
