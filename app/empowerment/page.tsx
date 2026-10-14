/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  GraduationCap,
  Banknote,
  Home,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/i18n";

const aboutImages = {
  women: "/images/women.jpg",
};

export default function Empowerment() {
  const { t, language } = useLanguage();

  const initiatives = [
    {
      icon: GraduationCap,
      titleEn: "Skill Training",
      titleHi: "कौशल प्रशिक्षण",
      descEn:
        "Free training programs in incense making, organic composting, and eco-product crafting",
      descHi:
        "अगरबत्ती बनाने, जैविक खाद बनाने और पर्यावरण-अनुकूल उत्पाद शिल्प में मुफ्त प्रशिक्षण कार्यक्रम",
    },
    {
      icon: Banknote,
      titleEn: "Fair Wages",
      titleHi: "उचित मजदूरी",
      descEn:
        "We ensure fair compensation for every product, with transparent pricing and timely payments",
      descHi:
        "हम हर उत्पाद के लिए उचित मुआवजे की गारंटी देते हैं, पारदर्शी मूल्य निर्धारण और समय पर भुगतान के साथ",
    },
    {
      icon: Home,
      titleEn: "Work from Home",
      titleHi: "घर से काम",
      descEn:
        "Flexible work arrangements allowing women to earn while managing household responsibilities",
      descHi:
        "लचीली कार्य व्यवस्थाएं जो महिलाओं को घरेलू जिम्मेदारियों का प्रबंधन करते हुए कमाने की अनुमति देती हैं",
    },
    {
      icon: Heart,
      titleEn: "Community Support",
      titleHi: "सामुदायिक सहायता",
      descEn:
        "Building supportive self-help groups that provide social and emotional support",
      descHi:
        "सहायक स्वयं सहायता समूहों का निर्माण जो सामाजिक और भावनात्मक समर्थन प्रदान करते हैं",
    },
  ];

  const impactStats = [
    {
      labelEn: "Women Trained",
      labelHi: "प्रशिक्षित महिलाएं",
      value: 500,
      target: 1000,
    },
    {
      labelEn: "Villages Reached",
      labelHi: "गांव पहुंचे",
      value: 50,
      target: 100,
    },
    {
      labelEn: "Products Created",
      labelHi: "उत्पाद बनाए",
      value: 10000,
      target: 25000,
    },
    {
      labelEn: "Families Supported",
      labelHi: "परिवारों का समर्थन",
      value: 400,
      target: 800,
    },
  ];

  const stories = [
    {
      nameEn: "Sunita Devi",
      nameHi: "सुनीता देवी",
      villageEn: "Ramapur Village",
      villageHi: "रामपुर गांव",
      quoteEn:
        "Before joining Gau Parampara, I had no source of income. Now I earn ₹8,000 per month making incense sticks from home while taking care of my children.",
      quoteHi:
        "गौ परंपरा से जुड़ने से पहले मेरे पास आय का कोई स्रोत नहीं था। अब मैं अपने बच्चों की देखभाल करते हुए घर से अगरबत्ती बनाकर ₹8,000 प्रति माह कमाती हूं।",
    },
    {
      nameEn: "Kamla Bai",
      nameHi: "कमला बाई",
      villageEn: "Mohammadpur Village",
      villageHi: "मोहम्मदपुर गांव",
      quoteEn:
        "The training I received here changed my life. I can now support my family and even send my daughter to a good school. I feel proud of what I create.",
      quoteHi:
        "यहां मिले प्रशिक्षण ने मेरा जीवन बदल दिया। अब मैं अपने परिवार का समर्थन कर सकती हूं और अपनी बेटी को अच्छे स्कूल भी भेज सकती हूं। मुझे जो बनाती हूं उस पर गर्व है।",
    },
    {
      nameEn: "Geeta Sharma",
      nameHi: "गीता शर्मा",
      villageEn: "Nighasan Village",
      villageHi: "निघासन गांव",
      quoteEn:
        "Working with other women in our self-help group has given me confidence. We support each other and grow together. My products are now sold across India!",
      quoteHi:
        "अपने स्वयं सहायता समूह में अन्य महिलाओं के साथ काम करने से मुझे आत्मविश्वास मिला है। हम एक-दूसरे का समर्थन करते हैं और साथ में बढ़ते हैं। मेरे उत्पाद अब पूरे भारत में बिकते हैं!",
    },
  ];

  return (
    <main className="py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {t("Women Empowerment", "महिला सशक्तिकरण")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Gramin Mahila Swarojgar - Creating sustainable livelihoods for rural women through skill development and fair trade",
              "ग्रामीण महिला स्वरोजगार - कौशल विकास और निष्पक्ष व्यापार के माध्यम से ग्रामीण महिलाओं के लिए स्थायी आजीविका का निर्माण"
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src={aboutImages.women}
                alt="Women self-help group"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold mb-6">
              {t("Gramin Mahila Swarojgar", "ग्रामीण महिला स्वरोजगार")}
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {t(
                "Our flagship initiative empowers rural women by providing them with skills, resources, and market access to create sustainable incomes while staying in their villages.",
                "हमारी प्रमुख पहल ग्रामीण महिलाओं को उनके गांवों में रहते हुए स्थायी आय बनाने के लिए कौशल, संसाधन और बाजार पहुंच प्रदान करके सशक्त बनाती है।"
              )}
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t(
                "We work with women from marginalized communities, providing them not just employment but a sense of purpose and dignity. Every product you buy directly supports these incredible women.",
                "हम हाशिए के समुदायों की महिलाओं के साथ काम करते हैं, उन्हें न केवल रोजगार बल्कि उद्देश्य और सम्मान की भावना प्रदान करते हैं। आपका हर उत्पाद सीधे इन अद्भुत महिलाओं का समर्थन करता है।"
              )}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {impactStats.map((stat) => (
                <div key={stat.labelEn} className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-2xl font-bold text-primary">
                      {stat.value.toLocaleString()}+
                    </span>
                    <span className="text-xs text-muted-foreground">
                      / {stat.target.toLocaleString()}
                    </span>
                  </div>
                  <Progress
                    value={(stat.value / stat.target) * 100}
                    className="h-2 mb-2"
                  />
                  <p className="text-sm text-muted-foreground">
                    {language === "en" ? stat.labelEn : stat.labelHi}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t("Our Initiatives", "हमारी पहल")}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-saffron/10 flex items-center justify-center mx-auto mb-4">
                      <initiative.icon className="h-7 w-7 text-saffron" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-2">
                      {language === "en"
                        ? initiative.titleEn
                        : initiative.titleHi}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "en"
                        ? initiative.descEn
                        : initiative.descHi}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold text-center mb-4"
          >
            {t("Stories of Change", "बदलाव की कहानियां")}
          </motion.h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {t(
              "Meet the incredible women behind our products",
              "हमारे उत्पादों के पीछे की अविश्वसनीय महिलाओं से मिलें"
            )}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={story.nameEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 font-serif text-2xl font-bold text-primary">
                      {(language === "en" ? story.nameEn : story.nameHi).charAt(
                        0
                      )}
                    </div>
                    <h3 className="font-semibold text-lg text-center mb-1">
                      {language === "en" ? story.nameEn : story.nameHi}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {language === "en" ? story.villageEn : story.villageHi}
                    </p>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "{language === "en" ? story.quoteEn : story.quoteHi}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-leaf-green/10 rounded-2xl p-12"
        >
          <Users className="h-16 w-16 mx-auto text-leaf-green mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {t("Support Our Mission", "हमारे मिशन का समर्थन करें")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t(
              "Every purchase directly supports rural women artisans. Shop with purpose and be a part of the change.",
              "हर खरीद सीधे ग्रामीण महिला कारीगरों का समर्थन करती है। उद्देश्य के साथ खरीदें और बदलाव का हिस्सा बनें।"
            )}
          </p>
          <Link href="/shop">
            <Button
              size="lg"
              className="gap-2"
              data-testid="button-shop-empowerment"
            >
              {t("Shop Our Products", "हमारे उत्पाद खरीदें")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
