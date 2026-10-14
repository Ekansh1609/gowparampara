/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, Heart, Shield } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// Ensure these images exist in your public/images folder!
const heroImages = [
  "/images/indian_rural_women_m_2f1d9acb.jpg",
  "/images/sacred_cow_india_tem_c1a58c8d.jpg",
];

export function HeroSection() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const badges = [
    { icon: Leaf, labelEn: "100% Natural", labelHi: "100% प्राकृतिक" },
    { icon: Heart, labelEn: "Women Made", labelHi: "महिलाओं द्वारा निर्मित" },
    { icon: Shield, labelEn: "Chemical Free", labelHi: "रसायन मुक्त" },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Note: In Next.js we can use the <img> tag for simplicity in migration, 
              or the <Image> component for optimization later. */}
          <img
            src={heroImages[currentImage]}
            alt="Gau Parampara - Traditional Indian craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
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

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {t(
              "Tradition Meets Sustainability:",
              "परंपरा मिलती है स्थिरता से:"
            )}
            <br />
            <span className="text-orange-500">
              {t("Handmade by Rural India", "ग्रामीण भारत द्वारा हस्तनिर्मित")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
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
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            data-testid={`button-hero-slide-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
