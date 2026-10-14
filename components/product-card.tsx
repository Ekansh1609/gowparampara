/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Hand, Sparkles } from "lucide-react";
// import { ShoppingCart } from "lucide-react"; // Uncomment if you enable the Add button later
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/lib/schema"; // Updated import path

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: t("Added to Cart", "कार्ट में जोड़ा गया"),
      description: language === "en" ? product.nameEn : product.nameHi,
    });
  };

  const tagIcons: Record<string, typeof Leaf> = {
    "eco-friendly": Leaf,
    handmade: Hand,
    premium: Sparkles,
  };

  const tagLabels: Record<string, { en: string; hi: string }> = {
    "eco-friendly": { en: "Eco-friendly", hi: "पर्यावरण-अनुकूल" },
    handmade: { en: "Handmade", hi: "हस्तनिर्मित" },
    "chemical-free": { en: "Chemical Free", hi: "रसायन मुक्त" },
    "charcoal-free": { en: "Charcoal Free", hi: "कोयला मुक्त" },
    organic: { en: "Organic", hi: "जैविक" },
    premium: { en: "Premium", hi: "प्रीमियम" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className="overflow-visible group"
        data-testid={`card-product-${product.id}`}
      >
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={
              isHovered && product.hoverImage
                ? product.hoverImage
                : product.image
            }
            alt={language === "en" ? product.nameEn : product.nameHi}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.tags.slice(0, 2).map((tag) => {
              const Icon = tagIcons[tag] || Leaf;
              return (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-green-600/90 text-white text-[10px] gap-1"
                >
                  <Icon className="h-3 w-3" />
                  {language === "en" ? tagLabels[tag]?.en : tagLabels[tag]?.hi}
                </Badge>
              );
            })}
          </div>

          {product.originalPrice && product.originalPrice > product.price && (
            <Badge className="absolute top-2 right-2 bg-orange-500 text-white">
              {Math.round((1 - product.price / product.originalPrice) * 100)}%
              OFF
            </Badge>
          )}
        </div>

        <CardContent className="p-4">
          <h3 className="font-serif font-semibold text-lg mb-1 line-clamp-1">
            {language === "en" ? product.nameEn : product.nameHi}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {language === "en" ? product.descriptionEn : product.descriptionHi}
          </p>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-lg text-primary">
                ₹{product.price}
              </span>
              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
            </div>
            {/* Add to cart button commented out in original, keeping it that way */}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
