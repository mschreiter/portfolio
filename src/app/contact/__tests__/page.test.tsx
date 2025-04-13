import { render, screen } from "@testing-library/react";
import ContactPage from "../page";
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

describe("ContactPage", () => {
  it("renders the contact page with work in progress content", () => {
    render(
      <NextIntlClientProvider locale="en" messages={{}}>
        <ContactPage />
      </NextIntlClientProvider>,
    );

    expect(screen.getByText("contact")).toBeInTheDocument();
    expect(screen.getByText("Work in Progress")).toBeInTheDocument();
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("My Skills")).toBeInTheDocument();
  });
});
