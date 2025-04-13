/**
 * Returns the correct path for assets based on the environment
 * Handles GitHub Pages deployment with the correct basePath
 */
export const getAssetPath = (path: string): string => {
  const isProd = process.env.NODE_ENV === "production";
  const repoName = "portfolio"; // This should match the value in next.config.ts
  const basePath = isProd ? `/${repoName}` : "";

  // Ensure path starts with a slash
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
};

export default getAssetPath;
