import type {
  AnalyticsParameters,
} from "@/lib/game-recommender/types";

type GtagFunction = (
  command: "event",
  eventName: string,
  parameters?: AnalyticsParameters,
) => void;

export type RecommenderEventName =
  | "quick_recommender_picker_opened"
  | "quick_recommender_game_added"
  | "quick_recommender_game_removed"
  | "quick_recommender_generated"
  | "quick_recommender_more_results_opened"
  | "quick_recommender_surprise_me"
  | "quick_recommender_guide_click"
  | "quick_recommender_game_dna_click"
  | "quick_recommender_reset";

export function trackRecommenderEvent(
  eventName: RecommenderEventName,
  parameters?: AnalyticsParameters,
) {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = (
    window as Window & {
      gtag?: GtagFunction;
    }
  ).gtag;

  gtag?.("event", eventName, parameters);
}
