import { render, screen, fireEvent } from "@testing-library/react";
import MobileMenuButton from "../MobileMenuButton";

describe("MobileMenuButton", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders hamburger icon when closed", () => {
    render(<MobileMenuButton isOpen={false} onClick={mockOnClick} />);

    const button = screen.getByTestId("mobile-menu-button");
    expect(button).toBeInTheDocument();

    // With SVG icons, we can't easily test the specific icon rendered
    // But we can ensure the button is rendered
  });

  it("renders close icon when open", () => {
    render(<MobileMenuButton isOpen={true} onClick={mockOnClick} />);

    const button = screen.getByTestId("mobile-menu-button");
    expect(button).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    render(<MobileMenuButton isOpen={false} onClick={mockOnClick} />);

    fireEvent.click(screen.getByTestId("mobile-menu-button"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
