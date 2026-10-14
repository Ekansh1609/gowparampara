import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { CategoryGrid } from "@/components/category-grid";
import { FeaturedProducts } from "@/components/featured-products";
import { WasteToWealth } from "@/components/waste-to-wealth";
import { AboutSection } from "@/components/about-section";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Gowparampara | Eco-friendly & Cow Protection Products",
  description:
    "Discover handcrafted eco-friendly products that support cow protection and women empowerment. Shop incense, idols, and organic gardening essentials.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <WasteToWealth />
      <AboutSection />
      <Testimonials />
    </main>
  );
}
