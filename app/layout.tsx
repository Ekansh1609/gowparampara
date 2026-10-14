import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { CartProvider } from "@/lib/cart";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

// Load fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Gowparampara - Tradition Meets Sustainability | Handcrafted by Rural India",
  description:
    "Gau Parampara - Tradition Meets Sustainability. Handmade, chemical-free products by rural Indian women. Supporting cow protection and women empowerment through eco-friendly incense, idols, and organic farming products.",
  keywords: [
    "Gau Parampara",
    "eco-friendly",
    "handmade",
    "incense sticks",
    "organic",
    "cow dung products",
    "women empowerment",
    "sustainable",
    "Indian traditional",
  ],
  openGraph: {
    title: "Gau Parampara - Handcrafted by Rural India",
    description:
      "Empowering women and protecting cows through 100% natural, chemical-free products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <CartProvider>
              <TooltipProvider>
                <Navigation />
                <main className="flex-1">{children}</main>
                <Footer />
                <Toaster />
              </TooltipProvider>
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
