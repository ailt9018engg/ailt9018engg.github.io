import React, { useState } from 'react';

type NavProps = {
  current: string;
  onNavigate: (path: string) => void;
};

export default function NavBar({ current, onNavigate }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const link = (path: string, label: string, mobile = false) => (
    <a
      href={path}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(path);
        if (mobile) setMenuOpen(false);
      }}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
        current === path
          ? 'bg-purple-100 text-purple-700'
          : 'text-slate-700 hover:text-purple-600'
      }`}
    >
      {label}
    </a>
  );

  return (
    <header className="bg-white border-b border-slate-200 fixed inset-x-0 top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LEFT GROUP: Logo + AILT9018 + Desktop Nav */}
          <div className="flex items-center min-w-0">
            <img
              src="/images/HKU Engineering Logo Large.png"
              alt="HKU Faculty of Engineering"
              className="h-9 w-auto flex-shrink-0 mr-4"
            />
            <nav className="hidden md:flex items-center space-x-1">
              {link('/', 'Home')}
              {link('/schedule', 'Subclass & Module Details')}
              {link('/readings', 'Readings')}
              {link('/contact', 'About Us')}
            </nav>
          </div>

          {/* RIGHT GROUP: Course site + Hamburger */}
          <div className="flex items-center gap-2 ml-4">
            <a
              href="https://ailt9018.engg.hku.hk"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-sm text-slate-600 hover:text-purple-600 whitespace-nowrap"
            >
              Course site
            </a>
            <button
              className="md:hidden p-2 rounded-md text-slate-600 hover:text-purple-600 hover:bg-purple-50"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 flex flex-col gap-1 shadow-lg">
          {link('/', 'Home', true)}
          {link('/schedule', 'Subclass & Module Details', true)}
          {link('/readings', 'Readings', true)}
          {link('/contact', 'About Us', true)}
          <a
            href="https://ailt9018.engg.hku.hk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm text-slate-600 hover:text-purple-600"
          >
            Course site ↗
          </a>
        </div>
      )}
    </header>
  );
}