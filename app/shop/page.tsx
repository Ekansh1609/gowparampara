"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Filter, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/lib/i18n";
import { products } from "@/lib/data";
import { categories } from "@/lib/schema";
import { ProductCard } from "@/components/product-card";
import { Suspense } from "react";

const tags = [
  { id: "eco-friendly", labelEn: "Eco-Friendly", labelHi: "पर्यावरण-अनुकूल" },
  { id: "handmade", labelEn: "Handmade", labelHi: "हस्तनिर्मित" },
  { id: "chemical-free", labelEn: "Chemical Free", labelHi: "रसायन मुक्त" },
  { id: "organic", labelEn: "Organic", labelHi: "जैविक" },
  { id: "premium", labelEn: "Premium", labelHi: "प्रीमियम" },
];

function Shop() {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryFromUrl || "all"
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.nameEn.toLowerCase().includes(query) ||
          p.nameHi.includes(query) ||
          p.descriptionEn.toLowerCase().includes(query) ||
          p.descriptionHi.includes(query)
      );
    }

    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      result = result.filter((p) =>
        selectedTags.some((tag) => p.tags.includes(tag as any))
      );
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "featured":
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedTags, sortBy]);

  const toggleTag = (tagId: string) => {
    setSelectedTags((current) =>
      current.includes(tagId)
        ? current.filter((t) => t !== tagId)
        : [...current, tagId]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedTags([]);
    setSortBy("featured");
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== "all" ||
    selectedTags.length > 0 ||
    sortBy !== "featured";

  const categoryName =
    selectedCategory !== "all"
      ? categories.find((c) => c.id === selectedCategory)?.[
          language === "en" ? "nameEn" : "nameHi"
        ]
      : null;

  return (
    <main className="py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
            {categoryName || t("All Products", "सभी उत्पाद")}
          </h1>
          <p className="text-muted-foreground">
            {t(
              `${filteredProducts.length} products available`,
              `${filteredProducts.length} उत्पाद उपलब्ध`
            )}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-medium mb-3">
                  {t("Categories", "श्रेणियाँ")}
                </h3>
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === "all" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory("all")}
                    data-testid="filter-category-all"
                  >
                    {t("All Products", "सभी उत्पाद")}
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={
                        selectedCategory === category.id ? "secondary" : "ghost"
                      }
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                      data-testid={`filter-category-${category.id}`}
                    >
                      {language === "en" ? category.nameEn : category.nameHi}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">{t("Tags", "टैग")}</h3>
                <div className="space-y-2">
                  {tags.map((tag) => (
                    <label
                      key={tag.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={selectedTags.includes(tag.id)}
                        onCheckedChange={() => toggleTag(tag.id)}
                        data-testid={`filter-tag-${tag.id}`}
                      />
                      <span className="text-sm">
                        {language === "en" ? tag.labelEn : tag.labelHi}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="w-full"
                  data-testid="button-clear-filters"
                >
                  <X className="h-4 w-4 mr-2" />
                  {t("Clear Filters", "फ़िल्टर साफ़ करें")}
                </Button>
              )}
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-wrap gap-4 mb-6 items-center">
              <div className="relative flex-1 min-w-50">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={t("Search products...", "उत्पाद खोजें...")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                  data-testid="input-search-products"
                />
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-45" data-testid="select-sort-by">
                  <SelectValue placeholder={t("Sort by", "क्रमबद्ध करें")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">
                    {t("Featured", "विशेष")}
                  </SelectItem>
                  <SelectItem value="price-low">
                    {t("Price: Low to High", "कीमत: कम से अधिक")}
                  </SelectItem>
                  <SelectItem value="price-high">
                    {t("Price: High to Low", "कीमत: अधिक से कम")}
                  </SelectItem>
                </SelectContent>
              </Select>

              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" data-testid="button-mobile-filters">
                    <Filter className="h-4 w-4 mr-2" />
                    {t("Filters", "फ़िल्टर")}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>{t("Filters", "फ़िल्टर")}</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="font-medium mb-3">
                        {t("Categories", "श्रेणियाँ")}
                      </h3>
                      <div className="space-y-2">
                        <Button
                          variant={
                            selectedCategory === "all" ? "secondary" : "ghost"
                          }
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory("all")}
                        >
                          {t("All Products", "सभी उत्पाद")}
                        </Button>
                        {categories.map((category) => (
                          <Button
                            key={category.id}
                            variant={
                              selectedCategory === category.id
                                ? "secondary"
                                : "ghost"
                            }
                            className="w-full justify-start"
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            {language === "en"
                              ? category.nameEn
                              : category.nameHi}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">{t("Tags", "टैग")}</h3>
                      <div className="space-y-2">
                        {tags.map((tag) => (
                          <label
                            key={tag.id}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <Checkbox
                              checked={selectedTags.includes(tag.id)}
                              onCheckedChange={() => toggleTag(tag.id)}
                            />
                            <span className="text-sm">
                              {language === "en" ? tag.labelEn : tag.labelHi}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {hasActiveFilters && (
                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="w-full"
                      >
                        <X className="h-4 w-4 mr-2" />
                        {t("Clear Filters", "फ़िल्टर साफ़ करें")}
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedTags.map((tagId) => {
                  const tag = tags.find((t) => t.id === tagId);
                  return (
                    <Badge
                      key={tagId}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => toggleTag(tagId)}
                    >
                      {language === "en" ? tag?.labelEn : tag?.labelHi}
                      <X className="h-3 w-3 ml-1" />
                    </Badge>
                  );
                })}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  {t("No products found", "कोई उत्पाद नहीं मिला")}
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  {t("Clear Filters", "फ़िल्टर साफ़ करें")}
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function ShopLoading() {
  return <div>Loading...</div>; // or a proper loading skeleton
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <Shop />
    </Suspense>
  );
}
