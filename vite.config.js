import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          router: ['react-router-dom'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  css: {
    devSourcemap: true,
  }
})
