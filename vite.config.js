import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        ws: false // Explicitly prevent WebSockets from being proxied to the Java backend
      }
    }
  },
  legacy: {
    skipWebSocketTokenCheck: true // Fixes Vite HMR WebSocket 400 token validation error
  }
})
