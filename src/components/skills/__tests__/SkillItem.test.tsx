import { render, screen } from "@testing-library/react";
import SkillItem from "../SkillItem";

describe("SkillItem", () => {
  const mockProps = {
    title: "React",
    description: "A JavaScript library for building user interfaces",
  };

  it("renders the title and description correctly", () => {
    render(<SkillItem {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it("renders the checkmark icon", () => {
    render(<SkillItem {...mockProps} />);

    // Check for SVG element
    const svgElement = document.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
  });
});
