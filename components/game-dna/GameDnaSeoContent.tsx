import {
    GAME_DNA_TRAIT_IDS,
    GAME_DNA_TRAIT_META,
    type GameDnaTraitId,
  } from "@/lib/game-dna/recommendations";
  
  type ExampleProfile = {
    title: string;
    description: string;
    strongestTraits:
      readonly GameDnaTraitId[];
    exampleGames:
      readonly string[];
  };
  
  const EXAMPLE_PROFILES:
    readonly ExampleProfile[] = [
      {
        title:
          "Optimization Architect",
  
        description:
          "You like games that keep opening up: new systems to understand, better ways to build, and visible progress that rewards what you have learned.",
  
        strongestTraits: [
          "systems",
          "progression",
          "strategy",
        ],
  
        exampleGames: [
          "Factorio",
          "Slay the Spire",
          "Core Keeper",
        ],
      },
  
      {
        title:
          "Story-Seeking Explorer",
  
        description:
          "You explore because you want to find something meaningful—new characters, hidden stories, memorable places, and choices worth following.",
  
        strongestTraits: [
          "exploration",
          "story",
          "progression",
        ],
  
        exampleGames: [
          "The Witcher 3",
          "Cyberpunk 2077",
          "Baldur's Gate III",
        ],
      },
    ];
  
  export default function GameDnaSeoContent() {
    return (
      <section
        aria-labelledby="about-game-dna-title"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <header className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-sky-700">
              About Game DNA
            </p>
  
            <h2
              id="about-game-dna-title"
              className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              What does your favorite-games
              grid say about you?
            </h2>
  
            <p className="mt-5 text-base leading-8 text-slate-600">
              Most game quizzes ask you to
              describe yourself. Game DNA
              starts somewhere easier: nine
              games you already know and
              enjoy. It looks at what those
              games have in common, then
              turns that mix into a clearer
              picture of your playstyle.
            </p>
  
            <p className="mt-4 text-base leading-8 text-slate-600">
              The result is not a skill
              rating or a promise that you
              will love every recommended
              game. It is a snapshot of what
              tends to hold your attention—
              whether that is exploration,
              steady progression, layered
              systems, difficult combat,
              careful planning, or playing
              with other people.
            </p>
          </header>
  
          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Your 10 Traits"
                title="The parts of games you keep coming back for"
              />
  
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                We look at the same ten
                parts of play in every game,
                using a 0–5 scale. A higher
                score means that trait plays
                a bigger role. Your nine
                picks are combined into one
                result, so the numbers show
                how strongly each pattern
                appears—not percentages that
                need to add up to 100.
              </p>
  
              <div className="mt-6 flex flex-wrap gap-2">
                {GAME_DNA_TRAIT_IDS.map(
                  (traitId) => (
                    <TraitChip
                      key={traitId}
                      traitId={traitId}
                    />
                  ),
                )}
              </div>
            </div>
  
            <aside className="rounded-[1.75rem] border border-sky-100 bg-sky-50/70 p-5 sm:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-sky-700">
                In plain English
              </p>
  
              <h3 className="mt-2 text-xl font-black text-slate-950">
                A high score means “this
                keeps showing up”
              </h3>
  
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A high Systems score means
                you repeatedly picked games
                built around mechanics that
                connect. A high Progression
                score means upgrades and
                long-term growth matter to
                you. A lower score does not
                mean you dislike that trait;
                it simply played a smaller
                role across this particular
                grid.
              </p>
            </aside>
          </div>
  
          <div className="mt-14 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <SectionHeading
              eyebrow="How It Works"
              title="From nine games to one playstyle profile"
            />
  
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <ProcessStep
                number="01"
                title="Pick games you really know"
                description="Choose titles you have spent enough time with to know why they work for you."
              />
  
              <ProcessStep
                number="02"
                title="Find the shared pattern"
                description="We look for the gameplay traits that appear again and again across your nine picks."
              />
  
              <ProcessStep
                number="03"
                title="Compare what comes next"
                description="We look for games built around a similar mix of exploration, progression, systems, combat, and other traits."
              />
            </div>
  
            <p className="mt-6 text-sm leading-7 text-slate-600">
              When we already have a useful
              guide for one of those games,
              you will see a direct link
              beside the recommendation.
              Games without guides can still
              appear when they fit your
              playstyle.
            </p>
          </div>
  
          <div className="mt-14">
            <SectionHeading
              eyebrow="Example Results"
              title="Two examples of what your result might say"
            />
  
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              The profile title is a quick
              summary, not a box. Two players
              can receive the same title and
              still care about different
              things—or end up with very
              different game recommendations.
            </p>
  
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {EXAMPLE_PROFILES.map(
                (profile) => (
                  <ExampleProfileCard
                    key={profile.title}
                    profile={profile}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function SectionHeading({
    eyebrow,
    title,
  }: {
    eyebrow: string;
    title: string;
  }) {
    return (
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-violet-700">
          {eyebrow}
        </p>
  
        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          {title}
        </h2>
      </div>
    );
  }
  
  function TraitChip({
    traitId,
  }: {
    traitId: GameDnaTraitId;
  }) {
    const trait =
      GAME_DNA_TRAIT_META[traitId];
  
    return (
      <span
        title={trait.description}
        className="inline-flex rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-black text-violet-700"
      >
        {trait.label}
      </span>
    );
  }
  
  function ProcessStep({
    number,
    title,
    description,
  }: {
    number: string;
    title: string;
    description: string;
  }) {
    return (
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <span className="text-xs font-black tracking-[0.16em] text-violet-600">
          {number}
        </span>
  
        <h3 className="mt-3 text-base font-black text-slate-950">
          {title}
        </h3>
  
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {description}
        </p>
      </article>
    );
  }
  
  function ExampleProfileCard({
    profile,
  }: {
    profile: ExampleProfile;
  }) {
    return (
      <article className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-xl font-black text-slate-950">
          {profile.title}
        </h3>
  
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {profile.description}
        </p>
  
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.strongestTraits.map(
            (traitId) => (
              <span
                key={traitId}
                className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black text-violet-700"
              >
                {
                  GAME_DNA_TRAIT_META[
                    traitId
                  ].label
                }
              </span>
            ),
          )}
        </div>
  
        <p className="mt-5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
          Example games
        </p>
  
        <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
          {profile.exampleGames.join(
            " · ",
          )}
        </p>
      </article>
    );
  }