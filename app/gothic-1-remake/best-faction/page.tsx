import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestFactionContent from "@/data/gothic-1-remake/best-faction.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gothic-1-remake/best-faction`;

const imageUrls = [
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-three-camps-diego-dialogue.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-thorus-castle-gate.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-old-camp-gomez-shadow-choice.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-mordrag-new-camp-escort.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-lares-new-camp.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-baal-parvez-swamp-escort.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-swamp-camp-entrance.webp`,
];

const toc = [
{ id: "best-faction", label: "Best faction" },
{ id: "short-answer", label: "Quick choice" },
{ id: "before-you-choose", label: "Before choosing" },
{ id: "armor-progression", label: "Armor progression" },
{ id: "old-camp", label: "Old Camp" },
{ id: "new-camp", label: "New Camp" },
{ id: "swamp-camp", label: "Swamp Camp" },
{ id: "best-camp-for-magic", label: "Magic routes" },
{ id: "best-by-build", label: "Best by build" },
{ id: "joining-requirements", label: "Join requirements" },
{ id: "trainer-access", label: "Trainer access" },
{ id: "when-you-get-locked-in", label: "Faction lock-in" },
{ id: "chapter-1-decision", label: "Chapter 1 decision" },
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
href: "/gothic-1-remake/early-ore-weapons-armor",
label: "Gothic 1 Remake Early Gear Guide",
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
title: "Gothic 1 Remake Best Faction: Old, New or Swamp Camp",
description:
  "Choose the best Gothic 1 Remake faction: Old Camp, New Camp, or Swamp Camp, with armor, magic, trainers, economy, and lock-in explained.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Gothic 1 Remake Best Faction: Old Camp, New Camp or Swamp Camp?",
description:
"Choose the right Gothic 1 Remake faction by comparing Old Camp, New Camp, and Swamp Camp armor progression, magic routes, early economy, Chapter 4 consequences, trainers, visitor benefits, and lock-in timing.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Gothic 1 Remake faction choice explained by Diego: Old Camp, New Camp, and Swamp Camp.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Gothic 1 Remake Best Faction Guide",
description:
"Old Camp, New Camp, and Swamp Camp compared by armor, magic, economy, trainers, and lock-in timing.",
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
name: "Best Faction Guide",
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
"Gothic 1 Remake Best Faction Guide: Old Camp, New Camp, Swamp Camp, Armor Progression, Magic Routes and Faction Lock-In",
description:
"A player-focused Gothic 1 Remake faction guide comparing Old Camp, New Camp, and Swamp Camp by first-playthrough safety, armor progression, Shadow Armor, Bandit-style New Camp gear, Novice armor, Fire Mage direction, Water Mage direction, Brotherhood and Templar identity, New Camp early economy, Mordrag and Lares route value, Swamp Camp visitor benefits such as Theron climbing training and free swampweed, Chapter 4 Old Camp exile, Level 5 joining requirements, trainer access, and when players become locked into a faction.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-07",
dateModified: "2026-06-07",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Gothic 1 Remake" },
{ "@type": "Thing", name: "Gothic 1 Remake best faction" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake New Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake Swamp Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake armor progression" },
{ "@type": "Thing", name: "Gothic 1 Remake Shadow Armor" },
{ "@type": "Thing", name: "Gothic 1 Remake Novice Armor" },
{ "@type": "Thing", name: "Gothic 1 Remake Fire Mage" },
{ "@type": "Thing", name: "Gothic 1 Remake Water Mage" },
{ "@type": "Thing", name: "Gothic 1 Remake Templar" },
{ "@type": "Thing", name: "Gothic 1 Remake Mordrag" },
{ "@type": "Thing", name: "Gothic 1 Remake Lares" },
{ "@type": "Thing", name: "Gothic 1 Remake Baal Parvez" },
{ "@type": "Thing", name: "Gothic 1 Remake Chapter 4 exile" },
{ "@type": "Thing", name: "Gothic 1 Remake faction lock-in" },
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
name: "What is the best faction in Gothic 1 Remake?",
acceptedAnswer: {
"@type": "Answer",
text:
"Old Camp is the safest first-playthrough choice, New Camp is best for a freer mercenary-style route, and Swamp Camp is best for Brotherhood and Templar flavor.",
},
},
{
"@type": "Question",
name: "Which faction has the best early armor?",
acceptedAnswer: {
"@type": "Answer",
text:
"Old Camp has the clearest early armor path because joining as a Shadow gives you access to Shadow Armor. New Camp and Swamp Camp have strong identity routes, but their early armor progression is less straightforward for a first run.",
},
},
{
"@type": "Question",
name: "Does Old Camp exile ruin my Fire Mage route?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. The Chapter 4 exile is scripted story progress, not a punishment for choosing Old Camp. Your route continues after exile.",
},
},
{
"@type": "Question",
name: "Is New Camp harder for beginners?",
acceptedAnswer: {
"@type": "Answer",
text:
"It can be. New Camp has a slower early economy and more setup before the rewards start paying off. Keep Mordrag alive, use his ring, and work carefully through Lares.",
},
},
{
"@type": "Question",
name: "Is Swamp Camp useful even if I do not join?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Theron can teach climbing for a fee, and visitors can take daily free swampweed. That makes Swamp Camp worth visiting even on Old Camp or New Camp routes.",
},
},
{
"@type": "Question",
name: "Can you join all factions?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. You can work with all three camps early, but you formally join only one.",
},
},
{
"@type": "Question",
name: "When should I choose a faction?",
acceptedAnswer: {
"@type": "Answer",
text:
"Choose after you have visited the camps, completed useful prerequisite quests, reached Level 5, and made a manual save before the final decision.",
},
},
{
"@type": "Question",
name: "Should I kill Mordrag?",
acceptedAnswer: {
"@type": "Answer",
text:
"No, not on a flexible route. Mordrag can guide you to New Camp and give you his ring, which is more valuable than removing him early.",
},
},
{
"@type": "Question",
name: "Which camp is best for magic?",
acceptedAnswer: {
"@type": "Answer",
text:
"Old Camp is best for early Fire Mage direction. New Camp is better for Water Mage direction later. Swamp Camp has Brotherhood magic flavor, but it is not the strongest pure mage route.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Old Camp Walkthrough if you want to join Old Camp, the Old Mine / Diego's List guide before handing in Diego's list, or the Perfect Start guide if you are still preparing your Chapter 1 route.",
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
       title="Which Camp Should You Join in Gothic 1 Remake?"
       description="Compare Old Camp, New Camp, and Swamp Camp by armor, magic routes, early economy, trainers, story consequences, and when the faction choice locks in."
       gameTitle="Gothic 1 Remake"
       gameHref="/gothic-1-remake"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 7, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <BestFactionContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
