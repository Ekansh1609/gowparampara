/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Home, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { categories } from "@/lib/schema"; // Ensure this path is correct

// Mapping images directly here since we don't have the products.ts file anymore
const categoryImages = {
  "aromatic-spiritual": "/images/Aromatic-Spiritual.jpg",
  "home-decor-idols": "/images/Home-Decor-Idols.jpg",
  "havan-puja": "/images/Havan-Puja-Essentials.jpg",
};

const categoryIcons = {
  "aromatic-spiritual": Flame,
  "home-decor-idols": Home,
  "havan-puja": Sparkles,
};

const categoryDescriptions = {
  "aromatic-spiritual": {
    en: "Herbal incense sticks, dhoop cups, and sambrani cones made with natural ingredients",
    hi: "प्राकृतिक सामग्री से बनी हर्बल अगरबत्ती, धूप कप और सांभरानी कोन",
  },
  "home-decor-idols": {
    en: "Handcrafted idols of Ganesh, Buddha, and spiritual wall hangings",
    hi: "गणेश, बुद्ध की हस्तनिर्मित मूर्तियाँ और आध्यात्मिक वॉल हैंगिंग्स",
  },
  "havan-puja": {
    en: "Traditional cow dung cakes, havan samidha, and diyas for rituals",
    hi: "पारंपरिक गोबर के उपले, हवन समिधा और अनुष्ठानों के लिए दीये",
  },
};

export function CategoryGrid() {
  const { language, t } = useLanguage();

  return (
    <section className="pt-20 pb-10 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {t("Shop by Category", "श्रेणी के अनुसार खरीदें")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Explore our range of handmade, eco-friendly products crafted by rural women artisans",
              "ग्रामीण महिला कारीगरों द्वारा निर्मित हस्तनिर्मित, पर्यावरण-अनुकूल उत्पादों की हमारी श्रृंखला देखें"
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon =
              categoryIcons[category.id as keyof typeof categoryIcons];
            const image = categoryImages[category.id];
            const desc =
              categoryDescriptions[
                category.id as keyof typeof categoryDescriptions
              ];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/shop?category=${category.id}`}>
                  <Card
                    className="group overflow-visible cursor-pointer bg-muted hover-elevate"
                    data-testid={`card-category-${category.id}`}
                  >
                    <div className="relative aspect-[3/2] overflow-hidden rounded-t-lg bg-brand-card">
                      <img
                        src={image}
                        alt={
                          language === "en" ? category.nameEn : category.nameHi
                        }
                        className="relative h-full w-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2 text-foreground">
                        <Icon className="h-5 w-5" />
                        <h3 className="font-serif font-semibold text-lg">
                          {language === "en"
                            ? category.nameEn
                            : category.nameHi}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {language === "en" ? desc.en : desc.hi}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 p-0 h-auto text-primary"
                      >
                        {t("Shop Now", "अभी खरीदें")}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
