type IgdbAttributionVariant =
  | "compact"
  | "about";

type IgdbAttributionTone =
  | "light"
  | "dark";

type IgdbAttributionProps = {
  /**
   * compact:
   *   Use below Game DNA, game pickers, or recommendation tools.
   *
   * about:
   *   Use on the About page inside a broader credits section.
   */
  variant?: IgdbAttributionVariant;

  /**
   * light:
   *   For white or light-gray sections.
   *
   * dark:
   *   For dark site sections.
   */
  tone?: IgdbAttributionTone;

  className?: string;
};

const IGDB_URL =
  "https://www.igdb.com/";

export default function IgdbAttribution({
  variant = "compact",
  tone = "light",
  className = "",
}: IgdbAttributionProps) {
  if (variant === "about") {
    return (
      <AboutAttribution
        tone={tone}
        className={className}
      />
    );
  }

  return (
    <CompactAttribution
      tone={tone}
      className={className}
    />
  );
}

function CompactAttribution({
  tone,
  className,
}: {
  tone: IgdbAttributionTone;
  className: string;
}) {
  const styles =
    getToneStyles(tone);

  return (
    <aside
      aria-label="Game data source"
      className={[
        "rounded-2xl border px-4 py-3",
        styles.compactSurface,
        className,
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <SourceIcon
          className={
            styles.icon
          }
        />

        <p
          className={[
            "text-xs leading-5",
            styles.secondaryText,
          ].join(" ")}
        >
          Game metadata and cover
          images are supplied through
          the{" "}
          <IgdbLink
            className={
              styles.link
            }
          >
            IGDB API
          </IgdbLink>
          .
        </p>
      </div>
    </aside>
  );
}

function AboutAttribution({
  tone,
  className,
}: {
  tone: IgdbAttributionTone;
  className: string;
}) {
  const styles =
    getToneStyles(tone);

  return (
    <section
      aria-labelledby="igdb-attribution-title"
      className={[
        "rounded-[1.75rem] border p-5",
        "sm:p-6",
        styles.aboutSurface,
        className,
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        <span
          className={[
            "flex h-11 w-11",
            "shrink-0 items-center",
            "justify-center rounded-2xl",
            styles.iconSurface,
          ].join(" ")}
        >
          <SourceIcon
            className={
              styles.icon
            }
          />
        </span>

        <div className="min-w-0">
          <p
            className={[
              "text-[11px] font-black",
              "uppercase tracking-[0.18em]",
              styles.eyebrow,
            ].join(" ")}
          >
            Data Sources & Credits
          </p>

          <h2
            id="igdb-attribution-title"
            className={[
              "mt-2 text-xl",
              "font-black tracking-tight",
              styles.primaryText,
            ].join(" ")}
          >
            Game data used in our
            discovery tools
          </h2>

          <p
            className={[
              "mt-3 text-sm leading-7",
              styles.secondaryText,
            ].join(" ")}
          >
            Game metadata and cover
            images used in our discovery
            tools are supplied through
            the{" "}
            <IgdbLink
              className={
                styles.link
              }
            >
              IGDB API
            </IgdbLink>
            .
          </p>

          <p
            className={[
              "mt-3 text-sm leading-7",
              styles.secondaryText,
            ].join(" ")}
          >
            Gaming DNA trait scores,
            profile names, recommendation
            logic, guide copy, and
            editorial judgments are
            created and maintained
            independently by Whisper of
            the House.
          </p>

          <p
            className={[
              "mt-3 text-xs leading-6",
              styles.mutedText,
            ].join(" ")}
          >
            IGDB does not sponsor,
            endorse, or review our
            recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}

function IgdbLink({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return (
    <a
      href={IGDB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "font-black underline",
        "decoration-current/30",
        "underline-offset-2",
        "transition",
        "hover:decoration-current",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-current",
        "focus-visible:ring-offset-2",
        className,
      ].join(" ")}
    >
      {children}
      <span className="sr-only">
        {" "}
        (opens in a new tab)
      </span>
    </a>
  );
}

function SourceIcon({
  className,
}: {
  className: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={[
        "h-5 w-5 shrink-0",
        className,
      ].join(" ")}
    >
      <path
        d="M5 6.5C5 5.12 8.13 4 12 4s7 1.12 7 2.5S15.87 9 12 9 5 7.88 5 6.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M5 6.5v5C5 12.88 8.13 14 12 14s7-1.12 7-2.5v-5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M5 11.5v5C5 17.88 8.13 19 12 19s7-1.12 7-2.5v-5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function getToneStyles(
  tone: IgdbAttributionTone,
) {
  if (tone === "dark") {
    return {
      compactSurface:
        "border-white/10 bg-white/[0.05]",

      aboutSurface:
        "border-white/10 bg-white/[0.05]",

      iconSurface:
        "bg-white/[0.07]",

      primaryText:
        "text-white",

      secondaryText:
        "text-slate-300",

      mutedText:
        "text-slate-400",

      eyebrow:
        "text-sky-300",

      icon:
        "text-sky-300",

      link:
        "text-sky-200 focus-visible:ring-offset-slate-950",
    };
  }

  return {
    compactSurface:
      "border-slate-200 bg-slate-50",

    aboutSurface:
      "border-slate-200 bg-white shadow-sm",

    iconSurface:
      "bg-sky-50",

    primaryText:
      "text-slate-950",

    secondaryText:
      "text-slate-600",

    mutedText:
      "text-slate-500",

    eyebrow:
      "text-sky-700",

    icon:
      "text-sky-700",

    link:
      "text-sky-700 focus-visible:ring-offset-white",
  };
}