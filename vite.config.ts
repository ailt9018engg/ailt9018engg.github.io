import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  base: '/', // important for GitHub Pages project site
  build: {
    outDir: 'dist'
  }
});
