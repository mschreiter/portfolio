"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

interface NavigationLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const NavigationLink = ({
  href,
  label,
  onClick,
}: NavigationLinkProps) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
    onClick={onClick}
  >
    {label}
  </Link>
);

interface NavigationProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export const Navigation = ({
  isMobile = false,
  onItemClick,
}: NavigationProps) => {
  const t = useTranslations("Header");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/skills", label: t("skills") },
    { href: "/experience", label: t("experience") },
    { href: "/contact", label: t("contact") },
  ];

  if (isMobile) {
    return (
      <nav className="flex flex-col space-y-3 py-3">
        {navLinks.map((link) => (
          <NavigationLink
            key={link.href}
            href={link.href}
            label={link.label}
            onClick={onItemClick}
          />
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex space-x-6 items-center">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
