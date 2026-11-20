import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'community-production-client',
      transformIndexHtml: {
        order: 'pre',
        handler() {
          return [
            {
              tag: 'style',
              children: '#main{visibility:hidden}',
              injectTo: 'head',
            },
            {
              tag: 'script',
              attrs: { type: 'module', src: '/src/community-production.js' },
              injectTo: 'body',
            },
          ];
        },
      },
    },
  ],
  base: '/community/',
  build: { target: 'esnext', outDir: '../community', emptyOutDir: true },
  server: { port: 5173 },
});
