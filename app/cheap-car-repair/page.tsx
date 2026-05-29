import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CheapCarRepairGuideContent from "@/data/cheap-car-repair/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/cheap-car-repair`;

const imageUrls = [
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-first-job-objectives.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-rust-grinder.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-sloppiness-bonus.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-drop-item-g-prompt.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-objectives.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-air-intake-pipe.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-christopher-kingman-job-list.webp`,
];

const toc = [
{ id: "what-is-cheap-car-repair", label: "What is Cheap Car Repair?" },
{ id: "first-things-to-do", label: "First things to do" },
{ id: "basic-repair-loop", label: "Basic repair loop" },
{ id: "sloppiness", label: "Sloppiness" },
{ id: "cheap-fixes", label: "Cheap fixes" },
{ id: "controls", label: "Controls" },
{ id: "early-missions", label: "Early missions" },
{ id: "daddys-little-girl", label: "Daddy's Little Girl" },
{ id: "christopher-kingman", label: "Christopher Kingman" },
{ id: "what-to-do-next", label: "What to do next" },
{ id: "beginner-mistakes", label: "Beginner mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/cheap-car-repair/daddys-little-girl-mission",
label: "Daddy's Little Girl Mission Walkthrough",
},
{
href: "/cheap-car-repair/controls-drop-items-save-tools",
label: "Controls, Drop Items, Save and Tools Guide",
},
{
href: "/cheap-car-repair/how-to-make-money",
label: "How to Make Money in Cheap Car Repair",
},
{
href: "/cheap-car-repair/story-missions-walkthrough",
label: "Story Missions Walkthrough",
},
{
href: "/cheap-car-repair/cars-parts-guide",
label: "Cars and Parts Guide",
},
{
href: "/cheap-car-repair/shocked-driver-mission",
label: "Shocked Driver Mission Walkthrough",
},
];

export const metadata: Metadata = {
title: "Cheap Car Repair Guide: Tips, Missions and How to Play",
description:
"Start Cheap Car Repair with beginner tips, controls, missions, sloppiness, money, parts, Daddy's Little Girl and Shocked Driver links.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Cheap Car Repair Complete Guide: Tips, Controls, Missions, Money and Parts",
description:
"Learn how to play Cheap Car Repair, finish early missions, use tools, cut corners safely, understand sloppiness, make money and find parts.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Cheap Car Repair first job objective list showing rust removal, green paint and polishing.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Cheap Car Repair Guide: Tips, Missions and How to Play",
description:
"Beginner guide for Cheap Car Repair with controls, sloppiness, mission help, money tips and parts links.",
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
name: "Cheap Car Repair Guide",
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
"Cheap Car Repair Complete Guide: Beginner Tips, How to Play, Controls, Sloppiness, Early Missions, Money, Parts and Walkthrough Links",
description:
"A player-focused Cheap Car Repair hub guide explaining what the game is, how to get started, how the basic repair loop works, how sloppiness affects cheap repairs, which controls new players need first, what early missions teach, why Daddy's Little Girl is a major stuck point, why Christopher Kingman is risky, and where to go next for dedicated walkthroughs covering Daddy's Little Girl, controls, money, story missions, cars and parts, and Shocked Driver.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-29",
dateModified: "2026-05-29",
about: [
{ "@type": "VideoGame", name: "Cheap Car Repair" },
{ "@type": "Thing", name: "Cheap Car Repair Guide" },
{ "@type": "Thing", name: "Cheap Car Repair Beginner Guide" },
{ "@type": "Thing", name: "How to Play Cheap Car Repair" },
{ "@type": "Thing", name: "Cheap Car Repair Tips" },
{ "@type": "Thing", name: "Cheap Car Repair Controls" },
{ "@type": "Thing", name: "Sloppiness" },
{ "@type": "Thing", name: "Cheap Fixes" },
{ "@type": "Thing", name: "Story Missions" },
{ "@type": "Thing", name: "Daddy's Little Girl" },
{ "@type": "Thing", name: "Christopher Kingman" },
{ "@type": "Thing", name: "How to Make Money" },
{ "@type": "Thing", name: "Cars and Parts" },
{ "@type": "Thing", name: "Shocked Driver" },
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
name: "Is Cheap Car Repair a serious mechanic sim?",
acceptedAnswer: {
"@type": "Answer",
text:
"Not really. It uses repair sim systems, but the main loop is about cheap fixes, bad decisions, strange substitutes and trying to make money before customers notice.",
},
},
{
"@type": "Question",
name: "What should I do first in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Take Sebastian's first job, follow the objectives, remove rust, paint the car green, polish it and call the customer. After that, restore power, fix your own car and build your shop sign.",
},
},
{
"@type": "Question",
name: "How do I drop items in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Press G to throw or drop the item or tool you are holding.",
},
},
{
"@type": "Question",
name: "How do I save in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use Save Game from the menu before stopping a long session. The game also shows saving progress during some early story steps. For more details, use the Controls, Drop Items, Save and Tools Guide.",
},
},
{
"@type": "Question",
name: "What is sloppiness in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Sloppiness is the risk created by bad or cheap work. It can help profit if the customer does not notice, but it can also lead to trouble if the repair is too poor.",
},
},
{
"@type": "Question",
name: "Should I remove all rust in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Not always. For cheap customer jobs, follow the objective list and do enough to complete the job. For your own car or risky customers, be more careful.",
},
},
{
"@type": "Question",
name: "Why can I not finish Daddy's Little Girl in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"The air intake pipe is a common issue. If it has been removed, reinstall it in the engine area and secure the clips with pliers before trying to finish the job.",
},
},
{
"@type": "Question",
name: "Can I keep customer parts in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Sometimes the game tempts you to keep useful parts. Be careful: taking a part may help your own car, but some parts are required before the customer job can be completed.",
},
},
{
"@type": "Question",
name: "How do I make money faster in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Take jobs where the payout beats your part cost, supply cost and time cost. Use found parts, finish only the required objectives and save good parts for your own car or higher-paying jobs.",
},
},
{
"@type": "Question",
name: "Should I use proper parts or cheap substitutes in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use proper parts when the job requires them or when the customer is risky. Use questionable substitutes when the game allows it and the profit is worth the risk.",
},
},
{
"@type": "Question",
name: "Where should I go after this Cheap Car Repair guide?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the mission guide if you are following the story, the money guide if you want profit, the controls guide if you are stuck with tools, and the parts guide if you need to understand vehicles and replacement parts.",
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
       title="Cheap Car Repair Complete Guide"
       description="Start here if you are new: learn the repair loop, controls, sloppiness, early missions, money basics and where to go when a job blocks you."
       gameTitle="Cheap Car Repair"
       gameHref="/cheap-car-repair"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 29, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <CheapCarRepairGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
