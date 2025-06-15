import { defineConfig } from 'vitest/config'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
