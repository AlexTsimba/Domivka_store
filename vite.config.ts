import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});

if (process.env.NODE_ENV === 'production') {
  ghPages.publish('dist', {
    branch: 'deploy',
    repo: 'git@github.com:AlexTsimba/React-ts-tailwind-boilerplate.git',
  });
}