import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: "/Final-Project-Paradise-Nursery-Shopping-Application/",
  plugins: [react()],
  server: {
    port: 5173,
  },
});
