import { render, screen } from "@testing-library/react";
import SkillsPage from "../page";

// Mock components
jest.mock("@/components/skills/SkillsHeader", () => {
  return function MockSkillsHeader() {
    return <div data-testid="skills-header">Skills Header</div>;
  };
});

jest.mock("@/components/skills/SkillsIntro", () => {
  return function MockSkillsIntro() {
    return <div data-testid="skills-intro">Skills Intro</div>;
  };
});

jest.mock("@/components/skills/SkillCategory", () => {
  return function MockSkillCategory({ id }: { id: string }) {
    return <div data-testid={`skill-category-${id}`}>Skill Category: {id}</div>;
  };
});

jest.mock("@/components/skills/ExperienceStats", () => {
  return function MockExperienceStats() {
    return <div data-testid="experience-stats">Experience Stats</div>;
  };
});

jest.mock("@/components/skills/SkillsCallToAction", () => {
  return function MockSkillsCallToAction() {
    return <div data-testid="skills-cta">Call to Action</div>;
  };
});

// Mock Section and ParallaxSection
jest.mock("@/components/Section", () => {
  return function MockSection({ children }: { children: React.ReactNode }) {
    return <div data-testid="section">{children}</div>;
  };
});

jest.mock("@/components/ParallaxSection", () => {
  return function MockParallaxSection({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div data-testid="parallax-section">{children}</div>;
  };
});

// Mock hooks
jest.mock("@/hooks/useAnimateOnScroll", () => {
  return () => ({
    ref: { current: null },
    animationClass: "mock-animation",
  });
});

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

describe("SkillsPage", () => {
  it("renders all section components", () => {
    render(<SkillsPage />);

    // Check for all major sections
    expect(screen.getByTestId("skills-header")).toBeInTheDocument();
    expect(screen.getByTestId("skills-intro")).toBeInTheDocument();
    expect(screen.getByTestId("skill-category-frontend")).toBeInTheDocument();
    expect(screen.getByTestId("skill-category-backend")).toBeInTheDocument();
    expect(screen.getByTestId("skill-category-database")).toBeInTheDocument();
    expect(screen.getByTestId("skill-category-devops")).toBeInTheDocument();
    expect(screen.getByTestId("skill-category-tools")).toBeInTheDocument();
    expect(screen.getByTestId("experience-stats")).toBeInTheDocument();
    expect(screen.getByTestId("skills-cta")).toBeInTheDocument();
  });
});
