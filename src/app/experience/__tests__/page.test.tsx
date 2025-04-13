import { render, screen } from "@testing-library/react";
import ExperiencePage from "../page";
import { NextIntlClientProvider } from "next-intl";

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) =>
    children,
}));

// Mock hooks
jest.mock("@/hooks/useAnimateOnScroll", () => ({
  __esModule: true,
  default: () => ({
    ref: { current: null },
    animationClass: "animated",
  }),
}));

describe("ExperiencePage", () => {
  it("renders the experience page with work in progress content", () => {
    render(
      <NextIntlClientProvider locale="en" messages={{}}>
        <ExperiencePage />
      </NextIntlClientProvider>,
    );

    expect(screen.getByText("experience")).toBeInTheDocument();
    expect(screen.getByText("Work in Progress")).toBeInTheDocument();
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });
});
