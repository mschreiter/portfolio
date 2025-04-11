import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const repoName = "portfolio"; // Replace with your repository name

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./src/utils/imageLoader.ts",
  },
};

export default nextConfig;
