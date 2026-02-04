
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import App from './App';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Readings from './pages/Readings';

function routeFromPath() {
  // Read the route from the hash (e.g., '#/schedule')
  // If hash is empty, default to '/'
  const hash = window.location.hash;
  const p = hash.replace(/^#/, '') || '/'; 

  if (p.startsWith('/schedule')) return '/schedule';
  if (p.startsWith('/contact')) return '/contact';
  if (p.startsWith('/readings')) return '/readings'; // Added missing check
  return '/';
}

export default function AppRouter() {
  const [route, setRoute] = useState(routeFromPath);

  useEffect(() => {
    const onHashChange = () => setRoute(routeFromPath());
    // Listen for hash changes instead of popstate
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (path: string) => {
    // Update the hash directly. This automatically adds a history entry.
    window.location.hash = path;
    setRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let Content: React.ReactNode;
  if (route === '/schedule') Content = <Schedule />;
  else if (route === '/contact') Content = <Contact />;
  else if (route === '/readings') Content = <Readings />;
  else Content = <App />;

  return (
    <div>
      <NavBar current={route} onNavigate={navigate} />
      <div className="pt-16">{Content}</div>
    </div>
  );
}
