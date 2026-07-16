"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type GameDnaCtaProps = {
  gameId: string;
  gameTitle: string;
  gameCover: string;
  className?: string;
};

type GtagFunction = (
  command: "event",
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => void;

export default function GameDnaCta({
  gameId,
  gameTitle,
  gameCover,
  className = "",
}: GameDnaCtaProps) {
  const pathname = usePathname();

  const toolUrl = `/game-dna?game=${encodeURIComponent(gameId)}`;

  const headingId = `game-dna-cta-${gameId}`;

  const handleClick = () => {
    const gtag = (
      window as Window & {
        gtag?: GtagFunction;
      }
    ).gtag;

    gtag?.("event", "game_dna_cta_click", {
      game_id: gameId,
      game_title: gameTitle,
      source_type: "game_hub",
      source_path: pathname,
      destination_path: toolUrl,
    });
  };

  return (
    <aside
      aria-labelledby={headingId}
      className={[
        "not-prose my-10 overflow-hidden rounded-[2rem]",
        "border border-violet-200/80",
        "bg-gradient-to-br from-violet-50 via-white to-fuchsia-50",
        "shadow-[0_18px_50px_-32px_rgba(76,29,149,0.45)]",
        className,
      ].join(" ")}
    >
      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center">
        <div
          className="mx-auto w-full max-w-[220px]"
          aria-hidden="true"
        >
          <div className="grid aspect-square grid-cols-3 gap-1.5 rounded-[1.6rem] border border-violet-200 bg-white p-2 shadow-sm">
            {Array.from({ length: 9 }).map((_, index) => {
              const isMainGame = index === 4;

              if (isMainGame) {
                return (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg bg-slate-200 shadow-sm ring-2 ring-violet-500 ring-offset-1"
                  >
                    <Image
                      src={gameCover}
                      alt=""
                      fill
                      sizes="72px"
                      className="object-cover"
                    />
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200"
                >
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-black text-slate-300">
                    +
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-3 text-center text-xs font-bold text-slate-500">
            Pick nine games that define you
          </p>
        </div>

        <div className="min-w-0 text-center lg:text-left">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">
            Build Your Gaming DNA
          </p>

          <h2
            id={headingId}
            className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
          >
            Is {gameTitle} one of your favorite games?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:mx-0">
            Add it to your 3×3 favorite games grid, discover the
            playstyles that define you, and get personalized game
            recommendations with matching guide hubs.
          </p>

          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <Link
              href={toolUrl}
              onClick={handleClick}
              aria-label={`Add ${gameTitle} to your favorite games grid`}
              className={[
                "inline-flex min-h-12 w-full items-center justify-center",
                "rounded-full bg-violet-700 px-6 py-3",
                "text-sm font-black text-white shadow-sm",
                "transition duration-200",
                "hover:-translate-y-0.5 hover:bg-violet-800 hover:shadow-md",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-violet-500 focus-visible:ring-offset-2",
                "sm:w-auto",
              ].join(" ")}
            >
              Add to My Games Grid
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="ml-2 h-4 w-4"
              >
                <path
                  d="M4 10h12M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <span className="text-xs font-bold text-slate-500">
              Free · No login required
            </span>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500 lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <CheckIcon />
              Create a 3×3 grid
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CheckIcon />
              Discover your playstyle
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CheckIcon />
              Find your next game
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0 text-violet-600"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m6.5 10 2.2 2.2 4.8-4.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}