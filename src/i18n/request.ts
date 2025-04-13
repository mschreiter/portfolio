import { getRequestConfig } from "next-intl/server";
import { defaultLocale } from "./settings";

// For static sites we just use the default locale for server rendering
// and handle actual locale switching client-side
const requestConfig = getRequestConfig(async () => {
  return {
    locale: defaultLocale,
    messages: (await import(`../../messages/${defaultLocale}.json`)).default,
  };
});

export default requestConfig;
