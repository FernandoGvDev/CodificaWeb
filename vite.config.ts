import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vitePrerender from 'vite-plugin-prerender';

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.resolve(__dirname, 'dist'), // pasta do build
      routes: ['/', '/Servicos', '/Sites', '/Sistemas'],
      captureAfterDocumentEvent: 'render-event', // ✅ correto
    }),
  ],
});
