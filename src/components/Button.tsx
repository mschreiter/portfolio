"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  external = false,
}: ButtonProps) => {
  const baseClasses =
    "inline-block rounded-full font-medium transition-all duration-300 py-3 px-6 text-center focus:outline-none";
  
  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg",
    secondary:
      "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700",
    outline:
      "border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a 
          href={href} 
          className={buttonClasses} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={buttonClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;