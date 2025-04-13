import { render, screen } from "@testing-library/react";
import SkillGroup from "../SkillGroup";

// Mock SkillItem component
jest.mock("../SkillItem", () => {
  return function MockSkillItem({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <div data-testid="skill-item">
        {title}: {description}
      </div>
    );
  };
});

describe("SkillGroup", () => {
  const mockProps = {
    title: "Frontend Frameworks",
    items: [
      { title: "React", description: "UI library" },
      { title: "Next.js", description: "React framework" },
    ],
  };

  it("renders the title correctly", () => {
    render(<SkillGroup {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("renders all skill items", () => {
    render(<SkillGroup {...mockProps} />);

    const skillItems = screen.getAllByTestId("skill-item");
    expect(skillItems).toHaveLength(mockProps.items.length);

    expect(
      screen.getByText(
        `${mockProps.items[0].title}: ${mockProps.items[0].description}`,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockProps.items[1].title}: ${mockProps.items[1].description}`,
      ),
    ).toBeInTheDocument();
  });
});
