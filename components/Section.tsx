
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
