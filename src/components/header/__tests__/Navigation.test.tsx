import { render, screen, fireEvent } from "@testing-library/react";
import { Navigation } from "../Navigation";

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

describe("Navigation", () => {
  const mockOnItemClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Desktop Navigation", () => {
    it("renders all navigation links", () => {
      render(<Navigation />);

      expect(screen.getByText("home")).toBeInTheDocument();
      expect(screen.getByText("about")).toBeInTheDocument();
      expect(screen.getByText("skills")).toBeInTheDocument();
      expect(screen.getByText("experience")).toBeInTheDocument();
      expect(screen.getByText("contact")).toBeInTheDocument();
    });

    it("renders desktop nav with correct className", () => {
      render(<Navigation />);

      const navElement = screen.getByRole("navigation");
      expect(navElement).toHaveClass("hidden");
      expect(navElement).toHaveClass("md:flex");
    });
  });

  describe("Mobile Navigation", () => {
    it("renders all navigation links", () => {
      render(<Navigation isMobile />);

      expect(screen.getByText("home")).toBeInTheDocument();
      expect(screen.getByText("about")).toBeInTheDocument();
      expect(screen.getByText("skills")).toBeInTheDocument();
      expect(screen.getByText("experience")).toBeInTheDocument();
      expect(screen.getByText("contact")).toBeInTheDocument();
    });

    it("calls onItemClick when mobile link is clicked", () => {
      render(<Navigation isMobile onItemClick={mockOnItemClick} />);

      fireEvent.click(screen.getByText("home"));

      expect(mockOnItemClick).toHaveBeenCalledTimes(1);
    });
  });
});
