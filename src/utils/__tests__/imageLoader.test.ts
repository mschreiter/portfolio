import imageLoader from "../imageLoader";

describe("imageLoader", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules(); // Clears the cache
    process.env = { ...originalEnv }; // Clone the original environment
  });

  afterEach(() => {
    process.env = originalEnv; // Restore the original environment
  });

  it("should prepend the basePath in production", () => {
    Object.defineProperty(process.env, "NODE_ENV", {
      value: "production",
    });
    const result = imageLoader({ src: "/test-image.svg" });
    expect(result).toBe("/portfolio/test-image.svg");
  });

  it("should not prepend the basePath in development", () => {
    Object.defineProperty(process.env, "NODE_ENV", {
      value: "development",
    });
    const result = imageLoader({ src: "/test-image.svg" });
    expect(result).toBe("/test-image.svg");
  });
});
