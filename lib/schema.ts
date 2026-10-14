import { z } from "zod";

// Product Categories
export const categories = [
  {
    id: "aromatic-spiritual",
    nameEn: "Aromatic & Spiritual",
    nameHi: "सुगंधित एवं आध्यात्मिक",
  },
  {
    id: "home-decor-idols",
    nameEn: "Home Decor & Idols",
    nameHi: "घर की सजावट एवं मूर्तियाँ",
  },
  {
    id: "havan-puja",
    nameEn: "Havan & Puja Essentials",
    nameHi: "हवन एवं पूजा सामग्री",
  },
  {
    id: "gardening-nature",
    nameEn: "Gardening & Nature",
    nameHi: "बागवानी एवं प्रकृति",
  },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

// Product Schema
export const productSchema = z.object({
  id: z.string(),
  nameEn: z.string(),
  nameHi: z.string(),
  descriptionEn: z.string(),
  descriptionHi: z.string(),
  price: z.number(),
  originalPrice: z.number().optional(),
  category: z.enum([
    "aromatic-spiritual",
    "home-decor-idols",
    "havan-puja",
    "gardening-nature",
  ]),
  image: z.string(),
  hoverImage: z.string().optional(),
  tags: z.array(
    z.enum([
      "eco-friendly",
      "handmade",
      "chemical-free",
      "charcoal-free",
      "organic",
      "premium",
    ])
  ),
  inStock: z.boolean().default(true),
  featured: z.boolean().default(false),
});

export type Product = z.infer<typeof productSchema>;
export type InsertProduct = Omit<Product, "id">;

// Cart Item Schema
export const cartItemSchema = z.object({
  id: z.string(),
  productId: z.string(),
  quantity: z.number().min(1),
});

export type CartItem = z.infer<typeof cartItemSchema>;
export type InsertCartItem = Omit<CartItem, "id">;

// Testimonial Schema
export const testimonialSchema = z.object({
  id: z.string(),
  nameEn: z.string(),
  nameHi: z.string(),
  locationEn: z.string(),
  locationHi: z.string(),
  quoteEn: z.string(),
  quoteHi: z.string(),
  rating: z.number().min(1).max(5),
  avatar: z.string().optional(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// Newsletter Schema
export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type Newsletter = z.infer<typeof newsletterSchema>;

// User Schema (keeping existing)
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = InsertUser & { id: string };
