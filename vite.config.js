import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/fylo-data-storage-component-master/',
  plugins: [
    tailwindcss(),
  ],

})