import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { getLocale } from "next-intl/server";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LocaleProvider } from "@/providers/LocaleProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import I18nProvider from "@/providers/I18nProvider";
import CustomHead from "@/components/CustomHead";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maximilian Schreiter | Portfolio",
  description:
    "Portfolio of Maximilian Schreiter. A software engineer with a focus on web development.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // Get initial locale from server
  const serverLocale = await getLocale();
  const locale = serverLocale as "en" | "de";

  // Get messages for the initial locale
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LocaleProvider>
            <I18nProvider initialLocale={locale} initialMessages={messages}>
              <CustomHead />
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
            </I18nProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
