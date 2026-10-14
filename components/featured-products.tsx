"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { products } from "@/lib/data"; // Updated import path
import { ProductCard } from "./product-card";

export function FeaturedProducts() {
  const { t } = useLanguage();
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
              {t("Featured Products", "विशेष उत्पाद")}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {t(
                "Handpicked favorites from our collection of sustainable, chemical-free products",
                "हमारे टिकाऊ, रसायन-मुक्त उत्पादों के संग्रह से चुनी हुई पसंदीदा वस्तुएँ"
              )}
            </p>
          </div>
          <Link href="/shop">
            <Button
              variant="outline"
              className="gap-2"
              data-testid="button-view-all-products"
            >
              {t("View All Products", "सभी उत्पाद देखें")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
