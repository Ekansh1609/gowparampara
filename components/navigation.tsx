"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/lib/i18n";
import { categories } from "@/lib/schema"; // Updated import path
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", labelEn: "Home", labelHi: "होम" },
    { href: "/about", labelEn: "Our Story", labelHi: "हमारी कहानी" },
    {
      href: "/empowerment",
      labelEn: "Women Empowerment",
      labelHi: "महिला सशक्तिकरण",
    },
    { href: "/contact", labelEn: "Contact Us", labelHi: "संपर्क करें" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            data-testid="link-home-logo"
          >
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-primary">
                Gowparampara
              </span>
              <span className="text-[10px] text-muted-foreground -mt-1">
                {t("Tradition Meets Sustainability", "परंपरा और स्थिरता")}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                // APPLY BUTTON STYLES HERE
                className={cn(
                  buttonVariants({
                    variant: isActive(link.href) ? "secondary" : "ghost",
                    size: "sm",
                  })
                )}
              >
                {language === "en" ? link.labelEn : link.labelHi}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={
                    pathname?.startsWith("/shop") ? "secondary" : "ghost"
                  }
                  size="sm"
                  className="gap-1"
                  data-testid="button-shop-dropdown"
                >
                  {t("Shop", "दुकान")}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <Link href="/shop">
                  <DropdownMenuItem>
                    {t("All Products", "सभी उत्पाद")}
                  </DropdownMenuItem>
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/shop?category=${category.id}`}
                  >
                    <DropdownMenuItem>
                      {language === "en" ? category.nameEn : category.nameHi}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive(link.href) ? "secondary" : "ghost"}
                  size="sm"
                >
                  {language === "en" ? link.labelEn : link.labelHi}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {/* Make sure you copy these components to your folder too! */}
            <LanguageToggle />
            <ThemeToggle />

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <Button
                        variant={isActive(link.href) ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {language === "en" ? link.labelEn : link.labelHi}
                      </Button>
                    </Link>
                  ))}
                  <div className="border-t my-2 pt-2">
                    <p className="text-sm font-medium text-muted-foreground mb-2 px-4">
                      {t("Shop Categories", "दुकान श्रेणियाँ")}
                    </p>
                    <Link href="/shop">
                      <Button
                        variant={pathname === "/shop" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t("All Products", "सभी उत्पाद")}
                      </Button>
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/shop?category=${category.id}`}
                      >
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {language === "en"
                            ? category.nameEn
                            : category.nameHi}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
