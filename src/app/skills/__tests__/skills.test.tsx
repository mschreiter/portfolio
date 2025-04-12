import { render, screen } from "@testing-library/react";
import SkillsPage from "../page";
import messages from "../../../../messages/en.json";

// Mock the translations
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getNestedValue = (obj: any, path: string) => {
      return path.split(".").reduce((prev, curr) => {
        return prev && prev[curr] ? prev[curr] : path;
      }, obj);
    };

    // Use the messages from the en.json file
    return getNestedValue(messages.SkillsPage, key) || key;
  },
}));

// Mock the useAnimateOnScroll hook
jest.mock("@/hooks/useAnimateOnScroll", () => {
  return jest.fn().mockImplementation(() => {
    return {
      ref: { current: null },
      isVisible: true,
      animationClass: "test-animation-class",
    };
  });
});

// Mock the next/image component
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
  }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={props.src} alt={props.alt || ""} />;
  },
}));

describe("Skills Page", () => {
  beforeAll(() => {
    // Mock IntersectionObserver
    Object.defineProperty(window, "IntersectionObserver", {
      writable: true,
      configurable: true,
      value: jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      })),
    });
  });

  beforeEach(() => {
    render(<SkillsPage />);
  });

  it("renders the main heading", () => {
    expect(
      screen.getByRole("heading", { name: /skills & expertise/i }),
    ).toBeInTheDocument();
  });

  it("renders all skill sections", () => {
    expect(
      screen.getByRole("heading", { name: /frontend development/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /backend development/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /database technologies/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /devops & deployment/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /tools & testing/i }),
    ).toBeInTheDocument();
  });

  it("renders the skill technologies", () => {
    // Frontend technologies
    const reactElements = screen.getAllByText(/react/i);
    expect(reactElements.length).toBeGreaterThan(0);

    const nextjsElements = screen.getAllByText(/next\.js/i);
    expect(nextjsElements.length).toBeGreaterThan(0);

    const angularElements = screen.getAllByText(/angular/i);
    expect(angularElements.length).toBeGreaterThan(0);

    // Backend technologies
    const nodeElements = screen.getAllByText(/node\.js/i);
    expect(nodeElements.length).toBeGreaterThan(0);

    const bunElements = screen.getAllByText(/bun/i);
    expect(bunElements.length).toBeGreaterThan(0);

    // Database technologies
    const postgresElements = screen.getAllByText(/postgresql/i);
    expect(postgresElements.length).toBeGreaterThan(0);

    const mongodbElements = screen.getAllByText(/mongodb/i);
    expect(mongodbElements.length).toBeGreaterThan(0);
  });

  it("renders the experience stats section", () => {
    expect(
      screen.getByRole("heading", { name: /experience at a glance/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/2\+/)).toBeInTheDocument();
    expect(screen.getByText(/years experience/i)).toBeInTheDocument();
    expect(screen.getByText(/15\+/)).toBeInTheDocument();
    expect(screen.getByText(/projects completed/i)).toBeInTheDocument();
  });

  it("renders the call to action section", () => {
    expect(
      screen.getByRole("heading", {
        name: /ready to start a project together\?/i,
      }),
    ).toBeInTheDocument();

    // Mock the Button component to use actual text instead of testId
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
    expect(screen.getByText("Learn More About Me")).toBeInTheDocument();
  });
});
