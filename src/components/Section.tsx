
import React from 'react';

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ title, id, children, className = '' }: SectionProps) => (
  <section id={id} className={`py-12 sm:py-16 border-t border-slate-200 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-10">
        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-transparent bg-clip-text">
          {title}
        </span>
      </h2>
      <div className="text-lg text-slate-700 space-y-6 leading-relaxed">
        {children}
      </div>
    </div>
  </section>
);
