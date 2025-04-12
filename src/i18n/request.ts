import { getRequestConfig } from "next-intl/server";

const requestConfig = async () => {
  // Provide a static locale, fetch a user setting, or read from cookies/headers
  const locale = "en"; // Default locale
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
};

export default getRequestConfig(requestConfig);
