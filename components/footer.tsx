"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";
import { categories } from "@/lib/schema"; // Updated path

export function Footer() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: t("Subscribed!", "सब्सक्राइब हो गया!"),
        description: t(
          "Thank you for subscribing to our eco-living tips.",
          "हमारी पर्यावरण-अनुकूल जीवनशैली युक्तियों की सदस्यता के लिए धन्यवाद।"
        ),
      });
      setEmail("");
    }
  };

  const quickLinks = [
    { href: "/", labelEn: "Home", labelHi: "होम" },
    { href: "/shop", labelEn: "Shop", labelHi: "दुकान" },
    { href: "/about", labelEn: "Our Story", labelHi: "हमारी कहानी" },
    {
      href: "/empowerment",
      labelEn: "Women Empowerment",
      labelHi: "महिला सशक्तिकरण",
    },
    { href: "/contact", labelEn: "Contact", labelHi: "संपर्क" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="block mb-4">
              <span className="font-serif text-2xl font-bold text-primary">
                Gowparampara
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {t(
                "An initiative of Azad Hind Fauj Trust for cow protection and women empowerment through sustainable livelihood.",
                "टिकाऊ आजीविका के माध्यम से गौ संरक्षण और महिला सशक्तिकरण के लिए आज़ाद हिंद फौज ट्रस्ट की एक पहल।"
              )}
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">
              {t("Quick Links", "त्वरित लिंक")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {language === "en" ? link.labelEn : link.labelHi}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">
              {t("Categories", "श्रेणियाँ")}
            </h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/shop?category=${category.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {language === "en" ? category.nameEn : category.nameHi}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">
              {t("Contact Us", "संपर्क करें")}
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {t(
                    "Office: Aliganj, Lucknow, Uttar Pradesh",
                    "कार्यालय: अलीगंज, लखनऊ, उत्तर प्रदेश"
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {t(
                    "Unit: Ramapur, Lakhimpur Kheri, U.P.",
                    "यूनिट: रामपुर, लखीमपुर खीरी, उ.प्र."
                  )}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@gowparampara.org</span>
              </li>
            </ul>

            <div>
              <p className="text-sm font-medium mb-2">
                {t(
                  "Subscribe for Eco-Living Tips",
                  "पर्यावरण-अनुकूल जीवनशैली युक्तियों के लिए सदस्यता लें"
                )}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t("Your email", "आपका ईमेल")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Gowparampara - Azad Hind Fauj Trust.{" "}
            {t("All rights reserved.", "सर्वाधिकार सुरक्षित।")}
          </p>
        </div>
      </div>
    </footer>
  );
}
