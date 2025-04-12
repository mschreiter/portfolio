"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/providers/ThemeProvider";
import { useLocale } from "@/providers/LocaleProvider";
import { useTranslations } from "next-intl";
import { Locale, getLanguageLabel, locales } from "@/i18n/settings";
import { MoonIcon, SunIcon, GlobeIcon, Bars3Icon, XMarkIcon } from "@/components/icons/Icons";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLocale();
  const t = useTranslations("Header");
  const tTheme = useTranslations("Theme");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };
  
  const handleLocaleChange = (newLocale: Locale) => {
    setIsLanguageMenuOpen(false);
    setLocale(newLocale);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo/Name */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Max Schreiter
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
            {t("home")}
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
            {t("about")}
          </Link>
          <Link href="/skills" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
            {t("skills")}
          </Link>
          <Link href="/experience" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
            {t("experience")}
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
            {t("contact")}
          </Link>
          
          {/* Language Toggle */}
          <div className="relative">
            <button 
              onClick={toggleLanguageMenu}
              className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none flex items-center justify-center"
              aria-label="Toggle language"
              data-testid="desktop-language-toggle"
            >
              <GlobeIcon className="h-5 w-5" />
            </button>
            {isLanguageMenuOpen && (
              <div data-testid="language-menu" className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg py-1 z-50">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => handleLocaleChange(loc)}
                    className={`block w-full text-left px-4 py-2 ${
                      locale === loc 
                        ? "bg-primary text-white" 
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {getLanguageLabel(loc)}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none flex items-center justify-center"
            aria-label={theme === 'dark' ? tTheme("light") : tTheme("dark")}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Toggle - Mobile */}
          <button 
            onClick={toggleTheme}
            className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            aria-label={theme === 'dark' ? tTheme("light") : tTheme("dark")}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
          
          {/* Language Toggle - Mobile */}
          <button 
            onClick={toggleLanguageMenu}
            className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Toggle language"
            data-testid="mobile-language-toggle"
          >
            <GlobeIcon className="h-5 w-5" />
          </button>
          
          {/* Hamburger - Mobile */}
          <button 
            onClick={toggleMenu}
            className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div data-testid="mobile-menu" className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              <Link 
                href="/"
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleMenu}
              >
                {t("home")}
              </Link>
              <Link 
                href="/about"
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleMenu}
              >
                {t("about")}
              </Link>
              <Link 
                href="/skills"
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleMenu}
              >
                {t("skills")}
              </Link>
              <Link 
                href="/experience"
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleMenu}
              >
                {t("experience")}
              </Link>
              <Link 
                href="/contact"
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleMenu}
              >
                {t("contact")}
              </Link>
            </nav>
          </div>
        </div>
      )}
      
      {/* Mobile Language Menu */}
      {isLanguageMenuOpen && (
        <div data-testid="language-menu-mobile" className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-2 py-2">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className={`px-4 py-2 rounded text-left ${
                    locale === loc 
                      ? "bg-primary text-white" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {getLanguageLabel(loc)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;