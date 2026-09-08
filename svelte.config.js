import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  kit: {
    adapter: adapter({
      fallback: '200.html'
    }),
    inlineStyleThreshold: 0,
    paths: {
      base: process.env.BASE_PATH || ''
    },
    appDir: 'app'
  },
  preprocess: vitePreprocess()
};

export default config;