"use client";

import { useEffect, useRef } from "react";

const AD_CLIENT = "ca-pub-9769427406770321";

const AD_SLOTS = {
  article_top: "5573936082",
  article_after_first_h2: "3988339321",
  article_middle: "9029965361",
  article_bottom: "7785166459",
} as const;

type AdPlacement = keyof typeof AD_SLOTS;

type AdUnitProps = {
  placement: AdPlacement;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdUnit({ placement, className = "" }: AdUnitProps) {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    try {
      if (!adRef.current) return;

      const alreadyLoaded =
        adRef.current.getAttribute("data-adsbygoogle-status") === "done";

      if (!alreadyLoaded) {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        className={`my-10 flex min-h-[120px] items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-400 ${className}`}
      >
        Ad placeholder: {placement}
      </div>
    );
  }

  return (
    <div className={`my-10 overflow-hidden ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOTS[placement]}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}