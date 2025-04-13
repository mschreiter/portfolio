"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { useTranslations } from "next-intl";
import { MoonIcon, SunIcon } from "@/components/icons/Icons";

interface ThemeToggleProps {
  isMobile?: boolean;
}

export const ThemeToggle = ({ isMobile = false }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const tTheme = useTranslations("Theme");

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none flex items-center justify-center"
      aria-label={theme === "dark" ? tTheme("light") : tTheme("dark")}
      data-testid={isMobile ? "mobile-theme-toggle" : "desktop-theme-toggle"}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
