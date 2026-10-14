import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1"
          data-testid="button-language-toggle"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">
            {language === "en" ? "EN" : "HI"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          data-testid="menu-item-english"
          className={language === "en" ? "bg-accent" : ""}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("hi")}
          data-testid="menu-item-hindi"
          className={language === "hi" ? "bg-accent" : ""}
        >
          हिंदी (Hindi)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
