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
    const result = imageLoader({ src: "/test-image.svg", width: 100 });
    expect(result).toBe("/portfolio/test-image.svg?w=100");
  });

  it("should not prepend the basePath in development", () => {
    Object.defineProperty(process.env, "NODE_ENV", {
      value: "development",
    });
    const result = imageLoader({ src: "/test-image.svg", width: 100 });
    expect(result).toBe("/test-image.svg?w=100");
  });
});
