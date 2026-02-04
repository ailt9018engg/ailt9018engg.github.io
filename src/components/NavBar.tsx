import React from 'react';

type NavProps = {
  current: string;
  onNavigate: (path: string) => void;
};

export default function NavBar({ current, onNavigate }: NavProps) {
  const link = (path: string, label: string) => (
    <a
      href={path}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(path);
      }}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        current === path ? 'bg-purple-100 text-purple-700' : 'text-slate-700 hover:text-purple-600'
      }`}
    >
      {label}
    </a>
  );

  return (
    <header className="bg-white border-b border-slate-200 fixed inset-x-0 top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="text-lg font-bold text-slate-800"
            >
              AILT9018
            </a>
            <nav className="hidden md:flex items-center space-x-2">
              {link('/', 'Home')}
              {link('/schedule', 'Schedule')}
              {link('/readings', 'Readings')}
              {link('/contact', 'Contact')}
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href={`https://ailt9018engg.github.io`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-purple-600"
            >
              Course site
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
