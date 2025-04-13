import { render, screen } from "@testing-library/react";
import MobileMenu from "../MobileMenu";

// Mock Navigation component
jest.mock("../Navigation", () => ({
  Navigation: jest.fn(() => (
    <div data-testid="mock-navigation">Navigation</div>
  )),
}));

describe("MobileMenu", () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders nothing when closed", () => {
    const { container } = render(
      <MobileMenu isOpen={false} onClose={mockOnClose} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("renders navigation when open", () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} />);

    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();
    expect(screen.getByTestId("mock-navigation")).toBeInTheDocument();
  });
});
