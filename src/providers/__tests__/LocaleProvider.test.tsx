import React from 'react';
import { render, screen } from '@testing-library/react';
import { LocaleProvider, useLocale } from '../LocaleProvider';

// Mock for localStorage
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

// Mock for window.location.reload
const mockReload = jest.fn();
Object.defineProperty(window, 'location', {
  value: { reload: mockReload },
  writable: true,
});

// Mock navigator
Object.defineProperty(window, 'navigator', {
  value: {
    language: 'en',
  },
  writable: true,
});

// Test component that uses the locale context
const TestComponent = () => {
  const { locale, setLocale } = useLocale();
  
  return (
    <div>
      <div data-testid="locale-value">{locale}</div>
      <button data-testid="set-en" onClick={() => setLocale('en')}>
        Set English
      </button>
      <button data-testid="set-de" onClick={() => setLocale('de')}>
        Set German
      </button>
    </div>
  );
};

describe('LocaleProvider', () => {
  beforeEach(() => {
    localStorageMock.clear();
    mockReload.mockClear();
  });
  
  it('provides default locale when no preference is set', () => {
    render(
      <LocaleProvider>
        <TestComponent />
      </LocaleProvider>
    );
    
    expect(screen.getByTestId('locale-value').textContent).toBe('en');
  });
  
  it('uses locale from localStorage if available', () => {
    localStorageMock.setItem('locale', 'de');
    
    render(
      <LocaleProvider>
        <TestComponent />
      </LocaleProvider>
    );
    
    expect(screen.getByTestId('locale-value').textContent).toBe('de');
  });
  
  it('detects browser language if no localStorage preference', () => {
    // Mock German browser language
    Object.defineProperty(window, 'navigator', {
      value: { language: 'de-DE' },
      writable: true,
    });
    
    render(
      <LocaleProvider>
        <TestComponent />
      </LocaleProvider>
    );
    
    expect(screen.getByTestId('locale-value').textContent).toBe('de');
    expect(localStorageMock.getItem('locale')).toBe('de');
    
    // Reset navigator
    Object.defineProperty(window, 'navigator', {
      value: { language: 'en' },
      writable: true,
    });
  });
  
  it('uses default locale for unsupported browser languages', () => {
    // Mock unsupported language
    Object.defineProperty(window, 'navigator', {
      value: { language: 'fr-FR' },
      writable: true,
    });
    
    render(
      <LocaleProvider>
        <TestComponent />
      </LocaleProvider>
    );
    
    expect(screen.getByTestId('locale-value').textContent).toBe('en');
    expect(localStorageMock.getItem('locale')).toBe('en');
    
    // Reset navigator
    Object.defineProperty(window, 'navigator', {
      value: { language: 'en' },
      writable: true,
    });
  });
});