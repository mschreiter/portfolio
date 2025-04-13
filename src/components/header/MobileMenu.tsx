"use client";

import { Navigation } from "./Navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      data-testid="mobile-menu"
      className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 py-2">
        <Navigation isMobile onItemClick={onClose} />
      </div>
    </div>
  );
};

export default MobileMenu;
