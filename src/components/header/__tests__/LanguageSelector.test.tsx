import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageSelector } from "../LanguageSelector";
import { useLocale } from "@/providers/LocaleProvider";

// Mock the useLocale hook
jest.mock("@/providers/LocaleProvider", () => ({
  useLocale: jest.fn(),
}));

// Mock next-intl settings
jest.mock("@/i18n/settings", () => ({
  getLanguageLabel: (locale: string) =>
    locale === "en" ? "English" : "German",
  locales: ["en", "de"],
  Locale: { en: "en", de: "de" },
}));

describe("LanguageSelector", () => {
  const mockSetLocale = jest.fn();
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useLocale as jest.Mock).mockReturnValue({
      locale: "en",
      setLocale: mockSetLocale,
    });
  });

  describe("Desktop version", () => {
    it("renders toggle button", () => {
      render(<LanguageSelector />);

      expect(screen.getByTestId("desktop-language-toggle")).toBeInTheDocument();
    });

    it("shows language menu when clicked", () => {
      render(<LanguageSelector />);

      fireEvent.click(screen.getByTestId("desktop-language-toggle"));

      expect(screen.getByTestId("language-menu")).toBeInTheDocument();
      expect(screen.getByText("English")).toBeInTheDocument();
      expect(screen.getByText("German")).toBeInTheDocument();
    });

    it("changes language when option clicked", () => {
      render(<LanguageSelector />);

      fireEvent.click(screen.getByTestId("desktop-language-toggle"));
      fireEvent.click(screen.getByText("German"));

      expect(mockSetLocale).toHaveBeenCalledWith("de");
    });
  });

  describe("Mobile version", () => {
    it("renders toggle button", () => {
      render(<LanguageSelector isMobile />);

      expect(screen.getByTestId("mobile-language-toggle")).toBeInTheDocument();
    });

    it("shows mobile language menu when clicked", () => {
      render(<LanguageSelector isMobile />);

      fireEvent.click(screen.getByTestId("mobile-language-toggle"));

      expect(screen.getByTestId("language-menu-mobile")).toBeInTheDocument();
    });

    it("calls onClose callback when option clicked", () => {
      render(<LanguageSelector isMobile onClose={mockOnClose} />);

      fireEvent.click(screen.getByTestId("mobile-language-toggle"));
      fireEvent.click(screen.getByText("German"));

      expect(mockSetLocale).toHaveBeenCalledWith("de");
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });
});
