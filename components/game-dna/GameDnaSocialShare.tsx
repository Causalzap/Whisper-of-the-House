"use client";

import {
  useCallback,
  type ReactNode,
} from "react";

import {
  buildGameDnaPlatformShareUrl,
  buildGameDnaResultUrl,
  openGameDnaShareWindow,
  type GameDnaSharePlatform,
} from "@/lib/game-dna/social-share";

export type GameDnaSocialShareProps = {
  profileTitle: string;
  selectedGameIds: readonly string[];
  requiredCount?: number;
  resultPathname?: string;
  className?: string;
  onShare?: (
    platform: GameDnaSharePlatform
  ) => void;
};

export default function GameDnaSocialShare({
  profileTitle,
  selectedGameIds,
  requiredCount = 9,
  resultPathname = "/game-dna",
  className = "",
  onShare,
}: GameDnaSocialShareProps) {
  const isReady =
    selectedGameIds.length >= requiredCount;

  const shareTo = useCallback(
    (platform: GameDnaSharePlatform) => {
      if (
        !isReady ||
        typeof window === "undefined"
      ) {
        return;
      }

      const resultUrl =
        buildGameDnaResultUrl({
          origin: window.location.origin,
          pathname: resultPathname,
          selectedGameIds:
            selectedGameIds.slice(
              0,
              requiredCount
            ),
          reveal: true,
        });

      const platformUrl =
        buildGameDnaPlatformShareUrl(
          platform,
          {
            profileTitle,
            resultUrl,
          }
        );

      openGameDnaShareWindow(
        platformUrl,
        platform
      );

      onShare?.(platform);
    },
    [
      isReady,
      onShare,
      profileTitle,
      requiredCount,
      resultPathname,
      selectedGameIds,
    ]
  );

  if (!isReady) {
    return null;
  }

  return (
    <section
      aria-labelledby="game-dna-social-share-title"
      className={[
        "rounded-[1.5rem]",
        "border border-violet-200/80",
        "bg-gradient-to-br",
        "from-white via-violet-50/70 to-sky-50/70",
        "p-5 shadow-sm sm:p-6",
        className,
      ].join(" ")}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">
            Share your result
          </p>

          <h2
            id="game-dna-social-share-title"
            className="mt-2 text-xl font-black tracking-tight text-slate-950 sm:text-2xl"
          >
            My Gaming DNA is {profileTitle}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Post your result and invite other
            players to build their own Gaming DNA.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <SocialShareButton
            label="Share on X"
            onClick={() => shareTo("x")}
            className="bg-slate-950 text-white hover:bg-slate-800"
            icon={<XIcon />}
          />

          <SocialShareButton
            label="Share on Bluesky"
            onClick={() =>
              shareTo("bluesky")
            }
            className="bg-sky-500 text-white hover:bg-sky-600"
            icon={<BlueskyIcon />}
          />

          <SocialShareButton
            label="Share on Reddit"
            onClick={() =>
              shareTo("reddit")
            }
            className="bg-orange-600 text-white hover:bg-orange-700"
            icon={<RedditIcon />}
          />
        </div>
      </div>
    </section>
  );
}

type SocialShareButtonProps = {
  label: string;
  onClick: () => void;
  icon: ReactNode;
  className: string;
};

function SocialShareButton({
  label,
  onClick,
  icon,
  className,
}: SocialShareButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex min-h-11",
        "items-center justify-center",
        "rounded-full px-4 py-2.5",
        "text-sm font-black",
        "shadow-sm transition",
        "hover:-translate-y-0.5",
        "hover:shadow-md",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-violet-500",
        "focus-visible:ring-offset-2",
        className,
      ].join(" ")}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
}

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M5 4l14 16M19 4 5 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BlueskyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M12 10.4c-1.1-2.1-4.1-6-6.8-8C2.7.6 1.7.9 1.1 1.2.4 1.6.3 2.7.3 3.3c0 .6.3 5 1.1 5.7.8.8 2.7 1 4.2.8-2.7.5-5.1 1.8-1.9 4.8.6 3.1 3.1 3.8 5.8 1.8 2.7 2 4.9-1.3 6.8-4.8-1.9-1.5-4.3-2.8-6.9-3.1 1.6.2 3.5 0 4.3-.8.8-.7 1.1-5.1 1.1-5.7 0-.6-.1-1.7-.8-2.1-.6-.3-1.6-.6-4.1 1.2-2.7 2-5.7 5.9-6.8 8Z" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M7.5 14.5c1.2 1 2.7 1.5 4.5 1.5s3.3-.5 4.5-1.5M9 11.5h.01M15 11.5h.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.8 9.8A2.2 2.2 0 0 0 4 14c.1 3 3.6 5.5 8 5.5s7.9-2.5 8-5.5a2.2 2.2 0 0 0-.8-4.2c-1.8-1.3-4.3-2.1-7.2-2.1s-5.4.8-7.2 2.1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m13.5 7.8.7-3.1 3 .7M19.4 7.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}