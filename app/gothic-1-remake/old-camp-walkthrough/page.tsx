import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import OldCampContent from "@/data/gothic-1-remake/old-camp-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gothic-1-remake/old-camp-walkthrough`;

const imageUrls = [
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-thorus-castle-gate.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-old-camp-entrance.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-whistler-sword-quest.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-fisk-ornamented-sword.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-sly-nek-quest.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-fingers-lockpicking-task.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-scatty-arena-test.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-karim-arena-duel.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-mordrag-new-camp-escort.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-ian-old-mine-list.webp`,
`${siteUrl}/images/gothic-1-remake/gothic-1-remake-old-camp-gomez-shadow-choice.webp`,
];

const toc = [
{ id: "old-camp-walkthrough", label: "Old Camp walkthrough" },
{ id: "requirements", label: "Requirements" },
{ id: "talk-to-thorus", label: "Thorus" },
{ id: "talk-to-diego", label: "Diego" },
{ id: "graham-map", label: "Graham's map" },
{ id: "whistler", label: "Whistler" },
{ id: "sly", label: "Sly" },
{ id: "fingers", label: "Fingers" },
{ id: "scatty", label: "Scatty" },
{ id: "dexter", label: "Dexter" },
{ id: "fisk", label: "Fisk" },
{ id: "mordrag", label: "Mordrag" },
{ id: "diegos-test", label: "Diego's test" },
{ id: "level-5", label: "Level 5" },
{ id: "raven-gomez", label: "Raven and Gomez" },
{ id: "rewards", label: "Rewards" },
{ id: "mistakes", label: "Mistakes" },
{ id: "route-summary", label: "Checklist" },
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
href: "/gothic-1-remake/best-faction",
label: "Gothic 1 Remake Best Faction Guide",
},
{
href: "/gothic-1-remake/old-mine-diegos-list",
label: "Gothic 1 Remake Diego's List Guide",
},
{
href: "/gothic-1-remake/early-ore-weapons-armor",
label: "Gothic 1 Remake Early Gear Guide",
},
{
href: "/gothic-1-remake/perfect-start",
label: "Gothic 1 Remake Perfect Start",
},
];

export const metadata: Metadata = {
title: "Gothic 1 Remake Old Camp Walkthrough: Join Gomez",
description:
"Join the Old Camp with Shadow support, Diego’s Test of Faith, Ian’s countersign, Raven, Gomez dialogue traps, Dexter, Fisk, and Mordrag.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Gothic 1 Remake Old Camp Walkthrough: Shadow Support, Diego’s Test and Gomez",
description:
"Complete the Old Camp route in Gothic 1 Remake with Thorus, Diego, Whistler, Sly, Fingers, Scatty, Dexter, Fisk, Mordrag, Ian’s list, Raven, and Gomez’s fatal dialogue choices.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Gothic 1 Remake Old Camp walkthrough with Thorus at the castle gate.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Gothic 1 Remake Old Camp Walkthrough",
description:
"Shadow support, Diego’s Test of Faith, Ian’s countersign, Raven, Gomez, Mordrag, Dexter, and Fisk explained.",
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
name: "Old Camp Walkthrough",
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
"Gothic 1 Remake Old Camp Walkthrough: How to Join Gomez, Get Shadow Support, Complete Diego’s Test of Faith and Survive Gomez’s Dialogue",
description:
"A player-focused Gothic 1 Remake Old Camp walkthrough explaining how to join the Old Camp, talk to Thorus, build Shadow support with Whistler, Sly, Fingers, Scatty, Dexter, Fisk and Mordrag, use Graham’s map, complete Diego’s Test of Faith in the Old Mine, use Ian’s countersign, decide what to do with Diego’s list, reach Level 5, speak to Raven inside the castle, avoid Gomez’s fatal dialogue choices involving Y’Berion or threats, become a Shadow, and understand why the 1000 ore Thorus bribe does not count as formal Old Camp admission.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-07",
dateModified: "2026-06-07",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Gothic 1 Remake" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake Old Camp walkthrough" },
{ "@type": "Thing", name: "Gothic 1 Remake how to join Old Camp" },
{ "@type": "Thing", name: "Gothic 1 Remake Shadow support" },
{ "@type": "Thing", name: "Gothic 1 Remake Thorus" },
{ "@type": "Thing", name: "Gothic 1 Remake Diego" },
{ "@type": "Thing", name: "Gothic 1 Remake Test of Faith" },
{ "@type": "Thing", name: "Gothic 1 Remake Ian countersign" },
{ "@type": "Thing", name: "Gothic 1 Remake Gomez dialogue" },
{ "@type": "Thing", name: "Gothic 1 Remake Raven" },
{ "@type": "Thing", name: "Gothic 1 Remake Whistler" },
{ "@type": "Thing", name: "Gothic 1 Remake Sly" },
{ "@type": "Thing", name: "Gothic 1 Remake Fingers" },
{ "@type": "Thing", name: "Gothic 1 Remake Scatty" },
{ "@type": "Thing", name: "Gothic 1 Remake Dexter" },
{ "@type": "Thing", name: "Gothic 1 Remake Fisk" },
{ "@type": "Thing", name: "Gothic 1 Remake Mordrag" },
{ "@type": "Thing", name: "Gothic 1 Remake Graham map" },
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
name: "How do I join the Old Camp in Gothic 1 Remake?",
acceptedAnswer: {
"@type": "Answer",
text:
"Get enough Old Camp support, complete Diego's Test of Faith in the Old Mine, reach Level 5, then talk to Diego, Thorus, Raven, and Gomez.",
},
},
{
"@type": "Question",
name: "Who are the easiest Old Camp supporters?",
acceptedAnswer: {
"@type": "Answer",
text:
"Whistler, Sly, Fingers, and Scatty are the easiest early support route. Dexter and Fisk are useful extra routes if you want more options.",
},
},
{
"@type": "Question",
name: "What are the fatal Gomez dialogue choices?",
acceptedAnswer: {
"@type": "Answer",
text:
"Do not say you serve Y'Berion or answer “To Y'Berion,” and do not threaten Gomez with violence. Either answer can get you killed immediately.",
},
},
{
"@type": "Question",
name: "Where is Raven?",
acceptedAnswer: {
"@type": "Answer",
text:
"After Thorus lets you into the castle, speak to Raven near the entrance podium. He escorts you to Gomez.",
},
},
{
"@type": "Question",
name: "What is Diego's countersign for Ian?",
acceptedAnswer: {
"@type": "Answer",
text:
"Tell Ian: “The crawlers look mighty hungry.” Diego gives you this phrase for the Old Mine supply list.",
},
},
{
"@type": "Question",
name: "How do I complete Whistler's sword quest?",
acceptedAnswer: {
"@type": "Answer",
text:
"Take Whistler's 100 ore, buy the ornamented sword from Fisk for 110 ore, do not mention Whistler, and return the sword to Whistler.",
},
},
{
"@type": "Question",
name: "How do I get Dexter's support?",
acceptedAnswer: {
"@type": "Answer",
text:
"Complete The Cult's Recipe by getting the Dreamjuice Recipe from the Swamp Camp / Cor Kalom route and bringing it back to Dexter.",
},
},
{
"@type": "Question",
name: "How do I get Fisk's support?",
acceptedAnswer: {
"@type": "Answer",
text:
"After Mordrag leaves through Out of Sight, go to the New Camp and recruit Sharky as Fisk's new fence.",
},
},
{
"@type": "Question",
name: "Should I kill Mordrag for Thorus?",
acceptedAnswer: {
"@type": "Answer",
text:
"No, not if you want a flexible route. Convince Mordrag to leave and let him guide you to the New Camp instead.",
},
},
{
"@type": "Question",
name: "Can I bribe Thorus to join the Old Camp?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. The 1000 ore bribe can get you through the castle gate for other business, but it does not count as Old Camp admission or get you a proper Gomez audience.",
},
},
{
"@type": "Question",
name: "Where do I get Diego's list?",
acceptedAnswer: {
"@type": "Answer",
text:
"Go to the Old Mine and speak with Ian. Use Diego's countersign to get the supply list.",
},
},
{
"@type": "Question",
name: "Should I give Diego's list to Diego immediately?",
acceptedAnswer: {
"@type": "Answer",
text:
"Not always. Save first and consider showing it to Lares before returning it to Diego if you want extra New Camp value.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Old Mine / Diego's List guide before handing in the list, or the Best Faction Guide if you are not sure Old Camp is your final choice.",
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
       title="Join the Old Camp Without Failing Gomez’s Test"
       description="Get Shadow support, finish Diego’s Test of Faith, use Ian’s countersign, meet Raven, avoid Gomez’s fatal answers, and become a Shadow."
       gameTitle="Gothic 1 Remake"
       gameHref="/gothic-1-remake"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 7, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <OldCampContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
