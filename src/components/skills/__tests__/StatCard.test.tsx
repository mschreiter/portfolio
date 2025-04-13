import { render, screen } from "@testing-library/react";
import StatCard from "../StatCard";

describe("StatCard", () => {
  const mockProps = {
    value: "10+",
    label: "Years of Experience",
  };

  it("renders value and label correctly", () => {
    render(<StatCard {...mockProps} />);

    expect(screen.getByText(mockProps.value)).toBeInTheDocument();
    expect(screen.getByText(mockProps.label)).toBeInTheDocument();
  });

  it("has proper styling", () => {
    render(<StatCard {...mockProps} />);

    const containerDiv = screen.getByText(mockProps.value).parentElement;
    expect(containerDiv).toHaveClass("bg-white", "dark:bg-gray-800");
  });
});
