import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../page';

// Mock the translations
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      'hero.greeting': 'Hi, I\'m',
      'hero.name': 'Maximilian Schreiter',
      'hero.title': 'Full-Stack Developer & AI Enthusiast',
      'hero.description': 'I create engaging web experiences with modern technologies.',
      'hero.cta': 'View My Work',
      'about.title': 'About Me',
      'about.description': 'Software engineer with a passion for creating elegant solutions.',
      'about.button': 'Learn More',
      'skills.title': 'My Skills',
      'skills.description': 'I specialize in full-stack development.',
      'skills.cta': 'See All Skills',
      'contact.title': 'Let\'s Connect',
      'contact.description': 'Interested in working together?',
      'contact.button': 'Contact Me'
    };
    
    // Simple lookup in translations object
    return translations[key] || key;
  }
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ src, alt, width, height, className }: Record<string, unknown>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img 
      src={src as string} 
      alt={alt as string} 
      width={width as number} 
      height={height as number} 
      className={className as string}
      data-testid="mock-image"
    />
  ),
}));

// Mock components
jest.mock('@/components/Section', () => ({
  __esModule: true,
  default: ({ 
    id, 
    children, 
    className 
  }: { 
    id: string; 
    children: React.ReactNode; 
    className?: string 
  }) => (
    <section id={id} className={className} data-testid={`section-${id}`}>
      {children}
    </section>
  ),
}));

jest.mock('@/components/Button', () => ({
  __esModule: true,
  default: ({ 
    children, 
    href, 
    variant 
  }: { 
    children: React.ReactNode; 
    href?: string; 
    variant?: string 
  }) => (
    <a href={href} className={variant} data-testid="button">
      {children}
    </a>
  ),
}));

jest.mock('@/components/SkillCard', () => ({
  __esModule: true,
  default: ({ 
    title, 
    icon, 
    skills 
  }: { 
    title: string; 
    icon: React.ReactNode; 
    skills: string[] 
  }) => (
    <div data-testid={`skill-card-${title}`}>
      {icon}
      <h3>{title}</h3>
      <ul>
        {skills.map((skill: string, i: number) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  ),
}));

jest.mock('@/components/icons/SkillIcons', () => ({
  FrontendIcon: () => <span data-testid="icon-frontend">FrontendIcon</span>,
  BackendIcon: () => <span data-testid="icon-backend">BackendIcon</span>,
  DatabaseIcon: () => <span data-testid="icon-database">DatabaseIcon</span>,
  DevOpsIcon: () => <span data-testid="icon-devops">DevOpsIcon</span>,
  ToolsIcon: () => <span data-testid="icon-tools">ToolsIcon</span>,
}));

// Mock useEffect to avoid animations
jest.spyOn(React, 'useEffect').mockImplementation(f => f());

describe('HomePage', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });

  it('renders hero section with name and title', () => {
    render(<HomePage />);
    
    expect(screen.getByText('Maximilian Schreiter')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Developer & AI Enthusiast')).toBeInTheDocument();
    expect(screen.getByTestId('section-hero')).toBeInTheDocument();
  });

  it('renders about section', () => {
    render(<HomePage />);
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByTestId('section-about')).toBeInTheDocument();
  });

  it('renders skills section with skill cards', () => {
    render(<HomePage />);
    
    expect(screen.getByText('My Skills')).toBeInTheDocument();
    expect(screen.getByTestId('section-skills')).toBeInTheDocument();
    
    expect(screen.getByTestId('skill-card-Frontend')).toBeInTheDocument();
    expect(screen.getByTestId('skill-card-Backend')).toBeInTheDocument();
    expect(screen.getByTestId('skill-card-Databases')).toBeInTheDocument();
    expect(screen.getByTestId('skill-card-DevOps')).toBeInTheDocument();
    expect(screen.getByTestId('skill-card-Tools')).toBeInTheDocument();
  });

  it('renders contact section', () => {
    render(<HomePage />);
    
    expect(screen.getByText('Let\'s Connect')).toBeInTheDocument();
    expect(screen.getByTestId('section-contact')).toBeInTheDocument();
  });
});