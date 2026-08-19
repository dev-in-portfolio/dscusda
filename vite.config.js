import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        workflow: resolve(__dirname, 'how-it-works.html'),
        request: resolve(__dirname, 'request-sampling.html'),
        prepare: resolve(__dirname, 'prepare.html'),
        credentials: resolve(__dirname, 'credentials.html'),
        coverage: resolve(__dirname, 'coverage.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
