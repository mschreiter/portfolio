import { render, screen } from "@testing-library/react";
import SkillsHeader from "../SkillsHeader";

// Mock Section component
jest.mock("@/components/Section", () => {
  return function MockSection({ children }: { children: React.ReactNode }) {
    return <div data-testid="section">{children}</div>;
  };
});

describe("SkillsHeader", () => {
  const mockProps = {
    title: "My Skills",
    subtitle: "Expertise and technologies I work with",
    animationRef: { current: null } as React.RefObject<HTMLDivElement>,
    animationClass: "animate-fade-in",
  };

  it("renders title and subtitle correctly", () => {
    render(<SkillsHeader {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.subtitle)).toBeInTheDocument();
  });

  it("applies animation class correctly", () => {
    render(<SkillsHeader {...mockProps} />);

    const container = screen.getByText(mockProps.title).closest("div");
    expect(container).toHaveClass("fly-in", mockProps.animationClass);
  });
});
