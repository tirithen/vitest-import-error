import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    target: 'es2022'
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2022'
    }
  }
});
