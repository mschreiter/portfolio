"use client";

import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullHeight?: boolean;
}

const Section = ({ id, className = '', children, fullHeight = false }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-16 w-full ${fullHeight ? 'min-h-screen' : ''} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;