import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import viteComponents, { VuetifyResolver } from 'vite-plugin-components';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config
export default defineConfig({
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  plugins: [
    createVuePlugin(),
    viteComponents({
      customComponentResolvers: [VuetifyResolver()],
    }),
    VitePWA({
      registerType: 'prompt',
      manifest: {
        name: 'A: Live',
        short_name: 'A: Live',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#5E6081',
        start_url: '.',
        icons: [
          {
            src: './logo_16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: './logo_32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: './logo_48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: './logo_64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: './logo_128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: './logo_256.png',
            sizes: '256x256',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
