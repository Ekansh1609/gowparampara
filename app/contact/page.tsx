"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLanguage } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactForm } from "@/lib/schema";

export default function Contact() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t("Message Sent!", "संदेश भेजा गया!"),
      description: t(
        "Thank you for contacting us. We'll get back to you soon.",
        "हमसे संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।"
      ),
    });

    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      titleEn: "Head Office",
      titleHi: "मुख्य कार्यालय",
      contentEn: "Aliganj, Lucknow, Uttar Pradesh - 226024",
      contentHi: "अलीगंज, लखनऊ, उत्तर प्रदेश - 226024",
    },
    {
      icon: MapPin,
      titleEn: "Production Unit",
      titleHi: "उत्पादन इकाई",
      contentEn: "Ramapur, Lakhimpur Kheri, U.P. - 262701",
      contentHi: "रामपुर, लखीमपुर खीरी, उ.प्र. - 262701",
    },
    {
      icon: Phone,
      titleEn: "Phone",
      titleHi: "फ़ोन",
      contentEn: "+91 9876543210",
      contentHi: "+91 9876543210",
    },
    {
      icon: Mail,
      titleEn: "Email",
      titleHi: "ईमेल",
      contentEn: "info@gauparampara.org",
      contentHi: "info@gauparampara.org",
    },
    {
      icon: Clock,
      titleEn: "Working Hours",
      titleHi: "कार्य समय",
      contentEn: "Mon - Sat: 9:00 AM - 6:00 PM",
      contentHi: "सोम - शनि: सुबह 9:00 - शाम 6:00",
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
            {t("Contact Us", "संपर्क करें")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Have questions about our products or want to partner with us? We'd love to hear from you!",
              "हमारे उत्पादों के बारे में प्रश्न हैं या हमारे साथ साझेदारी करना चाहते हैं? हमें आपसे सुनना अच्छा लगेगा!"
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  {t("Send us a Message", "हमें संदेश भेजें")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Name", "नाम")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("Your full name", "आपका पूरा नाम")}
                              {...field}
                              data-testid="input-contact-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Email", "ईमेल")}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={t("your@email.com", "आपका@ईमेल.com")}
                              {...field}
                              data-testid="input-contact-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {t("Phone (Optional)", "फ़ोन (वैकल्पिक)")}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+91 XXXXX XXXXX"
                              {...field}
                              data-testid="input-contact-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Message", "संदेश")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t(
                                "How can we help you?",
                                "हम आपकी कैसे मदद कर सकते हैं?"
                              )}
                              className="min-h-[150px]"
                              {...field}
                              data-testid="input-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                      data-testid="button-contact-submit"
                    >
                      {isSubmitting ? (
                        t("Sending...", "भेज रहे हैं...")
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          {t("Send Message", "संदेश भेजें")}
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-2xl font-bold mb-6">
              {t("Get in Touch", "संपर्क में रहें")}
            </h2>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.titleEn}>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        {language === "en" ? info.titleEn : info.titleHi}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "en" ? info.contentEn : info.contentHi}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {t("Partnership Opportunities", "साझेदारी के अवसर")}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t(
                    "Interested in becoming a distributor, retailer, or supporting our women empowerment initiatives? We welcome collaborations that align with our mission.",
                    "वितरक, खुदरा विक्रेता बनने या हमारी महिला सशक्तिकरण पहलों का समर्थन करने में रुचि है? हम ऐसे सहयोग का स्वागत करते हैं जो हमारे मिशन के अनुरूप हों।"
                  )}
                </p>
                <p className="text-sm font-medium">
                  {t("Email:", "ईमेल:")}{" "}
                  <a
                    href="mailto:partnerships@gauparampara.org"
                    className="text-primary hover:underline"
                  >
                    partnerships@gauparampara.org
                  </a>
                </p>
              </CardContent>
            </Card>

            <div className="rounded-lg overflow-hidden aspect-[16/9] bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d80.946166!3d26.884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUzJzAyLjQiTiA4MMKwNTYnNDYuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gau Parampara Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
