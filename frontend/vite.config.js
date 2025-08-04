import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      // Для импорта без суффикса ?react
      svgrOptions: { exportType: 'default', ref: true },
      include: '**/*.svg',
    }),
  ],
});
