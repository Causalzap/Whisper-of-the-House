import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import StoryMissionsWalkthroughContent from "@/data/cheap-car-repair/story-missions-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/cheap-car-repair/story-missions-walkthrough`;

const imageUrls = [
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-job-complete.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-first-job-objectives.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-electrical-box-wire-order.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-own-car-rust-repair-annotated.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-applied-signology-shop-sign.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-objectives.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-christopher-kingman-job-list.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-putty-dent-repair.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-kingman-consequence-trunk.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-kingman-forced-petrol-job.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-serve-clients-earn-cash.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-shocked-driver-objectives.webp`,
];

const toc = [
{ id: "work-in-progress", label: "Mission list status" },
{ id: "recommended-order", label: "Recommended order" },
{ id: "beginnings-are-always-hard", label: "First job" },
{ id: "high-voltage-electrician", label: "Electrical box order" },
{ id: "apple-of-my-eye", label: "Apple of My Eye" },
{ id: "applied-signology", label: "Applied Signology" },
{ id: "daddys-little-girl", label: "Daddy's Little Girl" },
{ id: "christopher-kingman", label: "Christopher Kingman" },
{ id: "kingman-aftermath", label: "Kingman aftermath" },
{ id: "regular-clients", label: "Regular clients" },
{ id: "shocked-driver", label: "Shocked Driver" },
{ id: "what-to-check-when-stuck", label: "When stuck" },
{ id: "which-guide-next", label: "Which guide next" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{ href: "/cheap-car-repair", label: "Cheap Car Repair Complete Guide" },
{
href: "/cheap-car-repair/daddys-little-girl-mission",
label: "Daddy's Little Girl Mission Walkthrough",
},
{
href: "/cheap-car-repair/shocked-driver-mission",
label: "Shocked Driver Mission Walkthrough",
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
href: "/cheap-car-repair/cars-parts-guide",
label: "Cars and Parts Guide",
},
];

export const metadata: Metadata = {
title: "Cheap Car Repair Story Missions Walkthrough",
description:
"Follow Cheap Car Repair story missions: first job, electrical box order, shop sign, Daddy's Little Girl, Kingman aftermath and Shocked Driver.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Cheap Car Repair Story Missions Walkthrough: Mission Order, Electrical Box, Shop Sign and Kingman",
description:
"Use this Cheap Car Repair story walkthrough to follow the early mission order, restore power, build the shop sign, complete Daddy's Little Girl, handle Kingman and start Shocked Driver.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Cheap Car Repair quest log showing completed early missions and the Daddy's Little Girl quest steps.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Cheap Car Repair Story Missions Walkthrough",
description:
"Follow the early story route, fix the electrical box, build the shop sign, avoid Kingman trouble and route into Shocked Driver.",
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
item: `${siteUrl}/cheap-car-repair`,
},
{
"@type": "ListItem",
position: 3,
name: "Story Missions Walkthrough",
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
"Cheap Car Repair Story Missions Walkthrough: Early Mission Order, Electrical Box, Applied Signology, Daddy's Little Girl, Kingman Aftermath and Shocked Driver",
description:
"A player-focused Cheap Car Repair story missions walkthrough for the confirmed early route, including Sebastian's first job, High Voltage Electrician electrical box order, Apple of My Eye, Applied Signology shop sign steps, Daddy's Little Girl, Christopher Kingman, what happens after Kingman gets angry, regular driveway clients and Shocked Driver. The guide explains the recommended mission order, key stuck points, how to restore power, what to do if the electrical box wire sequence does not work, how to build the shop sign, when regular customers start appearing and where to go next for dedicated mission and parts guides.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-29",
dateModified: "2026-05-29",
about: [
{ "@type": "VideoGame", name: "Cheap Car Repair" },
{ "@type": "Thing", name: "Cheap Car Repair Story Missions" },
{ "@type": "Thing", name: "Cheap Car Repair Missions List" },
{ "@type": "Thing", name: "Beginnings Are Always Hard" },
{ "@type": "Thing", name: "High Voltage Electrician" },
{ "@type": "Thing", name: "Electrical Box Order" },
{ "@type": "Thing", name: "Apple of My Eye" },
{ "@type": "Thing", name: "Applied Signology" },
{ "@type": "Thing", name: "Shop Sign" },
{ "@type": "Thing", name: "Daddy's Little Girl" },
{ "@type": "Thing", name: "Christopher Kingman" },
{ "@type": "Thing", name: "Kingman Aftermath" },
{ "@type": "Thing", name: "Regular Driveway Clients" },
{ "@type": "Thing", name: "Shocked Driver" },
{ "@type": "Thing", name: "Mission Stuck Fixes" },
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
name: "Is this a complete Cheap Car Repair missions list?",
acceptedAnswer: {
"@type": "Answer",
text:
"Not yet. This is a work-in-progress walkthrough for confirmed early story missions and major early jobs. More missions should be added as they are verified.",
},
},
{
"@type": "Question",
name: "What is the first mission in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"The first major job is Sebastian's Solonez. You remove rust, paint the vehicle green, polish the fresh paint and call the customer.",
},
},
{
"@type": "Question",
name: "How do I restore power in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Go to the neighbor's electrical box, open it, read the four-wire diagram and click the wires in the shown order. If it does not work, step back and retry the sequence.",
},
},
{
"@type": "Question",
name: "What do I do if the electrical box wire sequence does not work?",
acceptedAnswer: {
"@type": "Answer",
text:
"Step back from the box, open the panel again and read the four-wire diagram before clicking anything. Click the wires in the exact order shown by the diagram in your current build. If you clicked too early or missed a wire, reset your position and retry the sequence.",
},
},
{
"@type": "Question",
name: "What is Apple of My Eye in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Apple of My Eye is the early mission where you fix your own car. It teaches you to care more about your own car than cheap customer cars.",
},
},
{
"@type": "Question",
name: "What is Applied Signology in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Applied Signology is the shop sign mission. Find the sign parts near the gate, place them in the marked spots, name your shop and paint the sign.",
},
},
{
"@type": "Question",
name: "How do I build the shop sign in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Pick up the broken sign pieces near the shop entrance or gate, place them in the marked positions, use the shop name prompt and spray-paint the sign when the objective changes.",
},
},
{
"@type": "Question",
name: "How do I unlock more customers in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Build and paint the shop sign during Applied Signology, then continue the early story until regular driveway clients start appearing. Once the garage loop opens, clients can come to your driveway for repeat cash jobs.",
},
},
{
"@type": "Question",
name: "What is the first hard mission in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Daddy's Little Girl is the first big stuck point because it combines fluids, battery work, rear-left tire replacement and rear engine air intake work.",
},
},
{
"@type": "Question",
name: "Why is Daddy's Little Girl stuck in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"The usual problem is the air intake pipe. Reinstall the pipe first, then use pliers to secure the clips before calling Angelica.",
},
},
{
"@type": "Question",
name: "What does RL mean in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"RL means rear left. For Daddy's Little Girl, replace the rear-left tire.",
},
},
{
"@type": "Question",
name: "Who is Christopher Kingman in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Christopher Kingman is a dangerous early story customer. His job introduces washing, putty, oil, fuel filter and alternator work, and sloppy work can cause trouble.",
},
},
{
"@type": "Question",
name: "What happens after Kingman gets angry in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Kingman can trigger a story consequence if his car fails after leaving your garage. Follow the new objective list; it is a forced story sequence, not a permanent softlock.",
},
},
{
"@type": "Question",
name: "When do regular clients start coming in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"After the early story opens the garage loop, clients begin coming to your driveway. You can serve them for cash or let them wait while you do other tasks.",
},
},
{
"@type": "Question",
name: "Is the scrapyard important in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. The scrapyard and nearby part sources become important once jobs ask for more replacement parts, especially before larger missions such as Shocked Driver.",
},
},
{
"@type": "Question",
name: "What is Shocked Driver in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Shocked Driver is a larger early repair job with cleaning, dents, paint, tires, rims, pulleys and missing parts. Use the dedicated walkthrough if you need the full step order.",
},
},
{
"@type": "Question",
name: "What should I do if a mission will not finish in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Open the quest log and look for unchecked lines. If that does not solve it, make sure the quest is tracked, the customer has been called and no story prompt is still waiting.",
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
       title="Cheap Car Repair Story Missions Walkthrough"
       description="Follow the early story route, restore power, build the shop sign, handle Kingman, unlock regular clients and route into Shocked Driver without getting stuck."
       gameTitle="Cheap Car Repair"
       gameHref="/cheap-car-repair"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 29, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <StoryMissionsWalkthroughContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
