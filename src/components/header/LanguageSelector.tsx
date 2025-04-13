"use client";

import { useState } from "react";
import { useLocale } from "@/providers/LocaleProvider";
import { Locale, getLanguageLabel, locales } from "@/i18n/settings";
import { GlobeIcon } from "@/components/icons/Icons";

interface LanguageSelectorProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export const LanguageSelector = ({
  isMobile = false,
  onClose,
}: LanguageSelectorProps) => {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLocaleChange = (newLocale: Locale) => {
    setIsOpen(false);
    setLocale(newLocale);
    if (onClose) onClose();
  };

  if (isMobile) {
    return (
      <>
        <button
          onClick={toggleMenu}
          className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
          aria-label="Toggle language"
          data-testid="mobile-language-toggle"
        >
          <GlobeIcon className="h-5 w-5" />
        </button>

        {isOpen && (
          <div
            data-testid="language-menu-mobile"
            className="fixed inset-x-0 top-16 md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 z-40"
          >
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
      </>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none flex items-center justify-center"
        aria-label="Toggle language"
        data-testid="desktop-language-toggle"
      >
        <GlobeIcon className="h-5 w-5" />
      </button>

      {isOpen && (
        <div
          data-testid="language-menu"
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg py-1 z-50"
        >
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
  );
};

export default LanguageSelector;
