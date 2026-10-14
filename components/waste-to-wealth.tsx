"use client";

import { motion } from "framer-motion";
import {
  Flower,
  Users,
  Factory,
  Package,
  ArrowRight,
  Leaf,
  Heart,
  Sparkles,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";

const processSteps = [
  {
    icon: Flower,
    titleEn: "Temple Flowers Collection",
    titleHi: "मंदिर के फूल संग्रह",
    descEn:
      "Collecting waste flowers from local temples that would otherwise be discarded",
    descHi: "स्थानीय मंदिरों से अपशिष्ट फूल एकत्र करना जो अन्यथा फेंक दिए जाते",
  },
  {
    icon: Users,
    titleEn: "Women Self-Help Groups",
    titleHi: "महिला स्वयं सहायता समूह",
    descEn: "Rural women are trained to process and transform waste materials",
    descHi:
      "ग्रामीण महिलाओं को अपशिष्ट सामग्री को संसाधित करने के लिए प्रशिक्षित किया जाता है",
  },
  {
    icon: Factory,
    titleEn: "Eco-Processing",
    titleHi: "पर्यावरण-अनुकूल प्रसंस्करण",
    descEn:
      "Chemical-free production using traditional methods and natural ingredients",
    descHi:
      "पारंपरिक तरीकों और प्राकृतिक सामग्री का उपयोग करके रसायन-मुक्त उत्पादन",
  },
  {
    icon: Package,
    titleEn: "Sustainable Products",
    titleHi: "टिकाऊ उत्पाद",
    descEn:
      "Beautiful handmade products ready to bring positivity to your home",
    descHi:
      "आपके घर में सकारात्मकता लाने के लिए तैयार सुंदर हस्तनिर्मित उत्पाद",
  },
];

const badges = [
  { icon: Leaf, labelEn: "Handmade", labelHi: "हस्तनिर्मित" },
  { icon: Shield, labelEn: "Chemical Free", labelHi: "रसायन मुक्त" },
  { icon: Heart, labelEn: "Made with Love", labelHi: "प्यार से बनाया" },
  { icon: Sparkles, labelEn: "Charcoal Free", labelHi: "कोयला मुक्त" },
];

export function WasteToWealth() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-green-500 hover:bg-green-600 text-white border-none">
            {t("Our Process", "हमारी प्रक्रिया")}
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("From Waste to Wealth", "कचरे से संपत्ति")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Transforming temple waste and cow dung into beautiful, sustainable products while empowering rural women",
              "ग्रामीण महिलाओं को सशक्त बनाते हुए मंदिर के कचरे और गोबर को सुंदर, टिकाऊ उत्पादों में बदलना"
            )}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-xl mb-2">
                  {language === "en" ? step.titleEn : step.titleHi}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "en" ? step.descEn : step.descHi}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {badges.map((badge) => (
            <div
              key={badge.labelEn}
              className="flex items-center gap-2 bg-card border rounded-full px-5 py-2.5"
            >
              <badge.icon className="h-5 w-5 text-green-500" />
              <span className="font-medium">
                {language === "en" ? badge.labelEn : badge.labelHi}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
