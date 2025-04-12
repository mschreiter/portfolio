export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = 'en' as const;

export function getLanguageLabel(locale: Locale): string {
  switch (locale) {
    case 'en':
      return 'English';
    case 'de':
      return 'Deutsch';
    default:
      return locale;
  }
}