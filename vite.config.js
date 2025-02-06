import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/Pombo-RSS/',
  plugins: [
    svelte(), 
    VitePWA({ 
      registerType: 'autoUpdate', 
      injectRegister: 'auto' 
    })
  ],
})
