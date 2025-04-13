import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LocaleProvider } from "@/providers/LocaleProvider";

// Mock all the header components
jest.mock("../header/Logo", () => {
  return function MockLogo() {
    return <div data-testid="logo">Max Schreiter</div>;
  };
});

jest.mock("../header/Navigation", () => {
  return function MockNavigation() {
    return <nav data-testid="navigation">Navigation</nav>;
  };
});

jest.mock("../header/ThemeToggle", () => {
  const MockThemeToggle = ({ isMobile }: { isMobile?: boolean }) => {
    return (
      <button
        data-testid={isMobile ? "mobile-theme-toggle" : "desktop-theme-toggle"}
      >
        Theme
      </button>
    );
  };
  return MockThemeToggle;
});

jest.mock("../header/LanguageSelector", () => {
  const MockLanguageSelector = ({
    isMobile,
    onClose,
  }: {
    isMobile?: boolean;
    onClose?: () => void;
  }) => {
    return (
      <div>
        <button
          data-testid={
            isMobile ? "mobile-language-selector" : "desktop-language-selector"
          }
          onClick={onClose}
        >
          Language
        </button>
      </div>
    );
  };
  return MockLanguageSelector;
});

jest.mock("../header/MobileMenuButton", () => {
  const MockMobileMenuButton = ({
    isOpen,
    onClick,
  }: {
    isOpen: boolean;
    onClick: () => void;
  }) => {
    return (
      <button data-testid="mobile-menu-button" onClick={onClick}>
        {isOpen ? "Close" : "Menu"}
      </button>
    );
  };
  return MockMobileMenuButton;
});

jest.mock("../header/MobileMenu", () => {
  const MockMobileMenu = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {
    if (!isOpen) return null;
    return (
      <div data-testid="mobile-menu">
        <button onClick={onClose}>Close Menu</button>
      </div>
    );
  };
  return MockMobileMenu;
});

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("Header", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.clear();
  });

  const renderHeader = () => {
    return render(
      <ThemeProvider>
        <LocaleProvider>
          <Header />
        </LocaleProvider>
      </ThemeProvider>,
    );
  };

  it("renders all components", () => {
    renderHeader();

    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("desktop-theme-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("desktop-language-selector")).toBeInTheDocument();
    expect(screen.getByTestId("mobile-theme-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("mobile-language-selector")).toBeInTheDocument();
    expect(screen.getByTestId("mobile-menu-button")).toBeInTheDocument();
  });

  it("toggles mobile menu when menu button is clicked", () => {
    renderHeader();

    // Mobile menu should be closed initially
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    // Click the menu button to open
    fireEvent.click(screen.getByTestId("mobile-menu-button"));
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();

    // Click the menu button again to close
    fireEvent.click(screen.getByTestId("mobile-menu-button"));
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });

  it("closes mobile menu when language is selected", () => {
    renderHeader();

    // Open mobile menu
    fireEvent.click(screen.getByTestId("mobile-menu-button"));
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();

    // Trigger language selection (this should close menus)
    fireEvent.click(screen.getByTestId("mobile-language-selector"));

    // Check that mobile menu is closed
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });
});
