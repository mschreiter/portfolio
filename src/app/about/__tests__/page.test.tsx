import React from "react";
import { render, screen } from "@testing-library/react";
import AboutPage from "../page";

// Mock the translations
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      title: "About Me",
      subtitle:
        "Full-Stack Developer with a passion for building elegant solutions",
      "bio.title": "Who I Am",
      "bio.intro":
        "I'm a software engineer with {years} years of professional experience",
      "bio.motivation":
        "I'm passionate about creating software that solves real problems",
      "bio.approach": "My development approach emphasizes clean code",
      "bio.experienceBtn": "My Experience",
      "bio.contactBtn": "Contact Me",
      "experience.title": "Professional Experience",
      "experience.subtitle": "Where I've worked and what I've done",
      "experience.job.title": "Software Engineer",
      "experience.job.company": "Mid-sized Service Provider Company",
      "experience.job.period": "2022 - Present",
      "experience.job.description": "Working on full-stack web applications",
      "education.title": "Education",
      "education.subtitle": "My academic background",
      "education.degree.name": "Bachelor of Science in Computer Science",
      "education.degree.institution": "University Kassel, Germany",
      "education.degree.grade": "Grade: 2.1",
      "education.degree.period": "Graduated",
      "education.degree.description": "Core studies included algorithms",
      "cta.title": "Interested in My Skills?",
      "cta.description": "Check out my skills page",
      "cta.skillsBtn": "View My Skills",
      "cta.contactBtn": "Contact Me",
    };

    // Handle parameterized translations
    if (key === "bio.intro") {
      return translations[key].replace("{years}", "3");
    }

    return translations[key] || key;
  },
}));

// Mock custom hooks
jest.mock("@/hooks/useAnimateOnScroll", () => ({
  __esModule: true,
  default: () => ({
    ref: { current: null },
    isVisible: true,
    animationClass: "animate-test",
  }),
}));

// Mock components
jest.mock("@/components/Section", () => ({
  __esModule: true,
  default: ({
    id,
    children,
    className,
  }: {
    id: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <section id={id} data-testid={`section-${id}`} className={className}>
      {children}
    </section>
  ),
}));

jest.mock("@/components/ParallaxSection", () => ({
  __esModule: true,
  default: ({
    id,
    children,
    className,
  }: {
    id: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <section id={id} data-testid={`parallax-${id}`} className={className}>
      {children}
    </section>
  ),
}));

jest.mock("@/components/Button", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
    variant?: string;
  }) => (
    <a href={href} data-testid={`button-${href.replace(/[/#]/g, "")}`}>
      {children}
    </a>
  ),
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    sizes?: string;
    width?: number;
    height?: number;
    priority?: boolean;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={props.src} alt={props.alt || ""} data-testid="mock-image" />
  ),
}));

describe("AboutPage", () => {
  it("renders the intro section with correct title", () => {
    render(<AboutPage />);
    expect(screen.getByTestId("section-intro")).toBeInTheDocument();
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the bio section with profile image", () => {
    render(<AboutPage />);
    expect(screen.getByTestId("section-bio")).toBeInTheDocument();
    expect(screen.getByText("Who I Am")).toBeInTheDocument();
    expect(screen.getByTestId("mock-image")).toBeInTheDocument();
  });

  it("renders experience section with job information", () => {
    render(<AboutPage />);
    expect(screen.getByTestId("parallax-experience")).toBeInTheDocument();
    expect(screen.getByText("Professional Experience")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(
      screen.getByText("Mid-sized Service Provider Company"),
    ).toBeInTheDocument();
  });

  it("renders education section with degree information", () => {
    render(<AboutPage />);
    expect(screen.getByTestId("section-education")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(
      screen.getByText("Bachelor of Science in Computer Science"),
    ).toBeInTheDocument();
    expect(screen.getByText("University Kassel, Germany")).toBeInTheDocument();
  });

  it("renders CTA section with buttons", () => {
    render(<AboutPage />);
    expect(screen.getByTestId("parallax-cta")).toBeInTheDocument();
    expect(screen.getByText("Interested in My Skills?")).toBeInTheDocument();
    expect(screen.getByTestId("button-skills")).toBeInTheDocument();

    // Use getAllByTestId since we have multiple contact buttons
    const contactButtons = screen.getAllByTestId("button-contact");
    expect(contactButtons.length).toBeGreaterThanOrEqual(1);
  });

  it("calculates years of experience correctly", () => {
    render(<AboutPage />);

    // This checks that the placeholder {years} was replaced correctly
    expect(
      screen.getByText(
        /I'm a software engineer with \d+ years of professional experience/,
      ),
    ).toBeInTheDocument();
  });
});
