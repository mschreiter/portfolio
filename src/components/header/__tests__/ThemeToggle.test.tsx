import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "../ThemeToggle";
import { useTheme } from "@/providers/ThemeProvider";

// Mock the useTheme hook
jest.mock("@/providers/ThemeProvider", () => ({
  useTheme: jest.fn(),
}));

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

describe("ThemeToggle", () => {
  const mockToggleTheme = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders light mode button when theme is light", () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      toggleTheme: mockToggleTheme,
    });

    render(<ThemeToggle />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("dark")).toBeInTheDocument();
  });

  it("renders dark mode button when theme is dark", () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "dark",
      toggleTheme: mockToggleTheme,
    });

    render(<ThemeToggle />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("light")).toBeInTheDocument();
  });

  it("calls toggleTheme when clicked", () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      toggleTheme: mockToggleTheme,
    });

    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole("button"));

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
