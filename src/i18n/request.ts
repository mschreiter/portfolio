import { getRequestConfig } from "next-intl/server";
import { defaultLocale } from "./settings";

const requestConfig = getRequestConfig(async () => {
  // For SSG, we need to handle the locale detection client-side
  const locale = defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

export default requestConfig;