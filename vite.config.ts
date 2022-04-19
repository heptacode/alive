import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import viteComponents, { VuetifyResolver } from 'vite-plugin-components';

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'build'),
  },
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
  ],
});
