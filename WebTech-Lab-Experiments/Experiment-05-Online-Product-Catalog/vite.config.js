import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true'
    ? '/FSD-LAB-EXP/WebTech-Lab-Experiments/Experiment-05-Online-Product-Catalog/'
    : '/',
  plugins: [react()],
});
