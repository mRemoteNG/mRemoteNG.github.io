import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');
const config = {
  kit: {
    adapter: adapter({
      fallback: '200.html' // or 'index.html'
    }),
    inlineStyleThreshold: 0, // Disables all inline styles
    paths: {
      base: dev ? '' : '/mRemoteNG.github.io' // replace with your actual repo name
    },
    appDir: 'app' // avoids issues with GitHub Pages and underscores
  },
  preprocess: vitePreprocess()
};

export default config;