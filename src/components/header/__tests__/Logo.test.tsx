import { render, screen } from "@testing-library/react";
import Logo from "../Logo";

describe("Logo", () => {
  it("renders the logo with correct text", () => {
    render(<Logo />);

    const logoLink = screen.getByRole("link", { name: /max schreiter/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
