"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Leaf, Users, Award, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

// Define images locally to match Next.js public folder structure
const aboutImages = {
  women: "/images/women.jpg",
  flowers: "/images/flowers.jpg",
  cow: "/images/cow.jpg",
};

export default function AboutPage() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Heart,
      titleEn: "Gau Sanrakshan",
      titleHi: "गौ संरक्षण",
      descEn:
        "We are committed to protecting and nurturing cows, treating them with the love and respect they deserve as sacred beings.",
      descHi:
        "हम गायों की रक्षा और पालन-पोषण के लिए प्रतिबद्ध हैं, उन्हें पवित्र प्राणियों के रूप में प्यार और सम्मान के साथ व्यवहार करते हैं।",
    },
    {
      icon: Users,
      titleEn: "Women Empowerment",
      titleHi: "महिला सशक्तिकरण",
      descEn:
        "Our Gramin Mahila Swarojgar initiative provides sustainable livelihoods to rural women, making them financially independent.",
      descHi:
        "हमारी ग्रामीण महिला स्वरोजगार पहल ग्रामीण महिलाओं को स्थायी आजीविका प्रदान करती है, जिससे वे आर्थिक रूप से स्वतंत्र होती हैं।",
    },
    {
      icon: Leaf,
      titleEn: "Sustainability",
      titleHi: "स्थिरता",
      descEn:
        "Every product we create follows the 'Waste to Wealth' philosophy, turning temple waste and cow dung into valuable products.",
      descHi:
        "हमारा हर उत्पाद 'कचरे से संपत्ति' दर्शन का पालन करता है, मंदिर के कचरे और गोबर को मूल्यवान उत्पादों में बदलता है।",
    },
    {
      icon: Shield,
      titleEn: "Chemical Free",
      titleHi: "रसायन मुक्त",
      descEn:
        "We promise 100% natural, chemical-free products made using traditional methods passed down through generations.",
      descHi:
        "हम पीढ़ियों से चली आ रही पारंपरिक विधियों का उपयोग करके बने 100% प्राकृतिक, रसायन-मुक्त उत्पादों का वादा करते हैं।",
    },
  ];

  const timeline = [
    {
      year: "2018",
      titleEn: "Foundation",
      titleHi: "स्थापना",
      descEn:
        "Gau Parampara was founded under Azad Hind Fauj Trust with a vision to protect cows and empower rural women.",
      descHi:
        "गौ परंपरा की स्थापना आज़ाद हिंद फौज ट्रस्ट के तहत गायों की रक्षा और ग्रामीण महिलाओं को सशक्त बनाने के दृष्टिकोण के साथ की गई।",
    },
    {
      year: "2019",
      titleEn: "First Women's Group",
      titleHi: "पहला महिला समूह",
      descEn:
        "Launched our first women's self-help group in Lakhimpur Kheri with 25 rural women.",
      descHi:
        "लखीमपुर खीरी में 25 ग्रामीण महिलाओं के साथ हमारे पहले महिला स्वयं सहायता समूह की शुरुआत।",
    },
    {
      year: "2020",
      titleEn: "Product Launch",
      titleHi: "उत्पाद लॉन्च",
      descEn:
        "Introduced our signature herbal incense sticks and dhoop cups to the market.",
      descHi: "हमारी सिग्नेचर हर्बल अगरबत्ती और धूप कप को बाजार में पेश किया।",
    },
    {
      year: "2022",
      titleEn: "Expansion",
      titleHi: "विस्तार",
      descEn:
        "Expanded to 50+ villages, empowering over 500 women with sustainable livelihoods.",
      descHi:
        "50+ गांवों में विस्तार, 500 से अधिक महिलाओं को स्थायी आजीविका प्रदान करना।",
    },
    {
      year: "2024",
      titleEn: "Online Presence",
      titleHi: "ऑनलाइन उपस्थिति",
      descEn:
        "Launched our e-commerce platform to reach conscious consumers across India.",
      descHi:
        "पूरे भारत में जागरूक उपभोक्ताओं तक पहुंचने के लिए हमारा ई-कॉमर्स प्लेटफॉर्म लॉन्च किया।",
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
            {t("Our Story", "हमारी कहानी")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "A journey of tradition, sustainability, and empowerment rooted in the values of Swami Vivekananda",
              "स्वामी विवेकानंद के मूल्यों में निहित परंपरा, स्थिरता और सशक्तिकरण की यात्रा"
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
                alt="Rural women artisans"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              {t(
                "The Azad Hind Fauj Trust Legacy",
                "आज़ाद हिंद फौज ट्रस्ट की विरासत"
              )}
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {t(
                "Gau Parampara is born from the noble vision of the Azad Hind Fauj Trust, inspired by the teachings of Swami Vivekananda who believed in the strength and potential of rural India.",
                "गौ परंपरा आज़ाद हिंद फौज ट्रस्ट के महान दृष्टिकोण से उत्पन्न हुई है, जो स्वामी विवेकानंद की शिक्षाओं से प्रेरित है जो ग्रामीण भारत की ताकत और क्षमता में विश्वास करते थे।"
              )}
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t(
                "We believe that true development comes from within our communities. By combining traditional wisdom with sustainable practices, we create products that are good for you, good for the environment, and good for our rural artisans.",
                "हम मानते हैं कि सच्चा विकास हमारे समुदायों के भीतर से आता है। पारंपरिक ज्ञान को टिकाऊ प्रथाओं के साथ जोड़कर, हम ऐसे उत्पाद बनाते हैं जो आपके लिए, पर्यावरण के लिए और हमारे ग्रामीण कारीगरों के लिए अच्छे हैं।"
              )}
            </p>
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <Award className="h-12 w-12 text-primary shrink-0" />
              <div>
                <p className="font-semibold">
                  {t(
                    "Recognized by Government of India",
                    "भारत सरकार द्वारा मान्यता प्राप्त"
                  )}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "For contribution to rural women empowerment",
                    "ग्रामीण महिला सशक्तिकरण में योगदान के लिए"
                  )}
                </p>
              </div>
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
            {t("Our Core Values", "हमारे मूल मूल्य")}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-2">
                      {language === "en" ? value.titleEn : value.titleHi}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" ? value.descEn : value.descHi}
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
            className="font-serif text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t("Our Journey", "हमारी यात्रा")}
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    {index % 2 === 0 && (
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="font-serif font-semibold text-lg mb-2">
                            {language === "en" ? item.titleEn : item.titleHi}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {language === "en" ? item.descEn : item.descHi}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
                      {item.year}
                    </div>
                  </div>

                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="font-serif font-semibold text-lg mb-2">
                            {language === "en" ? item.titleEn : item.titleHi}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {language === "en" ? item.descEn : item.descHi}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-primary/5 rounded-2xl p-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {t("Join Our Mission", "हमारे मिशन में शामिल हों")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t(
              "Every purchase you make supports rural women and contributes to cow protection. Be a part of the change.",
              "आपकी हर खरीद ग्रामीण महिलाओं का समर्थन करती है और गौ संरक्षण में योगदान देती है। बदलाव का हिस्सा बनें।"
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/shop">
              <Button
                size="lg"
                className="gap-2"
                data-testid="button-shop-now-about"
              >
                {t("Shop Now", "अभी खरीदें")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                data-testid="button-contact-about"
              >
                {t("Contact Us", "संपर्क करें")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
