import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TremorEvacuationContent from "@/data/frostpunk-2-breach-of-trust/tremor-evacuation-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/frostpunk-2-breach-of-trust/tremor-evacuation-guide/`;

const imageUrls = [
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-steam-output-tremor.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-emergency-shelter-coverage.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-volcanic-night-objective.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-evacuation-hub-airship.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-generator-core-extraction.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-final-evacuation-last-transports.webp`,
];

const toc = [
{
id: "tremor-evacuation-guide",
label: "Tremor & evacuation",
},
{
id: "tremor-vs-volcanic-night",
label: "Tremor vs Volcanic Night",
},
{
id: "steam-output",
label: "Steam output",
},
{
id: "emergency-shelter-hub",
label: "Emergency Shelter Hub",
},
{
id: "prefab-reserve",
label: "Prefab reserve",
},
{
id: "pure-dead-brilliant",
label: "Pure Dead Brilliant",
},
{
id: "volcanic-night",
label: "Volcanic Night",
},
{
id: "evacuation-hubs",
label: "Evacuation Hubs",
},
{
id: "generator-core",
label: "Generator Core",
},
{
id: "final-evacuation",
label: "Final evacuation",
},
{
id: "common-mistakes",
label: "Mistakes",
},
{
id: "faq",
label: "FAQ",
},
];

const relatedLinks = [
{
href: "/frostpunk-2-breach-of-trust/",
label: "Frostpunk 2 Breach of Trust Guide Hub",
},
{
href: "/frostpunk-2-breach-of-trust/walkthrough/",
label: "Breach of Trust Walkthrough",
},
{
href: "/frostpunk-2-breach-of-trust/aurora-negotiation-fishery-hub-guide/",
label: "Aurora Negotiation and Fishery Hub Guide",
},
{
href: "/frostpunk-2-breach-of-trust/conquer-aurora-war-route-guide/",
label: "Conquer Aurora War Route Guide",
},
];

export const metadata: Metadata = {
title: "Frostpunk 2 Breach of Trust Tremor Evacuation Guide",
description:
"Survive Breach of Trust tremors and Volcanic Night with steam output, Emergency Shelter Hub coverage, airship costs, and Generator Core timing.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Frostpunk 2 Breach of Trust Tremor and Evacuation Guide",
description:
"Manage steam output, Emergency Shelter Hubs, prefab repairs, Volcanic Night, Evacuation Hub airships, Generator Core timing, and Pure Dead Brilliant planning in Frostpunk 2: Breach of Trust.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[2],
width: 1600,
height: 900,
alt: "Frostpunk 2 Breach of Trust Volcanic Night evacuation objective.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Frostpunk 2 Breach of Trust Tremor Evacuation Guide",
description:
"Handle tremors, Volcanic Night, Evacuation Hubs, airship resources, Generator Core timing, and Pure Dead Brilliant.",
images: [imageUrls[2]],
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
name: "Frostpunk 2 Breach of Trust Guide",
item: `${siteUrl}/frostpunk-2-breach-of-trust/`,
},
{
"@type": "ListItem",
position: 3,
name: "Tremor and Evacuation Guide",
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
"Frostpunk 2 Breach of Trust Tremor and Evacuation Guide: Emergency Shelter Hubs, Volcanic Night, Airship Costs, Generator Core Timing, and Pure Dead Brilliant Planning",
description:
"A practical Frostpunk 2: Breach of Trust guide for surviving repeated tremors, lowering steam output, placing Emergency Shelter Hubs, keeping prefab repair reserves, understanding the difference between Tremors and Volcanic Night, preparing Evacuation Hub airship cycles, managing run-specific evacuation targets, timing Generator Core extraction, and planning a Pure Dead Brilliant no-deaths route.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-28",
dateModified: "2026-06-28",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "Frostpunk 2",
},
{
"@type": "Thing",
name: "Frostpunk 2 Breach of Trust",
},
{
"@type": "Thing",
name: "Tremors",
},
{
"@type": "Thing",
name: "Volcanic Night",
},
{
"@type": "Thing",
name: "Emergency Shelter Hub",
},
{
"@type": "Thing",
name: "Prefab repairs",
},
{
"@type": "Thing",
name: "Evacuation Hub",
},
{
"@type": "Thing",
name: "Evacuation airships",
},
{
"@type": "Thing",
name: "Generator Core",
},
{
"@type": "Thing",
name: "Pure Dead Brilliant",
},
],
publisher: {
"@type": "Organization",
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
name: "Will my Volcanic Night timer and evacuation target match yours?",
acceptedAnswer: {
"@type": "Answer",
text:
"Not always. In one run, the objective showed a 79-week eruption timer, a 10,450 majority evacuation target, and a 6,966 casualty cap. Your numbers can change based on difficulty, population size, earlier deaths, route choices, and patches.",
},
},
{
"@type": "Question",
name: "How do I reduce tremor danger?",
acceptedAnswer: {
"@type": "Answer",
text:
"Lower steam output, especially excess geothermal use. The opening objective points toward 200 or less, which is a useful target if the city can survive it.",
},
},
{
"@type": "Question",
name: "What is the difference between Tremors and Volcanic Night?",
acceptedAnswer: {
"@type": "Answer",
text:
"Tremors are recurring damage events that you manage with lower steam output, shelter coverage, and repairs. Volcanic Night is the later eruption phase where ash, squalor, crime, evacuation, and Aurora housing become the main problem.",
},
},
{
"@type": "Question",
name: "Should I research Emergency Shelter Hub before Barracks?",
acceptedAnswer: {
"@type": "Answer",
text:
"For a first clear, usually yes. If you rush Barracks and the first tremor hits uncovered housing, people can die before the war route matters.",
},
},
{
"@type": "Question",
name: "Which districts should I protect first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Protect housing first, then prefab production, research, food, or transfer infrastructure. Housing damage can create homelessness and cold deaths quickly.",
},
},
{
"@type": "Question",
name: "Why do I still need prefabs after building shelters?",
acceptedAnswer: {
"@type": "Answer",
text:
"Shelters reduce casualties, not all damage. Tremors can still damage districts, and repairs can cost a lot of prefabs.",
},
},
{
"@type": "Question",
name: "What does each Evacuation Hub airship need?",
acceptedAnswer: {
"@type": "Answer",
text:
"In one run, each launch needed 5,000 food, 5,000 coal, and 500 prefabs, then saved 1,000 people. Recheck your own hub panel if balance patches change costs.",
},
},
{
"@type": "Question",
name: "How many Evacuation Hubs should I build?",
acceptedAnswer: {
"@type": "Answer",
text:
"More than one if your resources allow. The real goal is not just hub count; it is keeping food, coal, prefabs, workers, and Aurora housing ready for repeated launches.",
},
},
{
"@type": "Question",
name: "When should I extract the Generator Core?",
acceptedAnswer: {
"@type": "Answer",
text:
"Extract it after your evacuation system is already running and the core timer lines up with the final eruption. Do not start it while airships are idle or unloaded.",
},
},
{
"@type": "Question",
name: "How do I prepare for Pure Dead Brilliant?",
acceptedAnswer: {
"@type": "Answer",
text:
"Do not chase it blind. Learn the scenario first, then replay with strict shelter coverage, no starvation, no housing gaps, low crime, stable Aurora housing, and clean Generator Core timing.",
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
      title="Survive Tremors and Evacuate New Edinburgh"
      description="Lower steam output, cover housing with Emergency Shelter Hubs, prepare Volcanic Night, load Evacuation Hub airships, and time the Generator Core."
      gameTitle="Frostpunk 2: Breach of Trust"
      gameHref="/frostpunk-2-breach-of-trust/"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 28, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <TremorEvacuationContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>
);
}
