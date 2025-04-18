"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, defaultLocale, locales } from "../i18n/settings";

interface LocaleContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Initialize locale on mount - for SSG, we need to detect language client-side
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Try to get from localStorage first
    const savedLocale = localStorage.getItem("locale") as Locale | null;

    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale);
      // No reloading here - we will just use the locale in our context
    } else {
      // Detect browser language
      const browserLang = navigator.language.split("-")[0] as Locale;

      const detectedLocale = locales.includes(browserLang)
        ? browserLang
        : defaultLocale;

      setLocaleState(detectedLocale);
      localStorage.setItem("locale", detectedLocale);
      // No reloading here - just set the state
    }
  }, []);

  // Save locale changes
  const setLocale = (newLocale: Locale) => {
    if (!locales.includes(newLocale)) {
      return;
    }

    localStorage.setItem("locale", newLocale);
    setLocaleState(newLocale);

    // Create a dedicated event to notify the app about locale change
    const event = new CustomEvent("localeChange", {
      detail: { locale: newLocale },
    });
    window.dispatchEvent(event);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
