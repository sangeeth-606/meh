import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Set this to '/' since you're using a custom domain
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
