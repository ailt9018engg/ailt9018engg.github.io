import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import App from './App';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Readings from './pages/Readings';

function routeFromPath() {
  const p = window.location.pathname;
  if (p.startsWith('/schedule')) return '/schedule';
  if (p.startsWith('/contact')) return '/contact';
  return '/';
}

export default function AppRouter() {
  const [route, setRoute] = useState(routeFromPath);

  useEffect(() => {
    const onPop = () => setRoute(routeFromPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) window.history.pushState({}, '', path);
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
