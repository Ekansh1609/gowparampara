"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/lib/i18n";
import { testimonials } from "@/lib/data"; // Updated import path

export function Testimonials() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= testimonials.length - itemsPerView + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - itemsPerView : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {t("What Our Customers Say", "हमारे ग्राहक क्या कहते हैं")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Hear from our community of conscious consumers who chose tradition and sustainability",
              "जानिए हमारे जागरूक उपभोक्ताओं के समुदाय से जिन्होंने परंपरा और स्थिरता को चुना"
            )}
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    language={language}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <TestimonialCard
                  testimonial={testimonials[currentIndex]}
                  language={language}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  language,
}: {
  testimonial: (typeof testimonials)[0];
  language: "en" | "hi";
}) {
  const name = language === "en" ? testimonial.nameEn : testimonial.nameHi;
  const location =
    language === "en" ? testimonial.locationEn : testimonial.locationHi;
  const quote = language === "en" ? testimonial.quoteEn : testimonial.quoteHi;

  return (
    <Card className="h-full" data-testid={`card-testimonial-${testimonial.id}`}>
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <Quote className="h-8 w-8 text-muted-foreground/30 mb-2" />

        <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4">
          {quote}
        </p>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
