/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Heart, Shield } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// Ensure these images exist in your public/images folder!
const heroImage = "/images/sacred_cow_india_tem_c1a58c8d.jpg";
// Previous carousel image kept for reference: "/images/indian_rural_women_m_2f1d9acb.jpg"

export function HeroSection() {
  const { t } = useLanguage();

  const badges = [
    { icon: Leaf, labelEn: "100% Natural", labelHi: "100% प्राकृतिक" },
    { icon: Heart, labelEn: "Women Made", labelHi: "महिलाओं द्वारा निर्मित" },
    { icon: Shield, labelEn: "Chemical Free", labelHi: "रसायन मुक्त" },
  ];

  return (
    <section className="relative h-[calc(100svh-4rem)] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gau Parampara - Traditional Indian craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-6 lg:px-8 py-20 text-left">
        <div className="w-full max-w-2xl text-left">
          <div className="flex flex-wrap gap-2 mb-6">
            {badges.map((badge) => (
              <div
                key={badge.labelEn}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5"
              >
                <badge.icon className="h-3.5 w-3.5 text-green-400" />
                <span className="text-xs text-white font-medium">
                  {t(badge.labelEn, badge.labelHi)}
                </span>
              </div>
            ))}
          </div>

          <h1 className="text-left font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            <span className="inline-block whitespace-nowrap">
              {t(
                "Tradition Meets Sustainability:",
                "परंपरा मिलती है स्थिरता से:"
              )}
            </span>
            <br />
            <span className="text-orange-500">
              {t("Handmade by Rural India", "ग्रामीण भारत द्वारा हस्तनिर्मित")}
            </span>
          </h1>

          <p className="text-left text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {t(
              "Empowering women and protecting cows through 100% natural, chemical-free products. From waste to wealth, creating sustainable livelihoods.",
              "100% प्राकृतिक, रसायन-मुक्त उत्पादों के माध्यम से महिलाओं को सशक्त बनाना और गायों की रक्षा करना। कचरे से संपत्ति, स्थायी आजीविका का निर्माण।"
            )}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-orange-500 hover:bg-orange-600 text-white border-none gap-2"
              )}
            >
              {t("Shop Handcrafted Products", "हस्तनिर्मित उत्पाद खरीदें")}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20"
              )}
            >
              {t("Our Story", "हमारी कहानी")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
