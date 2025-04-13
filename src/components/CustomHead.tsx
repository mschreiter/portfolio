"use client";

import { useEffect } from "react";
import getAssetPath from "@/utils/assetPath";

// This component adds favicon links that respect the basePath for GitHub Pages
export const CustomHead = () => {
  // We're using client-side code to add these links to handle the basePath correctly
  useEffect(() => {
    // Only run this in production where GitHub Pages is used
    if (process.env.NODE_ENV === "production") {
      // Remove any existing favicon links to avoid duplicates
      const existingLinks = document.querySelectorAll("link[rel*='icon']");
      existingLinks.forEach((link) => {
        document.head.removeChild(link);
      });

      // Create new links with correct paths
      const iconSizes = [
        {
          rel: "icon",
          href: getAssetPath("/favicon.ico"),
          type: "image/x-icon",
        },
        {
          rel: "icon",
          href: getAssetPath("/favicon-16x16.png"),
          type: "image/png",
          sizes: "16x16",
        },
        {
          rel: "icon",
          href: getAssetPath("/favicon-32x32.png"),
          type: "image/png",
          sizes: "32x32",
        },
        {
          rel: "apple-touch-icon",
          href: getAssetPath("/apple-touch-icon.png"),
        },
        {
          rel: "icon",
          href: getAssetPath("/android-chrome-192x192.png"),
          type: "image/png",
          sizes: "192x192",
        },
        {
          rel: "icon",
          href: getAssetPath("/android-chrome-512x512.png"),
          type: "image/png",
          sizes: "512x512",
        },
      ];

      iconSizes.forEach((icon) => {
        const link = document.createElement("link");
        link.rel = icon.rel;
        link.href = icon.href;
        if (icon.type) link.type = icon.type;
        if (icon.sizes) link.sizes = icon.sizes;
        document.head.appendChild(link);
      });
    }
  }, []);

  return null;
};

export default CustomHead;
