import { getAssetPath } from "../assetPath";

describe("getAssetPath", () => {
  const originalEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
  });

  it("should return the path without prefix in development", () => {
    process.env.NODE_ENV = "development";
    expect(getAssetPath("/favicon.ico")).toBe("/favicon.ico");
    expect(getAssetPath("favicon.ico")).toBe("/favicon.ico");
  });

  it("should return the path with prefix in production", () => {
    process.env.NODE_ENV = "production";
    expect(getAssetPath("/favicon.ico")).toBe("/portfolio/favicon.ico");
    expect(getAssetPath("favicon.ico")).toBe("/portfolio/favicon.ico");
  });
});
