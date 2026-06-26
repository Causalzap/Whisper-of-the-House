import HeaderClient from "./HeaderClient";
import { footerFeaturedGuides } from "@/data/homeGuideCoverage";

export default function Header() {
  return <HeaderClient featuredGuides={footerFeaturedGuides} />;
}