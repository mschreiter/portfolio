"use client";

import { useLocale } from "@/providers/LocaleProvider";
import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState } from "react";
import { Locale } from "@/i18n/settings";

interface I18nProviderProps {
  children: React.ReactNode;
  initialLocale: Locale;
  initialMessages: Record<string, string>;
}

export default function I18nProvider({
  children,
  initialLocale,
  initialMessages,
}: I18nProviderProps) {
  const { locale } = useLocale();
  const [messages, setMessages] =
    useState<Record<string, string>>(initialMessages);
  const [currentLocale, setCurrentLocale] = useState<Locale>(initialLocale);
  const [isLoading, setIsLoading] = useState(false);

  // Listen for locale changes from LocaleProvider
  useEffect(() => {
    // Type-safe event handler for our custom event
    const handleLocaleChange = async (event: Event) => {
      // Cast the event to our expected type, with type checking
      const e = event as CustomEvent<{ locale: Locale }>;
      if (!e.detail || !e.detail.locale) {
        return;
      }

      const newLocale = e.detail.locale;

      if (newLocale === currentLocale) {
        return;
      }

      try {
        setIsLoading(true);

        // Dynamically import the messages for the new locale
        const newMessages = (await import(`../../messages/${newLocale}.json`))
          .default;

        // Update the HTML lang attribute
        document.documentElement.lang = newLocale;

        // Update state
        setMessages(newMessages);
        setCurrentLocale(newLocale);
      } catch (error) {
        // Log error but don't break the UI
        console.error("Failed to load messages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Add event listener for custom locale change event
    window.addEventListener("localeChange", handleLocaleChange);

    return () => {
      window.removeEventListener("localeChange", handleLocaleChange);
    };
  }, [currentLocale]);

  // Handle direct locale changes from LocaleProvider context
  useEffect(() => {
    if (locale !== currentLocale && !isLoading) {
      // Dispatch the locale change event
      const event = new CustomEvent("localeChange", {
        detail: { locale },
      });
      window.dispatchEvent(event);
    }
  }, [locale, currentLocale, isLoading]);

  return (
    <NextIntlClientProvider
      locale={currentLocale}
      messages={messages}
      timeZone="Europe/Berlin"
    >
      {children}
    </NextIntlClientProvider>
  );
}
