"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="text-xl font-bold text-gray-900 dark:text-white"
      >
        Max Schreiter
      </Link>
    </div>
  );
};

export default Logo;
