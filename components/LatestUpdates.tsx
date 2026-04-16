// components/LatestUpdates.tsx
import React from "react";
import Link from "next/link";
import { latestUpdates } from "@/data/latest-updates";

export default function LatestUpdates() {
  return (
    <section className="relative z-10 -mt-8 px-4 pt-16 md:-mt-10">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-lg md:p-5">
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-bold text-gray-900">Latest Updates</h2>
            <span className="text-xs text-gray-400">New guides & articles</span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {latestUpdates.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm ${item.hoverBorderClass}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold ${item.tagClass}`}>
                    {item.game}
                  </span>
                  <h3
                    className={`text-sm font-semibold text-gray-900 ${item.hoverTitleClass}`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-gray-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}