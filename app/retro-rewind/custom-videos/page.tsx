import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CustomVideosContent from "@/data/retro-rewind/custom-videos.mdx";

export const metadata: Metadata = {
  title:
    "How to Add Your Own Videos to Retro Rewind (Custom TV Channels, File Size, and Fixes)",
  description:
    "Learn how to add custom videos to Retro Rewind, replace TV channel files, use Public, Sci-Fi, and Police channels, avoid encoding issues, and fix playback problems.",
  alternates: {
    canonical:
      "https://www.whisperofthehouse.com/retro-rewind/custom-videos",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <GuideArticlePage
          title="How to Add Your Own Videos to Retro Rewind"
          description="Yes, you can replace Retro Rewind’s in-game TV channel files with your own videos. This guide covers the safest file path, supported channels, working filenames, format recommendations, file size myths, and the most common playback fixes."
          gameTitle="Retro Rewind"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="March 26, 2026"
          toc={[
            {
              id: "how-to-add-custom-videos-quick-steps",
              label: "Quick steps",
            },
            {
              id: "where-the-tv-channel-file-is-located",
              label: "Where the file is located",
            },
            {
              id: "which-tv-channels-support-custom-videos",
              label: "Supported TV channels",
            },
            {
              id: "custom-video-file-names",
              label: "Channel file names",
            },
            {
              id: "which-file-to-replace",
              label: "Which file to replace",
            },
            {
              id: "how-to-replace-the-file-safely",
              label: "How to replace the file safely",
            },
            {
              id: "best-video-format-and-settings",
              label: "Best video format and settings",
            },
            {
              id: "is-there-a-file-size-limit-for-custom-videos",
              label: "File size limit",
            },
            {
              id: "how-to-convert-your-video-if-it-does-not-work",
              label: "Conversion tools",
            },
            {
              id: "how-to-play-your-custom-video-in-game",
              label: "How to play it in-game",
            },
            {
              id: "common-problems-and-fixes",
              label: "Common problems and fixes",
            },
            {
              id: "does-this-affect-saves-or-achievements",
              label: "Saves and achievements",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/retro-rewind/is-the-black-market-worth-it/",
              label: "Is the Black Market Worth It in Retro Rewind?",
            },
            {
              href: "/retro-rewind/when-to-replace-damaged-tape/",
              label: "When to Replace a Damaged Tape in Retro Rewind",
            },
          ]}
        >
          <CustomVideosContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}