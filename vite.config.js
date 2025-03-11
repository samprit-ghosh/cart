import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(), // ✅ Added React plugin to avoid multiple React versions
    tailwindcss(),
  ],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'), // ✅ Ensure single React version
      'react-dom': path.resolve('./node_modules/react-dom'),
      '@emotion/react': path.resolve('./node_modules/@emotion/react'), // ✅ Avoid duplicate Emotion versions
      '@emotion/styled': path.resolve('./node_modules/@emotion/styled'),
    },
  },
});
