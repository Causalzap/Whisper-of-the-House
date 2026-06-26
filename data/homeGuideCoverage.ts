import {
    getFeatureArticles,
    getFeaturedHomeHubs,
    getFooterFeaturedGuides,
    getHomeSpotlightHub,
    getLatestStories,
    getMainSpotlight,
    getQuickLanes,
    getRailItems,
    getSpotlightThemes,
    type GuideHub,
    type LatestStory,
    type QuickLane,
    type SpotlightArticle,
    type SpotlightRailItem,
    type SpotlightTheme,
  } from "./guideSelectors";
  
  export type {
    GuideHub,
    LatestStory,
    QuickLane,
    SpotlightArticle,
    SpotlightRailItem,
    SpotlightTheme,
  };
  
  export type {
    HomeAccent,
    HomeImageFields,
    HomeImageFit,
  } from "./guides";
  
  export const latestStories = getLatestStories();
  
  export const spotlightHub = getHomeSpotlightHub();
  export const guideHubs = getFeaturedHomeHubs();
  
  export const mainSpotlight = getMainSpotlight();
  export const featureArticles = getFeatureArticles();
  export const railItems = getRailItems();
  
  export const quickLanes = getQuickLanes();
  export const spotlightThemes = getSpotlightThemes();
  
  export const footerFeaturedGuides = getFooterFeaturedGuides();