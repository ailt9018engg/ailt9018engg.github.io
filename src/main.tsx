import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './AppRouter.tsx';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}
