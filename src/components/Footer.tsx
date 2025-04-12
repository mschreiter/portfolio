"use client";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Maximilian Schreiter. {t("rights")}.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://de.linkedin.com/in/deezmax"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/mschreiter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://bsky.app/profile/deezmax.bsky.social"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="Bluesky"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.25C6.62 2.25 2.25 6.62 2.25 12S6.62 21.75 12 21.75c2.83 0 5.45-1.18 7.3-3.22l-3.46-3.92c-.5.47-1.16.64-1.63.64-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03.72 0 1.63.45 1.63 1.59l3.92 3.46C21.14 13.45 21.75 10.87 21.75 8c0-5.38-4.37-9.75-9.75-9.75Z"></path>
              </svg>
            </a>
            <a 
              href="https://twitter.com/deezmax"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a 
              href="https://open.spotify.com/user/k1wkvdww623hi6dt5xrxumcan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="Spotify"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.65 14.53c-.18.28-.56.35-.84.18-2.3-1.41-5.2-1.73-8.62-.94-.33.08-.65-.13-.74-.45-.08-.33.13-.65.45-.74 3.74-.86 6.94-.5 9.56 1.13.29.18.35.56.18.84zm1.23-2.74c-.23.36-.72.47-1.08.24-2.64-1.62-6.67-2.1-9.8-1.14-.41.12-.84-.1-.96-.5-.12-.41.1-.84.5-.96 3.57-1.08 8.01-.55 11.05 1.28.36.22.47.71.24 1.08zm.11-2.85c-3.17-1.88-8.39-2.05-11.42-1.14-.49.16-1-.13-1.16-.61-.16-.49.13-1 .61-1.16 3.48-1.05 9.26-.85 12.91 1.32.46.27.6.85.34 1.3-.28.45-.86.6-1.31.33z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {t("madeWith")} ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;