import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LocaleProvider } from '@/providers/LocaleProvider';

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink'; // Add display name
  return MockLink;
});

// Mock next-intl
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
});

// Mock localstorage
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

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock window.location.reload
const mockReload = jest.fn();
Object.defineProperty(window, 'location', {
  value: { reload: mockReload },
  writable: true,
});

describe('Header', () => {
  beforeEach(() => {
    localStorageMock.clear();
    mockReload.mockClear();
  });
  
  const renderHeader = () => {
    return render(
      <ThemeProvider>
        <LocaleProvider>
          <Header />
        </LocaleProvider>
      </ThemeProvider>
    );
  };
  
  it('renders header with navigation links', () => {
    renderHeader();
    
    // Check that the logo/name is present
    expect(screen.getByText('Max Schreiter')).toBeInTheDocument();
    
    // Check that navigation links are present
    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('about')).toBeInTheDocument();
    expect(screen.getByText('skills')).toBeInTheDocument();
    expect(screen.getByText('experience')).toBeInTheDocument();
    expect(screen.getByText('contact')).toBeInTheDocument();
  });
  
  it('toggles mobile menu when burger icon is clicked', () => {
    renderHeader();
    
    // Check initial state - mobile menu div should not exist
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
    
    // Find and click the burger menu button using test ID
    const burgerButton = screen.getByTestId('mobile-menu-button');
    fireEvent.click(burgerButton);
    
    // Mobile menu should now exist in the document
    expect(screen.queryByTestId('mobile-menu')).toBeInTheDocument();
    
    // Click again to hide
    fireEvent.click(burgerButton);
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });
  
  it('toggles language menu when globe icon is clicked', () => {
    renderHeader();
    
    // Language menu should be hidden initially
    expect(screen.queryByTestId('language-menu')).not.toBeInTheDocument();
    
    // Find and click the desktop language toggle button
    const languageButton = screen.getByTestId('desktop-language-toggle');
    fireEvent.click(languageButton);
    
    // Language menu should now be visible
    expect(screen.queryByTestId('language-menu')).toBeInTheDocument();
    
    // Click again to hide
    fireEvent.click(languageButton);
    expect(screen.queryByTestId('language-menu')).not.toBeInTheDocument();
  });
  
  it('toggles mobile language menu when mobile globe icon is clicked', () => {
    renderHeader();
    
    // Mobile language menu should be hidden initially
    expect(screen.queryByTestId('language-menu-mobile')).not.toBeInTheDocument();
    
    // Find and click the mobile language toggle button
    const languageButton = screen.getByTestId('mobile-language-toggle');
    fireEvent.click(languageButton);
    
    // Mobile language menu should now be visible
    expect(screen.queryByTestId('language-menu-mobile')).toBeInTheDocument();
    
    // Click again to hide
    fireEvent.click(languageButton);
    expect(screen.queryByTestId('language-menu-mobile')).not.toBeInTheDocument();
  });
});