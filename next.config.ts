import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isProd = process.env.NODE_ENV === "production";

const repoName = ""; // Replace with your repository name

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./src/utils/imageLoader.ts",
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
