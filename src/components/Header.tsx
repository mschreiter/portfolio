"use client";

import { useState } from "react";
import Logo from "@/components/header/Logo";
import Navigation from "@/components/header/Navigation";
import ThemeToggle from "@/components/header/ThemeToggle";
import LanguageSelector from "@/components/header/LanguageSelector";
import MobileMenuButton from "@/components/header/MobileMenuButton";
import MobileMenu from "@/components/header/MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isLanguageMenuOpen) setIsLanguageMenuOpen(false);
  };

  const handleCloseMenus = () => {
    setIsMenuOpen(false);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Navigation />
          <LanguageSelector />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Controls */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle isMobile />
          <LanguageSelector isMobile onClose={handleCloseMenus} />
          <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={handleCloseMenus} />
    </header>
  );
};

export default Header;
