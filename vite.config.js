import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Esto es importante para las rutas de react-router-dom
  base: '/',
})
