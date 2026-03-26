"use client";

import { useMemo, useState } from "react";

type SkuItem = {
  movie: string;
  genre: string;
  profit: "Low" | "Medium" | "High" | "Very High";
  sku: string;
  note?: string;
};

const SKU_ITEMS: SkuItem[] = [
    // Action (2)
    {
      movie: "Apocalyptic Sheriff",
      genre: "Action",
      profit: "High",
      sku: "1352823",
      note: "Strong early-game replacement target.",
    },
    {
      movie: "Tomezilla",
      genre: "Action",
      profit: "High",
      sku: "1141474",
      note: "Reliable action shelf filler.",
    },
  
    // Horror (2)
    {
      movie: "Alien Brain Implants",
      genre: "Horror",
      profit: "High",
      sku: "5663962",
      note: "Consistent horror demand example.",
    },
    {
      movie: "The Bloodsucking Lord",
      genre: "Horror",
      profit: "High",
      sku: "5662042",
      note: "Good targeted replacement for horror shelves.",
    },
  
    // Sci-Fi (2)
    {
      movie: "A Scientist and His Kennel",
      genre: "Sci-Fi",
      profit: "High",
      sku: "6342712",
      note: "Safe science-fiction restock example.",
    },
    {
      movie: "Breakfast Spaceflight",
      genre: "Sci-Fi",
      profit: "High",
      sku: "6422372",
      note: "Good mid-game sci-fi performer.",
    },
  
    // Drama (2)
    {
      movie: "Midnight Heart Drive",
      genre: "Drama",
      profit: "Medium",
      sku: "4443933",
      note: "Useful medium-profit reference example.",
    },
    {
      movie: "The Lightkeeper's Trophy",
      genre: "Drama",
      profit: "Medium",
      sku: "4480203",
      note: "Stable but not priority replacement.",
    },
  
    // Romance (2)
    {
      movie: "Our Lovely Cash",
      genre: "Romance",
      profit: "Medium",
      sku: "10284414",
      note: "Example of steady romance demand.",
    },
    {
      movie: "The Sailor's Eternal Love",
      genre: "Romance",
      profit: "Medium",
      sku: "10232843",
      note: "Fills slower shelves reliably.",
    },
  
    // Adult (2)
    {
      movie: "Double Minotaur Action",
      genre: "Adult",
      profit: "Very High",
      sku: "69642474",
      note: "Very high profit but situational.",
    },
    {
      movie: "The Saucy Prophet Delivery",
      genre: "Adult",
      profit: "Very High",
      sku: "69122055",
      note: "Late-game high-profit example.",
    },
  ];

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export default function SkuLookupTool() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const activeQuery = normalize(submittedQuery);

  const results = useMemo(() => {
    if (!activeQuery) return [];

    return SKU_ITEMS.filter((item) => {
      const movie = item.movie.toLowerCase();
      const genre = item.genre.toLowerCase();
      const sku = item.sku.toLowerCase();
      const profit = item.profit.toLowerCase();

      return (
        movie.includes(activeQuery) ||
        genre.includes(activeQuery) ||
        sku.includes(activeQuery) ||
        profit.includes(activeQuery)
      );
    });
  }, [activeQuery]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedQuery(query);
  };

  const quickPicks = SKU_ITEMS.slice(0, 5);

  return (
    <section className="my-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Mini SKU Lookup Tool
        </h2>
        <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          Search by movie title, genre, profit level, or SKU. This is a small
          reference tool for common examples and replacement targets.
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="sku-lookup" className="sr-only">
          Search movie title or SKU
        </label>
        <input
          id="sku-lookup"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try: Tomezilla, Horror, 5663962, High"
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        />
        <button
          type="submit"
          className="rounded-xl border border-zinc-900 bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
        >
          Search
        </button>
      </form>

      {!activeQuery ? (
        <div className="mt-5">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Quick examples
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {quickPicks.map((item) => (
              <div
                key={item.sku}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.movie}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {item.genre} · {item.profit} profit
                    </p>
                  </div>
                  <code className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
                    {item.sku}
                  </code>
                </div>
                {item.note ? (
                  <p className="mt-3 text-xs leading-6 text-zinc-600 dark:text-zinc-300">
                    {item.note}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Results for:{" "}
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                {submittedQuery}
              </span>
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {results.length} match{results.length === 1 ? "" : "es"}
            </p>
          </div>

          {results.length === 0 ? (
            <div className="rounded-xl border border-dashed border-zinc-300 p-4 dark:border-zinc-700">
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                No matches found in this small reference set.
              </p>
              <p className="mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">
                Try a broader keyword like{" "}
                <code className="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">
                  Horror
                </code>{" "}
                or{" "}
                <code className="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">
                  High
                </code>
                , or search a SKU directly.
              </p>
            </div>
          ) : (
            <div className="grid gap-3">
              {results.map((item) => (
                <div
                  key={item.sku}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.movie}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                        {item.genre} · {item.profit} profit
                      </p>
                      {item.note ? (
                        <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                          {item.note}
                        </p>
                      ) : null}
                    </div>

                    <div className="shrink-0">
                      <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-950">
                        <p className="text-[11px] uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          SKU
                        </p>
                        <code className="mt-1 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          {item.sku}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}