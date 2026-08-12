type AdPlacement =
  | "article_top"
  | "article_after_first_h2"
  | "article_middle"
  | "article_bottom";

type AdUnitProps = {
  placement: AdPlacement;
  className?: string;
};

/**
 * Legacy ad marker.
 *
 * AdSense rendering has been disabled after migrating to Mediavine.
 *
 * Existing <AdUnit /> calls are intentionally preserved across MDX
 * and page.tsx files so older content does not need to be edited.
 *
 * This component renders nothing and produces no HTML output.
 * Mediavine handles ad placement separately through its global script.
 */
export default function AdUnit(_props: AdUnitProps) {
  return null;
}