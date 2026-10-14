/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Heart, Leaf, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

// Ensure these images exist in public/images/
const aboutImages = {
  women: "/images/women.jpg",
  flowers: "/images/flowers.jpg",
  cow: "/images/cow.jpg",
};

const stats = [
  {
    value: "500+",
    labelEn: "Women Empowered",
    labelHi: "सशक्त महिलाएं",
    icon: Users,
  },
  {
    value: "50+",
    labelEn: "Villages Covered",
    labelHi: "गाँव शामिल",
    icon: Leaf,
  },
  {
    value: "10000+",
    labelEn: "Products Sold",
    labelHi: "उत्पाद बेचे गए",
    icon: Award,
  },
  {
    value: "100+",
    labelEn: "Cows Protected",
    labelHi: "गायें संरक्षित",
    icon: Heart,
  },
];

export function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-4/5 rounded-lg overflow-hidden">
                  <img
                    src={aboutImages.women}
                    alt="Rural women artisans"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={aboutImages.flowers}
                    alt="Temple flowers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-3/4 rounded-lg overflow-hidden">
                  <img
                    src={aboutImages.cow}
                    alt="Sacred cow"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
              <p className="font-serif text-2xl font-bold">Est. 2018</p>
              <p className="text-sm opacity-90">
                {t("Serving with love", "प्यार से सेवा")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              {t(
                "Rooted in Tradition, Growing with Purpose",
                "परंपरा में निहित, उद्देश्य के साथ बढ़ते हुए"
              )}
            </h2>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              {t(
                "Gowparampara is an initiative of the Azad Hind Fauj Trust, inspired by the vision of Swami Vivekananda to empower rural India. We believe in the sacred bond between humans, nature, and animals.",
                "गौ परंपरा आज़ाद हिंद फौज ट्रस्ट की एक पहल है, जो ग्रामीण भारत को सशक्त बनाने के स्वामी विवेकानंद के दृष्टिकोण से प्रेरित है। हम मनुष्यों, प्रकृति और जानवरों के बीच पवित्र बंधन में विश्वास करते हैं।"
              )}
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t(
                "Through our 'Gramin Mahila Swarojgar' (Rural Women Self-Employment) initiative, we train and employ rural women to create beautiful, sustainable products. Every purchase you make directly supports cow protection (Gau Sanrakshan) and women empowerment.",
                "'ग्रामीण महिला स्वरोजगार' पहल के माध्यम से, हम ग्रामीण महिलाओं को सुंदर, टिकाऊ उत्पाद बनाने के लिए प्रशिक्षित और नियोजित करते हैं। आपकी हर खरीद सीधे गौ संरक्षण और महिला सशक्तिकरण का समर्थन करती है।"
              )}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.labelEn}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg"
                >
                  <div className="p-2 rounded-md bg-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" ? stat.labelEn : stat.labelHi}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button className="gap-2" data-testid="button-read-our-story">
                {t("Read Our Full Story", "हमारी पूरी कहानी पढ़ें")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
