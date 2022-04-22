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
    VitePWA({}),
  ],
});
