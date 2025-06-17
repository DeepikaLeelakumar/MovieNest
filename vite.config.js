import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ Use './' for Netlify (relative path)
  plugins: [react()],
})
