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
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0] as Locale;
      const detectedLocale = locales.includes(browserLang) ? browserLang : defaultLocale;
      setLocaleState(detectedLocale);
      localStorage.setItem("locale", detectedLocale);
    }
  }, []);
  
  // Save locale changes
  const setLocale = (newLocale: Locale) => {
    if (!locales.includes(newLocale)) return;
    
    localStorage.setItem("locale", newLocale);
    setLocaleState(newLocale);
    
    // Force reload to apply new locale in static site
    window.location.reload();
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